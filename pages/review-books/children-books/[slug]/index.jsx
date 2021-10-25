import React from 'react'
import classes from './Content.module.scss'
import Breadcrumb from '../../../../Tools/Breadcrumb/Home'
import ContentChildrenBooks from '../../../../Dependent/Content/Home'
import Meta from '../../../../Meta/Home'
import {Content,Length,Random,topViews} from '../../../../Tools/API/ChildrenBooks/APIChildrenBooks'

function ChildrenBooks({data,sameBooks,shouldBooks}) {

    const router = [
        {url:'/',title: 'Home'},
        {url:'/review-books',title: 'Review sách'},
        {url:'/review-books/children-books',title: 'Sách thiếu nhi'},
        {url:`/review-books/children-books/${data.slug}`,title: data.name},
    ]

    return (
        <div className = {classes.children_books}>
            <Meta title  ={data.name}/>
            <Breadcrumb data  = {router}/>
            <p className = {classes.title}>SÁCH THIẾU NHI</p>
            <ContentChildrenBooks sameBooks = {sameBooks} shouldBooks = {shouldBooks} data = {data}/>
        </div>
    )
}


export async function getStaticProps({params}){
    
    const data  =  await Content(params.slug);

    const sameBooks =  await Random();

    const shouldBooks  =  await topViews();

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
    const paths = data.map((data) =>({params:{slug:data.slug}}));
    return{paths,fallback:false}
}

export default ChildrenBooks
