/**
 * Created by vc250088 on 11/27/2015.
 */
var element = require('../common/commonLib');
var breadCrumb = function () {
    this.getBreadCrumbText = function () {
        var breadCrumbText = '';
        return element.getElement('xpath', '//header/div[1]/div[2]/div/div[1]/ul/li[1]').getText().then(function (text) {
            breadCrumbText = text;
            return element.getElement('xpath', '//header/div[1]/div[2]/div/div[1]/ul/li[2]/a').getText().then(function (text) {
                breadCrumbText = breadCrumbText + '->' + text;
                // return element.getElement('xpath', '//header/div[1]/div[3]/div[1]/p[1]').getText().then(function (text) {
                //   breadCrumbText = breadCrumbText + '->' + text;
                return breadCrumbText;
                // });
            });
        });
    }

    this.getMerchandiseHierarchiesBreadCrumb=function(){
       var breadCrumbText="";
          var catalogElement= element.getElement("xpath","//li[contains(text(),'Catalog')]");
        var merchandiseElement=element.getElement("linktext","Merchandise Hierarchy");
        var pageTitle=element.getElement("xpath","//p[@class='page-title']");
        catalogElement.getText().then(function(text){
         breadCrumbText=breadCrumbText+text;
        });
        merchandiseElement.getText().then(function(text){
            breadCrumbText=breadCrumbText+text;
        });
        pageTitle.getText().then(function(text){
            breadCrumbText=breadCrumbText+text;
        });
        return breadCrumbText;
    }

    this.getBreadCrumbPageTitle=function(){
        return element.getElement("css",".page-title");
    }

    this.getBreadCrumbModuleTitle=function(){
        return element.getElement("css",".module-title");
    }

}
module.exports = new breadCrumb();
