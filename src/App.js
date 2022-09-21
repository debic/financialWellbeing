import './App.css';
import FormPage from './Pages/FormPage';
import Dashboard from './Pages/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';

function App() {

  async function getquestions() {
    try {
      const res = await axios.get(
        "http://localhost:8080/questions"
      );
      console.log(res)
    } catch (err) {
      console.log(err);
    }
  }
  
  getquestions()
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
