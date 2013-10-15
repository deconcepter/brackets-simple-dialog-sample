/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, brackets, window, $, Mustache, navigator */

define(function (require, exports, module) {
    "use strict";
    
    var CommandManager              = brackets.getModule("command/CommandManager"),
        Menus                       = brackets.getModule("command/Menus"),
        Dialogs                     = brackets.getModule("widgets/Dialogs"),
        Strings                     = brackets.getModule("strings"),
        SimpleDialogTemplate        = require("text!htmlContent/simple_dialog.html");
    
    /** @constant {string} */
    var COMMAND_ID        = "jp.codezine.commands.simple_dialog";
    var MENU_ID           = "jp.codezine.custom_menu";

    /* テンプレートに渡すオブジェクト */
    var DIALOG_INFORMATION = {
        TITLE: 'はじめてのダイアログ',
        MESSAGE: 'わーい'
    };
    
    function showDialog() {
        var context = {
            Strings: Strings,
            DIALOG_INFORMATION: DIALOG_INFORMATION
        };
        
        // ダイアログを表示
        var dialog = Dialogs.showModalDialogUsingTemplate(Mustache.render(SimpleDialogTemplate, context));
    }
        
    CommandManager.register('Simple dialog', COMMAND_ID, showDialog);
    
    var menu = Menus.getMenu(MENU_ID);
        
    if (!menu) {
        menu = Menus.addMenu('CustomMenu', MENU_ID, Menus.BEFORE, Menus.AppMenuBar.HELP_MENU);
    }
    
    menu.addMenuItem(COMMAND_ID, "Ctrl-Alt-Shift-W");
});