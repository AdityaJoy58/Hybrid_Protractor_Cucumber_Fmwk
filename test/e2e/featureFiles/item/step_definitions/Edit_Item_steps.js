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
    var statusResult;

    this.Given(/^Edit Item Office screen$/, function (callback) {
        commonlib.open();
        itemPage.getItemLink().click().then(function () {
            commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getEditButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^User click on Status field to change the status of the Item$/, function (callback) {
        itemPage.getStatus().click().then(function (result) {
            statusResult = result;
            callback();
        });
    });

    this.When(/^Click on Save action button$/, function (callback) {
        actionButtons.getSaveButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^Item will be saved with the changed status$/, function (callback) {
        itemPage.onSuccess().getText().then(function () {
            assert.equal(itemPage.getStatus().checked, statusResult);
            statusResult = null;
            callback();
        });
    });

    this.Given(/^Edit Item Office Screen$/, function (callback) {
        commonlib.open();
        itemPage.getItemLink().click().then(function () {
            commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getEditButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^User click on Value field for an existing Item Attribute row$/, function (callback) {
        itemPage.getAttributeValue().click().then(function(){
            callback();
        });
    });

    this.Then(/^User will be able to modify the value for the Attribute$/, function (callback) {
        itemPage.getAttributeValue().clear().sendKeys("test value").then(function(){
            callback();
        });
    });

    this.Then(/^Clicking Save Action button will save the updated Attribute value for the Item$/, function (callback) {
        actionButtons.getSaveButton().click().then(function () {
            itemPage.onSuccess().getText().then(function () {
                itemPage.getAttributeValue().getText().then(function (newText) {
                    assert.include(newText, 'test value');
                    callback();
                });
            });
        });
    });

    this.Given(/^Edit Item Screen$/, function (callback) {
        commonlib.open();
        itemPage.getItemLink().click().then(function () {
            commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getEditButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^An 'Add' button will be available next to Attribute value field$/, function (callback) {
        itemPage.getAttributeAddButton().isEnabled().then(function (result) {
            assert.equal(result, false);
            callback();
        });
    });

    this.Then(/^The Add button will be enabled when user selected an attribute and type atleast (\d+) character in the value field$/, function (arg1, callback) {
        itemPage.getAttributeGroupCombobox().sendKeys("DA101").then(function (result) {
            itemPage.getAttributeDropDownElements().first().click().then(function (result) {
                itemPage.getAttributeGroupTextBox().sendKeys("Attribute Value").then(function (result) {
                    itemPage.getAttributeAddButton().isEnabled().then(function (result) {
                        assert.equal(result, true);
                        callback();
                    });
                });
            });
        });
    });

    this.Then(/^An Attribute row will be added to the bottom of the list of Attribute on click of 'Add' button$/, function (callback) {
        itemPage.getAttributeAddButton().click().then(function (result) {
            itemPage.getAttributeList().count().then(function (result) {
                if (result > 0) {
                    itemPage.getAttributeList().each(function (element, index) {
                        element.getInnerHtml().then(function (text) {
                            if (result == index + 1) {
                                assert.include(text.toLowerCase(), "da101");
                                callback();
                            }
                        });
                    });
                }
                else {
                    callback();
                }
            });
        });
    });

    this.Then(/^The attribute added will be shown as disabled in the attribute drop down field$/, function (callback) {
        itemPage.getAttributeList().first().getTagName().then(function (result) {
            assert.equal(result,'span');
            itemPage.onCancel().click().then(function () {
                commonlib.waitForElement(commonlib.getNEPAlertYes()).then(function () {
                    commonlib.getNEPAlertYes().click().then(function () {
                        callback();
                    });
                });
            });
        });
    });

    this.When(/^User update some information for the Item required$/, function (callback) {
        itemPage.getShortDescriptionTextBox().clear().sendKeys("title").then(function () {
            itemPage.getLongDescriptionTextBox().clear().sendKeys("description").then(function () {
                callback();
            });
        });
    });

    this.Then(/^Item will be saved$/, function (callback) {
        itemPage.onSuccess().getText().then(function () {
            callback();
        });
    });

    this.Then(/^breadcrumb will display Catalog > Items > Item Short description> \- Edit$/, function (callback) {
        breadCrumb.getBreadCrumbPageTitle().getText().then(function (result) {
            assert.isTrue(result.substring(0, result.indexOf("- Edit")).length > 0);
            callback();
        });
    });
};
module.exports = myStepDefinitionsWrapper;