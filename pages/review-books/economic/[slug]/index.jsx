import React from 'react'
import classes from './Content.module.scss'
import {Content,Length,Random,topViews} from '../../../../Tools/API/Economic/APIEconomic'
import ContentEconomic from '../../../../Dependent/Content/Home'
import Meta from '../../../../Meta/Home'
import Breadcrumb from '../../../../Tools/Breadcrumb/Home'

function Economic({data,sameBooks,shouldBooks}) {
    const router = [
        {url:'/',title: 'Home'},
        {url:'/review-books',title: 'Review sách'},
        {url:'/review-books/economic',title: 'Sách kinh tế'},
        {url:`/review-books/economic/${data.slug}`,title: data.name},
    ]


    return (
        <div className = {classes.economic}>
            <Meta title = {data.name}/>
            <Breadcrumb data = {router}/>
            <p className = {classes.title}>SÁCH KINH TẾ</p>
            <ContentEconomic sameBooks = {sameBooks} shouldBooks = {shouldBooks} data  = {data}/>
        </div>
    )
}

export async function getStaticProps({params}){
    const data =  await Content(params.slug);
    const sameBooks  = await Random();
    const shouldBooks  = await topViews();
    return{
        props:{
            data,
            sameBooks,
            shouldBooks,
        }
    }
}

export async function getStaticPaths(){
    const data =  await Length();
    const paths = data.map((data)=>({params:{slug:data.slug}}));
    return{paths,fallback:false}
}



export default Economic
