import React, { Component } from 'react';
import Home from './components/Pages/Home'
import './App.css';
import PageWrapper from './components/PageWrapper'
import AdminWarpper from './components/AdminWrapper'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import {  connect} from "react-redux";
import About from './components/Pages/About'
import Signup from './components/Pages/Signup'

import Contact from './components/Pages/Contact'
import Login from './components/Pages/Login'
import Dashboard from './components/Pages/Admin/AdminDashboard';
class App extends Component {
  render() {
    return (
      <div className="App">
         <Router>
     <Route
          exact={true}
          path="/admin"
          render={props => { // props is the routes props 
            return (
                <div>
                {this.props.auth.token ? // this.props is the components props
                  <AdminWarpper>
                    <Dashboard />
                  </AdminWarpper>
                : 
                
                    <Login />
               
                  
                }
                </div>
              
            )
          }}
        />
            <Route
            path='/'
            exact={true}
            render={(props)=>{
              console.log('props',props)
              return(
                <PageWrapper>
                  <Home {...props}/>
                </PageWrapper>

              )
            }}/>
               <Route
            path='/about'
            component={About}/>
             <Route
            path='/signup'
            component={Signup}/>
                <Route
            path='/contact'
            render={(props)=>{
              return(
                <PageWrapper>
                  <Contact {...props}/>
                </PageWrapper>

              )
            }}/>
            <Route
              path='/a'
              render={() => {
                return (
                  <h1>HIIIIIIIIIIIIIIIIIII</h1>
                )
              }}
            />
   

        </Router>

      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
      auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
   
  }
}


export default connect(    mapStateToProps,
  mapDispatchToProps)(App);
