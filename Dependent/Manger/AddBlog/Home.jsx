import React from 'react'
import classes from './Home.module.scss'
import {toAdd} from '../../../Tools/API/Blog/APIBlog'
import Form from '../Form/Home'



function Home() {

    async function HandleAddSubjectBlog(data){
        await toAdd(data)
    }
    

    return (
        <div className={classes.blog}>
            <p className={classes.title}>Add Blog</p>
            <Form subject = {'Blog'} HandelAddSubject = {HandleAddSubjectBlog}/>
        </div>
    )
}

export default Home
