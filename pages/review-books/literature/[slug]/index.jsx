import React from 'react'
import classes from './Content.module.scss'
import Breadcrumb from '../../../../Tools/Breadcrumb/Home'
import ContentLit from '../../../../Dependent/Content/Home'
import {Content,Length,Random,topViews} from '../../../../Tools/API/Literature/APILiterature'
import Meta from '../../../../Meta/Home'


function ContentLiterature({data,sameBooks,shouldBooks}) {

    const router  = [
        {url:'/',title: 'Home'},
        {url:'/review-books',title: 'Review sách'},
        {url:'/review-books/literature',title: 'Sách văn học'},
        {url:`/review-books/literature/${data.slug}`,title: data.name},
    ]

    return (
        <div className={classes.content_literature}>
                <Meta title  = {data.name}/>
                <Breadcrumb data = {router}/>
                <p className={classes.title}>SÁCH VĂN HỌC</p>
                <ContentLit sameBooks = {sameBooks} shouldBooks = {shouldBooks} data = {data}/>
        </div>
    )
}

export async function getStaticProps({params}){

    const data = await Content(params.slug);
    const sameBooks = await Random();
    const shouldBooks  = await topViews();

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
    const paths = data.map((data)=>({params:{slug:data.slug}}))

    return{
        paths,
        fallback:false,
    }


}

export default ContentLiterature
