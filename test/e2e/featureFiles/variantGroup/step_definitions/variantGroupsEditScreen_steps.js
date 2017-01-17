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

    this.Given(/^Edit Variant Group Office Screen$/, function (callback) {
        commonlib.open();
        variantGroupPage.getVariantGroupLink().click().then(function () {
            commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getEditButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Given(/^Edit Variant Group Office Screen for a Variant Group when no items are associated to the Variant Group$/, function (callback) {
        commonlib.open();
        variantGroupPage.getVariantGroupLink().click().then(function () {
            actionButtons.getAddButton().click().then(function () {
                variantGroupPage.getCodeTextBox().sendKeys(commonlib.getCurrentDateTimeString()).then(function () {
                    actionButtons.getSaveButton().click().then(function () {
                        callback();
                    });
                })
            });
        });
    });

    this.Given(/^Edit Variant Group Office Screen for a Variant Group when items are associated to the Variant Group$/, function (callback) {
        commonlib.open();
        variantGroupPage.getVariantGroupLink().click().then(function () {
            commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getEditButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^User will be navigated to respective Item screen in View mode\.$/, function (callback) {
        variantGroupPage.getGroupBreadCrumb().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^User will be able to filter records on each Column in the grid for variant groups in Edit mode$/, function (callback) {
        variantGroupPage.getFilterIcon().click().then(function () {
            variantGroupPage.getSearchBoxes().count().then(function (length) {
                assert.isAbove(length, 0);
                variantGroupPage.onCancel().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^Variant Group will be saved$/, function (callback) {
        callback();
    });

    this.Then(/^Variant Group screen will stay in Edit mode$/, function (callback) {
        browser.getCurrentUrl().then(function (result) {
            assert.include(result.toLowerCase(), 'variantgroup/edit');
            callback();
        });
    });

    this.Then(/^Variant Group will not be saved$/, function (callback) {
        callback();
    });

    this.Then(/^User will stay on Edit Variant Group office screen\.$/, function (callback) {
        variantGroupPage.getCodeTextBox().getText().then(function (newText) {
            assert.isNotNull(newText);
            callback();
        });
    });

    this.Then(/^Variant Group will not be Edited$/, function (callback) {
        callback();
    });

    this.When(/^User verify the entries in the Variant Group Details section$/, function (callback) {
        variantGroupPage.getVariantGroupDetailsHeading().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.When(/^User verify the breadcrumb Path value$/, function (callback) {
        breadCrumb.getBreadCrumbText().then(function (breadCrumbText) {
            assert.notEqual(breadCrumbText, undefined);
            callback();
        });
    });

    this.Then(/^Error message will be displayed informing user that record with the Same Code already exist$/, function (callback) {
        variantGroupPage.getSameCodeErrorMessage().isDisplayed().then(function (result) {
            assert.isTrue(result);
            variantGroupPage.getSameCodeErrorMessage().getText().then(function (errorMessageForSameCode) {
                assert.equal(errorMessageForSameCode, settings.constants.ERROR_MESSAGE_FOR_SAME_VARIANT_GROUP_CODE, "Variant Group same code already exist message is not as expected");
                callback();
            });
        });
    });

    this.Then(/^Notification will be displayed to user that the Record was Saved Successfully$/, function (callback) {
        variantGroupPage.getVariantGroupUpdatedNotification().getOuterHtml().then(function (result) {
            assert.include(result.toLowerCase(), 'variant group updated');
            callback();
        });
    });

    this.When(/^User enters all the valid information in variant Group edit page$/, function (callback) {
        variantGroupPage.getTitleTextBox().clear().sendKeys("title");
        variantGroupPage.getDescriptionTextBox().clear().sendKeys("description");
        callback();
    });

    this.When(/^User enters an existing code data in Code field in Variant Group Edit screen$/, function (callback) {
        variantGroupPage.getCodeTextBox().clear().sendKeys(settings.constants.EXISTING_GROUP_CODE).then(function () {
            variantGroupPage.getTitleTextBox().clear().sendKeys(settings.constants.DEFAULT_CULTURE_TITLE_VALUE).then(function () {
                variantGroupPage.getDescriptionTextBox().clear().sendKeys(settings.constants.DEFAULT_CULTURE_DESCRIPTION_VALUE).then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^The Variant Group item grid will display following columns for each record row: 'Code' and 'Description'$/, function (callback) {
        grid.getGridHeadings().first().getText().then(function (result) {
            assert.equal(result, settings.constants.CODE,"Code text in Column is not as Expected");
            grid.getGridHeadings().get(1).getText().then(function (result) {
                assert.equal(result, settings.constants.DESCRIPTION,"Description text in Column is not as Expected");
                variantGroupPage.onCancel().click().then(function () {
                    callback();
                });
            });
        });
    });
};
module.exports = myStepDefinitionsWrapper;