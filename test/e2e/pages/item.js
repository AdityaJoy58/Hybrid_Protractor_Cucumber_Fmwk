/**
 * Created by rk250323 on 2/03/2016.
 */
var commonlib = require('../common/commonLib');
var gridlib = require('./grid');
var actionBtn = require('./actionButtons');

var itemPage = function () {

    this.getItemLink = function () {
        return commonlib.getElement("css", '[title="Items"]');
    };

    this.getAllItemsFromGrid=function(){
        return commonlib.getElements("css","tr[id*='data-grid-item']");
    }

    this.getPathElement = function () {
        return commonlib.getElements('css', '[ng-bind-html="vm.textForPathLabel"]').first();
    };

    this.getEditBtnInViewMode = function () {
        return actionBtn.getEditButton();
    }

    this.getMasterCodeTextBox=function(){
        return commonlib.getElement("id","masterCode");
    }

    this.getMasterCodeTextBoxInReadOnlyMode=function(){
        return commonlib.getElement("id","masterCode");
    }

    this.getAllNodeArrows = function () {
        return commonlib.getElements("css", "ul>li>span.node-arrow");
    }

    this.getNodeItems = function () {
        return commonlib.getElements("css", "ul>li>div.node-item");
    }

    this.getExistingErrorMessage = function () {
        return commonlib.getElement('css', '[ng-show="vm.duplicateRecord"]');
    }

    this.getMandatoryErrorMessage = function () {
        return commonlib.getElement("css","span[class*='mandatory']");
    };

    this.onSuccess = function () {
        return commonlib.getElement('css', '.notification.success.visible');
    }

    this.getGroupBreadCrumb = function () {
        return commonlib.getElement("css","p[class='page-title']");
    };

    this.getItemMainDetailsHeadingForViewMode = function () {
        return commonlib.getElement("id","lblMainDetails");
    }

    this.getItemDetailsHeadingForAddEditMode = function () {
        return commonlib.getElement("id","itemDetailsSection");
    }

    this.getItemGroupAddButton=function(){
        return commonlib.getElement("css",'[selected-values="vm.ItemGroup"]').all(By.name("add"));
    }

    this.getItemGroupCancelButton=function(){
        return commonlib.getElement("css",'[selected-values="vm.ItemGroup"]').all(By.name("cancel"));
    }

    this.getGroupsLevelLink=function(){
        return commonlib.getElement("id","groupFloatMenu");
    }

    this.getAttributeLevelLink=function(){
        return commonlib.getElement("id","attributeFloatMenu");
    }

    this.getVariantGroupCombobox=function(){
        return commonlib.getElements("css",'[selected-values="vm.variantGroup"]').all(by.tagName("input"));
    }

    this.getVariantDropDownElements=function(){
        return commonlib.getElements("css",'[selected-values="vm.variantGroup"]').all(by.tagName("li"));
    }

    this.getItemDropDownElements=function(){
        return commonlib.getElements("css","div.select-row.ng-scope>input.checkbox");
    }

    this.getVariantGroupElements=function(){
        return commonlib.getElement("css",'[selected-values="vm.variantGroup"]').all(by.tagName("p"));
    }

    this.getItemGroupCombobox=function(){
        return commonlib.getElements("css",'[selected-values="vm.ItemGroup"]').all(by.tagName("input"));
    }

    this.getItemGroupElements=function(){
        return commonlib.getElement("css",'[selected-values="vm.variantGroup"]').all(by.tagName("p"));
    }

    this.getMerchandisehierarchyMouseOver=function(){
        return commonlib.getElement("css", '[ng-bind-html="vm.textForPathLabel"]');
    }

    this.getMerchandisehierarchyMouseClick=function(){
        return commonlib.getElements("css", '[ng-bind-html="vm.textForPathLabel"]').first();
    }

    this.getAttributeGroupCombobox=function(){
        return commonlib.getElement("css", '[ng-model="vm.attributeName"]');
    }

    this.getAttributeDropDownElements=function(){
        return commonlib.getElements('repeater','match in matches');
    }

    this.getShortDescriptionCultureIcon=function(){
        return commonlib.getElements("css",".browse-icon");
    }

    this.getLongDescriptionCultureIcon=function(){
        return commonlib.getElements("css",".browse-icon");
    }

    this.getCultureDropdown=function(){
        return commonlib.getElement('id','typeaheadSearch');
    }

    this.getCultureDropDownElements=function(){
        return commonlib.getElements('repeater','match in matches');
    }

    this.getCultureValueTextBox=function(){
        return commonlib.getElement('id','cultureDesc');
    }

    this.getCultureAddButton=function(){
        return commonlib.getElements('buttonText','Add').last();
    }

    this.getFirstElement=function(){
        return gridlib.getGridRows().first().element(by.tagName("a"));
    }

    this.getCulture = function () {
        var culture = commonlib.getElements("repeater", "attrValues in vm.modalItems.cultureData");
        return commonlib.elementChainingAll(culture,'css','.popup-culture-lbl.ng-binding');
    }

    this.getCultureValuesForDescription = function () {
        return commonlib.getElements("css", ".tbl-add-edit-tr.tbl-desc-width");
    }

    this.getCultureTableInAddEditMode=function(){
        var temp = commonlib.getElements('id','popAddEditMode');
        return commonlib.elementChainingAll(temp,'repeater','attrValues in vm.modalItems.cultureData');
    }

    this.getCultureTableFirstTextArea=function(){
        return commonlib.getElement('id','txtArea_0');
    }

    this.getCultureTableFirstTextAreaLabel=function(){
        return commonlib.getElement('id','lbl_0');
    }

    this.getCultureOkButton=function(){
        return commonlib.getElement('css','[ng-disabled="vm.disableOkButton"]');
    }

    this.getAddEditPopup=function(){
        return commonlib.getElement('id','popAddEditMode');
    }

    this.getCultureIconInAddEditMode=function(){
        var iconBtn = element(by.css(".browse-icon"));
        commonlib.waitForElement(iconBtn);
        var temp = commonlib.getElements('css','.browse-icon').get(0);
        return commonlib.elementChaining(temp,'tagName','img');
    }

    this.getCultureCancelButton=function(){
        return commonlib.getElements('css','.pop-up-add-cancel button');
    }

    this.getCultureTableDeleteIcon=function(data){
        var temp =  commonlib.elementChaining(data,'css','.tbl-delete-img');
        return commonlib.elementChaining(temp,'tagName','img');
    }

    this.getDescriptionTextBox=function(){
        return commonlib.getElement("id","description");
    }

    this.getCultureAndValues = function () {
        return commonlib.getElements("repeater", "attrValues in vm.modalItems.cultureData");
    }

    this.getCultureCloseButton = function () {
        return commonlib.getElement('buttonText', 'Close');
    }

    this.getAllLabelValues=function(){
        return commonlib.getElements("css","span[class*='set-text-font set-text-color']");
    }

    this.getCultureValues = function () {
        return commonlib.getElements("css","td[class*='culture-table-column_second']");
    }

    this.getShortDescriptionTextBox=function(){
        return element.all(by.model('vm.itemModel.description')).first();
    }

    this.getLongDescriptionTextBox=function(){
        return element.all(by.model('vm.itemModel.longDescription')).first();
    }

    this.getShortDescriptionTextInViewEditMode=function(){
        return commonlib.getElement('id','lblShortDescriptionValue');
    }

    this.getLongDescriptionTextInViewEditMode=function(){
        return commonlib.getElement('id','lblLongDescriptionValue');
    }

    this.getCode = function(){
        return element(by.className('data-grid-select')).all(by.tagName('a')).first();
    }

    this.getStatus = function(){
        return commonlib.getElement("css", '[ng-model="vm.itemModel.status"]');
    }

    this.getAttributeValue=function(){
        return commonlib.getElements("css","div[class*='text-field2']").all(by.tagName('textarea')).first();
    }

    this.getAttributeAddButton=function(){
        return commonlib.getElement("css", '[ng-click="vm.addAttributeRow()"]');
    }

    this.getAttributeGroupTextBox=function(){
        return commonlib.getElement('id','txtAttributeValue');
    }

    this.getAttributeList=function() {
        return commonlib.getElements("css","span[class*='set-textArea-font set-text-color ng-binding']");
    }

    this.getAttributeCultureIcon=function(){
        return commonlib.getElements("css", '[ng-model="attributes.value"]').first();
    }

    this.getAttributeCultureIconAddButton=function(){
        return commonlib.getElements("css", '[ng-click="vm.addRow()"]');
    }

    this.getAttributeAddCultureIcon=function(){
        return commonlib.getElements("css", '[culture-data="vm.attributeCulture"]').first();
    }

    this.getAttributeValueList=function() {
        return commonlib.getElements("css","textarea[class*='set-textArea-font set-text-color  no-bg ng-binding']");
    }

    this.onCancel = function () {
        return actionBtn.getCancelButton();
    }

    this.getFilterIcon = function () {
        return commonlib.getElement("css", ".fa-filter");
    };

    this.getFilterMasterCodeTextBox = function () {
        return gridlib.getSearchBoxes().first();
    }

    this.getFilterShortDescriptionTextBox = function () {
        return gridlib.getSearchBoxes().get(2);
    }

    this.getFilterMerchandiseHierarchyTextBox = function () {
        return gridlib.getSearchBoxes().last();
    }

    this.getClearButton = function(){
        return commonlib.getElement('css','[class="clear-filters-button"]');
    }
};
module.exports = new itemPage();

