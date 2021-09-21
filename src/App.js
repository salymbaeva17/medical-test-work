import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Projects from "./views/Projects";
import Possibilities from "./views/Possibilities";
import Calendar from "./views/Calendar";
import Tasks from "./views/Tasks";
import Layout from "./components/Layout";

function App() {
    return (
        <Router>
            <Switch>
                <Layout>
                    <Route exact path="/"><Redirect to="/projects" /></Route>
                    <Route path="/projects"><Projects/></Route>
                    <Route path="/tasks"><Tasks/></Route>
                    <Route path="/calendar"><Calendar/></Route>
                    <Route path="/possibilities"><Possibilities/></Route>
                </Layout>
            </Switch>
        </Router>
    );
}

export default App;
