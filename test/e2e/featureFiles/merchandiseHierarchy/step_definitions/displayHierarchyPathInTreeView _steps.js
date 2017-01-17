/**
 * Created by ab250553 on 2/10/2016.
 */
var myStepDefinitionsWrapper = function () {

    var merchandiseHierarchy = require('../../../pages/merchandiseHierarchy');
    var  dynamicAttr =  require('../../../pages/dynamicAttribute');
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
    var leafNode = '';
    var nodeText = '';
    var expectedResultDictionary = {};

    this.Given(/^User is on Merchandise Hierarchy View screen$/, function (callback) {
        commonlib.open();
        merchandiseHierarchy.openViewScreen().then(function () {
            merchandiseHierarchy.getSecondCheckBox().click().then(function () {
                actionButtons.getViewButton().click().then(function () {
                    callback();
                });
            });
        });
    });

    this.When(/^User click on 'Path' field for a hierarchy child node from lower level section$/, function (callback) {
        merchandiseHierarchy.getPathColumnValues().first().click().then(function () {
            callback();
        });
    });

    this.Then(/^An always\-on\-top pop up will be displayed$/, function (callback) {
        merchandiseHierarchy.getPopUp().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.When(/^User click on 'Path' field for a hierarchy child node from lower level section to open on\-top pop up$/, function (callback) {
        merchandiseHierarchy.getPathColumnValues().first().click().then(function () {
            callback();
        });

    });

    this.Then(/^On\-top pop up will be closed when user click on 'Close' button$/, function (callback) {
        actionButtons.getCloseButton().isEnabled().then(function (result) {
            assert.isTrue(result);
            actionButtons.getCloseButton().click().then(function () {
                callback();
            });
        });
    });

    this.Then(/^The on\-top pop up will display hierarchy tree with selected node's direct upper path up to the top level node$/, function (callback) {
        callback.pending();
    });

    this.When(/^User click on 'Path' field for a hierarchy child node which is a leaf node from lower level section to open on\-top pop up$/, function (callback) {
        merchandiseHierarchy.getPathColumnValues().last().click().then(function (elements) {
            callback();
        });
    });

    this.Then(/^The hierarchy tree will not show any items under the selected node in the hierarchy tree$/, function (callback) {
        callback.pending();
    });

    this.When(/^User click on 'Path' field for a hierarchy child node from lower level section \(which has further child\) to open on\-top pop up$/, function (callback) {
        merchandiseHierarchy.getPathColumnValues().first().click().then(function (elements) {
            callback();
        });
    });

    this.Then(/^The current hierarchy node which has further descendants will show "\+" icon indicating that the node is collapsed$/, function (callback) {
        merchandiseHierarchy.getTreeNodeList().first().getAttribute('class').then(function (result) {
            assert.notInclude(result, 'expanded');
        });
        merchandiseHierarchy.getAllNodeArrows().first().click().then(function () {
        });
        merchandiseHierarchy.getTreeNodeList().first().getAttribute('class').then(function (result) {
            assert.include(result, 'expanded');
            callback();
        });
    });

    this.Then(/^Any parent node of current hierarchy node which is expanded will show "\-" icon indicating that the node is expanded$/, function (callback) {
        merchandiseHierarchy.getAllNodeArrows().first().click().then(function () {
        });
        merchandiseHierarchy.getTreeNodeList().first().getAttribute('class').then(function (result) {
            assert.include(result, 'expanded');
            callback();
        });
    });

    this.Then(/^The On\-Top pop up will show hierarchy Tree with current selected hierarchy node as highlighted$/, function (callback) {
        callback.pending();
        merchandiseHierarchy.getPopUp().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^There will be a quick view icon "([^"]*)" next to the current node$/, function (arg1, callback) {
        merchandiseHierarchy.getQuickOpenIcons().then(function (elements) {
            assert.isAbove(elements.length, 0);
            callback();
        });
    });

    this.When(/^User mouse over on any node in the hierarchy tree in pop up$/, function (callback) {
        commonlib.mouseMove(merchandiseHierarchy.getNodeItems().last());
        callback();
    });

    this.Then(/^Node under mouse over will also be highlighted$/, function (callback) {
        callback.pending();
    });

    this.Then(/^A quick view icon "([^"]*)" will also be displayed next to node$/, function (arg1, callback) {
        merchandiseHierarchy.getQuickOpenIcons().then(function (elements) {
            assert.isAbove(elements.length, 0);
            callback();
        });
    });

    this.Then(/^On\-Top pop up will be displayed$/, function (callback) {
        merchandiseHierarchy.getPopUp().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });

    this.When(/^User click on a hierarchy node which is in collapse mode$/, function (callback) {
        merchandiseHierarchy.getAllNodeArrows().count().then(function (result) {
            merchandiseHierarchy.getAllNodeArrows().first().click().then(function () {
                callback();
            });
        });
    });

    this.Then(/^The hierarchy node will expand$/, function (callback) {
        merchandiseHierarchy.getAllNodeArrows().count().then(function (result) {
            assert.isAbove(result, 1);
            callback();
        });
    });

    this.Then(/^The hierarchy node will collapse again when user again click on the hierarchy node$/, function (callback) {
        merchandiseHierarchy.getAllNodeArrows().count().then(function (result) {
            assert.isAbove(result, 1);
            callback();
        });
    });

    this.When(/^User click on any hierarchy node$/, function (callback) {
        merchandiseHierarchy.getNodeItems().first().click().then(function () {
            callback();
        });
    });

    this.Then(/^The selected node is highlighted$/, function (callback) {
        merchandiseHierarchy.getTreePickerHighlightedItem().getText().then(function (result) {
            merchandiseHierarchy.getNodeItems().first().getText().then(function (res) {
                assert.equal(result, res);
                callback();
            });
        });
    });

    this.When(/^User mouse over on any hierarchy node and click on the quick view icon$/, function (callback) {
        commonlib.mouseMove(merchandiseHierarchy.getNodeItems().first());
        merchandiseHierarchy.getNodeItemText().getText().then(function (pathCodeText) {
            merchandiseHierarchy.getQuickOpenIcons().then(function (elements) {
                assert.isAbove(elements.length, 0);
                merchandiseHierarchy.getQuickOpenIcons().first().click().then(function () {
                    expectedResultDictionary.pathCodeText = pathCodeText;
                    callback();
                });
            });
        });
    });

    this.Then(/^On\-Top pop up will be closed$/, function (callback) {
        dynamicAttr.getCultureIconInAddEditMode().isPresent().then(function (result) {
            assert.equal(result, true);
            callback();
        });
    });

    this.Then(/^User will be navigated to Hierarchy screen in View mode for the node$/, function (callback) {
        browser.getCurrentUrl().then(function (result) {
            merchandiseHierarchy.getCodeValue().then(function (codeText) {
                assert.include(result.toLowerCase(), 'merchandisehierarchy/view');
                assert.equal(codeText,expectedResultDictionary.pathCodeText.replace("Title for code ",""),"Path Hierarchy screen is not seen which is not as Expected")
                callback();
            });
        });
    });

    this.Given(/^User on Merchandise Hierarchy Office screen$/, function (callback) {
        commonlib.open();
        merchandiseHierarchy.openViewScreen().then(function () {
            callback();
        });
    });

    this.When(/^User click on 'Path' field for a hierarchy node$/, function (callback) {
        merchandiseHierarchy.getPathColumnValuesInOfficeScreen().first().click().then(function () {
            callback();
        });
    });

    this.When(/^User click on 'Path' field for a hierarchy node to open on\-top pop up$/, function (callback) {
        merchandiseHierarchy.getPathColumnValuesInOfficeScreen().first().click().then(function () {
            callback();
        });
    });

    this.When(/^User click on 'Path' field for a hierarchy node which is a leaf node to open on\-top pop up$/, function (callback) {
        callback.pending();
    });

    this.When(/^User click on 'Path' field for a hierarchy node \(which has further child\) to open on\-top pop up$/, function (callback) {
        merchandiseHierarchy.getPathColumnValuesInOfficeScreen().first().click().then(function () {
            callback();
        });
    });

    this.Then(/^The pop up title will be 'Current node hierarchy'$/, function (callback) {
        merchandiseHierarchy.getViewModePopUpTitle().isEnabled().then(function (result) {
            assert.isTrue(result);
            callback();
        });
    });
};
module.exports = myStepDefinitionsWrapper;