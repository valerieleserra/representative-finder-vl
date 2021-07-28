import { useState } from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import RepresentativeSearch from './components/RepresentativeSearch';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import UserProfile from "./components/UserProfile";
import './App.css'


function App() {
  
  const [user,setUser] = useState()
  
  return (
      <Router>
          <div>
           <Header />
           <div>
              <Switch>
                <Route path="/signin">
                    <SignIn setUser={setUser} />
                  </Route>
                <Route path="/signup">
                    <SignUp setUser={setUser} />
                </Route>
                <Route path="/search">
                  {user
                    ? <RepresentativeSearch user={user}/>
                    : <SignIn setUser={setUser} />
                  }
              </Route>
              <Route path="/user-profile">
                <UserProfile />
                </Route>
                <Route path="/">
                <Home />
                </Route>
              </Switch>
              </div>
          <Footer />
        </div>
      </Router>
  );
}
export default App;
