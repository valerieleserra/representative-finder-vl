import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RepresentativeSearch from './components/RepresentativeSearch';
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Home from './components/Home'
import './App.css';


function App() {
  return (
      <Router>
          <div>
           <Header />
           <div>
              <Switch>
                <Route path="/signin">
                    <SignIn />
                  </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/search">
                    <RepresentativeSearch/>
              </Route>
              <Route path="/">
                <Home />
                </Route>
              </Switch>
              </div>
          <Footer />
        </div>
      </Router>
  )
}

export default App;
