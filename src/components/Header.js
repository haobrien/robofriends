import React, {Component} from 'react';

class Header extends Component{
    shouldComponentUpdate(){
        return false;
    }

    render(){
        return(
            <div>
                <h1 className="f1">RoboFriends</h1>
            </div>
        )
    }
}

export default Header;