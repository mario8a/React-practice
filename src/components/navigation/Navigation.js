import React from 'react';
import { connect } from 'react-redux';
import {push} from 'react-router-redux';

import {logout} from '../../actions/userActions'

import MyNavBar from './MyNavBar';

class Navigation extends React.Component {
     
    constructor(props) {
        super(props);
        // console.log(props.user);
        this.goHome = this.goHome.bind(this);
        this.logout = this.logout.bind(this);
    }

    goHome() {
        this.props.dispatch(push('/'))
    }

    logout(){
        this.props.dispatch(logout())
        this.props.dispatch(push('/'))
    }

    render() {
        return <MyNavBar goHome={this.goHome} user={this.props.user} logout={this.logout}/>
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Navigation);

