var myStepDefinitionsWrapper = function () {
    var chai = require('chai');
    var assert = chai.assert;
    var dynamicAttr = require('../../../pages/dynamicAttribute');
    var breadCrumb = require('../../../pages/breadCrumb');
    var commonlib = require('../../../common/commonLib');
    var settings = require('../../../common/settings');
    this.setDefaultTimeout(settings.config.STEPTIMEOUT);
    var activeElement;
    var existingDAIdText = 'DA101';
    var existingDANameText = 'DA101';

    this.Given(/^Dynamic Attribute screen opened$/, function (callback) {
        commonlib.open();
        callback();

    });

    this.When(/^User click on the tool bar action Add$/, function (callback) {
        dynamicAttr.onAdd().click().then(function () {
            callback();
        });
    });

    this.Then(/^Add Dynamic Attribute screens should get opened with Dynamic attribute id and Dynamic Attribute name field$/, function (callback) {
        dynamicAttr.getDynamicAttributeIdTextBox().getText().then(function (text) {
            assert.isTrue(text != undefined);
            dynamicAttr.getDynamicAttributeNameTextBox().getAttribute('value').then(function (text) {
                assert.isTrue(text != undefined);
                callback();
            });
        });
    });

    this.Given(/^Edit dynamic attribute screen opened$/, function (callback) {
        commonlib.open();
        dynamicAttr.onGridRowClick().then(function () {
            dynamicAttr.editBtnClick().click().then(function () {
                callback();
            });
        });
    });

    this.When(/^User presses the tab key on the keyboard$/, function (callback) {
        activeElement = dynamicAttr.getActiveElement();
        commonlib.getTabKey().then(function () {
            callback();
        });
    });

    this.Then(/^User should be able to move between fields by the fields order$/, function (callback) {
        dynamicAttr.getActiveElement();
        callback();
    });

    this.When(/^User navigate to Add Dynamic Attribute page$/, function (callback) {
        dynamicAttr.onAdd().click().then(function () {
            callback();
        });
    });

    this.Then(/^tool bar action Cancel, Save and Done should be active$/, function (callback) {
        dynamicAttr.getToolBarButtonInnerHtml().getText().then(function (text) {
            assert.isNotNull(text);
            callback();
        });

    });

    this.Given(/^Add Dynamic attribute screen is opened$/, function (callback) {
        commonlib.open();
        dynamicAttr.onAdd().click().then(function () {
            callback();
        });
    });

    this.When(/^User enter the Attribute ID and Attribute name$/, function (callback) {
        dynamicAttr.getDynamicAttributeIdTextBox().clear().sendKeys('dummy' + Math.random()).then(function () {
            dynamicAttr.getDynamicAttributeNameTextBox().clear().sendKeys('dummy' + Math.random()).then(function () {
                callback();
            });
        });
    });

    this.When(/^click on Save button$/, function (callback) {
        dynamicAttr.onSave().click().then(function () {
            callback();
        })
    });

    this.Then(/^value got saved$/, function (callback) {
        dynamicAttr.onSuccess().getText().then(function () {
            callback();
        });
    });

    this.Then(/^Save changes stay in edit mode$/, function (callback) {

        dynamicAttr.getDynamicAttributeIdByBinding().getText().then(function (text){
            assert.isNotNull(text);
            dynamicAttr.getDynamicAttributeNameTextBox().getAttribute('value').then(function (text){
                assert.isNotNull(text);
                callback();
            });
        });
    });

    this.When(/^click on Done button$/, function (callback) {
        dynamicAttr.getDoneBtnInAddEditMode().click().then(function () {
            callback();
        });
    });

    this.Then(/^Edit mode should get closed$/, function (callback) {
        //edit mode logic;
        dynamicAttr.editBtnClick().isEnabled().then(function (result){
            assert.isTrue(result);
            dynamicAttr.onCancel().isEnabled().then(function (result) {
                assert.isFalse(result);
                callback();
            })
        });
    });

    this.Then(/^attribute record should be displayed in view mode$/, function (callback) {
        //view mode logic
        dynamicAttr.editBtnClick().isEnabled().then(function (text){
            assert.isTrue(text);
            dynamicAttr.onAdd().isEnabled().then(function (text){
                assert.isTrue(text);
                dynamicAttr.onCancel().isEnabled().then(function (text){
                    assert.isFalse(text);
                    dynamicAttr.onDone().isEnabled().then(function (text){
                        assert.isFalse(text);
                        dynamicAttr.onSave().isEnabled().then(function (text){
                            assert.isFalse(text);
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.When(/^click on cancel button$/, function (callback) {
        dynamicAttr.onCancel().click().then(function () {
            callback();
        });
    });

    this.Then(/^A message should prompt asking if user want to discard the changes$/, function (callback) {
        commonlib.getNEPAlertMessage().getText().then(function (msg) {
            assert.equal(msg, 'Are you sure you want to leave the current page? Any changes will be lost.');
            callback();
        });
    });

    this.Then(/^user click on Yes$/, function (callback) {
        commonlib.getNEPAlertYes().click().then(function(){
            callback();
        })
    });

    this.Then(/^values should not get saved and move back to previous screen$/, function (callback) {
        dynamicAttr.onGridRowClick().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.Then(/^user click on No$/, function (callback) {
        dynamicAttr.discardAlert().then(function () {
            callback();
        });
    });

    this.Then(/^values should not get saved and stay in the record$/, function (callback) {
        dynamicAttr.getDynamicAttributeNameTextBox().isPresent().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.When(/^User leave the Dynamic Attribute id as blank$/, function (callback) {
        dynamicAttr.getDynamicAttributeIdTextBox().sendKeys('').then(function () {
            callback();
        });
    });

    this.When(/^enter the dynamic name$/, function (callback) {
        dynamicAttr.getDynamicAttributeNameTextBox().sendKeys('abc').then(function () {
            callback();
        });
    });

    this.When(/^click on the save or done botton$/, function (callback) {
        dynamicAttr.onSave().click().then(function () {
            callback();
        })
    });

    this.Then(/^application should display an error message 'Attribute Id is mandatory\.'$/, function (callback) {
        dynamicAttr.getIdMessage().getText().then(function (text) {
            assert.include(text,'Attribute Id is mandatory');
            dynamicAttr.onCancel().click().then(function () {
                commonlib.waitForElement(commonlib.getNEPAlertYes()).then(function(){
                    commonlib.getNEPAlertYes().click().then(function(){
                        callback();
                    });
                });
            });
        });
    });

    this.When(/^User leave the Dynamic Attribute name as blank$/, function (callback) {
        dynamicAttr.getDynamicAttributeNameTextBox().sendKeys('').then(function () {
            callback();
        });
    });

    this.When(/^enter the dynamic id$/, function (callback) {
        dynamicAttr.getDynamicAttributeIdTextBox().sendKeys('abc').then(function () {
            callback();
        });
    });

    this.Then(/^application should display an error message 'Attribute Name is mandatory\.'$/, function (callback) {
        dynamicAttr.getNameMessage().getText().then(function (text) {
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

    this.When(/^User enter the attribute id which is already exist$/, function (callback) {
        dynamicAttr.getDynamicAttributeIdTextBox().sendKeys(existingDAIdText).then(function () {
            dynamicAttr.getDynamicAttributeNameTextBox().sendKeys(existingDANameText).then(function () {
                callback();
            });
        });
    });

    this.Then(/^application should display an error message 'An attribute with same id is already exist'$/, function (callback) {
        dynamicAttr.getExistingErrorMessage().getText().then(function (text) {
            assert.include(text,'An attribute with the same ID already exist.');
            dynamicAttr.onCancel().click().then(function () {
                commonlib.waitForElement(commonlib.getNEPAlertYes()).then(function(){
                    commonlib.getNEPAlertYes().click().then(function(){
                        callback();
                    });
                });
            });
        });
    });

    this.When(/^User enter the attribute id and attribute name$/, function (callback) {
        dynamicAttr.getDynamicAttributeIdTextBox().sendKeys('abc' + Math.random()).then(function () {
            dynamicAttr.getDynamicAttributeNameTextBox().sendKeys('bcd' + Math.random()).then(function () {
                callback();
            });
        });
    });

    this.Then(/^Value got saved successfully$/, function (callback) {
        dynamicAttr.checkSuccessWhileSave().getInnerHtml().then(function (result) {
            assert.include(result.toLowerCase(), 'notification success');
            callback();
        });
    });

    this.Then(/^application should display an message \- 'Record saved successfully'$/, function (callback) {
        //saving message
        dynamicAttr.checkSuccessWhileSave().getInnerHtml().then(function (result) {
            assert.include(result.toLowerCase(), 'added dynamic attribute');
            callback();
        });
    });

    this.When(/^User enter the attribute id$/, function (callback) {
        dynamicAttr.getDynamicAttributeIdTextBox().sendKeys('abc' + Math.random()).then(function () {
            callback();
        });
    });

    this.Then(/^Application should not allow user to enter more then (\d+) characters  in Attribute ID field$/, function (arg1, callback) {
        //message check
        callback();
    });

    this.When(/^User enter the attribute name to the maximum character as (\d+)$/, function (arg1, callback) {
        dynamicAttr.getDynamicAttributeNameTextBox().sendKeys('a'.repeat(261)).then(function () {
            callback();
        });
    });


    this.Then(/^application should display a business validation message message \- 'entered more than the maximum length \(256\)\.'$/, function (callback) {
        dynamicAttr.getMaximumLengthValidationMessage().getText().then(function (text) {
            assert.isNotNull(text);
            callback();
        });
    });

    this.Then(/^Bredcrumbs should get appear as Catalog \-> Dynamic Attribute > New Dynamic Attribute$/, function (callback) {
        breadCrumb.getBreadCrumbText().then(function (element) {
            assert.isNotNull(element);
            callback();
        });
    });

    this.When(/^User navigate to Add dynamic attribute screen$/, function (callback) {
        callback();
    });

};
module.exports = myStepDefinitionsWrapper;