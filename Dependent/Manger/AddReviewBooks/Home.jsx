import React from 'react'
import classes from './Home.module.scss'
import {toAdd} from '../../../Tools/API/ReviewBooks/APIReviewBooks'
import Form from '../Form/Home'

function Home() {

    async function HandelAddReviewBooks(data){
        await toAdd(data);
    }

    return (
        <div className = {classes.review_book} >
            <p className = {classes.title}>Add Review Books</p>
            <Form subject = {'Review Books'} HandelAddSubject = {HandelAddReviewBooks}  />
        </div>
    )
}

export default Home
