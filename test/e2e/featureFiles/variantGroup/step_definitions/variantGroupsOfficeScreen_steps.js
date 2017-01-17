var myStepDefinitionsWrapper = function () {

    var variantGroupPage = require('../../../pages/variantGroup');
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

    this.Given(/^Variant Group Office screen$/, function (callback) {
        commonlib.open();
        variantGroupPage.getVariantGroupLink().click().then(function () {
            callback();
        });
    });

    this.Then(/^The breadcrumb will display following value: Catalog > Variant Groups$/, function (callback) {
        var text = '';
        breadCrumb.getBreadCrumbModuleTitle().getText().then(function (result) {
            text = result;
            breadCrumb.getBreadCrumbPageTitle().getText().then(function (res) {
                text = text + ' > ' + res;
                assert.equal(text.toLowerCase(), 'catalog > variant groups');
                callback();
            });
        });
    });

    this.Then(/^There will be an icon in side bar navigation for Variant Group$/, function (callback) {
        callback();
    });

    this.When(/^User has selected single record form the grid for Variant Groups$/, function (callback) {
        commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').first().click().then(function () {
            callback();
        });
    });

    this.Then(/^The title for the option in side bar will be 'Variant Groups'$/, function (callback) {
        sideBar.getSidebarLinks().get(3).getAttribute('title').then(function (result) {
            assert.equal(result.toLowerCase(), 'variant groups');
            callback();
        });
    });

    this.When(/^User click on option 'Variant Groups' from the side bar navigation$/, function (callback) {
        variantGroupPage.getVariantGroupLink().click().then(function () {
            callback();
        });
    });

    this.Then(/^User will be navigated to Variant Group Office screen$/, function (callback) {
        browser.getCurrentUrl().then(function (result) {
            assert.include(result.toLowerCase(), 'variantgroup');
            callback();
        });
    });

    this.Then(/^Search ability will be available on following fields in the grid: 'Code', 'Title', 'Description'$/, function (callback) {
        grid.getFilterIcon().click().then(function () {
            grid.getSearchBoxes().count().then(function (length) {
                assert.equal(length, 3);
                callback();
            });
        });
    });

    this.When(/^User verify the leading field 'Code' in the grid for Variant Groups$/, function (callback) {
        grid.getGridHeadings().first().getText().then(function (result) {
            assert.include(result, settings.constants.CODE);
            callback();
        });
    });

    this.Then(/^Leading field will be a link for Variant Groups$/, function (callback) {
        commonlib.elementChaining(grid.getGridRows().first(), 'tagname', 'a').getOuterHtml().then(function (result) {
            assert.include(result.toLowerCase(), '</a>');
            callback();
        });
    });

    this.Given(/^Variant Group Office screen with filter enabled$/, function (callback) {
        commonlib.open();
        variantGroupPage.getVariantGroupLink().click().then(function () {
            grid.getFilterIcon().isEnabled().then(function () {
                callback();
            });
        });
    });

    this.When(/^User navigate to Variant Group Office screen$/, function (callback) {
        variantGroupPage.getVariantGroupLink().click().then(function () {
            callback();
        });
    });

    this.Given(/^Variant Group Office screen is opened with all records selected$/, function (callback) {
        commonlib.open();
        variantGroupPage.getVariantGroupLink().click().then(function () {
            grid.getMegaSelector().click().then(function () {
                callback();
            });
        });
    });

    this.Then(/^User will be navigated to Create Variant Group screen$/, function (callback) {
        variantGroupPage.getVariantGroupDetailsHeading().isDisplayed().then(function () {
            variantGroupPage.getCodeTextBox().getAttribute('value').then(function (variantItemCodeText) {
                variantGroupPage.getCodeTextBox().isEnabled().then(function (isEnabled) {
                    assert.isTrue(isEnabled, "Items Code text box in not Enabled which is not as expected");
                    assert.equal(variantItemCodeText, '', "Items Code text box is not in Add mode");
                    callback();
                });
            });
        });
    });

    this.Then(/^On click on 'Code' field, user will be navigated to variantGroup View screen for the record$/, function (callback) {
        var getCodeHyperlink = commonlib.elementChaining(grid.getGridRows().first(), 'css', 'td > a');
        commonlib.waitForElement(getCodeHyperlink).then(function (result) {
            if (result) {
                getCodeHyperlink.click().then(function () {
                    browser.getCurrentUrl().then(function (result) {
                        assert.include(result.toLowerCase(), 'variantgroup/view');
                        callback();
                    });
                });
            }
        });
    });

    this.When(/^User verify the search text field in Group Variant screen for each column in the grid$/, function (callback) {
        grid.getSearchBoxes().count().then(function (length) {
            assert.equal(length, 3);
            callback();
        });
    });

    this.Then(/^User will be navigated to selected record, variant Group screen in View mode$/, function (callback) {
        variantGroupPage.getCodeInViewMode().getText().then(function (res) {
            assert.equal(res.toLowerCase(), expectedResultDictionary.gridFirstColumnText.toLowerCase());
            callback();
        });
    });

    this.Then(/^User will be navigated to first selected record, variant Group screen in View mode$/, function (callback) {
        variantGroupPage.getCodeInViewMode().getText().then(function (res) {
            assert.equal(res.toLowerCase(), expectedResultDictionary.gridFirstColumnText.toLowerCase());
            callback();
        });
    });

    this.When(/^User click on 'Add' tool bar action for Variant Groups$/, function (callback) {
        actionButtons.getAddButton().click().then(function () {
            callback();
        });
    });

    this.When(/^User click on 'Edit' tool bar action for Variant Groups$/, function (callback) {
        commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').get(1).getText().then(function (res) {
            expectedResultDictionary.gridFirstColumnText = res;
        });
        actionButtons.getEditButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^User will be navigated to selected record, variant Group screen in Edit mode$/, function (callback) {
        variantGroupPage.getVariantGroupDetailsHeading().isDisplayed().then(function () {
            variantGroupPage.getCodeTextBox().getAttribute('value').then(function (variantItemCodeText) {
                variantGroupPage.getCodeTextBox().isEnabled().then(function (isEnabled) {
                    assert.isTrue(isEnabled, "Items Code text box in not Enabled which is not as expected");
                    assert.equal(variantItemCodeText, expectedResultDictionary.gridFirstColumnText, 'Items Code text box is not in Edit mode');
                    callback();
                });
            });
        });
    });

    this.Then(/^User will be navigated to first selected record, variant Group screen in Edit mode$/, function (callback) {
        callback.pending();
    });

    this.When(/^User click on 'View' tool bar action on variant Group screen$/, function (callback) {
        commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').get(1).getText().then(function (res) {
            expectedResultDictionary.gridFirstColumnText = res;
        });
        actionButtons.getViewButton().click().then(function () {
            callback();
        });
    });
};
module.exports = myStepDefinitionsWrapper;