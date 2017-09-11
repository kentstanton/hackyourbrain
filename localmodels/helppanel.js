
// todo : 
(function (window, HYBRoot) {
    
    HYBRoot.HelpPanel = HYBRoot.HelpPanel || {};
    if (HYBRoot.HelpPanel.moduleName) { return; }
    var HYBModule = HYBRoot.HelpPanel;
    HYBModule.moduleName = "HelpPanel";
    'use strict';

    HYBModule.initSuccess = false;
    HYBModule.Id = 90; // arbitrary

    // for now, defining the menu items here
    var helpMenuItems = [
        {
            "helpMenuId" : "help-getstarted",
            "helpMenuName" : "Getting Started",
            "helpMenuDescription" : "Getting Started with MathHacks",
            "active-page-container" : "getstarted_body" 
        },
        {
            "helpMenuId" : "help-detailed",
            "helpMenuName" : "More Details",
            "helpMenuDescription" : "Additional Help",
            "active-page-container" : "additionalHelp_body"            
        }
    ]    

    //--------------------------------------
    HYBModule.HelpPanelInit = function() {
        HYBModule.initSuccess = true;

        // -- add the help pane menu items
        var helpPanelList = '<ul class="nav nav-sidebar">';
        $.each(helpMenuItems, 
            function( index, helpItem) {
                helpPanelList = helpPanelList + '<li id="'+ helpItem.helpMenuId +'" class="sidepanel-menu topics-menu">'+helpItem.helpMenuName+'</li>'; 	
            }
        );
        helpPanelList = helpPanelList + "</ul>";
        $("#help-menu-pane").html(helpPanelList);
        
        // -- add the help menu click handlers
        $(".help-menu").click( function() {
            $(".help-menu").removeClass("active");  
            $(".navigation-menu").removeClass("active");
            $(".topics-menu").removeClass("active");
             
            $("#"+this.id).addClass("active");
            
            /*
            if (this.id === "topic-prealgebra") {
                $("#topics_body").show();        
                $("#current_problemset_body").hide();
                $("#dashboard_body").hide();
                
                $("#topics-panel-title").html("Pre-Algebra");
                $("#topic-description").html(prealgebraContent);
                
                var subTopicHtml = "";
                var subTopics = topic_prealgegra.SubTopics;
                $("#topic-table-head").html("<b>Topics To Master</b>");
                $.each(subTopics, 
                    function (subTopicLoopIndex, rawSubTopic) {
                        var theSubTopic = rawSubTopic.SubTopicName;
                        subTopicHtml = subTopicHtml + '<tr id="question-row-' + subTopicLoopIndex + '">';
                        subTopicHtml = subTopicHtml + '<td >' + rawSubTopic.SubTopicName + '</td>';
                        subTopicHtml = subTopicHtml + '<td >' + rawSubTopic.SubTopicDescription + '</td>';
                        subTopicHtml = subTopicHtml + '</tr>';
                    }
                );
                $("#topic-table-body").html(subTopicHtml);
                
            } else {
                        
                $("#current_problemset_body").hide();
            }
            */

        } );        
        return HYBModule.Id;
    }

}) (window, HYB.HelpPanel);
