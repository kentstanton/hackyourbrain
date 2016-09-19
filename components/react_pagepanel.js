

var PagePanelHeader = React.createClass({
  render: function() {
    return <a href="#">{this.props.HeaderPanelName}</a>;
  }
});

var PagePanelBody = React.createClass({
  getInitialState: function() {
    return {counter: 0};    
  },
  handleClick: function() {
    this.setState({ counter: this.state.counter+1})    
  },
  render: function() {
    return <button onClick={this.handleClick}>{this.state.counter}</button>;
  }
});

var PagePanel = React.createClass({
  render: function() {
    return (
      <div>
        <div><PagePanelHeader HeaderPanelName="You be in the panel header" /></div>
        <div><PagePanelBody /></div>
      </div>
    );
  }
});

ReactDOM.render(<PagePanel />, document.getElementById('page-panel-header'));

