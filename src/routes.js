// import React from 'react';
// import { Route, Switch, BrowserRouter as Router, Redirect} from 'react-router-dom';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
//import * as store from './redux/store';
import store from "./Redux/store";
import Callback from './Components/Authorization/callback';
//import * as DEBUG from 'debug';

//const debug = new console.log("Wren:routes");

export const makeMainRoutes = () => {
  console.log("makeMainRoutes");

  // https://login.mypurecloud.ie/oauth/authorize/?client_id=4d125b8b-fb92-4a3c-989f-6edc7aff5a54&response_type=token&redirect_uri=https://localhost:5000/callback
  //mainPath = (<Redirect from="/" to="https://login.mypurecloud.ie/oauth/authorize/?client_id=4d125b8b-fb92-4a3c-989f-6edc7aff5a54&response_type=token&redirect_uri=https://localhost:5000/callback" />)
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route path="/callback" render={(props) => { return <Callback {...props} /> }} />
            <Route path="/" render={(props) => { return <App {...props} /> }} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

/*
<Route path="/codeauthorization" render={(props) => { return <CodeAuthorization {...props} /> }}/>

*/