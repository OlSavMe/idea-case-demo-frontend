import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Categories from '../views/categoryViews/Categories';
import CategoryDetails from '../views/categoryViews/CategoryDetails';

class Navigator extends Component {

  render() {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/Categories" ><span>Categories</span></Link>
                </nav>
                <Route path="/Categories" component={Categories} />
                <Route path="/Category/:id" component={CategoryDetails} />
            </div>
        </Router>
    );
  }
}

export default Navigator;
