import React, {useState} from 'react'
import MunicipalityComparation from '../Graphs/MunicipalityComparation'
import MunicipalityScoreYears from '../Graphs/MunicipalityScoreYears'
import axios from 'axios'
export default function GeneralScoreCard() {

const[numb, setNumb] = useState("90") 

    // async function getNumb() {
    //     try {
    //       const res = await axios.get(
    //         "http://localhost:8080/answers/count", {params: {question: "Do you save money?"}}
    //       );
    //       console.log(res)
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   }

    //   getNumb()

  return (
    <div className='scoreCards_general'>

        <div className='scoreCards_general_info'>
            <div className='scoreCards_general_title_div'>
                <h3 className='scoreCards_general_title'>General score</h3>
                <p className='scoreCards_general_info_users'>100000 Answers</p>
            </div>

            <h2 className='scoreCards_info'>{numb}<span>/100</span></h2>
        </div>
        <div className='scoreCards_general_graphs'>

            <div className='scoreCards_general_graph1'>
            </div>

            <div className='scoreCards_general_graph2'>
                <MunicipalityComparation/>
            </div>

        </div>
    
    </div>
  )
}
