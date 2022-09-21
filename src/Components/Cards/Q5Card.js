import React,  {useContext}   from 'react'
import Context from '../Context/Context';

export default function Q5Card() {
  const{ q5} = useContext(Context)

  return (
    <div className='scoreCards'>
    <h3 className='scoreCards_title'>{q5.text}</h3>
    <h2 className='scoreCards_info'>20<span>/100</span></h2>
    <p className='scoreCards_info_users'>100000 Answers</p>
</div>
  )
}
