import React,  {useContext}  from 'react'
import Q2Chart from '../Graphs/Q2Chart';
import Context from '../Context/Context';

export default function Q2Card() {
  const{ q2} = useContext(Context)

  return (
    <div className='scoreCards'>
    <h3 className='scoreCards_title'>{q2.text}</h3>
    <Q2Chart/>
    <p className='scoreCards_info_users'>100000 Answers</p>
    </div>
  )
}
