var myStepDefinitionsWrapper = function () {

    var dynamicAttr = require('../../../pages/dynamicAttribute');
    var merchandiseHierarchy = require('../../../pages/merchandiseHierarchy');
    var actionButtons = require('../../../pages/actionButtons');
    var settings = require('../../../common/settings');
    var commonlib = require('../../../common/commonLib');
    var breadCrumb = require('../../../pages/breadCrumb');
    var chai = require(settings.constants.CHAI);
    var assert = chai.assert;
    this.setDefaultTimeout(settings.config.STEPTIMEOUT);
    var descriptionText = "des";
    var expectedResultDictionary = {};


    this.Given(/^Create Merchandise Hierarchy screen is opened$/, function (callback) {
        commonlib.open();
        this.mode = 'create';
        merchandiseHierarchy.openViewScreen().then(function () {
            actionButtons.getAddButton().click().then(function () {
                callback();
            });
        });
    });

    this.When(/^User enter the Description$/, function (callback) {
        merchandiseHierarchy.getDescriptionTextBox().sendKeys(descriptionText);
        callback();
    });

    this.When(/^User clicks on the culture button$/, function (callback) {
        commonlib.waitForElement(merchandiseHierarchy.getDescriptionCultureIcon()).then(function () {
            merchandiseHierarchy.getDescriptionCultureIcon().click().then(function () {
                callback();
            });
        });
    });

    this.Then(/^A pop up will open with the culture and value	field$/, function (callback) {
        dynamicAttr.getCultureDropdown().isDisplayed().then(function (result) {
            assert.equal(result, true);
        });
        dynamicAttr.getCultureValueTextBox().isDisplayed().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.Then(/^default culture and value will be displayed in the existing table below the culture drop down$/, function (callback) {
        dynamicAttr.getCultureDropdown().getAttribute(settings.constants.VALUE).then(function (result) {
            assert.isNotNull(result);
            dynamicAttr.getCultureCancelButton().click().then(function () {
                dynamicAttr.onCancel().click().then(function () {
                    commonlib.waitForElement(commonlib.getNEPAlertYes()).then(function(){
                        commonlib.getNEPAlertYes().click().then(function(){
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.When(/^User leave the Description field as blank$/, function (callback) {
        merchandiseHierarchy.getDescriptionTextBox().sendKeys(" ").then(function () {
            callback();
        });
    });

    this.Then(/^A pop up will open with the culture and value$/, function (callback) {
        dynamicAttr.getCultureDropdown().isDisplayed().then(function (result) {
            assert.equal(result, true);
        });
        dynamicAttr.getCultureValueTextBox().isDisplayed().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.Then(/^The system’s default culture will be displayed$/, function (callback) {
        dynamicAttr.getCultureDropdown().getAttribute(settings.constants.VALUE).then(function (result) {
            assert.isNotNull(result);
            callback();
        });
    });

    this.Then(/^The focus will be on the value field$/, function (callback) {
        commonlib.getActiveElement().getAttribute(settings.constants.ID).then(function (result) {
            assert.isNotNull(result);
            callback();
        });
    });


    this.Given(/^Culture pop\-up is opened for Description field from Create Merchandise Hierarchy screen$/, function (callback) {
        commonlib.open();
        this.mode = 'create';
        merchandiseHierarchy.openViewScreen().then(function () {
            actionButtons.getAddButton().click().then(function () {
                merchandiseHierarchy.getDescriptionCultureIcon().click().then(function () {
                    callback();
                });
            });
        });
    });


    this.When(/^click on drop down in pop up$/, function (callback) {
        dynamicAttr.getCultureDropdown().clear().then(function () {
            dynamicAttr.getCultureDropdown().click().then(function (result) {
                callback();
            });
        });
    });


    this.Then(/^drop down will be displayed with different cultures$/, function (callback) {
        dynamicAttr.getCultureDropDownElements().count().then(function (result) {
            assert.isAbove(result, 0);
            callback();
        });
    });

    this.Then(/^Each value will display with relevant flag and country value in parenthesis$/, function (callback) {
        dynamicAttr.getCultureDropDownElements().first().getInnerHtml().then(function (result) {
            assert.include(result, settings.constants.LEFTPARENTHESIS);
            assert.include(result, settings.constants.RIGHTPARENTHESIS);
            assert.include(result, settings.constants.IMG);
            callback();
        });
    });

    this.Then(/^Country will appear with the corresponding flag in Parenthesis$/, function (callback) {
        dynamicAttr.getCultureDropdown().getAttribute(settings.constants.VALUE).then(function (result) {
            assert.include(result, settings.constants.LEFTPARENTHESIS);
            assert.include(result, settings.constants.RIGHTPARENTHESIS);
            callback();
        });
    });

    this.When(/^User selects the language from culture drop down$/, function (callback) {
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

    this.Then(/^User will be able to select the language from the culture drop down$/, function (callback) {
        dynamicAttr.getCultureDropdown().clear().then(function () {
            dynamicAttr.getCultureDropdown().click().then(function (result) {
                dynamicAttr.getCultureDropDownElements().first().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^User will be able to define the value for particular language$/, function (callback) {
        dynamicAttr.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function (result) {
            callback();
        });
    });

    this.When(/^User adds the translation values$/, function (callback) {
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

    this.When(/^Values gets added in existing values$/, function (callback) {
        dynamicAttr.getCultureTableInAddEditMode().count().then(function (result) {
            assert.isNotNull(result);
            callback();
        });
    });

    this.Then(/^All the translation values will be in the editable mode$/, function (callback) {
        dynamicAttr.getCultureTableFirstTextAreaLabel().click().then(function () {
            dynamicAttr.getCultureTableFirstTextArea().isEnabled().then(function (result) {
                assert.equal(result, true);
                callback();
            });
        });
    });

    this.Then(/^User will be able to edit any existing value$/, function (callback) {
        dynamicAttr.getCultureTableFirstTextArea().isEnabled().then(function (result) {
            //dynamicAttr.getCultureTableFirstTextArea().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
            assert.isTrue(result);
            callback();
            // });
        });
    });

    this.When(/^User clicks on Add button$/, function (callback) {
        dynamicAttr.getCultureAddButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^language and value will get added in the bottom of the existing value$/, function (callback) {
        dynamicAttr.getCultureTableInAddEditMode().count().then(function (length) {
            if (length > 0) {
                dynamicAttr.getCultureTableInAddEditMode().last().getInnerHtml().then(function (result) {
                    assert.include(result, expectedResultDictionary.cultureDropdownValue);
                    callback();
                });
            }
            else {
                callback();
            }
        });
    });

    this.Then(/^User will notice that add was performed$/, function (callback) {
        dynamicAttr.getCultureTableInAddEditMode().count().then(function (length) {
            if (length > 0) {
                dynamicAttr.getCultureTableInAddEditMode().last().getInnerHtml().then(function (result) {
                    assert.include(result, expectedResultDictionary.cultureDropdownValue);
                    callback();
                });
            }
            else {
                callback();
            }
        });
    });


    this.Given(/^Culture pop up is opened$/, function (callback) {
        commonlib.open();
        this.mode = 'create';
        merchandiseHierarchy.openViewScreen().then(function () {
            actionButtons.getAddButton().click().then(function () {
                commonlib.waitForElement(merchandiseHierarchy.getDescriptionCultureIcon()).then(function () {
                    merchandiseHierarchy.getDescriptionCultureIcon().click().then(function () {
                        callback();
                    });
                });

            });
        });
    });


    this.When(/^User defines the value for that language$/, function (callback) {
        dynamicAttr.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
            callback();
        });
    });


    this.When(/^User mouse over on translation values in existing table$/, function (callback) {
        callback();
    });

    this.Then(/^A black dot and delete icon will be displayed for record with mouse over$/, function (callback) {
        dynamicAttr.getCultureTableInAddEditMode().count().then(function (length) {
            if (length > 0) {
                var firstRow = dynamicAttr.getCultureTableInAddEditMode().first();
                var lastRow = dynamicAttr.getCultureTableInAddEditMode().last();
                dynamicAttr.getCultureTableDeleteIcon(lastRow).isEnabled().then(function (result) {
                    assert.equal(result, true);
                    callback();
                });
            }
            else {
                callback();
            }
        });
    });

    this.When(/^User select a culture from drop down and enter translation value$/, function (callback) {
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

    this.When(/^Value added in the existing values$/, function (callback) {
        dynamicAttr.getCultureAddButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^User will be able to edit the existing translation values$/, function (callback) {
        dynamicAttr.getCultureTableFirstTextAreaLabel().click().then(function () {
            dynamicAttr.getCultureTableFirstTextArea().isEnabled().then(function (result) {
                assert.equal(result, true);
                callback();
            });
        });
    });

    this.When(/^A Culture already exist in the translation values$/, function (callback) {
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

    this.Then(/^that culture will be displayed in drop list as disabled\.$/, function (callback) {
        dynamicAttr.getCultureDropdown().clear().then(function () {
            dynamicAttr.getCultureDropdown().click().then(function (result) {
                dynamicAttr.getCultureDropDownElements().get(0).getAttribute(settings.constants.CLASS).then(function (text) {
                    assert.include(text, settings.constants.DISABLELISTITEM);
                    callback();
                });
            });
        });
    });

    this.When(/^User defines the value for that language to the max (\d+) characters$/, function (arg1, callback) {
        callback.pending();
    });

    this.Then(/^User will be able to continue wrtting up to max allowed characters$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Line will get shift down to second row once (\d+) characters gets entered$/, function (arg1, callback) {
        callback.pending();
    });

    this.Then(/^User will get warning message that user cannot enter more than (\d+) characters$/, function (arg1, callback) {
        callback.pending();
    });

    this.Given(/^Culture pop up is opened in create mode$/, function (callback) {
        commonlib.open();
        this.mode = 'create';
        merchandiseHierarchy.openViewScreen().then(function () {
            actionButtons.getAddButton().click().then(function () {
                merchandiseHierarchy.getDescriptionCultureIcon().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^more than (\d+) line is needed to display$/, function (arg1, callback) {
        callback.pending();
    });

    this.Then(/^value will be saved in Existing value$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Value will get truncated and added with ellipsis$/, function (callback) {
        callback.pending();
    });

    this.When(/^User add transalation value with max (\d+) characters$/, function (arg1, callback) {
        dynamicAttr.getCultureValueTextBox().sendKeys('a'.repeat(settings.constants.TEXTAREAMAXLEN)).then(function () {
            callback();
        });
    });

    this.When(/^Value got saved with the ellipsis$/, function (callback) {
        callback.pending();
    });

    this.When(/^User mouse over on anywhere on text$/, function (callback) {
        callback.pending();
    });

    this.Then(/^User will be able to view full translation value on tooltip$/, function (callback) {
        callback.pending();
    });

    this.When(/^User clicks the ellipsis$/, function (callback) {
        callback.pending();
    });

    this.Then(/^text area will be expanded to show the full translation value$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Cursor will be at the end of the text$/, function (callback) {
        callback.pending();
    });

    this.Then(/^User will be able to edit the value$/, function (callback) {
        callback.pending();
    });

    this.When(/^user starts entering the character in the culture drop down box$/, function (callback) {
        dynamicAttr.getCultureDropdown().clear().then(function () {
            dynamicAttr.getCultureDropdown().sendKeys(settings.constants.TYPEKEYINDROPDOWN).then(function () {
                callback();
            });
        });
    });

    this.Then(/^Only Culture that contain matching characters will be displayed in the drop down$/, function (callback) {
        dynamicAttr.getCultureDropDownElements().count().then(function (result) {
            assert.isAbove(result, 0);
            callback();
        });
    });

    this.Then(/^Text will be highlighted according to the user's input for each word$/, function (callback) {
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

    this.Then(/^A clear icon will be displayed in the search field$/, function (callback) {
        callback.pending();
    });

    this.Then(/^User will be able to clear the search by clear icon$/, function (callback) {
        callback.pending();
    });

    this.When(/^User clears the search by clear icon$/, function (callback) {
        callback.pending();
    });

    this.Then(/^search results will clear$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Culture drop down will display the default values$/, function (callback) {
        callback.pending();
    });

    this.When(/^User selects a culture$/, function (callback) {
        dynamicAttr.getCultureDropdown().clear().then(function () {
            dynamicAttr.getCultureDropdown().click().then(function (result) {
                dynamicAttr.getCultureDropDownElements().first().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^Start entering single character in the transalation values$/, function (callback) {
        dynamicAttr.getCultureAddButton().isEnabled().then(function (result) {
            assert.equal(result, false);
        });
        dynamicAttr.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
            callback();
        });
    });

    this.Then(/^'Add' button will be enabled$/, function (callback) {
        dynamicAttr.getCultureAddButton().isEnabled().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.When(/^User adds a value in the existing list$/, function (callback) {
        dynamicAttr.getCultureOkButton().isEnabled().then(function (result) {
            assert.equal(result, false);
        });
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

    this.Then(/^'OK' button will be enabled$/, function (callback) {
        dynamicAttr.getCultureOkButton().isEnabled().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.When(/^User clicks on the OK button$/, function (callback) {
        dynamicAttr.getAddEditPopup().isPresent().then(function (result) {
            assert.equal(result, true);
        });

        dynamicAttr.getCultureOkButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^Pop up will be closed$/, function (callback) {
        dynamicAttr.getCultureIconInAddEditMode().isPresent().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.Then(/^Changes in the existing values will be saved$/, function (callback) {
        dynamicAttr.getCultureIconInAddEditMode().click().then(function () {
            dynamicAttr.getCultureTableInAddEditMode().count().then(function (result) {
                assert.isNotNull(result);
                callback();
            });
        });
    });

    this.When(/^User clicks on the cancel button$/, function (callback) {
        dynamicAttr.getCultureCancelButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^changes will not be saved$/, function (callback) {
        dynamicAttr.getCultureIconInAddEditMode().click().then(function () {
            dynamicAttr.getCultureTableInAddEditMode().count().then(function (result) {
                assert.equal(result, 0);
                callback();
            });
        });
    });

    this.When(/^clicking or mouse hovering on one of records$/, function (callback) {
        dynamicAttr.getCultureDropDownElements().count().then(function (length) {
            if (length > 0) {
                dynamicAttr.getCultureDropdown().clear().then(function () {
                    dynamicAttr.getCultureDropdown().click().then(function (result) {
                        dynamicAttr.getCultureDropDownElements().first().click().then(function () {
                            dynamicAttr.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                                dynamicAttr.getCultureAddButton().click().then(function () {
                                    commonlib.mouseMove(dynamicAttr.getCultureTableInAddEditMode().first());
                                    callback();
                                });
                            });
                        });
                    });
                });
            }
            else {
                callback();
            }
        });
    });

    this.Then(/^delete icon will be displayed on the record’s row$/, function (callback) {
        dynamicAttr.getCultureTableInAddEditMode().count().then(function (length) {
            if (length > 0) {
                var firstRow = dynamicAttr.getCultureTableInAddEditMode().first();
                dynamicAttr.getCultureTableDeleteIcon(firstRow).isDisplayed().then(function (result) {
                    assert.equal(result, true);
                    callback();
                });
            }
            else {
                callback();
            }
        });
    });

    this.When(/^user mouse over on the delete icon$/, function (callback) {
        dynamicAttr.getCultureDropdown().clear().then(function () {
            dynamicAttr.getCultureDropdown().click().then(function (result) {
                dynamicAttr.getCultureDropDownElements().first().click().then(function () {
                    dynamicAttr.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                        dynamicAttr.getCultureAddButton().click().then(function () {
                            dynamicAttr.getCultureTableInAddEditMode().count().then(function (length) {
                                if (length > 0) {
                                    commonlib.mouseMove(dynamicAttr.getCultureTableInAddEditMode().first());
                                    callback();
                                }
                                else {
                                    callback();
                                }
                            });
                        });
                    });
                });
            });
        });
    });

    this.Then(/^Delete text will be displayed as tooltip$/, function (callback) {
        dynamicAttr.getCultureTableInAddEditMode().count().then(function (length) {
            if (length > 0) {
                var firstRow = dynamicAttr.getCultureTableInAddEditMode().first()
                dynamicAttr.getCultureTableDeleteIcon(firstRow).getOuterHtml().then(function (result) {
                    assert.include(result, 'Delete');
                    callback();
                });
            }
            else {
                callback();
            }
        });
    });

    this.When(/^User click on the delete button of any existing translation value$/, function (callback) {
        dynamicAttr.getCultureDropdown().clear().then(function () {
            dynamicAttr.getCultureDropdown().click().then(function (result) {
                dynamicAttr.getCultureDropDownElements().first().click().then(function () {
                    dynamicAttr.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                        dynamicAttr.getCultureAddButton().click().then(function () {
                            dynamicAttr.getCultureTableInAddEditMode().count().then(function (length) {
                                if (length > 0) {
                                    dynamicAttr.getCultureTableInAddEditMode().first().click().then(function(){
                                        dynamicAttr.getCultureDeleteButton().isEnabled().then(function(result){
                                            if (result){
                                                dynamicAttr.getCultureDeleteButton().click().then(function () {
                                                    callback();
                                                });
                                            }
                                        });
                                    });
                                }
                                else {
                                    callback();
                                }
                            });
                        });
                    });
                });
            });
        });
    });

    this.Then(/^System will display a warning message$/, function (callback) {
        commonlib.waitForElement(commonlib.getNEPAlertYes()).then(function(){
            commonlib.getNEPAlertYes().click().then(function(){
                callback();
            });
        });
    });

    this.When(/^Exiting values of translation values got increases$/, function (callback) {
        callback.pending();
    });

    this.Then(/^A scroll down will be added on the right side$/, function (callback) {
        callback.pending();
    });

    this.Given(/^Edit Merchandise hierarchy screen is opened$/, function (callback) {
        commonlib.open();
        this.mode = 'edit';
        merchandiseHierarchy.openViewScreen().then(function () {
            merchandiseHierarchy.getCheckBox().click().then(function () {
                actionButtons.getEditButton().click().then(function () {
                    callback();
                });
            });
        });

    });

    this.When(/^User clicks on the culture button for Description field$/, function (callback) {
        merchandiseHierarchy.getDescriptionCultureIcon().click().then(function () {
            callback();
        });
    });

    this.When(/^User select the culture value from drop down and enter the translation value$/, function (callback) {
        dynamicAttr.getCultureDropdown().clear().then(function () {
            dynamicAttr.getCultureDropdown().click().then(function (result) {
                dynamicAttr.getCultureDropDownElements().first().click().then(function () {
                    dynamicAttr.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                        dynamicAttr.getCultureDropdown().getAttribute(settings.constants.VALUE).then(function (result) {
                            expectedResultDictionary.cultureDropdownValue = result;
                            callback();
                        });
                    });
                });
                //   callback();
            });
        });
    });

    this.Then(/^Value will get saved at the bottom of the existing values list$/, function (callback) {
        dynamicAttr.getCultureTableInAddEditMode().count().then(function (length) {
            if (length > 0) {
                dynamicAttr.getCultureTableInAddEditMode().last().getInnerHtml().then(function (result) {
                    assert.include(result, expectedResultDictionary.cultureDropdownValue);
                    callback();
                });
            }
            else {
                callback();
            }
        });
    });

    this.Given(/^View Merchandise hierarchy screen is opened$/, function (callback) {
        commonlib.open();
        merchandiseHierarchy.openViewScreen().then(function () {
            merchandiseHierarchy.getCheckBox().click().then(function () {
                actionButtons.getViewButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^User click on the culture icon of Description field$/, function (callback) {
        merchandiseHierarchy.getDescriptionCultureIcon().click().then(function () {
            callback();
        });
    });

    this.Then(/^User should be able to view all the existing transalation values for the Description field$/, function (callback) {
        merchandiseHierarchy.getCultureAndValues().count().then(function (length) {
            assert.isAbove(length, 0);
            callback();
        });
    });

    this.Then(/^User should not be able to make any changes to the translation values in the pop up$/, function (callback) {
        merchandiseHierarchy.getCultureCloseButton().isDisplayed().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Given(/^Merchandise hierarchy Office screen is opened$/, function (callback) {
        commonlib.open();
        merchandiseHierarchy.openViewScreen().then(function () {
            callback();
        });
    });

    this.When(/^User drills down record in view mode$/, function (callback) {
        merchandiseHierarchy.getCheckBox().click().then(function () {
            actionButtons.getViewButton().click().then(function () {
                callback();
            });
        });
    });

    this.Then(/^Description field value will be displayed in default language \(English\)$/, function (callback) {
        merchandiseHierarchy.getDescriptionHeading().isEnabled().then(function (isDescriptionPresent) {
            assert.isTrue(isDescriptionPresent);
            callback();
        });
    });

    this.When(/^User drill down a record in view mode for which translation does not exist for Description field$/, function (callback) {
        merchandiseHierarchy.getLastRecord().click().then(function () {
            callback();
        });
    });

    this.Then(/^Culture icon for Description field will be disable on View mode$/, function (callback) {
        callback.pending();
    });

    this.When(/^User mouse over on the Culture icon$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Tool tip will be displayed as 'No Translation were define'$/, function (callback) {
        callback.pending();
    });

    this.When(/^User click on culture icon$/, function (callback) {
        merchandiseHierarchy.getDescriptionCultureIcon().click().then(function () {
            callback();
        });
    });

    this.When(/^Existing translation value list does not fit into the culture pop up$/, function (callback) {
        callback.pending();
    });

    this.Then(/^scroll bar will appear in order to view all the translation values$/, function (callback) {
        callback.pending();
    });

    this.When(/^Click on culture icon for Description field$/, function (callback) {
        merchandiseHierarchy.getDescriptionCultureIcon().click().then(function () {
            callback();
        });
    });

    this.When(/^User view a multi line translation value on culture pop up$/, function (callback) {
        merchandiseHierarchy.getCultureValues().first().getText().then(function (txt) {
            assert.isAbove(txt.length, 0);
            callback();
        });
    });

    this.Then(/^User will be able to view the entire translation value text in multi line without ellipsis$/, function (callback) {
        merchandiseHierarchy.getCultureValues().first().getText().then(function (txt) {
            assert.isAbove(txt.length, 0);
            assert.isTrue(txt.indexOf("...") == -1);
            callback();
        });
    });


    this.Then(/^a pop up will open with the culture and value$/, function (callback) {
        merchandiseHierarchy.getCultureAndValues().count().then(function (length) {
            assert.isAbove(length, 0);
            callback();
        });
    });
};
module.exports = myStepDefinitionsWrapper;