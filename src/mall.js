import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/mall';
import Index from "./components/Index";
import Subject from "./components/Subject";
var store = createStore(reducers,applyMiddleware(thunk));
console.log(store);
// ReactDOM.render((
//     <BrowserRouter>
//         <Provider store={store}>
//             <Switch>
//                 <Route exact path='/home' component={Index}/>
//                 <Route path='/subject/id/:id' component={Subject}/>
//                 <Route path='/schedule' component={Index}/>
//                 <Redirect to="/home"/>
//             </Switch>
//         </Provider>
//     </BrowserRouter>
// ), document.getElementById('app'));
ReactDOM.render((
    <BrowserRouter>
        <Provider store={store}>
            <Switch>
                <Index/>
            </Switch>
        </Provider>
    </BrowserRouter>
), document.getElementById('app'));
