import "./App.css";
// import Table from "./component/Table";
// import Form from "./component/Form";
import NavigationBar from "./component/NavigationBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home"
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
          <Route path="/edit/:id" component={Edit} exact/>
        </Switch>
      </main>
      </BrowserRouter>
     {/* <Form />
        <Table />  */}

    
     </div>
  );
}

export default App;
