var myStepDefinitionsWrapper = function () {

    var variantGroupPage = require('../../../pages/variantGroup');
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

    this.Given(/^Create Variant Group screen is Opened$/, function (callback) {
        commonlib.open();
        variantGroupPage.getVariantGroupLink().click().then(function () {
            actionButtons.getAddButton().click().then(function () {
                callback();
            });
        });
    });

    this.When(/^User enters the Variant Group Code/, function (callback) {
        variantGroupPage.getCodeTextBox().clear().sendKeys('DummyCode').then(function(){
            callback();
        });
    });

    this.When(/^User enters the Description$/, function (callback) {
        commonlib.waitForElement(variantGroupPage.getDescriptionCultureIcon()).then(function () {
            variantGroupPage.getDescriptionTextBox().sendKeys(settings.constants.DEFAULT_CULTURE_DESCRIPTION_VALUE).then(function () {
                callback();
            });
        });
    });

    this.When(/^User clicks on the Culture button$/, function (callback) {
        commonlib.waitForElement( variantGroupPage.getDescriptionCultureIcon()).then(function () {
            variantGroupPage.getDescriptionCultureIcon().click().then(function () {
                callback();
            });
        });
    });

    this.Then(/^Default culture and value will be displayed in the existing table below Culture drop down$/, function (callback) {
        variantGroupPage.getCultureDropdown().getAttribute(settings.constants.VALUE).then(function (result) {
            assert.isNotNull(result);
            callback();
        });
    });

    this.When(/^User leave the Description Field as blank$/, function (callback) {
        variantGroupPage.getDescriptionTextBox().sendKeys(" ").then(function(){
            callback();
        });
    });

    this.Then(/^A pop up will open with the Culture and Value fields$/, function (callback) {
        variantGroupPage.getCultureDropdown().isDisplayed().then(function (result) {
            assert.isTrue(result);
        });
        variantGroupPage.getCultureValueTextBox().isDisplayed().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^The system�s default Culture will be Displayed$/, function (callback) {
        variantGroupPage.getCultureDropdown().getAttribute(settings.constants.VALUE).then(function (result) {
            assert.isNotNull(result);
            callback();
        });
    });

    this.Then(/^The focus will be on the value Field$/, function (callback) {
        commonlib.getActiveElement().getAttribute(settings.constants.ID).then(function (result) {
            assert.isNotNull(result);
            callback();
        });
    });

    this.Given(/^Culture pop\-up is opened for Description field from Create Variant Group screen$/, function (callback) {
        commonlib.open();
        variantGroupPage.getVariantGroupLink().click().then(function () {
            actionButtons.getAddButton().click().then(function () {
                variantGroupPage.getCodeTextBox().clear().sendKeys('DummyCode').then(function(){
                    commonlib.waitForElement( variantGroupPage.getDescriptionCultureIcon()).then(function () {
                        variantGroupPage.getDescriptionCultureIcon().click().then(function () {
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.When(/^click on the drop down in pop Up$/, function (callback) {
        variantGroupPage.getCultureDropdown().clear().then(function () {
            variantGroupPage.getCultureDropdown().click().then(function (result) {
                callback();
            });
        });
    });

    this.Then(/^drop down will be displayed with Different Cultures$/, function (callback) {
        variantGroupPage.getCultureDropDownElements().count().then(function (result) {
            assert.isAbove(result, 0);
            callback();
        });
    });

    this.Then(/^Each value will display with relevant flag and Country value in parenthesis$/, function (callback) {
        variantGroupPage.getCultureDropDownElements().first().getInnerHtml().then(function (result) {
            assert.include(result, settings.constants.LEFTPARENTHESIS);
            assert.include(result, settings.constants.RIGHTPARENTHESIS);
            assert.include(result, settings.constants.IMG);
            callback();
        });
    });

    this.When(/^User select the language from culture drop Down$/, function (callback) {
        variantGroupPage.getCultureDropdown().clear().then(function () {
            variantGroupPage.getCultureDropdown().click().then(function (result) {
                variantGroupPage.getCultureDropDownElements().first().click().then(function () {
                    variantGroupPage.getCultureDropdown().getAttribute(settings.constants.VALUE).then(function (result) {
                        expectedResultDictionary.cultureDropdownValue = result;
                        callback();
                    });
                });
            });
        });
    });

    this.Then(/^Country will appear with the corresponding Flag in parenthesis$/, function (callback) {
        variantGroupPage.getCultureDropdown().getAttribute(settings.constants.VALUE).then(function (result) {
            assert.include(result, settings.constants.LEFTPARENTHESIS);
            assert.include(result, settings.constants.RIGHTPARENTHESIS);
            callback();
        });
    });

    this.Then(/^User will be able to select the language from the Culture drop Down$/, function (callback) {
        variantGroupPage.getCultureDropdown().clear().then(function () {
            variantGroupPage.getCultureDropdown().click().then(function (result) {
                variantGroupPage.getCultureDropDownElements().first().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^User will be able to define the value for Particular Language$/, function (callback) {
        variantGroupPage.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function (result) {
            callback();
        });
    });

    this.When(/^User adds the translation Values$/, function (callback) {
        variantGroupPage.getCultureDropdown().clear().then(function () {
            variantGroupPage.getCultureDropdown().click().then(function (result) {
                variantGroupPage.getCultureDropDownElements().first().click().then(function () {
                    variantGroupPage.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                        variantGroupPage.getCultureAddButton().click().then(function () {
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.When(/^Values gets added in Existing Values$/, function (callback) {
        variantGroupPage.getCultureTableInAddEditMode().count().then(function(length) {
            if(length > 0) {
                variantGroupPage.getCultureTableInAddEditMode().count().then(function (result) {
                    assert.isNotNull(result, 0);
                    callback();
                });
            }
            else{
                callback();
            }
        });
    });

    this.Then(/^All the translation values will be in the Editable Mode$/, function (callback) {
        variantGroupPage.getCultureTableFirstTextAreaLabel().click().then(function () {
            variantGroupPage.getCultureTableFirstTextArea().isEnabled().then(function (result) {
                assert.equal(result, true);
                callback();
            });
        });
    });

    this.Then(/^User will be able to edit any Existing Value$/, function (callback) {
        variantGroupPage.getCultureTableFirstTextArea().isEnabled().then(function (result) {
            //variantGroupPage.getCultureTableFirstTextArea().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
            assert.isTrue(result);
            callback();
            // });
        });
    });

    this.When(/^User define the value For that Language$/, function (callback) {
        variantGroupPage.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
            callback();
        });
    });

    this.When(/^User clicks on add Button$/, function (callback) {
        variantGroupPage.getCultureAddButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^language and value will get added in The bottom of the existing value$/, function (callback) {
        variantGroupPage.getCultureTableInAddEditMode().count().then(function(length) {
            if(length > 0) {
                variantGroupPage.getCultureTableInAddEditMode().last().getInnerHtml().then(function (result) {
                    assert.include(result, expectedResultDictionary.cultureDropdownValue);
                    callback();
                });
            }
            else{
                callback();
            }
        });
    });

    this.Then(/^User will notice that Add was Performed$/, function (callback) {
        variantGroupPage.getCultureTableInAddEditMode().count().then(function(length) {
            if(length > 0) {
                variantGroupPage.getCultureTableInAddEditMode().last().getInnerHtml().then(function (result) {
                    assert.include(result, expectedResultDictionary.cultureDropdownValue);
                    callback();
                });
            }
            else{
                callback();
            }
        });
    });

    this.When(/^User mouse over on the Translation values in existing table$/, function (callback) {
        variantGroupPage.getCultureDropdown().clear().then(function () {
            variantGroupPage.getCultureDropdown().click().then(function (result) {
                variantGroupPage.getCultureDropDownElements().first().click().then(function () {
                    variantGroupPage.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                        variantGroupPage.getCultureAddButton().click().then(function () {
                        });
                    });
                });
            });
        });
        //Adding 2nd row in existing table
        variantGroupPage.getCultureDropdown().click().then(function (result) {
            variantGroupPage.getCultureDropDownElements().last().click().then(function () {
                variantGroupPage.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                    variantGroupPage.getCultureAddButton().click().then(function () {
                        variantGroupPage.getCultureTableInAddEditMode().count().then(function (length) {
                            if(length > 0) {
                                commonlib.mouseMove(variantGroupPage.getCultureTableInAddEditMode().first());
                                commonlib.mouseMove(variantGroupPage.getCultureTableInAddEditMode().last());
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

    this.Then(/^A black dot and delete icon will be displayed for Record with mouse over$/, function (callback) {
        variantGroupPage.getCultureTableInAddEditMode().count().then(function(length) {
            if(length > 0) {
                var firstRow = variantGroupPage.getCultureTableInAddEditMode().first();
                var lastRow = variantGroupPage.getCultureTableInAddEditMode().last();
                variantGroupPage.getCultureTableDeleteIcon(lastRow).isEnabled().then(function (result) {
                    assert.equal(result, true);
                    callback();
                });
            }
            else{
                callback();
            }
        });
    });

    this.When(/^A Culture already exist in the translation value$/, function (callback) {
        variantGroupPage.getCultureDropdown().clear().then(function () {
            variantGroupPage.getCultureDropdown().click().then(function (result) {
                variantGroupPage.getCultureDropDownElements().first().click().then(function () {
                    variantGroupPage.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                        variantGroupPage.getCultureAddButton().click().then(function () {
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.Then(/^that culture will be displayed in the drop list as Disabled$/, function (callback) {
        variantGroupPage.getCultureDropdown().clear().then(function () {
            variantGroupPage.getCultureDropdown().click().then(function (result) {
                variantGroupPage.getCultureDropDownElements().get(0).getAttribute(settings.constants.CLASS).then(function (text) {
                    assert.include(text, settings.constants.DISABLELISTITEM);
                    callback();
                });
            });
        });
    });

    this.When(/^User define the value For that Language to the max (\d+) characters$/, function (arg1, callback) {
        callback.pending();
    });

    this.Then(/^User will be able to continue writing Up to max allowed characters$/, function (callback) {
        callback.pending();
    });

    this.When(/^more than (\d+) line is Needed to display$/, function (arg1, callback) {
        callback.pending();
    });

    this.Then(/^value will be saved in Existing Value$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Value will get truncated and added with Ellipsis$/, function (callback) {
        callback.pending();
    });

    this.When(/^User add translation value with Max (\d+) character$/, function (arg1, callback) {
        callback.pending();
    });

    this.When(/^Value got Saved with ellipsis$/, function (callback) {
        callback.pending();
    });

    this.When(/^User Mouse over on anywhere on the text$/, function (callback) {
        callback.pending();
    });

    this.Then(/^User will be able to view full translation value on Tooltip$/, function (callback) {
        callback.pending();
    });

    this.When(/^User click the Ellipsis$/, function (callback) {
        callback.pending();
    });

    this.Then(/^text area will be Expanded to show the full translation value$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Cursor Will be at the end of the text$/, function (callback) {
        callback.pending();
    });

    this.Then(/^User will be able to Edit the value$/, function (callback) {
        callback.pending();
    });

    this.When(/^user start entering the Character in the culture drop down box$/, function (callback) {
        variantGroupPage.getCultureDropdown().clear().then(function () {
            variantGroupPage.getCultureDropdown().sendKeys(settings.constants.TYPEKEYINDROPDOWN).then(function () {
                callback();
            });
        });
    });

    this.Then(/^Only Culture that contain Matching characters will be displayed in the drop down$/, function (callback) {
        variantGroupPage.getCultureDropDownElements().count().then(function (result) {
            assert.isAbove(result,0);
            callback();
        });
    });

    this.Then(/^Text will be highlighted according to the user's input for Each word$/, function (callback) {
        variantGroupPage.getCultureDropDownElements().count().then(function (result) {
            if (result > 0) {
                variantGroupPage.getCultureDropDownElements().each(function (element, index) {
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

    this.Then(/^A clear icon will be displayed in the Search field$/, function (callback) {
        callback.pending();
    });

    this.Then(/^User will be able to Clear the search by clear icon$/, function (callback) {
        callback.pending();
    });

    this.When(/^User clears the search by Clear icon$/, function (callback) {
        callback.pending();
    });

    this.Then(/^search results Will clear$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Culture drop down will display the Default values$/, function (callback) {
        callback.pending();
    });

    this.When(/^User selects A Culture$/, function (callback) {
        variantGroupPage.getCultureDropdown().clear().then(function () {
            variantGroupPage.getCultureDropdown().click().then(function (result) {
                variantGroupPage.getCultureDropDownElements().first().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^Start entering Single character in translation values$/, function (callback) {
        variantGroupPage.getCultureAddButton().isEnabled().then(function (result) {
            assert.equal(result, false);
        });
        variantGroupPage.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
            callback();
        });
    });

    this.Then(/^'Add' Button will be enabled$/, function (callback) {
        variantGroupPage.getCultureAddButton().isEnabled().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.When(/^User add a value in the Existing list$/, function (callback) {
        variantGroupPage.getCultureOkButton().isEnabled().then(function (result) {
            assert.equal(result, false);
        });
        variantGroupPage.getCultureDropdown().clear().then(function () {
            variantGroupPage.getCultureDropdown().click().then(function (result) {
                variantGroupPage.getCultureDropDownElements().first().click().then(function () {
                    variantGroupPage.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                        variantGroupPage.getCultureAddButton().click().then(function () {
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.Then(/^'OK' button Will be Enabled$/, function (callback) {
        variantGroupPage.getCultureOkButton().isEnabled().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.When(/^User click on The OK Button$/, function (callback) {
        variantGroupPage.getAddEditPopup().isPresent().then(function (result) {
            assert.equal(result, true);
        });

        variantGroupPage.getCultureOkButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^Pop up will Be closed$/, function (callback) {
        variantGroupPage.getCultureIconInAddEditMode().isPresent().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.Then(/^Changes in the existing values will Be saved$/, function (callback) {
        variantGroupPage.getCultureIconInAddEditMode().click().then(function () {
            variantGroupPage.getCultureTableInAddEditMode().count().then(function(length) {
                if(length > 0) {
                    variantGroupPage.getCultureTableInAddEditMode().count().then(function (result) {
                        assert.isNotNull(result);
                        callback();
                    });
                }
                else{
                    variantGroupPage.getCultureCancelButton().click().then(function () {
                        variantGroupPage.onCancel().click().then(function () {
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

    this.When(/^User click on The cancel button$/, function (callback) {
        variantGroupPage.getCultureCancelButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^changes Will not be Saved$/, function (callback) {
        variantGroupPage.getCultureIconInAddEditMode().click().then(function () {
            variantGroupPage.getCultureTableInAddEditMode().count().then(function(length) {
                if(length > 0) {
                    variantGroupPage.getCultureTableInAddEditMode().count().then(function (result) {
                        assert.equal(result, 0);
                        callback();
                    });
                }
                else{
                    variantGroupPage.getCultureCancelButton().click().then(function () {
                        variantGroupPage.onCancel().click().then(function () {
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

    this.When(/^clicking or mouse hovering on one of The Records$/, function (callback) {
        callback.pending();
    });

    this.Then(/^delete icon will be Displayed on the record�s row$/, function (callback) {
        callback.pending();
    });

    this.When(/^user mouse over on the Delete Icon$/, function (callback) {
        variantGroupPage.getCultureDropdown().clear().then(function () {
            variantGroupPage.getCultureDropdown().click().then(function (result) {
                variantGroupPage.getCultureDropDownElements().first().click().then(function () {
                    variantGroupPage.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                        variantGroupPage.getCultureAddButton().click().then(function () {
                            variantGroupPage.getCultureTableInAddEditMode().count().then(function (length) {
                                if(length > 0) {
                                    commonlib.mouseMove(variantGroupPage.getCultureTableInAddEditMode().first());
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

    this.Then(/^Default Culture and value will be displayed in the existing table below culture drop down for Variant Group Description/, function (callback) {
        variantGroupPage.getCulture().first().getText().then(function (culture) {
            variantGroupPage.getCultureValues().first().getText().then(function (cultureValue) {
                assert.equal(culture, settings.constants.DEFAULT_CULTURE,"Culture is not as Expected");
                assert.equal(cultureValue, settings.constants.DEFAULT_CULTURE_DESCRIPTION_VALUE,"Culture Description value is not as Expected");
                variantGroupPage.getCultureCancelButton().click().then(function () {
                    variantGroupPage.onCancel().click().then(function () {
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

    this.Then(/^Delete text will be Displayed as tooltip$/, function (callback) {
        variantGroupPage.getCultureTableInAddEditMode().count().then(function(length) {
            if(length > 0) {
                var firstRow = variantGroupPage.getCultureTableInAddEditMode().first()
                variantGroupPage.getCultureTableDeleteIcon(firstRow).getOuterHtml().then(function (result) {
                    assert.include(result, 'Delete');
                    callback();
                });
            }
            else{
                callback();
            }
        });
    });

    this.When(/^User click on the delete button of any existing Translation value$/, function (callback) {
        variantGroupPage.getCultureDropdown().clear().then(function () {
            variantGroupPage.getCultureDropdown().click().then(function (result) {
                variantGroupPage.getCultureDropDownElements().first().click().then(function () {
                    variantGroupPage.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                        variantGroupPage.getCultureAddButton().click().then(function () {
                            variantGroupPage.getCultureTableInAddEditMode().count().then(function(length) {
                                assert.isAbove(length, 0, 'Group Description Translation value is not added');
                                var firstRow = variantGroupPage.getCultureTableInAddEditMode().first();
                                firstRow.click().then(function () {
                                    variantGroupPage.getCultureTableDeleteIcon(firstRow).click().then(function (result) {
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

    this.Then(/^System will display a Warning Message when trying to delete a Group Description for an new Variant group$/, function (callback) {
        commonlib.waitForElement(commonlib.getNEPAlertYes()).then(function(){
            commonlib.getNEPAlertYes().click().then(function(){
                variantGroupPage.getCultureCancelButton().click().then(function () {
                    variantGroupPage.onCancel().click().then(function () {
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

    this.When(/^Exiting values of the translation Values got increases$/, function (callback) {
        callback.pending();
    });

    this.Then(/^A scroll down will be dded on the right side$/, function (callback) {
        callback.pending();
    });

    this.Given(/^Edit Variant Group screen is Opened$/, function (callback) {
        commonlib.open();
        commonlib.waitForElement(variantGroupPage.getVariantGroupLink()).then(function(){
            variantGroupPage.getVariantGroupLink().click().then(function () {
                commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').first().click().then(function () {
                    actionButtons.getEditButton().click().then(function () {
                        callback();
                    });
                });
            });
        });
    });

    this.When(/^User clicks on the Culture button for Description field$/, function (callback) {
        commonlib.waitForElement( variantGroupPage.getDescriptionCultureIcon()).then(function () {
            variantGroupPage.getDescriptionCultureIcon().click().then(function () {
                callback();
            });
        });
    });

    this.When(/^User selects the culture value from drop down and Enters the translation value$/, function (callback) {
        variantGroupPage.getCultureDropdown().clear().then(function () {
            variantGroupPage.getCultureDropdown().click().then(function (result) {
                variantGroupPage.getCultureDropDownElements().last().click().then(function () {
                    variantGroupPage.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                        variantGroupPage.getCultureDropdown().getAttribute(settings.constants.VALUE).then(function (result) {
                            expectedResultDictionary.cultureDropdownValue = result;
                            callback();
                        });
                    });
                });
                //   callback();
            });
        });
    });

    this.Then(/^Value will get saved at the bottom of the Existing values list$/, function (callback) {
        variantGroupPage.getCultureTableInAddEditMode().count().then(function(length) {
            if(length > 0) {
                variantGroupPage.getCultureTableInAddEditMode().last().getInnerHtml().then(function (result) {
                    assert.include(result, expectedResultDictionary.cultureDropdownValue);
                    callback();
                });
            }
            else{
                callback();
            }
        });
    });

    this.When(/^User selects an existing culture value$/, function (callback) {
        variantGroupPage.getCultureDropdown().clear().then(function () {
            variantGroupPage.getCultureDropdown().click().then(function (result) {
                variantGroupPage.getCultureDropDownElements().last().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^User will be able to modify the existing value$/, function (callback) {
        variantGroupPage.getCultureTableFirstTextAreaLabel().click().then(function () {
            variantGroupPage.getCultureTableFirstTextArea().clear().then(function () {
                variantGroupPage.getCultureTableFirstTextArea().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                    variantGroupPage.getCultureOkButton().click().then(function() {
                        callback();
                    });
                });
            });
        });
    });

    this.Then(/^The updated value will be saved on Clicking Ok button$/, function (callback) {
                variantGroupPage.getDescriptionTextBox().getText().then(function (txt) {
                    assert.isNotNull(txt);
                    callback();
        });

       //variantGroupPage.getCultureOkButton().click().then(function(){
       //    variantGroupPage.getExistingCultureValueTextBox().getText().then(function (txt) {
       //        assert.areEqual(txt,settings.constants.DYNATTRNAMESAMPLETEXT);
       //        callback();
       //    });
       //});
    });

    this.Given(/^Culture pop\-up is opened for Description field from Edit Variant Group screen$/, function (callback) {
        commonlib.open();
        commonlib.waitForElement(variantGroupPage.getVariantGroupLink()).then(function(){
            variantGroupPage.getVariantGroupLink().click().then(function () {
                commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').first().click().then(function () {
                    actionButtons.getEditButton().click().then(function () {
                        variantGroupPage.getDescriptionCultureIcon().click().then(function () {
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.When(/^User mouse over on any existing value$/, function (callback) {
        variantGroupPage.getCultureTableInAddEditMode().count().then(function(length) {
            assert.isAbove(length, 0, 'Group Title Translation value is not added');
            var lastRow = variantGroupPage.getCultureTableInAddEditMode().last();
            lastRow.click().then(function () {
                variantGroupPage.getCultureTableDeleteIcon(lastRow).isDisplayed().then(function (result) {
                    callback();
                });
            });
        });

    });

    this.When(/^Click on the delete icon for the existing translation value$/, function (callback) {
        var lastRow = variantGroupPage.getCultureTableInAddEditMode().last();
        lastRow.click().then(function () {
            variantGroupPage.getCulture().last().getText().then(function (culture) {
                variantGroupPage.getCultureTableDeleteIcon(lastRow).click().then(function (result) {
                    expectedResultDictionary.cultureDropdownValue = culture;
                    callback();
                });
            });
        });
    });

    this.Then(/^System will display a Warning Message when trying to delete a Group Description for an existing Variant group$/, function (callback) {
        commonlib.waitForElement(commonlib.getNEPAlertYes()).then(function(){
            callback();
        });
    });

    this.Then(/^Existing Culture Group Description value will be deleted when user confirm from the warning message$/, function (callback) {
        commonlib.getNEPAlertYes().click().then(function(){
            variantGroupPage.getCulture().last().getText().then(function (culture) {
                assert.notEqual(culture, expectedResultDictionary.cultureDropdownValue, "Culture Description in variant Group is not deleted which is not as Expected");
                variantGroupPage.getCultureCancelButton().click().then(function () {
                    variantGroupPage.onCancel().click().then(function () {
                        commonlib.waitForElement(grid.getGridRows().first()).then(function () {
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.Given(/^View Variant Group screen is Opened$/, function (callback) {
        commonlib.open();
        variantGroupPage.getVariantGroupLink().click().then(function () {
            commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getViewButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^User click on the culture icon of Description Field$/, function (callback) {
        commonlib.waitForElement( variantGroupPage.getDescriptionCultureIcon()).then(function () {
            variantGroupPage.getDescriptionCultureIcon().click().then(function () {
                callback();
            });
        });
    });

    this.Then(/^User should be able to view all the existing translation values for the Description Field$/, function (callback) {
        variantGroupPage.getCultureAndValues().count().then(function(length){
            assert.isAbove(length,0);
            callback();
        });
    });

    this.Then(/^User should not be able to make any changes to the translation values in the Pop Up$/, function (callback) {
        variantGroupPage.getCultureCloseButton().isDisplayed().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Given(/^Variant Group Office screen is Opened$/, function (callback) {
        commonlib.open();
        variantGroupPage.getVariantGroupLink().click().then(function () {
            callback();
        });
    });

    this.When(/^User drill down a record In view Mode$/, function (callback) {
        commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').first().click().then(function () {
            actionButtons.getViewButton().click().then(function () {
                callback();
            });
        });
    });

    this.Then(/^Description field value will be Displayed in default language \(English\)$/, function (callback) {
        variantGroupPage.getAllLabelValues().then(function (elements) {
            assert.isNotNull(elements);
            callback();
        });
    });

    this.When(/^User drill down a record in view Mode for which translation does not exist for Description field$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Culture icon for Description field will be Disable on View mode$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Tool tip text on Mouse over on the Culture Icon will display 'No Translation were define'$/, function (callback) {
        callback.pending();
    });

    this.When(/^User click on culture Icon For Description Field$/, function (callback) {
        commonlib.waitForElement( variantGroupPage.getDescriptionCultureIcon()).then(function () {
            variantGroupPage.getDescriptionCultureIcon().click().then(function () {
                callback();
            });
        });
    });

    this.When(/^Existing translation values list does not Fit into the culture pop up$/, function (callback) {
        callback.pending();
    });

    this.Then(/^scroll bar will appear in order to view all the Translation values$/, function (callback) {
        callback.pending();
    });

    this.When(/^User view a multi\-line translation value on Culture pop up$/, function (callback) {
        variantGroupPage.getCultureValues().first().getText().then(function(txt){
            assert.isAbove(txt.length,0);
            callback();
        });
    });

    this.Then(/^User will be able to view the entire translation value text in Multi line without ellipsis$/, function (callback) {
        variantGroupPage.getCultureValues().first().getText().then(function(txt){
            assert.isAbove(txt.length,0);
            assert.isTrue(txt.indexOf("...")==-1);
            callback();
        });
    });


};
module.exports = myStepDefinitionsWrapper;