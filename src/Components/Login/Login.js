import styles from './Login.module.css'
import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import store from "../../Redux/store";
import { connect } from "react-redux";
import { setImplicitGrantCredentials } from "../../Redux/actions/action";


const mapStateToProps = state => {
    return {
        app: state,
    };
};

const mapDispatchToProps = state => {
    return {
        setImplicitGrantCredentials: props => store.dispatch(setImplicitGrantCredentials(props)),
        //setQueues: props => store.dispatch(setQueues(props))
        //  setUsers: props => store.dispatch(setUsers(props))
    };
};

class Login extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {




    }

    render() {
        console.log(this.props)
        let html = (
            <div className={styles.LoginDiv}>
                <h1>Welcome to Team Chess!</h1>
                <input type='text' className={styles.TextInput}></input>
                <input type="password" className={styles.TextInput}></input>
                <button className={styles.SignUp}>Sign Up</button>
                <button className={styles.Login}>Login</button>
            </div>
        )
        return html;
    }
}

//export default App;
//export default App = connect(mapStateToProps)(App);
export default connect(mapStateToProps, mapDispatchToProps)(Login);
