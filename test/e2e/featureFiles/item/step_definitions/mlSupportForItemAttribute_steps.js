var myStepDefinitionsWrapper = function () {

    var itemPage = require('../../../pages/item');
    var actionButtons = require('../../../pages/actionButtons');
    var chai = require('chai');
    var assert = chai.assert;
    var dynamicAttr = require('../../../pages/dynamicAttribute');
    var breadCrumb = require('../../../pages/breadCrumb');
    var commonlib = require('../../../common/commonLib');
    var settings = require('../../../common/settings');
    var grid = require('../../../pages/grid');
    var fieldValue = "code" + new Date().toString();
    this.setDefaultTimeout(settings.config.STEPTIMEOUT);
    var merchandiseHierarchy = require('../../../pages/merchandiseHierarchy');
    var expectedResultDictionary = {};

    this.Given(/^Culture pop\-up is opened for an attribute row by clicking respective culture icon$/, function (callback) {
        commonlib.open();
        itemPage.getItemLink().click().then(function () {
            actionButtons.getAddButton().click().then(function () {
                itemPage.getGroupsLevelLink().click().then(function () {
                    itemPage.getAttributeGroupCombobox().sendKeys("DA101").then(function (result) {
                        itemPage.getAttributeDropDownElements().first().click().then(function (result) {
                            itemPage.getAttributeGroupTextBox().sendKeys("Attribute Value").then(function (result) {
                                itemPage.getAttributeAddButton().click().then(function (result) {
                                    commonlib.waitForElement(itemPage.getAttributeCultureIcon()).then(function () {
                                        itemPage.getAttributeCultureIcon().click().then(function () {
                                            callback();
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    this.When(/^User add a translation value in the existing list$/, function (callback) {
        dynamicAttr.getCultureDropdown().clear().then(function () {
            dynamicAttr.getCultureDropdown().click().then(function (result) {
                dynamicAttr.getCultureDropDownElements().first().click().then(function () {
                    dynamicAttr.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                        itemPage.getAttributeCultureIconAddButton().click().then(function () {
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.Given(/^Culture pop\-up is opened by clicking 'Add with culture' button from Attribute section on create Item screen$/, function (callback) {
        commonlib.open();
        itemPage.getItemLink().click().then(function () {
            actionButtons.getAddButton().click().then(function () {
                itemPage.getGroupsLevelLink().click().then(function () {
                    itemPage.getAttributeGroupCombobox().sendKeys("DA101").then(function (result) {
                        itemPage.getAttributeDropDownElements().first().click().then(function (result) {
                            itemPage.getAttributeAddCultureIcon().click().then(function () {
                                callback();
                            });
                        });
                    });
                });
            });
        });
    });

    this.When(/^User add a default translation value$/, function (callback) {
        dynamicAttr.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
            itemPage.getAttributeCultureIconAddButton().click().then(function () {
                callback();
            });
        });
    });

    this.When(/^User add other translation values$/, function (callback) {
        dynamicAttr.getCultureDropdown().clear().then(function () {
            dynamicAttr.getCultureDropdown().click().then(function (result) {
                dynamicAttr.getCultureDropdown().sendKeys("Cul").then(function () {
                    dynamicAttr.getCultureDropDownElements().first().click().then(function () {
                        dynamicAttr.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                            itemPage.getAttributeCultureIconAddButton().click().then(function () {
                                callback();
                            });
                        });
                    });
                });
            });
        });
    });

    this.Then(/^A new row of Attribute will be added to the bottom of the existing Attribute list$/, function (callback) {
        itemPage.getAttributeAddButton().click().then(function (result) {
            itemPage.getAttributeList().count().then(function (result) {
                assert.isAbove(result, 0);
                callback();
            });
        });
    });

    this.Then(/^The value shown for the attribute will be the default value added by the user in the culture pop\-up$/, function (callback) {
        itemPage.getAttributeValueList().count().then(function (result) {
            if (result > 0) {
                itemPage.getAttributeValueList().each(function (element, index) {
                    element.getInnerHtml().then(function (text) {
                        if (result == index + 1) {
                            assert.include(text, settings.constants.DYNATTRNAMESAMPLETEXT);
                            //itemPage.getCultureCancelButton().click().then(function () {
                                itemPage.onCancel().click().then(function () {
                                    commonlib.waitForElement(commonlib.getNEPAlertYes()).then(function () {
                                        commonlib.getNEPAlertYes().click().then(function () {
                                            callback();
                                        });
                                    });
                               // });
                            });
                        }
                    });
                });
            }
            else {
                callback();
            }
        });
    });

    this.Then(/^Changes in the Existing values will be saved$/, function (callback) {
        dynamicAttr.getCultureIconInAddEditMode().click().then(function () {
            dynamicAttr.getCultureTableInAddEditMode().count().then(function (result) {
                assert.isNotNull(result);
                itemPage.getCultureCancelButton().click().then(function () {
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
};
module.exports = myStepDefinitionsWrapper;