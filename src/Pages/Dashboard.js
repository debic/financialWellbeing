import React from 'react'
import GeneralScoreCard from '../Components/Cards/GeneralScoreCard'
import Q1Card from '../Components/Cards/Q1Card'
import Q2Card from '../Components/Cards/Q2Card'
import Q3Card from '../Components/Cards/Q3Card'
import Q4Card from '../Components/Cards/Q4Card'
import Q5Card from '../Components/Cards/Q5Card'
import Q6Card from '../Components/Cards/Q6Card'
import Q7Card from '../Components/Cards/Q7Card'
import Q8Card from '../Components/Cards/Q8Card'
import Q9Card from '../Components/Cards/Q9Card'
import Q10Card from '../Components/Cards/Q10Card'

export default function Dashboard() {
  return (
    <div className='dashboard'>
    
        <GeneralScoreCard/>
        <Q1Card/>
        <Q2Card/>
        <Q3Card/>
        <Q4Card/>
        <Q5Card/>
        <Q6Card/>
        <Q7Card/>
        <Q8Card/>
        <Q9Card/>
        <Q10Card/>
    </div>
  )
}
