import React, {useState,useContext} from 'react'
import axios from 'axios'
import Q1Chart from '../Graphs/Q1Chart';
import Context from '../Context/Context';
export default function Q1Card() {
  const[never, setNever] = useState("90") 
  const[rarely, setRarely] = useState("90") 
  const[sometimes, setSometimes] = useState("90") 
  const[often, setOften] = useState("90") 
  const[always, setAlways] = useState("90") 

  const{ q1} = useContext(Context)

  console.log(q1._id)
  async function getNumb() {
    
    try {
      const res = await axios.get(
      `http://localhost:8080/answers/count/${q1._id}`
      );

      console.log(res)
    } catch (err) {
      console.log(err);
    }
  }

  getNumb()

  return (
    <div className='scoreCards'>
        <h3 className='scoreCards_title'>{q1.text}</h3>
        <Q1Chart never={never}/>
        <p className='scoreCards_info_users'>100000 Answers</p>
    </div>
  )
}
