
// todo : 
(function (window, HYBRoot) {
    
    HYBRoot.TopicsPane = HYBRoot.TopicsPane || {};
    if (HYBRoot.TopicsPane.moduleName) { return; }
    var HYBModule = HYBRoot.TopicsPane;
    HYBModule.moduleName = "TopicsPane";
    'use strict';

    HYBModule.initSuccess = false;
    HYBModule.Id = 40; // arbitrary

    // for now, defining the menu items here
    var topicMenuItems = [
        {
            "topicMenuId" : "topic-prealgebra",
            "topicMenuName" : "Pre-Algebra",
            "topicMenuDescription" : "Basic mathematical concepts that provide a foundation for Algebra.",
            "page" : "topics-container"
        },
        {
            "topicMenuId" : "topic-algebra",
            "topicMenuName" : "Algebra",
            "topicMenuDescription" : "Basic mathematical concepts for Algebra.",
            "page" : "topics-container"
        },
        {
            "topicMenuId" : "topic-physics",
            "topicMenuName" : "Physics (math)",
            "topicMenuDescription" : "Basic mathematical concepts for used in Physics.",
            "page" : "topics-container"
        }

    ]

    //--------------------------------------
    HYBModule.TopicsPaneInit = function() {
        HYBModule.initSuccess = true;

        // -- add the topics pane menu items
        var topicPanelList = '<ul class="nav nav-sidebar">';
        $.each(topicMenuItems, 
            function( index, topic) {
                topicPanelList = topicPanelList + '<li id="'+topic.topicMenuId+'" class="sidepanel-menu">'+topic.topicMenuName+'</li>'; 	
            }
        );
        topicPanelList = topicPanelList + "</ul>";
        $("#topics-menu-pane").html(topicPanelList);
        
        // -- add the topics pane menu item click handlers        
        $(".topics-menu").click( function() {
            $(".topics-menu").removeClass("active");   
            $("#"+this.id).addClass("active");
            
            // todo - this needs to be abstracted
            if (this.id === "navigation-dashboard") {
                $("#dashboard_body").show();        
                $("#current_problemset_body").hide();
            } else {
                $("#dashboard_body").hide();        
                $("#current_problemset_body").show();
            }

        } );        
        return HYBModule.Id;
    }

}) (window, HYB.TopicsPane);
