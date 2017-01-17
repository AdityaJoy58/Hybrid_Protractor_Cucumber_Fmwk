/**
 * Created by ab250553 on 2/29/2016.
 */
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

    this.Given(/^Create Variant Group screen is opened$/, function (callback) {
        commonlib.open();
        variantGroupPage.getVariantGroupLink().click().then(function () {
            actionButtons.getAddButton().click().then(function () {
                callback();
            });
        });
    });

    this.When(/^User enters the Title$/, function (callback) {
        variantGroupPage.getTitleTextBox().clear().sendKeys(settings.constants.DEFAULT_CULTURE_TITLE_VALUE);
        callback();
    });

    this.When(/^User clicks the culture button$/, function (callback) {
        variantGroupPage.getTitleCultureIcon().click().then(function () {
           // browser.pause();
           callback();
        });
    });

    this.Then(/^A pop up will get opened with culture and value field$/, function (callback) {
        variantGroupPage.getCultureDropdown().isDisplayed().then(function (result) {
            assert.equal(result, true);
        });
        variantGroupPage.getCultureValueTextBox().isDisplayed().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.Then(/^Default Culture and value will be displayed in the existing table below culture drop down for Variant Group Title$/, function (callback) {
        variantGroupPage.getCulture().first().getText().then(function (culture) {
            variantGroupPage.getCultureValues().first().getText().then(function (cultureValue) {
                assert.equal(culture, settings.constants.DEFAULT_CULTURE,"Culture is not as Expected");
                assert.equal(cultureValue, settings.constants.DEFAULT_CULTURE_TITLE_VALUE,"Culture Title value is not as Expected");
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

    this.When(/^User leaves the Title field as blank$/, function (callback) {
        variantGroupPage.getTitleTextBox().sendKeys(" ").then(function(){
            callback();
        });
    });

    this.Then(/^A pop up will get opened with culture and value$/, function (callback) {
        variantGroupPage.getCultureDropdown().isDisplayed().then(function (result) {
            assert.equal(result, true);
        });
        variantGroupPage.getCultureValueTextBox().isDisplayed().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.Then(/^the system�s default culture will be displayed$/, function (callback) {
        variantGroupPage.getCultureDropdown().getAttribute(settings.constants.VALUE).then(function (result) {
            assert.isNotNull(result);
            callback();
        });
    });

    this.Then(/^the focus will be on value field$/, function (callback) {
        commonlib.getActiveElement().getAttribute(settings.constants.ID).then(function (result) {
            assert.isNotNull(result);
            callback();
        });
    });

    this.Given(/^Culture pop\-up is opened for Title field from Create Variant Group screen$/, function (callback) {
        commonlib.open();
        variantGroupPage.getVariantGroupLink().click().then(function () {
            actionButtons.getAddButton().click().then(function () {
                variantGroupPage.getCodeTextBox().clear().sendKeys('DummyCode').then(function(){
                    variantGroupPage.getTitleCultureIcon().click().then(function () {
                        callback();
                    });
                });
            });
        });
    });

    this.When(/^Click on the drop down in pop up$/, function (callback) {
        variantGroupPage.getCultureDropdown().clear().then(function () {
            variantGroupPage.getCultureDropdown().click().then(function (result) {
                callback();
            });
        });
    });

    this.Then(/^Drop down will be displayed with different cultures$/, function (callback) {
        variantGroupPage.getCultureDropDownElements().count().then(function (result) {
            assert.isAbove(result, 0);
            callback();
        });
    });

    this.Then(/^Each value will get displayed with relevant flag and country value in parenthesis$/, function (callback) {
        variantGroupPage.getCultureDropDownElements().first().getInnerHtml().then(function (result) {
            assert.include(result, settings.constants.LEFTPARENTHESIS);
            assert.include(result, settings.constants.RIGHTPARENTHESIS);
            assert.include(result, settings.constants.IMG);
            callback();
        });
    });

    this.When(/^User select the language from Culture drop down$/, function (callback) {
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

    this.Then(/^Country will appear with the corresponding flag in parenthesis$/, function (callback) {
        variantGroupPage.getCultureDropdown().getAttribute(settings.constants.VALUE).then(function (result) {
            assert.include(result, settings.constants.LEFTPARENTHESIS);
            assert.include(result, settings.constants.RIGHTPARENTHESIS);
            callback();
        });
    });

    this.Then(/^User will be able to select the language from the Culture drop down$/, function (callback) {
        variantGroupPage.getCultureDropdown().clear().then(function () {
            variantGroupPage.getCultureDropdown().click().then(function (result) {
                variantGroupPage.getCultureDropDownElements().first().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^User will be able to define the value for Particular language$/, function (callback) {
        variantGroupPage.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function (result) {
            callback();
        });
    });

    this.When(/^User add the translation Values$/, function (callback) {
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

    this.When(/^Values gets added in existing Values$/, function (callback) {
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

    this.Then(/^All the translation Values will be in the editable mode$/, function (callback) {
        variantGroupPage.getCultureTableFirstTextAreaLabel().click().then(function () {
            variantGroupPage.getCultureTableFirstTextArea().isEnabled().then(function (result) {
                assert.equal(result, true);
                callback();
            });
        });
    });

    this.Then(/^User will be able to edit any existing Value$/, function (callback) {
        variantGroupPage.getCultureTableFirstTextArea().isEnabled().then(function (result) {
            //variantGroupPage.getCultureTableFirstTextArea().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
            assert.isTrue(result);
            callback();
            // });
        });
    });

    this.When(/^User define the Value for that language$/, function (callback) {
        variantGroupPage.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
            callback();
        });
    });

    this.When(/^User click on Add Button$/, function (callback) {
        variantGroupPage.getCultureAddButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^Language and value will get added in the bottom of the existing value$/, function (callback) {
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

    this.Then(/^User will notice that add was Performed$/, function (callback) {
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

    this.When(/^User mouse over on the translation values in existing Table$/, function (callback) {
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

    this.Then(/^A black dot and delete icon will be displayed for record with mouse Over$/, function (callback) {
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

    this.When(/^User select a culture from drop down and enter the translation Value$/, function (callback) {
        variantGroupPage.getCultureDropdown().clear().then(function () {
            variantGroupPage.getCultureDropdown().click().then(function (result) {
                variantGroupPage.getCultureDropDownElements().first().click().then(function () {
                    variantGroupPage.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                        callback();
                    });
                });
            });
        });
    });

    this.When(/^Value added in existing value$/, function (callback) {
        variantGroupPage.getCultureAddButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^User will be able to edit the existing translation value$/, function (callback) {
        variantGroupPage.getCultureTableFirstTextAreaLabel().click().then(function () {
            variantGroupPage.getCultureTableFirstTextArea().isEnabled().then(function (result) {
                assert.equal(result, true);
                callback();
            });
        });
    });

    this.When(/^A Culture already exist in the translation Values$/, function (callback) {
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

    this.Then(/^that culture will be displayed in the drop list as disabled$/, function (callback) {
        variantGroupPage.getCultureDropdown().clear().then(function () {
            variantGroupPage.getCultureDropdown().click().then(function (result) {
                variantGroupPage.getCultureDropDownElements().get(0).getAttribute(settings.constants.CLASS).then(function (text) {
                    assert.include(text, settings.constants.DISABLELISTITEM);
                    callback();
                });
            });
        });
    });

    this.When(/^User define the Value for that language to the max (\d+) characters$/, function (arg1, callback) {
        callback.pending();
    });

    this.Then(/^User will be able to continue writing up to Max allowed characters$/, function (callback) {
        callback.pending();
    });

    this.Then(/^User will get warning message that user cannot enter more than (\d+) Characters$/, function (arg1, callback) {
        callback.pending();
    });

    this.When(/^user start entering the character in the culture drop down Box$/, function (callback) {
        variantGroupPage.getCultureDropdown().clear().then(function () {
            variantGroupPage.getCultureDropdown().sendKeys(settings.constants.TYPEKEYINDROPDOWN).then(function () {
                callback();
            });
        });
    });

    this.Then(/^Only Culture that contain matching characters will be displayed in the drop Down$/, function (callback) {
        variantGroupPage.getCultureDropDownElements().count().then(function (result) {
            assert.isAbove(result,0);
            callback();
        });
    });

    this.Then(/^Text will be highlighted according to the user's input for each Word$/, function (callback) {
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

    this.Then(/^A clear icon will be displayed in the search Field$/, function (callback) {
        callback.pending();
    });

    this.Then(/^User will be able to clear the search by clear Icon$/, function (callback) {
        callback.pending();
    });

    this.When(/^User clears the search by clear Icon$/, function (callback) {
        callback.pending();
    });

    this.Then(/^search results will Clear$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Culture drop down will display the default Values$/, function (callback) {
        callback.pending();
    });

    this.When(/^User select a Culture$/, function (callback) {
        variantGroupPage.getCultureDropdown().clear().then(function () {
            variantGroupPage.getCultureDropdown().click().then(function (result) {
                variantGroupPage.getCultureDropDownElements().first().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^Start Entering single character in translation values$/, function (callback) {
        variantGroupPage.getCultureAddButton().isEnabled().then(function (result) {
            assert.equal(result, false);
        });
        variantGroupPage.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
            callback();
        });
    });

    this.Then(/^'Add' button will be Enabled$/, function (callback) {
        variantGroupPage.getCultureAddButton().isEnabled().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.When(/^User add a value in existing list$/, function (callback) {
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

    this.Then(/^'OK' button will be Enabled$/, function (callback) {
        variantGroupPage.getCultureOkButton().isEnabled().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.When(/^User click on the Ok button$/, function (callback) {
        variantGroupPage.getAddEditPopup().isPresent().then(function (result) {
            assert.equal(result, true);
        });

        variantGroupPage.getCultureOkButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^Pop up will be Closed$/, function (callback) {
        variantGroupPage.getCultureIconInAddEditMode().isPresent().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.Then(/^Changes in the existing values will be Saved$/, function (callback) {
        variantGroupPage.getCultureIconInAddEditMode().click().then(function () {
            variantGroupPage.getCultureTableInAddEditMode().count().then(function(length) {
                if(length > 0) {
                    variantGroupPage.getCultureTableInAddEditMode().count().then(function (result) {
                        assert.isNotNull(result);
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
                }
                else{
                    callback();
                }
            });
        });
    });

    this.When(/^User click on the cancel Button$/, function (callback) {
        variantGroupPage.getCultureCancelButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^changes will not be Saved$/, function (callback) {
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

    this.When(/^clicking or mouse hovering on one of the record$/, function (callback) {
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

    this.Then(/^delete icon will be displayed on the record�s Row$/, function (callback) {
        variantGroupPage.getCultureTableInAddEditMode().count().then(function(length) {
            if(length > 0) {
                var firstRow = variantGroupPage.getCultureTableInAddEditMode().first();
                variantGroupPage.getCultureTableDeleteIcon(firstRow).isDisplayed().then(function (result) {
                    assert.equal(result, true);
                    callback();
                });
            }
            else{
                callback();
            }
        });
    });

    this.When(/^user mouse over on the delete Icon$/, function (callback) {
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

    this.Then(/^Delete text will be displayed as Tooltip$/, function (callback) {
        variantGroupPage.getCultureTableInAddEditMode().count().then(function(length) {
            if(length > 0) {
                var firstRow = variantGroupPage.getCultureTableInAddEditMode().first();
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

    this.When(/^User click on the delete button of any existing translation Value$/, function (callback) {
        variantGroupPage.getCultureDropdown().clear().then(function () {
            variantGroupPage.getCultureDropdown().click().then(function (result) {
                variantGroupPage.getCultureDropDownElements().first().click().then(function () {
                    variantGroupPage.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                        variantGroupPage.getCultureAddButton().click().then(function () {
                            variantGroupPage.getCultureTableInAddEditMode().count().then(function(length) {
                                assert.isAbove(length, 0, 'Group Title Translation value is not added');
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

    this.Then(/^System will display a Warning Message when trying to delete a Group Title for an new Variant group$/, function (callback) {
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

    this.When(/^Exiting values of the translation values got Increases$/, function (callback) {
        callback.pending();
    });

    this.Then(/^A scroll down will be added on the right Side$/, function (callback) {
        callback.pending();
    });

    this.Given(/^Edit Variant Group screen is opened$/, function (callback) {
        commonlib.open();
        variantGroupPage.getVariantGroupLink().click().then(function () {
            commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getEditButton().click().then(function () {
                    callback();
                });
            });

        });
    });

    this.When(/^User clicks the culture button for Title field$/, function (callback) {
        variantGroupPage.getTitleCultureIcon().click().then(function () {
            callback();
        });
    });

    this.When(/^User selects the culture value from drop Down and enters the translation value$/, function (callback) {
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

    this.Then(/^Value will get saved at the bottom of the existing Values list$/, function (callback) {
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

    this.Given(/^View Variant Group screen is opened$/, function (callback) {
        commonlib.open();
        commonlib.waitForElement(variantGroupPage.getVariantGroupLink()).then(function(){
            variantGroupPage.getVariantGroupLink().click().then(function () {
                commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').first().click().then(function () {
                    actionButtons.getViewButton().click().then(function () {
                        callback();
                    });
                });
            });
        });
    });

    this.When(/^User click on the culture icon of Title Field$/, function (callback) {
        variantGroupPage.getTitleCultureIcon().click().then(function () {
            callback();
        });
    });

    this.Then(/^User should be able to view all the existing translation values for the Title field$/, function (callback) {
        variantGroupPage.getCultureAndValues().count().then(function(length){
            assert.isAbove(length,0);
            callback();
        });
    });

    this.Then(/^User should not be able to make any changes to the translation values in the pop Up$/, function (callback) {
        variantGroupPage.getCultureCloseButton().isDisplayed().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Given(/^Variant Group Office screen is opened$/, function (callback) {
        commonlib.open();
        variantGroupPage.getVariantGroupLink().click().then(function () {
                    callback();
        });
    });

    this.When(/^User drill down a record in view Mode$/, function (callback) {
        commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').first().click().then(function () {
            actionButtons.getViewButton().click().then(function () {
                callback();
            });
        });
    });

    this.Then(/^Title field value will be displayed in default Language \(English\)$/, function (callback) {
        variantGroupPage.getAllLabelValues().then(function (elements) {
            assert.isNotNull(elements);
            callback();
        });
    });

    this.When(/^User drill down a record in view Mode for which translation does not exist for Title field$/, function (callback) {
       callback.pending();
    });

    this.Then(/^Culture icon for Title field will be disable on View Mode$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Tool tip text on mouse over on the Culture Icon will display 'No Translation were define'$/, function (callback) {
        callback.pending();
    });

    this.When(/^User click on culture icon For Title Field$/, function (callback) {
        callback.pending();
    });

    this.When(/^Existing translation values list does not fit into the culture Pop Up$/, function (callback) {
        callback.pending();
    });

    this.Then(/^scroll bar will appear in order to view all the translation Values$/, function (callback) {
        callback.pending();
    });

    this.When(/^Click on culture icon For Title field$/, function (callback) {
        variantGroupPage.getTitleCultureIcon().click().then(function () {
            callback();
        });
    });

    this.When(/^User view a Multi\-Line translation value on culture pop up$/, function (callback) {
        variantGroupPage.getCultureValues().first().getText().then(function(txt){
            assert.isAbove(txt.length,0);
            callback();
        });
    });

    this.Then(/^User will be able to view the entire translation value text in multi line without Ellipsis$/, function (callback) {
        variantGroupPage.getCultureValues().first().getText().then(function(txt){
            assert.isAbove(txt.length,0);
            assert.isTrue(txt.indexOf("...")==-1);
            callback();
        });
    });

    this.Then(/^A pop up will get opened with Culture and Value$/, function (callback) {
        variantGroupPage.getCultureAndValues().count().then(function(length){
            assert.isAbove(length,0);
            callback();
        });
    });
};
module.exports = myStepDefinitionsWrapper;