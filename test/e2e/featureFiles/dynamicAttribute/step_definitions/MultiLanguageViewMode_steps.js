var myStepDefinitionsWrapper = function () {

    var dynamicAttr = require('../../../pages/dynamicAttribute');
    var actionButtons = require('../../../pages/actionButtons');
    var breadCrumb = require('../../../pages/breadCrumb');
    var settings = require('../../../common/settings');
    var commonlib = require('../../../common/commonLib');
    var chai = require(settings.constants.CHAI);
    var assert = chai.assert;
    this.setDefaultTimeout(settings.config.STEPTIMEOUT);

    this.Given(/^View Dynamic Attribute screen is opened$/, function (callback) {
        //This scenario cannot tested directly from grid as record may or may not contain culture values so
        // first adding records according to our need and then click on done button to get data in view mode
        commonlib.open();
        var temp = commonlib.getCurrentDateTimeString();
        actionButtons.getAddButton().click().then(function () {
            dynamicAttr.getDynamicAttributeIdTextBox().sendKeys(settings.constants.DYNATTRSAMPLEID + '_A' + temp).then(function () {
                dynamicAttr.getDynamicAttributeNameTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                    dynamicAttr.getCultureIconInAddEditMode().click().then(function () {
                        dynamicAttr.getCultureDropdown().clear().then(function () {
                            dynamicAttr.getCultureDropdown().click().then(function (result) {
                                dynamicAttr.getCultureDropDownElements().first().click().then(function () {
                                    dynamicAttr.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                                        dynamicAttr.getCultureAddButton().click().then(function () {
                                            dynamicAttr.getCultureOkButton().click().then(function () {
                                                commonlib.waitForElement(actionButtons.getDoneButton()).then(function () {
                                                    actionButtons.getDoneButton().click().then(function () {
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
            });
        });
    });


    this.When(/^User click on the culture icon of Attribute name$/, function (callback) {
        dynamicAttr.getCultureIconInViewMode().click().then(function () {
            callback();
        });
    });

    this.Then(/^A pop up should get opened with the culture and value$/, function (callback) {
        callback.pending();
    });

    this.Then(/^User should be able to view all the existing transalation values for that attributes$/, function (callback) {
        dynamicAttr.getCultureTableInViewMode().isDisplayed().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.Then(/^User should not be able to make any changes on the pop up$/, function (callback) {
        dynamicAttr.getCultureOkButton().isDisplayed().then(function (result) {
            assert.equal(result, false);
            callback();
        });

    });

    this.Given(/^Dynamic Attribute screen is opened$/, function (callback) {
        commonlib.open();
        dynamicAttr.onGridRowClick().then(function () {
            callback();
        });
    });

    this.When(/^User drill down a record in view mode$/, function (callback) {
        actionButtons.getViewButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^Attribute name should get appear in default language \(English\)$/, function (callback) {
        dynamicAttr.getDynamicAttributeNameTextBox().getText().then(function (result) {
            assert.isNotNull(result);
            callback();
        });
    });

    this.Given(/^View Dynamic Attribute screen opened$/, function (callback) {
        commonlib.open();
        var temp = commonlib.getCurrentDateTimeString();
        actionButtons.getAddButton().click().then(function () {
            dynamicAttr.getDynamicAttributeIdTextBox().sendKeys(settings.constants.DYNATTRSAMPLEID + '_B' + temp).then(function () {
                dynamicAttr.getDynamicAttributeNameTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^User view an attribute for which translation does not exist$/, function (callback) {
        actionButtons.getDoneButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^Culture icon should be disable$/, function (callback) {
        callback.pending();
    });

    this.When(/^User click or mouse over on the culture icon of attribute name for which no transalation values defined for a value$/, function (callback) {
        actionButtons.getDoneButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^Relevent text message should be displayed as 'No Translation were define'$/, function (callback) {
        callback.pending();
    });

    this.When(/^User view a translation value which is added with ellipsis$/, function (callback) {
        callback.pending();
    });

    this.Then(/^User should be able to view the same translation value without ellipsis in view mode$/, function (callback) {
        callback.pending();
    });

    this.Given(/^View Dynamic Attribute Screen is opened$/, function (callback) {
        commonlib.open();
        dynamicAttr.onGridRowClick().then(function () {
            actionButtons.getViewButton().click().then(function () {
                callback();
            });
        });
    });

    this.When(/^User click on culture button$/, function (callback) {
        dynamicAttr.getCultureIconInViewMode().click().then(function () {
            callback();
        });
    });

    this.Then(/^scroll bar should get appear in order to view all the translation values$/, function (callback) {
        callback.pending();
    });
};
module.exports = myStepDefinitionsWrapper;