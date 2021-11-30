
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
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
  );
}

export default App;
