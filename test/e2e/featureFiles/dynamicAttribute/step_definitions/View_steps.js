var myStepDefinitionsWrapper = function () {

    var dynamicAttr = require('../../../pages/dynamicAttribute');
    var breadCrumb = require('../../../pages/breadCrumb');
    var settings = require('../../../common/settings');
    var commonlib = require('../../../common/commonLib');
    var chai = require(settings.constants.CHAI);
    this.setDefaultTimeout(settings.config.STEPTIMEOUT);
    var assert = chai.assert;
    var dataDic = {};


    this.Given(/^Dynamic attribute screen Opened$/, function (callback) {
        commonlib.open();
        callback();
    });


    this.When(/^Click on the tool bar action View$/, function (callback) {
        dynamicAttr.viewBtnClick().click().then(function () {
            callback();
        });
    });

    this.Then(/^record should get opened with the attributes Dynamic Attribute Id, Dynamic Attribute name, creation date and Last update name$/, function (callback) {
        dynamicAttr.getDynamicAttributeIdTextBox().getAttribute(settings.constants.VALUE).then(function (res1) {
            assert.isNotNull(res1);
            dynamicAttr.getDynamicAttributeNameTextBox().getText().then(function (res2) {
                assert.isNotNull(res2);
                dynamicAttr.getDynamicAttributeCreateDateTextBox().getAttribute(settings.constants.VALUE).then(function (res3) {
                    assert.isNotNull(res3);
                    dynamicAttr.getDynamicAttributeUpdateDateTextBox().getAttribute(settings.constants.VALUE).then(function (res4) {
                        assert.isNotNull(res4);
                        callback();
                    });
                });
            });
        });
    });

    this.Then(/^Edit button should be active$/, function (callback) {
        dynamicAttr.getEditBtnTextInViewMode().getText().then(function (res) {
            assert.equal(res.toLowerCase(), settings.constants.EDIT);
            callback();
        });
    });

    this.Then(/^user should be able to edit the record in edit mode by clicking edit button$/, function (callback) {
        dynamicAttr.getEditBtnTextInViewMode().click().then(function () {
            dynamicAttr.getDynamicAttributeIdByBinding().getText().then(function (res1){
                assert.isNotNull(res1);
                dynamicAttr.getDynamicAttributeNameTextBox().getAttribute(settings.constants.VALUE).then(function (res2) {
                    assert.isNotNull(res2);
                    dynamicAttr.getDynamicAttributeCreateDateTextBox().getAttribute(settings.constants.VALUE).then(function (res3) {
                        assert.isNotNull(res3);
                        dynamicAttr.getDynamicAttributeUpdateDateTextBox().getAttribute(settings.constants.VALUE).then(function (res4) {
                            assert.isNotNull(res4);
                            callback();
                        });
                    });
                });
            });
        });
    });

    this.Then(/^Breadcrumbs path display as Catalog \-> Dynamic Attribute > Dynamic Attribute A$/, function (callback) {
        var breadCrumbText = '';
        breadCrumb.getBreadCrumbText().then(function (text) {
            assert.isNotNull(text);
        });
        callback();
    });
    this.When(/^User select the record by checkbox$/, function (callback) {
        dynamicAttr.onGridRowClick().then(function () {
            callback();
        });
    });

};
module.exports = myStepDefinitionsWrapper;