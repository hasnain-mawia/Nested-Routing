
import AppRouter from './config/router';
import Logo from '../src/img/logo.png'
import DrawerAppBar from '../src/config/navbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={Logo} width='100px'/>
<DrawerAppBar/>
<AppRouter/> 
    </div>

  );
}

export default App;
