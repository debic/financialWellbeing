import React, { useState,useContext } from 'react'
import MainForm from '../Components/MainForm'
import FormResults from './FormResults';
import Context from '../Components/Context/Context';

export default function FormPage() {
    const [score, setScore] = useState(null);
    const [formQuestions, setFormQuestions] = useState({});
    const{ showForm, q1} = useContext(Context)
    const [formData, setFormData] = useState({
            [q1._id]: "",
            [q2._id]: "",
            [q3._id]: "",
            [q4._id]: "",
            [q5._id]: "",
            [q6._id]: "",
            [q7._id]: "",
          });

   if(!showForm) return <div>form loading...</div>
    return (
        <>
            {!score ? (
                <MainForm setScores={setScore} formData={formData} setFormData={setFormData}  />
            ) : (
                <FormResults scores={score} formQuestions={formQuestions} formData={formData} />
            )}
        </>
    )
}
