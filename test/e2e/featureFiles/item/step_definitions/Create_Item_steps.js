var myStepDefinitionsWrapper = function () {

    var itemPage = require('../../../pages/item');
    var actionButtons = require('../../../pages/actionButtons');
    var settings = require('../../../common/settings');
    var commonlib = require('../../../common/commonLib');
    var breadCrumb = require('../../../pages/breadCrumb');
    var grid = require('../../../pages/grid');
    var sideBar = require('../../../pages/sideBar');
    var chai = require(settings.constants.CHAI);
    var assert = chai.assert;
    this.setDefaultTimeout(settings.config.STEPTIMEOUT);
    var expectedResultDictionary = {};

    this.Given(/^Create Item Office Screen$/, function (callback) {
        commonlib.open();
        itemPage.getItemLink().click().then(function () {
            actionButtons.getAddButton().click().then(function () {
                callback();
            });
        });
    });

    this.When(/^User set a long path for Merchandise hierarchy field using Tree picker$/, function (callback) {
        itemPage.getMasterCodeTextBox().clear().sendKeys('DummyCode').then(function () {
            actionButtons.getSetButton().click().then(function () {
                itemPage.getAllNodeArrows().then(function (elements) {
                    itemPage.getNodeItems().last().click().then(function (elements) {
                        actionButtons.getPopUpSetButton().click().then(function () {
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.When(/^User enters an existing code data in Master Code field$/, function (callback) {
        itemPage.getMasterCodeTextBox().sendKeys("Item A1006").then(function () {
            callback();
        });
    });

    this.Then(/^New Item will not be saved$/, function (callback) {
        commonlib.getPresenceOfNotification().then(function (result) {
            assert.isFalse(result);
            callback();
        });
    });

    this.Then(/^Error message will be displayed informing user that record with the same Master Code already exist$/, function (callback) {
        itemPage.getExistingErrorMessage().isEnabled().then(function (result) {
            assert.isTrue(result);
            itemPage.onCancel().click().then(function () {
                commonlib.waitForElement(commonlib.getNEPAlertYes()).then(function () {
                    commonlib.getNEPAlertYes().click().then(function () {
                        callback();
                    });
                });
            });
        });
    });

    this.When(/^User enters no data in Master Code or Short Description or Long Description fields$/, function (callback) {
        itemPage.getMasterCodeTextBox().sendKeys("").then(function () {
            itemPage.getShortDescriptionTextBox().sendKeys("").then(function () {
                itemPage.getLongDescriptionTextBox().sendKeys("").then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^Error message will be displayed informing user that Master Code or Short Description or Long Description is mandatory$/, function (callback) {
        itemPage.getMandatoryErrorMessage().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.When(/^User enters all the valid information in the required fields of create Item$/, function (callback) {
        var fieldToBeEntered = "code" + commonlib.getCurrentDateTimeString();
        itemPage.getMasterCodeTextBox().clear().sendKeys(fieldToBeEntered).then(function () {
            itemPage.getShortDescriptionTextBox().clear().sendKeys("title").then(function () {
                itemPage.getLongDescriptionTextBox().clear().sendKeys("description").then(function () {
                    actionButtons.getSetButton().click().then(function () {
                        itemPage.getAllNodeArrows().then(function (elements) {
                            itemPage.getNodeItems().last().click().then(function (elements) {
                                actionButtons.getPopUpSetButton().click().then(function () {
                                    callback();
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    this.Then(/^New Item will be saved$/, function (callback) {
        itemPage.onSuccess().getText().then(function () {
            callback();
        });
    });

    this.Then(/^Item screen will be displayed in Edit mode$/, function (callback) {
        itemPage.getGroupBreadCrumb().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^Item screen will be displayed in View mode$/, function (callback) {
        browser.getCurrentUrl().then(function (result) {
            assert.include(result.toLowerCase(), 'item/view');
            callback();
        });
    });

    this.Given(/^Create Item Screen$/, function (callback) {
        commonlib.open();
        itemPage.getItemLink().click().then(function () {
            actionButtons.getAddButton().click().then(function () {
                callback();
            });
        });
    });

    this.When(/^User navigate to Groups section$/, function (callback) {
        itemPage.getMasterCodeTextBox().clear().sendKeys('DummyCode').then(function () {
            itemPage.getGroupsLevelLink().click().then(function () {
                callback();
            });
        });
    });

    this.When(/^User verify the Combo\-box field in the Variant Group sub section$/, function (callback) {
        itemPage.getVariantGroupCombobox().first().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^The Combo\-box field will list down all the Variant Groups$/, function (callback) {
        itemPage.getVariantGroupCombobox().first().click().then(function (result) {
            itemPage.getVariantDropDownElements().count().then(function (result) {
                assert.isAbove(result, 0);
                callback();
            });
        });
    });

    this.Then(/^The combo\-box field will allow user to select only single Variant Group$/, function (callback) {
        itemPage.getVariantDropDownElements().get(0).click().then(function (result) {
            callback();
        });
    });

    this.Then(/^The selected Variant groups will be added as list to the 'Variant Groups' sub section$/, function (callback) {
        itemPage.getVariantGroupElements().isEnabled().then(function (result) {
            callback();
        });
    });

    this.Then(/^Will replace any existing Variant group added in the list$/, function (callback) {
        itemPage.getVariantGroupCombobox().first().click().then(function (result) {
            itemPage.getVariantDropDownElements().get(1).click().then(function (result) {
                itemPage.getVariantGroupElements().isEnabled().then(function (result) {
                    itemPage.onCancel().click().then(function () {
                        commonlib.waitForElement(commonlib.getNEPAlertYes()).then(function () {
                            commonlib.getNEPAlertYes().click().then(function () {
                                callback();
                            });
                        });
                    });
                });
            });
        });
    });

    this.When(/^User verify the Combo\-box field in the Item Groups sub section$/, function (callback) {
        itemPage.getItemGroupCombobox().first().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^The combo\-box field will allow user to select multiple value$/, function (callback) {
        itemPage.getItemGroupCombobox().first().click().then(function (result) {
            commonlib.waitForAllElements(itemPage.getItemDropDownElements()).then(function () {
                itemPage.getItemDropDownElements().get(0).click().then(function (result) {
                    itemPage.getItemDropDownElements().get(1).click().then(function (result) {
                        callback();
                    });
                });
            });
        });
    });

    this.Then(/^The combo box field will have action buttons 'Cancel' and 'Ok'$/, function (callback) {
        itemPage.getItemGroupAddButton().first().isEnabled().then(function (result) {
            assert.equal(result, true);
            itemPage.getItemGroupCancelButton().first().isEnabled().then(function (result) {
                assert.equal(result, true);
                callback();
            });
        });
    });

    this.Then(/^All the selected Item groups will be added as list to the 'Item Groups' sub section on clicking 'Ok' button from combo\-box$/, function (callback) {
        itemPage.getItemGroupAddButton().click().then(function (result) {
            itemPage.getItemGroupElements().isEnabled().then(function (result) {
                callback();
            });
        });
    });

    this.When(/^User type search text in Combo\-box field in the Item Groups sub section$/, function (callback) {
        itemPage.getItemGroupCombobox().first().sendKeys("1001").then(function (result) {
            callback();
        });
    });

    this.Then(/^The combo\-box field will display list of matching records$/, function (callback) {
        itemPage.getItemDropDownElements().count().then(function (result) {
            assert.isAbove(result, 0);
            callback();
        });
    });

    this.Then(/^User will be able to select multiple records and Click 'Ok' button$/, function (callback) {
        itemPage.getItemDropDownElements().get(0).click().then(function (result) {
            itemPage.getItemDropDownElements().get(1).click().then(function (result) {
                itemPage.getItemGroupAddButton().click().then(function (result) {
                    callback();
                });
            });
        });
    });

    this.Then(/^All the selected Item groups will be added as list to the 'Item Groups' sub section$/, function (callback) {
        itemPage.getItemGroupElements().isEnabled().then(function (result) {
            callback();
        });
    });

    this.Then(/^On click will navigate to Merchandise Hierarchy view screen for that particular node$/, function (callback) {
        itemPage.getPathElement().click().then(function () {
            itemPage.getGroupBreadCrumb().isEnabled().then(function (result) {
                assert.isTrue(result);
                itemPage.onCancel().click().then(function () {
                    commonlib.waitForElement(commonlib.getNEPAlertYes()).then(function () {
                        commonlib.getNEPAlertYes().click().then(function () {
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.Given(/^Create Item Office screen$/, function (callback) {
        commonlib.open();
        itemPage.getItemLink().click().then(function () {
            actionButtons.getAddButton().click().then(function () {
                callback();
            });
        });
    });

    this.Then(/^The node under mouse over will clickable$/, function (callback) {
        var result = commonlib.checkElementIsClickable(itemPage.getMerchandisehierarchyMouseClick());
        assert.isTrue(result);
        callback();
    });

    this.When(/^User navigate to Attribute section$/, function (callback) {
        itemPage.getGroupsLevelLink().click().then(function () {
            callback();
        });
    });

    this.Then(/^User will be able to type attribute name in attribute drop down field$/, function (callback) {
        itemPage.getAttributeGroupCombobox().sendKeys("DA").then(function (result) {
            callback();
        });
    });

    this.Then(/^Flat list with matching value will be shown$/, function (callback) {
        itemPage.getAttributeDropDownElements().count().then(function (result) {
            assert.isAbove(result, 0);
            itemPage.onCancel().click().then(function () {
                commonlib.waitForElement(commonlib.getNEPAlertYes()).then(function () {
                    commonlib.getNEPAlertYes().click().then(function () {
                        callback();
                    });
                });
            });
        });
    });

    this.Then(/^Breadcrumb will display Catalog > Items > Item Short description>$/, function (callback) {
        breadCrumb.getBreadCrumbText().then(function (breadCrumbText) {
            breadCrumb.getBreadCrumbPageTitle().getText().then(function (result) {
                assert.equal('Catalog>Items>' + result, breadCrumbText.replace('-', '') + '>' + result);
                callback();
            });
        });
    });
};
module.exports = myStepDefinitionsWrapper;