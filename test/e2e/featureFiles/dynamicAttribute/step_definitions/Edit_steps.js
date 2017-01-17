var myStepDefinitionsWrapper = function () {

    var dynamicAttr = require('../../../pages/dynamicAttribute');
    var breadCrumb = require('../../../pages/breadCrumb');
    var settings = require('../../../common/settings');
    var commonlib = require('../../../common/commonLib');
    var chai = require(settings.constants.CHAI);
    this.setDefaultTimeout(settings.config.STEPTIMEOUT);
    var assert = chai.assert;

    this.Given(/^Dynamic attribute screen is opened$/, function (callback) {
        commonlib.open();
        callback();
    });

    this.When(/^User select the record$/, function (callback) {
        dynamicAttr.onGridRowClick().then(function () {
            callback();
        });
    });

    this.When(/^click on the tool bar action Edit$/, function (callback) {
        dynamicAttr.editBtnClick().click().then(function () {
            callback();
        });
    });

    this.Then(/^Dynamic Attribute name should be editable field$/, function (callback) {
        dynamicAttr.getDynamicAttributeNameTextBox().clear().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
            dynamicAttr.getDynamicAttributeNameTextBox().getAttribute('value').then(function (text) {
                assert(text, settings.constants.DYNATTRNAMESAMPLETEXT);
                callback();
            });
        });
    });

    this.Then(/^Dynamic Attribute ID, creation date and last updated date should be Read only$/, function (callback) {
        dynamicAttr.getDynamicAttributeIdByBinding().getText().then(function (text){
            assert.isNotNull(text);
            dynamicAttr.getDynamicAttributeCreateDateTextBox().getAttribute(settings.constants.DISABLED).then(function (res2) {
                assert.equal(res2, settings.constants.TRUE);
                dynamicAttr.getDynamicAttributeUpdateDateTextBox().getAttribute(settings.constants.DISABLED).then(function (res3) {
                    assert.equal(res3, settings.constants.TRUE);
                    dynamicAttr.onCancel().click().then(function () {
                        commonlib.waitForElement(commonlib.getNEPAlertYes()).then(function(){
                            commonlib.getNEPAlertYes().click().then(function(){
                                callback();
                            });
                        });
                    });
                });
            });
        });
    });

    this.When(/^User navigate to Edit Dynamic Attribute screen$/, function (callback) {
        dynamicAttr.onGridRowClick().then(function () {
            dynamicAttr.editBtnClick().click().then(function () {
                callback();
            });
        });
    });

    this.Then(/^User should not be able to edit the Attribute ID$/, function (callback) {
        dynamicAttr.getDynamicAttributeIdTextBox().getAttribute(settings.constants.DISABLED).then(function (res) {
            assert.equal(res, settings.constants.TRUE);
            callback();
        });
    });

    this.Then(/^tool bar actions Save, Done and Cancel should be active$/, function (callback) {
        dynamicAttr.getToolBarButtonInnerHtml().getInnerHtml().then(function (text) {
            var elementInnerHtml = text.toLowerCase();
            assert.include(elementInnerHtml, settings.constants.SAVE);
            assert.include(elementInnerHtml, settings.constants.DONE);
            assert.include(elementInnerHtml, settings.constants.CANCEL);
            callback();
        });
    });

    this.Then(/^Breadcrumbs path display as Catalog \-> Dynamic Attribute  >  Dynamic Attribute A \- edit mode$/, function (callback) {
        breadCrumb.getBreadCrumbText().then(function (text) {
            assert.isNotNull(text);
            callback();
        });
    });

    this.Given(/^Edit Dynamic attribute screen is opened$/, function (callback) {
        commonlib.open();
        dynamicAttr.onGridRowClick().then(function () {
            dynamicAttr.editBtnClick().click().then(function () {
                callback();
            });
        });
    });

    this.When(/^User leave the Dynamic Attribute name as Blank$/, function (callback) {
        dynamicAttr.getDynamicAttributeNameTextBox().clear().then(function () {
            callback();
        });
    });

    this.When(/^click on the save or done button$/, function (callback) {
        dynamicAttr.getSaveBtnInAddEditMode().click().then(function () {
            callback();
        });
    });

    this.Then(/^application should display an error message 'Attribute Name is Mandatory\.'$/, function (callback) {
        dynamicAttr.checkNameMandatoryValidation().getOuterHtml().then(function (text) {
            assert.include(text,'Attribute Name is mandatory');
            dynamicAttr.onCancel().click().then(function () {
                commonlib.waitForElement(commonlib.getNEPAlertYes()).then(function(){
                    commonlib.getNEPAlertYes().click().then(function(){
                        callback();
                    });
                });
            });
        });
    });

    this.When(/^User enter the Attribute name to the maximum character as (\d+)$/, function (arg1, callback) {
        var largeText = "x".repeat(256);
        dynamicAttr.getDynamicAttributeNameTextBox().clear().then(function () {
            dynamicAttr.getDynamicAttributeNameTextBox().sendKeys(largeText).then(function () {
                callback();
            });
        });
    });

    this.Then(/^Application should display a business validation message message \- 'entered more than the maximum length \(256\)\.'$/, function (callback) {
        dynamicAttr.checkNameLengthValidation().getOuterHtml().then(function (text) {
            assert.isNotNull(text);
            callback();
        });
    });

    this.When(/^User edit the Attribute name$/, function (callback) {
        dynamicAttr.getDynamicAttributeNameTextBox().clear().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
            callback();
        });
    });

    this.When(/^click on the save button$/, function (callback) {
        dynamicAttr.getSaveBtnInAddEditMode().click().then(function () {
            callback();
        });
    });

    this.Then(/^value is saved$/, function (callback) {
        dynamicAttr.checkSuccessWhileSave().getInnerHtml().then(function (result) {
            assert.include(result.toLowerCase(), 'updated dynamic attribute');
            callback();
        });
    });


    this.Then(/^save changes remain in edit mode$/, function (callback) {
        dynamicAttr.getDynamicAttributeNameTextBox().getAttribute('value').then(function (text) {
            assert.equal(text, settings.constants.DYNATTRNAMESAMPLETEXT);
            dynamicAttr.getToolBarButtonInnerHtml().getInnerHtml().then(function (text) {
                var elementInnerHtml = text.toLowerCase();
                assert.include(elementInnerHtml, settings.constants.SAVE);
                assert.include(elementInnerHtml, settings.constants.DONE);
                assert.include(elementInnerHtml, settings.constants.CANCEL);
                callback();
            });
        });
    });

    this.Then(/^Edit mode should get closed and attribute record will be displayed in view mode$/, function (callback) {
        dynamicAttr.getDynamicAttributeIdTextBox().isEnabled().then(function (result) {
            assert.equal(result, false);
            callback();
        });
    });
};
module.exports = myStepDefinitionsWrapper;