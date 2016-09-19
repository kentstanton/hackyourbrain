


(function (window, HYBuiRoot) {
    HYBuiRoot.SideMenu = HYBuiRoot.SideMenu || {};
    if (HYBuiRoot.SideMenu.moduleName) { return; }
    var HYBuiModule = HYBuiRoot.SideMenu;
    HYBuiModule.moduleName = "Side Menu";
    'use strict';

    HYBuiModule.attt = "arg";

    HYBuiModule.DisableAllMenuItems = function() {
        $("#menu-item-dashboard").removeClass("active");
        $("#menu-item-currentproblems").removeClass("active");
        $("#menu-item-challenges").removeClass("active");
        $("#menu-item-reports").removeClass("active");
        $("#menu-item-allproblemsets").removeClass("active");
    }

    /*
    HYBuiModule.InitSideMenu = function() {
        $("#menu-item-dashboard").click( function() {
            DisableAllMenuItems();    
            $("#menu-item-dashboard").addClass("active");
            $("#dashboard_body").show();        
            $("#current_problemset_body").hide();

        } );

        $("#menu-item-allproblemsets").click( function() {
            DisableAllMenuItems();    
            $("#menu-item-allproblemsets").addClass("active");
        } );
        
    }
    */
    
}) (window, HYBui.SideMenu);

