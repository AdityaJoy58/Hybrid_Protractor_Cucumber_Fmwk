var myStepDefinitionsWrapper = function () {

    var dynamicAttr = require('../../../pages/dynamicAttribute');
    var breadCrumb = require('../../../pages/breadCrumb');
    var settings = require('../../../common/settings');
    var commonlib = require('../../../common/commonLib');
    var grid = require('../../../pages/grid');

    var chai = require(settings.constants.CHAI);
    this.setDefaultTimeout(settings.config.STEPTIMEOUT);
    var assert = chai.assert;
    var totalRecords = '';
    var filterRecords = '';
    var textToFilterSearch = 'DA';

    this.Given(/^Cental Office Screen is Opened$/, function (callback) {
        callback();
    });

    this.When(/^User navigate to Dynamic Attribute page$/, function (callback) {
        commonlib.open();
        callback();
    });

    this.Then(/^Dynamic Attribute page should get open with Attribute id and Attribute name columns in grid$/, function (callback) {
        grid.getGridHeadings().first().getText().then(function (text) {
            assert.equal(text, 'Dynamic Attribute ID');
            grid.getGridHeadings().get(1).getText().then(function (text) {
                assert.equal(text, 'Dynamic Attribute Name');
                callback();
            });
        });
    });

    this.Then(/^Total number of record indication should be there on top of the grid$/, function (callback) {
        dynamicAttr.getTotalRecords().getText().then(function (records) {
            assert.isNotNull(records);
            callback();
        });
    });

    this.Then(/^Total number of record count should be total no of records exist in grid$/, function (callback) {
        var totalRecords = "";
        dynamicAttr.getTotalRecords().getText().then(function (records) {
            totalRecords = records;
            dynamicAttr.getAllGridElements().then(function (elements) {
                assert.equal(elements.length, parseInt(totalRecords));
                callback();
            });
        });
    });

    this.Given(/^Dynamic Attribute screen is Opened$/, function (callback) {
        commonlib.open();
        callback();
    });

    this.When(/^User mouse over on attribute id and click on it$/, function (callback) {
        dynamicAttr.getGridElement().then(function () {
            callback();
        });
    });

    this.Then(/^Attribute id should get opened in view mode$/, function (callback) {
        dynamicAttr.getElementInViewMode().isEnabled().then(function (result) {
            assert.isFalse(result);
            callback();
        });
    });

    this.Then(/^Sorting indication should be there next to both the columns$/, function (callback) {
        dynamicAttr.getSortingIcon().first().isEnabled().then(function (result) {
            assert.isTrue(result);
            dynamicAttr.getSortingIcon().get(1).isEnabled().then(function (res) {
                assert.isTrue(res);
                callback();
            });
        });
    });

    this.Then(/^all the records should be alphabetically sorted based on the Dynamic attribute field by default$/, function (callback) {
        dynamicAttr.getAllGridElements().then(function (elements) {
            assert.isNotNull(elements);
            callback();
        });
    });

    this.Given(/^Dynamic Attribute page is opened$/, function (callback) {
        commonlib.open();
        callback();
    });

    this.When(/^user click on the sorting option first time on any of the column$/, function (callback) {
        grid.getGridHeadings().first().click().then(function () {
            callback();
        });
    });

    this.Then(/^all the records should get sorted in descending order$/, function (callback) {
        dynamicAttr.getAllGridElements().then(function (elements) {
            assert.isNotNull(elements);
            callback();
        });
    });

    this.Then(/^down arrow should get highlighted in black color$/, function (callback) {
        grid.getSortingIconAsc(grid.getGridHeadings().first()).getOuterHtml().then(function (result) {
            assert.include(result.toLowerCase(), 'active');
            callback();
        });
    });

    this.When(/^user click on the sorting option second time on any of the column$/, function (callback) {
        grid.getGridHeadings().first().click().then(function () {
                callback();
        });
    });

    this.Then(/^all the records should get sorted in ascending order$/, function (callback) {
        commonlib.elementChainingAll(grid.getGridRows().get(0), 'tagname', 'td').get(2).getText().then(function (firstRowText) {
            commonlib.elementChainingAll(grid.getGridRows().get(1), 'tagname', 'td').get(2).getText().then(function (secondRowText) {
                assert.isAtMost(firstRowText.localeCompare(secondRowText), 0);
                callback();
            });
        });
    });

    this.Then(/^up arrow should get highlighted in black color$/, function (callback) {
        grid.getSortingIconAsc(grid.getGridHeadings().first()).getOuterHtml().then(function (result) {
            assert.include(result.toLowerCase(), 'active');
            callback();
        });
    });

    this.Given(/^Catalog office Screen Should be Opened$/, function (callback) {
        commonlib.open();
        callback();
    });

    this.When(/^User Click on search Text box$/, function (callback) {
        dynamicAttr.getFilterIcon().click().then(function () {
            callback();
        });
    });


    this.When(/^User Enter single Text in Search Text$/, function (callback) {
        inputText = "m";
        dynamicAttr.getFilterIdTextBox().sendKeys(inputText).then(function () {
            callback();
        });

    });

    this.Then(/^The results should be filtered on the basis of filter criteria$/, function (callback) {
        dynamicAttr.getAllGridElements().then(function (elements) {
            assert.isNotNull(elements.length);
            callback();
        });
    });

    this.When(/^User click on search Text box of any of the column$/, function (callback) {
        dynamicAttr.getFilterIdTextBox().click().then(function () {
               callback();
        })
    });

    this.When(/^enters text in search Text$/, function (callback) {
        inputText = "m";
        dynamicAttr.getFilterIdTextBox().sendKeys(inputText).then(function () {
            callback();
        });
    });

    this.Then(/^The results should be filtered on the fly based on the filter criteria entered by user$/, function (callback) {
        dynamicAttr.getAllGridElements().then(function (elements) {
            assert.isAbove(elements.length, 0);
            callback();
        });
    });

    this.When(/^User enter search criteria in both the columns$/, function (callback) {
        inputText = "m";
        dynamicAttr.getFilterIdTextBox().sendKeys(inputText).then(function () {
            dynamicAttr.getFilterNameTextBox().sendKeys(inputText);
            callback();

        });
    });

    this.Then(/^The results will be filtered on the basis of entered search criteria$/, function (callback) {
        dynamicAttr.getAllGridElements().then(function (elements) {
            assert.isAbove(elements.length, 0);
            callback();
        });
    });

    this.Given(/^filter is applier on the columns$/, function (callback) {
        inputText = "m";
        commonlib.open();
        dynamicAttr.getFilterIcon().click().then(function () {
            dynamicAttr.getFilterIdTextBox().sendKeys(inputText);
            callback();
        });
    });

    this.When(/^user click on the remove filter icon$/, function (callback) {
        commonlib.waitForElement(dynamicAttr.getRemoveFilterIcon()).then(function () {
            dynamicAttr.getRemoveFilterIcon().click().then(function () {
                callback();
            });
        });
    });

    this.Then(/^filter should get remove and grid should get appear in alphabetical order by attribute id by default$/, function (callback) {
        dynamicAttr.getAllGridElements().then(function (elements) {
            assert.isNotNull(elements);
            callback();
        });
    });

    this.When(/^User click on filter icon$/, function (callback) {
        dynamicAttr.getFilterIcon().click().then(function () {
            callback();
        });
    });

    this.When(/^start entering the text on the filter text box$/, function (callback) {
        inputText = "m";
        dynamicAttr.getFilterIdTextBox().sendKeys(inputText).then(function () {
            dynamicAttr.getFilterHighlighted().then(function (elements) {
                callback();
            });
        });
    });

    this.Then(/^The Grid records will filtered out on the fly based on the enter criteia and characters would get highlighted in the Grid$/, function (callback) {
        dynamicAttr.getFilterHighlighted().then(function (elements) {
            assert.isNotNull(elements);
            callback();
        });

    });

    this.When(/^click on the mega\-selector$/, function (callback) {
        dynamicAttr.getMegaSelector().click().then(function () {
            callback();
        });
    });

    this.Then(/^All the records should get checked$/, function (callback) {
        dynamicAttr.getSelectedElements().then(function (checkedElements) {
            dynamicAttr.getAllGridElements().then(function (elements) {
                assert.equal(checkedElements.length, elements.length);
                callback();
            });
        });
    });

    this.When(/^User click on the mega\- selector$/, function (callback) {
        dynamicAttr.getMegaSelector().click().then(function () {
            callback();
        });
    });

    this.Then(/^All the records sould get unchecked$/, function (callback) {
        dynamicAttr.getSelectedElements().then(function (checkedElements) {
            dynamicAttr.getAllGridElements().then(function (elements) {
                assert.notEqual(checkedElements.length, elements.length);
                callback();
            });
        });
    });

    this.When(/^User select one record in a grid$/, function (callback) {
        dynamicAttr.onGridRowClick().then(function () {
            callback();
        });
    });

    this.When(/^User navigate to the dynamic attribute page$/, function (callback) {
        commonlib.open();
        callback();
    });

    this.Then(/^user should be able to see all (\d+) tool bar action button as Add Update and Edit\.$/, function (arg1, callback) {
        dynamicAttr.onGridRowClick().then(function () {
            assert.isNotNull(dynamicAttr.editBtnClick());
            assert.isNotNull(dynamicAttr.viewBtnClick());
            assert.isNotNull(dynamicAttr.onAdd());
            callback();
        });
    });

    this.Then(/^tool bar action 'Add' should be active$/, function (callback) {
        dynamicAttr.onGridRowClick().then(function () {
            dynamicAttr.onAdd().isEnabled().then(function (res) {
                assert.isNotNull(res);
                callback();
            });
        });

    });

    this.Then(/^user should be able to click on the tool bar action 'Add'$/, function (callback) {
        dynamicAttr.onAdd().isEnabled().then(function (res) {
            assert.isNotNull(res);
            callback();
        });
    });

    this.When(/^User does the single or multiple selection$/, function (callback) {
        dynamicAttr.onGridRowClick().then(function () {
            callback();
        });
    });

    this.Then(/^tool bar action 'Edit' should become active$/, function (callback) {
        dynamicAttr.editBtnClick().isEnabled().then(function (res) {
            assert.isNotNull(res);
            callback();
        });
    });

    this.Then(/^user should be able to click on the tool bar action 'Edit'$/, function (callback) {
        dynamicAttr.editBtnClick().isEnabled().then(function (res) {
            assert.isNotNull(res);
            callback();
        });
    });

    this.Then(/^tool bar action 'View' should become active$/, function (callback) {
        dynamicAttr.viewBtnClick().isEnabled().then(function (res) {
            assert.isNotNull(res);
            callback();
        });
    });

    this.Then(/^user should be able to click on the tool bar action 'View'$/, function (callback) {
        dynamicAttr.viewBtnClick().isEnabled().then(function (res) {
            assert.isNotNull(res);
            callback();
        });
    });

    this.When(/^One record is selected by clicking anywhere on the row$/, function (callback) {
        dynamicAttr.getAnyElement().then(function (elements) {
            dynamicAttr.getSelectedElements().count().then(function (res) {
                assert.isNotNull(res);
                callback();
            });
        });
    });

    this.Then(/^Record should get highlighted with focus$/, function (callback) {
        dynamicAttr.getHighlightedRecords().then(function (elements) {
            assert.isAbove(elements.length, 0);
            callback();
        });

    });

    this.When(/^Second record is selected by clicking on check box$/, function (callback) {
        var element = dynamicAttr.onGridRowClick().then(function (element) {
            callback();
        });
    });

    this.Then(/^highlighlting with foucus should get moved from first record to second record$/, function (callback) {
        var flag = false;
        dynamicAttr.getHighlightedRecords().then(function (elements) {
            assert.equal(1, elements.length);
            callback();
        });
    });

    this.When(/^User selects one record  by clicking on checkbox$/, function (callback) {
        dynamicAttr.getAllCheckBox().first().click().then(function () {
            callback();
        });

    });

    this.When(/^User selects another record by clicking on checkbox$/, function (callback) {
        dynamicAttr.getAllCheckBox().last().click().then(function (elements) {
            callback();
        })
    });


    this.Then(/^Both the records should get highlighted$/, function (callback) {
        dynamicAttr.getHighlightedRecords().then(function (elements) {
            assert.isAbove(elements.length, 0);
            callback();
        });
    });

    this.Then(/^Focus should get move to the latest selected record$/, function (callback) {
        dynamicAttr.getHighlightedRecords().then(function () {
            assert.isNotNull(dynamicAttr.getActiveElement());
            callback();
        });
    });

    this.When(/^User clicking anywhere on the row of a unchecked record$/, function (callback) {
        dynamicAttr.getAllGridElements().first().click().then(function () {
            callback();
        });
    });

    this.Then(/^Focus should get moved to newly selected record but not highlighted$/, function (callback) {
        dynamicAttr.getHighlightedRecords().then(function (elements) {
            assert.isNotNull(dynamicAttr.getActiveElement());
            callback();
        });
    });

    this.When(/^User unselects any one of the checked records by clicking on checkbox$/, function (callback) {
        dynamicAttr.getAllGridElements().first().click().then(function () {
            callback();
        });
    });

    this.Then(/^Focus should get moved to unselected record$/, function (callback) {
        dynamicAttr.getHighlightedRecords().then(function (elements) {
            assert.isNotNull(dynamicAttr.getActiveElement());
            callback();
        });
    });

    this.Then(/^record should not be highlighted$/, function (callback) {
        callback();
    });


    this.Then(/^filter should be shown on both the columns by default$/, function (callback) {
        callback.pending();
    });


    this.When(/^start entering the text on the filter text box which does not match the existng data$/, function (callback) {
        commonlib.waitForElement(dynamicAttr.getFilterIdTextBox()).then(function () {
            dynamicAttr.getFilterIdTextBox().sendKeys(settings.constants.SEARCHTEXT).then(function () {
                callback();
            });
        });
    });

    this.Then(/^System should Shows generic text in which No results found indication will be displayed$/, function (callback) {
        dynamicAttr.gridNotResultsFound().getText().then(function (value) {
            assert.equal(settings.constants.NORESULTFOUNDTEXT.toLowerCase(), value.toLowerCase());
            callback();
        });
    });

    this.When(/^User selects any one of the records$/, function (callback) {
        var gridItems = dynamicAttr.getAllGridElements();
        commonlib.elementChainingAll(gridItems.first(), 'tagname', 'td').first().click().then(function () {
            callback();
        });
    });

    this.When(/^User holds the CTRL key$/, function (callback) {
        callback();
    });

    this.When(/^User clicks  up\/down arrows in the keyboard$/, function (callback) {
        commonlib.getDownArrowKey().then(function () {
            callback();
        });
    });

    this.Then(/^The focus indication should get moved accordingly$/, function (callback) {
        dynamicAttr.getHighLightedRows().count().then(function (result) {
            assert.equal(result, 1);
            commonlib.sendBlankKeyToReleasePreviousKeyEvent().then(function () {
                callback();
            })
        });
    });

    this.When(/^Selected record is focused$/, function (callback) {
        dynamicAttr.getHighLightedRows().count().then(function (result) {
            assert.equal(result, 1);
            callback();
        });
    });

    this.When(/^User clicks space in the keyboard$/, function (callback) {
        commonlib.getSpaceKey().then(function () {
            callback();
        });
    });

    this.Then(/^Record should get unselected$/, function (callback) {
        dynamicAttr.getSelectedRecords().then(function (selectedCount) {
            assert.equal(selectedCount.length, 0);
            commonlib.sendBlankKeyToReleasePreviousKeyEvent().then(function () {
                callback();
            })
        });
    });

    this.When(/^One record is focused but not selected$/, function (callback) {
        dynamicAttr.getGridRows().first().click().then(function () {
            callback();
        });
    });

    this.Then(/^Record should get selected$/, function (callback) {
        dynamicAttr.getSelectedRecords().then(function (selectedCount) {
            assert.equal(selectedCount.length, 1);
            commonlib.sendBlankKeyToReleasePreviousKeyEvent().then(function () {
                callback();
            })
        });
    });

    this.Given(/^Catalog Office Screen Should be Opened$/, function (callback) {
        commonlib.open();
        callback();
    });


    this.When(/^User filter "([^"]*)" record from grid out of "([^"]*)" records$/, function (arg1, arg2, callback) {
        dynamicAttr.getAllGridElements().then(function (elements){
            totalRecords = elements.length;
            assert.isAbove(totalRecords,0);
            grid.getSearchBoxes().first().sendKeys(textToFilterSearch).then(function () {
                callback();
            });
        });
    });

    this.When(/^User select "([^"]*)" record from grid$/, function (arg1, callback) {
        commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').count().then(function(filterCount){
            if(filterCount > 2)
            {
                commonlib.elementChainingAll(grid.getGridRows().get(0), 'tagname', 'td').click().then(function () {
                    commonlib.elementChainingAll(grid.getGridRows().get(1), 'tagname', 'td').click().then(function () {
                        callback();
                    });
                });
            }
        });
    });

    this.When(/^Count the total records in a grid$/, function (callback) {
        dynamicAttr.getAllGridElements().then(function (elements){
            filterRecords = elements.length;
            assert.isAbove(filterRecords,0);
            callback();
        });
    });

    this.Then(/^The record indication should be appear as x records\/y records\-z records$/, function (callback) {
        var temp = '';
        grid.getHighlightedRowsOnFilter(textToFilterSearch).then(function (highlightedElements) {
            temp = highlightedElements.length;
        });
        grid.getFilterButton().getText().then(function (records) {
            records.trim();
            assert.equal(records,filterRecords+' Results / '+totalRecords+' Results - 2 Selected');
            callback();
        });
    });

    this.When(/^User holds Shift key$/, function (callback) {
        commonlib.getShiftKey().then(function () {
            callback();
        });
    });

    this.When(/^User select the "([^"]*)" record$/, function (arg1, callback) {
        var gridItems = dynamicAttr.getAllGridElements();
        commonlib.elementChainingAll(gridItems.get(4), 'tagname', 'td').first().click().then(function () {
            callback();
        });
    });

    this.Then(/^All the records from "([^"]*)" to "([^"]*)" should get selected and checked$/, function (arg1, arg2, callback) {
        dynamicAttr.getSelectedRecords().then(function (selectedCount) {
            assert.equal(selectedCount.length, arg2);
            commonlib.sendBlankKeyToReleasePreviousKeyEvent().then(function () {
                callback();
            });
        });
    });

    this.When(/^"([^"]*)" record is focused and selected$/, function (arg1, callback) {
        var gridItems = dynamicAttr.getAllGridElements();
        commonlib.elementChainingAll(gridItems.first(), 'tagname', 'td').first().click().then(function () {
            callback();
        });
    });

    this.When(/^Down arrow is pressed$/, function (callback) {
        commonlib.getDownArrowKey().then(function () {
            callback();
        });
    });

    this.Then(/^"([^"]*)" record should get focused and selected$/, function (arg1, callback) {
        dynamicAttr.getSelectedRecords().then(function (selectedCount) {
            assert.equal(selectedCount.length, arg1);
            commonlib.sendBlankKeyToReleasePreviousKeyEvent().then(function () {
                callback();
            });
        });
    });

    this.When(/^"([^"]*)" record is selected$/, function (arg1, callback) {
        var gridItems = dynamicAttr.getAllGridElements();
        commonlib.elementChainingAll(gridItems.first(), 'tagname', 'td').first().click().then(function () {
            callback();
        });
    });

    this.When(/^"([^"]*)" record is focused and highlighted$/, function (arg1, callback) {
        var gridItems = dynamicAttr.getAllGridElements();
        commonlib.elementChainingAll(gridItems.get(1), 'tagname', 'td').first().click().then(function () {
            callback();
        });

    });

    this.When(/^Up arrow is pressed$/, function (callback) {
        commonlib.getUpArrowKey().then(function () {
            callback();
        });
    });

    this.Then(/^Focus should be removed from "([^"]*)" record$/, function (arg1, callback) {
        dynamicAttr.getSelectedRecords().then(function (selectedCount) {
            assert.equal(selectedCount.length, arg1 - 1);
            callback();
        });
    });

    this.Then(/^"([^"]*)" record should get unselected$/, function (arg1, callback) {
        dynamicAttr.getSelectedRecords().then(function (selectedCount) {
            assert.equal(selectedCount.length, arg1 - 1);
            commonlib.sendBlankKeyToReleasePreviousKeyEvent().then(function () {
                callback();
            });
        });
    });

    this.When(/^"([^"]*)" record is selected by clicking on checkbox OR$/, function (arg1, callback) {
        var gridItems = dynamicAttr.getAllGridElements();
        commonlib.elementChainingAll(gridItems.first(), 'tagname', 'td').first().click().then(function () {
            callback();
        });
    });
};
module.exports = myStepDefinitionsWrapper;