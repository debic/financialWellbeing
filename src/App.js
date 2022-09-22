import './App.css';
import React, {useEffect,useState} from 'react'
import FormPage from './Pages/FormPage';
import FormResults from './Pages/FormResults';
import Navbar from './Components/Navbar';
import Dashboard from './Pages/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from './Components/Context/Context';
import axios from 'axios';

function App() {

  const[q1, setQ1] = useState("") 
  const[q2, setQ2] = useState("") 
  const[q3, setQ3] = useState("") 
  const[q4, setQ4] = useState("") 
  const[q5, setQ5] = useState("") 
  const[q6, setQ6] = useState("") 
  const[q7, setQ7] = useState("") 
  const [showForm, setShowForm] = useState(false) 


  async function getquestions() {
    try {
      const res = await axios.get(
        "http://localhost:8080/questions"
      );
      setQ1(res.data[0])
      setQ2(res.data[1])
      setQ3(res.data[2])
      setQ4(res.data[3])
      setQ5(res.data[4])
      setQ6(res.data[5])
      setQ7(res.data[6])
      setShowForm(true)
    } catch (err) {
      console.log(err);
    }
  }

    useEffect(() => {
    getquestions()
  }, [])

  return (
    <BrowserRouter>
    <div className="App">
    <Context.Provider value={{ q1,q2,q3,q4,q5,q6, q7}}>
      <Navbar/>
      <header className="page">
      <Routes>
      <Route path="/" element={ <Dashboard />}/>
      <Route path="/FormPage" element={ <FormPage/>}/>
      <Route path="/FormResults" element={ <FormResults/>}/>
      </Routes>
      </header>
      </Context.Provider>
    </div>
    </BrowserRouter>
  );
}

export default App;
