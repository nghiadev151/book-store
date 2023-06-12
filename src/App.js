import "./App.css";
import './index.css';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './i18n'
import Router from "./router/Router";
import RefreshToken from "./utils/refreshToken";


function App() {
  
  return (
    <div className="App">
    <RefreshToken></RefreshToken>
    <ToastContainer/>
      <Router></Router>
    </div>
  );
}

export default App;
