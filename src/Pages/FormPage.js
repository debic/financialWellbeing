import React, { useState,useContext } from 'react'
import MainForm from '../Components/MainForm'
import FormResults from './FormResults';
import Context from '../Components/Context/Context';

export default function FormPage() {
    const [score, setScore] = useState(null);
    const [formQuestions, setFormQuestions] = useState({});
    const{ showForm} = useContext(Context)

   if(!showForm) return <div>form loading...</div>
    return (
        <>
            {!score ? (
                <MainForm setScores={setScore}  />
            ) : (
                <FormResults scores={score} formQuestions={formQuestions} />
            )}
        </>
    )
}
