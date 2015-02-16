var React = require('react');
var ClassSet = require('react-classset')
var shuffle = require('knuth-shuffle');
var Router = require('react-router')
    , RouteHandler = Router.RouteHandler
    , Route = Router.Route
    , DefaultRouter = Router.DefaultRoute;

var ReactBootstrap = require('react-bootstrap')
    , Nav = ReactBootstrap.Nav
    , ButtonToolbar =  ReactBootstrap.ButtonToolbar
    , ButtonGroup = ReactBootstrap.ButtonGroup
    , NavItem = ReactBootstrap.NavItem
    , Button = ReactBootstrap.Button;

var ReactRouterBootstrap = require('react-router-bootstrap')
    , NavItemLink = ReactRouterBootstrap.NavItemLink
    , ButtonLink = ReactRouterBootstrap.ButtonLink;


var App = React.createClass({
    render: function() {
        return (
            <div>
                <ButtonGroup>
                <ButtonLink
                    to="index">
                    Home
                </ButtonLink>
                <ButtonLink
                    to="destination">
                    Random
                </ButtonLink>

                <RouteHandler/>
            </ButtonGroup>
            </div>
        );
    }
});

var NumberSpan = React.createClass({

    render :function() {
        var classes = 'grey';
        return <span className={classes}>{this.props.value}</span>
    }
})

var getRandom = function (value) {

    var list = [];
    for(var i =1;i<=value;i++) {
        list.push(i);
    }

    var shuffleList = shuffle.knuthShuffle(list);

    return shuffleList;
}


var Destination = React.createClass({
    getInitialState : function() {
       return {show:false,randomList:[],nextVal:0};
    },
    handleClick : function(event) {
        var random =  getRandom(this.refs.seedValue.getDOMNode().value);

        this.setState({
            show:false,
            randomList: random,
            nextValue:0});

        console.log(this.state.randomList)
    },
    nextHandleClick : function(event) {
        this.setState({show:true,
            randomList: this.state.randomList,
            nextValue:this.state.randomList.pop()});
    },
    render: function() {
        var randomKey = this.state.show ? this.state.nextValue  : '';
        var seedInit = this.state.randomList.length > 0  ? "Seed Init"  : '';
        return <div>
            <br/>
            <br/>
            <p>
            <label>Total&nbsp;</label>
            <input type="text" ref="seedValue" size="3" /><br/>
            <Button onClick={this.handleClick}>Shuffle</Button> <Button onClick={this.nextHandleClick}>Next</Button><br/>
            {seedInit} <br/><NumberSpan value={randomKey}/>
                </p>
        </div>;
    }
});

var Index = React.createClass({
    render () {
        return (
            <div>
                <br/>
                <h1>Welcome! JBUG Korea Meetup</h1>
            </div>
        );
    }
});

var routes = (
    <Route handler={App} path="/">
        <DefaultRouter name="index" handler={Index}/>
        <Route name="destination" path="destination" handler={Destination} />
    </Route>
);

Router.run(routes, function (Handler) {
    var main = document.getElementById("main");
    React.render(<Handler/>, main);
});
