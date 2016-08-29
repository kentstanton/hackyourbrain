/** @jsx React.DOM */
(function () {
    'use strict'; 
 
    var TestRow = React.createClass({
        render: function () {
            return <div>test</div>;
        }    
    });
    
    React.renderComponent(<TestRow data={"foo"} />, document.getElementById('therow'));

})();