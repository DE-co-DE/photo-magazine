import React, { Component } from "react";
import Magazine from "./Magazine";
import AddPhoto from "./AddPhoto";
import Single from "./Single";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Route, Link } from "react-router-dom";
import * as actions from "../redux/actions";
class Main extends Component {
    render() {
        return (
            <div>
                <h1>
                    <Link to="/">Photo-Magazine</Link>
                </h1>
                <Route
                    exact
                    path="/"
                    render={() => (
                        <div>
                            <Magazine {...this.props} />
                        </div>
                    )}
                />

                <Route
                    path="/add-photo"
                    render={({ history }) => (
                        <div>
                            <AddPhoto {...this.props} onHistory={history} />
                        </div>
                    )}
                />
                <Route
                    path="/single/:id"
                    render={params => (
                        <div>
                            <Single {...this.props} {...params} />
                        </div>
                    )}
                />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        posts: state.posts,
        comments: state.comments
    };
};
const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch);
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
