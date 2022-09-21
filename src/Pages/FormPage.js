import React, { useState } from 'react'
import MainForm from '../Components/MainForm'
import FormResults from './FormResults';

export default function FormPage() {
    const [score, setScore] = useState(null);
    const [formQuestions, setFormQuestions] = useState({});
    return (
        <>
            {!score ? (
                <MainForm setScores={setScore} setFormQuestions={setFormQuestions} />
            ) : (
                <FormResults scores={score} formQuestions={formQuestions} />
            )}
        </>
    )
}
