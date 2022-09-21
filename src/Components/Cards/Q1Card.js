import React, {useState,useContext, useEffect} from 'react'
import axios from 'axios'
import Q1Chart from '../Graphs/Q1Chart';
import Context from '../Context/Context';
export default function Q1Card() {
  const[first, setFirst] = useState("90") 
  const[sec, setSec] = useState("90") 
  const[third, setThird] = useState("90") 
  const[four, setFour] = useState("90") 
  const[fifth, setFifth] = useState("90") 

  const{ q1} = useContext(Context)

  async function getNumb() {
    
    try {
      const res = await axios.get(
      `http://localhost:8080/answers/count/${q1._id}`
      );
     // console.log(res.data)
     setFirst(res.data["0"])
     setSec(res.data["1"])
     setThird(res.data["2"])
     setFour(res.data["3"])
     setFifth(res.data["4"])
    } catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    getNumb()
  }, [])


  return (
    <div className='scoreCards'>
        <h3 className='scoreCards_title'>{q1.text}</h3>
        <Q1Chart first={first} sec={sec} third={third} four={four} fifth={fifth}/>
        <p className='scoreCards_info_users'>100000 Answers</p>
    </div>
  )
}
