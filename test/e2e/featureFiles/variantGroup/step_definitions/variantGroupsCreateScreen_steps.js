var myStepDefinitionsWrapper = function () {

    var variantGroupPage = require('../../../pages/variantGroup');
    var actionButtons = require('../../../pages/actionButtons');
    var chai = require('chai');
    var assert = chai.assert;
    var dynamicAttr = require('../../../pages/dynamicAttribute');
    var breadCrumb = require('../../../pages/breadCrumb');
    var commonlib = require('../../../common/commonLib');
    var settings = require('../../../common/settings');
    var grid = require('../../../pages/grid');

    this.Given(/^Add Variant Group Office Screen$/, function (callback) {
        commonlib.open();
        variantGroupPage.getVariantGroupLink().click().then(function () {
            actionButtons.getAddButton().click().then(function () {
                callback();
            });
        });
    });

    this.Then(/^Floating menu will be available on the screen with 'Variant Group Details' and 'Items' entries$/, function (callback) {
        callback.pending();
    });

    this.When(/^User click on 'Variant Group Details' from the floating menu$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Screen focus should move to 'Variant Group Details' section$/, function (callback) {
        callback.pending();
    });

    this.When(/^User type into Variant Group Title field$/, function (callback) {
        variantGroupPage.getTitleTextBox().sendKeys("title for following code").then(function () {
            callback();
        })
    });

    this.Then(/^Variant Group Title field will size dynamically \(expand vertically\) to accommodate user input$/, function (callback) {
        callback();
    });

    this.When(/^User type into Variant Group Description field$/, function (callback) {
        variantGroupPage.getDescriptionTextBox().sendKeys("description for following code, description for following code, description for following code, description for following code, description for following code, description for following code, description for following code, description for following code").then(function () {
            callback();
        })
    });

    this.Then(/^Variant Group Description field will size dynamically \(expand vertically\) to accommodate user input$/, function (callback) {
        callback();
    });

    this.Given(/^Add Variant Group Office Screen for a Variant Group when no items are associated to the Variant Group$/, function (callback) {
        commonlib.open();
        variantGroupPage.getVariantGroupLink().click().then(function () {
            actionButtons.getAddButton().click().then(function () {
                callback();
            });
        });
    });

    this.Given(/^Add Variant Group Office Screen for a Variant Group when items are associated to the Variant Group$/, function (callback) {
        commonlib.open();
        variantGroupPage.getVariantGroupLink().click().then(function () {
            actionButtons.getAddButton().click().then(function () {
                variantGroupPage.getCodeTextBox().clear().sendKeys('DummyCode').then(function(){
                    variantGroupPage.getAddItemsButton().click().then(function () {
                        callback();
                    });
                });
            });
        });
    });

    this.Given(/^Add Variant Group Office Screen when items are associated to the Variant Group$/, function (callback) {
        commonlib.open();
        variantGroupPage.getVariantGroupLink().click().then(function () {
            actionButtons.getAddButton().click().then(function () {
                variantGroupPage.getCodeTextBox().clear().sendKeys('DummyCode').then(function(){
                    variantGroupPage.getAddItemsButton().click().then(function () {
                        callback();
                    });
                });
            });
        });
    });

    this.Given(/^Add Variant Group Office Screen for Variant Group when items are associated to the Variant Group$/, function (callback) {
        commonlib.open();
        variantGroupPage.getVariantGroupLink().click().then(function () {
            actionButtons.getAddButton().click().then(function () {
                variantGroupPage.getAddItemsButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^User will be navigated to respective Item screen in View mode\.$/, function (callback) {
        variantGroupPage.getGroupBreadCrumb().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^New Variant Group will be saved$/, function (callback) {
        callback();
    });

    this.Then(/^Variant Group screen will be displayed in Edit mode$/, function (callback) {
        variantGroupPage.getGroupBreadCrumb().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^Variant Group screen will be displayed in View mode$/, function (callback) {
        browser.getCurrentUrl().then(function (result) {
            assert.include(result.toLowerCase(), 'variantgroup/view');
            callback();
        });
    });

    this.Then(/^New Variant Group will not be saved$/, function (callback) {
        callback();
    });

    this.Then(/^User will stay on Add Variant Group office screen\.$/, function (callback) {
        variantGroupPage.getCodeTextBox().getText().then(function (newText) {
            assert.isNotNull(newText);
            callback();
        });
    });

    this.Then(/^User will navigate back to Variant Group Office screen$/, function (callback) {
        browser.getCurrentUrl().then(function (result) {
            assert.notInclude(result.toLowerCase(), 'variantgroup/edit');
            callback();
        });
    });

    this.Then(/^New Variant Group will not be created$/, function (callback) {
        commonlib.getPresenceOfNotification().then(function (result) {
            assert.isFalse(result);
            callback();
        });
    });

    this.Then(/^Breadcrumb path will be Catalog \-> Variant Groups > New Variant Group$/, function (callback) {
        breadCrumb.getBreadCrumbText().then(function (breadCrumbText) {
            breadCrumb.getBreadCrumbPageTitle().getText().then(function (result) {
                assert.equal('Catalog>Variant Groups>New Variant Group', breadCrumbText.replace('-', '') + '>' + result);
                callback();
            });
        });
    });

    this.Then(/^breadcrumb will display  Catalog > Variant Groups > 'Variant Group title'$/, function (callback) {
        breadCrumb.getBreadCrumbText().then(function (breadCrumbText) {
            breadCrumb.getBreadCrumbPageTitle().getText().then(function (result) {
                assert.equal('Catalog>Variant Groups>' + result, breadCrumbText.replace('-', '') + '>' + result);
                callback();
            });
        });
    });

    this.Then(/^breadcrumb will display  Catalog > Variant Groups > 'Variant Group Title \- Edit'$/, function (callback) {
        breadCrumb.getBreadCrumbPageTitle().getText().then(function (result) {
            assert.isTrue(result.substring(0, result.indexOf("- Edit")).length > 0);
            callback();
        });
    });

    this.Then(/^Notification will be displayed to user that the Record was saved Successfully$/, function (callback) {
        variantGroupPage.getVariantGroupSavedNotification().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^Error message will be displayed informing user that record with the same Code already Exist$/, function (callback) {
        variantGroupPage.getSameCodeErrorMessage().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^'Code' field will be Mandatory Field$/, function (callback) {
        variantGroupPage.getCodeHeading().getInnerHtml().then(function (result) {
            assert.include(result.toLowerCase(), 'mandatory');
            callback();
        });
    });

    this.Then(/^As user type into the Code field, the text will Shift to left allow user input$/, function (callback) {
        callback();
    });

    this.Then(/^User will be not be able to type into the field more that Maximum allowed size for the field$/, function (callback) {
        var x = "a".repeat(66);
        variantGroupPage.getCodeTextBox().clear().sendKeys(x);
        variantGroupPage.getCodeTextBox().getAttribute(settings.constants.VALUE).then(function (text) {
            assert.equal(text.length, 64)
            callback();
        })

    });

    this.Then(/^User will not be allowed to type further when maximum allowed size for Title field has been reached$/, function (callback) {
        var x = "a".repeat(66);
        variantGroupPage.getTitleTextBox().clear().sendKeys(x);
        variantGroupPage.getTitleTextBox().getAttribute(settings.constants.VALUE).then(function (text) {
            assert.equal(text.length, 64)
            callback();
        })
    });

    this.Then(/^User will not be allowed to type further when maximum allowed size for Description field has been reached$/, function (callback) {
        var x = "a".repeat(257);
        variantGroupPage.getDescriptionTextBox().clear().sendKeys(x);
        variantGroupPage.getDescriptionTextBox().getAttribute(settings.constants.VALUE).then(function (text) {
            assert.equal(text.length, 256)
            callback();
        })
    });

    this.Then(/^Message will be displayed informing user that maximum allowed size for Description field has been reached$/, function (callback) {
        variantGroupPage.getDescriptionValidationMessage().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^User will be able to sort on each column in the Grid$/, function (callback) {
        callback.pending();
    });

    this.When(/^User click on Code value for an item from the grid in Items section in variant group screen$/, function (callback) {
        variantGroupPage.getFirstElement().click().then(function () {
            callback();
        });
    });

    this.Then(/^Error message for Variant Group will be displayed informing user that Code is mandatory$/, function (callback) {
        variantGroupPage.getMandatoryErrorMessages().first().isDisplayed().then(function (result) {
            assert.isTrue(result);
            variantGroupPage.onCancel().click().then(function () {
                commonlib.waitForElement(commonlib.getNEPAlertYes()).then(function () {
                    commonlib.getNEPAlertYes().click().then(function () {
                        callback();
                    });
                });
            });
        });
    });

    this.When(/^User enters no data in Code field in Variant Group screen$/, function (callback) {
        variantGroupPage.getCodeTextBox().clear().sendKeys("").then(function () {
            callback();
        });
    });

    this.Then(/^Message will be displayed informing user that maximum allowed size has been reached for title$/, function (callback) {
        variantGroupPage.getValidationTitleMessage().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^Error message for Variant Group will be displayed informing user that Required Fields are mandatory$/, function (callback) {
        variantGroupPage.getCodeRequiredFieldErrorMessage().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.When(/^User enters no data in Code field or Title Field or Description Field in Variant Group screen$/, function (callback) {
        variantGroupPage.getCodeTextBox().clear().sendKeys('');
        variantGroupPage.getTitleTextBox().clear().sendKeys('');
        variantGroupPage.getDescriptionTextBox().clear().sendKeys('');
        callback();
    });

    this.Then(/^User will be able to filter records on each Column in the grid$/, function (callback) {
        variantGroupPage.getFilterIcon().click().then(function () {
            variantGroupPage.getSearchBoxes().count().then(function (length) {
                assert.isAbove(length, 0);
                variantGroupPage.onCancel().click().then(function () {
                    commonlib.waitForElement(commonlib.getNEPAlertYes()).then(function () {
                        commonlib.getNEPAlertYes().click().then(function () {
                            callback();
                        });
                    });
                });
            });
        });
    });
};
module.exports = myStepDefinitionsWrapper;