import React, {Component } from 'react';
import './Header.scss';
class Header extends Component {
    render() { 
        return (
            <header className={this.props.theme}>
                    <ul>
                        <li onClick={()=>this.props.changeTheme('default')}></li>
                        <li onClick={()=>this.props.changeTheme('light')}></li>
                        <li onClick={()=>this.props.changeTheme('dark')}></li>
                    </ul>
                    <h1>Just do it.</h1>
            </header>
        );
    }
}
 
export default Header;