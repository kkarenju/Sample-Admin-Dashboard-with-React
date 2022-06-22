import './App.css';
import Navbar from './components/navbar';
import SideBar from './components/sideBar';
import Content from './components/content';

function App() {
  return (
    <div className="App container-fluid">

      <div className='row'>

        {/* pagge layout into 2 major/ parent columns */}
        <div className='col-1 sideBarMenu'> {/*left column holding icon menus*/}
          <SideBar/> 
        </div>
        <div className='col-11 pl-1 bg-light'> {/*right column holding vertical navigation menu and general dashboard analytics*/}
          <Navbar />
          <Content />
        </div>
      </div>

    </div>
  );
}

export default App;
