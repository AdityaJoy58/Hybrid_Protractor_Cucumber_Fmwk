/*This library if for common functionality required in all scenarios */
var settings = require('./settings');

var commonLib = function () {
    this.getElement = function (selector, path) {
        var htmlElement = 'Unknown Selector';
        switch (selector.toLowerCase()) {
            case 'xpath':
                htmlElement = element(by.xpath(path));
                break;
            case 'css':
                htmlElement = element(by.css(path));
                break;
            case 'id':
                htmlElement = element(by.id(path));
                break;
            case 'model':
                htmlElement = element(by.model(path));
                break;
            case 'name':
                htmlElement = element(by.name(path));
                break;
            case 'tagname':
                htmlElement = element(by.tagName(path));
                break;
            case 'buttontext':
                htmlElement = element(by.buttonText(path));
                break;
            case 'linktext':
                htmlElement = element(by.linkText(path));
                break;
            case 'cssContainingText':
                htmlElement = element(by.cssContainingText(path));
                break;
            case 'binding':
                htmlElement = element(by.binding(path));
                break;
        }
        if (this.waitForElement(htmlElement)) {
            return htmlElement;
        }
    }

    this.getElements = function (selector, path) {
        var elements = [];
        switch (selector.toLowerCase()) {
            case 'xpath':
                elements = element.all(by.xpath(path));
                break;
            case 'css':
                elements = element.all(by.css(path));
                break;
            case 'id':
                elements = element.all(by.id(path));
                break;
            case 'model':
                elements = element.all(by.model(path));
                break;
            case 'name':
                elements = element.all(by.name(path));
                break;
            case 'tagname':
                elements = element.all(by.tagName(path));
                break;
            case 'buttontext':
                elements = element.all(by.buttonText(path));
                break;
            case 'repeater':
                elements = element.all(by.repeater(path));
                break;
        }
        if (this.waitForAllElements(elements)) {
            return elements;
        }
    }

    this.elementChaining = function (elem, selector, path) {
        var htmlelement = '';
        switch (selector.toLowerCase()) {
            case 'tagname':
                htmlelement = elem.element(by.tagName(path));
                break;
            case 'css':
                htmlelement = elem.element(by.css(path));
                break;
            case 'buttontext':
                htmlelement = elem.element(by.buttonText(path));
                break;
            case 'xpath':
                htmlelement = elem.element(by.xpath(path));
                break;
        }
        if (this.waitForElement(htmlelement)) {
            return htmlelement;
        }
    }

    this.elementChainingAll = function (elem, selector, path) {
        var elements = [];
        switch (selector.toLowerCase()) {
            case 'repeater':
                elements = elem.all(by.repeater(path));
                break;
            case 'tagname':
                elements = elem.all(by.tagName(path));
                break;
            case 'css':
                elements = elem.all(by.css(path));
                break;
        }
        if (this.waitForAllElements(elements)) {
            return elements;
        }
    }

    this.open = function () {
        dv.driver.get( browser.baseUrl + '/');
        //dv.driver.manage().window().maximize();
    }

    this.expandLeftSideBar = function () {
        element(by.css('.pin-button')).click();
    }
    this.getAlert = function () {
        return dv.switchTo().alert();
    }

    this.getNEPAlertNo = function () {
        var temp = this.getElement('css', '.dialog.warning.visible');
        return this.elementChaining(temp, 'css', 'button.no');
    }

    this.getNEPAlertYes = function () {
        var temp = this.getElement('css', '.dialog.warning.visible');
        return this.elementChaining(temp, 'css', 'button.yes');
    }

    this.getNEPAlertMessage = function () {
        var temp = this.getElement('css', '.dialog.warning.visible');
        return this.elementChaining(temp, 'tagname', 'p');
    }

    this.getActiveElement = function () {
        return dv.driver.switchTo().activeElement();
    }

    this.mouseMove = function (e) {
        dv.actions().mouseMove(e).perform();
    }

    this.getCurrentDateTimeString = function () {
        var d = new Date();
        var dateValue = d.getFullYear().toString() + d.getMonth().toString() + d.getDay().toString() + d.getHours().toString() + d.getMinutes().toString() + d.getSeconds().toString() + d.getMilliseconds().toString();
        return dateValue;
    }

    this.doubleClickElement = function (e) {
        dv.actions().doubleClick(e).perform();
    }

    this.openCreateMerchandiseScreen = function () {
        dv.get(settings.config.CREATEMERCHANDISEURL);
        dv.driver.manage().window().maximize();
    }

    this.getPresenceOfNotification = function () {
        return dv.driver.isElementPresent(by.xpath("css", ".notification.success.visible"));
    }

    this.getShiftKey = function () {
        return browser.actions().sendKeys(protractor.Key.SHIFT).perform();
    }
    this.getTabKey = function () {
        return browser.actions().sendKeys(protractor.Key.TAB).perform();
    }
    this.getDownArrowKey = function () {
        return browser.actions().sendKeys(protractor.Key.DOWN).perform();
    }

    this.getUpArrowKey = function () {
        return browser.actions().sendKeys(protractor.Key.UP).perform();
    }

    this.getCtrlKey = function () {
        return browser.actions().sendKeys(protractor.Key.CTRL).perform();
    }

    this.getSpaceKey = function () {
        return browser.actions().sendKeys(protractor.Key.SPACE).perform();
    }

    this.sendBlankKeyToReleasePreviousKeyEvent = function () {
        return browser.actions().sendKeys(protractor.Key.NULL).perform();
    }

    //methods added for merchandise hierarchy screen
    this.checkElementIsClickable = function (element) {
        var isClickable = false;
        dv.wait(protractor.ExpectedConditions.elementToBeClickable(element), 5000, isClickable = true);
        return isClickable;
    }

    this.checkPresenceOfAnElement = function (selector, path) {
        //return dv.driver.isElementPresent();
        var isPresent = false;
        switch (selector.toLowerCase()) {
            case 'xpath':
                isPresent = dv.driver.isElementPresent(by.xpath(path));
                break;
            case 'css':
                isPresent = dv.driver.isElementPresent(by.css(path));
                break;
            case 'id':
                isPresent = dv.driver.isElementPresent(by.id(path));
                break;
            case 'model':
                isPresent = dv.driver.isElementPresent(by.model(path));
                break;
            case 'name':
                isPresent = dv.driver.isElementPresent(by.name(path));
                break;
            case 'tagname':
                isPresent = dv.driver.isElementPresent(by.tagName(path));
                break;
            case 'buttontext':
                isPresent = dv.driver.isElementPresent(by.buttonText(path));
                break;
            case 'linktext':
                isPresent = dv.driver.isElementPresent(by.linkText(path));
                break;
            case 'cssContainingText':
                isPresent = dv.driver.isElementPresent(by.cssContainingText(path));
                break;
        }
        return isPresent;
    }

    this.checkPresenceOfNestedElements = function (elem, selector, path) {
        //return dv.driver.isElementPresent();
        var isPresent = false;
        switch (selector.toLowerCase()) {
            case 'xpath':
                isPresent = elem.isElementPresent(by.xpath(path));
                break;
            case 'css':
                isPresent = elem.isElementPresent(by.css(path));
                break;
            case 'id':
                isPresent = elem.isElementPresent(by.id(path));
                break;
            case 'model':
                isPresent = elem.isElementPresent(by.model(path));
                break;
            case 'name':
                isPresent = elem.isElementPresent(by.name(path));
                break;
            case 'tagname':
                isPresent = dv.driver.isElementPresent(by.tagName(path));
                break;
            case 'buttontext':
                isPresent = elem.isElementPresent(by.buttonText(path));
                break;
            case 'linktext':
                isPresent = elem.isElementPresent(by.linkText(path));
                break;
            case 'cssContainingText':
                isPresent = elem.isElementPresent(by.cssContainingText(path));
                break;
        }
        return isPresent;
    }

    this.refresh = function () {
        browser.driver.navigate().refresh();
        protractor.manage().deleteAllCookies();
    }


    this.waitForElement = function (selectedElement) {
        return browser.wait(function () {
            return selectedElement.isPresent();
        });
    }

    this.waitForAllElements = function (elementArrayFinder) {
        return browser.wait(function () {
            return function () {
                return elementArrayFinder.count(function (count) {
                    return count > 0;
                });
            };
        });
    }

    this.closeNotification = function () {
        var element = this.getElement('css', '.notification.success.visible');
        return this.elementChaining(element, 'css', '.close');
    }

    this.waitForLoadingToComplete = function () {//dialog-overlay visible
        var el = element(by.css('.wait-indicator.visible'));
        return browser.wait(function () {
            var deferred = protractor.promise.defer();
            el.isPresent()
                .then(function (isPresent) {
                    deferred.fulfill(!isPresent);
                });
            return deferred.promise;
        });
    }

    this.getCurrentUrl = function(){
       return browser.getCurrentUrl();
    }

    this.getActionButtonList =function()
    {
        return this.getElements('css','.action-buttons>ul');
    }

    this.collapseLeftSideBar = function () {
        if(element(by.css('.side-bar pinned')).isPresent())
        {
            element(by.css('.pin-button')).click();
        }
    }
}
module.exports = new commonLib();


