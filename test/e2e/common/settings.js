/**
 * This file is for setting configuration required in test cases
 */

var settings = function () {
    this.constants = {
        'CHAI': 'chai',
        'CREATEDATE': 'created date',
        'UPDATEDATE': 'updated date',
        'DYNAMICATTRIBUTEID': 'dynamic attribute id',
        'DYNAMICATTRIBUTENAME': 'dynamic attribute name',
        'INNERHTML': 'innerHTML',
        'EDIT': 'edit',
        'SAVE': 'save',
        'DONE': 'done',
        'CANCEL': 'cancel',
        'VALUE': 'value',
        'BREADCRUMB': 'Catalog->Dynamic Attribute Types->',
        'DYNATTRNAMESAMPLETEXT': 'This is sample text',
        'DISABLED': 'disabled',
        'TRUE': 'true',
        'NGHIDE': 'ng-hide',
        'NOTIFICATIONSUCCESS': 'notification success',
        'ID': 'id',
        'CULTURETEXTBOXID': 'cultureDesc',
        'IMG': 'img',
        'LEFTPARENTHESIS': '(',
        'RIGHTPARENTHESIS': ')',
        'DYNATTRSAMPLEID': 'Sample',
        'CULTURENOTRANSLATION': 'Translation is not defined',
        'TOOLTIP': 'tooltip',
        'TITLE':'title',
        'GREY': 'grey',
        'SRC': 'src',
        'DEFAULT_CULTURE': 'English (USA)',
        'DEFAULT_CULTURE_TITLE_VALUE': 'Culture Title Value',
        'DEFAULT_CULTURE_DESCRIPTION_VALUE': 'Culture Description Value',
        'TYPEKEYINDROPDOWN': 'e',
        'CHECKHIGHLIGHT': '\<strong>e</strong>',
        'CLASS': 'class',
        'DISABLELISTITEM': 'disableListItem',
        'INFOCULTUREDROPDOWN': 'INFO --> Values against all culture are already entered',
        'CODE': 'Code',
        'DESCRIPTION':'Description',
        'PATH' : 'path',
        'CHECKBOX':'checkbox',
        'TEXTAREAMAXLEN':'256',
        'NORESULTFOUNDTEXT':'No results found',
        'SEARCHTEXT':'No results found',
        'DISCARDMESSAGE':'Would you like to discard the changes?',
        'MASTERCODE': 'master code',
        'STATUS': 'status',
        'SHORTDESC': 'short description',
        'MERCHANDISEHIERARCHY': 'merchandise hierarchy',
        'ADD_DYNAMIC_ATTRIBUTE_NOTIFICATION_TEXT': 'ADDED DYNAMIC ATTRIBUTE',
        'EXISTING_GROUP_CODE': '1001',
        'ERROR_MESSAGE_FOR_SAME_VARIANT_GROUP_CODE': 'A variant group with the same code already exist.'
    };
    this.config = {
        'STEPTIMEOUT': '60000'
    }
}
module.exports = new settings();

