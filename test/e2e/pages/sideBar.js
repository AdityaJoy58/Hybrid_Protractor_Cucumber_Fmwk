var commonlib = require('../common/commonLib');

var sideBar = function () {

    this.getSidebar = function () {
        return commonlib.getElement("css", ".side-bar");
    }

    this.getSidebarLinks = function () {
        return commonlib.getElements('css', '.side-bar ul li a');
    }

}
module.exports = new sideBar();
