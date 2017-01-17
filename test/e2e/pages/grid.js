var commonlib = require('../common/commonLib');

var grid = function () {

    this.getSelectedRecords = function () {
        var temp = commonlib.getElement('css', '.data-grid-select');
        return commonlib.elementChainingAll(temp, 'css', '.selected');
    }

    this.getHighLightedRowsOnHover = function () {
        var temp = commonlib.getElement('css', '.data-grid-select');
        return commonlib.elementChainingAll(temp, 'css', 'table > tbody > tr:hover');
    }

    this.getHighLightedRows = function () {
        var temp = commonlib.getElement('css', '.data-grid-select');
        return commonlib.elementChainingAll(temp, 'css', '.highlighted');
    }

    this.getHighlightedRowsOnFilter=function(text){
        return commonlib.getElements('xpath','//span[@class="highlight"][contains(text(),"'+text+'")]');
    }

    this.getGridRows = function () {
        return commonlib.getElements('css', 'table.data-grid-select > tbody > tr');
    }

    this.getGridHeadings = function () {
        return commonlib.getElements("repeater", "column in vm.columns track by column.name");
    }

    this.getGridCheckBoxes = function () {
        return commonlib.getElements("css", ".select-row");
    }

    this.getSortingIconAsc = function (column) {
        return commonlib.elementChaining(column, 'css', '.sort-asc');
    }

    this.getSortingIconDesc = function (column) {
        return commonlib.elementChaining(column, 'css', '.sort-desc');
    }

    this.getFilterIcon=function(){
        return commonlib.getElement("xpath","//i[@class='fa fa-filter']");
    }

    this.getSearchBoxes=function(){
        return commonlib.getElements("xpath","//input[@placeholder='Type to search']");
    }

    this.gridNotResultsFound=function(){
        return commonlib.getElement('css','[ng-show="vm.noResults"]');
    }

    this.getFilterButton=function(){
        return commonlib.getElement('css','.filter-button');
    }

    this.getMegaSelector=function(){
        return commonlib.getElements('css','table.data-grid-select > thead > tr > th').first();
    }

    this.getClearIconForColumn = function (column) {
        return commonlib.elementChaining(column, "xpath", "//i[@class='fa fa-times-circle clear']");
    }
}
module.exports = new grid();
