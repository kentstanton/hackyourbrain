
/*
    This is the HYB UI (controllers) module loader.
*/

// Define HYBui as a global
if (typeof HYBui == "undefined") {

    'use strict';

    /** HYBui is the global representing the current session **/
    var HYBui = HYBui || {};
    (HYBui = function (window, HYBUIRoot) {
        var _HYBui = HYBUIRoot;

        // Expose jQuery to the global object
        window.HYBuiJavascript = window.HYBui = HYBUIRoot;
        HYBui.version = 1.0;
        HYBui.moduleName = "HYBui";
        HYBui.GetReleaseInfo = function () { return "pre-relesae"; }

    })(window, HYBui);


    // initialize the HYB (hackyourbrain) user interface modules here
    // sidemenu
    (HYBui.SideMenu = function (window, HYBuiRoot) {
        HYBui.SideMenu = HYBui.SideMenu || {};
        if (HYBui.SideMenu.moduleName) { return; }

        HYBui.SideMenu.moduleName = "Side Menu";
        HYBui.SideMenu.parentModule = HYBuiRoot;
        HYBui.SideMenu.version = HYBuiRoot.version;
    }) (window, HYBui);


}

(function (window, HYBUIRoot) {
    
    HYBUIRoot.SideMenu = HYBUIRoot.SideMenu || {};
    if (HYBUIRoot.SideMenu.moduleName) { return; }
    var HYBModule = HYBUIRoot.SideMenu;
    HYBModule.moduleName = "Side Menu";
    'use strict';

    HYBModule.DisableAllMenuItems = function() {
        $("#menu-item-dashboard").removeClass("active");
        //$("#menu-item-currentproblems").removeClass("active");
        //$("#menu-item-challenges").removeClass("active");
        //$("#menu-item-reports").removeClass("active");
        //$("#menu-item-allproblemsets").removeClass("active");
    }
    
}) (window, HYBui.SideMenu);


