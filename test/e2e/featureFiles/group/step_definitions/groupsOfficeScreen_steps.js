var myStepDefinitionsWrapper = function () {

    var groupPage = require('../../../pages/group');
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

    this.Then(/^Following columns will displayed in grid for each row: 'Code', 'Title', 'Description'$/, function (callback) {
        grid.getGridHeadings().first().getInnerHtml().then(function (result) {
            assert.include(result, settings.constants.CODE);
        });
        grid.getGridHeadings().get(1).getInnerHtml().then(function (result) {
            assert.include(result.toLowerCase(), settings.constants.TITLE);
        });
        grid.getGridHeadings().get(2).getInnerHtml().then(function (result) {
            assert.include(result, settings.constants.DESCRIPTION);
            callback();
        });
    });

    this.Then(/^The breadcrumb will display following value: Catalog > Groups$/, function (callback) {
        var text = '';
        breadCrumb.getBreadCrumbModuleTitle().getText().then(function (result) {
            text = result;
            breadCrumb.getBreadCrumbPageTitle().getText().then(function (res) {
                text = text + ' > ' + res;
                assert.equal(text.toLowerCase(), 'catalog > groups');
                callback();
            });
        });
    });

    this.Then(/^There will be an icon in side bar navigation for Group$/, function (callback) {
        callback();
    });

    this.Then(/^The title for the option in side bar will be 'Groups'$/, function (callback) {
        sideBar.getSidebarLinks().get(2).getAttribute('title').then(function (result) {
            assert.equal(result.toLowerCase(), 'groups');
            callback();
        });
    });

    this.When(/^User click on option 'Groups' from the side bar navigation$/, function (callback) {
        groupPage.getGroupLink().click().then(function () {
            callback();
        });
    });

    this.Then(/^User will be navigated to Group Office screen$/, function (callback) {
        browser.getCurrentUrl().then(function (result) {
            assert.include(result.toLowerCase(), 'group');
            callback();
        });
    });

    this.Then(/^Sorting will be available on following fields in the grid: 'Code', 'Title', 'Description'$/, function (callback) {
        grid.getSortingIconAsc(grid.getGridHeadings().first()).isEnabled().then(function (result) {
            assert.isTrue(result);
        });
        grid.getSortingIconAsc(grid.getGridHeadings().get(1)).isEnabled().then(function (result) {
            assert.isTrue(result);
        });
        grid.getSortingIconAsc(grid.getGridHeadings().get(2)).isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^Default sorting will be on 'Code' field alphabetically ascending sorted$/, function (callback) {
        commonlib.elementChainingAll(grid.getGridRows().get(0), 'tagname', 'td').get(1).getText().then(function (firstRowText) {
            commonlib.elementChainingAll(grid.getGridRows().get(1), 'tagname', 'td').get(1).getText().then(function (secondRowText) {
                assert.isAtMost(firstRowText.localeCompare(secondRowText), 0);
                callback();
            });
        });
    });

    this.Then(/^Sorting indicator will be displayed against 'Code' field indicating grid sorting in ascending order$/, function (callback) {
        grid.getGridHeadings().get(0).click().then(function () {
            grid.getSortingIconAsc(grid.getGridHeadings().get(0)).getOuterHtml().then(function (result) {
                assert.include(result.toLowerCase(), 'active');
                callback();
            });
        });
    });

    this.Then(/^Sorting indicator will indicate descending order sorting on 'Code' field when user again click on 'Code' field label$/, function (callback) {
        grid.getGridHeadings().get(0).click().then(function () {
            grid.getSortingIconDesc(grid.getGridHeadings().get(0)).getOuterHtml().then(function (result) {
                assert.include(result.toLowerCase(), 'active');
                callback();
            });
        });
    });

    this.When(/^User click on 'Title' field$/, function (callback) {
        grid.getGridHeadings().get(1).click().then(function () {
            callback();
        });
    });

    this.Then(/^Grid will be sorted on 'Title' field values in ascending order$/, function (callback) {
        commonlib.elementChainingAll(grid.getGridRows().get(0), 'tagname', 'td').get(2).getText().then(function (firstRowText) {
            commonlib.elementChainingAll(grid.getGridRows().get(1), 'tagname', 'td').get(2).getText().then(function (secondRowText) {
                assert.isAtMost(firstRowText.localeCompare(secondRowText), 0);
                callback();
            });
        });
    });

    this.Then(/^Sorting indicator will be displayed against 'Title' field indicating grid sorting in ascending order on 'Title' field$/, function (callback) {
        grid.getSortingIconAsc(grid.getGridHeadings().get(1)).getOuterHtml().then(function (result) {
            assert.include(result.toLowerCase(), 'active');
            callback();
        });
    });

    this.Then(/^Sorting indicator will indicate descending order sorting on 'Title' field when user again click on 'Title' field label$/, function (callback) {
        grid.getGridHeadings().get(1).click().then(function () {
            grid.getSortingIconDesc(grid.getGridHeadings().get(1)).getOuterHtml().then(function (result) {
                assert.include(result.toLowerCase(), 'active');
                callback();
            });
        });
    });

    this.When(/^User click on 'Description' field$/, function (callback) {
        grid.getGridHeadings().get(2).click().then(function () {
            callback();
        });
    });

    this.Then(/^Grid will be sorted on 'Description' field values in ascending order$/, function (callback) {
        commonlib.elementChainingAll(grid.getGridRows().get(0), 'tagname', 'td').get(3).getText().then(function (firstRowText) {
            commonlib.elementChainingAll(grid.getGridRows().get(1), 'tagname', 'td').get(3).getText().then(function (secondRowText) {
                assert.isAtMost(firstRowText.localeCompare(secondRowText), 0);
                callback();
            });
        });
    });

    this.Then(/^Sorting indicator will be displayed against 'Description' field indicating grid sorting in ascending order on 'Description' field$/, function (callback) {
        grid.getSortingIconAsc(grid.getGridHeadings().get(2)).getOuterHtml().then(function (result) {
            assert.include(result.toLowerCase(), 'active');
            callback();
        });
    });

    this.Then(/^Sorting indicator will indicate descending order sorting on 'Description' field when user again click on 'Description' field label$/, function (callback) {
        grid.getGridHeadings().get(2).click().then(function () {
            grid.getSortingIconDesc(grid.getGridHeadings().get(2)).getOuterHtml().then(function (result) {
                assert.include(result.toLowerCase(), 'active');
                callback();
            });
        });
    });

    this.Then(/^Search ability will be available on following fields in the grid: 'Code', Title', 'Description'$/, function (callback) {
        grid.getFilterIcon().click().then(function () {
            grid.getSearchBoxes().count().then(function (length) {
                assert.equal(length, 3);
                callback();
            });
        });
    });

    this.Given(/^Group Office screen with filter enabled$/, function (callback) {
        commonlib.open();
        groupPage.getGroupLink().click().then(function () {
            grid.getFilterIcon().isEnabled().then(function () {
                callback();
            });
        });
    });

    this.Given(/^Group Office screen is opened$/, function (callback) {
        commonlib.open();
        groupPage.getGroupLink().click().then(function () {
            callback();
        });
    });

    this.When(/^User navigate to Group Office screen$/, function (callback) {
        groupPage.getGroupLink().click().then(function () {
            callback();
        });
    });

    this.Given(/^Group Office screen is opened with all records selected$/, function (callback) {
        commonlib.open();
        groupPage.getGroupLink().click().then(function () {
            grid.getMegaSelector().click().then(function () {
                callback();
            });
        });
    });

    this.Then(/^Following Tool Bar action buttons will be disabled: 'Edit', 'View'$/, function (callback) {
        actionButtons.getEditButton().isEnabled().then(function (result) {
            assert.equal(result, false);
        });
        actionButtons.getViewButton().isEnabled().then(function (result) {
            assert.equal(result, false);
            callback();
        });
    });

    this.Then(/^Following Tool Bar action button will be enabled: 'Add', 'Edit', 'View'$/, function (callback) {
        actionButtons.getAddButton().isEnabled().then(function (result) {
            assert.equal(result, true);
        });
        actionButtons.getEditButton().isEnabled().then(function (result) {
            assert.equal(result, true);
        });
        actionButtons.getViewButton().isEnabled().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.When(/^User click on 'View' tool bar action$/, function (callback) {
        commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').get(1).getText().then(function (res) {
            expectedResultDictionary.gridFirstColumnText = res;
        });
        actionButtons.getViewButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^User will be navigated to Create Group screen$/, function (callback) {
        browser.getCurrentUrl().then(function (result) {
            assert.include(result.toLowerCase(), 'group/add');
            callback();
        });
    });

    this.Given(/^Group screen is opened$/, function (callback) {
        callback.pending();
    });

    this.Then(/^On click on 'Code' field, user will be navigated to Group View screen for the record$/, function (callback) {
        var getCodeHyperlink = commonlib.elementChaining(grid.getGridRows().first(), 'css', 'td > a');
        commonlib.waitForElement(getCodeHyperlink).then(function (result) {
            if (result) {
                getCodeHyperlink.click().then(function () {
                    browser.getCurrentUrl().then(function (result) {
                        assert.include(result.toLowerCase(), 'group/view');
                        callback();
                    });
                });
            }
        });
    });

    this.When(/^User verify the search text field in Group screen for each column in the grid$/, function (callback) {
        grid.getSearchBoxes().count().then(function (length) {
            assert.equal(length, 3);
            callback();
        });

    });

    this.Then(/^User will be navigated to selected record group screen in View mode$/, function (callback) {
        groupPage.getCodeInViewMode().getText().then(function (res) {
            assert.equal(res.toLowerCase(), expectedResultDictionary.gridFirstColumnText.toLowerCase());
            callback();
        });
    });

    this.Then(/^User will be navigated to selected record group screen in Edit mode$/, function (callback) {
        groupPage.getCodeByModel().getAttribute(settings.constants.VALUE).then(function (res) {
            assert.equal(res.toLowerCase(), expectedResultDictionary.gridFirstColumnText.toLowerCase());
            callback();
        });
    });

    this.Then(/^User will be navigated to first selected record group screen in View mode$/, function (callback) {
        groupPage.getCodeInViewMode().getText().then(function (res) {
            assert.equal(res.toLowerCase(), expectedResultDictionary.gridFirstColumnText.toLowerCase());
            callback();
        });
    });

    this.Then(/^User will be navigated to first selected record group screen in Edit mode$/, function (callback) {
        groupPage.getCodeByModel().getAttribute(settings.constants.VALUE).then(function (res) {
            assert.equal(res.toLowerCase(), expectedResultDictionary.gridFirstColumnText.toLowerCase());
            callback();
        });
    });

    this.When(/^User click on 'View' tool bar action in Group office screen$/, function (callback) {
        commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').get(1).getText().then(function (res) {
            expectedResultDictionary.gridFirstColumnText = res;
        });
        actionButtons.getViewButton().click().then(function () {
            callback();
        });
    });

    this.When(/^User click on 'Edit' tool bar action in Group office screen$/, function (callback) {
        commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').get(1).getText().then(function (res) {
            expectedResultDictionary.gridFirstColumnText = res;
        });
        actionButtons.getEditButton().click().then(function () {
            callback();
        });
    });
};
module.exports = myStepDefinitionsWrapper;