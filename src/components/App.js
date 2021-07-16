import React, { Component } from 'react';

import '../style/style.css';
import '../style/bootstrap.min.css';
import '../style/font-awesome.min.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Header from "./Header/index";
import Footer from "./Footer/index";
import Newsletter from "./Newsletter/index";
import Blog from "./Blog/index";
import Singlepost from "./Singlepost/index";

const MainPage = () => {
    return (
		<div>
			<Header/>
			<Newsletter/>
			<Blog/>
			<Footer/>
		</div>
	   
	  
    );
};
class App extends Component {
  render() {
    return (
        <div>
		   <Switch>
            <Route exact path="/" component={MainPage}/>
			<Route exact path="/posts/:id" component={Singlepost}/>
            </Switch>
        </div>
    );
  }
}

export default App;
