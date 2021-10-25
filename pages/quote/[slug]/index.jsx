import React from 'react'
import classes from './Content.module.scss'
import ContentQuote from '../../../Dependent/Content/Home'
import Meta from '../../../Meta/Home'
import {keyQuote,Content,Random,TopViewQuote} from '../../../Tools/API/Quote/APIQuote'
import Breadcrumb from '../../../Tools/Breadcrumb/Home'



function Quote({data,sameBooks,shouldBooks}) {
    const router = [
        {url:'/',title:'Home'},
        {url:'/quote',title:'Trích dẫn hay'},
        {url:`/quote/${data.slug}`,title:data.name},
    ]
    return (
        <div className={classes.content_quote}>
            <Meta title = {data.name}/>
            <Breadcrumb data = {router}/>
            <p className = {classes.title}>TRÍCH DẪN HAY</p>
            <ContentQuote sameBooks = {sameBooks} shouldBooks = {shouldBooks} data  ={data}/>
        </div>
    )
}


export async function getStaticProps({params}){

    const data = await Content(params.slug);
    const sameBooks =  await Random();
    const shouldBooks = await TopViewQuote();
    return{
        props:{
            data,
            sameBooks,
            shouldBooks
        }
    }


}
export async function getStaticPaths(){
    const data = await keyQuote();
    const paths = data.map((data)=>({params:{slug:data.slug}}));
    return{paths,fallback:false}
}

export default Quote
