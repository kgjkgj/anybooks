import React from 'react'
import classes from './Home.module.scss'
import Form from '../Form/Home'
import {toAdd} from '../../../Tools/API/Library/APILibrary'



function Home() {


    async function AddSubjectLibrary(data){
        await toAdd(data);
    }

    return (
        <div className={classes.library}>
            <p className={classes.title}>Add Library</p>
            <Form subject = {'Library'} HandelAddSubject = {AddSubjectLibrary}  />
        </div>
    )
}

export default Home
