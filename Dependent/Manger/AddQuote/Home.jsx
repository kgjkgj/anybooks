import React from 'react'
import classes from './Home.module.scss'
import {toAdd} from '../../../Tools/API/Quote/APIQuote'
import Form from '../Form/Home'



function Home() {

    async function HandleAddSubjectQuote(data){
        await toAdd(data)
    }

    return (
        <div className={classes.quote}>
                <p className={classes.title}>Add Quote</p>
                <Form subject = {'Quote'} HandelAddSubject = {HandleAddSubjectQuote}  />
        </div>
    )
}

export default Home
