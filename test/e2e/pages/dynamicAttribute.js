var commonlib = require('../common/commonLib');
var actionBtn = require('./actionButtons');
var grid = require('./grid');

var dynamicAttributePage = function () {
    this.checkNameLengthValidation = function () {
        return commonlib.getElement('css', '[ng-show="vm.attributeModel.name.length==256 && vm.viewMode==false"]');
    }
    this.checkNameMandatoryValidation = function () {
        return commonlib.getElements('css', '[ng-repeat="error in _formItem.errors track by error.name"]').last();
    }
    this.checkSuccessWhileSave = function () {
        return commonlib.getElement('css', '.notifications');
    }
    this.editBtnClick = function () {
        return actionBtn.getEditButton();
    }
    this.getDoneBtnInAddEditMode = function () {
        return actionBtn.getDoneButton();
    }
    this.getDynamicAttributeCreateDateTextBox = function () {
        return commonlib.getElement('name', 'createDate');
    }

    this.getDynamicAttributeFormText = function () {
        return commonlib.getElement("id", "lbl-dynamic-attr-id");
    }

    this.getDynamicAttributeIdTextBox = function () {
        return commonlib.getElement('model', 'vm.attributeModel.id');
    }

    this.getDynamicAttributeIdByBinding = function () {
        return commonlib.getElement('binding', 'vm.attributeModel.id');
    }

    this.getDynamicAttributeNameTextBox = function () {
        return commonlib.getElements('model', 'vm.attributeModel.name').first();
    }
    this.getDynamicAttributeUpdateDateTextBox = function () {
        return commonlib.getElement('name', 'updateDate');
    }
    this.getEditBtnInViewMode = function () {
        return actionBtn.getEditButton();
    }
    this.getEditBtnTextInViewMode = function () {
        return actionBtn.getEditButton();
    }
    this.getCulturesFromPopup = function () {
        return commonlib.getElement('css', '.culture-table-column_first');
    }
    this.getDynamicAttributeNamesFromPopup = function () {
        return commonlib.getElement('css', '.culture-table-column_second');
    }
    this.getDynamicAttributeName = function () {
        return commonlib.getElement('css', '.textArea');
    }

    this.onGridRowClick = function () {
        return commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').first().click().then(function () {
            return commonlib.waitForLoadingToComplete();
        });
    }

    this.viewBtnClick = function () {
        return actionBtn.getViewButton();
    }

    this.getCultureValueTextBox = function () {
        return commonlib.getElement('id', 'cultureDesc');
    }

    this.onSave = function () {
        return actionBtn.getSaveButton();
    }

    this.discardAlert = function () {
        return commonlib.getAlert().dismiss();
    }
    this.getAlertMessage = function () {
        return commonlib.getAlert().getText();
    }
    this.onAdd = function () {
        return commonlib.getElement('buttontext', 'Add');
    }

    this.onCancel = function () {
        return actionBtn.getCancelButton();
    }

    this.onDone = function () {
        return actionBtn.getDoneButton();
    }

    this.mouseMove = function (e) {
        dv.actions().mouseMove(e).perform();
    }

    this.getActiveElement = function () {
        return commonlib.getActiveElement();
    }

    this.onSuccess = function () {
        return commonlib.getElement('css', '.notification.success.visible');
    }

    this.getIdMessage = function () {
        return commonlib.getElements('css', '[ng-repeat="error in _formItem.errors track by error.name"]').first();
    }

    this.getNameMessage = function () {
        return commonlib.getElements('css', '[ng-repeat="error in _formItem.errors track by error.name"]').last();
    }
    this.getExistingErrorMessage = function () {
        return commonlib.getElement('css', '[ng-show="vm.duplicateRecord"]');
    }

    this.getMaximumLengthValidationMessage = function () {
        return commonlib.getElement('css', '[ng-show="vm.attributeModel.name.length==256"]')
    }

    this.getDynamicAttributeUpdateDateTextBox = function () {
        return commonlib.getElement('name', 'updateDate');
    }
    this.getSaveBtnInAddEditMode = function () {
        return actionBtn.getSaveButton();
    }
    this.getToolBarButtonInnerHtml = function () {
        return commonlib.getElement('css', '.action-buttons');
    }

    this.mouseMove = function (e) {
        dv.actions().mouseMove(e).perform();
    }

    this.mouseMove = function (e) {
        dv.actions().mouseMove(e).perform();
    }
    this.getAllGridElements = function () {
        return commonlib.getElements('css', 'table.data-grid-select > tbody > tr');
    }

    this.getGridElement = function () {
        return commonlib.getElements('css', 'table > tbody > tr > td >a').first().click().then(function () {
            return commonlib.waitForLoadingToComplete();
        });
    }

    this.getElementInViewMode = function (text) {
        return commonlib.getElement('css', '.ng-valid-maxlength.edit-id');
    }

    this.getSortingIcon = function () {
        return commonlib.getElements('css', '.sort-asc');
    }

    this.getFilterIcon = function () {
        return commonlib.getElement('css', '.fa.fa-filter');
    }

    this.getFilterIdTextBox = function () {
        return commonlib.getElements('css', 'thead>tr>td>div>input').first();
    }

    this.getFilterNameTextBox = function () {
        return commonlib.getElements('css', 'thead>tr>td>div>input').get(1);
    }

    this.getRemoveFilterIcon = function () {
        return commonlib.getElements('css', 'thead>tr>td>div>i').first();
    }

    this.getMegaSelector = function () {
        return commonlib.getElements('css', 'table.data-grid-select > thead > tr > th').first();
    }

    this.getSelectedElements = function () {
        var temp = commonlib.getElement('css', '.data-grid-select');
        return commonlib.elementChainingAll(temp, 'css', '.selected');
    }

    this.getAnyElement = function () {
        return commonlib.elementChainingAll(grid.getGridRows().first(), 'tagname', 'td').first().click().then(function () {
        });
    }

    this.getHighlightedRecords = function () {
        var temp = commonlib.getElement('css', '.data-grid-select');
        return commonlib.elementChainingAll(temp, 'css', '.highlighted');
    }

    this.getFilterHighlighted = function () {
        return commonlib.getElements('css', '.highlight');
    }
    this.getAllCheckBox = function () {
        return commonlib.getElements('css', 'table.data-grid-select > tbody > tr');
    }

    this.getPopUpAddedElements = function () {
        return commonlib.getElements('repeater', 'attrValues in vm.modalItems.cultureData');
    }

    this.getTotalRecords = function () {
        return commonlib.getElement('css', '.filter-button');
    }

    this.getCultureIconInAddEditMode = function () {
        var iconBtn = element(by.css(".browse-icon"));
        commonlib.waitForElement(iconBtn);
        var temp = commonlib.getElements('css', '.browse-icon').get(0);
        return commonlib.elementChaining(temp, 'tagName', 'img');
    }


    this.getCultureIconInViewMode = function () {
        var iconBtn = element(by.css(".browse-icon"));
        commonlib.waitForElement(iconBtn);
        var temp = commonlib.getElements('css', '.browse-icon').get(1);
        return commonlib.elementChaining(temp, 'tagName', 'img');
    }

    this.getCultureAddButton = function () {
        return commonlib.getElement('buttonText', 'Add');
    }

    this.getCultureTableFirstTextArea = function () {
        return commonlib.getElement('id', 'txtArea_0');
    }

    this.getCultureTableFirstTextAreaLabel = function () {
        return commonlib.getElement('id', 'lbl_0');
    }

    this.getCultureOkButton = function () {
        return commonlib.getElement('css', '[ng-disabled="vm.disableOkButton"]');
    }

    this.getCultureCancelButton = function () {
        return commonlib.getElements('css', '.pop-up-add-cancel button');
    }

    this.getCultureDropdown = function () {
        return commonlib.getElement('id', 'typeaheadSearch');
    }

    this.getCultureDropDownElements = function () {
        return commonlib.getElements('repeater', 'match in matches');
    }

    this.getCultureTableInAddEditMode = function () {
        var temp = commonlib.getElements('id', 'popAddEditMode');
        return commonlib.elementChainingAll(temp, 'repeater', 'attrValues in vm.modalItems.cultureData');
    }

    this.getCultureDeleteButton = function () {
        return commonlib.getElements('css', '[ng-click="vm.deleteData(attrValues)"]');
    }

    this.getCultureTableRowsInViewMode = function () {
        var temp = commonlib.getElement('css', '.culture-view-table');
        return commonlib.elementChainingAll(temp, 'repeater', 'attrValues in vm.modalItems.cultureData');
    }

    this.getCultureTableDeleteIcon = function (data) {
        var temp = commonlib.elementChaining(data, 'css', '.tbl-delete-img');
        return commonlib.elementChaining(temp, 'tagName', 'img');
    }

    this.getAddEditPopup = function () {
        return commonlib.getElement('id', 'popAddEditMode');
    }

    this.getCultureTableInViewMode = function () {
        return commonlib.getElement('css', '.culture-view-table');
    }

    this.gridNotResultsFound = function () {
        return commonlib.getElement('css', '[ng-show="vm.noResults"]');
    }

    this.getSelectedRecords = function () {
        var temp = commonlib.getElement('css', '.data-grid-select');
        return commonlib.elementChainingAll(temp, 'css', '.selected');
    }

    this.getHighLightedRows = function () {
        var temp = commonlib.getElement('css', '.data-grid-select');
        return commonlib.elementChainingAll(temp, 'css', '.highlighted');
    }

    this.getGridRows = function () {
        var temp = commonlib.getElement('css', '.data-grid-select');
        return commonlib.elementChainingAll(temp, 'css', 'table > tbody > tr');
    }
}
module.exports = new dynamicAttributePage();
