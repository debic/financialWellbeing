import React from 'react'
import GeneralScoreCard from '../Components/Cards/GeneralScoreCard'
import Q1Card from '../Components/Cards/Q1Card'
import Q2Card from '../Components/Cards/Q2Card'
import Q3Card from '../Components/Cards/Q3Card'
import Q4Card from '../Components/Cards/Q4Card'
import Q5Card from '../Components/Cards/Q5Card'
import Q6Card from '../Components/Cards/Q6Card'
import Q7Card from '../Components/Cards/Q7Card'


export default function Dashboard() {
    
  return (
    <div className='dashboard'>
    
        <GeneralScoreCard/>
        <Q1Card/>
        <Q2Card/>

        <Q4Card/>
        <Q5Card/>
        <Q6Card/>
        <Q7Card/>
        <Q3Card/>

    </div>
  )
}
