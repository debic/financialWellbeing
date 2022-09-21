import logo from './logo.svg';
import './App.css';
import Dashboard from './Pages/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="">
      <Routes>
      <Route path="/" element={ <Dashboard/>}/>
      </Routes>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
