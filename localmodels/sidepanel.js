
/*
* Sidepanel models the left menu panel
*
* NOTE
* Currently the sidepanel is acting like a "pane". It displays only the navigation menu.
* Next step is to move the nav menu to a pane and have the sidepanel display and mange 
*   the nav menu pane
*   the topics menu pane
*   the learner status pane
*/
(function (window, HYBRoot) {
    
    HYBRoot.SidePanel = HYBRoot.SidePanel || {};
    if (HYBRoot.SidePanel.moduleName) { return; }
    var HYBModule = HYBRoot.SidePanel;
    HYBModule.moduleName = "SidePanel";
    'use strict';

    HYBModule.initSuccess = false;
    HYBModule.Id = 50; // arbitrary
    HYBModule.RawMenuItems = "";

    var navMenuItems = [
        {
            "navigationMenuId" : "navigation-dashboard",
            "navigationMenuName" : "Dashboard",
            "navigationMenuDescription" : "Show your personal dashboard",
            "active-page-container" : "dashboard_body" 
        },
        {
            "navigationMenuId" : "navigation-current-problems",
            "navigationMenuName" : "Current Problem Set",
            "navigationMenuDescription" : "Show the current pending problem set",
            "active-page-container" : "current_problemset_body"            
        }

    ]    


    HYBModule.SidePanelInit = function() {
        navMenuInit();
    }

    navMenuInit = function() {
        HYBModule.initSuccess = true;
        HYBModule.TopicMenuItems = navMenuItems;

        // build the menu and add click handlers
        var navMenulList = '<ul id="menu" class="nav nav-sidebar">';
        $.each(navMenuItems, 
            function( index, navMenu) {
                navMenulList = navMenulList + '<li id="'+navMenu.navigationMenuId+'" class="sidepanel-menu navigation-menu">'+navMenu.navigationMenuName+'</li>'; 	
            });

        navMenulList = navMenulList + "</ul>";
        $("#navigation-menu-pane").html(navMenulList);

        $(".navigation-menu").click( function() {
            $(".navigation-menu").removeClass("active");
            $(".topics-menu").removeClass("active");   
            $("#"+this.id).addClass("active");

            // todo - this needs to be abstracted
            if (this.id === "navigation-dashboard") {
                $("#dashboard_body").show();        
                $("#current_problemset_body").hide();
                $("#topics_body").hide();
            } else {
                $("#dashboard_body").hide();        
                $("#current_problemset_body").show();
                $("#topics_body").hide();
            }

        } );

        return HYBModule.Id;
    }


}) (window, HYB.SidePanel);
