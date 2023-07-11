import './App.css';
import MyRoutes from './MyRoutes';
// import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux';
// import cartReducer from './Redux/reducer/cartReducer';
import store from './store'




const App = () => {
  // const store = legacy_createStore(cartReducer)


  return (
    <Provider store={store}>
      <MyRoutes />
      
    </Provider>
  );
}



export default App;

// react ko compiler lai kunai pani reducer store ho vanera chinauni - legacy store ko kam
