import React from 'react'
import classes from './Content.module.scss'
import {Content,Length,Random,topViews} from '../../../../Tools/API/Mentality/APIMentality'
import Meta from '../../../../Meta/Home'
import Breadcrumb from '../../../../Tools/Breadcrumb/Home'
import ContentMentalitys from '../../../../Dependent/Content/Home'



function Mentality({data,sameBooks,shouldBooks}) {

    const router = [
        {url:'/',title: 'Home'},
        {url:'/review-books',title: 'Review sách'},
        {url:'/review-books/mentality',title: 'Tâm lý - Kỹ năng sống'},
        {url:`/review-books/mentality/${data.slug}`,title: data.name},
    ]

    return (
        <div className = {classes.content_mentality}>
            <Meta title = {data.name}/>
            <Breadcrumb data  ={router}/>
            <p className = {classes.title}>TÂM LÝ - KỸ NĂNG SỐNG</p>
            <ContentMentalitys sameBooks = {sameBooks} shouldBooks = {shouldBooks}  data = {data}/>
        </div>
    )
}

export async function getStaticProps({params}){

    const data = await Content(params.slug);
    const sameBooks = await Random();
    const shouldBooks =  await topViews();
    return{
        props:{
            data,
            sameBooks,
            shouldBooks
        }
    }

}
export async function getStaticPaths(){

    const data = await Length();

    const paths = data.map((data)=> ({params:{slug:data.slug}}));

    return{
        paths,
        fallback:false,
    }
}

export default Mentality
