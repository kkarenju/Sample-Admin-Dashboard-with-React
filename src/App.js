import './App.css';
import Navbar from './components/navbar';
import SideBar from './components/sideBar';

function App() {
  return (
    <div className="App container-fluid">

      <div className='row'>
        <div className='col-1 sideBarMenu'>
          <SideBar/>
        </div>
        <div className='col-11 pl-1 bg-light'>
          <Navbar />
        </div>
      </div>

    </div>
  );
}

export default App;
