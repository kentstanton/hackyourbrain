
// todo : 
(function (window, HYBRoot) {
    
    HYBRoot.ProgressPanel = HYBRoot.ProgressPanel || {};
    if (HYBRoot.ProgressPanel.moduleName) { return; }
    var HYBModule = HYBRoot.ProgressPanel;
    HYBModule.moduleName = "Progress Panel";
    'use strict';

    HYBModule.initSuccess = false;
    HYBModule.Id = 0;
    HYBModule.RawMeunItems = "0";

    HYBModule.ProgressPanelInit = function(id) {
        HYBModule.Id = id;
        HYBModule.initSuccess = true;
        //HYBModule.ProgressPanelItems = ProgressPanelRawObject;

        return HYBModule.Id;
    }


}) (window, HYB.ProgressPanel);
