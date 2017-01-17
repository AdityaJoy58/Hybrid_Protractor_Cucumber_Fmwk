/**
 * Created by ab250553 on 1/25/2016.
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
    var fieldToBeEntered = "code" + commonlib.getCurrentDateTimeString();

    this.Given(/^Create Merchandise Hierarchy Office Screen$/, function (callback) {
        commonlib.open();
        merchandiseHierarchy.getMerchandiseLink().isEnabled().then(function (result) {
            merchandiseHierarchy.getMerchandiseLink().click().then(function () {
                actionButtons.getAddButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^User verify the entries in the Hierarchy Details section$/, function (callback) {
        merchandiseHierarchy.getHierarchyDetailsHeading().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^Hierarchy Details section will have 'Code','Title','Description','Parent' fields$/, function (callback) {
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

    this.Then(/^'Code' field will be the mandatory field$/, function (callback) {
        merchandiseHierarchy.getManditoryIndication().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.When(/^User type into Code field$/, function (callback) {
        merchandiseHierarchy.getCodeTextBox().sendKeys(fieldValue).then(function () {
            callback();
        });
    });

    this.Then(/^User will be not be able to type into the field$/, function (callback) {
        var oldCodeValue = "a".repeat(65);
        merchandiseHierarchy.getCodeTextBox().sendKeys(oldCodeValue).then(function () {
            merchandiseHierarchy.getCodeTextBox().getText().then(function (newText) {
                assert.notEqual(oldCodeValue, newText);
                callback();
            });
        });
    });

    this.Then(/^Message will be displayed informing user that maximum allowed size has been reached$/, function (callback) {
        merchandiseHierarchy.getValidationMessage().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.When(/^User type into Title field$/, function (callback) {
        merchandiseHierarchy.getTitleTextBox().sendKeys("title for following code").then(function () {
            callback();
        })

    });

    this.Then(/^Title field will size dynamically \(expand vertically\) to accommodate user input$/, function (callback) {
        callback();
    });

    this.Then(/^User will not be allowed to type further when maximum allowed size has reached$/, function (callback) {
        merchandiseHierarchy.getTitleTextBox().sendKeys(fieldValue).then(function () {
            callback();
        });
    });


    this.Given(/^Merchandise Hierarchy Office Screen$/, function (callback) {
        commonlib.open();
        merchandiseHierarchy.getMerchandiseLink().click().then(function () {
            callback();
        });
    });

    this.When(/^User click on 'New' action button$/, function (callback) {
        actionButtons.getAddButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^Create Merchandise Hierarchy Office Screen will be displayed$/, function (callback) {
        commonlib.getCurrentUrl().then(function (result) {
            assert.include(result.toLowerCase(), 'merchandisehierarchy/add');
            callback();
        });
    });

    this.Then(/^Parent field on the create screen will have default value as Root$/, function (callback) {
        merchandiseHierarchy.getPathFieldText().getText().then(function (text) {
            assert.equal('Root', text);
            callback();
        });
    });

    this.Given(/^View Merchandise Hierarchy office Screen for hierarchy node$/, function (callback) {
        callback.pending();
    });

    this.When(/^User has typed in maximum allowed number of characters$/, function (callback) {
        var remainingLength = 0;
        if (fieldValue.length < 64) {
            remainingLength = 64 - fieldValue.length;
            fieldValue = fieldValue + "a".repeat(remainingLength);
        }
        merchandiseHierarchy.getCodeTextBox().sendKeys(fieldValue).then(function () {
            callback();
        });
    });

    this.Then(/^Parent field on the Create screen will have default value as node’s path including the node from which the Add is performed$/, function (callback) {
        callback.pending();
    });

    this.When(/^User verify the Parent Field value in the Hierarchy Details section$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Parent field  will only display ellipsis and the parent value with a Slash between them$/, function (callback) {
        callback.pending();
    });

    this.Then(/^the parent value will be Bolded$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Parent field on the Create screen will have default value as node’s path including the node from which the Add is Performed$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Tool tip will be Displayed$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Entire Parent path field value will be shown in tool tip$/, function (callback) {
        callback.pending();
    });

    this.When(/^user mouse over on ellipsis in Parent field$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Ellipsis will be Bolded$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Ellipsis will change its shape to Button$/, function (callback) {
        callback.pending();
    });

    this.When(/^User mouse over on Parent field$/, function (callback) {
        callback.pending();
    });

    this.When(/^User click on Ellipsis in Parent Field$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Parent field will be expanded to show entire path with Parent Bolded$/, function (callback) {
        callback.pending();
    });

    this.Then(/^There will be an arrow icon to collapse the Parent field$/, function (callback) {
        callback.pending();
    });

    this.Given(/^Create Merchandise Hierarchy Office Screen with Parent field expanded$/, function (callback) {
        callback.pending();
    });

    this.When(/^User click on arrow icon in the Parent Field$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Parent field will collapse Back$/, function (callback) {
        callback.pending();
    });

    this.Then(/^will show ellipsis and the hierarchy parent$/, function (callback) {
        callback.pending();
    });

    this.When(/^User verify the Title field in Create Merchandise Hierarchy Office Screen$/, function (callback) {
        callback.pending();
    });

    this.Then(/^A culture icon will be available for the Field$/, function (callback) {
        callback.pending();
    });

    this.When(/^User verify the Description field in Create Merchandise Hierarchy Office Screen$/, function (callback) {
        callback.pending();
    });

    this.When(/^User click on culture icon for Title field in Create Merchandise Hierarchy Office Screen$/, function (callback) {
        callback.pending();
    });

    this.Then(/^A culture pop\-up will open for the Field$/, function (callback) {
        callback.pending();
    });

    this.When(/^User entered a value for Title field$/, function (callback) {
        callback.pending();
    });

    this.When(/^User click on culture icon for Title Field$/, function (callback) {
        callback.pending();
    });

    this.Then(/^The user typed in value will already be added as the default culture value for Title field in the pop\-up$/, function (callback) {
        callback.pending();
    });

    this.When(/^User click on culture icon for Description field in Create Merchandise Hierarchy Office Screen$/, function (callback) {
        callback.pending();
    });

    this.When(/^User entered a value for Description field$/, function (callback) {
        callback.pending();
    });

    this.When(/^User click on culture icon for Description Field$/, function (callback) {
        callback.pending();
    });

    this.Then(/^The user typed in value will already be added as the default culture value for Description field in the pop\-up$/, function (callback) {
        callback.pending();
    });

    this.When(/^User click on any field in Hierarchy Details section and then click on tab from keyboard$/, function (callback) {
        activeElement = commonlib.getActiveElement();
        merchandiseHierarchy.getTitleTextBox().click().then(function () {
            merchandiseHierarchy.getTitleTextBox().sendKeys(protractor.Key.TAB);
            callback();
        });
    });

    this.Then(/^User will be able to navigate among different fields on the screen using Tab from keyboard$/, function (callback) {
        commonlib.getActiveElement().then(function (currentActiveElement) {
            assert.notEqual(currentActiveElement, activeElement);
            callback();
        });
    });

    this.When(/^User click on 'Set' button of the Parent field$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Merchandise hierarchy tree picker pop\-up will be Displayed$/, function (callback) {
        callback.pending();
    });

    this.When(/^User verify the action buttons available in the tool bar on the screen$/, function (callback) {
        actionButtons.getNumberOfActionButtons().count().then(function (result) {
            assert.isAbove(result, 0);
            callback();
        });
    });

    this.Then(/^Following action buttons will be displayed: 'Save','Done','Cancel'$/, function (callback) {
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

    this.Then(/^Action buttons 'Edit' and 'Add' will be hidden$/, function (callback) {
        commonlib.getActionButtonList().each(function (element, index) {
            element.getText().then(function (text) {
                assert.notInclude(text,'Edit');
                assert.notInclude(text,'Add');
                callback();
            });
        });
    });

    this.When(/^User enters all the valid information in the required fields$/, function (callback) {
        fieldToBeEntered = "code" + commonlib.getCurrentDateTimeString();
        merchandiseHierarchy.getCodeTextBox().clear().sendKeys(fieldToBeEntered).then(function () {
            merchandiseHierarchy.getTitleTextBox().clear().sendKeys("title").then(function () {
                merchandiseHierarchy.getDescriptionTextBox().clear().sendKeys("description").then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^New hierarchy will be saved$/, function (callback) {
        merchandiseHierarchy.getHierarchySavedNotification().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^New hierarchy will Be saved$/, function (callback) {
        merchandiseHierarchy.getHierarchySavedNotification().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });
    this.Then(/^Notification will be displayed to user that the Record was saved successfully$/, function (callback) {
        commonlib.waitForElement(merchandiseHierarchy.getHierarchySavedNotification()).then(function () {
            merchandiseHierarchy.getHierarchySavedNotification().isEnabled().then(function (result) {
                assert.isTrue(result);
                commonlib.waitForElement(commonlib.closeNotification()).then(function () {
                    commonlib.closeNotification().click().then(function () {
                        callback();
                    });
                });
            });
        });
    });

    this.Then(/^Merchandise hierarchy screen will be displayed in Edit mode$/, function (callback) {
        merchandiseHierarchy.getHierarchyBreadCrumb().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.When(/^Click 'Save' button$/, function (callback) {
        actionButtons.getSaveButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^breadcrumb will display  Catalog > Merchandise hierarchy > (.*) \- Edit$/, function (callback) {
        callback();
    });

    this.When(/^Click 'Done' button$/, function (callback) {
        actionButtons.getDoneButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^Merchandise hierarchy screen will be displayed in View mode$/, function (callback) {
        merchandiseHierarchy.getHierarchyBreadCrumb().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.When(/^User enters no data in Code field$/, function (callback) {
        merchandiseHierarchy.getCodeTextBox().sendKeys("").then(function () {
            callback();
        });
    });

    this.Then(/^New hierarchy will not be saved$/, function (callback) {
        commonlib.getPresenceOfNotification().then(function (result) {
            assert.isFalse(result);
            callback();
        });
    });

    this.Then(/^Error message will be displayed informing user that Required Field is mandatory$/, function (callback) {
        merchandiseHierarchy.getMandatoryErrorMessage().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^Error message will be displayed informing user that Code is mandatory$/, function (callback) {
        merchandiseHierarchy.getMandatoryErrorMessage().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^Error message will be displayed informing user that record with the same Code already exist$/, function (callback) {
        merchandiseHierarchy.getSameCodeErrorMessage().isEnabled().then(function (result) {
            assert.isTrue(result);
            merchandiseHierarchy.onCancel().click().then(function () {
                commonlib.waitForElement(commonlib.getNEPAlertYes()).then(function(){
                    commonlib.getNEPAlertYes().click().then(function(){
                        callback();
                    });
                });
            });
        });
    });

    this.When(/^User enters an existing hierarchy code data in Code field$/, function (callback) {
        merchandiseHierarchy.getCodeTextBox().sendKeys("code789").then(function(){
            callback();
        });
    });

    this.When(/^Click 'Cancel' button$/, function (callback) {
        actionButtons.getCancelButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^Message prompt will be displayed asking user If user would like to discard changes$/, function (callback) {
        commonlib.getAlert().getText().then(function (alertText) {
            assert.equal(alertText, settings.constants.DISCARDMESSAGE);
            callback();
        });
    });

    this.Then(/^Message prompt will have 'Yes' and 'No' Options$/, function (callback) {
        commonlib.getAlert().dismiss().then(function () {
            callback();
        });
    });

    this.Then(/^User will stay on Create merchandise hierarchy office screen\.$/, function (callback) {
        merchandiseHierarchy.getCodeTextBox().getText().then(function (newText) {
            assert.isNotNull(newText);
            callback();
        });
    });

    this.When(/^Click 'No' from cancel message prompt$/, function (callback) {
        commonlib.getAlert().dismiss().then(function () {
            callback();
        });
    });

    this.When(/^Click 'Yes' from cancel message prompt$/, function (callback) {
        commonlib.getAlert().accept().then(function () {
            callback();
        });
    });

    this.Then(/^User will navigate back to grid view for merchandise hierarchy$/, function (callback) {
        merchandiseHierarchy.getHierarchyDetailHeading().isDisplayed().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^New hierarchy will not be created$/, function (callback) {
        commonlib.getPresenceOfNotification().then(function (result) {
            assert.isFalse(result);
            callback();
        });
    });

    this.When(/^User navigate away from screen by using back button\\ using breadcrumbs\\ page browsing\\ Other$/, function (callback) {
        callback.pending();
    });

    this.When(/^User verify the breadcrumb on the screen$/, function (callback) {
        merchandiseHierarchy.getHierarchyBreadCrumb().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^breadcrumb path will display Catalog \-> Merchandise Hierarchy > \[Hierarchy path\] > New Hierarchy Node$/, function (callback) {
         merchandiseHierarchy.getWholeBreadCrumb().getText().then(function(text){
            assert.isNotNull(text);
            callback();
        });
    });


    this.Then(/^breadcrumb will display  Catalog > Merchandise Hierarchy > hierarchy title>  Edit$/, function (callback) {
        merchandiseHierarchy.getHierarchyBreadCrumb().getText().then(function (text) {
            assert.isTrue(text.substring(0, text.indexOf("- Edit")).length > 0);
            callback();
        });
    });

    this.Then(/^breadcrumb will display  Catalog > Merchandise hierarchy > hierarchy title>$/, function (callback) {
        breadCrumb.getBreadCrumbText().then(function (text) {
            var breadCrumbText = text;
            merchandiseHierarchy.getHierarchyBreadCrumb().getText().then(function (titile) {
                assert.equal('Catalog>Merchandise Hierarchy>' + titile, breadCrumbText.replace('-', '') + '>' + titile);
                callback();
            });
        });
    });

};
module.exports = myStepDefinitionsWrapper;