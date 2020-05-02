import React, { Component } from 'react';
import { api } from './api';
import Navi from './containers/Navi';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import SplashPage from './containers/SplashPage';
import MyAccount from './containers/MyAccount';
import MyBoards from './containers/MyBoards';
import Board from './components/Board';
import EditForm from './components/EditForm';
import CreateBoardForm from './components/CreateBoardForm';
import './App.css';
import store from './redux/store';
import { fetchBoards } from './redux'

class App extends Component {

  constructor() {
    super();
    this.state = {
      auth: {
        user: {}
      }
    }
  };

  componentDidMount() {
    fetchBoards()(store.dispatch)
  }
  
  onUnmount = () => {
    localStorage.removeItem("token")
  }
  
  componentWillUnmount() {
    this.onUnmount();
  }

  authenticateUser(data){
    const token = localStorage.getItem("token");
    if (token) {
        this.setState({ auth: {user: data.user}});
    }
  }

  logoutUser() {
    localStorage.removeItem("token")
    this.setState({
      auth: {user: {}}
    })
  }

  render() {

    return(
      <Router>
        <div>
          <Navi
          onAuthenticate={this.authenticateUser.bind(this)} 
          onLogout={this.logoutUser.bind(this)}
          />
          <Route 
            exact path="/" 
            render={() => <SplashPage/>} 
          />

          <Route
            exact path="/account"
            render={()=><MyAccount user={this.state.auth.user} />}
          />

          <Route
            exact path="/boards"
            render={()=><MyBoards 
              user={this.state.auth.user} 
            />}
          />

          <Route
            path="/account/board/:id"
            render={(props) => <Board {...props} user={this.state.auth.user} />}
          />

          <Route
            path="/edit/:id"
            render={(props) => <EditForm {...props} user={this.state.auth.user}/>}
          />

          <Route
            path="/board/create"
            render={(props) => <CreateBoardForm {...props} user={this.state.auth.user}/>}
          />    

        </div>
      </Router>
    )
  };
};



export default App;
