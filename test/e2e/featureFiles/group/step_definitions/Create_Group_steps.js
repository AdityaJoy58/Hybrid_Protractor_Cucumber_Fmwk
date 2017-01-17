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
    var fieldValue = "code" + new Date().toString();
    this.setDefaultTimeout(settings.config.STEPTIMEOUT);
    var allGridElementsCount = '';
    var filteredGridElementsCount = '';
    var itemToSearch = 'A1006';
    var existingGroupCode = '10001';
    var codeToBeEntered = "code" + Math.random();
    var titleToBeEntered = "title" + Math.random();
    var descriptionToBeEntered = "description" + Math.random();

    this.Given(/^Add Group Office Screen$/, function (callback) {
        commonlib.open();
        groupPage.getGroupLink().click().then(function () {
            actionButtons.getAddButton().click().then(function () {
                callback();
            });
        });
    });

    this.When(/^User verify the floating menu entries on the screen$/, function (callback) {
        groupPage.getFloatingMenu().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^Floating menu will be available on the screen with 'Group Details' and 'Items' entries$/, function (callback) {
        groupPage.getGroupDetailLink().isEnabled().then(function (result1) {
            assert.isTrue(result1);
            groupPage.getItemsLink().isEnabled().then(function (result2) {
                assert.isTrue(result2);
                callback();
            });
        });
    });

    this.When(/^User click on 'Group Details' from the floating menu$/, function (callback) {
        groupPage.getGroupDetailLink().click().then(function () {
            callback();
        });
    });

    this.Then(/^Screen focus should move to 'Group Details' section$/, function (callback) {
        commonlib.getActiveElement().then(function (element) {
            assert.notEqual(typeof(element), undefined);
            callback();
        });
    });

    this.When(/^User verify the entries in the Group Details section$/, function (callback) {
        groupPage.getGroupDetailsHeading().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^'Code' field will be mandatory field$/, function (callback) {
        groupPage.getMandatoryIndication().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^As user type into the Code field, the text will shift to left allow user input$/, function (callback) {
        callback.pending();
    });

    this.Then(/^User will be not be able to type into the field more that maximum allowed size for the field$/, function (callback) {
        var remainingLength = 0;
        if (fieldValue.length < 64) {
            remainingLength = 64 - fieldValue.length;
            fieldValue = fieldValue + "a".repeat(remainingLength);
        }
        groupPage.getCodeTextBox().clear().sendKeys(fieldValue);
        callback();
    });

    this.When(/^User type into Description field$/, function (callback) {
        groupPage.getDescriptionTextBox().clear().sendKeys("description for following code").then(function () {
            callback();
        })
    });

    this.Then(/^Description field will size dynamically \(expand vertically\) to accommodate user input$/, function (callback) {
        callback();
    });

    this.When(/^User click on any field in Group Details section and then click on tab from keyboard$/, function (callback) {
        activeElement = commonlib.getActiveElement();
        groupPage.getTitleTextBox().sendKeys(protractor.Key.TAB);
        callback();

    });

    this.Given(/^Add Group Office Screen for a group when no items are associated to the group$/, function (callback) {
        commonlib.open();
        groupPage.getGroupLink().click().then(function () {
            actionButtons.getAddButton().click().then(function () {
                callback();
            });
        });
    });

    this.Then(/^The Items section will have 'Add Items' button$/, function (callback) {
        groupPage.getAddItemsButton().isPresent().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.Then(/^The Item section will display all the Items of the current Group as rows in the grid$/, function (callback) {
        groupPage.getAllItemsFromGrid().then(function(elements){
            assert.isAbove(elements.length,0);
            callback();
        });
    });

    this.Then(/^The item grid will display following columns for each record row: 'Code' and 'Short Description'$/, function (callback) {
        grid.getGridHeadings().first().getInnerHtml().then(function (result) {
            assert.include(result, settings.constants.CODE);
            grid.getGridHeadings().get(1).getInnerHtml().then(function (result) {
                assert.include(result, settings.constants.DESCRIPTION);
                groupPage.onCancel().click().then(function () {
                    commonlib.waitForElement(commonlib.getNEPAlertYes()).then(function () {
                        commonlib.getNEPAlertYes().click().then(function () {
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.Then(/^A Status icon representing Inactive item will displayed next to Description column for each inactive item in the grid$/, function (callback) {
        groupPage.getInactiveColumnValues().first().getAttribute("class").then(function (element) {
            if (element.indexOf('ng-scope fa fa-ban') === 0) {
                callback();
            }
        });
    });

    this.Then(/^A Tool tip text 'Inactive Item' will be displayed on mouse over on each status icon in the grid$/, function (callback) {
        groupPage.getInactiveColumnValues().first().getAttribute("title").then(function (element) {
            if (element.indexOf('Inactive Item') === 0) {
                callback();
            }
        });
    });

    this.Then(/^The Item Section will display total items indication on top of the grid$/, function (callback) {
        grid.getFilterButton().getText().then(function (records) {
            assert.isAbove(parseInt(records), 0);
            callback();
        });
    });

    this.Given(/^Add Group Office Screen for a group when items are associated to the group$/, function (callback) {
        commonlib.open();
        groupPage.getGroupLink().click().then(function () {
            actionButtons.getAddButton().click().then(function () {
                groupPage.getCodeTextBox().clear().sendKeys('DummyCode').then(function(){
                    groupPage.getAddItemsButton().click().then(function () {
                        callback();
                    });
                });
            });
        });
    });

    this.Then(/^The 'Add Items' button will be replaced by 'Manage Items' button$/, function (callback) {
        groupPage.checkAddItemButtonPresence().then(function (res) {
            assert.equal(res, false);
        });
        groupPage.getManageItemsButton().isPresent().then(function (res) {
            assert.equal(res, true);
            callback();
        });
    });

    this.Given(/^Add Group Office Screen when items are associated to the group$/, function (callback) {
        commonlib.open();
        groupPage.getGroupLink().click().then(function () {
            actionButtons.getAddButton().click().then(function () {
                groupPage.getCodeTextBox().clear().sendKeys('DummyCode').then(function () {
                    groupPage.getAddItemsButton().click().then(function () {
                        callback();
                    });
                });
            });
        });
    });

    this.When(/^User verify Sorting feature on each column in the grid on Create Group Office Screen$/, function (callback) {
        groupPage.getColumnsHaveAscendingSortingFeature().first().getInnerHtml().then(function (elements) {
            assert.include(elements, 'sort-asc');
            groupPage.getColumnsHaveDescendingSortingFeature().first().getInnerHtml().then(function (elements) {
                assert.include(elements, 'sort-desc');
                callback();
            });
        });
    });

    this.Then(/^Sorting icons will be available on each column in the grid in the Items section$/, function (callback) {
        groupPage.getColumnsHaveAscendingSortingIcon().then(function (elements) {
            assert.isAbove(elements.length, 0);
            groupPage.getColumnsHaveDescendingSortingIcon().then(function (elements) {
                assert.isAbove(elements.length, 0);
                callback();
            });
        });
    });

    this.When(/^User verify Filter option in the grid in Group Office Screen$/, function (callback) {
        groupPage.getFilterIcon().isEnabled().then(function (result) {
            assert.isTrue(result);
            groupPage.getFilterCodeTextBox().isEnabled().then(function (result) {
                assert.isTrue(result);
                groupPage.getFilterDescriptionTextBox().isEnabled().then(function (result) {
                    assert.isTrue(result);
                    callback();
                });
            });
        });
    });

    this.Then(/^Filter option will be available in the grid in the Items section$/, function (callback) {
        groupPage.getFilterIcon().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^User will be able to filter records on each column in the grid in Group Office Screen$/, function (callback) {
        groupPage.getFilterIcon().isEnabled().then(function (result) {
            assert.isTrue(result);
            commonlib.waitForAllElements(groupPage.getAllItemsFromGrid()).then(function () {
                groupPage.getAllItemsFromGrid().then(function (elements) {
                    allGridElementsCount = elements.length;
                    groupPage.getFilterCodeTextBox().sendKeys(itemToSearch).then(function () {
                        groupPage.getAllItemsFromGrid().then(function (elements) {
                            filteredGridElementsCount = elements.length;
                            assert.isAbove(allGridElementsCount, filteredGridElementsCount);
                            groupPage.getFilterCodeTextBox().clear().then(function () {
                                groupPage.getFilterDescriptionTextBox().clear().sendKeys(itemToSearch).then(function () {
                                    groupPage.getAllItemsFromGrid().then(function (elements) {
                                        filteredGridElementsCount = elements.length;
                                        assert.isAbove(allGridElementsCount, filteredGridElementsCount);
                                        groupPage.onCancel().click().then(function () {
                                            commonlib.waitForElement(commonlib.getNEPAlertYes()).then(function () {
                                                commonlib.getNEPAlertYes().click().then(function () {
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

    this.Given(/^Add Group Office Screen for Group when items are associated to the group$/, function (callback) {
        commonlib.open();
        groupPage.getGroupLink().click().then(function () {
            actionButtons.getAddButton().click().then(function () {
                groupPage.getAddItemsButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^User click on Code value for an item from the grid in Items section$/, function (callback) {
        groupPage.getFirstElement().click().then(function () {
            callback();
        });
    });

    this.When(/^User verify the Action buttons available in the tool bar on the screen$/, function (callback) {
        actionButtons.getNumberOfActionButtons().count().then(function (result) {
            assert.isAbove(result, 0);
            callback();
        });
    });

    this.When(/^User enters all the valid information in the required fields in Create Group$/, function (callback) {
        codeToBeEntered = "code" + Math.random();
        titleToBeEntered = "title" + Math.random();
        descriptionToBeEntered = "description" + Math.random();
        groupPage.getCodeTextBox().clear().sendKeys(codeToBeEntered).then(function () {
            groupPage.getTitleTextBox().clear().sendKeys(titleToBeEntered).then(function () {
                groupPage.getDescriptionTextBox().clear().sendKeys(descriptionToBeEntered).then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^Click 'Save' button in Group Office Screen$/, function (callback) {
        groupPage.onSave().click().then(function () {
            callback();
        });
    });

    this.When(/^Click 'Done' button in Group Office Screen$/, function (callback) {
        groupPage.onDone().click().then(function() {
            callback();
        });
    });

    this.Then(/^New Group will be saved$/, function (callback) {
        callback();
    });

    this.Then(/^Notification will be displayed to user that the Record was Saved successfully$/, function (callback) {
        commonlib.waitForElement(groupPage.getGroupSavedNotification()).then(function () {
            groupPage.getGroupSavedNotification().isEnabled().then(function (result) {
                assert.isTrue(result);
                groupPage.getGroupSavedNotification().then(function (result) {
                    assert.equal(result, 'GROUP ADDED SUCCESSFULLY.');
                    commonlib.waitForElement(commonlib.closeNotification()).then(function () {
                        commonlib.closeNotification().click().then(function () {
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.Then(/^Group screen will be displayed in Edit mode$/, function (callback) {
        groupPage.onCancel().isEnabled().then(function (result) {
            assert.isTrue(result);
            groupPage.onDone().isEnabled().then(function (result) {
                assert.isTrue(result);
                groupPage.onSave().isEnabled().then(function (result) {
                    assert.isTrue(result);
                    callback();
                });
            });
        });
    });

    this.Then(/^breadcrumb will display  Catalog > Groups > <Group Title> - Edit$/, function (callback) {
        breadCrumb.getBreadCrumbText().then(function (breadCrumbText) {
            assert.include(breadCrumbText, 'Catalog->Groups');
            breadCrumb.getBreadCrumbPageTitle().getText().then(function (result) {
                assert.isTrue(result.substring(0, result.indexOf("- Edit")).length > 0);
                callback();
            });
        });
    });


    this.Then(/^breadcrumb will display  Catalog > Groups > <group title>$/, function (callback) {
        breadCrumb.getBreadCrumbText().then(function (breadCrumbText) {
            assert.include(breadCrumbText, 'Catalog->Groups');
            breadCrumb.getBreadCrumbPageTitle().getText().then(function (result) {
                assert.equal('Catalog>Groups>' + result, breadCrumbText.replace('-', '') + '>' + result);
                callback();
            });
        });
    });

    this.Then(/^Group screen will be displayed in View mode$/, function (callback) {
        groupPage.onAdd().isEnabled().then(function (result) {
            assert.isTrue(result);
            groupPage.onEdit().isEnabled().then(function (result) {
                assert.isTrue(result);
                groupPage.onCancel().isEnabled().then(function (result) {
                    assert.isFalse(result);
                    callback();
                });
            });
        });
        groupPage.getGroupBreadCrumb().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^New group will not be saved$/, function (callback) {
        commonlib.getPresenceOfNotification().then(function (result) {
            assert.isFalse(result);
            callback();
        });
    });

    this.When(/^User enters an existing code data in Code field$/, function (callback) {
        groupPage.getCodeTextBox().clear().sendKeys(existingGroupCode).then(function () {
            groupPage.getTitleTextBox().clear().sendKeys(titleToBeEntered).then(function () {
                groupPage.getDescriptionTextBox().clear().sendKeys(descriptionToBeEntered).then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^User will stay on Add Group office screen\.$/, function (callback) {
        groupPage.getCodeTextBox().getText().then(function (newText) {
            assert.isNotNull(newText);
            callback();
        });
    });

    this.Then(/^User will navigate back to Group Office screen$/, function (callback) {
        groupPage.getGroupsHeading().isDisplayed().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^New group will not be created$/, function (callback) {
        commonlib.getPresenceOfNotification().then(function (result) {
            assert.isFalse(result);
            callback();
        });
    });

    this.Given(/^View Group Office Screen$/, function (callback) {
        commonlib.open();
        groupPage.getGroupLink().click().then(function () {
            commonlib.elementChainingAll(groupPage.getAllItemsFromGrid().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getViewButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^Breadcrumb path will be Catalog \-> Groups > New Group$/, function (callback) {
        breadCrumb.getBreadCrumbText().then(function (breadCrumbText) {
            breadCrumb.getBreadCrumbPageTitle().getText().then(function (result) {
                assert.equal('Catalog>Groups>New Group', breadCrumbText.replace('-', '') + '>' + result);
                callback();
            });
        });
    });

    this.Then(/^Group Details section will have 'Code', 'Title' and 'Description' field$/, function (callback) {
        groupPage.getCodeLabel().isEnabled().then(function (result) {
            assert.isTrue(result);
            groupPage.getTitleLabel().isEnabled().then(function (result) {
                assert.isTrue(result);
                groupPage.getDescriptionLabel().isEnabled().then(function (result) {
                    assert.isTrue(result);
                    callback();
                });
            });
        });
    });

    this.Then(/^User will be able to navigate among different fields on the screen using Tab from Keyboard$/, function (callback) {
        commonlib.getActiveElement().then(function (currentActiveElement) {
            assert.notEqual(currentActiveElement, activeElement);
            callback();
        });
    });


    this.Then(/^Grid will be default sorted alphabetically on 'Code' column$/, function (callback) {
        var code = [];
        commonlib.elementChainingAll(groupPage.getAllItemsFromGrid().get(0), 'tagname', 'td').get(1).getText().then(function (result) {
            commonlib.elementChainingAll(groupPage.getAllItemsFromGrid().get(1), 'tagname', 'td').get(1).getText().then(function (res) {
                code.push(res);
                code.push(result);
                code.sort();
                assert.equal(result, code[0]);
                assert.equal(res, code[1]);
                    groupPage.onCancel().click().then(function () {
                        commonlib.waitForElement(commonlib.getNEPAlertYes()).then(function(){
                            commonlib.getNEPAlertYes().click().then(function(){
                                callback();
                            });
                        });
                    });
            });
        });
    });


    this.When(/^User verify the Breadcrumb path value$/, function (callback) {
        breadCrumb.getBreadCrumbText().then(function (breadCrumbText) {
            assert.notEqual(breadCrumbText, undefined);
            callback();
        });
    });

    this.Then(/^Error message will be displayed informing user that record with the same code already exist$/, function (callback) {
        groupPage.getSameCodeErrorMessage().getText().then(function (result) {
            assert.include(result, 'A group with the same Code already exist.');
            groupPage.onCancel().click().then(function () {
                commonlib.waitForElement(commonlib.getNEPAlertYes()).then(function () {
                    commonlib.getNEPAlertYes().click().then(function () {
                        callback();
                    });
                });
            });
        });
    });


    this.When(/^User click on 'Items' from the floating menu in Group screen$/, function (callback) {
        groupPage.getLowerLevelLink().click().then(function () {
            callback();
        });
    });

    this.Then(/^Screen focus should move to 'Items' section in Group screen$/, function (callback) {
        callback();
    });

    this.When(/^User enters no data in Code field or Title Field or Description Field$/, function (callback) {
        groupPage.getCodeTextBox().clear().sendKeys('');
        groupPage.getTitleTextBox().clear().sendKeys('');
        groupPage.getDescriptionTextBox().clear().sendKeys('');
        callback();
    });

    this.Then(/^Error message will be displayed informing user that Required Field is mandatory in Group Office Screen$/, function (callback) {
        groupPage.getCodeRequiredFieldErrorMessage().isEnabled().then(function (result) {
            assert.isTrue(result);
            groupPage.checkCodeMandatoryMessage().getOuterHtml().then(function (text) {
                assert.include(text, 'Code is mandatory');
                groupPage.checkTitleMandatoryMessage().getOuterHtml().then(function (text) {
                    assert.include(text, 'Title is mandatory');
                    groupPage.checkDescriptionMandatoryMessage().getOuterHtml().then(function (text) {
                        assert.include(text, 'Description is mandatory');
                        callback();
                    });
                });
            });
        });
    });
};
module.exports = myStepDefinitionsWrapper;