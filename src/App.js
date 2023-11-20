import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import HooksUsersContainer from './components/HooksUsersContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksUsersContainer />
        <HooksIceCreamContainer />
        <HooksCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
