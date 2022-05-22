import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/main/Main';

function App() {
  return (
    <div className='home'>
     <Header />
     <div className='down'>
     <Sidebar />
   <div className='layout'>
<Main />
   </div>

     </div>
    </div>
  );
}

export default App;
