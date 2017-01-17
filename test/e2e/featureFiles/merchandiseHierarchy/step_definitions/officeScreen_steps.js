var myStepDefinitionsWrapper = function () {

    var merchandiseHierarchy = require('../../../pages/merchandiseHierarchy');
    var actionButtons = require('../../../pages/actionButtons');
    var settings = require('../../../common/settings');
    var commonlib = require('../../../common/commonLib');
    var breadCrumb = require('../../../pages/breadCrumb');
    var grid = require('../../../pages/grid');
    var sideBar = require('../../../pages/sideBar');
    var groupPage = require('../../../pages/group');
    var chai = require(settings.constants.CHAI);
    var assert = chai.assert;
    this.setDefaultTimeout(settings.config.STEPTIMEOUT);
    var expectedResultDictionary = {};
    var allGridElementsCount = '';
    var filteredGridElementsCount = '';
    var existingGroupCode = '10001';

    this.Given(/^Merchandise Hierarchy Office screen$/, function (callback) {
        commonlib.open();
        merchandiseHierarchy.getMerchandiseLink().click().then(function () {
            callback();
        });
    });

    this.When(/^User verify the data column displayed in the grid$/, function (callback) {
        grid.getGridRows().count().then(function (result) {
            assert.isAbove(result, 0);
            callback();
        });
    });

    this.Then(/^Following columns will displayed in grid for each row: 'Code', 'Title', 'Description', 'Path'$/, function (callback) {
        grid.getGridHeadings().first().getInnerHtml().then(function (result) {
            assert.include(result, settings.constants.CODE);
        });
        grid.getGridHeadings().get(1).getInnerHtml().then(function (result) {
            assert.include(result.toLowerCase(), settings.constants.TITLE);
        });
        grid.getGridHeadings().get(2).getInnerHtml().then(function (result) {
            assert.include(result, settings.constants.DESCRIPTION);
        });
        grid.getGridHeadings().get(3).getInnerHtml().then(function (result) {
            assert.include(result.toLowerCase(), settings.constants.PATH);
            callback();
        });
    });

    this.Then(/^Checkbox will be available for each record row in the grid$/, function (callback) {
        grid.getGridCheckBoxes().first().getInnerHtml().then(function (result) {
            assert.include(result.toLowerCase(), settings.constants.CHECKBOX);
            callback();
        });
    });

    this.When(/^User tries to select multiple record$/, function (callback) {
        callback();
    });

    this.Then(/^User will be able to select multiple records$/, function (callback) {
        commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').first().click().then(function () {
        });
        commonlib.elementChainingAll(grid.getGridRows().get(1), 'tagname', 'td').first().click().then(function () {
            callback();
        });
    });

    this.When(/^User select multiple record$/, function (callback) {
        var x = commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').get(2);
        x.getCssValue("font-weight").then(function (fontWeight) {
            assert.equal(fontWeight, 'normal');
        });
        commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').first().click().then(function () {
        });
        commonlib.elementChainingAll(grid.getGridRows().get(1), 'tagname', 'td').first().click().then(function () {
            callback();
        });
    });

    this.Then(/^Selected records will be highlighted$/, function (callback) {
        grid.getSelectedRecords().count().then(function (result) {
            assert.equal(result, 2);
            callback();
        });
    });

    this.Then(/^Selected records text will be bolded$/, function (callback) {
        var x = commonlib.elementChainingAll(grid.getSelectedRecords().first(), 'tagname', 'td').get(2);
        x.getCssValue("font-weight").then(function (fontWeight) {
            assert.equal(fontWeight, 'bold');
            callback();
        });
    });

    this.When(/^User mouse over on any record in the grid$/, function (callback) {
        grid.getHighLightedRowsOnHover().count().then(function (result) {
            assert.equal(result, 0);
            commonlib.mouseMove(grid.getGridRows().first());
            callback();
        });
    });

    this.Then(/^Record on which mouse over will be highlighted$/, function (callback) {
        grid.getHighLightedRowsOnHover().count().then(function (result) {
            assert.equal(result, 1);
            callback();
        });

    });

    this.Then(/^black dot will be displayed against the leading column indicating the record is under mouse over$/, function (callback) {
        callback.pending();
        var x = commonlib.elementChainingAll(grid.getHighLightedRowsOnHover().first(), 'tagname', 'td').get(1);
        x.getCssValue("content").then(function (borderCssValue) {
            console.log(borderCssValue);
        });
    });

    this.When(/^User verify the leading field 'Code' in the grid$/, function (callback) {
        grid.getGridHeadings().first().getText().then(function (result) {
            assert.equal(result, settings.constants.CODE, "Code text in Column is not as expected");
            callback();
        });
    });

    this.Then(/^Leading field will be a link$/, function (callback) {
        commonlib.elementChaining(grid.getGridRows().first(), 'tagname', 'a').getOuterHtml().then(function (result) {
            assert.include(result.toLowerCase(), '</a>');
            callback();
        });
    });

    this.Then(/^On click on 'Code' field, user will be navigated to View screen for the record$/, function (callback) {
        commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'a').click().then(function () {
            browser.getCurrentUrl().then(function (result) {
                assert.include(result.toLowerCase(), 'merchandisehierarchy/view');
                callback();
            });
        });
    });

    this.When(/^User verify the breadcrumb displayed on the screen$/, function (callback) {
        callback();
    });

    this.Then(/^The breadcrumb will display following value: Catalog > Merchandise Hierarchy$/, function (callback) {
        var text = '';
        breadCrumb.getBreadCrumbModuleTitle().getText().then(function (result) {
            text = result;
            breadCrumb.getBreadCrumbPageTitle().getText().then(function (res) {
                text = text + ' > ' + res;
                assert.equal(text.toLowerCase(), 'catalog > merchandise hierarchy');
                callback();
            });
        });
    });

    this.Given(/^Catalog application main screen$/, function (callback) {
        commonlib.open();
        callback();
    });

    this.When(/^User verify the side bar navigation$/, function (callback) {
        sideBar.getSidebar().isPresent().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.Then(/^There will be an icon in side bar navigation for Merchandise Hierarchy$/, function (callback) {
        callback();
    });

    this.Then(/^The title for the option in side bar will be 'Merchandise Hierarchy'$/, function (callback) {
        sideBar.getSidebarLinks().get(1).getAttribute('title').then(function (result) {
            assert.equal(result.toLowerCase(), 'merchandise hierarchy');
            callback();
        });
    });

    this.When(/^User click on option 'Merchandise Hierarchy' from the side bar navigation$/, function (callback) {
        merchandiseHierarchy.getMerchandiseLink().click().then(function () {
            callback();
        });
    });

    this.Then(/^User will be navigated to Merchandise Hierarchy Office screen$/, function (callback) {
        browser.getCurrentUrl().then(function (result) {
            assert.include(result.toLowerCase(), 'merchandisehierarchy');
            callback();
        });
    });

    this.When(/^User verify the sorting on grid fields$/, function (callback) {
        callback();
    });

    this.Then(/^Sorting will be available on following fields in the grid: 'Code', 'Title'$/, function (callback) {
        grid.getSortingIconAsc(grid.getGridHeadings().first()).isEnabled().then(function (result) {
            assert.isTrue(result);
        });
        grid.getSortingIconAsc(grid.getGridHeadings().get(1)).isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.When(/^User verify the default sorting on grid fields$/, function (callback) {
        callback();
    });

    this.Then(/^Default sorting will be on Code field alphabetically ascending sorted$/, function (callback) {
        commonlib.elementChainingAll(grid.getGridRows().get(0), 'tagname', 'td').get(1).getText().then(function (firstRowText) {
            commonlib.elementChainingAll(grid.getGridRows().get(1), 'tagname', 'td').get(1).getText().then(function (secondRowText) {
                assert.isAtMost(firstRowText.localeCompare(secondRowText), 0);
                callback();
            });
        });
    });

    this.Then(/^Sorting indicator will be displayed against Code field indicating grid sorting in ascending order$/, function (callback) {
        grid.getGridHeadings().get(0).click().then(function () {
            grid.getSortingIconAsc(grid.getGridHeadings().get(0)).getOuterHtml().then(function (result) {
                assert.include(result.toLowerCase(), 'active');
                callback();
            });
        });
    });

    this.Then(/^Sorting indicator will indicate descending order sorting on Code field when user again click on Code field label$/, function (callback) {
        grid.getGridHeadings().get(0).click().then(function () {
            grid.getSortingIconDesc(grid.getGridHeadings().get(0)).getOuterHtml().then(function (result) {
                console.log(result);
                assert.include(result.toLowerCase(), 'active');
                callback();
            });
        });
    });

    this.When(/^User click on Title field$/, function (callback) {
        grid.getGridHeadings().get(1).click().then(function () {
            callback();
        });
    });

    this.Then(/^Grid will be sorted on Title field values in ascending order$/, function (callback) {
        commonlib.elementChainingAll(grid.getGridRows().get(0), 'tagname', 'td').get(2).getText().then(function (result) {
            commonlib.elementChainingAll(grid.getGridRows().get(1), 'tagname', 'td').get(2).getText().then(function (res) {
                assert.isTrue(result <= res);
                callback();
            });
        });
    });

    this.Then(/^Sorting indicator will be displayed against Title field indicating grid sorting in ascending order on Title field$/, function (callback) {
        grid.getSortingIconAsc(grid.getGridHeadings().get(1)).getOuterHtml().then(function (result) {
            assert.include(result.toLowerCase(), 'active');
            callback();
        });
    });

    this.Then(/^Sorting indicator will indicate descending order sorting on Title field when user again click on Title field label$/, function (callback) {
        grid.getGridHeadings().get(1).click().then(function () {
            grid.getSortingIconDesc(grid.getGridHeadings().get(1)).getOuterHtml().then(function (result) {
                assert.include(result.toLowerCase(), 'active');
                callback();
            });
        });
    });

    this.When(/^User verify the Search ability on the fields in the grid$/, function (callback) {
        callback();
    });

    this.Then(/^Search ability will be available on following fields in the grid: 'Code', 'Title', 'Description', 'Path'$/, function (callback) {
        grid.getFilterIcon().click().then(function () {
            grid.getSearchBoxes().count().then(function (length) {
                assert.equal(length, 4);
                callback();
            });
        });
    });

    this.Then(/^Default state of filter option will be enabled$/, function (callback) {
        grid.getFilterIcon().isEnabled().then(function () {
            callback();
        });
    });

    this.Given(/^Merchandise Hierarchy Office screen with filter enabled$/, function (callback) {
        commonlib.open();
        merchandiseHierarchy.getMerchandiseLink().click().then(function () {
            grid.getFilterIcon().isEnabled().then(function () {
                callback();
            });
        });
    });

    this.When(/^User verify the search text field for each column in the grid$/, function (callback) {
        grid.getSearchBoxes().count().then(function (length) {
            assert.equal(length, 4);
            callback();
        });
    });

    this.Then(/^The default structured text 'Type to Search' will be displayed in the search field for each column$/, function (callback) {
        grid.getSearchBoxes().first().getOuterHtml().then(function (result) {
            assert.include(result.toLowerCase(), 'type to search');
            callback();
        });
    });

    this.Then(/^User will be able to type and perform search on multiple columns$/, function (callback) {
        groupPage.getFilterIcon().isEnabled().then(function (result) {
            assert.isTrue(result);
            commonlib.waitForAllElements(groupPage.getAllItemsFromGrid()).then(function(){
                groupPage.getAllItemsFromGrid().then(function (elements) {
                    allGridElementsCount = elements.length;
                    groupPage.getFilterCodeTextBox().sendKeys(existingGroupCode).then(function () {
                        groupPage.getAllItemsFromGrid().then(function (elements) {
                            filteredGridElementsCount = elements.length;
                            assert.isAbove(allGridElementsCount, filteredGridElementsCount);
                            groupPage.getFilterCodeTextBox().clear().then(function(){
                                groupPage.getFilterTitleTextBox().clear().sendKeys(existingGroupCode).then(function(){
                                    groupPage.getAllItemsFromGrid().then(function(elements){
                                        filteredGridElementsCount = elements.length;
                                        assert.isAbove(allGridElementsCount, filteredGridElementsCount);
                                        groupPage.getFilterTitleTextBox().clear().then(function(){
                                            groupPage.getFilterDescriptionTextBox().clear().sendKeys(existingGroupCode).then(function(){
                                                groupPage.getAllItemsFromGrid().then(function(elements){
                                                    filteredGridElementsCount = elements.length;
                                                    assert.isAbove(allGridElementsCount, filteredGridElementsCount);
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

    this.When(/^User type any text in the search field for a column$/, function (callback) {
        commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').get(1).getText().then(function (res) {
            expectedResultDictionary.textToSearch = res;
        });
        grid.getFilterIcon().click().then(function () {
            grid.getSearchBoxes().first().sendKeys(expectedResultDictionary.textToSearch).then(function () {
                callback();
            });
        });
    });

    this.Then(/^Column data will be filtered on the fly as per user input$/, function (callback) {
        grid.getHighlightedRowsOnFilter(expectedResultDictionary.textToSearch).then(function (highlightedElements) {
            grid.getGridRows().then(function (elements) {
                assert.equal(highlightedElements.length, elements.length);
                callback();
            });
        });
    });

    this.Then(/^There will be a clear icon available on the filter field for the column on mouse over\/click to clear search for the column$/, function (callback) {
        grid.getClearIconForColumn(grid.getSearchBoxes().first()).click().then(function () {
            callback();
        });
    });

    this.Then(/^A clear icon will be available for clear search on the grid$/, function (callback) {
        callback();
    });

    this.When(/^User type any text in the search field for a column which resulted in no results$/, function (callback) {
        grid.getFilterIcon().click().then(function () {
            grid.getSearchBoxes().first().sendKeys('NoRecord').then(function () {
                callback();
            });
        });
    });

    this.Then(/^A generic text "([^"]*)" will be displayed$/, function (arg1, callback) {
        grid.gridNotResultsFound().getText().then(function (value) {
            assert.equal(value.toLowerCase(), 'no results found');
            callback();
        });
    });

    this.When(/^Enter the text on the filter text box$/, function (callback) {
        commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').get(1).getText().then(function (res) {
            expectedResultDictionary.textToSearch = res;
            grid.getSearchBoxes().first().sendKeys(expectedResultDictionary.textToSearch).then(function () {
                callback();
            });
        });
    });

    this.Then(/^The Grid records will filtered out on the fly based on the enter criteria and characters will be highlighted in the Grid$/, function (callback) {
        grid.getHighlightedRowsOnFilter(expectedResultDictionary.textToSearch).then(function (highlightedElements) {
            grid.getGridRows().then(function (elements) {
                assert.equal(highlightedElements.length, elements.length);
                callback();
            });
        });
    });

    this.Given(/^Central Office Screen is Opened$/, function (callback) {
        commonlib.open();
        callback();
    });

    this.When(/^User navigate to Merchandise Hierarchy Office screen$/, function (callback) {
        merchandiseHierarchy.getMerchandiseLink().click().then(function () {
            callback();
        });
    });

    this.Then(/^Total number of records \(y records\) indication will be displayed on top of the grid as "([^"]*)"$/, function (arg1, callback) {
        grid.getFilterButton().getText().then(function (records) {
            assert.isAbove(parseInt(records), 0);
            callback();
        });
    });

    this.Given(/^Merchandise Hierarchy Office screen is Opened$/, function (callback) {
        commonlib.open();
        merchandiseHierarchy.getMerchandiseLink().click().then(function () {
            callback();
        });
    });

    this.When(/^User select '(.*)' record from grid$/, function (callback) {
        commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').first().click().then(function () {
        });
    });

    this.Then(/^The record indication will be displayed as 'y Results\-z Selected'$/, function (callback) {
        grid.getFilterButton().getText().then(function (records) {
            var x = records.split('-');
            assert.isAbove(parseInt(x[0]), 0);
            assert.equal(parseInt(x[1]), 1);
            assert.equal(records, x[0] + '-' + x[1]);
            callback();
        });
    });

    this.When(/^User filter'(.*)' record from grid out of '(.*)' records$/, function (a, b, callback) {
        commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').get(1).getText().then(function (res) {
            expectedResultDictionary.textToSearch = res;
            grid.getSearchBoxes().first().sendKeys(expectedResultDictionary.textToSearch).then(function () {
                callback();
            });
        });
    });

    this.Then(/^The record indication will be displayed as 'x Results\/y Results\-z Selected'$/, function (callback) {
        var temp = '';
        grid.getHighlightedRowsOnFilter(expectedResultDictionary.textToSearch).then(function (highlightedElements) {
            temp = highlightedElements.length;
        });
        grid.getFilterButton().getText().then(function (records) {
            var result = records.split('-');
            var tempResult = result[0].split('/');
            assert.equal(parseInt(tempResult[0]), temp);
            assert.isAbove(parseInt(tempResult[1]), 0);
            assert.equal(parseInt(result[1]), 1);
            callback();
        });
    });

    this.When(/^Click on the mega\-selector$/, function (callback) {
        grid.getMegaSelector().click().then(function () {
            callback();
        });
    });

    this.Then(/^All the records will get selected$/, function (callback) {
        grid.getSelectedRecords().count().then(function (selectedRecords) {
            grid.getGridRows().count().then(function (totalRecords) {
                assert.equal(selectedRecords, totalRecords);
                callback();
            });
        });
    });

    this.Given(/^Merchandise Hierarchy Office screen is opened with all records selected$/, function (callback) {
        commonlib.open();
        merchandiseHierarchy.getMerchandiseLink().click().then(function () {
            grid.getMegaSelector().click().then(function () {
                callback();
            });
        });
    });

    this.When(/^User click on the mega\-selector$/, function (callback) {
        grid.getMegaSelector().click().then(function () {
            callback();
        });
    });

    this.Then(/^All the records will get un\-selected$/, function (callback) {
        grid.getSelectedRecords().count().then(function (selectedRecords) {
            assert.equal(selectedRecords, 0);
            callback();
        });
    });

    this.When(/^Click on the mega\- selector$/, function (callback) {
        grid.getMegaSelector().click().then(function () {
            callback();
        });
    });

    this.Then(/^All the selected records will get un\-selected$/, function (callback) {
        grid.getSelectedRecords().count().then(function (selectedRecords) {
            assert.equal(selectedRecords, 0);
            callback();
        });
    });

    this.When(/^User has not selected any record form the grid$/, function (callback) {
        callback();
    });

    this.Then(/^Following Tool Bar action button will be enabled: 'Add'$/, function (callback) {
        actionButtons.getAddButton().isEnabled().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.Then(/^Following Tool Bar action buttons will be disabled: 'Edit', 'Open'$/, function (callback) {
        actionButtons.getEditButton().isEnabled().then(function (result) {
            assert.equal(result, false);
        });
        actionButtons.getViewButton().isEnabled().then(function (result) {
            assert.equal(result, false);
            callback();
        });
    });

    this.When(/^User has selected single record form the grid$/, function (callback) {
        commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').first().click().then(function () {
            callback();
        });
    });

    this.Then(/^Following Tool Bar action button will be enabled: 'Add', 'Edit', 'Open'$/, function (callback) {
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

    this.When(/^User has selected multiple records form the grid$/, function (callback) {
        commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').first().click().then(function () {
        });
        commonlib.elementChainingAll(grid.getGridRows().last(), 'tagname', 'td').first().click().then(function () {
            callback();
        });
    });

    this.When(/^User click on 'Open' tool bar action$/, function (callback) {
        commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').get(1).getText().then(function (res) {
            expectedResultDictionary.gridFirstColumnText = res;
        });
        actionButtons.getViewButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^User will be navigated to selected record screen in View mode$/, function (callback) {
        browser.getCurrentUrl().then(function (result) {
            assert.include(result.toLowerCase(), 'merchandisehierarchy/view');
            callback();
        });
    });

    this.Then(/^User will be navigated to first selected record screen in View mode$/, function (callback) {
        merchandiseHierarchy.getCodeInViewMode().getText().then(function (res) {
            assert.equal(res.toLowerCase(), expectedResultDictionary.gridFirstColumnText.toLowerCase());
            callback();
        });
    });

    this.When(/^User click on 'Edit' tool bar action$/, function (callback) {
        commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').get(1).getText().then(function (res) {
            expectedResultDictionary.gridFirstColumnText = res;
        });
        actionButtons.getEditButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^User will be navigated to selected record screen in Edit mode$/, function (callback) {
        browser.getCurrentUrl().then(function (result) {
            assert.include(result.toLowerCase(), 'merchandisehierarchy/edit');
            callback();
        });
    });

    this.Then(/^User will be navigated to first selected record screen in Edit mode$/, function (callback) {
        merchandiseHierarchy.getCodeTextBox().getAttribute(settings.constants.VALUE).then(function (res) {
            assert.equal(res.toLowerCase(), expectedResultDictionary.gridFirstColumnText.toLowerCase());
            callback();
        });
    });

    this.When(/^User click on 'Add' tool bar action$/, function (callback) {
        actionButtons.getAddButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^User will be navigated to Create Merchandise hierarchy screen$/, function (callback) {
        browser.getCurrentUrl().then(function (result) {
            assert.include(result.toLowerCase(), 'merchandisehierarchy/add');
            callback();
        });
    });

    this.When(/^User clicks up\/down arrows in the keyboard$/, function (callback) {
        commonlib.getDownArrowKey().then(function () {
            callback();
        });
    });

    this.Then(/^The focus indication will get moved accordingly$/, function (callback) {
        grid.getHighLightedRows().count().then(function (result) {
            assert.equal(result, 1);
            commonlib.sendBlankKeyToReleasePreviousKeyEvent().then(function () {
                callback();
            });
        });
    });

    this.When(/^User selects any one of the record$/, function (callback) {
        commonlib.elementChainingAll(grid.getGridRows().get(1), 'tagname', 'td').first().click().then(function () {
            callback();
        });
    });

    this.Then(/^selected Record will get unselected$/, function (callback) {
        grid.getSelectedRecords().count().then(function (result) {
            assert.equal(result, 0);
            callback();
        });
    });

    this.Then(/^Record selection \/ de\-selection will toggle for every press of space bar$/, function (callback) {
        commonlib.getSpaceKey().then(function () {
        });
        grid.getSelectedRecords().count().then(function (result) {
            assert.equal(result, 1);
            commonlib.sendBlankKeyToReleasePreviousKeyEvent().then(function () {
                callback();
            });
        });
    });

    this.Then(/^focused Record will get selected$/, function (callback) {
        grid.getSelectedRecords().count().then(function (result) {
            assert.equal(result, 1);
            commonlib.sendBlankKeyToReleasePreviousKeyEvent().then(function () {
                callback();
            });
        });
    });

    this.When(/^A record is focused and selected$/, function (callback) {
        commonlib.elementChainingAll(grid.getGridRows().get(1), 'tagname', 'td').first().click().then(function () {
            callback();
        });
    });

    this.Then(/^Next record will get focused and selected$/, function (callback) {
        grid.getSelectedRecords().count().then(function (result) {
            assert.equal(result, 2);
            commonlib.sendBlankKeyToReleasePreviousKeyEvent().then(function () {
                callback();
            });
        });
    });

    this.Then(/^Previous record will get focused and selected$/, function (callback) {
        grid.getSelectedRecords().count().then(function (result) {
            assert.equal(result, 2);
            commonlib.sendBlankKeyToReleasePreviousKeyEvent().then(function () {
                callback();
            });
        });
    });

    this.When(/^multiple records are selected and first record from the selected record is focused$/, function (callback) {
        commonlib.elementChainingAll(grid.getGridRows().get(1), 'tagname', 'td').first().click().then(function () {
        });
        commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').first().click().then(function () {
            callback();
        });
    });

    this.Then(/^Focused record will get de\-selected$/, function (callback) {
        grid.getSelectedRecords().count().then(function (result) {
            assert.equal(result, 1);
            callback();
        });
    });

    this.Then(/^for every press Down arrow next selected record will be deselected$/, function (callback) {
        commonlib.sendBlankKeyToReleasePreviousKeyEvent().then(function () {
            callback();
        });
    });

    this.When(/^multiple records are selected and last record from the selected record is focused$/, function (callback) {
        commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').first().click().then(function () {
        });
        commonlib.elementChainingAll(grid.getGridRows().get(1), 'tagname', 'td').first().click().then(function () {
            callback();
        });
    });

    this.Then(/^for every press Up arrow previous selected record will be deselected$/, function (callback) {
        commonlib.sendBlankKeyToReleasePreviousKeyEvent().then(function () {
            callback();
        });
    });

    this.When(/^A record 'First' is selected by clicking on checkbox$/, function (callback) {
        commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').first().click().then(function () {
            callback();
        });
    });

    this.When(/^User select another record 'Second'$/, function (callback) {
        commonlib.elementChainingAll(grid.getGridRows().get(3), 'tagname', 'td').first().click().then(function () {
            callback();
        });
    });

    this.Then(/^All the records from 'First' to 'Second' will get selected and checked$/, function (callback) {
        grid.getSelectedRecords().count().then(function (result) {
            assert.equal(result, 4);
            commonlib.sendBlankKeyToReleasePreviousKeyEvent().then(function () {
                callback();
            });
        });
    });

    this.Given(/^This scenario is UI Ignored \- "([^"]*)"$/, function (arg1, callback) {
        callback.pending(arg1);
    });

    this.Given(/^This scenario is UI \- "([^"]*)"$/, function (arg1, callback) {
        callback.pending(arg1);
    });
};
module.exports = myStepDefinitionsWrapper;