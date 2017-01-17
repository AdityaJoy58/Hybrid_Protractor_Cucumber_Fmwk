/**
 * Created by rk250323 on 17/02/2016.
 */

var commonlib = require('../common/commonLib');
var gridlib = require('./grid');
var breadCrumb = require('./breadCrumb');
var actionBtn = require('./actionButtons');

var variantGroupPage = function () {

    this.getVariantGroupLinkFromFloatingMenu=function(){
        return commonlib.getElement('linktext',"Variant Group Details");
    }

    this.getLowerLevelLink=function(){
        return commonlib.getElement("id","variantItems");
    }

    this.getFloatingMenu=function(){
        return commonlib.getElement("id","leftPanel");
    }

    this.getAllItemsFromGrid=function(){
        return commonlib.getElements("css","tr[id*='data-grid-item']");
    }

    this.getFirstElement=function(){
        return gridlib.getGridRows().first().element(by.tagName("a"));
    }

    this.getGridHeadings=function(){
        return commonlib.getElements("repeater","column in vm.columns track by column.name");
    }

    this.getCodeHeading=function(){
        return commonlib.getElement("id","lblCode");
    }

    this.getTitleHeading=function(){
        return commonlib.getElement("id","lblTitle");
    }

    this.getDescriptionHeading=function(){
        return commonlib.getElement("id","lblDescription");
    }

    this.getCreatedDate=function(){
        return commonlib.getElement("id","lblCreatedDate");
    }

    this.getUpdatedDate=function(){
        return commonlib.getElement("id","lblLastUpdate");
    }

    this.getAllLabelValues=function(){
        return commonlib.getElements("css","span[class*='set-text-font set-text-color']");
    }

    this.getGridSection=function(){
        return commonlib.getElement("id","vgGrid").element(by.tagName("div"));
    }

    this.getInactiveColumnValues=function(){
        return commonlib.getElements("css",".fa-ban");
    }

    this.getFilterIcon=function(){
        return commonlib.getElement("css",".fa-filter");
    }

    this.getColumnsHaveDescendingSortingFeature=function(){
        return commonlib.getElements("css",".sort-desc");
    }

    this.getColumnsHaveAscendingSortingFeature=function(){
        return commonlib.getElements("css",".sort-asc");
    }

    this.getIconsFromLowerLevel=function(){
        return commonlib.getElement("css","p[class='row-count']").all(by.tagName("i"));
    }

    this.getGridResult=function(){
        return commonlib.getElement("css","p[class='row-count']").all(by.tagName("button"));
    }
    this.getSearchBoxes=function(){
        return commonlib.getElements("css","input[placeholder='Type to search']");
    }

    this.getPresenceOfGrid=function(){
        return commonlib.getElement("id","vgGrid");
    }

    this.getVariantGroupBreadCrumb=function(){
        return commonlib.getElement("css","p[class='page-title']");
    }

    this.getVariantGroupLink=function() {
        return commonlib.getElement("css", "[title='Variant Groups']");
    }

    this.getCodeInViewMode=function(){
        return commonlib.getElement("binding","vm.variantGroupModel.code");
    }

    this.getTitleInViewMode=function(){
        return commonlib.getElement("binding","vm.variantGroupModel.title");
    }
    this.getCodeTextBox=function(){
        return commonlib.getElement("id","code");
    }

    this.getTitleTextBox=function(){
        return commonlib.getElement("id","title");
    }

    this.getDescriptionTextBox=function(){
        return commonlib.getElement("id","description");
    }

    this.getAddItemsButton = function () {
        return commonlib.getElement('id', "btnAddItem");
    };

    this.getGroupBreadCrumb = function () {
        return commonlib.getElement("css","p[class='page-title']");
    };

    this.getVariantGroupSavedNotification = function () {
        return commonlib.getElement("css","div[class*='success']");
    };

    this.getSameCodeErrorMessage=function(){
        return commonlib.getElement("css","span[class*='mandatory']");
    };

    this.getVariantGroupDetailsHeading=function() {
        return commonlib.getElement("id", "variant-group-detail");
    };

    this.getDescriptionValidationMessage = function () {
        return commonlib.getElement("css","span[class*='mandatory']");
    }

    this.getVariantGroupUpdatedNotification = function () {
        return commonlib.getElement("css", ".success").all(by.tagName("p")).get(0);
    };

    this.getMandatoryErrorMessage = function () {
        return commonlib.getElement("css","span[class*='mandatory']");
    };

    this.getMandatoryErrorMessages = function () {
        return commonlib.getElements("repeater","error in _formItem.errors track by error.name");
    };

    this.getBreadCrumbInViewMode = function () {
      return breadCrumb.getBreadCrumbText().then(function (breadCrumbText) {
          return breadCrumb.getBreadCrumbPageTitle().getText().then(function (result) {
              return breadCrumbText + '->' + result;
            });
        });
    };

    this.getCultureAddButton=function(){
        return commonlib.getElements('buttonText','Add').last();
    }

    this.getCultureDropdown=function(){
        return commonlib.getElement('id','typeaheadSearch');
    }

    this.getCultureValueTextBox=function(){
        return commonlib.getElement('id','cultureDesc');
    }

    this.getCultureDropDownElements=function(){
        return commonlib.getElements('repeater','match in matches');
    }

    this.getCultureTableInAddEditMode=function(){
        var temp = commonlib.getElements('id','popAddEditMode');
        return commonlib.elementChainingAll(temp,'repeater','attrValues in vm.modalItems.cultureData');
    }

    this.getCultureTableFirstTextAreaLabel=function(){
        return commonlib.getElement('id','lbl_0');
    }

    this.getCultureTableFirstTextArea=function(){
        return commonlib.getElement('id','txtArea_0');
    }

    this.getCultureOkButton=function(){
        return commonlib.getElement('css','[ng-disabled="vm.disableOkButton"]');
    }

    this.getAddEditPopup=function(){
        return commonlib.getElement('id','popAddEditMode');
    }

    this.getCultureCancelButton=function(){
        return commonlib.getElements('css','.pop-up-add-cancel button');
    }

    this.getCultureIconInAddEditMode=function(){
        var iconBtn = element(by.css(".browse-icon"));
        commonlib.waitForElement(iconBtn);
        var temp = commonlib.getElements('css','.browse-icon').get(0);
        return commonlib.elementChaining(temp,'tagName','img');
    }

    this.getCultureTableDeleteIcon=function(data){
        var temp =  commonlib.elementChaining(data,'css','.tbl-delete-img');
        return commonlib.elementChaining(temp,'tagName','img');
    }

    this.getTitleTextBox = function () {
        return commonlib.getElement("id", "title");
    }

    this.getTitleCultureIcon = function () {
        var iconBtn = element(by.css(".browse-icon"));
        commonlib.waitForElement(iconBtn);
        return commonlib.getElements("css", ".browse-icon").first();
    }

    this.getTitleTextBox = function () {
        return commonlib.getElement("id", "title");
    }

    this.getCultureAndValues = function () {
        return commonlib.getElements("repeater", "attrValues in vm.modalItems.cultureData");
    }

    this.getCulture = function () {
        var culture = commonlib.getElements("repeater", "attrValues in vm.modalItems.cultureData");
        return commonlib.elementChainingAll(culture,'css','.popup-culture-lbl.ng-binding');
    }

    this.getCultureCloseButton = function () {
        return commonlib.getElement('buttonText', 'Close');
    }

    this.getCultureValues = function () {
       return commonlib.getElements("css", ".tbl-add-edit-tr.tbl-desc-width");
    }

    this.getDescriptionCultureIcon=function(){
        return commonlib.getElements("css",".browse-icon").last();
    }

    this.getExistingCultureValueTextBox=function(){
        return commonlib.getElement("id", "txtArea_0");
    }

    this.getValidationTitleMessage = function () {
        return commonlib.getElement("id", "spn-max-len-title");
    }

    this.getCodeRequiredFieldErrorMessage=function(){
        return commonlib.getElements("css", '[ng-show="_formItem.showErrors()"]').get(0);
    };

    this.onCancel = function () {
        return actionBtn.getCancelButton();
    }
}

module.exports = new variantGroupPage();
