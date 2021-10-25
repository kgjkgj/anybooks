import React from 'react'
import Form from '../Form/Home'
import classes from './Home.module.scss'
import {toAdd} from '../../../Tools/API/GoodBook/APIGoodBook'

function Home() {

    async function HandelAddGoodBooks(data){
       
        await toAdd(data);
    }

    return (
        <div className={classes.good_books}>
                <p className={classes.title}>Add Good Books</p>
                <Form subject  ="Good Books" HandelAddSubject = {HandelAddGoodBooks} />
        </div>
    )
}

export default Home
