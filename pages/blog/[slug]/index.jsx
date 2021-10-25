import React from 'react'
import classes from './Content.module.scss'
import {keyBlog,Content,TopViewBlog,Random} from '../../../Tools/API/Blog/APIBlog'
import Meta from '../../../Meta/Home'
import Breadcrumb from '../../../Tools/Breadcrumb/Home'
import ContentBlog from '../../../Dependent/Content/Home'



function Blog({data,sameBooks,shouldBooks}) {
    const router = [
        {url:'/',title: 'Home'},
        {url:'/blog',title: 'Blog tổng hợp'},
        {url:`/blog/${data.slug}`,title: data.name},
    ]

    return (
        <div className={classes.content_blog}>
            <Meta title  = {data.name}/>
            <Breadcrumb data = {router}/>
            <p className={classes.title}>BLOG TỔNG HỢP</p>
            <ContentBlog sameBooks = {sameBooks} shouldBooks = {shouldBooks} data = {data}/>
        </div>
    )
}

export async function getStaticProps({params}){

    const data = await Content(params.slug);

    const sameBooks = await Random();

    const shouldBooks = await TopViewBlog();
    return{
        props:{
            data ,
            sameBooks,
            shouldBooks
        }
    }

}
export async function getStaticPaths(){

    const data  = await keyBlog();
    const paths  = data.map((data)=>({params:{slug:data.slug}}))

    return{paths,fallback:false}
}

export default Blog
