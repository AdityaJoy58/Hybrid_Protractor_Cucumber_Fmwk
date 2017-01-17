/**
 * Created by ab250553 on 1/26/2016.
 */
var myStepDefinitionsWrapper = function () {

    var merchandiseHierarchy = require('../../../pages/merchandiseHierarchy');
    var actionButtons = require('../../../pages/actionButtons');
    var settings = require('../../../common/settings');
    var commonlib = require('../../../common/commonLib');
    var breadCrumb = require('../../../pages/breadCrumb');
    var chai = require(settings.constants.CHAI);
    var assert = chai.assert;
    var pathFieldArray = [];
    this.setDefaultTimeout(settings.config.STEPTIMEOUT);
    var fieldValue = "code" + new Date().toString();
    var activeElement = null;
    var fieldToBeEntered = "code" + new Date().toString();
    var scrollHeight = 0;

    this.Given(/^Edit Merchandise Hierarchy Office Screen$/, function (callback) {
        commonlib.open();
        merchandiseHierarchy.getMerchandiseLink().click().then(function () {
            commonlib.elementChainingAll(merchandiseHierarchy.getAllItemsFromGrid().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getEditButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^User verify the entries in the hierarchy Details section$/, function (callback) {
        merchandiseHierarchy.getHierarchyDetailSection().getInnerHtml().then(function () {
            callback();
        });
    });

    this.Then(/^Hierarchy details section will have 'Code','Title','Description','Parent' fields$/, function (callback) {
        merchandiseHierarchy.getTitleLabel().isEnabled().then(function (result) {
            assert.isTrue(result);
            merchandiseHierarchy.getParentLabel().isEnabled().then(function (result) {
                assert.isTrue(result);
                merchandiseHierarchy.getDescriptionLabel().isEnabled().then(function (result) {
                    assert.isTrue(result);
                    merchandiseHierarchy.getCodeLabel().isEnabled().then(function (result) {
                        assert.isTrue(result);
                        callback();
                    });
                });
            });
        });
    });

    this.Then(/^'Code' field will be the Mandatory field$/, function (callback) {
        merchandiseHierarchy.getManditoryIndication().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.When(/^User type into code field$/, function (callback) {
        merchandiseHierarchy.getCodeTextBox().sendKeys(fieldValue).then(function () {
            callback();
        });
    });

    this.When(/^User has typed maximum allowed number of characters$/, function (callback) {
        var remainingLength = 0;
        if (fieldValue.length < 64) {
            remainingLength = 64 - fieldValue.length;
            fieldValue = fieldValue + "a".repeat(remainingLength);
        }
        merchandiseHierarchy.getCodeTextBox().sendKeys(fieldValue).then(function () {
            callback();
        });
    });

    this.Then(/^User will not be able to type into the field$/, function (callback) {
        var oldCodeValue = "a".repeat(65);
        merchandiseHierarchy.getCodeTextBox().sendKeys(oldCodeValue).then(function () {
            merchandiseHierarchy.getCodeTextBox().getText().then(function (newText) {
                assert.notEqual(oldCodeValue, newText);
                callback();
            });
        });
    });

    this.Then(/^Message will be displayed informing user maximum allowed size has been reached$/, function (callback) {
        merchandiseHierarchy.getValidationMessage().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.When(/^User type into title field$/, function (callback) {
        scrollHeight = merchandiseHierarchy.getTitleTextBox().getAttribute("scrollHeight");
        merchandiseHierarchy.getTitleTextBox().sendKeys("title for following code").then(function () {
            callback();
        });
    });

    this.Then(/^title field will size dynamically \(expand vertically\) to accommodate user input$/, function (callback) {
        merchandiseHierarchy.getTitleTextBox().getAttribute("scrollHeight").then(function (result) {
            assert.notEqual(result, scrollHeight);
            callback();
        });
    });

    this.Then(/^user will not be allowed to type further when maximum allowed size has been reached$/, function (callback) {
        merchandiseHierarchy.getTitleTextBox().sendKeys(fieldValue).then(function () {
            callback();
        });
    });

    this.When(/^User verify the Parent field value in the Hierarchy details section$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Parent field  will only display ellipsis and the parent value with a slash between them$/, function (callback) {
        callback.pending();
    });

    this.Then(/^the parent value will be bolded$/, function (callback) {
        callback.pending();
    });

    this.When(/^user mouse over on Parent field$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Tool tip will be displayed$/, function (callback) {
        callback.pending();
    });

    this.Then(/^User will not be allowed to type further when maximum allowed size has been reached$/, function (callback) {
        callback.pending();
    });

    this.Then(/^the Parent value will be bolded$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Parent Field  will only display ellipsis and the parent value with a slash between them$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Entire Parent field value will be shown in tool tip$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Ellipsis will be bolded$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Ellipsis will change its shape to button$/, function (callback) {
        callback.pending();
    });

    this.When(/^user mouse over on Ellipsis in Parent field$/, function (callback) {
        callback.pending();
    });

    this.When(/^user click on Ellipsis in Parent field$/, function (callback) {
        callback.pending();
    });


    this.Then(/^Parent field will be expanded to show entire path with parent Bolded$/, function (callback) {
        callback.pending();
    });

    this.Then(/^there will be an arrow icon to collapse the Parent Field$/, function (callback) {
        callback.pending();
    });

    this.Given(/^Edit Merchandise Hierarchy Office Screen with Parent field expanded$/, function (callback) {
        callback.pending();
    });

    this.When(/^user click on arrow icon in the Parent field$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Parent field will Collapse Back$/, function (callback) {
        callback.pending();
    });

    this.Then(/^will show ellipsis and the Hierarchy parent$/, function (callback) {
        callback.pending();
    });

    this.When(/^User verify the Title field in Edit Merchandise Hierarchy Office Screen$/, function (callback) {

        callback();
    });

    this.Then(/^A culture Icon will be available for the Field$/, function (callback) {
        callback.pending();
    });

    this.When(/^User verify the Description field in Edit Merchandise Hierarchy Office Screen$/, function (callback) {
        callback.pending();
    });

    this.When(/^User click on culture icon for Title field in Edit Merchandise Hierarchy Office Screen$/, function (callback) {
        callback.pending();
    });

    this.When(/^User edited the value for Title field$/, function (callback) {
        callback.pending();
    });

    this.When(/^User click on culture icon for Title field$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Culture pop\-up will open for the field$/, function (callback) {
        callback.pending();
    });


    this.When(/^User verify the Description field in edit Merchandise Hierarchy Office Screen$/, function (callback) {
        callback.pending();
    });

    this.When(/^User click on culture icon for Title Field in Edit Merchandise Hierarchy Office Screen$/, function (callback) {
        callback.pending();
    });

    this.Then(/^A culture pop\-up will open for the field$/, function (callback) {
        callback.pending();
    });

    this.Then(/^The user edited value will be displayed as the value for the default culture for Title field in the pop\-up$/, function (callback) {
        callback.pending();
    });

    this.When(/^User click on culture icon for Description field in Edit Merchandise Hierarchy Office Screen$/, function (callback) {
        callback.pending();
    });

    this.When(/^User edited the value for Description field$/, function (callback) {
        callback.pending();
    });

    this.When(/^User click on culture icon for Description field$/, function (callback) {
        callback.pending();
    });

    this.Then(/^The user edited value will be displayed as the value for the default culture for Description field in the pop\-up$/, function (callback) {
        callback.pending();
    });

    this.When(/^User clicks on any field in Hierarchy Details section and then click on tab from keyboard$/, function (callback) {
        activeElement = commonlib.getActiveElement();
        merchandiseHierarchy.getTitleTextBox().click().then(function () {
            merchandiseHierarchy.getTitleTextBox().sendKeys(protractor.Key.TAB);
            callback();
        });
    });

    this.Then(/^User will be able to navigate among different fields on screen using Tab from keyboard$/, function (callback) {
        commonlib.getActiveElement().then(function (currentActiveElement) {
            assert.notEqual(currentActiveElement, activeElement);
            callback();
        });
    });

    this.When(/^User click on 'Change' button$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Merchandise hierarchy tree picker pop\-up will be displayed$/, function (callback) {
        callback.pending();
    });

    this.When(/^User verify Action buttons available in the tool bar on the screen$/, function (callback) {
        actionButtons.getNumberOfActionButtons().count().then(function (result) {
            assert.isAbove(result, 0);
            callback();
        });
    });

    this.Then(/^Following action buttons will be displayed : 'Save','Done','Add','Cancel'$/, function (callback) {
        actionButtons.getCancelButton().isEnabled().then(function (result) {
            assert.isTrue(result);
            actionButtons.getDoneButton().isEnabled().then(function (result) {
                assert.isTrue(result);
                actionButtons.getSaveButton().isEnabled().then(function (result) {
                    assert.isTrue(result);
                    callback();
                });
            });
        });
    });

    this.Then(/^action buttons 'Edit' will be hidden$/, function (callback) {
        commonlib.getActionButtonList().each(function (element, index) {
            element.getText().then(function (text) {
                assert.notInclude(text, 'Edit');
                callback();
            });
        });
    });

    this.When(/^User make changes to the field values$/, function (callback) {
        merchandiseHierarchy.getTitleTextBox().sendKeys("1").then(function () {
            merchandiseHierarchy.getDescriptionTextBox().sendKeys("1").then(function () {
                callback();
            });
        });
    });

    this.When(/^click 'Save' button$/, function (callback) {
        actionButtons.getSaveButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^The changes made to the hierarchy will be saved$/, function (callback) {
        actionButtons.getEditButton().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^Notification will be displayed to user that the record was saved successfully$/, function (callback) {
        merchandiseHierarchy.getEditScreenUpdatedMessage().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^Merchandise hierarchy screen will be displayed in edit mode$/, function (callback) {
        merchandiseHierarchy.getHierarchyBreadCrumb().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^Following action buttons will be displayed : 'Save','Done','Cancel'$/, function (callback) {
        actionButtons.getCreateScreenCancelButton().isEnabled().then(function (result) {
            assert.isTrue(result[0]);
            actionButtons.getCreateScreenDoneButton().isEnabled().then(function (result) {
                assert.isTrue(result[0]);
                actionButtons.getCreateScreenSaveButton().isEnabled().then(function (result) {
                    assert.isTrue(result[0]);
                    callback();
                });
            });
        });
    });

    this.Then(/^Action buttons 'Edit' and 'Add' will be Hidden$/, function (callback) {
        callback.pending();
    });

    this.When(/^click 'Done' button$/, function (callback) {
        actionButtons.getDoneButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^Merchandise hierarchy screen will be displayed in view mode$/, function (callback) {
        merchandiseHierarchy.getHierarchyDetailsLink().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });


    this.When(/^User removes data in Code field$/, function (callback) {
        merchandiseHierarchy.getCodeTextBox().clear().then(function () {
            callback();
        });
    });

    this.Then(/^The hierarchy will not be saved$/, function (callback) {
        commonlib.getPresenceOfNotification().then(function (result) {
            assert.isFalse(result);
            callback();
        });
    });

    this.Then(/^Error message will be displayed informing user that code is mandatory$/, function (callback) {
        merchandiseHierarchy.getManditoryIndication().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.When(/^User enters existing hierarchy code data in Code field$/, function (callback) {
        merchandiseHierarchy.getCodeTextBox().clear().then(function () {
            merchandiseHierarchy.getCodeTextBox().sendKeys("code101").then(function () {
                callback();
            });
        });
    });

    this.Then(/^Error message will be displayed informing user record with the same Code already exist$/, function (callback) {
        merchandiseHierarchy.getSameCodeErrorMessage().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.When(/^click 'Cancel' button$/, function (callback) {
        actionButtons.getCreateScreenCancelButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^Message prompt will be displayed asking user if user would like to discard changes$/, function (callback) {
        commonlib.getAlert().getText().then(function (alertText) {
            assert.equal(alertText, settings.constants.DISCARDMESSAGE);
            callback();
        });
    });

    this.Then(/^Message prompt will have 'Yes' and 'No' options$/, function (callback) {
        commonlib.getAlert().dismiss().then(function () {
            callback();
        });
    });

    this.When(/^Click 'No' from Cancel message prompt$/, function (callback) {
        commonlib.getAlert().dismiss().then(function () {
            callback();
        });
    });

    this.Then(/^User will stay on Edit merchandise hierarchy office screen\.$/, function (callback) {
        callback.pending();
    });

    this.When(/^Click 'Yes' from Cancel message prompt$/, function (callback) {
        commonlib.getAlert().accept().then(function () {
            callback();
        });
    });

    this.Then(/^User navigate back to grid view for merchandise hierarchy$/, function (callback) {
        merchandiseHierarchy.getHierarchyDetailsHeading().isDisplayed().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^The hierarchy will not be Edited$/, function (callback) {
        commonlib.getPresenceOfNotification().then(function (result) {
            assert.isFalse(result);
            callback();
        });
    });

    this.Then(/^Message prompts will have 'Yes' and 'No' options$/, function (callback) {
        commonlib.getAlert().dismiss().then(function () {
            callback();
        });
    });

    this.When(/^click 'No' from cancel message prompt$/, function (callback) {
        commonlib.getAlert().dismiss().then(function () {
            callback();
        });
    });

    this.Then(/^User will stay on edit merchandise hierarchy office screen\.$/, function (callback) {
        merchandiseHierarchy.getHierarchyBreadCrumb().getText().then(function (text) {
            assert.isTrue(text.substring(0, text.indexOf("- Edit")).length > 0);
            callback();
        });
    });

    this.When(/^click 'Yes' from cancel message prompt$/, function (callback) {
        commonlib.getAlert().accept().then(function () {
            callback();
        });
    });

    this.Then(/^User navigate back to grid view for merchandise hierarchy$/, function (callback) {
        merchandiseHierarchy.getHierarchyDetailSection().then(function (result) {
            assert.isFalse(result);
            callback();
        });
    });

    this.When(/^User enters all the valid information in required fields$/, function (callback) {
        merchandiseHierarchy.getCodeTextBox().sendKeys(fieldToBeEntered).then(function () {
            merchandiseHierarchy.getTitleTextBox().sendKeys("title").then(function () {
                merchandiseHierarchy.getDescriptionTextBox().sendKeys("description").then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^User navigate away from screen by using back button\\ using breadcrumbs\\ page browsing\\ other$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Message prompt will have 'Yes' And 'No' Options$/, function (callback) {
        callback.pending();
    });

    this.When(/^User verify breadcrumb on the screen$/, function (callback) {
        merchandiseHierarchy.getHierarchyBreadCrumb().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^breadcrumb path will display Catalog \-> Merchandise Hierarchy > Hierarchy path > hierarchy title> \- Edit$/, function (callback) {
        merchandiseHierarchy.getHierarchyBreadCrumb().getText().then(function (text) {
            assert.isTrue(text.substring(0, text.indexOf("- Edit")).length > 0);
            callback();
        });
    });

    this.Then(/^The changes Made to the hierarchy will be saved$/, function (callback) {
        actionButtons.getSaveNotification().getInnerHtml().then(function (result) {
            assert.include(result.toLowerCase(), 'notification success');
            callback();
        });
    });

    this.Then(/^breadcrumb will display  Catalog > merchandise Hierarchy >hierarchy title \- Edit$/, function (callback) {
        merchandiseHierarchy.getHierarchyBreadCrumb().getText().then(function (text) {
            assert.isTrue(text.substring(0, text.indexOf("- Edit")).length > 0);
            callback();
        });
    });

    this.Then(/^breadcrumb Will display  Catalog > Merchandise Hierarchy > (.*)$/, function (callback) {
        callback.pending();
    });

    this.Then(/^breadcrumb Will display  Catalog > Merchandise Hierarchy> hierarchy title$/, function (callback) {
        breadCrumb.getBreadCrumbText().then(function (text) {
            var breadCrumbText = text;
            merchandiseHierarchy.getHierarchyBreadCrumb().getText().then(function (titile) {
                assert.equal('Catalog>Merchandise Hierarchy>' + titile, breadCrumbText.replace('-', '') + '>' + titile);
                callback();
            });
        });
    });

    this.When(/^User removes data in Code field or Title Field or Description Field$/, function (callback) {
        merchandiseHierarchy.getCodeTextBox().clear().sendKeys('');
        merchandiseHierarchy.getTitleTextBox().clear().sendKeys('');
        merchandiseHierarchy.getDescriptionTextBox().clear().sendKeys('');
        callback();
    });
};
module.exports = myStepDefinitionsWrapper;