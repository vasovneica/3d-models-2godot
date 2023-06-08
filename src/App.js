import logo from './logo.svg';
import './App.css';
import { Menu } from './components/Menu';
import { Header } from './components/Header';
import { ItemCard } from './components/ItemCard';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { MainContent } from './components/MainContent';
import { Routes,Route } from "react-router-dom";
import { FullItem } from './components/FullItem';
import { Home } from './components/Home';
import { SortedTypePage } from './components/SortedTypePage';

function App() {
  return (
    <div className="App">
    <div className="wrap">
  
    <Header/>
        <Routes>
      <Route path="/posts/:id" element={<FullItem />}/>
      <Route path="/" element={<Home />}/>
      <Route path="/groups/:group" element={<SortedTypePage/>}/>
   
      </Routes>
<Footer/>

    </div>
    </div>
  );

}

export default App;
