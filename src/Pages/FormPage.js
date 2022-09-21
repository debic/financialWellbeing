import React, { useState } from 'react'
import MainForm from '../Components/MainForm'
import FormResults from './FormResults';

export default function FormPage() {
    const [score, setScore] = useState(null);
    return (
        <>
            {!score ? (
                <MainForm setScores={setScore} />
            ) : (
                <FormResults scores={score} />
            )}
        </>
    )
}
