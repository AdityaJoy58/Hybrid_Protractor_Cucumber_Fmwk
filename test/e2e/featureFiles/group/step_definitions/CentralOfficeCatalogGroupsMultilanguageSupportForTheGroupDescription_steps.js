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

  this.Then(/^A pop up will open with the culture and value field$/, function (callback) {
      group.getCultureDropdown().isDisplayed().then(function (result) {
          assert.equal(result, true);
          group.getCultureValueTextBox().isDisplayed().then(function (result) {
              assert.equal(result, true);
              callback();
          });
      });
  });

  this.Then(/^Default culture and value will be displayed in the existing table below culture drop down$/, function (callback) {
    group.getCultureDropdown().getAttribute(settings.constants.VALUE).then(function (result) {
      assert.isNotNull(result);
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

  this.Given(/^Culture pop\-up is opened for Description field from Create Group screen$/, function (callback) {
    commonlib.open();
    groupPage.getGroupLink().click().then(function () {
      actionButtons.getAddButton().click().then(function () {
          groupPage.getCodeTextBox().clear().sendKeys('DummyCode').then(function () {
              commonlib.waitForElement(group.getDescriptionCultureIcon()).then(function () {
                  group.getDescriptionCultureIcon().click().then(function () {
                      callback();
                  });
              });
          });
      });
    });
  });

    this.When(/^User click on the delete button of any existing translation value in Group Screen$/, function (callback) {
        descriptionToBeEntered = "description" + Math.random();
        group.getCultureDropdown().clear().then(function () {
            group.getCultureDropdown().click().then(function (result) {
                group.getCultureDropDownElements().first().click().then(function () {
                    group.getCultureValueTextBox().sendKeys(descriptionToBeEntered).then(function () {
                        group.getCultureAddButton().click().then(function () {
                            group.getCultureTableInAddEditMode().count().then(function (length) {
                                if (length > 0) {
                                    group.getCultureTableInAddEditMode().first().click().then(function(){
                                        group.getCultureDeleteButton().isEnabled().then(function(result){
                                            if (result){
                                                group.getCultureDeleteButton().click().then(function () {
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

    this.When(/^User add a Culture value for Description field in the existing List$/, function (callback) {
        descriptionToBeEntered = "description" + Math.random();
        group.getCultureOkButton().isEnabled().then(function (result) {
            assert.equal(result, false);
            group.getCultureDropdown().clear().then(function () {
                group.getCultureDropdown().click().then(function (result) {
                    group.getCultureDropDownElements().first().click().then(function () {
                        group.getCultureValueTextBox().sendKeys(descriptionToBeEntered).then(function () {
                            group.getCultureAddButton().click().then(function () {
                                callback();
                            });
                        });
                    });
                });
            });
        });
    });

    this.When(/^User click on the OK button of Pop Up$/, function (callback) {
        group.getAddEditPopup().isPresent().then(function (result) {
            assert.equal(result, true);
            group.getCultureOkButton().click().then(function () {
                callback();
            });
        });
    });

    this.Then(/^Description Field Culture Pop up will be closed$/, function (callback) {
        group.getCultureIconInAddEditMode().isPresent().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.Then(/^Description Field Culture Changes in the existing values will be saved$/, function (callback) {
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

  this.Then(/^User will be able to continue writing up to max allowed characters$/, function (callback) {
    callback.pending();
  });

  this.When(/^User add translation value with max (\d+) character$/, function (arg1, callback) {
    callback.pending();
  });

  this.When(/^Start entering single character in translation values$/, function (callback) {
    callback.pending();
  });

  this.When(/^User click on the culture button for Description field$/, function (callback) {
    group.getDescriptionCultureIcon().click().then(function () {
      callback();
    });
  });

  this.When(/^User selects the culture value from drop down and enters the translation value$/, function (callback) {
    callback.pending();
  });

  this.Then(/^User should be able to view all the existing translation values for the Description field$/, function (callback) {
    group.getCultureAndValues().count().then(function (length) {
      assert.isAbove(length,0);
      callback();
    });
  });

  this.Then(/^Tool tip text on mouse over on the Culture icon will display 'No Translation were define'$/, function (callback) {
    callback.pending();
  });

  this.When(/^Existing translation values list does not fit into the culture pop up$/, function (callback) {
    callback.pending();
  });

  this.When(/^User view a multi\-line translation value on culture pop up$/, function (callback) {
    merchandiseHierarchy.getCultureValues().first().getText().then(function(txt){
      assert.isAbove(txt.length,0);
      callback();
    });
  });

  this.When(/^User click on the Description Culture Button$/, function (callback) {
    group.getDescriptionCultureIcon().click().then(function () {
      callback();
    });
  });

  this.When(/^User enter the description$/, function (callback) {
      descriptionToBeEntered = "description" + Math.random();
      groupPage.getDescriptionTextBox().clear().sendKeys(descriptionToBeEntered).then(function(){
          callback();
      });
  });

  this.When(/^User leave the Description field as Blank$/, function (callback) {
    group.getDescriptionTextBox().sendKeys(" ").then(function(){
      callback();
    });
  });

  this.When(/^User click on add Button$/, function (callback) {
    group.getCultureAddButton().click().then(function () {
      callback();
    });
  });

  this.Then(/^Description field value will be displayed in Default Language \(English\)$/, function (callback) {
      group.getGroupDetailsText().then(function(result){
          group.getDescriptionCultureIcon().click().then(function(){
              group.getCultureViewDefaultText().then(function(result1){
                  assert.include(result1,result);
                  callback();
              });
          });
      });
  });

  this.When(/^User click on culture icon For Description Field$/, function (callback) {
    group.getDescriptionCultureIcon().click().then(function () {
      callback();
    });
  });
};
module.exports = myStepDefinitionsWrapper;