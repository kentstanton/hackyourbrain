
    
    var ExampleApplication = React.createClass({
        render: function() {
            var elapsed = Math.round(this.props.elapsed  / 100);
            var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
            var message =
            'Timer: ' + seconds + ' (s)';
            return <p>{message}</p>;
        }
    });
    
    var start = new Date().getTime();
    setInterval(function() {
        ReactDOM.render(<ExampleApplication elapsed={new Date().getTime() - start} />,document.getElementById('timer'));
    }, 50);
    
