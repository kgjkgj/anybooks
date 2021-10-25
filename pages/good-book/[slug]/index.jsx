import React from 'react'
import ContentBooks from '../../../Dependent/Content/Home'
import Meta from '../../../Meta/Home'
import { Content, Length, RandomGoodBooks, TopViewsGoodBooks } from '../../../Tools/API/GoodBook/APIGoodBook'
import Breadcrumb from '../../../Tools/Breadcrumb/Home'
import classes from './Content.module.scss'
import {useRouter} from 'next/router'

function ContentGoodBook({data,shouldBooks,sameBooks}) {
    
    const router = [
        {url:'/',title: 'Home'},
        {url:'/good-book',title: 'Top Sách Hay'},
        {url:`/good-book/${data.slug}`,title: data.name},
    ]

    

    return (
        <div className={classes.good_book}>
            <Meta title = {data.name}/> 
            <Breadcrumb data  ={router}/>
            <p className={classes.title}>TOP SÁCH HAY</p>
            <ContentBooks shouldBooks = {shouldBooks} sameBooks = {sameBooks} data = {data}/>
        </div>
    )
}


export async function getStaticProps({params}){

    const data  = await Content(params.slug);

    const shouldBooks = await TopViewsGoodBooks();

    const sameBooks = await RandomGoodBooks();

    return{
        props:{
            data,
            shouldBooks,
            sameBooks,
        }
    }
}

export async function getStaticPaths(){
    const data = await  Length();
    const paths = data.map((data)=>  ({params:{slug:data.slug}}))
    return{
        paths,
        fallback:false,
    }
}


export default ContentGoodBook
