
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

    HYBModule.DisableAllMenuItems = function(SidePanelRawObject) {
        $("#menu-item-dashboard").removeClass("active");
        $("#menu-item-currentproblems").removeClass("active");
    }

}) (window, HYB.SidePanel);
