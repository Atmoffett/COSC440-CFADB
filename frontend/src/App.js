//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Products from './components/Products';
import Employee from './components/Employee';
import Department from './components/Department';
import Account from './components/Account';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//TODO
//i
//<Route path='/account" exact component={account} />
//
//
//import Order from './components/Orders';
//<Route path='/order" exact component={Order} />
//import Sales from './components/Sales';
//<Route path='/sales" exact component={Sales} />


function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/products" exact component={Products} />
                    <Route path="/employee" exact component={Employee} />
                    <Route path="/department" exact component={Department} />
                    <Route path="/account" exact component={Account} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
