import React, {useState} from 'react'
import MunicipalityComparation from '../Graphs/MunicipalityComparation'
import MunicipalityScoreYears from '../Graphs/MunicipalityScoreYears'
import axios from 'axios'
import { useContext } from 'react'
import Context from '../Context/Context'
export default function GeneralScoreCard() {
    const{ generalScore} = useContext(Context)




  return (
    <div className='scoreCards_general'>

        <div className='scoreCards_general_info'>
                <h3 className='scoreCards_general_title'>General score</h3>
         

            <h2 className='scoreCards_info'>{generalScore}<span>/100</span></h2>
            <p className='scoreCards_general_info_users'>100000 Answers</p>

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
