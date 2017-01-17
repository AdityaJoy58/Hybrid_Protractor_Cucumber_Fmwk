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
    this.mode = '';
    var leafNode = '';
    var parentNodeValue = '';
    var nodeBackGroundColor = '';
    var expectedResultDictionary = {};

    this.Given(/^Create Merchandise Hierarchy screen$/, function (callback) {
        commonlib.open();
        this.mode = 'create';
        merchandiseHierarchy.openViewScreen().then(function () {
            actionButtons.getAddButton().click().then(function () {
                callback();
            });
        });
    });

    this.When(/^User click on 'Set' button$/, function (callback) {
        actionButtons.getSetButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^Hierarchy Tree Picker pop up will be displayed$/, function (callback) {
        merchandiseHierarchy.getPopUp().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        })
    });

    this.Then(/^The Pop\-up title will be 'Select Parent'$/, function (callback) {
        merchandiseHierarchy.getPopUpTitle().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Given(/^Edit Merchandise Hierarchy screen$/, function (callback) {
        commonlib.open();
        this.mode = 'edit';
        merchandiseHierarchy.openViewScreen().then(function () {
            merchandiseHierarchy.getCheckBox().click().then(function () {
                actionButtons.getEditButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^User click on 'change' button$/, function (callback) {
        actionButtons.getChangeButton().click().then(function () {
            callback();
        });
    });

    this.When(/^User open the Merchandise Hierarchy tree picker pop up$/, function (callback) {
        if (this.mode == 'create') {
            actionButtons.getSetButton().click().then(function () {
                callback();
            });
        }
        else {
            actionButtons.getChangeButton().click().then(function () {
                callback();
            });
        }
    });

    this.Then(/^Tree Picker pop\-up is displayed$/, function (callback) {
        merchandiseHierarchy.getPopUp().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^For each hierarchy node in the Tree Picker, the node lable will be the hierarchy node Title$/, function (callback) {
        merchandiseHierarchy.getPopUpTitle().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^'Current node's path' field in the pop\-up will display the hierarchy path for the selected hierarchy node$/, function (callback) {
        merchandiseHierarchy.getMerchandiseTitle().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^By default all the hierarchy node in the pop\-up will be collapsed$/, function (callback) {
        callback.pending();
    });

    this.Given(/^Hierarchy Tree picker pop up is opened$/, function (callback) {
        commonlib.open();
        this.mode = 'edit';
        merchandiseHierarchy.openViewScreen().then(function () {
            merchandiseHierarchy.getCheckBox().click().then(function () {
                actionButtons.getEditButton().click().then(function () {
                    actionButtons.getChangeButton().click().then(function () {
                        callback();
                    });
                });
            });
        });
    });

    this.When(/^User select a hierarchy node$/, function (callback) {
        merchandiseHierarchy.getNodeItems().first().click().then(function () {
            callback();
        });
    });

    this.Then(/^The selected node will get highlighted$/, function (callback) {
        callback.pending();
    });

    this.When(/^A node in hierarchy has descendants$/, function (callback) {
        merchandiseHierarchy.getAllNodeArrows().then(function (elements) {
            merchandiseHierarchy.getChildNodes(elements[0]).then(function (childElements) {
                assert.isDefined(childElements);
                callback();
            });
        });
    });

    this.When(/^The hierarchy node is in collapsed mode$/, function (callback) {
        merchandiseHierarchy.getAllNodeArrows().then(function (elements) {
            assert.isAbove(elements.length, 0);
            callback();
        });
    });

    this.Then(/^The hierarchy node will include a "\+" icon next to it$/, function (callback) {
        merchandiseHierarchy.getAllNodeArrows().then(function (elements) {
            assert.isAbove(elements.length, 0);
            callback();
        });
    });

    this.Then(/^The hierarchy node will be bolded$/, function (callback) {
        callback.pending();
    });

    this.When(/^The hierarchy node is in expanded mode$/, function (callback) {
        callback.pending();
    });

    this.Then(/^The hierarchy node will include a "\-" icon next to it$/, function (arg1, callback) {
        callback.pending();
    });

    this.When(/^A node in hierarchy does not contain a descendants$/, function (callback) {
        merchandiseHierarchy.getAllNodeArrows().first().click().then(function (elements) {
            merchandiseHierarchy.getAllNodeArrows().then(function (childs) {
                leafNode = childs[0];
            });
            merchandiseHierarchy.getAllNodeArrows().last().click().then(function () {
                callback();
            });
        });
    });


    this.Then(/^The hierarchy node will not include any option to expand\/collapse$/, function (callback) {
        merchandiseHierarchy.getChildNodes(leafNode).then(function (elements) {
            assert.isBelow(elements.length, 1);
            callback();
        });
    });

    this.When(/^User click on '\+' icon for a hierarchy node which has descendants$/, function (callback) {
        merchandiseHierarchy.getAllNodeArrows().first().click().then(function (elements) {
            merchandiseHierarchy.getAllNodeArrows().then(function (childs) {
                leafNode = childs[0];
            });
            merchandiseHierarchy.getAllNodeArrows().last().click().then(function () {
                callback();
            });
        });
    });

    this.Then(/^Hierarchy node will be expanded$/, function (callback) {
        merchandiseHierarchy.getAllNodeArrows().then(function (elements) {
            assert.isAbove(elements.length, 0);
            callback();
        })
    });

    this.Then(/^Direct child under hierarchy node will be displayed$/, function (callback) {
        merchandiseHierarchy.getChildNodes(leafNode).then(function (elements) {
            assert.isDefined(elements);
            callback();
        })
    });

    this.When(/^User click on label for hierarchy node which has descendants$/, function (callback) {
        merchandiseHierarchy.getNodeItems().first().click().then(function () {
            callback();
        });
    });

    this.When(/^User click on '\-' icon for a hierarchy node which has descendants and is expanded$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Hierarchy node will be collapsed$/, function (callback) {
        callback.pending();
    });

    this.Then(/^All the hierarchy under the hierarchy node will be hidden$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Hierarchy Tree picker pop up will be displayed$/, function (callback) {
        merchandiseHierarchy.getPopUp().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^The default value of the Parent field will be displayed as value for 'Current Node's path' in the Tree picker pop up$/, function (callback) {
        merchandiseHierarchy.getMerchandiseTitle().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^The 'Set' button default state will be disabled$/, function (callback) {
        var result = commonlib.checkElementIsClickable(actionButtons.getSetButton());
        assert.isTrue(result);
        callback();
    });

    this.Then(/^'Set' button will be enabled$/, function (callback) {
        actionButtons.getSetButton().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^The current value of the Parent field will be displayed as value for 'Current Node's path' in the Tree picker pop up$/, function (callback) {
        merchandiseHierarchy.getMerchandiseTitle().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^The 'Change' button default state will be disabled$/, function (callback) {
        var result = commonlib.checkElementIsClickable(actionButtons.getChangeButton());
        assert.isTrue(result);
        callback();
    });

    this.Given(/^Hierarchy Tree picker pop up is opened from Edit Merchandise Hierarchy screen$/, function (callback) {
        commonlib.open();
        this.mode = 'edit';
        merchandiseHierarchy.openViewScreen().then(function () {
            merchandiseHierarchy.getLastCheckBox().click().then(function () {
                actionButtons.getEditButton().click().then(function () {
                    merchandiseHierarchy.getParentValue().getText().then(function (parentValue) {
                        expectedResultDictionary.cultureDropdownValue = parentValue;
                        actionButtons.getChangeButton().click().then(function () {
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.Then(/^'Change' button will be enabled$/, function (callback) {
        actionButtons.getChangeButton().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.When(/^User expanded hierarchy node's to select one of the hierarchy node from the hierarchy$/, function (callback) {
        merchandiseHierarchy.getAllNodeArrows().then(function (elements) {
            merchandiseHierarchy.getNodeItems().last().click().then(function (elements) {
                callback();
            });
        });
    });

    this.When(/^User click on 'Cancel' button$/, function (callback) {
        actionButtons.getCloseButton().click().then(function () {
            callback();
        });
    });

    this.Then(/^Selected hierarchy node will not be set as Parent for hierarchy node under creation$/, function (callback) {
        merchandiseHierarchy.getParentValue().getText().then(function (txt) {
            assert.equal(txt, parentNodeValue);
            callback();
        });
    });

    this.Then(/^Hierarchy Tree picker pop up will be closed$/, function (callback) {
        merchandiseHierarchy.checkPopupIsPresent().then(function (result) {
            assert.isFalse(result);
            callback();
        });
    });

    this.Then(/^Selected hierarchy node will not be set as Parent for hierarchy node under Edit$/, function (callback) {
        merchandiseHierarchy.getParentValue().getText().then(function (txt) {
            assert.notEqual(txt, parentNodeValue);
            callback();
        });
    });

    this.Then(/^Selected hierarchy node will not set as Parent for hierarchy node under Edit$/, function (callback) {
        merchandiseHierarchy.getParentValue().getText().then(function (txt) {
            assert.equal(txt, parentNodeValue);
            callback();
        });
    });

    this.Then(/^Selected hierarchy node will be set as Parent for hierarchy node under creation$/, function (callback) {
        merchandiseHierarchy.getParentValue().getText().then(function (txt) {
            assert.notEqual(txt, parentNodeValue);
            callback();
        });
    });

    this.Then(/^Selected hierarchy node will be set as Parent for hierarchy node under Edit$/, function (callback) {
        merchandiseHierarchy.getParentValue().getText().then(function (txt) {
            assert.notEqual(txt, expectedResultDictionary.cultureDropdownValue);
            callback();
        });
    });

    this.Then(/^All the hierarchy under the current hierarchy will move as one unit under the hierarchy node selected in the Tree picker pop up$/, function (callback) {
        callback.pending();
    });

    this.When(/^User expands hierarchy nodes$/, function (callback) {
        merchandiseHierarchy.getParentValue().getText().then(function (txt) {
            parentNodeValue = txt;
        });
        merchandiseHierarchy.getAllNodeArrows().then(function (elements) {
            merchandiseHierarchy.getNodeItems().last().click().then(function (elements) {
                callback();
            });
        });
    });

    this.Then(/^Any hierarchy which is not allowed for selection will not be displayed in the hierarchy tree$/, function (callback) {
        callback.pending();
    });

    this.When(/^User verify search feature on the Tree picker pop up$/, function (callback) {
        merchandiseHierarchy.getSearchBox().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^There will be a Search Text box available on the Hierarchy Tree picker pop up$/, function (callback) {
        merchandiseHierarchy.getSearchBox().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^The default text in the text box will be 'Type to Search'$/, function (callback) {
        merchandiseHierarchy.getSearchBox().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.When(/^User start typing in the search text box$/, function (callback) {
        merchandiseHierarchy.getSearchBox().sendKeys("t").then(function () {
            callback();
        });
    });

    this.Then(/^Search will start as user type starting from 2nd character$/, function (callback) {
        merchandiseHierarchy.getSearchBox().sendKeys("i").then(function () {
            callback();
        });
    });

    this.Then(/^The search result will be presented in a flat list$/, function (callback) {
        merchandiseHierarchy.getHighlightedTextList().isEnabled().then(function (result) {
            assert.isTrue(result[0]);
            callback();
        });
    });

    this.Given(/^Hierarchy Tree picker pop up is opened with search result displayed$/, function (callback) {
        commonlib.open();
        this.mode = 'edit';
        merchandiseHierarchy.openViewScreen().then(function () {
            merchandiseHierarchy.getCheckBox().click().then(function () {
                actionButtons.getEditButton().click().then(function () {
                    actionButtons.getChangeButton().click().then(function () {
                        merchandiseHierarchy.getSearchBox().isEnabled().then(function (result) {
                            assert.isTrue(result);
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.When(/^User verify the search result$/, function (callback) {
        merchandiseHierarchy.getSearchBox().sendKeys("t").then(function () {
            merchandiseHierarchy.getSearchBox().sendKeys("i").then(function () {
                merchandiseHierarchy.getHighlightedTextList().isEnabled().then(function (result) {
                    assert.isTrue(result[0]);
                    callback();
                });
            });
        });
    });

    this.Then(/^Search result will display list of hierarchy node presenting merchandise hierarchy title and its path \(upper levels\) for each result in the list$/, function (callback) {
        merchandiseHierarchy.getHighlightedTextList().then(function (elements) {
            assert.isAbove(elements.length, 0);
            callback();
        });
    });

    this.Then(/^According to user’s input, text will be highlighted for each word containing input string$/, function (callback) {
        merchandiseHierarchy.getHighlightedTextList().then(function (elements) {
            assert.isAbove(elements.length, 0);
            callback();
        });
    });

    this.Then(/^A clear icon will be added to search field$/, function (callback) {
        merchandiseHierarchy.getClearIcon().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        })
    });

    this.Then(/^Clicking clear icon will clear the search$/, function (callback) {
        merchandiseHierarchy.getClearIcon().click().then(function () {
            merchandiseHierarchy.getSearchBox().getText().then(function (txt) {
                assert.equal(txt.length, 0);
                callback();
            })
        });
    });

    this.Then(/^Matching entries will be displayed in the search result list$/, function (callback) {
        merchandiseHierarchy.getHighlightedTextList().getInnerHtml().then(function (result) {
            assert.isAbove(result.length,0);
            callback();
        })
    });

    this.Then(/^Total records indication will be displayed showing the number of matching results$/, function (callback) {
        merchandiseHierarchy.getSearchResultsIndicator().getText().then(function (txt) {
            assert.isTrue(txt.indexOf("Result") != -1);
            callback();
        })
    });

    this.When(/^User tap to select one of the merchandise hierarchy node from the search result$/, function (callback) {
        merchandiseHierarchy.getNodeItems().then(function (elements) {
            nodeBackGroundColor = elements[0].getCssValue("background-color");
            elements[0].click();
            callback();
        });
    });

    this.Then(/^The selected hierarchy node will be highlighted$/, function (callback) {
        merchandiseHierarchy.getNodeItems().then(function (elements) {
            assert.notEqual(elements[0].getCssValue("background-color"), nodeBackGroundColor);
            callback();
        });
    });

    this.Then(/^The selected hierarchy node will be set as Parent for the current hierarchy when user click on 'Set'\/'Change' button$/, function (callback) {
        var txt = '';
        merchandiseHierarchy.getNodeItemText().then(function (text) {
            txt = text;
            actionButtons.getPopUpChangeButton().click().then(function () {
                merchandiseHierarchy.checkPopupIsPresent().then(function (result) {
                    assert.isFalse(result);
                    merchandiseHierarchy.getParentValue().getText().then(function (newText) {
                        assert.notEqual(txt, newText);
                        callback();
                    });
                })
            });
        });

    });

    this.Then(/^Any matching hierarchy which is not allowed for selection will not be displayed in the search result list$/, function (callback) {
        var result = true;
        merchandiseHierarchy.getHighlightedTextList().each(function (element, index) {
            element.getText().then(function (txt) {
                if (txt.toLowerCase() != "t")
                    result = false;
                assert.isTrue(result);
                callback();
            });
        });
    });

    this.When(/^User select child node of the current hierarchy node as parent$/, function (callback) {
        merchandiseHierarchy.getNodeItems().then(function (elements) {
            nodeBackGroundColor = elements[0].getCssValue("background-color");
            elements[0].click();
            callback();
        });
    });

    this.Then(/^Error message will be displayed informing user that the selected node is invalid selection for Parent node$/, function (callback) {
        callback.pending();
    });

    this.When(/^User click on label for hierarchy node Which has descendants and is expanded$/, function (callback) {
        callback.pending();
    });


    this.Then(/^Hierarchy node will be Expanded$/, function (callback) {
        callback.pending();
    });


    this.Given(/^Hierarchy Tree picker pop up is opened from Create Merchandise Hierarchy screen$/, function (callback) {
        commonlib.open();
        this.mode = 'create';
        merchandiseHierarchy.openViewScreen().then(function () {
            actionButtons.getAddButton().click().then(function () {
                merchandiseHierarchy.getParentValue().getText().then(function (txt) {
                    parentNodeValue = txt;
                });
                actionButtons.getSetButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^User click on 'set' button$/, function (callback) {
        actionButtons.getPopUpSetButton().click().then(function () {
            callback();
        });
    });

    this.When(/^User clicks on 'Change' button$/, function (callback) {
        actionButtons.getPopUpChangeButton().click().then(function () {
            callback();
        });
    });


    this.Given(/^Hierarchy Tree picker pop up is open from Create Merchandise Hierarchy screen$/, function (callback) {
        callback.pending();
    });

    this.Given(/^Hierarchy Tree picker pop up is open$/, function (callback) {
        callback.pending();
    });

    this.Given(/^Hierarchy Tree picker pop up is open from Edit Merchandise Hierarchy screen$/, function (callback) {
        callback.pending();
    });

    this.Given(/^Hierarchy Tree picker Pop Up is opened$/, function (callback) {
        callback.pending();
    });

    this.getTreePickerHighlightedItem = function () {
        var temp = commonlib.getElement("css", ".tree-view")
        return commonlib.elementChaining(temp, 'css', '.selected');
    }
};
module.exports = myStepDefinitionsWrapper;