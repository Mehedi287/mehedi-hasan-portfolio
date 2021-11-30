
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import NoteFound from './Pages/NoteFound/NoteFound';
import Details from './Pages/Details/Details';
import AboutMe from './Pages/AboutMe/AboutMe';
import Blogs from './Pages/Bloges/Blogs';
import backgroun from "../src/images/background.mp4";
function App() {
  return (
    <div className="App">
      <div className="custom-body">
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/blog">
              <Blogs></Blogs>
            </Route>
            <Route path="/aboutMe">
              <AboutMe></AboutMe>
            </Route>
            <Route path="/details/:serviceId">
              <Details></Details>
            </Route>
            <Route path="*">
              <NoteFound></NoteFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
