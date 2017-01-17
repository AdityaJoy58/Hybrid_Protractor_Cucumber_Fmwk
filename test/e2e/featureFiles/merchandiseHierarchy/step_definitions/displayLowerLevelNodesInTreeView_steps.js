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
    var leafNode='';
    var nodeText='';

    this.Given(/^User on Merchandise Hierarchy View screen$/, function (callback) {
        commonlib.open();
        merchandiseHierarchy.openViewScreen().then(function () {
            merchandiseHierarchy.getCheckBox().click().then(function(){
              actionButtons.getViewButton().click().then(function(){
                  callback();
              });
            });
        });
    });

    this.When(/^User click on 'Tree View' button from lower level section$/, function (callback) {
        actionButtons.getTreeViewButton().click().then(function(){
            callback();
        })
    });

    this.Then(/^Child node list in lower level section will be changed to hierarchy tree view displaying entire hierarchy tree$/, function (callback) {
       merchandiseHierarchy.getTreeNodeList().then(function(elements){
           assert.isArray(elements);
           assert.isTrue(elements.length > 0);
           callback();
       });
    });

    this.When(/^User expand the entire hierarchy tree$/, function (callback) {
        merchandiseHierarchy.getAllNodeArrows().then(function(elements){
            merchandiseHierarchy.expandMe(elements[0]);
            leafNode=elements[elements.length - 1];
            callback();
        });
    });

    this.Then(/^The hierarchy tree in lower level section will only display hierarchy nodes$/, function (callback) {
        merchandiseHierarchy.getAllNodeArrows().then(function(elements){
            assert.isAbove(elements.length,0);
            callback();
        })
    });

    this.Then(/^No items will be displayed below the leaf node in the hierarchy tree$/, function (callback) {
        merchandiseHierarchy.getChildNodes(leafNode).then(function(elements){
            assert.isBelow(elements.length,1);
            callback();
        });
    });

    this.Then(/^The hierarchy node will show "\+" icon indicating that the node is collapsed and has further descendants$/, function (callback) {
        merchandiseHierarchy.getAllNodeArrows().then(function(elements){
            assert.isAbove(elements.length ,0);
            callback();
        });
    });

    this.Then(/^The hierarchy node will show "\-" icon indicating that the node is expanded$/, function (callback) {
        merchandiseHierarchy.getAllNodeArrows().then(function(elements){
           merchandiseHierarchy.expandMe(elements[0]);
               merchandiseHierarchy.getAllNodeArrows().then(function(expandedNodes){
                   assert.isAbove(expandedNodes.length , 1);
                   callback();
           });
        });
    });

    this.When(/^User click on a hierarchy node from the hierarchy tree view$/, function (callback) {
        merchandiseHierarchy.getNodeItems().first().click().then(function(elements){
            callback();
        })
    });

    this.Then(/^The selected node will be highlighted$/, function (callback) {
        merchandiseHierarchy.getSelectedElement().isEnabled().then(function(result){
            assert.isTrue(result);
            callback();
        });
    });

    this.Then(/^A quick view icon "([^"]*)" will also be displayed next to the node$/, function (arg1, callback) {
        merchandiseHierarchy.getQuickOpenIcons().then(function(elements){
            assert.isAbove(elements.length,0);
            callback();
        })
    });

    this.When(/^User click on the quick view icon$/, function (callback) {
       merchandiseHierarchy.getQuickOpenIcons().then(function(elements){
           merchandiseHierarchy.getAllNodeArrows().first().click().then(function(nodeItems){
               callback();
           });
       });
    });

    this.Then(/^User will be navigated to Hierarchy screen in View mode for the selected node$/, function (callback) {
      merchandiseHierarchy.getTitleInViewMode().getText().then(function(heading){
            assert.isNotNull(heading);
            callback();
      });
    });

    this.Then(/^Lower level section will display hierarchy tree$/, function (callback) {
      merchandiseHierarchy.getTreeNodeList().then(function(treeNodes){
          assert.isAbove(treeNodes.length ,0);
          callback();
      })
    });

    this.Then(/^Button label in lower level section will change to 'Grid View'$/, function (callback) {
       actionButtons.getGridViewButton().isEnabled().then(function(result){
           assert.isTrue(result);
           callback();
       });
    });
};
module.exports = myStepDefinitionsWrapper;