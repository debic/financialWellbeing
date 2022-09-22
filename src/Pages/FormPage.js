import React, { useState,useContext, useEffect } from 'react'
import MainForm from '../Components/MainForm'
import FormResults from './FormResults';
import Context from '../Components/Context/Context';

export default function FormPage() {
    const{ showForm, q1, q2, q3, q4, q5, q6, q7} = useContext(Context)

   if(!showForm) return <div>form loading...</div>
    return (
        <>
            {/* {!score ? (
                <MainForm setScore={setScore} formData={formData} setFormData={setFormData}  />
            ) : (
                <FormResults score={score} formQuestions={formQuestions} formData={formData} />
            )} */}

            <MainForm />

        </>
    )
}
