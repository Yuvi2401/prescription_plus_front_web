import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import {Store} from './redux/store'

import Login from './components/Login/Login';
function App() {
  return (
    <Provider store={Store}>
    <div >
      <Login/>
    </div>
    </Provider>
  );
}

export default App;
