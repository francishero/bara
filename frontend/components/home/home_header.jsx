import React from 'react';
import {
  Link
} from 'react-router-dom';
import Dropdown from '../header/dropdown';

export default class HomeHeader extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      showDropdown: false,
    };

    this.toggleDropdown = this.toggleDropdown.bind( this );
    this.handleLogout = this.handleLogout.bind( this );
  }

  toggleDropdown() {
    this.setState( prevState => ( {
      showDropdown: !prevState.showDropdown
    } ) );
  }

  handleLogout() {
    this.setState( () => ( {
      showDropdown: false,
    } ) );
    this.props.logout();
  }

  render() {
    let {
      currentUser,
      demoLogin,
    } = this.props;

    return currentUser ? (
      <nav className='home-bar'>
        <div className='home-bar-left'>
        </div>
        <div className='home-bar-right'>
          <div onClick={this.toggleDropdown} className='dropdown' >
            <img className='home-avatar' src={currentUser.avatar_url} />
            <i className='fa fa-caret-down'
              id='down-arrow' aria-hidden="true"></i>
          </div>
          <Dropdown
            currentUser={currentUser}
            logout={this.handleLogout}
            toggleDropdown={this.toggleDropdown}
            showDropdown={this.state.showDropdown}
          />
        </div>
      </nav>
    ) : (
      <nav className="home-bar">
        <div onClick={this.props.demoLogin} className='home-demo'>
          Demo Login
        </div>
        <div className='home-bar-right'>
          <div className='home-login'><Link to="/login">Log In</Link></div>
          <div className='home-signup'><Link to="/signup">Sign up</Link></div>
        </div>
      </nav>
    );
  }
}