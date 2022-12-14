import React, {useState,useContext, useEffect} from 'react'
import axios from 'axios'
import Q5Chart from '../Graphs/Q5Chart';
import Context from '../Context/Context';
export default function Q1Card() {
  const[first, setFirst] = useState("") 
  const[sec, setSec] = useState("") 
  const[third, setThird] = useState("") 
  const[four, setFour] = useState("") 
  const[fifth, setFifth] = useState("") 

  const{ q5} = useContext(Context)

  async function getNumb() {
    
    try {
      const res = await axios.get(
      `http://localhost:8080/answers/count/${q5._id}`
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
    if(q5)
    getNumb()
  }, [q5])

  return (
    <div className='scoreCards'>
    {first && <>
    <h3 className='scoreCards_title'>{q5.text}</h3>
           <Q5Chart first={first} sec={sec} third={third} four={four} fifth={fifth}/>
          <p className='scoreCards_info_users'>100000 Answers</p>
    </>
        }
        </div>
  )
}
