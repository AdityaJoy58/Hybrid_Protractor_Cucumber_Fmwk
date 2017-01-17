/**
 * Created by vc250088 on 11/27/2015.
 */
var element = require('../common/commonLib');

var actionButtons = function () {

    this.getViewButton = function () {
        var temp =  element.getElement('css', '.action-buttons');
        return element.elementChaining(temp,'buttonText','View');
    }
    this.getAddButton = function () {
        var temp =  element.getElement('css', '.action-buttons');
        return element.elementChaining(temp,'buttonText','Add');
    }
    this.getEditButton = function () {
        var temp =  element.getElement('css', '.action-buttons');
        return element.elementChaining(temp,'buttonText','Edit');
    }
    this.getCancelButton = function () {
        var temp =  element.getElement('css', '.action-buttons');
        return element.elementChaining(temp,'buttonText','Cancel');
    }
    this.getDoneButton = function () {
        var temp =  element.getElement('css', '.action-buttons');
        return element.elementChaining(temp,'buttonText','Done');
    }
    this.getSaveButton = function () {
        var temp =  element.getElement('css', '.action-buttons');
        return element.elementChaining(temp,'buttonText','Save');
    }
    this.getTreeViewButton=function(){
      return  element.getElement("buttontext","TREE VIEW") ;
    }
    this.getShowItemButton=function(){
        return  element.getElement("xpath","//button[contains(text(),'Show Items')]") ;
    }
    this.getEditButtonOnMerchandiseScreen=function(){
        return element.getElement("xpath","//span[contains(text(),'Edit')]");
    }
    this.getPager = function () {
        return  element.getElement('css', '.pager-buttons ul');
    }
    this.getPagerPreviousButton = function () {
        var temp = element.getElements('css', '.pager-buttons ul li').first();
        return element.elementChaining(temp,'tagname','button');
    }
    this.getPagerNextButton = function () {
        var temp = element.getElements('css', '.pager-buttons ul li').last();
        return element.elementChaining(temp,'tagname','button');
    }

    this.getNumberOfActionButtons=function(){
        return element.getElement("xpath","//div[@class='action-buttons']").all(by.tagName("span"));
    }

    this.getCreateScreenCancelButton=function(){
        return element.getElement("xpath","//div[@class='action-buttons']").all(by.xpath("//span[contains(text(),'Cancel')]"))
    }

    this.getCreateScreenDoneButton=function(){
        return element.getElement("xpath","//div[@class='action-buttons']").all(by.xpath("//span[contains(text(),'Done')]"))
    }

    this.getCreateScreenSaveButton=function(){
        return element.getElement("xpath","//div[@class='action-buttons']").all(by.xpath("//span[contains(text(),'Save')]"))
    }

    this.getCreateScreenEditButton=function(){
        return element.getElement("xpath","//div[@class='action-buttons']").all(by.xpath("//span[contains(text(),'Edit')]"))
    }

    this.getCreateScreenAddButton=function(){
        return element.getElement("xpath","//div[@class='action-buttons']").all(by.xpath("//span[contains(text(),'Add')]"))
    }

    //methods added for merchandise hierarchy screen
    this.getGridViewButton=function(){
        return  element.getElement("buttontext","GRID VIEW") ;
    }

    this.getSetButton=function(){
            return element.getElement("buttontext","SET");
    }

    this.getChangeButton=function(){
        return element.getElement("buttontext","CHANGE");
    }

    this.getCloseButton=function(){
        return element.getElement("buttontext","Close");
    }

    this.getPopUpSetButton=function(){
        return element.getElements("buttontext","SET").last();
    }

    this.getPopUpChangeButton=function(){
        return element.getElements("buttontext","CHANGE").last();
    }

    this.getSaveNotification = function () {
        return element.getElement('css', '.notifications');
    }
    this.checkButtonExists = function (text) {
      var temp =  element.getElement('css', '.action-buttons');
      return element.checkPresenceOfNestedElements(temp,'buttonText',text);
    }

}
module.exports = new actionButtons();