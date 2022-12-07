import "./App.css";
// import Table from "./component/Table";
// import Form from "./component/Form";
import NavigationBar from "./component/NavigationBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home"
import Login from "./pages/Login"
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Edit from "./pages/Edit"
function App() {
  return (
    <div className="App">
    
      <NavigationBar/>
      <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/login" component={Login} exact/>
          {/* ini untuk mengedit akan di ambil id nya */}
          <Route path="/edit/:id" component={Edit} exact/>
        </Switch>
      </main>
      </BrowserRouter>
     </div>
  );
}

export default App;
