/**
 * Created by vk250179 on 2/16/2016.
 */
var commonlib = require('../common/commonLib');
var actionBtn = require('./actionButtons');
var grid = require('../pages/grid');

var groupPage = function () {
    this.getGroupLink = function () {
        return commonlib.getElement("xpath", "//a[@title='Groups']");
    };

    this.getFloatingMenu = function () {
        return commonlib.getElement("id", "leftPanel");
    };

    this.getGroupDetailLink = function () {
        return commonlib.getElement('linktext', "Group Details");
    };

    this.getItemsLink = function () {
        return commonlib.getElement('linktext', "Items");
    };

    this.getAllItemsFromGrid = function () {
        return commonlib.getElements("xpath", "//tr[contains(@id,'data-grid-item')]");
    };

    this.getGroupsHeading = function () {
        return commonlib.getElement("xpath", "//p[contains(text(),'Groups')]");
    };

    this.getGroupDetailsHeading = function () {
        return commonlib.getElement("xpath", "//span[contains(text(),'Group Details')]");
    };

    this.getCodeLabel = function () {
        return commonlib.getElement("xpath", "//label[contains(text(),'Code')]");
    };

    this.getTitleLabel = function () {
        return commonlib.getElement("xpath", "//label[contains(text(),'Title')]");
    };

    this.getDescriptionLabel = function () {
        return commonlib.getElement("xpath", "//label[contains(text(),'Description')]");
    };

    this.getMandatoryIndication = function () {
        return commonlib.getElement("xpath", "//span[contains(text(),'*')]");
    };

    this.getCodeTextBox = function () {
        return commonlib.getElement("id", "code");
    };

    this.getTitleTextBox = function () {
        return commonlib.getElement("id", "title");
    };

    this.getDescriptionTextBox = function () {
        return commonlib.getElement("id", "description");
    };

    this.getGroupSavedNotification = function () {
        return commonlib.getElement("css", ".success").all(by.tagName("p")).get(0).getText();
    };

    this.getGroupUpdatedNotification = function () {
      return commonlib.getElement("css", ".success").all(by.tagName("p")).get(0).getText();
    };
    this.getGroupBreadCrumb = function () {
        return commonlib.getElement("css", ".page-title");
    };

    this.getAddItemsButton = function () {
        return commonlib.getElement('id', "btnAddItem");
    };

    this.getManageItemsButton = function () {
        return commonlib.getElement('id', "btnManageItem");
    };

    this.getPathFieldValueOfTheFirstChild = function () {
        return commonlib.getElements("xpath", "//tr[contains(@id,'data-grid-item')]").first().all(by.tagName("td")).get(1).getText();
    };

    this.getColumnsHaveAscendingSortingFeature = function () {
        return commonlib.getElements('css', 'thead>tr>th>div.sort');
    }

    this.getColumnsHaveDescendingSortingFeature = function () {
        return commonlib.getElements('css', 'thead>tr>th>div.sort');
    };

    this.getColumnsHaveAscendingSortingIcon = function () {
        return commonlib.getElements("css", ".sort-desc");
    };

    this.getColumnsHaveDescendingSortingIcon = function () {
        return commonlib.getElements("css", ".sort-desc");
    };

    this.getInactiveColumnValues = function () {
        return commonlib.getElements("css", ".fa-ban");
    };

    this.getFilterIcon = function () {
        return commonlib.getElement("css", ".fa-filter");
    };

    this.getSearchBoxes=function(){
        return commonlib.getElements("xpath","//input[@placeholder='Type to search']");
    }

    this.getGridResult = function () {
        return commonlib.getElement("css", ".row-count").all(by.tagName("button"));
    };

    this.getCodeHeading = function () {
        return commonlib.getElement("xpath", "//span[contains(text(),'Code')]");
    };

    this.getTitleHeading = function () {
        return commonlib.getElement("xpath", "//span[contains(text(),'Title')]");
    };

    this.getDescriptionHeading = function () {
        return commonlib.getElement("xpath", "//span[contains(text(),'Description')]");
    };

    this.getCreatedDate = function () {
        // not working return  commonlib.getElements("css","labeltext");
        return commonlib.getElement("xpath", "//span[contains(text(),'Created Date')]");
    };

    this.getUpdatedDate = function () {
        return commonlib.getElement("xpath", "//span[contains(text(),'Last Update')]");
    };

    this.getGridSection = function () {
        return commonlib.getElement("id", "mgridItem").element(by.tagName("div"));
    };

    this.getAllLabelValues = function () {
        return commonlib.getElements("xpath", "//span[contains(@class,'set-text-font set-text-color')]");
    };

    this.getCultureViewDefaultText = function() {
        return commonlib.getElements('css','[ng-repeat="attrValues in vm.modalItems.cultureData"]').get(0).getText();
    }

    this.getGroupDetailsText = function () {
        return commonlib.getElements('css','section-min-height').getText();
    }

    this.getFirstElement = function () {
        return commonlib.getElements("xpath", "//tr[contains(@id,'data-grid-item')]").first().element(by.tagName("a"));
    };

    this.getCodeInViewMode = function () {
        return commonlib.getElement("binding", "vm.groupModel.code");
    };

    this.getCodeByModel = function () {
        return commonlib.getElement("model", "vm.groupModel.code");
    };

    this.getSameCodeErrorMessage=function(){
        return commonlib.getElement('css', '[ng-show="vm.duplicateRecord"]');
    };

  this.getDescriptionTextBox=function(){
    return commonlib.getElement("id","description");
  }

  this.getTitleCultureIcon=function(){
    return commonlib.getElements("css",".browse-icon").first();
  }

  this.getCultureCloseButton = function () {
      return commonlib.getElement('buttonText', 'Close');
  }

  this.getCultureValues = function () {
      return commonlib.getElements("css", "tbody>tr>td.culture-table-column_second");
  }

  this.getCultureAndValues = function () {
      return commonlib.getElements("repeater", "attrValues in vm.modalItems.cultureData");
  }

  this.getDescriptionCultureIcon=function(){
    return commonlib.getElements("css",".browse-icon").last();
  }

  this.getCultureOkButton = function () {
      return commonlib.getElement('css', '[ng-disabled="vm.disableOkButton"]');
  }

  this.getCultureDropdown=function(){
    return commonlib.getElement('id','typeaheadSearch');
  }

  this.getCultureValueTextBox=function(){
    return commonlib.getElement('id','cultureDesc');
  }

  this.getCultureAddButton=function(){
    return commonlib.getElements('buttonText','Add').last();
  }

  this.getCultureDropDownElements = function () {
      return commonlib.getElements('repeater', 'match in matches');
  }

  this.getAddEditPopup = function () {
      return commonlib.getElement('id', 'popAddEditMode');
  }

  this.getCultureIconInAddEditMode = function () {
      var iconBtn = element(by.css(".browse-icon"));
      commonlib.waitForElement(iconBtn);
      var temp = commonlib.getElements('css', '.browse-icon').get(0);
      return commonlib.elementChaining(temp, 'tagName', 'img');
  }

  this.getCultureTableInAddEditMode = function () {
      var temp = commonlib.getElements('id', 'popAddEditMode');
      return commonlib.elementChainingAll(temp, 'repeater', 'attrValues in vm.modalItems.cultureData');
  }

  this.getCultureCancelButton=function(){
        return commonlib.getElements('css', '[ng-click="vm.cancel()"]');
  }

    this.getCultureDeleteButton = function () {
        return commonlib.getElements('css', '[ng-click="vm.deleteData(attrValues)"]');
    }

    this.checkAddItemButtonPresence = function () {
        return commonlib.checkPresenceOfAnElement('id','btnAddItem');
    };

    this.getLowerLevelLink=function(){
        return commonlib.getElement("id","groupItemFloatMenu");
    }

    this.getCodeRequiredFieldErrorMessage=function(){
        return commonlib.getElements("css", '[ng-repeat="error in _formItem.errors track by error.name"]').get(0);
    };

    this.onSave = function () {
        return actionBtn.getSaveButton();
    }

    this.onCancel = function () {
        return actionBtn.getCancelButton();
    }

    this.onDone = function () {
        return actionBtn.getDoneButton();
    }

    this.onAdd = function () {
        return commonlib.getElement('buttontext', 'Add');
    }

    this.onEdit = function () {
        return actionBtn.getEditButton();
    }

    this.getFilterCodeTextBox = function () {
        return grid.getSearchBoxes().first();
    }

    this.getFilterTitleTextBox = function () {
        return grid.getSearchBoxes().get(1);
    }

    this.getFilterDescriptionTextBox = function () {
        return grid.getSearchBoxes().last();
    }

    this.checkCodeMandatoryMessage = function () {
        return commonlib.getElements('css', '[ng-repeat="error in _formItem.errors track by error.name"]').get(0);
    }

    this.checkTitleMandatoryMessage = function () {
        return commonlib.getElements('css', '[ng-repeat="error in _formItem.errors track by error.name"]').get(1);
    }

    this.checkDescriptionMandatoryMessage = function () {
        return commonlib.getElements('css', '[ng-repeat="error in _formItem.errors track by error.name"]').get(2);
    }
};
module.exports = new groupPage();


