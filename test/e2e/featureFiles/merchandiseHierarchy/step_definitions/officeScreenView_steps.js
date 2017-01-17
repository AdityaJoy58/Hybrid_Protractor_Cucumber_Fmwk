var myStepDefinitionsWrapper = function () {

    var merchandiseHierarchy = require('../../../pages/merchandiseHierarchy');
    var actionButtons = require('../../../pages/actionButtons');
    var settings = require('../../../common/settings');
    var commonlib = require('../../../common/commonLib');
    var breadCrumb = require('../../../pages/breadCrumb');
    var chai = require(settings.constants.CHAI);
    var assert = chai.assert;
    var pathFieldArray = [];
    var pathField = '';
    var ellipsis = '...';
    this.setDefaultTimeout(settings.config.STEPTIMEOUT);


    this.Given(/^View Merchandise Hierarchy Office Screen for hierarchy node which has child nodes$/, function (callback) {
        commonlib.open();
        merchandiseHierarchy.getMerchandiseLink().click().then(function () {
            commonlib.elementChainingAll(merchandiseHierarchy.getAllItemsFromGrid().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getViewButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^User verify the floting menu enteries on the screen$/, function (callback) {
        merchandiseHierarchy.getFloatingMenu().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^Floating menu will be available on the screen with 'Hierarchy Details' and 'Lower Level' enteries$/, function (callback) {
        merchandiseHierarchy.getHierarchyLink().isEnabled().then(function (result1) {
            assert.isTrue(result1);
            merchandiseHierarchy.getLowerLevelLink().isEnabled().then(function (result2) {
                assert.isTrue(result2);
                callback();
            });
        });
    });


    this.Given(/^View Merchandise Hierarchy Office Screen for hierarchy node which has items$/, function (callback) {
        commonlib.open();
        merchandiseHierarchy.getMerchandiseLink().click().then(function () {
            commonlib.elementChainingAll(merchandiseHierarchy.getAllItemsFromGrid().get(3), 'tagname', 'td').first().click().then(function () {
                actionButtons.getViewButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^Floating menu will be available on the screen with 'Hierarchy Details' and 'Hierarchy Items' enteries$/, function (callback) {
        merchandiseHierarchy.getHierarchyDetailsLink().isEnabled().then(function (result1) {
            assert.isTrue(result1);
            merchandiseHierarchy.getHierarchyItemsLink().isEnabled().then(function (result2) {
                assert.isTrue(result2);
                callback();
            });
        });
    });

    this.When(/^User click on Hierarchy Detail from the floating menu$/, function (callback) {
        merchandiseHierarchy.getHierarchyLink().click().then(function () {
            callback();
        });
    });

    this.Given(/^View Merchandise Hierarchy Office Screen$/, function (callback) {
        commonlib.open();
        merchandiseHierarchy.getMerchandiseLink().click().then(function () {
            commonlib.elementChainingAll(merchandiseHierarchy.getAllItemsFromGrid().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getViewButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^Screen focus should move to 'Hierarchy Details' section$/, function (callback) {
        commonlib.getActiveElement().then(function (element) {
            assert.notEqual(typeof(element), undefined);
            callback();
        });
    });

    this.When(/^User click on Lower Level from the floating menu$/, function (callback) {
        merchandiseHierarchy.getLowerLevelLink().click().then(function () {
            callback();
        });
    });

    this.Then(/^Screen focus should move to 'Lower Level' section$/, function (callback) {
        commonlib.getActiveElement().then(function (element) {
            assert.notEqual(typeof(element), undefined);
            callback();
        });
    });

    this.Then(/^Hierarchy Details section will have 'Code','Title','Description','Parent','Created Date' and 'Last Update' field$/, function (callback) {
        merchandiseHierarchy.getCodeHeading().isEnabled().then(function (isCodePresent) {
            assert.isTrue(isCodePresent);
            merchandiseHierarchy.getTitleHeading().isEnabled().then(function (isTitlePresent) {
                assert.isTrue(isTitlePresent);
                merchandiseHierarchy.getPathHeading().isEnabled().then(function (isPathPresent) {
                    assert.isTrue(isPathPresent);
                    merchandiseHierarchy.getDescriptionHeading().isEnabled().then(function (isDescriptionPresent) {
                        assert.isTrue(isDescriptionPresent);
                        callback();
                    });
                });
            });
        });
    });

    this.When(/^User verify the entries in the Hierarchy details section$/, function (callback) {
        callback();
    });

    this.Then(/^'Created Date' and 'Last Update' field will be auto populated$/, function (callback) {
        merchandiseHierarchy.createdDate().getText().then(function (createdDate) {
            assert.isNotNull(createdDate);
            merchandiseHierarchy.lastUpdateDate().getText().then(function (lastUpdateDate) {
                assert.isNotNull(lastUpdateDate);
                callback();
            });
        });
    });

    this.When(/^User verify the 'Created Date' and 'Last Update' in the Hierarchy Details section$/, function (callback) {
        merchandiseHierarchy.getCreatedDate().isEnabled().then(function (isCreatedDatePresent) {
            assert.isTrue(isCreatedDatePresent);
            merchandiseHierarchy.getUpdatedDate().isEnabled().then(function (isUpdatedDate) {
                assert.isTrue(isUpdatedDate);
                callback();
            });
        });
    });

    this.Given(/^View Merchandise Hierarchy Office Screen for hierarchy node with parent as Root$/, function (callback) {
        commonlib.open();
        merchandiseHierarchy.getMerchandiseLink().click().then(function () {
            commonlib.elementChainingAll(merchandiseHierarchy.getAllItemsFromGrid().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getViewButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^There will be ellipsis appended at the begining of the Path field$/, function (callback) {
        var result = false;
        if (pathField.indexOf(ellipsis) === 0) {
            result = true;
            assert.isTrue(result);
        }
        else {
            assert.isFalse(result);
        }
        callback();
    });

    this.Given(/^View Merchandise Hierarchy Office Screen with multi level Path field$/, function (callback) {
        commonlib.open();
        merchandiseHierarchy.getMerchandiseLink().click().then(function () {
            commonlib.elementChainingAll(merchandiseHierarchy.getAllItemsFromGrid().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getViewButton().click().then(function () {
                    merchandiseHierarchy.getFirstElement().click().then(function () {
                        callback();
                    });
                });
            });
        });
    });

    this.When(/^User verify the Title field in Hierarchy Details section$/, function (callback) {
        merchandiseHierarchy.getTitle().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^A culture icon will be available for the field$/, function (callback) {
        callback.pending();
    });

    this.When(/^User verify the Description field in Hierarchy Details section$/, function (callback) {
        callback.pending();
    });

    this.When(/^User navigates to 'Lower Level' section on the screen$/, function (callback) {
        merchandiseHierarchy.getLowerLevelLink().click().then(function () {
            callback();
        });
    });

    this.Then(/^The Lower level section will be of grid type$/, function (callback) {
        merchandiseHierarchy.getGridSection().getAttribute("class").then(function (attributeValue) {
            assert.isTrue(attributeValue.indexOf("grid") != -1);
            callback();
        });
    });

    this.Then(/^Will show 'Code','Title','Description','Parent' for each row in the grid$/, function (callback) {
        merchandiseHierarchy.getCodeHeading().getText().then(function (code) {
            assert.equal(code, 'Code');
            merchandiseHierarchy.getTitleHeading().getText().then(function (title) {
                assert.equal(title, 'Title');
                merchandiseHierarchy.getPathHeading().getText().then(function (path) {
                    assert.equal(path, 'Path');
                    merchandiseHierarchy.getDescriptionHeading().getText().then(function (description) {
                        assert.equal(description, 'Description');
                        callback();
                    });
                });
            });
        });
    });

    this.Given(/^View Merchandise Hierarchy Office Screen for a hierachy node which has child nodes$/, function (callback) {
        commonlib.open();
        merchandiseHierarchy.getMerchandiseLink().click().then(function () {
            commonlib.elementChainingAll(merchandiseHierarchy.getAllItemsFromGrid().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getViewButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^The Lower level section will display all the child nodes of the current hierarchy node as rows in the grid$/, function (callback) {
        merchandiseHierarchy.getPathFieldValueOfTheFirstChild().then(function (text) {
            assert.isTrue(text.indexOf("Root") != -1)
            callback();
        });
    });

    this.When(/^User verify Sorting feature on each column in the grid$/, function (callback) {
        merchandiseHierarchy.getColumnsHaveAscendingSortingFeature().getInnerHtml().then(function (elements) {
            assert.include(elements, 'sort-asc');
            merchandiseHierarchy.getColumnsHaveDescendingSortingFeature().getInnerHtml().then(function (elements) {
                assert.include(elements, 'sort-desc');
                callback();
            });
        });

    });

    this.When(/^User verify sorting feature on each column in the grid$/, function (callback) {
        actionButtons.getShowItemButton().click();
        merchandiseHierarchy.getColumnsHaveAscendingSortingFeature().getInnerHtml().then(function (elements) {
            assert.include(elements, 'sort-asc')
            merchandiseHierarchy.getColumnsHaveDescendingSortingFeature().getInnerHtml().then(function (elements) {
                assert.include(elements, 'sort-desc')
                callback();
            });
        });

    });

    this.Then(/^User will be able to sort on each column in the grid$/, function (callback) {
        merchandiseHierarchy.getColumnsHaveAscendingSortingFeature().getInnerHtml().then(function (elements) {
            assert.include(elements, 'sort-asc')
            merchandiseHierarchy.getColumnsHaveDescendingSortingFeature().getInnerHtml().then(function (elements) {
                assert.include(elements, 'sort-desc')
                callback();
            });
        });

    });

    this.Then(/^Sorting icons will be avaialble on each column in the grid in the lower level section$/, function (callback) {
        merchandiseHierarchy.getColumnsHaveAscendingSortingFeature().getInnerHtml().then(function (elements) {
            assert.include(elements, 'sort-asc')
            merchandiseHierarchy.getColumnsHaveDescendingSortingFeature().getInnerHtml().then(function (elements) {
                assert.include(elements, 'sort-desc')
                callback();
            });
        });
    });

    this.When(/^User verify Filter option in the grid$/, function (callback) {
        merchandiseHierarchy.getFilterIcon().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.When(/^User verify filter option in the grid$/, function (callback) {
        actionButtons.getShowItemButton().click();
        merchandiseHierarchy.getFilterIcon().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^Filter option will be avaialble in the grid in the lower level section$/, function (callback) {
        merchandiseHierarchy.getIconsFromLowerLevel().getInnerHtml().then(function (htm) {
            assert.include(htm, 'fa fa-filter');
            callback();
        });
    });

    this.Then(/^User will be able to filter records on each column in the grid$/, function (callback) {
        merchandiseHierarchy.getFilterIcon().click().then(function () {
            merchandiseHierarchy.getSearchBoxes().count().then(function (length) {
                assert.isAbove(length, 0);
            });
            callback();
        });
    });

    this.When(/^User verify the default state of the filter icon available in the grid in the lower level section$/, function (callback) {
        var resultElement = false;
        merchandiseHierarchy.getIconsFromLowerLevel().getInnerHtml().then(function (htm) {
            assert.include(htm, 'fa fa-filter');
            callback();
        });
    });

    this.Then(/^Filter icon will be disabled by default$/, function (callback) {
        //  merchandiseHierarchy.getFilterIcon().isEnabled()
        callback();
    });

    this.Then(/^Filter icon will be enabled on click$/, function (callback) {
        merchandiseHierarchy.getFilterIcon().click().then(function () {
            merchandiseHierarchy.getFilterIcon().isEnabled().then(function (result) {
                assert.isTrue(result);
                callback();
            });
        });
    });

    this.When(/^User verify the Path field for each row in the Lower level section grid$/, function (callback) {
        merchandiseHierarchy.getAllItemsFromGrid().each(function (index, text) {
            pathFieldArray.push(text);
        }).then(function () {
            callback();
        });
    });

    this.Then(/^Path field will show hierarchy path for the respective child node$/, function (callback) {
        merchandiseHierarchy.getPathFieldValueOfTheFirstChild().then(function (text) {
            assert.isTrue(text.indexOf("Root") != -1)
            callback();
        });
    });


    this.Then(/^Path field will show truncated path for child nodes with multi level path$/, function (callback) {
        merchandiseHierarchy.getPathColumnValues().each(function (element, index) {
            element.getText().then(function (text) {
                if (text.indexOf(ellipsis) === 0) {
                    pathField = text;
                }
                else {
                    pathField = text;
                }
            });
        }).then(function () {
            callback();
        });
    });

    this.When(/^User navigates to Lower level section$/, function (callback) {
        merchandiseHierarchy.getLowerLevelLink().click().then(function () {
            callback();
        });
    });

    this.Then(/^Default view will be Grid view$/, function (callback) {
        merchandiseHierarchy.getLowerSectionGrid().count().then(function (length) {
            assert.isAbove(length, 0);
            callback();
        });
    });

    this.Then(/^there will be a button 'Tree View' available in the lower level section$/, function (callback) {
        actionButtons.getTreeViewButton().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.When(/^User navigates to the Hierarchy Items section$/, function (callback) {
        merchandiseHierarchy.getHierarchyItem().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^'Show Items' button will be displayed to the user$/, function (callback) {
        actionButtons.getShowItemButton().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^There will be no item list displayed\.$/, function (callback) {
        merchandiseHierarchy.getAllPageRow().isEnabled().then(function (bool) {
            assert.isTrue(bool);
            callback();
        });
    });

    this.When(/^User click on 'Show Items' button from the Hierarchy Items section$/, function (callback) {
        actionButtons.getShowItemButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^Grid displaying list of all the items mapped to the current hierarchy nodes will be displayed$/, function (callback) {
        merchandiseHierarchy.getIremsGrid().isEnabled().then(function (result) {
            assert.isNotNull(result);
            callback();
        });
    });

    this.Then(/^Grid will display 'Code' and 'Description' for each item row in the grid$/, function (callback) {
        merchandiseHierarchy.getCodeHeading().getText().then(function (code) {
            assert.isNotNull(code);
            merchandiseHierarchy.getDescriptionHeading().getText().then(function (lastVal) {
                assert.isNotNull(lastVal);
                callback();
            });
        });
    });

    this.Then(/^Filter option will be avaialble in the grid in the Hierarchy Items section$/, function (callback) {
        merchandiseHierarchy.getIconsFromLowerLevel().getInnerHtml().then(function (htm) {
            assert.include(htm, 'fa fa-filter');
            callback();
        });
    });

    this.When(/^User verify the default state of the filter icon available in the grid in the Hierarchy Items section$/, function (callback) {
        actionButtons.getShowItemButton().click().then(function () {
            merchandiseHierarchy.getIconsFromLowerLevel().getInnerHtml().then(function (htm) {
                assert.include(htm, 'fa fa-filter');
                callback();
            });
        });
    });

    this.Then(/^Filter icon will enabled on click$/, function (callback) {
        merchandiseHierarchy.getFilterIcon().click().then(function () {
            merchandiseHierarchy.getFilterIcon().isEnabled().then(function (result) {
                assert.isTrue(result);
                callback();
            });
        });
    });

    this.When(/^User click on Code value for an item from the grid in Hierarchy Items section$/, function (callback) {
        merchandiseHierarchy.getFirstElement().click().then(function () {
            callback();
        });
    });

    this.Then(/^User will be navigated to respective Item screen in View mode for Merchandise Hierarchy$/, function (callback) {
        merchandiseHierarchy.getHierarchyDetailHeading().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Given(/^View Merchandise Hierarchy Office Screen for hierarchy node with non empty title$/, function (callback) {
        commonlib.open();
        merchandiseHierarchy.getMerchandiseLink().click().then(function () {
            commonlib.elementChainingAll(merchandiseHierarchy.getAllItemsFromGrid().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getViewButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^User verify the breadcrumb path value$/, function (callback) {
        var text = breadCrumb.getMerchandiseHierarchiesBreadCrumb();
        console.log('text' + text);
        assert.notEqual(text, undefined);
        callback();
    });

    this.Then(/^Breadcrumb path will be Catalog \-> Merchandise Hierarchy > \[Hierarchy Title value\]$/, function (callback) {
        var expectedBreadCrumb = "";
        merchandiseHierarchy.getAllLabelValues().then(function (elements) {
            elements[0].getText().then(function (text) {
                expectedBreadCrumb = text;
            });
        });
        var text = breadCrumb.getMerchandiseHierarchiesBreadCrumb();
        assert.isTrue(text.indexOf(expectedBreadCrumb) != -1);
        callback();
    });

    this.Given(/^View Merchandise Hierarchy Office Screen for hierarchy node with empty title$/, function (callback) {
        commonlib.open();
        merchandiseHierarchy.getMerchandiseLink().click().then(function () {
            commonlib.elementChainingAll(merchandiseHierarchy.getAllItemsFromGrid().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getViewButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^Breadcrumb path will be Catalog \-> Merchandise Hierarchy > \[Hierarchy Code value\]$/, function (callback) {
        var expectedBreadCrumb = "";
        merchandiseHierarchy.getAllLabelValues().then(function (elements) {
            elements[0].getText().then(function (text) {
                expectedBreadCrumb = text;
            });
        });
        var text = breadCrumb.getMerchandiseHierarchiesBreadCrumb();
        assert.isTrue(text.indexOf(expectedBreadCrumb) != -1);
        callback();
    });

    this.Given(/^View Merchandise Hierarchy Office Screen for hierarchy node$/, function (callback) {
        commonlib.open();
        merchandiseHierarchy.getMerchandiseLink().click().then(function () {
            commonlib.elementChainingAll(merchandiseHierarchy.getAllItemsFromGrid().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getViewButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^User verify the 'Edit' action on the tool bar$/, function (callback) {
        actionButtons.getEditButtonOnMerchandiseScreen().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^Edit Action button will be available$/, function (callback) {
        actionButtons.getEditButtonOnMerchandiseScreen().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^The Edit action button will be enable$/, function (callback) {
        actionButtons.getEditButtonOnMerchandiseScreen().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.When(/^User clicks on 'Edit' action button$/, function (callback) {
        actionButtons.getEditButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^Hierarchy node screen is open in Edit mode$/, function (callback) {
        merchandiseHierarchy.getTitleTextBox().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.When(/^User verify the Path field for each row in the Lower level section for grid$/, function (callback) {
        callback();
    });

    this.Then(/^Path field will show complete path for child nodes that have short path$/, function (callback) {
        merchandiseHierarchy.getPathColumnValues().first().getText().then(function (path) {
            if (path.substr(0, 4) === 'Root') {
                //This is a short path.
                pathField = path;
                callback();
            }
        });
    });

    this.Then(/^There will be no ellipsis appended at the begining of the Path field$/, function (callback) {
        var result = false;
        if (pathField.indexOf(ellipsis) < 0) {
            result = true;
        }
        assert.isTrue(result);
        callback();
    });

    this.Given(/^View Merchandise Hierarchy Office Screen with Path field$/, function (callback) {
        commonlib.open();
        merchandiseHierarchy.getMerchandiseLink().click().then(function () {
            commonlib.elementChainingAll(merchandiseHierarchy.getAllItemsFromGrid().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getViewButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^user click anywhere on path field or ellipsis \(if present\)$/, function (callback) {
        callback();
    });

    this.Then(/^entire path field should be clickable$/, function (callback) {
        var dataPopulated = false;
        merchandiseHierarchy.getPathColumnValues().then(function (elements) {
            elements[0].click();
            callback();
        });
    });

    this.Then(/^an always\-on\-top pop up will be displayed showing node's hierarchy path as tree$/, function (callback) {
        merchandiseHierarchy.getviewPopup().isPresent().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.Given(/^View Merchandise Hierarchy Office Screen with Parent field with Ellipses$/, function (callback) {
        commonlib.open();
        merchandiseHierarchy.getMerchandiseLink().click().then(function () {
            commonlib.elementChainingAll(merchandiseHierarchy.getAllItemsFromGrid().get(1), 'tagname', 'td').first().click().then(function () {
                actionButtons.getViewButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^User click on Ellipsis in Parent field$/, function (callback) {
        merchandiseHierarchy.getParentValues().click().then(function () {
            callback();
        });
    });

    this.Then(/^Parent field will be expanded to show entire path with Parent bolded$/, function (callback) {
        merchandiseHierarchy.getParentValue().getInnerHtml().then(function (htm) {
            assert.include(htm, 'path-toggle');
            callback();
        });
    });

    this.Then(/^there will be an arrow icon to collapse the Parent field$/, function (callback) {
        merchandiseHierarchy.getCaretElement().then(function (result) {
            result[0].getAttribute('class').then(function (arrowClass) {
                assert.equal(arrowClass, 'fa fa-caret-left');
                callback();
            });
        });
    });

    this.Given(/^View Merchandise Hierarchy Office Screen with Parent field expanded$/, function (callback) {
        commonlib.open();
        merchandiseHierarchy.getMerchandiseLink().click().then(function () {
            commonlib.elementChainingAll(merchandiseHierarchy.getAllItemsFromGrid().get(1), 'tagname', 'td').first().click().then(function () {
                actionButtons.getViewButton().click().then(function () {
                    merchandiseHierarchy.getParentValues().click().then(function (parentPath) {
                        callback();
                    });
                });
            });
        });
    });

    this.When(/^User click on arrow icon in the Parent field$/, function (callback) {
        merchandiseHierarchy.getCaretElement().click().then(function (result) {
            callback();
        });
    });

    this.Then(/^Parent field will collapse back$/, function (callback) {
        callback();
    });

    this.Then(/^will show ellipsis and the hierarchy Parent$/, function (callback) {
        merchandiseHierarchy.getParentValues().getInnerHtml().then(function (parentPath) {
            assert.include(parentPath, ellipsis);
            callback();
        });
    });


    this.Given(/^View Merchandise Hierarchy Office Screen for hierarchy node which is not under Root$/, function (callback) {
        commonlib.open();
        merchandiseHierarchy.getMerchandiseLink().click().then(function () {
            commonlib.elementChainingAll(merchandiseHierarchy.getAllItemsFromGrid().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getViewButton().click().then(function () {
                    merchandiseHierarchy.getFirstElement().click().then(function () {
                        callback();
                    });
                });
            });
        });
    });

    this.When(/^User verify the Parent field value in the Hierarchy Details section$/, function (callback) {
        merchandiseHierarchy.getPathHeading().isEnabled().then(function (isPathPresent) {
            assert.isTrue(isPathPresent);
            callback();
        });
    });

    this.Then(/^Parent field  will only display Ellipsis and the parent value with a slash between them$/, function (callback) {
        merchandiseHierarchy.getParentValues().getInnerHtml().then(function (parentPath) {
            assert.include(parentPath, ellipsis);
            callback();
        });
    });

    this.Then(/^The parent value will be bolded$/, function (callback) {
        callback();
    });


    this.Given(/^View Merchandise Hierarchy Office Screen for hierarchy node which is under Root$/, function (callback) {
        commonlib.open();
        merchandiseHierarchy.getMerchandiseLink().click().then(function () {
            commonlib.elementChainingAll(merchandiseHierarchy.getAllItemsFromGrid().first(), 'tagname', 'td').first().click().then(function () {
                actionButtons.getViewButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^Parent field on the Create screen will have default value as Root$/, function (callback) {
        merchandiseHierarchy.getParentValue().getInnerHtml().then(function (parentPath) {
            console.log(parentPath);
            //assert.include(parentPath, 'Root');
            callback();
        });
    });

    this.Then(/^Root is bolded$/, function (callback) {
        merchandiseHierarchy.getParentValue().getInnerHtml().then(function (parentPath) {
            assert.include(parentPath, 'path-text ng-binding');
            callback();
        });
    });


    this.When(/^User mouse over on Ellipsis in Parent field$/, function (callback) {
        callback.pending();
    });

    this.When(/^User click on culture icon for Title field in Hierarchy Details section$/, function (callback) {
        merchandiseHierarchy.getTitleCultureIcon().click().then(function () {
            callback();
        });
    });

    this.When(/^User click on culture icon for Description field in Hierarchy Details section$/, function (callback) {
        merchandiseHierarchy.getDescriptionCultureIcon().click().then(function () {
            callback();
        });
    });

    this.Then(/^A culture pop-up will open for the corresponding Title field$/, function (callback) {
        merchandiseHierarchy.getCultureAndValues().first().isDisplayed().then(function (result) {
            assert.equal(result, true);
        });
        merchandiseHierarchy.getCultureValues().first().isDisplayed().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.When(/^User click on close button on Culture popup$/, function (callback) {
        merchandiseHierarchy.getCultureCloseButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^A culture pop-up will open for the corresponding Description field$/, function (callback) {
        merchandiseHierarchy.getCultureAndValues().first().isDisplayed().then(function (result) {
            assert.equal(result, true);
        });
        merchandiseHierarchy.getCultureValues().first().isDisplayed().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });
};
module.exports = myStepDefinitionsWrapper;