import './App.css';
import React, {useEffect,useState} from 'react'
import FormPage from './Pages/FormPage';
import FormResults from './Pages/FormResults';
import Navbar from './Components/Navbar';
import Dashboard from './Pages/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./Components/Context/Context";
import axios from "axios";

function App() {
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");
  const [q4, setQ4] = useState("");
  const [q5, setQ5] = useState("");
  const [q6, setQ6] = useState("");
  const [q7, setQ7] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({});
  const [generalScore, setGeneralScore] = useState("");

  const [formQuestions, setFormQuestions] = useState({
    // FWB1_3: "",
    // FWB1_5: "",
    // FWB1_6: "",
    // FWB2_1: "",
    // FWB2_2: "",
    // FWB2_3: "",
    // FWB2_4: "",
  });

  async function getquestions() {
    try {
      const res = await axios.get("http://localhost:8080/questions");
      setQ1(res.data[0]);
      setQ2(res.data[1]);
      setQ3(res.data[2]);
      setQ4(res.data[3]);
      setQ5(res.data[4]);
      setQ6(res.data[5]);
      setQ7(res.data[6]);
      setShowForm(true);
    } catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    getquestions();
    getgeneralScore()

  }, []);

  async function getgeneralScore() {
    try {
      const res = await axios.get(
        "http://localhost:8080/surveys/totalScore "
      );
    
      setGeneralScore(res.data.totalScore)

    } catch (err) {
      console.log(err);
    }
  }


  return (
    <BrowserRouter>
      <div className="App">
        <Context.Provider
          value={{
            q1,
            q2,
            q3,
            q4,
            q5,
            q6,
            q7,
            showForm,
            formData,
            setFormData,
            formQuestions,
            setFormQuestions,generalScore, setGeneralScore
          }}
        >
            <Navbar/> 
          <header className="page">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/FormPage" element={<FormPage />} />
              <Route path="/FormResults" element={<FormResults />} />
            </Routes>
          </header>
        </Context.Provider>
      </div>

    </BrowserRouter>
  );
}

export default App;
