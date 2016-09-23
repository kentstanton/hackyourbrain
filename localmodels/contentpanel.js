
// ContentPanel owns the main display area and renders the content panels
(function (window, HYBRoot) {
    
    HYBRoot.ContentPanel = HYBRoot.ContentPanel || {};
    if (HYBRoot.ContentPanel.moduleName) { return; }
    var HYBModule = HYBRoot.ContentPanel;
    HYBModule.moduleName = "ContentPanel";
    'use strict';

    HYBModule.initSuccess = false;
    HYBModule.Id = 0;

    HYBModule.ContentPanelInit = function() {
        HYBModule.Id = 1;
        HYBModule.initSuccess = true;
        return HYBModule.Id;        
    }


}) (window, HYB.ContentPanel);
