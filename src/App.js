import React, { Component } from 'react';
import Navi from './containers/Navi';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import SplashPage from './containers/SplashPage';
import MyAccount from './containers/MyAccount';
import MyBoards from './containers/MyBoards';
import Board from './components/Board';
import EditForm from './components/EditForm';
import AccountEdit from './components/AccountEdit';
import CreateBoardForm from './components/CreateBoardForm';
import EditIcon from './components/EditIcon';
import CreateIconForm from './components/CreateIconForm';
import './App.css';
import store from './redux/store';
import { fetchBoards } from './redux'

class App extends Component {

  componentDidMount() {
    fetchBoards()(store.dispatch)
  }
  
  onUnmount = () => {
    localStorage.removeItem("token")
  }
  
  componentWillUnmount() {
    this.onUnmount();
  }

  render() {

    return(
      <Router>
        <div>
          <Navi />
          <Route 
            exact path="/" 
            render={() => <SplashPage/>} 
          />

          <Route
            exact path="/account"
            render={()=><MyAccount />}
          />

          <Route
            exact path="/boards"
            render={()=><MyBoards />}
          />

          <Route
            path="/account/board/:id"
            render={(props) => <Board {...props} />}
          />

          <Route
            path="/edit/board/:id"
            render={(props) => <EditForm {...props} />}
          />

          <Route
            exact path="/board/create"
            render={(props) => <CreateBoardForm {...props} />}
          />    

          <Route
            path="/account_edit/:id"
            render={(props) => <AccountEdit {...props} />}
          />

          <Route 
            path="/edit_icon/:id"
            render={(props) => <EditIcon {...props}/>}
          />

          <Route 
            exact path="/icon/create"
            render={(props) => <CreateIconForm {...props}/>}
          />

        </div>
      </Router>
    )
  };
};



export default App;
