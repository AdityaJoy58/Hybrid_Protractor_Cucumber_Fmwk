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
    var merchandiseHierarchy = require('../../../pages/merchandiseHierarchy');
    var expectedResultDictionary = {};
    var group = require('../../../pages/group');
    var codeToBeEntered = "code" + Math.random();
    var titleToBeEntered = "title" + Math.random();
    var descriptionToBeEntered = "description" + Math.random();

    this.Given(/^Create Group screen is opened$/, function (callback) {
        commonlib.open();
        groupPage.getGroupLink().click().then(function () {
            actionButtons.getAddButton().click().then(function () {
                callback();
            });
        });
    });

    this.When(/^User enter the title$/, function (callback) {
        titleToBeEntered = "title" + Math.random();
        group.getTitleTextBox().clear().sendKeys(titleToBeEntered);
        callback();
    });

    this.When(/^User click on the culture Button$/, function (callback) {
        group.getTitleCultureIcon().click().then(function () {
            callback();
        });
    });

    this.Then(/^A pop up will open with the culture and Value	field$/, function (callback) {
        group.getCultureDropdown().isDisplayed().then(function (result) {
            assert.isTrue(result);
            group.getCultureValueTextBox().isDisplayed().then(function (result) {
                assert.isTrue(result);
                callback();
            });
        });
    });

    this.Then(/^Default culture and value will be displayed in the existing table below culture drop Down$/, function (callback) {
        group.getCultureAndValues().get(0).getText().then(function (result) {
            assert.include(result,'English (USA)');
            group.getCultureCancelButton().click().then(function () {
                group.onCancel().click().then(function () {
                    commonlib.waitForElement(commonlib.getNEPAlertYes()).then(function(){
                        commonlib.getNEPAlertYes().click().then(function(){
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.When(/^User leave the Title field as Blank$/, function (callback) {
        group.getTitleTextBox().sendKeys("").then(function(){
            callback();
        });
    });

    this.Then(/^A pop up will open with the culture and Value$/, function (callback) {
        group.getCultureDropdown().isDisplayed().then(function (result) {
            assert.isTrue(result);
            group.getCultureValueTextBox().isDisplayed().then(function (result) {
                assert.isTrue(result);
                callback();
            });
        });
    });

    this.Then(/^The system�s default culture will be Displayed$/, function (callback) {
        dynamicAttr.getCultureDropdown().getAttribute(settings.constants.VALUE).then(function (result) {
            assert.isNotNull(result);
            callback();
        });
    });

    this.Then(/^The focus will be on the Value field$/, function (callback) {
        commonlib.getActiveElement().getAttribute(settings.constants.ID).then(function (result) {
            assert.isNotNull(result);
            callback();
        });
    });

    this.Given(/^Culture pop\-up is opened for Title field from Create Group screen$/, function (callback) {
        commonlib.open();
        groupPage.getGroupLink().click().then(function () {
            actionButtons.getAddButton().click().then(function () {
                groupPage.getCodeTextBox().clear().sendKeys('DummyCode').then(function () {
                    group.getTitleCultureIcon().click().then(function () {
                        callback();
                    });
                });
            });
        });
    });

    this.When(/^click on the drop down in Pop up$/, function (callback) {
        dynamicAttr.getCultureDropdown().clear().then(function () {
            dynamicAttr.getCultureDropdown().click().then(function (result) {
                callback();
            });
        });
    });

    this.Then(/^drop down will be displayed with different Cultures$/, function (callback) {
        dynamicAttr.getCultureDropDownElements().count().then(function (result) {
            assert.isAbove(result, 0);
            callback();
        });
    });

    this.Then(/^Each value will display with relevant flag and country value in Parenthesis$/, function (callback) {
        dynamicAttr.getCultureDropDownElements().first().getInnerHtml().then(function (result) {
            assert.include(result, settings.constants.LEFTPARENTHESIS);
            assert.include(result, settings.constants.RIGHTPARENTHESIS);
            assert.include(result, settings.constants.IMG);
            callback();
        });
    });

    this.When(/^User select the language from Culture drop Down$/, function (callback) {
        dynamicAttr.getCultureDropdown().clear().then(function () {
            dynamicAttr.getCultureDropdown().click().then(function (result) {
                dynamicAttr.getCultureDropDownElements().first().click().then(function () {
                    dynamicAttr.getCultureDropdown().getAttribute(settings.constants.VALUE).then(function (result) {
                        expectedResultDictionary.cultureDropdownValue = result;
                        callback();
                    });
                });
            });
        });
    });

    this.Then(/^Country will appear with the corresponding Flag in Parenthesis$/, function (callback) {
        dynamicAttr.getCultureDropdown().getAttribute(settings.constants.VALUE).then(function (result) {
            assert.include(result, settings.constants.LEFTPARENTHESIS);
            assert.include(result, settings.constants.RIGHTPARENTHESIS);
            callback();
        });
    });

    this.Then(/^User will be able to select the language from the culture drop Down$/, function (callback) {
        dynamicAttr.getCultureDropdown().clear().then(function () {
            dynamicAttr.getCultureDropdown().click().then(function (result) {
                dynamicAttr.getCultureDropDownElements().first().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^User will be able to define the value for particular Language$/, function (callback) {
        dynamicAttr.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function (result) {
            callback();
        });
    });

    this.When(/^User add the Translation Values$/, function (callback) {
        dynamicAttr.getCultureDropdown().clear().then(function () {
            dynamicAttr.getCultureDropdown().click().then(function (result) {
                dynamicAttr.getCultureDropDownElements().first().click().then(function () {
                    dynamicAttr.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                        dynamicAttr.getCultureAddButton().click().then(function () {
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.When(/^Values gets Added in existing Values$/, function (callback) {
        dynamicAttr.getCultureTableInAddEditMode().count().then(function(length) {
            if(length > 0) {
                dynamicAttr.getCultureTableInAddEditMode().count().then(function (result) {
                    assert.isNotNull(result, 0);
                    callback();
                });
            }
            else{
                callback();
            }
        });
    });

    this.Then(/^All the translation values will be in the editable Mode$/, function (callback) {
        dynamicAttr.getCultureTableFirstTextAreaLabel().click().then(function () {
            dynamicAttr.getCultureTableFirstTextArea().isEnabled().then(function (result) {
                assert.equal(result, true);
                callback();
            });
        });
    });

    this.Then(/^User will be able to edit any Existing value$/, function (callback) {
        dynamicAttr.getCultureTableFirstTextArea().isEnabled().then(function (result) {
            //dynamicAttr.getCultureTableFirstTextArea().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
            assert.isTrue(result);
            callback();
            // });
        });
    });

    this.When(/^User define the value for that Language$/, function (callback) {
        dynamicAttr.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
            callback();
        });
    });

    this.When(/^User clicks on Add Button$/, function (callback) {
        group.getCultureAddButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^language and value will get added in the bottom of the existing Value$/, function (callback) {
        dynamicAttr.getCultureTableInAddEditMode().count().then(function(length) {
            if(length > 0) {
                dynamicAttr.getCultureTableInAddEditMode().last().getInnerHtml().then(function (result) {
                    assert.include(result, expectedResultDictionary.cultureDropdownValue);
                    callback();
                });
            }
            else{
                callback();
            }
        });
    });

    this.Then(/^User will notice that add Was Performed$/, function (callback) {
        dynamicAttr.getCultureTableInAddEditMode().count().then(function(length) {
            if(length > 0) {
                dynamicAttr.getCultureTableInAddEditMode().last().getInnerHtml().then(function (result) {
                    assert.include(result, expectedResultDictionary.cultureDropdownValue);
                    callback();
                });
            }
            else{
                callback();
            }
        });
    });

    this.When(/^User mouse over on the translation Values in existing Table$/, function (callback) {
        dynamicAttr.getCultureDropdown().clear().then(function () {
            dynamicAttr.getCultureDropdown().click().then(function (result) {
                dynamicAttr.getCultureDropDownElements().first().click().then(function () {
                    dynamicAttr.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                        dynamicAttr.getCultureAddButton().click().then(function () {
                        });
                    });
                });
            });
        });
        //Adding 2nd row in existing table
        dynamicAttr.getCultureDropdown().click().then(function (result) {
            dynamicAttr.getCultureDropDownElements().last().click().then(function () {
                dynamicAttr.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                    dynamicAttr.getCultureAddButton().click().then(function () {
                        dynamicAttr.getCultureTableInAddEditMode().count().then(function (length) {
                            if(length > 0) {
                                commonlib.mouseMove(dynamicAttr.getCultureTableInAddEditMode().first());
                                commonlib.mouseMove(dynamicAttr.getCultureTableInAddEditMode().last());
                                callback();
                            }
                            else{
                                callback();
                            }
                        });
                    });
                });
            });
        });
    });

    this.Then(/^A black dot and delete icon will be displayed for record with Mouse over$/, function (callback) {
        dynamicAttr.getCultureTableInAddEditMode().count().then(function(length) {
            if(length > 0) {
                var firstRow = dynamicAttr.getCultureTableInAddEditMode().first();
                var lastRow = dynamicAttr.getCultureTableInAddEditMode().last();
                dynamicAttr.getCultureTableDeleteIcon(lastRow).isEnabled().then(function (result) {
                    assert.equal(result, true);
                    callback();
                });
            }
            else{
                callback();
            }
        });
    });

    this.When(/^User select a culture from drop down and enter the Translation Value$/, function (callback) {
        dynamicAttr.getCultureDropdown().clear().then(function () {
            dynamicAttr.getCultureDropdown().click().then(function (result) {
                dynamicAttr.getCultureDropDownElements().first().click().then(function () {
                    dynamicAttr.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                        callback();
                    });
                });
            });
        });
    });

    this.When(/^Value added in existing Values$/, function (callback) {
        dynamicAttr.getCultureAddButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^User will be able to edit the existing translation Values$/, function (callback) {
        dynamicAttr.getCultureTableFirstTextAreaLabel().click().then(function () {
            dynamicAttr.getCultureTableFirstTextArea().isEnabled().then(function (result) {
                assert.equal(result, true);
                callback();
            });
        });
    });

    this.When(/^A Culture already exist in the Translation Values$/, function (callback) {
        dynamicAttr.getCultureDropdown().clear().then(function () {
            dynamicAttr.getCultureDropdown().click().then(function (result) {
                dynamicAttr.getCultureDropDownElements().first().click().then(function () {
                    dynamicAttr.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                        dynamicAttr.getCultureAddButton().click().then(function () {
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.Then(/^that culture will be displayed in The drop list as disabled$/, function (callback) {
        dynamicAttr.getCultureDropdown().clear().then(function () {
            dynamicAttr.getCultureDropdown().click().then(function (result) {
                dynamicAttr.getCultureDropDownElements().get(0).getAttribute(settings.constants.CLASS).then(function (text) {
                    assert.include(text, settings.constants.DISABLELISTITEM);
                    callback();
                });
            });
        });
    });

    this.When(/^User define the value for that Language to the max (\d+) characters$/, function (arg1, callback) {
        callback.pending();
    });

    this.Then(/^User will be able to continue writing up to max allowed Characters$/, function (callback) {
        callback.pending();
    });

    this.Then(/^User will get warning message that user cannot enter more Than (\d+) characters$/, function (arg1, callback) {
        callback.pending();
    });

    this.When(/^user start entering the character in the culture drop Down Box$/, function (callback) {
        dynamicAttr.getCultureDropdown().clear().then(function () {
            dynamicAttr.getCultureDropdown().sendKeys(settings.constants.TYPEKEYINDROPDOWN).then(function () {
                callback();
            });
        });
    });

    this.Then(/^Only Culture that contain matching characters will be displayed in The drop Down$/, function (callback) {
        dynamicAttr.getCultureDropDownElements().count().then(function (result) {
            assert.isAbove(result,0);
            callback();
        });
    });

    this.Then(/^Text will be highlighted according to the user's input for Each Word$/, function (callback) {
        dynamicAttr.getCultureDropDownElements().count().then(function (result) {
            if (result > 0) {
                dynamicAttr.getCultureDropDownElements().each(function (element, index) {
                    element.getInnerHtml().then(function (text) {
                        assert.include(text.toLowerCase(), settings.constants.CHECKHIGHLIGHT);
                        if (result == index + 1) {
                            callback();
                        }
                    });
                });
            }
            else {
                callback();
            }
        });
    });

    this.Then(/^A clear icon will be displayed in the Search Field$/, function (callback) {
        callback.pending();
    });

    this.Then(/^User will be able to clear the search by Clear Icon$/, function (callback) {
        callback.pending();
    });

    this.When(/^User clears the search by Clear Icon$/, function (callback) {
        callback.pending();
    });

    this.Then(/^search results Will Clear$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Culture drop down will display the Default Values$/, function (callback) {
        callback.pending();
    });

    this.When(/^User selects a Culture$/, function (callback) {
        dynamicAttr.getCultureDropdown().clear().then(function () {
            dynamicAttr.getCultureDropdown().click().then(function (result) {
                dynamicAttr.getCultureDropDownElements().first().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^Start entering single character in translation Values$/, function (callback) {
        dynamicAttr.getCultureAddButton().isEnabled().then(function (result) {
            assert.equal(result, false);
        });
        dynamicAttr.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
            callback();
        });
    });

    this.Then(/^'Add' button will Be enabled$/, function (callback) {
        dynamicAttr.getCultureAddButton().isEnabled().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.When(/^User add a value in the existing List$/, function (callback) {
        titleToBeEntered = "title" + Math.random();
        group.getCultureOkButton().isEnabled().then(function (result) {
            assert.equal(result, false);
            group.getCultureDropdown().clear().then(function () {
                group.getCultureDropdown().click().then(function (result) {
                    group.getCultureDropDownElements().first().click().then(function () {
                        group.getCultureValueTextBox().sendKeys(titleToBeEntered).then(function () {
                            group.getCultureAddButton().click().then(function () {
                                callback();
                            });
                        });
                    });
                });
            });
        });
    });

    this.Then(/^'OK' Button will be enabled$/, function (callback) {
        group.getCultureOkButton().isEnabled().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.When(/^User click on the OK Button$/, function (callback) {
        group.getAddEditPopup().isPresent().then(function (result) {
            assert.isTrue(result);
            group.getCultureOkButton().click().then(function () {
                callback();
            });
        });
    });

    this.Then(/^Pop up will Be Closed$/, function (callback) {
      group.getCultureIconInAddEditMode().isPresent().then(function (result) {
        assert.isTrue(result);
        callback();
      });
    });

    this.Then(/^Changes in the existing values will get saved$/, function (callback) {
        group.getCultureIconInAddEditMode().click().then(function () {
            group.getCultureTableInAddEditMode().count().then(function (result) {
                assert.isAtMost(result,1);
                group.getCultureCancelButton().click().then(function () {
                    group.onCancel().click().then(function () {
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

    this.When(/^User click on the Cancel Button$/, function (callback) {
        group.getCultureCancelButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^changes will not Be Saved$/, function (callback) {
        group.getCultureIconInAddEditMode().click().then(function () {
            group.getCultureTableInAddEditMode().count().then(function(length) {
                assert.isAtMost(length,1);
                group.getCultureCancelButton().click().then(function () {
                    group.onCancel().click().then(function () {
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

    this.When(/^clicking or mouse hovering on one of the Records$/, function (callback) {
        dynamicAttr.getCultureDropdown().clear().then(function () {
            dynamicAttr.getCultureDropdown().click().then(function (result) {
                dynamicAttr.getCultureDropDownElements().first().click().then(function () {
                    dynamicAttr.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                        dynamicAttr.getCultureAddButton().click().then(function () {
                            dynamicAttr.getCultureTableInAddEditMode().count().then(function (length) {
                                if(length > 0) {
                                    commonlib.mouseMove(dynamicAttr.getCultureTableInAddEditMode().first());
                                    callback();
                                }
                                else{
                                    callback();
                                }
                            });
                        });
                    });
                });
            });
        });
    });

    this.Then(/^delete icon will be displayed on the Record�s Row$/, function (callback) {
        dynamicAttr.getCultureTableInAddEditMode().count().then(function(length) {
            if(length > 0) {
                var firstRow = dynamicAttr.getCultureTableInAddEditMode().first();
                dynamicAttr.getCultureTableDeleteIcon(firstRow).isDisplayed().then(function (result) {
                    assert.equal(result, true);
                    callback();
                });
            }
            else{
                callback();
            }
        });
    });

    this.When(/^user mouse over on the Delete icon$/, function (callback) {
        dynamicAttr.getCultureDropdown().clear().then(function () {
            dynamicAttr.getCultureDropdown().click().then(function (result) {
                dynamicAttr.getCultureDropDownElements().first().click().then(function () {
                    dynamicAttr.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                        dynamicAttr.getCultureAddButton().click().then(function () {
                            dynamicAttr.getCultureTableInAddEditMode().count().then(function (length) {
                                if(length > 0) {
                                    commonlib.mouseMove(dynamicAttr.getCultureTableInAddEditMode().first());
                                    callback();
                                }
                                else{
                                    callback();
                                }
                            });
                        });
                    });
                });
            });
        });
    });

    this.Then(/^Delete text will be Displayed as Tooltip$/, function (callback) {
        dynamicAttr.getCultureTableInAddEditMode().count().then(function(length) {
            if(length > 0) {
                var firstRow = dynamicAttr.getCultureTableInAddEditMode().first()
                dynamicAttr.getCultureTableDeleteIcon(firstRow).getOuterHtml().then(function (result) {
                    assert.include(result, 'Delete');
                    callback();
                });
            }
            else{
                callback();
            }
        });
    });

    this.When(/^User click on the delete button of any existing Translation Value$/, function (callback) {
        dynamicAttr.getCultureDropdown().clear().then(function () {
            dynamicAttr.getCultureDropdown().click().then(function (result) {
                dynamicAttr.getCultureDropDownElements().first().click().then(function () {
                    dynamicAttr.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                        dynamicAttr.getCultureAddButton().click().then(function () {
                            dynamicAttr.getCultureTableInAddEditMode().count().then(function(length) {
                                if(length > 0) {
                                    dynamicAttr.getCultureTableInAddEditMode().first().click().then(function () {
                                        callback();
                                    });
                                }
                                else{
                                    callback();
                                }
                            });
                        });
                    });
                });
            });
        });
    });

    this.Then(/^System will display a Warning message$/, function (callback) {
        commonlib.waitForElement(commonlib.getNEPAlertYes()).then(function(){
            commonlib.getNEPAlertYes().click().then(function(){
                groupPage.getCultureCancelButton().click().then(function () {
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
    });

    this.When(/^Exiting values of the translation values Got increases$/, function (callback) {
        callback.pending();
    });

    this.Then(/^A scroll down will be added on the Right side$/, function (callback) {
        callback.pending();
    });

    this.Given(/^Edit Group screen is opened$/, function (callback) {
        commonlib.open();
        groupPage.getGroupLink().click().then(function () {
            commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getEditButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^User click on the culture Button for Title field$/, function (callback) {
        group.getTitleCultureIcon().click().then(function () {
            callback();
        });
    });

    this.When(/^User selects the culture value from drop down and enters the Translation value$/, function (callback) {
        titleToBeEntered = "title" + Math.random();
        group.getCultureOkButton().isEnabled().then(function (result) {
            assert.equal(result, false);
            group.getCultureDropdown().clear().then(function () {
                group.getCultureDropdown().click().then(function (result) {
                    group.getCultureDropDownElements().last().click().then(function () {
                        group.getCultureValueTextBox().sendKeys(titleToBeEntered).then(function () {
                            group.getCultureAddButton().click().then(function () {
                                callback();
                            });
                        });
                    });
                });
            });
        });
    });

    this.Then(/^Value will get saved at the bottom of the existing values List$/, function (callback) {
        group.getCultureTableInAddEditMode().count().then(function(length) {
            if(length > 0) {
                group.getCultureTableInAddEditMode().last().getInnerHtml().then(function (result) {
                    assert.include(result, titleToBeEntered);
                    callback();
                });
            }
            else{
                callback();
            }
        });
    });

    this.Given(/^View Group screen is opened$/, function (callback) {
        commonlib.open();
        groupPage.getGroupLink().click().then(function () {
            commonlib.elementChainingAll(groupPage.getAllItemsFromGrid().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getViewButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^User click on the culture icon Of Title Field$/, function (callback) {
        group.getTitleCultureIcon().click().then(function () {
            callback();
        });
    });

    this.Then(/^User should be able to view all the existing translation values for the Title Field$/, function (callback) {
        group.getCultureAndValues().count().then(function (length) {
            assert.isAbove(length,0);
            callback();
        });
    });

    this.Then(/^User should not be able to make any changes to the translation values in the Pop up$/, function (callback) {
        group.getCultureCloseButton().isDisplayed().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Given(/^Group Office screen is Opened$/, function (callback) {
        commonlib.open();
        groupPage.getGroupLink().click().then(function () {
            callback();
        });
    });

    this.When(/^User drill down a record in View Mode$/, function (callback) {
        commonlib.elementChainingAll(groupPage.getAllItemsFromGrid().first(), 'tagname', 'td').first().click().then(function () {
            actionButtons.getViewButton().click().then(function () {
                callback();
            });
        });
    });

    this.Then(/^Title field value will be displayed in Default Language \(English\)$/, function (callback) {
        group.getGroupDetailsText().then(function(result){
            group.getTitleCultureIcon().click().then(function(){
                group.getCultureViewDefaultText().then(function(result1){
                    assert.include(result1,result);
                    callback();
                });
            });
        });
    });

    this.When(/^User drill down a record in View Mode for which translation does not exist for Title field$/, function (callback) {
        commonlib.elementChainingAll(groupPage.getAllItemsFromGrid().first(), 'tagname', 'td').first().click().then(function () {
            actionButtons.getViewButton().click().then(function () {
                callback();
            });
        });
    });

    this.Then(/^Culture icon for Title field will be disable On View Mode$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Tool tip text on mouse over on the Culture icon Will Display 'No Translation were define'$/, function (callback) {
        callback.pending();
    });

    this.When(/^User Click on culture icon for Title Field$/, function (callback) {
        callback.pending();
    });

    this.When(/^Existing translation values list does not fit into the Culture pop up$/, function (callback) {
        callback.pending();
    });

    this.Then(/^scroll bar will appear in order to view all the Translation Values$/, function (callback) {
        callback.pending();
    });

    this.When(/^Click on culture icon for Title Field$/, function (callback) {
        group.getTitleCultureIcon().click().then(function () {
            callback();
        });
    });

    this.When(/^User view a multi\-line translation value on culture Pop up$/, function (callback) {
        group.getCultureValues().first().getText().then(function(txt){
            assert.isAbove(txt.length,0);
            callback();
        });
    });

    this.Then(/^User will be able to view the entire translation value text in multi line Without Ellipsis$/, function (callback) {
        group.getCultureValues().first().getText().then(function(txt){
            assert.isAbove(txt.length,0);
            assert.isTrue(txt.indexOf("...")==-1);
            callback();
        });
    });

    this.Then(/^A pop up will open with the Culture and Value$/, function (callback) {
        group.getCultureAndValues().count().then(function(length){
            assert.isAbove(length,0);
            callback();
        });
    });
};
module.exports = myStepDefinitionsWrapper;