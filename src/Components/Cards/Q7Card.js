import React, {useState,useContext, useEffect} from 'react'
import axios from 'axios'
import Q7Chart from '../Graphs/Q7Chart';
import Context from '../Context/Context';
export default function Q1Card() {
  const[first, setFirst] = useState("") 
  const[sec, setSec] = useState("") 
  const[third, setThird] = useState("") 
  const[four, setFour] = useState("") 
  const[fifth, setFifth] = useState("") 

  const{ q7} = useContext(Context)

  async function getNumb() {
    
    try {
      const res = await axios.get(
      `http://localhost:8080/answers/count/${q7._id}`
      );
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
    if(q7)
    getNumb()
  }, [q7])


  return (
    <div className='scoreCards'>
    {first && <>
    <h3 className='scoreCards_title'>{q7.text}</h3>
           <Q7Chart first={first} sec={sec} third={third} four={four} fifth={fifth}/>
          <p className='scoreCards_info_users'>100000 Answers</p>
    </>
        }
        </div>
  )
}