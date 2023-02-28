import React, { createContext } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootreducer from './reducers';
import './index.css';
import App from './components/App';


// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       console.log('ACTION_TYPE = ', action.type)
//       next(action);
//     }
//   }
// }


//thunk and logger middleware which are called just after the we dispatch action and before goining to reducer

const logger = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action !== 'function')
    console.log('ACTION_TYPE = ', action.type);
  next(action);
}

// const thunk1 = ({ dispatch, getState }) => (next) => (action) => {
//   if (typeof action === 'function') {
//     console.log('hii');
//     action(dispatch);
//     return;
//   }
//   next(action);
// }

//console.log("11111");

const store = createStore(rootreducer, applyMiddleware(logger, thunk));


/*console.log('store', store);
console.log('before state', store.getState());

//dispatch take action object
store.dispatch({
  type: 'ADD_MOVIES',
  movies: [{ name: 'superman' }]
});

console.log('after state', store.getState());
*/


//export const StoreContext = createContext();
//console.log('StoreContext', StoreContext);

// class Provider extends React.Component {
//   render() {
//     const { store } = this.props;
//     //console.log('I was triggered during render')
//     return (
//       <StoreContext.Provider value={store}>
//         {this.props.children}
//       </StoreContext.Provider>
//     );
//   }
// }

/* {this.props.children} rendering app component */


// export function connect(callback) {
//   return function (Comp) {
//     class ConnectedComponent extends React.Component {
//       constructor(props) {
//         //console.log("4444");
//         super(props);
//         this.unsubscribe = this.props.store.subscribe(() => {
//           this.forceUpdate();
//         });
//       }

//       componentWillUnmount() {
//         this.unsubscribe();
//       }

//       render() {
//         const { store } = this.props;
//         const state = store.getState();
//         //console.log("hiii1")
//         const dataToPassedAsProps = callback(state);

//         return <Comp dispatch={store.dispatch} {...dataToPassedAsProps} />;
//       }
//     }
//     class ConnectedComponentWrapper extends React.Component {
//       render() {
//         //console.log("3333");
//         return (
//           <StoreContext.Consumer>
//             {(store) => {
//               return <ConnectedComponent store={store} />
//             }}
//           </StoreContext.Consumer>
//         );
//       }
//     };
//     return ConnectedComponentWrapper;
//   };
// }



//console.log("2222");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < Provider store={store} >
    <App />
  </Provider >
);

