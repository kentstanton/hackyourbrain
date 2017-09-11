
// todo : 
(function (window, HYBRoot) {
    
    HYBRoot.TopicsPanel = HYBRoot.TopicsPanel || {};
    if (HYBRoot.TopicsPanel.moduleName) { return; }
    var HYBModule = HYBRoot.TopicsPanel;
    HYBModule.moduleName = "TopicsPanel";
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
    HYBModule.TopicsPanelInit = function() {
        HYBModule.initSuccess = true;

        // -- add the topics pane menu items
        var topicPanelList = '<ul class="nav nav-sidebar">';
        $.each(topicMenuItems, 
            function( index, topic) {
                topicPanelList = topicPanelList + '<li id="'+topic.topicMenuId+'" class="sidepanel-menu topics-menu">'+topic.topicMenuName+'</li>'; 	
            }
        );
        topicPanelList = topicPanelList + "</ul>";
        $("#topics-menu-pane").html(topicPanelList);
        
        // -- add the topics menu click handlers
        $(".topics-menu").click( function() {
            $(".topics-menu").removeClass("active");  
            $(".navigation-menu").removeClass("active");
             
            $("#"+this.id).addClass("active");
            
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

        } );        
        return HYBModule.Id;
    }

}) (window, HYB.TopicsPanel);
