
var PagePanelBody = React.createClass({
  render: function() {
    return <a href="#">{this.props.name}</a>;
  }
});

ReactDOM.render(<PagePanelBody name="Hello page panel body" />, document.getElementById('page-panel-body'));
