import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

class HomePage extends React.Component{
    render(){
        return (
            <div className="jumbotron">
                <h1>Welcome to <span style={{color: this.props.muiTheme.palette.primaryDarkColor}}>New Project</span></h1>
            </div>
        );
    }
}

export default muiThemeable()(HomePage);