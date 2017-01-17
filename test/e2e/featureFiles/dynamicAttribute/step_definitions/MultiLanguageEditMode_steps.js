var myStepDefinitionsWrapper = function () {

    var dynamicAttr = require('../../../pages/dynamicAttribute');
    var actionButtons = require('../../../pages/actionButtons');
    var settings = require('../../../common/settings');
    var commonlib = require('../../../common/commonLib');
    var chai = require(settings.constants.CHAI);
    var assert = chai.assert;
    var expectedResultDictionary = {};
    this.setDefaultTimeout(settings.config.STEPTIMEOUT);

    this.Given(/^Edit Dynamic attribute is opened$/, function (callback) {
        commonlib.open();
        dynamicAttr.onGridRowClick().then(function () {
            actionButtons.getEditButton().click().then(function () {
                callback();
            });
        });
    });

    this.When(/^User click on the culture button$/, function (callback) {
        dynamicAttr.getCultureIconInAddEditMode().click().then(function () {
            callback();
        });

    });

    this.When(/^User select the culture and enter the translation value$/, function (callback) {
        expectedResultDictionary.datafoundInDropdown = false;
        dynamicAttr.getCultureDropdown().clear().then(function () {
            dynamicAttr.getCultureDropdown().click().then(function () {
                dynamicAttr.getCultureDropDownElements().filter(function (elem, index) {
                    return elem.getAttribute(settings.constants.CLASS).then(function (text) {
                        return (text.indexOf(settings.constants.DISABLELISTITEM) < 0);
                    });
                }).first().click().then(function(){
                    expectedResultDictionary.datafoundInDropdown = true;
                });
            });
        });
        dynamicAttr.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
            callback();
        });
    });

    this.When(/^click on Add button$/, function (callback) {
        if (expectedResultDictionary.datafoundInDropdown) {
            dynamicAttr.getCultureTableInAddEditMode().count().then(function (result) {
                expectedResultDictionary.totalElementsBeforeAdd = result;
                dynamicAttr.getCultureAddButton().click().then(function () {
                    callback();
                });
            });
        } else {
            console.log(settings.constants.INFOCULTUREDROPDOWN);
            callback();
        }
    });

    this.Then(/^Value should get saved in existing values$/, function (callback) {
        if (expectedResultDictionary.datafoundInDropdown) {
            dynamicAttr.getCultureTableInAddEditMode().count().then(function (result) {
                callback();
            });
        } else {
            callback();
        }
    });

    this.Then(/^All the translation values should be in the editable mode$/, function (callback) {
        dynamicAttr.getCultureTableFirstTextArea().isEnabled().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.Then(/^Ok button should be disable$/, function (callback) {
        dynamicAttr.getCultureOkButton().isEnabled().then(function (result) {
            assert.equal(result, false);
            callback();
        });
    });

    this.When(/^make changes in any of the translation values$/, function (callback) {
        dynamicAttr.getCultureOkButton().isEnabled().then(function (result) {
            assert.equal(result, false);
        });

        dynamicAttr.getCultureTableFirstTextAreaLabel().click().then(function () {
            dynamicAttr.getCultureTableFirstTextArea().clear().then(function () {
                dynamicAttr.getCultureTableFirstTextArea().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^Ok button should get enabled$/, function (callback) {
        dynamicAttr.getCultureOkButton().isEnabled().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });
};
module.exports = myStepDefinitionsWrapper;