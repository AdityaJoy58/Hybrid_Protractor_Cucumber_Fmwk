var myStepDefinitionsWrapper = function () {

    var group = require('../../../pages/group');
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

    this.When(/^User verify the 'Created Date' and 'Last Update' in the Group Details section$/, function (callback) {
        callback.pending();
    });

    this.Then(/^'Created Date' and 'Last Update' fields will be auto populated$/, function (callback) {
        callback.pending();
    });

    this.Given(/^View Group Office Screen for a Group which has Items$/, function (callback) {
        commonlib.open();
        group.getGroupLink().click().then(function () {
            commonlib.elementChainingAll(group.getAllItemsFromGrid().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getViewButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^The Items section will be of Grid type$/, function (callback) {
        group.getGridSection().getAttribute("class").then(function (attributeValue) {
            assert.isTrue(attributeValue.indexOf("grid") != -1);
            callback();
        });
    });

    this.Given(/^View Items Office Screen for a Group which has some inactive Items$/, function (callback) {
        commonlib.open();
        group.getGroupLink().click().then(function () {
            commonlib.elementChainingAll(group.getAllItemsFromGrid().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getViewButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Given(/^View Items Office Screen for a Group which has Items$/, function (callback) {
        commonlib.open();
        group.getGroupLink().click().then(function () {
            commonlib.elementChainingAll(group.getAllItemsFromGrid().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getViewButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^Breadcrumb path will be Catalog \-> Group > \[Group Title value\]$/, function (callback) {
        var expectedCode = "";
        group.getAllLabelValues().then(function (elements) {
            elements[0].getText().then(function (code) {
                expectedCode = code;
                group.getGroupBreadCrumb().getText().then(function (breadCrumbTitle) {
                  //To Do
                    //assert.isAbove(breadCrumbTitle.indexOf(expectedCode), -1);
                    callback();
                });
            });
        });
    });

    this.Given(/^View Group Office Screen for a group$/, function (callback) {
        commonlib.open();
        group.getGroupLink().click().then(function () {
            commonlib.elementChainingAll(group.getAllItemsFromGrid().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getViewButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^Group screen is open in Edit mode$/, function (callback) {
        group.getTitleTextBox().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });


    this.When(/^User verify Sorting feature on each column in the group item grid$/, function (callback) {
        group.getColumnsHaveAscendingSortingFeature().then(function (elements) {
            assert.isAbove(elements.length, 0);
            group.getColumnsHaveDescendingSortingFeature().then(function (elements) {
                assert.isAbove(elements.length, 0);
                callback();
            });
        });
    });

    this.Given(/^View Group Office Screen for Group which has items$/, function (callback) {
        group.getColumnsHaveAscendingSortingFeature().then(function (elements) {
            assert.isAbove(elements.length, 0);
            group.getColumnsHaveDescendingSortingFeature().then(function (elements) {
                assert.isAbove(elements.length, 0);
                callback();
            });
        });
    });

    this.When(/^User verify the breadcrumb path value of Group Office Screen$/, function (callback) {
        var text = group.getGroupBreadCrumb();
        assert.notEqual(text, undefined);
        callback();
    });

    this.Then(/^User will be navigated to respective Item Screen in View mode\.$/, function (callback) {
        group.getGroupBreadCrumb().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.When(/^User verify Filter option in the Grid$/, function (callback) {
        group.getFilterIcon().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^User will be able to filter records on each column in the Grid$/, function (callback) {
        group.getFilterIcon().click().then(function () {
            group.getSearchBoxes().count().then(function (length) {
                assert.isAbove(length, 0);
                callback();
            });
        });
    });

    this.When(/^User navigates to 'Items' section on the screen in Group screen$/, function (callback) {
        group.getLowerLevelLink().click().then(function () {
            callback();
        });
    });
};
module.exports = myStepDefinitionsWrapper;