var myStepDefinitionsWrapper = function () {

    var variantGroup = require('../../../pages/variantGroup');
    var actionButtons = require('../../../pages/actionButtons');
    var settings = require('../../../common/settings');
    var commonlib = require('../../../common/commonLib');
    var breadCrumb = require('../../../pages/breadCrumb');
    var grid = require('../../../pages/grid');
    var sideBar = require('../../../pages/sideBar');
    var chai = require(settings.constants.CHAI);
    var assert = chai.assert;

    this.Given(/^View Variant Group Office Screen$/, function (callback) {
        commonlib.open();
        variantGroup.getVariantGroupLink().click().then(function () {
            commonlib.elementChainingAll(variantGroup.getAllItemsFromGrid().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getViewButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^User verify the floating menu enteries on the screen$/, function (callback) {
        variantGroup.getFloatingMenu().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^Floating menu will be available on the screen with 'Variant Group Details' and 'Items' enteries$/, function (callback) {
        variantGroup.getVariantGroupLinkFromFloatingMenu().isEnabled().then(function (result1) {
            assert.isTrue(result1);
            variantGroup.getLowerLevelLink().isEnabled().then(function (result2) {
                assert.isTrue(result2);
                callback();
            });
        });
    });

    this.When(/^User click on 'Items' from the floating menu$/, function (callback) {
        variantGroup.getLowerLevelLink().click().then(function () {
            callback();
        });
    });

    this.Then(/^Screen focus should move to 'Items' section$/, function (callback) {
        variantGroup.getLowerLevelLink().click().then(function () {
            callback();
        });
    });

    this.When(/^User verify the enteries in the Group Details section$/, function (callback) {
        callback();
    });

    this.Then(/^Group Details section will have 'Code','Title','Description','Created Date' and 'Last Update' field$/, function (callback) {
        variantGroup.getCodeHeading().isEnabled().then(function (isCodePresent) {
            assert.isTrue(isCodePresent);
            variantGroup.getTitleHeading().isEnabled().then(function (isTitlePresent) {
                assert.isTrue(isTitlePresent);
                variantGroup.getDescriptionHeading().isEnabled().then(function (isDescriptionPresent) {
                    assert.isTrue(isDescriptionPresent);
                    variantGroup.getCreatedDate().isEnabled().then(function (ifCreateDatePresent) {
                        assert.isTrue(ifCreateDatePresent);
                        variantGroup.getUpdatedDate().isEnabled().then(function (ifUpdatedDatePresent) {
                            assert.isTrue(ifUpdatedDatePresent);
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.Then(/^The Group Details section will be form based section$/, function (callback) {
        callback();
    });

    this.Given(/^View Variant Group Office Screen for a Variant Group which has Items$/, function (callback) {
        commonlib.open();
        variantGroup.getVariantGroupLink().click().then(function () {
            commonlib.elementChainingAll(variantGroup.getAllItemsFromGrid().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getViewButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^User navigates to 'Items' section on the screen$/, function (callback) {
        variantGroup.getLowerLevelLink().click().then(function () {
            callback();
        });
    });

    this.Then(/^The Items section will be of grid type$/, function (callback) {
        variantGroup.getGridSection().getAttribute("class").then(function (attributeValue) {
            assert.isTrue(attributeValue.indexOf("grid") != -1);
            callback();
        });
    });

    this.Then(/^Will show 'Code','Description' for each row in the grid$/, function (callback) {
        grid.getGridHeadings().first().getInnerHtml().then(function (result) {
            assert.include(result, settings.constants.CODE);
        });
        grid.getGridHeadings().get(1).getInnerHtml().then(function (result) {
            assert.include(result, settings.constants.DESCRIPTION);
            callback();
        });

    });

    this.Given(/^View Items Office Screen for a Variant Group which has Items$/, function (callback) {
        commonlib.open();
        variantGroup.getVariantGroupLink().click().then(function () {
            commonlib.elementChainingAll(variantGroup.getAllItemsFromGrid().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getViewButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^The Item section will display all the Items of the current Variant Group as rows in the grid$/, function (callback) {
        variantGroup.getAllItemsFromGrid().count().then(function (length) {
            assert.isAbove(length, 0, "Items are not available which is not expected");
            callback();
        });
    });

    this.Given(/^View Items Office Screen for a Variant Group which has some inactive Items$/, function (callback) {

        commonlib.open();
        variantGroup.getVariantGroupLink().click().then(function () {
            commonlib.elementChainingAll(variantGroup.getAllItemsFromGrid().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getViewButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^A status icon representing Inactive item will displayed next to Description column for each inactive item in the grid$/, function (callback) {
        variantGroup.getInactiveColumnValues().first().getAttribute("class").then(function (element) {
            if (element.indexOf('ng-scope fa fa-ban') === 0) {
                callback();
            }
        });

    });

    this.Then(/^A tool tip text 'Inactive Item' will be displayed on mouse over on each status icon in the grid$/, function (callback) {
        variantGroup.getInactiveColumnValues().first().getAttribute("title").then(function (element) {
            if (element.indexOf('Inactive Item') === 0) {
                callback();
            }
        });

    });

    this.Then(/^The Item section will display total items indication on top of the grid$/, function (callback) {
        var resultElement = false;
        variantGroup.getGridResult().then(function (elements) {
            elements[0].getText().then(function (text) {
                if (text.indexOf("Results") >= 0) {
                    assert.isAbove(text.substring(0, text.indexOf('Results')), 0)
                    callback();
                }
            })
        });
    });

    this.Then(/^Sorting icons will be avaialble on each column in the grid in the Items section$/, function (callback) {
        variantGroup.getColumnsHaveAscendingSortingFeature().then(function (elements) {
            assert.isAbove(elements.length, 0)
            variantGroup.getColumnsHaveDescendingSortingFeature().then(function (elements) {
                assert.isAbove(elements.length, 0);
                callback();
            });
        });
    });

    this.Then(/^Filter option will be avaialble in the grid in the Items section$/, function (callback) {
        variantGroup.getFilterIcon().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.When(/^User verify the default state of the filter icon available in the grid in the Items section$/, function (callback) {
        var resultElement = false;
        variantGroup.getGridResult().then(function (elements) {
            elements[0].getAttribute("class").then(function (className) {
                assert.equal(className, 'filter-button ng-binding active')
                callback();
            });
        });
    });

    this.Given(/^View Variant Group Office Screen for Group which has items$/, function (callback) {
        commonlib.open();
        variantGroup.getVariantGroupLink().click().then(function () {
            commonlib.elementChainingAll(variantGroup.getAllItemsFromGrid().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getViewButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Given(/^View Variant Group Office Screen for a Variant Group$/, function (callback) {
        commonlib.open();
        variantGroup.getVariantGroupLink().click().then(function () {
            commonlib.elementChainingAll(variantGroup.getAllItemsFromGrid().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getViewButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^User will be navigated to respective Item screen in the View mode\.$/, function (callback) {
        variantGroup.getGroupBreadCrumb().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^Breadcrumb path will be Catalog \-> Variant Group > \[Variant Group Title value\]$/, function (callback) {
        variantGroup.getTitleInViewMode().getText().then(function (res) {
            if (res !== '') {
                variantGroup.getBreadCrumbInViewMode().then(function (result) {
                    assert.equal(result, 'Catalog->Variant Groups->' + res);
                    callback();
                });
            }
            else {
                variantGroup.getCodeInViewMode().getText().then(function (res1) {
                    variantGroup.getBreadCrumbInViewMode().then(function (result) {
                        assert.equal(result, 'Catalog->Variant Groups->' + res1);
                        callback();
                    });
                });
            }
        });
    });

    this.Given(/^View Variant Group Office Screen for a group$/, function (callback) {
        commonlib.open();
        variantGroup.getVariantGroupLink().click().then(function () {
            commonlib.elementChainingAll(variantGroup.getAllItemsFromGrid().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getViewButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^Variant Group screen is open in Edit mode$/, function (callback) {
        variantGroup.getVariantGroupDetailsHeading().isDisplayed().then(function () {
            variantGroup.getCodeTextBox().getAttribute('value').then(function (variantItemCodeText) {
                variantGroup.getCodeTextBox().isEnabled().then(function (isEnabled) {
                    assert.isTrue(isEnabled, "Items Code text box in not Enabled which is not as expected");
                    assert.notEqual(variantItemCodeText,'', "Items Code text box is not in Edit mode");
                    callback();
                });
            });
        });
    });

    this.When(/^User verify Sorting feature on each column in the item grid$/, function (callback) {
        variantGroup.getColumnsHaveAscendingSortingFeature().then(function (elements) {
            assert.isAbove(elements.length, 0);
            variantGroup.getColumnsHaveDescendingSortingFeature().then(function (elements) {
                assert.isAbove(elements.length, 0);
                callback();
            });
        });
    });

    this.Then(/^User will be able to sort on each column in the item grid$/, function (callback) {
        var elementText;
        variantGroup.getAllItemsFromGrid().then(function (elements) {
            elements[0].all(by.tagName("td")).first().getText().then(function (text) {
                elementText = text;
                variantGroup.getColumnsHaveDescendingSortingFeature().then(function (elements) {
                    elements[0].click();
                    variantGroup.getAllItemsFromGrid().then(function (elements) {
                        elements[0].all(by.tagName("td")).first().getText().then(function (text) {
                            assert.equal(text, elementText);
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.When(/^User verify Filter option in the item grid$/, function (callback) {
        variantGroup.getFilterIcon().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^User will be able to filter records on each column in the item grid$/, function (callback) {
        variantGroup.getFilterIcon().click().then(function () {
            variantGroup.getSearchBoxes().count().then(function (length) {
                assert.isAbove(length, 0);
                callback();
            });

        });
    });

    this.Then(/^Filter icon will be enabled on the click$/, function (callback) {
        variantGroup.getFilterIcon().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.When(/^User verify the breadcrumb path value of Variant Group Office Screen$/, function (callback) {
        callback();
    });

    this.When(/^User verify the 'Add' action on the tool bar$/, function (callback) {
        actionButtons.getAddButton().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^Add Action button will be available$/, function (callback) {
        actionButtons.getAddButton().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^The Add action button will be enable$/, function (callback) {
        actionButtons.getAddButton().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^Grid will be default sorted alphabaetically on 'Code' column$/, function (callback) {
          callback();
    });

    this.Then(/^Filter icon will be disabled by default for the grid$/, function (callback) {
        var resultElement = false;
        variantGroup.getGridResult().then(function (elements) {
            elements[0].getAttribute("class").then(function (className) {
                assert.equal(className, 'filter-button ng-binding')
                callback();
            })
        });
    });

};
module.exports = myStepDefinitionsWrapper;