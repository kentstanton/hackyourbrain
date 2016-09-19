
// todo : 
(function (window, HYBRoot) {
    
    HYBRoot.SidePanel = HYBRoot.SidePanel || {};
    if (HYBRoot.SidePanel.moduleName) { return; }
    var HYBModule = HYBRoot.SidePanel;
    HYBModule.moduleName = "Side Panel";
    'use strict';

    HYBModule.initSuccess = false;
    HYBModule.Id = 0;
    HYBModule.RawMeunItems = "0";

    HYBModule.SidePanelInit = function(SidePanelRawObject) {
        HYBModule.Id = SidePanelRawObject.id;
        HYBModule.initSuccess = true;
        HYBModule.RawMeunItems = SidePanelRawObject;

        /*
        var menuItems = HYBModule.RawMeunItems.meunitems;
        for (var i=0; i < menuItems.length; i++) {
            var theItemSelector = "#" + menuItems[i].id;
            
            $(theItemSelector).click( function() {
                HYBModule.DisableAllMenuItems();    
                $(theItemSelector).addClass("active");
                var pp = menuItems[i].pagePanel; 
                $("#"+pp).show();        
                $("#current_problemset_body").hide();
            } );
        }
        */

        
        $("#menu-item-dashboard").click( function() {
            HYBModule.DisableAllMenuItems();    
            $("#menu-item-dashboard").addClass("active");
            $("#dashboard_body").show();        
            $("#current_problemset_body").hide();

        } );

        $("#menu-item-currentproblems").click( function() {
            HYBModule.DisableAllMenuItems();    
            $("#menu-item-currentproblems").addClass("active");
            $("#current_problemset_body").show();        
            $("#dashboard_body").hide();
            UILoadQuestionsPanel(100);
        } );
        

        return HYBModule.Id;
    }

    // Todo : should be possible to disable using the class, but I was having trouble with that approach.
    HYBModule.DisableAllMenuItems = function() {
        var menuItems = HYBModule.RawMeunItems.meunitems;
        for (var i=0; i < menuItems.length; i++) {
            var theItem = "#" + menuItems[i].id;
            $(theItem).removeClass("active");
        }
    }

}) (window, HYB.SidePanel);
