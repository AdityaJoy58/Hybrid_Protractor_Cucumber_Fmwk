var myStepDefinitionsWrapper = function () {

    var dynamicAttr = require('../../../pages/dynamicAttribute');
    var actionButtons = require('../../../pages/actionButtons');
    var settings = require('../../../common/settings');
    var commonlib = require('../../../common/commonLib');
    var chai = require(settings.constants.CHAI);
    var assert = chai.assert;
    var expectedResultDictionary = {};
    this.setDefaultTimeout(settings.config.STEPTIMEOUT);
    var attributeIDValue = "ATTRIBUTE" + new Date().getTime().toString();

    this.Given(/^Add Dynamic Attribute screen is opened$/, function (callback) {
        commonlib.open();
        actionButtons.getAddButton().click().then(function () {
            callback();
        });
    });

    this.When(/^User enter the Attribute name$/, function (callback) {
        dynamicAttr.getDynamicAttributeNameTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
            callback();
        });
    });

    this.When(/^User click on the Culture button$/, function (callback) {
        dynamicAttr.getCultureIconInAddEditMode().click().then(function () {
            callback();
        });
    });

    this.Then(/^A pop up should get opened with the Culture and value$/, function (callback) {
        dynamicAttr.getCultureDropdown().isDisplayed().then(function (result) {
            assert.equal(result, true);
            dynamicAttr.getCultureValueTextBox().isDisplayed().then(function (result) {
                assert.equal(result, true);
                callback();
            });
        });
    });

    this.Then(/^default culture and value will be displayed in the existing table below culture drop down$/, function (callback) {
        dynamicAttr.getCultureTableInAddEditMode().count().then(function (result) {
            assert.equal(result, 1);
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

    this.When(/^User leave the attribute name as blank$/, function (callback) {
        dynamicAttr.getDynamicAttributeNameTextBox().clear().then(function () {
            callback();
        });
    });

    this.Then(/^the system default culture will be displayed$/, function (callback) {
        dynamicAttr.getCultureDropdown().getAttribute(settings.constants.VALUE).then(function (result) {
            assert.isNotNull(result);
            callback();
        });
    });

    this.Then(/^the focus will be on the value field$/, function (callback) {
        commonlib.getActiveElement().getAttribute(settings.constants.ID).then(function (result) {
            assert.equal(result, settings.constants.CULTURETEXTBOXID);
            callback();
        });
    });

    this.Given(/^Culture pop\-up is opened$/, function (callback) {
        commonlib.open();
        actionButtons.getAddButton().click().then(function () {
            dynamicAttr.getDynamicAttributeIdTextBox().sendKeys(attributeIDValue).then(function(){
                dynamicAttr.getDynamicAttributeName().sendKeys(attributeIDValue.toLowerCase()).then(function() {
                    commonlib.waitForElement(dynamicAttr.getCultureIconInAddEditMode()).then(function () {
                        dynamicAttr.getCultureIconInAddEditMode().click().then(function () {
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.When(/^click on the drop down in pop up$/, function (callback) {
        dynamicAttr.getCultureDropdown().clear().then(function () {
            dynamicAttr.getCultureDropdown().click().then(function (result) {
                callback();
            });
        });
    });

    this.Then(/^drop down should get displayed with different cultures$/, function (callback) {
        dynamicAttr.getCultureDropDownElements().count().then(function (result) {
            assert.isAbove(result, 0);
            callback();
        });
    });

    this.Then(/^Each value should get display with relevant flag and country value in parenthesis$/, function (callback) {
        dynamicAttr.getCultureDropDownElements().first().getInnerHtml().then(function (result) {
            assert.include(result, settings.constants.LEFTPARENTHESIS);
            assert.include(result, settings.constants.RIGHTPARENTHESIS);
            assert.include(result, settings.constants.IMG);
            callback();
        });
    });

    this.When(/^User select the language from culture drop down$/, function (callback) {
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
    //Need to check flag also
    this.Then(/^Country should get appear with the corresponding flag in Parenthesis$/, function (callback) {
        dynamicAttr.getCultureDropdown().getAttribute(settings.constants.VALUE).then(function (result) {
            assert.include(result, settings.constants.LEFTPARENTHESIS);
            assert.include(result, settings.constants.RIGHTPARENTHESIS);
            callback();
        });
    });

    this.Then(/^User should be able to select the language from the culture drop down$/, function (callback) {
        dynamicAttr.getCultureDropdown().clear().then(function () {
            dynamicAttr.getCultureDropdown().click().then(function (result) {
                dynamicAttr.getCultureDropDownElements().first().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^User should be able to define the value for particular language$/, function (callback) {
        dynamicAttr.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function (result) {
            callback();
        });
    });

    this.When(/^User add the translation values$/, function (callback) {
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

    this.When(/^Values got added in existing values$/, function (callback) {
        dynamicAttr.getCultureTableInAddEditMode().count().then(function (result) {
            assert.isAbove(result, 0);
            callback();
        });
    });

    this.Then(/^All the translation values should be in the Editable mode$/, function (callback) {

        dynamicAttr.getCultureTableFirstTextAreaLabel().click().then(function () {
            dynamicAttr.getCultureTableFirstTextArea().isEnabled().then(function (result) {
                assert.equal(result, true);
                callback();
            });
        });
    });

    this.Then(/^User should be able to edit any existing value$/, function (callback) {
        dynamicAttr.getCultureTableFirstTextArea().clear().then(function () {
            dynamicAttr.getCultureTableFirstTextArea().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                callback();
            });
        });
    });

    this.When(/^User define the value for that language$/, function (callback) {
        dynamicAttr.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
            callback();
        });
    });

    this.When(/^User click on Add button$/, function (callback) {
        dynamicAttr.getCultureAddButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^language and value should get added in the bottom of the existing value$/, function (callback) {
        dynamicAttr.getCultureTableInAddEditMode().last().getInnerHtml().then(function (result) {
            assert.include(result, expectedResultDictionary.cultureDropdownValue);
            dynamicAttr.getCultureOkButton().click().then(function () {
                dynamicAttr.onSave().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^User should get noticed that add was performed$/, function (callback) {
        commonlib.waitForElement(actionButtons.getSaveNotification()).then(function (result) {
            actionButtons.getSaveNotification().getInnerHtml().getText().then(function (result) {
                assert.equal(result, settings.constants.ADD_DYNAMIC_ATTRIBUTE_NOTIFICATION_TEXT, "Notification text is not as Expected");
                callback();
            });
        });
    });

    this.When(/^User mouse over on the translation values in existing table$/, function (callback) {
        //Adding 1st row in existing table
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
                        commonlib.mouseMove(dynamicAttr.getCultureTableInAddEditMode().first());
                        commonlib.mouseMove(dynamicAttr.getCultureTableInAddEditMode().last());
                        callback();
                    });
                });
            });
        });
    });

    this.Then(/^a black dot and delete icon should keep on moving with mouse over$/, function (callback) {
        var firstRow = dynamicAttr.getCultureTableInAddEditMode().first();
        var lastRow = dynamicAttr.getCultureTableInAddEditMode().last();
        dynamicAttr.getCultureTableDeleteIcon(firstRow).isDisplayed().then(function (result) {
            dynamicAttr.getCultureTableDeleteIcon(lastRow).isDisplayed().then(function (result) {
                assert.equal(result, true);
                callback();
            });
        });

    });

    this.When(/^User select a culture from drop down and enter the translation value$/, function (callback) {
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

    this.When(/^Value added in existing values$/, function (callback) {
        dynamicAttr.getCultureAddButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^User should be able to edit the existing translation values$/, function (callback) {
        dynamicAttr.getCultureTableFirstTextAreaLabel().click().then(function () {
            dynamicAttr.getCultureTableFirstTextArea().getAttribute('value').then(function (result) {
                assert.equal(result, attributeIDValue.toLowerCase());
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
    });

    this.When(/^Culture already exist in the translation values$/, function (callback) {
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

    this.Then(/^that culture will be displayed in the drop list as disabled\.$/, function (callback) {
        dynamicAttr.getCultureDropdown().clear().then(function () {
            dynamicAttr.getCultureDropdown().click().then(function (result) {
                dynamicAttr.getCultureDropDownElements().get(0).getAttribute(settings.constants.CLASS).then(function (text) {
                    assert.include(text, settings.constants.DISABLELISTITEM);
                    callback();
                });
            });
        });
    });

    this.When(/^user select the language from culture drop down$/, function (callback) {
        callback.pending();
    });

    this.When(/^User define the value for that language to the max (\d+) characters$/, function (arg1, callback) {
        callback.pending();
    });

    this.Then(/^User should be able to continue writing up to max allowed characters$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Line should get shifted down to second row once characters exceed the length$/, function (arg1, callback) {
        callback.pending();
    });

    this.When(/^User define the value for that language which contains (\d+) lines$/, function (arg1, callback) {
        callback.pending();
    });

    this.Then(/^value should get saved in Existing value$/, function (callback) {
        callback.pending();
    });

    this.Then(/^It should break in to (\d+) lines$/, function (arg1, callback) {
        callback.pending();
    });

    this.When(/^more than (\d+) lines are needed to display$/, function (arg1, callback) {
        callback.pending();
    });

    this.Then(/^It should get truncated and added with ellipsis$/, function (callback) {
        callback.pending();
    });

    this.When(/^User add transalation value with max (\d+) character$/, function (arg1, callback) {
        dynamicAttr.getCultureValueTextBox().sendKeys('a'.repeat(settings.constants.TEXTAREAMAXLEN)).then(function () {
            callback();
        });
    });

    this.When(/^Value got saved with ellipsis$/, function (callback) {
        dynamicAttr.getCultureAddButton().click().then(function () {
            dynamicAttr.getCultureTableInAddEditMode().count().then(function (result) {
                assert.equal(result, 1);
                callback();
            });
        });
    });

    this.When(/^User mouse over on anywhere on the text$/, function (callback) {
        callback.pending();
    });

    this.Then(/^User should be able to view full translation value on tooltip$/, function (callback) {
        callback.pending();
    });

    this.When(/^User click the ellipsis$/, function (callback) {
        dynamicAttr.getCultureTableFirstTextAreaLabel().click().then(function () {
            callback();
        });
    });

    this.Then(/^text area should get expanded to show the full translation value$/, function (callback) {
        dynamicAttr.getCultureTableFirstTextArea().isEnabled().then(function (result) {
            assert.equal(result, true);
            dynamicAttr.getCultureTableFirstTextArea().getAttribute(settings.constants.VALUE).then(function (result) {
                callback();
            });
        });
    });

    this.Then(/^Cursor should be there in the end of the text$/, function (callback) {
        callback();
    });

    this.Then(/^User should be able to edit the value$/, function (callback) {
        dynamicAttr.getCultureTableFirstTextArea().isEnabled().then(function (result) {
            assert.equal(result, true);
            dynamicAttr.getCultureTableFirstTextArea().clear().then(function () {
                dynamicAttr.getCultureTableFirstTextArea().sendKeys('a'.repeat(settings.constants.TEXTAREAMAXLEN)).then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^user start entering the character in the culture drop down box$/, function (callback) {
        dynamicAttr.getCultureDropdown().clear().then(function () {
            dynamicAttr.getCultureDropdown().sendKeys(settings.constants.TYPEKEYINDROPDOWN).then(function () {
                callback();
            });
        });
    });

    this.Then(/^Text should get highlighted according to the user's input for each word$/, function (callback) {
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

    this.When(/^User start entering the character in the culture drop down box$/, function (callback) {
        callback.pending();
    });

    this.Then(/^User should be able to clear the search by clear icon$/, function (callback) {
        callback.pending();
    });

    this.When(/^User clear the search by clear icon$/, function (callback) {
        callback.pending();
    });

    this.Then(/^search results will clear and full tree would get redisplayed$/, function (callback) {
        callback.pending();
    });

    this.When(/^User select a culture$/, function (callback) {
        dynamicAttr.getCultureDropdown().clear().then(function () {
            dynamicAttr.getCultureDropdown().click().then(function (result) {
                dynamicAttr.getCultureDropDownElements().first().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^Start entering single character in transalation values$/, function (callback) {
        dynamicAttr.getCultureAddButton().isEnabled().then(function (result) {
            assert.equal(result, false);
            dynamicAttr.getCultureValueTextBox().sendKeys(settings.constants.DYNATTRNAMESAMPLETEXT).then(function () {
                callback();
            });
        });
    });

    this.Then(/^Button Add should get enabled$/, function (callback) {
        dynamicAttr.getCultureAddButton().isEnabled().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.When(/^User add a value in the existing list$/, function (callback) {
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

    this.Then(/^Button OK should get enabled$/, function (callback) {
        dynamicAttr.getCultureOkButton().isEnabled().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.When(/^User click on the OK button$/, function (callback) {
        dynamicAttr.getAddEditPopup().isPresent().then(function (result) {
            assert.equal(result, true);
            dynamicAttr.getCultureOkButton().click().then(function () {
                callback();
            });
        });
    });

    this.Then(/^Pop up should get closed$/, function (callback) {
        dynamicAttr.getCultureIconInAddEditMode().isPresent().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.Then(/^Save changes in the existing values$/, function (callback) {
        dynamicAttr.getCultureIconInAddEditMode().click().then(function () {
            dynamicAttr.getCultureTableInAddEditMode().count().then(function (result) {
                assert.equal(result, 2);
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
    });

    this.When(/^User click on the cancel button$/, function (callback) {
        dynamicAttr.getCultureCancelButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^changes would not got saved$/, function (callback) {
        dynamicAttr.getCultureIconInAddEditMode().click().then(function () {
            dynamicAttr.getCultureTableInAddEditMode().count().then(function (result) {
                assert.equal(result, 0);
                callback();
            });
        });
    });

    this.When(/^clicking or mouse hovering on one of the records$/, function (callback) {
        //Adding row in existing table
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
    });

    this.Then(/^delete icon should be displayed on the records row$/, function (callback) {
        var firstRow = dynamicAttr.getCultureTableInAddEditMode().first();
        dynamicAttr.getCultureTableDeleteIcon(firstRow).isDisplayed().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.When(/^user point specifically on the delete icon$/, function (callback) {
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
    });

    this.Then(/^delete text should be displayed as tooltip$/, function (callback) {
        var firstRow = dynamicAttr.getCultureTableInAddEditMode().first()
        dynamicAttr.getCultureTableDeleteIcon(firstRow).getOuterHtml().then(function (result) {
            assert.include(result, 'Delete');
            callback();
        });
    });

    this.When(/^Exiting values of the translation values got increases$/, function (callback) {
        callback.pending();
    });

    this.Then(/^a scroll down should get added on the right side$/, function (callback) {
        callback.pending();
    });

    this.Given(/^Culture pop\-up is opened in create mode$/, function (callback) {
        callback.pending();
    });
};
module.exports = myStepDefinitionsWrapper;