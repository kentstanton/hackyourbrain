
// todo : 
(function (window, HYBRoot) {
    
    HYBRoot.DashBoardPanel = HYBRoot.DashBoardPanel || {};
    if (HYBRoot.DashBoardPanel.moduleName) { return; }
    var HYBModule = HYBRoot.DashBoardPanel;
    HYBModule.moduleName = "Dashboard Panel";
    'use strict';

    HYBModule.initSuccess = false;
    HYBModule.Id = 0;

    HYBModule.DashBoardPanelInit = function() {
        HYBModule.Id = 1; //DashBoardPanelRawObject.id;
        HYBModule.initSuccess = true;
        //HYBModule.DashBoardPanelItems = DashBoardPanelRawObject;

        $("#link-by-topic").click( function() {
            $("#dashboard-monthly").hide();
            $("#dashboard-topics").show();
            $("#link-by-topic").css("font-weight", "Bold");
            $("#link-by-month").css("font-weight", "Normal");

        });

        $("#link-by-month").click( function() {
            $("#dashboard-monthly").show();
            $("#dashboard-topics").hide();
            $("#link-by-month").css("font-weight", "Bold");
            $("#link-by-topic").css("font-weight", "Normal");
        
        });

        return HYBModule.Id;        
    }


}) (window, HYB.DashBoardPanel);
