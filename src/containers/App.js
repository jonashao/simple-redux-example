import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Post from '../components/Post';

import * as ItemsActions from '../actions';

class App extends Component {
    componentDidMount() {
        this.props.actions.fetchPost();
    }

    render() {
        return (
            <div>
                <Post text={this.props.text}/>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        text: state.posts.text
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ItemsActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);