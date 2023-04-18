import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as baseActions from '../redux/modules/base';
import { ContentHeader } from '../components/';
import { Route } from 'react-router-dom';
import { Login, Register } from '../containers/Auth';


class Auth extends Component {


    render() {
        return (
            <ContentHeader>
                <Route path="/auth/login" component={Login}/>
                <Route path="/auth/register" component={Register}/>
            </ContentHeader>
        );
    }
}

export default connect(
    (state) => ({

    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(Auth);