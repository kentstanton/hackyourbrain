
// use react to display and manage the sidemenu
// see the todo example to continue with this
//
// sidemenu component is the containing component
// menuitem components are children
//
var appSideMenu = React.createClass({

});


var MeunItemReports = React.createClass({
  render: function() {
    return <a href="#">{this.props.name}</a>;
  }
});
ReactDOM.render(<MeunItemReports name="Reports" />, document.getElementById('menu-item-reports'));

var MeunItemChallenges = React.createClass({
  render: function() {
    return <a href="#">{this.props.name}</a>;
  }
});
ReactDOM.render(<MeunItemChallenges name="Challenges" />, document.getElementById('menu-item-challenges'));
