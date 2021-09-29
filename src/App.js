import './App.scss';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import { Container } from "react-bootstrap";
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { useState ,useEffect  } from 'react';
import Login from './Screens/Login-Screen/Login';
import {Switch, Route } from "react-router-dom";
import "./App.scss";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);
  const handleTogglesidebar = () => toggleSidebar(value => !value);

  return (
    <>
      <Header handleTogglesidebar={handleTogglesidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleTogglesidebar={handleTogglesidebar} />
        <Container fluid className="app__main">
          {children}
        </Container>
      </div>
    </>
  )
}



const App = () => {

  const {accessToken , loading} = useSelector(state=>(state.auth))

  const history = useHistory()

  useEffect(() => {
    if(!accessToken && !loading){
      history.push("/auth")
    }
    
  }, [accessToken,loading,history])

  return (

    
      <Switch>
        <Route path="/" exact>
          <Layout>
            <HomeScreen />
          </Layout>
        </Route>

        <Route path="/auth">
          <Login />
        </Route>

        <Route path="/search">
          <Layout>
            <h1>search me</h1>
          </Layout>
        </Route>
      </Switch>
   




  );
}

export default App;
