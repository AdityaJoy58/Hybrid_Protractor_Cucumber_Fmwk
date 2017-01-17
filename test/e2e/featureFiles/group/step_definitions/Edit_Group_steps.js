var myStepDefinitionsWrapper = function () {
    var groupPage = require('../../../pages/group');
    var actionButtons = require('../../../pages/actionButtons');
    var chai = require('chai');
    var assert = chai.assert;
    var dynamicAttr = require('../../../pages/dynamicAttribute');
    var breadCrumb = require('../../../pages/breadCrumb');
    var commonlib = require('../../../common/commonLib');
    var settings = require('../../../common/settings');
    var grid = require('../../../pages/grid');
    var merchandiseHierarchy = require('../../../pages/merchandiseHierarchy');
    var codeToBeEntered = "code" + Math.random();
    var titleToBeEntered = "title" + Math.random();
    var descriptionToBeEntered = "description" + Math.random();

    this.setDefaultTimeout(settings.config.STEPTIMEOUT);

    this.Given(/^Edit Group Office Screen$/, function (callback) {
        commonlib.open();
        groupPage.getGroupLink().click().then(function () {
            commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getEditButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Given(/^Edit Group Office Screen for a group when no items are associated to the group$/, function (callback) {
        commonlib.open();
        groupPage.getGroupLink().click().then(function () {
            commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getEditButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^Group screen will stay in Edit mode$/, function (callback) {
        groupPage.onCancel().isEnabled().then(function(result){
            assert.isTrue(result);
            groupPage.onDone().isEnabled().then(function(result){
                assert.isTrue(result);
                groupPage.onSave().isEnabled().then(function(result){
                    assert.isTrue(result);
                    callback();
                });
            });
        });
    });

    this.Then(/^Group will be saved$/, function (callback) {
        callback();
    });

    this.Then(/^Group will not be Edited$/, function (callback) {
        commonlib.getPresenceOfNotification().then(function (result) {
            assert.isFalse(result);
            callback();
        });
    });

    this.Then(/^User will be able to sort on each column in the grid in Group Edit Screen$/, function (callback) {
        var code = [];
        groupPage.getColumnsHaveAscendingSortingFeature().first().click().then(function () {
            commonlib.elementChainingAll(groupPage.getAllItemsFromGrid().get(0), 'tagname', 'td').get(1).getText().then(function (result) {
                commonlib.elementChainingAll(groupPage.getAllItemsFromGrid().get(1), 'tagname', 'td').get(1).getText().then(function (res) {
                    code.push(res);
                    code.push(result);
                    code.sort();
                    assert.equal(result, code[0]);
                    assert.equal(res, code[1]);
                    callback();
                });
            });
        });
    });

    this.When(/^User verify the default state of the filter icon available in the grid in the Items section in Group Office Screen$/, function (callback) {
        var resultElement = false;
        groupPage.getGridResult().then(function (elements) {
            elements[0].getAttribute("class").then(function (className) {
                assert.equal(className, 'filter-button ng-binding active')
                callback();
            });
        });
    });

    this.Then(/^Filter icon will be enabled by default$/, function (callback) {
        groupPage.getFilterIcon().isEnabled().then(function(result){
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^Filter icon will be disabled on click$/, function (callback) {
        groupPage.getFilterIcon().click().then(function () {
            groupPage.getFilterIcon().isEnabled().then(function(result){
                assert.isTrue(result);
                callback();
            });
        });
    });

    this.Given(/^Edit Group Office Screen when items are associated to the group$/, function (callback) {
        commonlib.open();
        groupPage.getGroupLink().click().then(function () {
            commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getEditButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Given(/^Edit Items Office Screen for a Group when items are associated to the group$/, function (callback) {
        commonlib.open();
        groupPage.getGroupLink().click().then(function () {
            commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getEditButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^User will stay on Edit Group office screen\.$/, function (callback) {
        groupPage.getCodeTextBox().getText().then(function (newText) {
            assert.isNotNull(newText);
            callback();
        });
    });

    this.Then(/^The Items section in edit screen will have 'Add Items' button$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Notification will be displayed to user that the Record was updated successfully$/, function (callback) {
        commonlib.waitForElement(groupPage.getGroupUpdatedNotification()).then(function () {
            groupPage.getGroupUpdatedNotification().isEnabled().then(function (result) {
              assert.isTrue(result);
              groupPage.getGroupSavedNotification().then(function(result) {
                assert.equal(result, 'GROUP UPDATED.');
                callback();
              });
            });
        });
    });

    this.When(/^User enters all the valid information in the required fields except code$/, function (callback) {
        titleToBeEntered = "title" + Math.random();
        descriptionToBeEntered = "description" + Math.random();
        groupPage.getTitleTextBox().clear().sendKeys(titleToBeEntered);
        groupPage.getDescriptionTextBox().clear().sendKeys(descriptionToBeEntered);
        callback();
    });

    this.Then(/^Error message will be displayed informing user that Required Fields are mandatory$/, function (callback) {
        groupPage.getCodeRequiredFieldErrorMessage().isEnabled().then(function (result) {
            assert.isTrue(result);
            merchandiseHierarchy.onCancel().click().then(function () {
                commonlib.waitForElement(commonlib.getNEPAlertYes()).then(function(){
                    commonlib.getNEPAlertYes().click().then(function(){
                        callback();
                    });
                });
            });
        });
    });

    this.Then(/^Error message will be displayed informing user that Required field is mandatory in Group Office Screen$/, function (callback) {
        groupPage.getCodeRequiredFieldErrorMessage().isEnabled().then(function (result) {
            assert.isTrue(result);
            groupPage.checkCodeMandatoryMessage().getOuterHtml().then(function (text) {
                assert.include(text, 'Code is mandatory');
                groupPage.checkTitleMandatoryMessage().getOuterHtml().then(function (text) {
                    assert.include(text, 'Title is mandatory');
                    groupPage.checkDescriptionMandatoryMessage().getOuterHtml().then(function (text) {
                        assert.include(text, 'Description is mandatory');
                        merchandiseHierarchy.onCancel().click().then(function () {
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
    });


    this.Then(/^The item grid will display following Columns for each record row: 'Code' and 'Short Description'$/, function (callback) {
        grid.getGridHeadings().first().getInnerHtml().then(function (result) {
            assert.include(result, settings.constants.CODE);
            grid.getGridHeadings().get(1).getInnerHtml().then(function (result) {
                assert.include(result, settings.constants.DESCRIPTION);
                callback();
            });
        });
    });
};
module.exports = myStepDefinitionsWrapper;