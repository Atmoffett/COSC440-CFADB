import React from 'react'; // ES6 js
import {Link} from 'react-router-dom';

function Nav() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navMainMenu" className="navbar-collapse collapse">
                <div className="navbar-nav ml-auto">
                    <Link to='/' className="nav-item nav-link active">Home</Link>
                    <Link to='/products' className="nav-item nav-link active">Products</Link>
                    <Link to='/employee' className="nav-item nav-link active">Employees</Link>
                    <Link to='/department' className="nav-item nav-link active">Departments</Link>
                    <Link to='/account' className="nav-item nav-link active">Accounts</Link>
                    </div>
                </div>
        </nav>
    );
}

export default Nav;
//change link to to include products as a unique item in components
//include <Link to= '/tablename' className="nav-item nav-link">tablename</Link>
//for remainder of tables to display