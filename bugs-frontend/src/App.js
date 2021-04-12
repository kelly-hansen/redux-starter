import './App.css';
import BugsList from "./components/BugsList";
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <BugsList />
      </Router>
    </Provider>
  );
}

export default App;
