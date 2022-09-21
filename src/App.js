import './App.css';
import FormPage from './Pages/FormPage';

import Dashboard from './Pages/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
 
      <header className="">
      <Routes>
      <Route path="/" element={ <Dashboard/>}/>
      <Route path="/FormPage" element={ <FormPage/>}/>
      </Routes>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
