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
    var existingMasterCode = 'Item B1006';
    var existingMasterCodeShortDescription = 'Description for item B1006';
    var existingMasterCodeMerchandiseHierarchy = 'Root\\1001\\1002\\';

    this.Given(/^Item's Office screen$/, function (callback) {
        commonlib.open();
        itemPage.getItemLink().click().then(function () {
            callback();
        });
    });


    this.Then(/^Following columns will displayed in grid for each row: 'Master Code', 'Status', 'Short Description', 'Merchandise hierarchy'$/, function (callback) {
        grid.getGridHeadings().first().getInnerHtml().then(function (result) {
            assert.include(result.toLowerCase(), settings.constants.MASTERCODE);
        });
        grid.getGridHeadings().get(1).getInnerHtml().then(function (result) {
            assert.include(result.toLowerCase(), settings.constants.STATUS);
        });
        grid.getGridHeadings().get(2).getInnerHtml().then(function (result) {
            assert.include(result.toLowerCase(), settings.constants.SHORTDESC);
            callback();
        });
        grid.getGridHeadings().get(3).getInnerHtml().then(function (result) {
            assert.include(result.toLowerCase(), settings.constants.MERCHANDISEHIERARCHY);
            callback();
        });
    });

    this.When(/^User verify the leading field 'Master Code' in the grid$/, function (callback) {
        grid.getGridHeadings().first().getInnerHtml().then(function (result) {
            assert.include(result.toLowerCase(), settings.constants.MASTERCODE);
            callback();
        });
    });

    this.Then(/^On click on 'Master Code' field, user will be navigated to View screen for the record$/, function (callback) {
        itemPage.getFirstElement().getText().then(function (masterCode) {
            itemPage.getFirstElement().click().then(function () {
                commonlib.waitForElement(itemPage.getItemMainDetailsHeadingForViewMode()).then(function () {
                    browser.getCurrentUrl().then(function (urlText) {
                        assert.include(urlText.replace('%20',' '), 'item/view/'+masterCode);
                        callback();
                    });
                });
            });
        });
    });

    this.Then(/^The breadcrumb will display following value: Catalog > Items$/, function (callback) {
        var text = '';
        breadCrumb.getBreadCrumbModuleTitle().getText().then(function (result) {
            text = result;
            breadCrumb.getBreadCrumbPageTitle().getText().then(function (res) {
                text = text + ' > ' + res;
                assert.equal(text.toLowerCase(), 'catalog > items');
                callback();
            });
        });
    });

    this.Then(/^There will be an icon in side bar navigation for Items$/, function (callback) {
        callback();
    });

    this.Then(/^The title for the option in side bar will be 'Items'$/, function (callback) {
        sideBar.getSidebarLinks().get(4).getAttribute('title').then(function (result) {
            assert.equal(result.toLowerCase(), 'items');
            callback();
        });
    });

    this.When(/^User click on option 'Items' from the side bar navigation$/, function (callback) {
        itemPage.getItemLink().click().then(function () {
            callback();
        });
    });

    this.Then(/^User will be navigated to Item's Office screen$/, function (callback) {
        browser.getCurrentUrl().then(function (result) {
            assert.include(result.toLowerCase(), 'item');
            callback();
        });
    });

    this.Then(/^Sorting will be available only on following fields in the grid: 'Master Code', 'Short Description'$/, function (callback) {
        grid.getSortingIconAsc(grid.getGridHeadings().first()).isEnabled().then(function (result) {
            assert.isTrue(result);
        });
        grid.getSortingIconAsc(grid.getGridHeadings().get(2)).isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.When(/^User click on 'Short Description' field$/, function (callback) {
        grid.getGridHeadings().get(2).click().then(function () {
            callback();
        });
    });

    this.Then(/^Sorting indicator will be displayed against 'Short Description' field indicating grid sorting in ascending order on 'Short Description' field$/, function (callback) {
        grid.getSortingIconAsc(grid.getGridHeadings().get(2)).getOuterHtml().then(function (result) {
            assert.include(result.toLowerCase(), 'active');
            callback();
        });
    });

    this.Then(/^Sorting indicator will indicate descending order sorting on 'Short Description' field when user again click on 'Short Description' field label$/, function (callback) {
        grid.getGridHeadings().get(2).click().then(function () {
            grid.getSortingIconDesc(grid.getGridHeadings().get(2)).getOuterHtml().then(function (result) {
                assert.include(result.toLowerCase(), 'active');
                callback();
            });
        });
    });

    this.Then(/^Grid will be sorted on 'Short Description' field values in ascending order$/, function (callback) {
        callback();
    });

    this.When(/^User verify 'Status' and 'Merchandise hierarchy' field$/, function (callback) {
        callback();
    });

    this.Then(/^No Sorting indicator will be displayed on 'Status' and 'Merchandise hierarchy' field label$/, function (callback) {
        callback.pending();

    });

    this.Then(/^Search ability will be available on following fields in the grid: 'Master Code', 'Status', 'Short Description', 'Merchandise hierarchy'$/, function (callback) {
        grid.getFilterIcon().click().then(function () {
            grid.getSearchBoxes().count().then(function (length) {
                assert.equal(length, 4);
                callback();
            });
        });
    });

    this.Given(/^Item's Office screen with filter enabled$/, function (callback) {
        commonlib.open();
        itemPage.getItemLink().click().then(function () {
            grid.getFilterIcon().isEnabled().then(function () {
                callback();
            });
        });
    });

    this.When(/^User verify the Search text field for each column in the grid$/, function (callback) {
        grid.getSearchBoxes().count().then(function (length) {
            assert.equal(length, 4);
            callback();
        });
    });

    this.Then(/^The default structured text 'Type to Search' will be displayed in the Search field for each column$/, function (callback) {
        grid.getSearchBoxes().first().getOuterHtml().then(function (result) {
            assert.include(result.toLowerCase(), 'type to search');
            callback();
        });
    });

    this.Then(/^User will be able to type and perform Search on multiple columns$/, function (callback) {
        itemPage.getFilterIcon().isEnabled().then(function (result) {
            assert.isTrue(result);
            commonlib.waitForAllElements(itemPage.getAllItemsFromGrid()).then(function(){
                itemPage.getAllItemsFromGrid().then(function (elements) {
                    allGridElementsCount = elements.length;
                    itemPage.getFilterMasterCodeTextBox().sendKeys(existingMasterCode).then(function () {
                        itemPage.getAllItemsFromGrid().then(function (elements) {
                            filteredGridElementsCount = elements.length;
                            assert.isAbove(allGridElementsCount, filteredGridElementsCount);
                            itemPage.getClearButton().click().then(function(){
                                itemPage.getFilterShortDescriptionTextBox().clear().sendKeys(existingMasterCodeShortDescription).then(function(){
                                    itemPage.getAllItemsFromGrid().then(function(elements){
                                        filteredGridElementsCount = elements.length;
                                        assert.isAbove(allGridElementsCount, filteredGridElementsCount);
                                        itemPage.getClearButton().click().then(function(){
                                            itemPage.getFilterMerchandiseHierarchyTextBox().clear().sendKeys(existingMasterCodeMerchandiseHierarchy).then(function(){
                                                itemPage.getAllItemsFromGrid().then(function(elements){
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

    this.Given(/^Item's Office screen is opened$/, function (callback) {
        commonlib.open();
        itemPage.getItemLink().click().then(function () {
            callback();
        });
    });


    this.Then(/^Default sorting will be on 'Master Code' field alphabetically ascending sorted$/, function (callback) {
        var masterCode = [];
        commonlib.elementChainingAll(grid.getGridRows().get(0), 'tagname', 'td').get(1).getText().then(function (result) {
            commonlib.elementChainingAll(grid.getGridRows().get(1), 'tagname', 'td').get(1).getText().then(function (res) {
                masterCode.push(res);
                masterCode.push(result);
                masterCode.sort();
                assert.equal(result, masterCode[0]);
                assert.equal(res, masterCode[1]);
                callback();
            });
        });
    });

    this.Then(/^Sorting indicator will be displayed against 'Master Code' field indicating grid sorting in ascending order$/, function (callback) {
        callback();
    });

    this.Then(/^Sorting indicator will indicate descending order sorting on 'Master Code' field when user again click on 'Master Code' field label$/, function (callback) {
        grid.getGridHeadings().get(0).click().then(function () {
            grid.getGridHeadings().get(0).click().then(function(){
                grid.getSortingIconDesc(grid.getGridHeadings().get(0)).getOuterHtml().then(function (result) {
                    assert.include(result.toLowerCase(), 'active');
                    callback();
                });
            })
        });
    });


    this.When(/^User navigate to Item's Office screen$/, function (callback) {
        callback.pending();
    });

    this.Given(/^Item's Office screen is Opened$/, function (callback) {
        callback.pending();
    });

    this.Then(/^The record indication will be displayed as "y Results\-z Selected"$/, function (arg1, callback) {
        callback.pending();
    });

    this.Given(/^Item's Office screen is opened with all records selected$/, function (callback) {
        callback.pending();
    });

    this.Then(/^User will be navigated to Create Item's screen$/, function (callback) {
        itemPage.getItemDetailsHeadingForAddEditMode().isDisplayed().then(function () {
            itemPage.getMasterCodeTextBox().getAttribute('value').then(function (itemMasterCodeText) {
                itemPage.getMasterCodeTextBox().isEnabled().then(function (isEnabled) {
                    browser.getCurrentUrl().then(function (urlText) {
                        assert.include(urlText, '/item/add');
                        assert.isTrue(isEnabled, "Items Master Code text box in not Enabled which is not as expected");
                        assert.equal(itemMasterCodeText, '', "Items Master Code text box is not in Add mode");
                        callback();
                    });
                });
            });
        });
    });

    this.Then(/^for every press of Down arrow next selected record will be deselected$/, function (callback) {
        callback.pending();
    });
    
    this.Then(/^The Merchandise hierarchy field will display 'Root'$/, function (callback) {
        callback.pending();
    });

    this.Then(/^The 'Root' will be bolded$/, function (callback) {
        callback.pending();
    });

    this.Then(/^No tooltip will be displayed on mouseover$/, function (callback) {
        callback.pending();
    });

    this.When(/^User verify the Merchandise hierarchy field for an Item which is not at highest level and has short path value$/, function (callback) {
        callback.pending();
    });

    this.Then(/^The Merchandise hierarchy field will display Upper level's path$/, function (callback) {
        callback.pending();
    });

    this.Then(/^The direct parent in the path will be bolded$/, function (callback) {
        callback.pending();
    });

    this.When(/^User verify the Merchandise hierarchy field for an Item which has long path value$/, function (callback) {
        callback.pending();
    });

    this.Then(/^The Merchandise hierarchy field will display Upper level's path truncated at beginning and ellipsis will be added$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Tooltip will be displayed on mouseover on path value in truncated mode displaying entire Item path in tooltip$/, function (callback) {
        callback.pending();
    });

    this.Then(/^The ellipsis will become bold and change its shape to a button on mouseover$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Merchandise hierarchy field will be expanded to show entire Item path on click on ellipsis$/, function (callback) {
        callback.pending();
    });

    this.Then(/^for every press of Up arrow previous selected record will be deselected$/, function (callback) {
        callback.pending();
    });


    this.Then(/^An arrow icon will be displayed in expanded mode which on click will collapse the Merchandise hierarchy field$/, function (callback) {
        callback.pending();
    });

    this.When(/^User mouse over on individual node in the Merchandise hierarchy field value for a record$/, function (callback) {
        commonlib.elementChaining(itemPage.getPathElement(), 'tagname', 'a').getOuterHtml().then(function (result) {
            assert.include(result.toLowerCase(), '</a>');
            callback();
        });
    });

    this.Then(/^The node under mouse over will look clickable$/, function (callback) {
        var result = commonlib.checkElementIsClickable(itemPage.getPathElement());
        assert.isTrue(result);
        callback();
    });

    this.Then(/^On click will navigate to Merchandise Hierarchy View screen for that particular node$/, function (callback) {
        itemPage.getPathElement().click().then(function () {
            itemPage.getGroupBreadCrumb().isEnabled().then(function (result) {
                assert.isTrue(result);
                callback();
            });
        });
    });

    this.When(/^User has selected Single record form the grid$/, function (callback) {
        commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').first().click().then(function () {
            callback();
        });
    });

    this.When(/^User click on Add tool bar action$/, function (callback) {
        actionButtons.getAddButton().click().then(function () {
            callback();
        });
    });

    this.When(/^User click on Edit tool bar action$/, function (callback) {
        commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').get(1).getText().then(function (masterCode) {
            expectedResultDictionary.gridFirstColumnText = masterCode;
        });
        actionButtons.getEditButton().click().then(function () {
            callback();
        });
    });

    this.When(/^User click on View tool bar action$/, function (callback) {
        commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').get(1).getText().then(function (masterCode) {
            expectedResultDictionary.gridFirstColumnText = masterCode;
        });
        actionButtons.getViewButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^User will be navigated to selected record item screen in View mode$/, function (callback) {
        itemPage.getItemMainDetailsHeadingForViewMode().isDisplayed().then(function () {
            itemPage.getShortDescriptionTextInViewEditMode().isEnabled().then(function (isMasterCodeShortDescriptionEnabled) {
                itemPage.getLongDescriptionTextInViewEditMode().isEnabled().then(function (isMasterCodeLongDescriptionEnabled) {
                    browser.getCurrentUrl().then(function (urlText) {
                        assert.include(urlText.replace('%20', ' '), '/item/view/' + expectedResultDictionary.gridFirstColumnText);
                        assert.isTrue(isMasterCodeShortDescriptionEnabled, "Items Master Code Short Description text box is Enabled which is not as expected which shows that it is not in View Mode");
                        assert.isTrue(isMasterCodeLongDescriptionEnabled, "Items Master Code Long Description text box is Enabled which is not as expected which shows that it is not in View Mode");
                        callback();
                    });
                });
            });
        });
    });

    this.Then(/^User will be navigated to first selected record item screen in View mode$/, function (callback) {
        callback.pending();
    });

    this.Then(/^User will be navigated to selected record item screen in Edit mode$/, function (callback) {
        itemPage.getItemDetailsHeadingForAddEditMode().isDisplayed().then(function () {
            itemPage.getShortDescriptionTextBox().isEnabled().then(function (isMasterCodeShortDescriptionEnabled) {
                itemPage.getLongDescriptionTextBox().isEnabled().then(function (isMasterCodeLongDescriptionEnabled) {
                    browser.getCurrentUrl().then(function (urlText) {
                        assert.include(urlText.replace('%20', ' '), '/item/edit/' + expectedResultDictionary.gridFirstColumnText);
                        assert.isTrue(isMasterCodeShortDescriptionEnabled, "Items Master Code Short Description text box is not Enabled which is not as expected which shows that it is not in Edit Mode");
                        assert.isTrue(isMasterCodeLongDescriptionEnabled, "Items Master Code Long Description text box is not Enabled which is not as expected which shows that it is not in Edit Mode");
                        callback();
                    });
                });
            });
        });
    });

    this.Then(/^User will be navigated to first selected record item screen in Edit mode$/, function (callback) {
        callback.pending();
    });

    this.When(/^A record (.*) is selected by clicking on Checkbox$/, function (callback) {
        callback.pending();
    });

    this.When(/^User select another Record (.*)$/, function (callback) {
        callback.pending();
    });

    this.When(/^User verify the Merchandise hierarchy field for an Item which is at Highest Level$/, function (callback) {
        callback.pending();
    });

    this.Then(/^All the records from (.*) to (.*) will get Selected and Checked$/, function (callback) {
        callback.pending();
    });
};
module.exports = myStepDefinitionsWrapper;