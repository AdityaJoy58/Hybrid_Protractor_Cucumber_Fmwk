var myStepDefinitionsWrapper = function () {

    var dynamicAttr = require('../../../pages/dynamicAttribute');
    var actionButtons = require('../../../pages/actionButtons');
    var breadCrumb = require('../../../pages/breadCrumb');
    var settings = require('../../../common/settings');
    var commonlib = require('../../../common/commonLib');
    var chai = require(settings.constants.CHAI);
    var assert = chai.assert;
    var expectedResultDictionary = {};
    this.setDefaultTimeout(settings.config.STEPTIMEOUT);

    this.Given(/^Dynamic Attribute office screen is opened$/, function (callback) {
        commonlib.open();
        callback();
    });

    this.When(/^User select one record checkbox from the grid$/, function (callback) {
        commonlib.elementChainingAll(dynamicAttr.getAllGridElements().first(), 'tagname', 'td').first().click().then(function () {
            callback();
        });
    });

    this.Then(/^Action button 'Edit' and 'View' will be enabled in the Tool bar$/, function (callback) {
        actionButtons.getEditButton().isEnabled().then(function (result) {
            assert.equal(result, true);
            actionButtons.getViewButton().isEnabled().then(function (result) {
                assert.equal(result, true);
                callback();
            });
        });
    });

    this.When(/^User select multiple records checkbox from the grid$/, function (callback) {
        var gridItems = dynamicAttr.getAllGridElements();
        commonlib.elementChainingAll(gridItems.first(), 'tagname', 'td').first().click().then(function () {
            commonlib.elementChainingAll(gridItems.last(), 'tagname', 'td').first().click().then(function () {
                callback();
            });
        });

    });

    this.When(/^User select one record$/, function (callback) {
        var gridItems = dynamicAttr.getAllGridElements();
        commonlib.elementChainingAll(gridItems.first(), 'tagname', 'td').get(1).getText().then(function (res) {
            expectedResultDictionary.gridFirstColumnText = res;
        });
        commonlib.elementChainingAll(gridItems.first(), 'tagname', 'td').first().click().then(function () {
            callback();
        });
    });

    this.When(/^Click on action tool bar 'View' button$/, function (callback) {
        commonlib.elementChainingAll(dynamicAttr.getAllGridElements().first(), 'tagname', 'td').get(1).getText().then(function (res) {
            expectedResultDictionary.gridFirstColumnText = res;
        });
        actionButtons.getViewButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^record will open in view mode with paging indication as (.*)$/, function (callback) {
        actionButtons.getDoneButton().isEnabled().then(function (result) {
            assert.equal(result, false);
        });
        actionButtons.getSaveButton().isEnabled().then(function (result) {
            assert.equal(result, false);
        });
        actionButtons.getPager().getInnerHtml().then(function (result) {
            assert.include(result, 'fa fa-angle-left');
            assert.include(result, '1/1');
            assert.include(result, 'fa fa-angle-right');
            //callback();
        });
        dynamicAttr.getDynamicAttributeIdTextBox().getAttribute(settings.constants.VALUE).then(function (result) {
            assert.equal(result.toLowerCase(), expectedResultDictionary.gridFirstColumnText.toLowerCase());
        });
    });

    this.Then(/^'Next' and 'Previous' arrows in paging indication will be disabled$/, function (callback) {
        actionButtons.getPagerPreviousButton().isEnabled().then(function (result) {
            assert.equal(result, false);
            actionButtons.getPagerNextButton().isEnabled().then(function (res) {
                assert.equal(res, false);
                callback();
            });
        });
    });

    this.When(/^User click on the attribute id's link of any of the record$/, function (callback) {
        var gridItems = dynamicAttr.getAllGridElements();
        commonlib.elementChainingAll(gridItems.first(), 'tagname', 'td').get(1).getText().then(function (res) {
            expectedResultDictionary.gridFirstColumnText = res;
        });
        commonlib.elementChaining(gridItems.first(), 'tagname', 'a').click().then(function () {
            callback();
        });
    });

    this.When(/^User double click anywhere on the record except attribute id link$/, function (callback) {
        var gridItems = dynamicAttr.getAllGridElements();
        commonlib.elementChainingAll(gridItems.first(), 'tagname', 'td').get(1).getText().then(function (res) {
            expectedResultDictionary.gridFirstColumnText = res;
        });
        commonlib.doubleClickElement(gridItems.first());
        callback();
    });

    this.When(/^Click on action tool bar 'Edit' button$/, function (callback) {
        commonlib.elementChainingAll(dynamicAttr.getAllGridElements().first(), 'tagname', 'td').get(1).getText().then(function (res) {
            expectedResultDictionary.gridFirstColumnText = res;
        });
        actionButtons.getEditButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^record will get open in edit mode with paging indication as (.*)$/, function (callback) {
        actionButtons.getDoneButton().isEnabled().then(function (result) {
            assert.equal(result, true);
        });
        actionButtons.getSaveButton().isEnabled().then(function (result) {
            assert.equal(result, true);
        });
        actionButtons.getPager().getInnerHtml().then(function (result) {
            assert.include(result, 'fa fa-angle-left');
            assert.include(result, '1/1');
            assert.include(result, 'fa fa-angle-right');
            //callback();
        });
        dynamicAttr.getDynamicAttributeIdTextBox().getAttribute(settings.constants.VALUE).then(function (result) {
            assert.equal(result.toLowerCase(), expectedResultDictionary.gridFirstColumnText.toLowerCase());
        });
    });

    this.When(/^User select 1st, 2nd and 3rd record in the grid$/, function (callback) {
        var gridItems = dynamicAttr.getAllGridElements();
        commonlib.elementChainingAll(gridItems.first(), 'tagname', 'td').first().click().then(function () {
            commonlib.elementChainingAll(gridItems.get(1), 'tagname', 'td').first().click().then(function () {
                commonlib.elementChainingAll(gridItems.get(2), 'tagname', 'td').first().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^first record will open in view mode with indication as (.*)$/, function (callback) {
        actionButtons.getDoneButton().isEnabled().then(function (result) {
            assert.equal(result, false);
        });
        actionButtons.getSaveButton().isEnabled().then(function (result) {
            assert.equal(result, false);
        });
        actionButtons.getPager().getInnerHtml().then(function (result) {
            assert.include(result, 'fa fa-angle-left');
            assert.include(result, '1/3');
            assert.include(result, 'fa fa-angle-right');
        });
        dynamicAttr.getDynamicAttributeIdTextBox().getAttribute(settings.constants.VALUE).then(function (result) {
            assert.equal(result.toLowerCase(), expectedResultDictionary.gridFirstColumnText.toLowerCase());
        });
    });

    this.Then(/^'Previous' arrow in paging indication will be disabled for the first record$/, function (callback) {
        actionButtons.getPagerPreviousButton().isEnabled().then(function (result) {
            assert.equal(result, false);
            callback();
        });
    });

    this.Then(/^User will be able to navigate to next record by Next arrow$/, function (callback) {
        actionButtons.getPagerNextButton().isEnabled().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.When(/^User click on the 2nd record's leading fields link$/, function (callback) {
        var gridItems = dynamicAttr.getAllGridElements();
        commonlib.elementChainingAll(gridItems.get(1), 'tagname', 'td').get(1).getText().then(function (res) {
            expectedResultDictionary.gridFirstColumnText = res;
        });
        commonlib.elementChaining(gridItems.get(1), 'tagname', 'a').click().then(function () {
            callback();
        });
    });

    this.Then(/^2nd record will open in view mode with indication as (.*)$/, function (callback) {
        actionButtons.getDoneButton().isEnabled().then(function (result) {
            assert.equal(result, false);
        });
        actionButtons.getSaveButton().isEnabled().then(function (result) {
            assert.equal(result, false);
        });
        actionButtons.getPager().getInnerHtml().then(function (result) {
            assert.include(result, 'fa fa-angle-left');
            assert.include(result, '2/3');
            assert.include(result, 'fa fa-angle-right');
        });
        dynamicAttr.getDynamicAttributeIdTextBox().getAttribute(settings.constants.VALUE).then(function (result) {
            assert.equal(result.toLowerCase(), expectedResultDictionary.gridFirstColumnText.toLowerCase());
        });
    });

    this.Then(/^User will be able to navigate across all selected records by 'Next' and 'Previous' arrows$/, function (callback) {
        actionButtons.getPagerPreviousButton().isEnabled().then(function (result) {
            assert.equal(result, true);
            actionButtons.getPagerNextButton().isEnabled().then(function (result) {
                assert.equal(result, true);
                callback();
            });
        });
    });

    this.When(/^User double click on the 2nd record's row$/, function (callback) {
        var gridItems = dynamicAttr.getAllGridElements();
        commonlib.elementChainingAll(gridItems.get(1), 'tagname', 'td').get(1).getText().then(function (res) {
            expectedResultDictionary.gridFirstColumnText = res;
        });
        commonlib.doubleClickElement(gridItems.get(1));
        callback();
    });

    this.When(/^User select 2nd, 4th and 5th record in the grid$/, function (callback) {
        var gridItems = dynamicAttr.getAllGridElements();
        commonlib.elementChainingAll(gridItems.get(1), 'tagname', 'td').first().click().then(function () {
            commonlib.elementChainingAll(gridItems.get(3), 'tagname', 'td').first().click().then(function () {
                commonlib.elementChainingAll(gridItems.get(4), 'tagname', 'td').first().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^User click on the 3rd record's leading field's link$/, function (callback) {
        var gridItems = dynamicAttr.getAllGridElements();
        commonlib.elementChainingAll(gridItems.get(2), 'tagname', 'td').get(1).getText().then(function (res) {
            expectedResultDictionary.gridFirstColumnText = res;
        });
        commonlib.elementChaining(gridItems.get(2), 'tagname', 'a').click().then(function () {
            callback();
        });
    });

    this.Then(/^3rd record will open in view mode with paging indication as (.*)$/, function (callback) {
        actionButtons.getDoneButton().isEnabled().then(function (result) {
            assert.equal(result, false);
        });
        actionButtons.getSaveButton().isEnabled().then(function (result) {
            assert.equal(result, false);
        });
        actionButtons.getPager().getInnerHtml().then(function (result) {
            assert.include(result, 'fa fa-angle-left');
            assert.include(result, '2/4');
            assert.include(result, 'fa fa-angle-right');
        });
        dynamicAttr.getDynamicAttributeIdTextBox().getAttribute(settings.constants.VALUE).then(function (result) {
            assert.equal(result.toLowerCase(), expectedResultDictionary.gridFirstColumnText.toLowerCase());
        });
    });

    this.When(/^User double click anywhere on the 6th record$/, function (callback) {
        var gridItems = dynamicAttr.getAllGridElements();
        commonlib.elementChainingAll(gridItems.get(5), 'tagname', 'td').get(1).getText().then(function (res) {
            expectedResultDictionary.gridFirstColumnText = res;
        });
        commonlib.doubleClickElement(gridItems.get(5));
        callback();
    });

    this.Then(/^6th record will open in view mode with paging indication as (.*)$/, function (callback) {
        actionButtons.getDoneButton().isEnabled().then(function (result) {
            assert.equal(result, false);
        });
        actionButtons.getSaveButton().isEnabled().then(function (result) {
            assert.equal(result, false);
        });
        actionButtons.getPager().getInnerHtml().then(function (result) {
            assert.include(result, 'fa fa-angle-left');
            assert.include(result, '4/4');
            assert.include(result, 'fa fa-angle-right');
        });
        dynamicAttr.getDynamicAttributeIdTextBox().getAttribute(settings.constants.VALUE).then(function (result) {
            assert.equal(result.toLowerCase(), expectedResultDictionary.gridFirstColumnText.toLowerCase());
        });
    });

    this.Then(/^'Next' arrow in paging navigation will be disabled$/, function (callback) {
        actionButtons.getPagerNextButton().isEnabled().then(function (result) {
            assert.equal(result, false);
            callback();
        });
    });

    this.Then(/^first record will open in edit mode with indication as (.*)$/, function (callback) {
        actionButtons.getDoneButton().isEnabled().then(function (result) {
            assert.equal(result, true);
        });
        actionButtons.getSaveButton().isEnabled().then(function (result) {
            assert.equal(result, true);
        });
        actionButtons.getPager().getInnerHtml().then(function (result) {
            assert.include(result, 'fa fa-angle-left');
            assert.include(result, '1/3');
            assert.include(result, 'fa fa-angle-right');
        });
        dynamicAttr.getDynamicAttributeIdTextBox().getAttribute(settings.constants.VALUE).then(function (result) {
            assert.equal(result.toLowerCase(), expectedResultDictionary.gridFirstColumnText.toLowerCase());
        });
    });

    this.Given(/^Dynamic Attribute office screen is opened with 1st, 2nd, 3rd and 4th record selected$/, function (callback) {
        callback.pending();
    });

    this.When(/^User filter the grid such that 3rd record is filtered out$/, function (callback) {
        callback.pending();
    });

    this.Then(/^First record will open in View mode with Only (\d+) out of the (\d+) selected records in the pagination$/, function (arg1, arg2, callback) {
        callback.pending();
    });

    this.Then(/^pagination indication will be (.*)$/, function (callback) {
        callback.pending();
    });

    this.Then(/^3rd record will not be part of pagination$/, function (callback) {
        callback.pending();
    });

    this.Then(/^First record will open in Edit mode with Only (\d+) out of the (\d+) selected records in the pagination$/, function (arg1, arg2, callback) {
        callback.pending();
    });

    this.Given(/^Attribute 1st, 2nd and 3rd open in Edit mode from Dynamic Attribute office screen$/, function (callback) {
        commonlib.open();
        var gridItems = dynamicAttr.getAllGridElements();
        commonlib.elementChainingAll(gridItems.first(), 'tagname', 'td').first().click().then(function () {
            commonlib.elementChainingAll(gridItems.get(1), 'tagname', 'td').first().click().then(function () {
                commonlib.elementChainingAll(gridItems.get(2), 'tagname', 'td').first().click().then(function () {
                    commonlib.elementChainingAll(gridItems.first(), 'tagname', 'td').get(1).getText().then(function (res) {
                        expectedResultDictionary.gridFirstColumnText = res;
                        actionButtons.getEditButton().click().then(function () {
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.When(/^User is on 1st record open in Edit mode$/, function (callback) {
        dynamicAttr.getDynamicAttributeIdTextBox().getAttribute(settings.constants.VALUE).then(function (result) {
            assert.equal(result.toLowerCase(), expectedResultDictionary.gridFirstColumnText.toLowerCase());
            callback();
        });
    });

    this.Then(/^breadcrumb will display 'Catalog > Dynamic Attribute > (.*) \- Edit'$/, function (callback) {
        breadCrumb.getBreadCrumbPageTitle().getText().then(function (result) {
            expectedResultDictionary.gridFirstColumnText = expectedResultDictionary.gridFirstColumnText + ' - Edit';
            assert.equal(result.toLowerCase(), expectedResultDictionary.gridFirstColumnText.toLowerCase());
        });
    });

    this.Then(/^user will be able to navigate to 3rd record using paging control$/, function (callback) {
        actionButtons.getPagerNextButton().isEnabled().then(function (result) {
            assert.equal(result, true);
        });
        actionButtons.getPagerNextButton().click().then(function () {
            actionButtons.getPagerNextButton().click().then(function () {
                actionButtons.getPagerNextButton().isEnabled().then(function (result) {
                    assert.equal(result, false);
                    callback();
                });
            });
        });
    });


    this.When(/^Click on action tool bar 'Add' button$/, function (callback) {
        actionButtons.getAddButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^Create New Dynamic attribute screen will be displayed$/, function (callback) {
        dynamicAttr.getDynamicAttributeIdTextBox().getAttribute(settings.constants.VALUE).then(function (result) {
            assert.equal(result, '');
            callback();
        });
    });

    this.Then(/^No paging control will be displayed on the screen$/, function (callback) {
        actionButtons.getPager().getOuterHtml().then(function (result) {
            assert.equal(result, '<ul></ul>');
            callback();
        });
    });

    this.Then(/^paging control Next arrow will be disabled once user will navigate to last selected record \(3rd record\)$/, function (callback) {
        actionButtons.getPagerNextButton().isEnabled().then(function (result) {
            assert.equal(result, true);
        });
        actionButtons.getPagerNextButton().click().then(function () {
            actionButtons.getPagerNextButton().click().then(function () {
                actionButtons.getPagerNextButton().isEnabled().then(function (result) {
                    assert.equal(result, false);
                    callback();
                });
            });
        });
    });

    this.Then(/^User will be able to navigate to 'Previous' record by 'Previous' arrow$/, function (callback) {
        actionButtons.getPagerPreviousButton().isEnabled().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.When(/^Click on the action tool bar 'View' button$/, function (callback) {
        callback.pending();
    });

    this.When(/^Click on the action tool bar 'Edit' button$/, function (callback) {
        callback.pending();
    });

    this.Then(/^breadcrumb for 3rd record will display 'Catalog > Dynamic Attribute > Attribute ID of 3rd record>  Edit'$/, function (callback) {
        breadCrumb.getBreadCrumbPageTitle().getText().then(function (result) {
            dynamicAttr.getDynamicAttributeIdTextBox().getAttribute(settings.constants.VALUE).then(function (res) {
                var temp = res + ' - Edit';
                assert.equal(result.toLowerCase(), temp.toLowerCase());
                callback();
            });
        });
    });
};
module.exports = myStepDefinitionsWrapper;