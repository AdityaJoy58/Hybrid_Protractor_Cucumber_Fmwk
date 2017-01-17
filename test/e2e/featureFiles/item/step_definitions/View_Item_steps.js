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

    this.Given(/^View Item Office screen is opened$/, function (callback) {
        commonlib.open();
        itemPage.getItemLink().click().then(function () {
            commonlib.elementChainingAll(itemPage.getAllItemsFromGrid().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getViewButton().click().then(function () {
                   callback();
                });
            });
        });
    });

    this.Given(/^View Item Office Screen is opened$/, function (callback) {
        commonlib.open();
        itemPage.getItemLink().click().then(function () {
            commonlib.elementChainingAll(itemPage.getAllItemsFromGrid().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getViewButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^Item screen will open in Edit mode$/, function (callback) {
        browser.getCurrentUrl().then(function (result) {
            assert.include(result.toLowerCase(), 'item/edit');
            callback();
        });
    });

    this.When(/^User clicks on 'Add' action button$/, function (callback) {
        actionButtons.getAddButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^Add Item Office screen will open$/, function (callback) {
        itemPage.getMasterCodeTextBox().getText().then(function (newText) {
            assert.isNotNull(newText);
            callback();
        });
    });

    this.When(/^User mouse over on individual node in the Merchandise hierarchy field value in the 'Additional Details' sub section$/, function (callback) {
        commonlib.elementChaining(itemPage.getMerchandisehierarchyMouseOver(), 'tagname', 'a').getOuterHtml().then(function (result) {
            assert.include(result.toLowerCase(), '</a>');
            callback();
        });
    });

    this.Then(/^The node under the mouse over will look clickable$/, function (callback) {
         var result = commonlib.checkElementIsClickable(itemPage.getMerchandisehierarchyMouseClick());
             assert.isTrue(result);
         callback();
    });
};
module.exports = myStepDefinitionsWrapper;