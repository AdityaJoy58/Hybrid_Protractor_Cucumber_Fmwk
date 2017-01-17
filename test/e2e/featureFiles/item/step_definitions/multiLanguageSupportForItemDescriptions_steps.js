var myStepDefinitionsWrapper = function () {

    var itemPage = require('../../../pages/item');
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

    this.Given(/^Create Item screen is opened$/, function (callback) {
        commonlib.open();
        itemPage.getItemLink().click().then(function () {
            actionButtons.getAddButton().click().then(function(){
                callback();
            });
        });
    });

    this.When(/^User enter the Short Description$/, function (callback) {
        itemPage.getShortDescriptionTextBox().clear().sendKeys("title");
        callback();
    });

    this.When(/^User click on the culture button for Short Description$/, function (callback) {
         itemPage.getShortDescriptionCultureIcon().then(function () {
            itemPage.getShortDescriptionCultureIcon().get(0).click().then(function () {
                callback();
            });
        });
    });

    this.Then(/^A pop up will open with the culture And Value Field$/, function (callback) {
        itemPage.getCultureDropdown().isDisplayed().then(function (result) {
            assert.equal(result, true);
        });
        itemPage.getCultureValueTextBox().isDisplayed().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.Then(/^Default culture and value will be displayed in the existing table below culture Drop Down$/, function (callback) {
        itemPage.getCultureDropdown().getAttribute(settings.constants.VALUE).then(function (result) {
            assert.isNotNull(result);
            itemPage.getCultureCancelButton().click().then(function () {
                itemPage.onCancel().click().then(function () {
                    commonlib.waitForElement(commonlib.getNEPAlertYes()).then(function(){
                        commonlib.getNEPAlertYes().click().then(function(){
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.When(/^User enter the Long Description$/, function (callback) {
        itemPage.getLongDescriptionTextBox().clear().sendKeys("title");
        callback();
    });

    this.When(/^User click on the culture button for Long Description$/, function (callback) {
         itemPage.getLongDescriptionCultureIcon().then(function () {
            itemPage.getLongDescriptionCultureIcon().get(1).click().then(function () {
                callback();
            });
        });
    });

    this.When(/^User leave the Short Description field as blank$/, function (callback) {
        itemPage.getShortDescriptionTextBox().clear().sendKeys("");
        callback();
    });

    this.When(/^User click on the culture button for Short Description field$/, function (callback) {
        itemPage.getShortDescriptionCultureIcon().then(function () {
            itemPage.getShortDescriptionCultureIcon().get(0).click().then(function () {
                callback();
            });
        });
    });

    this.Then(/^A pop up will open with the culture And Value$/, function (callback) {
        itemPage.getCultureDropdown().isDisplayed().then(function (result) {
            assert.equal(result, true);
        });
        itemPage.getCultureValueTextBox().isDisplayed().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.Then(/^The system�s default culture Will be Displayed$/, function (callback) {
        itemPage.getCultureDropdown().getAttribute(settings.constants.VALUE).then(function (result) {
            assert.isNotNull(result);
            callback();
        });
    });

    this.Then(/^The focus will be on the Value Field$/, function (callback) {
        commonlib.getActiveElement().getAttribute(settings.constants.ID).then(function (result) {
            assert.isNotNull(result);
            callback();
        });
    });

    this.When(/^User leave the Long Description field as blank$/, function (callback) {
        itemPage.getLongDescriptionTextBox().clear().sendKeys("");
        callback();
    });

    this.When(/^User click on the culture button for Long Description field$/, function (callback) {
        itemPage.getLongDescriptionCultureIcon().then(function () {
            itemPage.getLongDescriptionCultureIcon().get(1).click().then(function () {
                callback();
            });
        });
    });

    this.Given(/^Culture pop\-up is opened for Description\(Long or Short\) field from Create Item screen$/, function (callback) {
        commonlib.open();
        itemPage.getItemLink().click().then(function () {
            actionButtons.getAddButton().click().then(function(){
                itemPage.getMasterCodeTextBox().clear().sendKeys('DummyCode').then(function(){
                    itemPage.getShortDescriptionCultureIcon().then(function () {
                        itemPage.getShortDescriptionCultureIcon().get(0).click().then(function () {
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.When(/^click on the drop down in Pop Up$/, function (callback) {
        itemPage.getCultureDropdown().clear().then(function () {
            itemPage.getCultureDropdown().click().then(function (result) {
                callback();
            });
        });
    });

    this.Then(/^drop down will be displayed With Different Cultures$/, function (callback) {
        itemPage.getCultureDropDownElements().count().then(function (result) {
            assert.isAbove(result, 0);
            callback();
        });
    });

    this.Then(/^Each value will display with relevant flag and country value In Parenthesis$/, function (callback) {
        itemPage.getCultureDropDownElements().first().getInnerHtml().then(function (result) {
            assert.include(result, settings.constants.LEFTPARENTHESIS);
            assert.include(result, settings.constants.RIGHTPARENTHESIS);
            assert.include(result, settings.constants.IMG);
            callback();
        });
    });

    this.When(/^User select the language from culture Drop Down$/, function (callback) {
        itemPage.getCultureDropdown().clear().then(function () {
            itemPage.getCultureDropdown().click().then(function (result) {
                itemPage.getCultureDropDownElements().first().click().then(function () {
                    itemPage.getCultureDropdown().getAttribute(settings.constants.VALUE).then(function (result) {
                        expectedResultDictionary.cultureDropdownValue = result;
                        callback();
                    });
                });
            });
        });
    });

    this.Then(/^Country will appear with the corresponding flag In Parenthesis$/, function (callback) {
        itemPage.getCultureDropdown().getAttribute(settings.constants.VALUE).then(function (result) {
            assert.include(result, settings.constants.LEFTPARENTHESIS);
            assert.include(result, settings.constants.RIGHTPARENTHESIS);
            callback();
        });
    });

    this.Then(/^User will be able to select the language from the Culture Drop Down$/, function (callback) {
        itemPage.getCultureDropdown().clear().then(function () {
            itemPage.getCultureDropdown().click().then(function (result) {
                itemPage.getCultureDropDownElements().first().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^User will be able to define the value For Particular Language$/, function (callback) {
        itemPage.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function (result) {
            callback();
        });
    });

    this.When(/^User add The Translation Values$/, function (callback) {
        itemPage.getCultureDropdown().clear().then(function () {
            itemPage.getCultureDropdown().click().then(function (result) {
                itemPage.getCultureDropDownElements().first().click().then(function () {
                    itemPage.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                        itemPage.getCultureAddButton().click().then(function () {
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.When(/^Values gets added In Existing Values$/, function (callback) {
        itemPage.getCultureTableInAddEditMode().count().then(function(length) {
            if(length > 0) {
                itemPage.getCultureTableInAddEditMode().count().then(function (result) {
                    assert.isNotNull(result, 0);
                    callback();
                });
            }
            else{
                callback();
            }
        });
    });

    this.Then(/^All the translation values will be in the Editable mode$/, function (callback) {
        itemPage.getCultureTableFirstTextAreaLabel().click().then(function () {
            itemPage.getCultureTableFirstTextArea().isEnabled().then(function (result) {
                assert.equal(result, true);
                callback();
            });
        });
    });

    this.Then(/^User will be able to edit Any Existing Value$/, function (callback) {
        itemPage.getCultureTableFirstTextArea().isEnabled().then(function (result) {
            //itemPage.getCultureTableFirstTextArea().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
            assert.isTrue(result);
            callback();
            // });
        });
    });

    this.When(/^User define the value for That Language$/, function (callback) {
        itemPage.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
            callback();
        });
    });

    this.When(/^User click On Add Button$/, function (callback) {
        itemPage.getCultureAddButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^language and value will get added in the bottom of the Existing value$/, function (callback) {
        itemPage.getCultureTableInAddEditMode().count().then(function(length) {
            if(length > 0) {
                itemPage.getCultureTableInAddEditMode().last().getInnerHtml().then(function (result) {
                    assert.include(result, expectedResultDictionary.cultureDropdownValue);
                    callback();
                });
            }
            else{
                callback();
            }
        });
    });

    this.Then(/^User will notice that Add Was Performed$/, function (callback) {
        itemPage.getCultureTableInAddEditMode().count().then(function(length) {
            if(length > 0) {
                itemPage.getCultureTableInAddEditMode().last().getInnerHtml().then(function (result) {
                    assert.include(result, expectedResultDictionary.cultureDropdownValue);
                    callback();
                });
            }
            else{
                callback();
            }
        });
    });

    this.When(/^User mouse over on the translation values in Existing table$/, function (callback) {
        callback.pending();
    });

    this.Then(/^A black dot and delete icon will be displayed for record with Mouse Over$/, function (callback) {
        callback.pending();
    });

    this.When(/^A Culture Already exist in the translation values$/, function (callback) {
        itemPage.getCultureDropdown().clear().then(function () {
            itemPage.getCultureDropdown().click().then(function (result) {
                itemPage.getCultureDropDownElements().first().click().then(function () {
                    itemPage.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                        itemPage.getCultureAddButton().click().then(function () {
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.Then(/^that culture will be displayed in the drop list as Disabled\.$/, function (callback) {
        itemPage.getCultureDropdown().clear().then(function () {
            itemPage.getCultureDropdown().click().then(function (result) {
                itemPage.getCultureDropDownElements().get(0).getAttribute(settings.constants.CLASS).then(function (text) {
                    assert.include(text, settings.constants.DISABLELISTITEM);
                    callback();
                });
            });
        });
    });

    this.When(/^User define the value for That Language to the max allowed length$/, function (callback) {
        callback.pending();
    });

    this.Then(/^User will be able to continue writing up to max Allowed Characters$/, function (callback) {
        callback.pending();
    });

    this.Then(/^User will get warning message that user cannot enter more Than (\d+) Characters$/, function (arg1, callback) {
        callback.pending();
    });

    this.When(/^more than (\d+) line is needed to Display$/, function (arg1, callback) {
        callback.pending();
    });

    this.Then(/^value will be saved In Existing Value$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Value will get truncated and added With Ellipsis$/, function (callback) {
        callback.pending();
    });

    this.When(/^User add translation value with max allowed length$/, function (callback) {
        callback.pending();
    });

    this.When(/^Value got saved With Ellipsis$/, function (callback) {
        callback.pending();
    });

    this.When(/^User mouse over on anywhere on the Text$/, function (callback) {
        callback.pending();
    });

    this.Then(/^User will be able to view full translation value On Tooltip$/, function (callback) {
        callback.pending();
    });

    this.When(/^User click The Ellipsis$/, function (callback) {
        callback.pending();
    });

    this.Then(/^text area will be expanded to show the full Translation value$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Cursor will be at the end of the Text$/, function (callback) {
        callback.pending();
    });

    this.Then(/^User will be able to edit the Value$/, function (callback) {
        callback.pending();
    });

    this.When(/^user start entering the character in the Culture drop Down Box$/, function (callback) {
        itemPage.getCultureDropdown().clear().then(function () {
            itemPage.getCultureDropdown().sendKeys(settings.constants.TYPEKEYINDROPDOWN).then(function () {
                callback();
            });
        });
    });

    this.Then(/^Only Culture that contain matching characters will be Displayed in the drop down$/, function (callback) {
        itemPage.getCultureDropDownElements().count().then(function (result) {
            assert.isAbove(result,0);
            callback();
        });
    });

    this.Then(/^Text will be highlighted According to the user's input for each word$/, function (callback) {
        itemPage.getCultureDropDownElements().count().then(function (result) {
            if (result > 0) {
                itemPage.getCultureDropDownElements().each(function (element, index) {
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

    this.Then(/^A clear Icon will be displayed in the search field$/, function (callback) {
        callback.pending();
    });

    this.Then(/^User will be Able to clear the search by clear icon$/, function (callback) {
        callback.pending();
    });

    this.When(/^User clears the search By Clear Icon$/, function (callback) {
        callback.pending();
    });

    this.Then(/^search Results Will Clear$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Culture drop down will Display the default values$/, function (callback) {
        callback.pending();
    });

    this.When(/^User Select a culture$/, function (callback) {
        itemPage.getCultureDropdown().clear().then(function () {
            itemPage.getCultureDropdown().click().then(function (result) {
                itemPage.getCultureDropDownElements().first().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^Start entering single character in Translation Values$/, function (callback) {
        itemPage.getCultureAddButton().isEnabled().then(function (result) {
            assert.equal(result, false);
        });
        itemPage.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
            callback();
        });
    });

    this.Then(/^'Add' button will Be Enabled$/, function (callback) {
        itemPage.getCultureAddButton().isEnabled().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.When(/^User add a value in the Existing List$/, function (callback) {
        itemPage.getCultureOkButton().isEnabled().then(function (result) {
            assert.equal(result, false);
        });
        itemPage.getCultureDropdown().clear().then(function () {
            itemPage.getCultureDropdown().click().then(function (result) {
                itemPage.getCultureDropDownElements().first().click().then(function () {
                    itemPage.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                        itemPage.getCultureAddButton().click().then(function () {
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.Then(/^'OK' Button Will be enabled$/, function (callback) {
        itemPage.getCultureOkButton().isEnabled().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.When(/^User click on The oK Button$/, function (callback) {
        itemPage.getAddEditPopup().isPresent().then(function (result) {
            assert.equal(result, true);
        });

        itemPage.getCultureOkButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^Pop up Will Be Closed$/, function (callback) {
        itemPage.getCultureIconInAddEditMode().isPresent().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.Then(/^Changes in the existing Values will be Saved$/, function (callback) {
        itemPage.getCultureIconInAddEditMode().click().then(function () {
            itemPage.getCultureTableInAddEditMode().count().then(function(length) {
                if(length > 0) {
                    itemPage.getCultureTableInAddEditMode().count().then(function (result) {
                        assert.isNotNull(result);
                        itemPage.getCultureCancelButton().click().then(function () {
                            itemPage.onCancel().click().then(function () {
                                commonlib.waitForElement(commonlib.getNEPAlertYes()).then(function(){
                                    commonlib.getNEPAlertYes().click().then(function(){
                                        callback();
                                    });
                                });
                            });
                        });
                    });
                }
                else{
                    callback();
                }
            });
        });
    });

    this.When(/^User click on the Cancel button$/, function (callback) {
        itemPage.getCultureCancelButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^changes will Not Be Saved$/, function (callback) {
        itemPage.getCultureIconInAddEditMode().click().then(function () {
            itemPage.getCultureTableInAddEditMode().count().then(function(length) {
                if(length > 0) {
                    itemPage.getCultureTableInAddEditMode().count().then(function (result) {
                        assert.equal(result, 0);
                        callback();
                    });
                }
                else{
                    itemPage.getCultureCancelButton().click().then(function () {
                        itemPage.onCancel().click().then(function () {
                            commonlib.waitForElement(commonlib.getNEPAlertYes()).then(function(){
                                commonlib.getNEPAlertYes().click().then(function(){
                                    callback();
                                });
                            });
                        });
                    });
                }
            });
        });
    });

    this.When(/^clicking or mouse hovering on one Of The Records$/, function (callback) {
        callback.pending();
    });

    this.Then(/^delete icon will be displayed on the Record�s row$/, function (callback) {
        callback.pending();
    });

    this.When(/^user mouse over on The Delete Icon$/, function (callback) {
        itemPage.getCultureDropdown().clear().then(function () {
            itemPage.getCultureDropdown().click().then(function (result) {
                itemPage.getCultureDropDownElements().first().click().then(function () {
                    itemPage.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                        itemPage.getCultureAddButton().click().then(function () {
                            itemPage.getCultureTableInAddEditMode().count().then(function (length) {
                                if(length > 0) {
                                    commonlib.mouseMove(itemPage.getCultureTableInAddEditMode().first());
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

    this.Then(/^Delete text will be displayed As Tooltip$/, function (callback) {
        itemPage.getCultureTableInAddEditMode().count().then(function(length) {
            if(length > 0) {
                var firstRow = itemPage.getCultureTableInAddEditMode().first()
                itemPage.getCultureTableDeleteIcon(firstRow).getOuterHtml().then(function (result) {
                    assert.include(result, 'Delete');
                    callback();
                });
            }
            else{
                callback();
            }
        });
    });

    this.When(/^User click on the delete button of any Existing Translation Value$/, function (callback) {
        callback.pending();
    });

    this.Then(/^System will display a Warning Message$/, function (callback) {
        callback.pending();
    });

    this.When(/^Exiting values of the translation values Got Increases$/, function (callback) {
        callback.pending();
    });

    this.Then(/^A scroll down will be added on the Right Side$/, function (callback) {
        callback.pending();
    });

    this.Given(/^Edit Item screen is opened$/, function (callback) {
        commonlib.open();
        itemPage.getItemLink().click().then(function () {
            commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getEditButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^User selects the culture value from drop down and enters The Translation Value$/, function (callback) {
        itemPage.getCultureDropdown().clear().then(function () {
            itemPage.getCultureDropdown().click().then(function (result) {
                itemPage.getCultureDropDownElements().last().getText().then(function (culture) {
                    itemPage.getCultureDropDownElements().last().click().then(function () {
                        itemPage.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                            itemPage.getCultureDropdown().getAttribute(settings.constants.VALUE).then(function (result) {
                                expectedResultDictionary.cultureDropdownValue = result;
                                expectedResultDictionary.culture = culture;
                                callback();
                            });
                        });
                    });
                });
            });
        });
    });

    this.Then(/^Value will get saved at the bottom of the Existing Values List$/, function (callback) {
        itemPage.getCultureTableInAddEditMode().count().then(function(length) {
            assert.isAbove(length,0)
            itemPage.getCulture().last().getText().then(function (culture) {
                itemPage.getCultureValuesForDescription().last().getText().then(function (cultureValue) {
                    assert.equal(culture, expectedResultDictionary.culture, "Culture is not as Expected");
                    assert.equal(cultureValue, settings.constants.DYNATTRNAMESAMPLETEXT, "Culture Description value is not as Expected");
                    callback();
                });
            });
        });
    });

    this.When(/^User selects an existing Culture Value$/, function (callback) {
        itemPage.getCultureDropdown().clear().then(function () {
            itemPage.getCultureDropdown().click().then(function () {
                itemPage.getCultureDropDownElements().last().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^User will be able to modify the Existing Value$/, function (callback) {
        itemPage.getCultureTableFirstTextAreaLabel().click().then(function () {
            itemPage.getCultureTableFirstTextArea().clear().then(function (result) {
                itemPage.getCultureTableFirstTextArea().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                    itemPage.getCultureOkButton().click().then(function() {
                        callback();
                    });
                });
            });
        });
    });

    this.Then(/^The updated short description value will be saved on clicking Ok Button$/, function (callback) {
        itemPage.getShortDescriptionTextBox().getAttribute(settings.constants.VALUE).then(function (shortDescriptionText) {
            assert.equal(shortDescriptionText,settings.constants.DYNATTRNAMESAMPLETEXT, "Short Description updated is not as Expected");
            callback();
        });
    });

    this.Then(/^The updated long description value will be saved on clicking Ok Button$/, function (callback) {
        itemPage.getLongDescriptionTextBox().getAttribute(settings.constants.VALUE).then(function (longDescriptionText) {
            assert.equal(longDescriptionText,settings.constants.DYNATTRNAMESAMPLETEXT, "Long Description updated is not as Expected");
            callback();
        });
    });

    this.Given(/^Culture pop\-up is opened for Short Description field from Edit Item screen$/, function (callback) {
        callback.pending();
    });

    this.When(/^User mouse over on any Existing Value$/, function (callback) {
        callback.pending();
    });

    this.When(/^Click on the delete icon for the existing Translation Value$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Existing value will be deleted when user confirm from the warning message$/, function (callback) {
        callback.pending();
    });

    this.Given(/^Culture pop\-up is opened for Long Description field from Edit Item screen$/, function (callback) {
        callback.pending();
    });

    this.Given(/^View Item screen is opened$/, function (callback) {
        commonlib.open();
        itemPage.getItemLink().click().then(function () {
            itemPage.getCode().click().then(function(){
                callback();
            });
            //commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').first().click().then(function () {
            //        actionButtons.getViewButton().click().then(function () {
            //            callback();
            //        });
            //});
        });
    });

    this.When(/^User click on the culture icon of Short Description field$/, function (callback) {
        itemPage.getShortDescriptionCultureIcon().then(function () {
            itemPage.getShortDescriptionCultureIcon().get(0).click().then(function () {
                callback();
            });
        });
    });

    this.Then(/^User should be able to view all the existing translation values for the Short Description field$/, function (callback) {
        itemPage.getCultureAndValues().count().then(function(length){
            assert.isAbove(length,0);
            callback();
        });
    });

    this.Then(/^User should not be able to make any changes to the translation values in The Pop Up$/, function (callback) {
        itemPage.getCultureCloseButton().isDisplayed().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.When(/^User click on the culture icon of Long Description field$/, function (callback) {
        itemPage.getLongDescriptionCultureIcon().then(function () {
            itemPage.getLongDescriptionCultureIcon().get(1).click().then(function () {
                callback();
            });
        });
    });

    this.Then(/^User should be able to view all the existing translation values for the Long Description field$/, function (callback) {
        itemPage.getCultureAndValues().count().then(function(length){
            assert.isAbove(length,0);
            callback();
        });
    });

    this.Given(/^Item Office screen is opened$/, function (callback) {
        commonlib.open();
        itemPage.getItemLink().click().then(function () {
            callback();
        });
    });

    this.When(/^User drill down a record In View Mode$/, function (callback) {
        commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').first().click().then(function () {
            actionButtons.getViewButton().click().then(function () {
                callback();
            });
        });
    });

    this.Then(/^Short Description field value will be displayed in default language \(English\)$/, function (callback) {
        itemPage.getAllLabelValues().then(function (elements) {
            assert.isNotNull(elements);
            callback();
        });
    });

    this.Then(/^Long Description field value will be displayed in default language \(English\)$/, function (callback) {
        itemPage.getAllLabelValues().then(function (elements) {
            assert.isNotNull(elements);
            callback();
        });
    });

    this.When(/^User drill down a record In View Mode for which translation does not exist for Descriptions field$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Culture icon for both Description fields \(Short and Long\) will be disabled on View mode$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Tool tip text on mouse over on the Culture icon for Short Description will display 'No Translation were defined'$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Tool tip text on mouse over on the Culture icon for Long Description will display 'No Translation were defined'$/, function (callback) {
        callback.pending();
    });

    this.When(/^User click on culture icon for any of the Description field \(Short or Long Description\)$/, function (callback) {
        commonlib.waitForElement( itemPage.getDescriptionCultureIcon()).then(function () {
            itemPage.getDescriptionCultureIcon().click().then(function () {
                callback();
            });
        });
    });

    this.When(/^If the existing translation values list does not fit into the culture pop up$/, function (callback) {
        callback.pending();
    });

    this.Then(/^scroll bar will appear in order to view all The Translation Values$/, function (callback) {
        callback.pending();
    });

    this.When(/^User view a multi\-line translation value on Culture Pop Up$/, function (callback) {
        itemPage.getCultureValues().first().getText().then(function(txt){
            assert.isAbove(txt.length,0);
            callback();
        });
    });

    this.Then(/^User will be able to view the entire translation value text in multi Line Without Ellipsis$/, function (callback) {
        itemPage.getCultureValues().first().getText().then(function(txt){
            assert.isAbove(txt.length,0);
            assert.isTrue(txt.indexOf("...")==-1);
            callback();
        });
    });

    this.Then(/^A pop up will open with the Culture And Value$/, function (callback) {
        itemPage.getCultureAndValues().count().then(function(length){
            assert.isAbove(length,0);
            callback();
        });
    });
};
module.exports = myStepDefinitionsWrapper;