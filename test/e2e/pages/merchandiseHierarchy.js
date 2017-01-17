/**
 * Created by ab250553 on 1/8/2016.
 */
var commonlib = require('../common/commonLib');
var actionBtn = require('./actionButtons');

var merchandiseHierarchyPage = function () {

    this.getHierarchyLink = function () {
        return commonlib.getElement('linktext', "Hierarchy Details");
    }

    this.getLowerLevelLink = function () {
        return commonlib.getElement("linktext", "LowerLevel");
    }

    this.getHierarchyItem = function () {
        return commonlib.getElement("linktext", "Hierarchy Items");
    }

    this.getFloatingMenu = function () {
        return commonlib.getElement("id", "leftPanel");
    }

    this.getAllItemsFromGrid = function () {
        return commonlib.getElements('css', 'table.data-grid-select > tbody > tr');
    }
    this.getLowerSectionGrid = function () {

        return commonlib.getElements('css', ' table>tbody>tr');
    }
    this.getFirstElement = function () {
        return commonlib.getElements("css", "table.data-grid-select > tbody > tr>td>a");
    }

    this.getShowItemButton = function () {
        return commonlib.getElement("buttontext", "Show Items");
    }

    this.getHierarchyDetailsLink = function () {
        return commonlib.getElement("linktext", "Hierarchy Details");
    }

    this.getGridHeadings = function () {
        return commonlib.getElements("repeater", "column in vm.columns track by column.name");
    }

    this.getHierarchyItemsLink = function () {
        return commonlib.getElement("linktext", "Hierarchy Items");
    }

    this.getCodeHeading = function () {
        return commonlib.getElements("repeater", "column in vm.columns track by column.name").get(0);
    }

    this.getTitleHeading = function () {
        return commonlib.getElements("repeater", "column in vm.columns track by column.name").get(1);
    }

    this.getPathHeading = function () {
        return commonlib.getElements("repeater", "column in vm.columns track by column.name").get(3);
    }

    this.getDescriptionHeading = function () {
        return commonlib.getElements("repeater", "column in vm.columns track by column.name").get(2);
    }

    this.getCreatedDate = function () {
        return commonlib.getElement("binding", "vm.hierarchyModel.createdDate");
    }

    this.getUpdatedDate = function () {
        return commonlib.getElement("binding", "vm.hierarchyModel.lastUpdateDate");
    }

    this.getAllLabelValues = function () {
        return commonlib.getElements("css", "span[class*='set-text-font set-text-color']");
    }

    this.createdDate = function () {
        return commonlib.getElement("binding", "vm.hierarchyModel.createdDate");
    }

    this.lastUpdateDate = function () {
        return commonlib.getElement("binding", "vm.hierarchyModel.lastUpdateDate");
    }
    this.getPathColumnValues = function () {
        var temp = commonlib.getElement('id', 'mgrid');
        return commonlib.elementChainingAll(temp, 'css', '.path');
    }

    this.getLoadingImage = function () {
        return commonlib.getLoadingImage();
    }

    this.getParentValues = function () {
        return commonlib.getElement("css", "div>nep-path>span.path-view.path>span.path-toggle");
    }

    this.getTitle = function () {
        return commonlib.getElement("binding", "vm.hierarchyModel.title");
    }

    this.getGridSection = function () {
        return commonlib.getElement("id", "mgrid").element(by.tagName("div"));
    }

    this.getPathFieldValueOfTheFirstChild = function () {
        return commonlib.getElements("css", "table> tbody > tr >td").last().getText();
    }

    this.getCodeFieldValueOfTheFirstChild = function () {
        return commonlib.getElements("css", "table> tbody > tr >td").first().getText();
    }

    this.getCodeValue = function () {
        return this.getAllLabelValues().first().getText();
    }

    this.getFilterIcon = function () {
        return commonlib.getElement("css", ".fa.fa-filter");
    }

    this.getColumnsHaveDescendingSortingFeature = function () {
        return commonlib.getElements('css', 'thead>tr>th>div.sort').first();
    }

    this.getColumnsHaveAscendingSortingFeature = function () {
        return commonlib.getElements('css', 'thead>tr>th>div.sort').first();
    }


    this.getGridHeadings = function () {
        return commonlib.getElements("repeater", "column in vm.columns track by column.name");
    }

    this.getIconsFromLowerLevel = function () {
        return commonlib.getElement("css", "section>div>p>button.filter-button");
    }

    this.getSearchBoxes = function () {
        return commonlib.getElements("css", "thead>tr.filter-controls>td>div>input");
    }

    this.getAllPageRow = function () {
        return commonlib.getElement("css", ".set-show-items-button-width");
    }

    this.getPresenceOfGrid = function () {
        return commonlib.getElement("id", "mgrid");
    }
    this.getIremsGrid = function () {
        return commonlib.getElement("id", "mgridItem");
    }
    this.getviewPopup = function () {
        return commonlib.getElement('id', 'popViewMode');
    }

    this.getCaretElement = function () {
        return commonlib.getElement("css", "div>nep-path>span.path-view.path").all(by.tagName("i"));
    }

    this.getHierarchyDetailsHeading = function () {
        return commonlib.getElement("id", "hierarchyDetails");
    }

    this.getHierarchyDetailSection = function () {
        return commonlib.getElement("css", "div.merchandiseHierarchy>div>div>span.section-header");
    }
    this.getHierarchyDetailHeading = function () {
        return commonlib.getElement("css", "div.page-breadcrumbs>p.page-title");
    }

    this.getCodeLabel = function () {
        return commonlib.getElement("id", "lbl-mh-code");
    }

    this.getTitleLabel = function () {
        return commonlib.getElement("id", "lbl-mh-title");
    }

    this.getDescriptionLabel = function () {
        return commonlib.getElement("id", "lbl-mh-desc");
    }

    this.getParentLabel = function () {
        return commonlib.getElement("id", "lbl-mh-parent");
    }

    this.getManditoryIndication = function () {
        return commonlib.getElement("id", "spn-mandatory-field-message");
    }

    this.getCodeTextBox = function () {
        return commonlib.getElement("id", "code");
    }

    this.getValidationMessage = function () {
        return commonlib.getElement("id", "spn-max-len");
    }

    this.getTitleTextBox = function () {
        return commonlib.getElement("id", "title");
    }

    this.getDescriptionTextBox = function () {
        return commonlib.getElement("id", "description");
    }

    this.getHierarchySavedNotification = function () {
        return commonlib.getElement("css", ".notification.success.visible");
    }

    this.getHierarchyBreadCrumb = function () {
        return commonlib.getElement("css", "div.page-breadcrumbs");
    }

    this.getMandatoryErrorMessage = function () {
        return commonlib.getElements("css", '[ng-repeat="error in _formItem.errors track by error.name"]').get(0);
    }

    this.getSameCodeErrorMessage = function () {
        return commonlib.getElements("css", '[ng-show="_formItem.showErrors()"]').get(0);
    }

    this.getWholeBreadCrumb = function () {
        return commonlib.getElement("css", "div.page-breadcrumbs");
    }

    this.getMerchandiseLink = function () {
        return commonlib.getElement("css", "[title='Merchandise Hierarchy']");
    }

    this.getEditScreenUpdatedMessage = function () {
        return this.getHierarchySavedNotification();
    }
    this.getPathFieldText = function () {
        return commonlib.getElement("css", ".path-text");
    }

    this.getCodeInViewMode = function () {
        return commonlib.getElement("binding", "vm.hierarchyModel.code");
    }

    //methods added for merchandise hierarchy screen

    this.openViewScreen = function () {
        return commonlib.getElement("css", "[title='Merchandise Hierarchy']").click().then(function () {
            return commonlib.waitForLoadingToComplete();
        });
    }

    this.getTreeNodeList = function () {
        return commonlib.getElement("css", "div.tree-view>ul").all(by.tagName("li"));
    }

    this.getAllNodeArrows = function () {
        return commonlib.getElements("css", "ul>li>span.node-arrow");
    }

    this.getChildNodes = function (element) {
        return element.all(by.tagName("span"));
    }

    this.expandMe = function (element) {
        if (element == undefined)
            return
        else {
            element.click();
            this.expandMe(element.all(by.tagName("span"))[0]);
        }
    }

    this.getNodeItems = function () {
        return commonlib.getElements("css", "ul>li>div.node-item");
    }

    this.getSelectedElement = function () {
        return commonlib.getElement("css", "ul>li.selected");
    }

    this.getQuickOpenIcons = function () {
        return commonlib.getElements("css", "div.node-item>p>a.details");
    }

    this.getNodeItemText = function (item) {
        return commonlib.getElements("css", "ul>li>div.node-item").all(by.tagName("p")).first().getText();
    }

    this.getPopUp = function () {
        return commonlib.getElement("id", "popViewMode");
    }

    this.getPopUpTitle = function () {
        return commonlib.getElement("css", "div>header>span.title");
    }

    this.getMerchandiseTitle = function () {
        return commonlib.getElement("id", "currentNode");
    }

    this.getParentValue = function () {
        return commonlib.getElement("css", "nep-path");
    }

    this.checkPopupIsPresent = function () {
        return commonlib.checkPresenceOfAnElement("id", "popViewMode");
    }

    this.getSearchBox = function () {
        return commonlib.getElement('css', 'div.tree-view>div.search>div.search-input>input');
    }

    this.getHighlightedTextList = function () {
        return commonlib.getElements("css", "div.tree-view>div>ul>li>div>p>span>span.highlight");
    }

    this.getClearIcon = function () {
        return commonlib.getElement("css", "div.tree-view>div>div>i.fa.fa-times-circle.clear");
    }

    this.getSearchResultsIndicator = function () {
        return commonlib.getElement("css", "div.tree-view>div>p.search-results");
    }

    this.getCheckBox = function () {
        return commonlib.elementChainingAll(this.getAllItemsFromGrid().first(), 'tagname', 'td').first();
    }

    this.getSecondCheckBox = function () {
        return commonlib.elementChainingAll(this.getAllItemsFromGrid().get(1), 'tagname', 'td').first();
    }

    this.getLastCheckBox = function () {
        return commonlib.elementChainingAll(this.getAllItemsFromGrid().last(), 'tagname', 'td').first();
    }

    this.getTitleInViewMode = function () {
        return commonlib.getElement("id", "lbl-mh-title");
    }

    this.getViewModePopUpTitle = function () {
        return commonlib.getElement("css", "div>header>span.title");
    }

    this.getModalPopup = function () {
        return commonlib.getElement("css", ".reveal-modal-bg");
    }
    this.getPathColumnValuesInOfficeScreen = function () {
        var temp = commonlib.getElement('id', 'merchandiseGrid');
        return commonlib.elementChainingAll(temp, 'css', '.path');
    }

    this.getTreePickerHighlightedItem = function () {
        var temp = commonlib.getElement("css", ".tree-view")
        return commonlib.elementChaining(temp, 'css', '.selected');
    }

    this.getDescriptionCultureIcon = function () {
        var iconBtn = element(by.css(".browse-icon"));
        commonlib.waitForElement(iconBtn);
        return commonlib.getElements("css", ".browse-icon").last();
    }

    this.getTitleCultureIcon = function () {
        var iconBtn = element(by.css(".browse-icon"));
        commonlib.waitForElement(iconBtn);
        return commonlib.getElements("css", ".browse-icon").first();
    }

    this.getCultureAndValues = function () {
        return commonlib.getElements("repeater", "attrValues in vm.modalItems.cultureData");
    }

    this.getCultureValues = function () {
        return commonlib.getElements("css", "tbody>tr>td.culture-table-column_second");
    }

    this.getCultureCloseButton = function () {
        return commonlib.getElement('buttonText', 'Close');
    }

    this.getLastRecord = function () {
        return commonlib.elementChainingAll(this.getAllItemsFromGrid().first(), 'tagname', 'td').last();
    }

    this.onCancel = function () {
        return actionBtn.getCancelButton();
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

    this.getCultureTableInAddEditMode=function() {
        var temp = commonlib.getElements('id', 'popAddEditMode');
        return commonlib.elementChainingAll(temp, 'repeater', 'attrValues in vm.modalItems.cultureData');
    }

    this.getCultureTableDeleteIcon=function(data){
        var temp =  commonlib.elementChaining(data,'css','.tbl-delete-img');
        return commonlib.elementChaining(temp,'tagName','img');
    }

    this.getCultureCancelButton=function(){
        return commonlib.getElements('css','.pop-up-add-cancel button');
    }

}

module.exports = new merchandiseHierarchyPage();
