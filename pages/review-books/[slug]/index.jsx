import React from 'react'
import {keyReviewsBooks,Content,RandomReviewBooks,TopViewsReviewBooks} from '../../../Tools/API/ReviewBooks/APIReviewBooks'
import ContentReview from '../../../Dependent/Content/Home'
import Meta from '../../../Meta/Home'
import classes from './Content.module.scss'
import Breadcrumb from '../../../Tools/Breadcrumb/Home'

function ContentReviewBooks({data,sameBooks,shouldBooks}) {

    const router = [
        {url:'/',title: 'Home'},
        {url:'/review-books',title: 'Review sách'},
        {url:`/review-books/${data.slug}`,title: data.name},
    ]

    return (
        <div className =  {classes.content}>
            <Meta title = {data.name}/>
            <Breadcrumb data = {router}/>
            <p className = {classes.title}>REVIEW SÁCH</p>
            <ContentReview sameBooks = {sameBooks} shouldBooks = {shouldBooks}    data  ={data}/>
        </div>
    )
}


export async function getStaticProps({params}){
    const data = await Content(params.slug);
    const sameBooks = await RandomReviewBooks();
    const shouldBooks  = await TopViewsReviewBooks();

    return{
        props:{
            data,
            sameBooks,
            shouldBooks,
        }
    }
    
}


export async function getStaticPaths(){

    const data  = await keyReviewsBooks();
    const paths =  data.map((data)=> ({params:{slug:data.slug}}))
    return { paths, fallback: false }

}


export default ContentReviewBooks
