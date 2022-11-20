//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Tweet from './components/Tweet';
import Products from './components/Products';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//TODO
//import Account from './components/Products';
//<Route path='/account" exact component={account} />
//import Department from './components/Products';
//<Route path='/department" exact component={Department} />
//import Employee from './components/Products';
//<Route path='/employee" exact component={Employee} />
//import Order from './components/Products';
//<Route path='/order" exact component={Order} />
//import Sales from './components/Products';
//<Route path='/sales" exact component={Sales} />


function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tweets" exact component={Tweet} />
            <Route path="/products" exact component={Products} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
