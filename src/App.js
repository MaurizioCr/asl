import logo from './logo.svg';
import './App.css';
import MyNavbar from "./Component/MyNavbar"
import Home from './Component/Home'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import Up from './Component/up';

function App() {
  return (
    <div>
      <MyNavbar/>
      <Home/>
      <Up/>
    </div>
  );
}

export default App;
