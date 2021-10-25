import React from 'react'
import classes from './Home.module.scss'
import Form from '../Form/Home'
import {toAdd} from '../../../Tools/API/Work/APIWork'


function Home() {

    async function HandleAddWork(data){
        await toAdd(data)
    }

    return (
        <div className={classes.work}>
                <p className={classes.title}>Add Work-Author</p>
                <Form subject = {'Work-Author'} HandelAddSubject  = {HandleAddWork}  />
        </div>
    )
}

export default Home
