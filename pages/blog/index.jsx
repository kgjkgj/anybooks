import React,{useState} from 'react'
import Meta from '../../Meta/Home'
import APIBlog,{Length} from '../../Tools/API/Blog/APIBlog'
import Breadcrumb from '../../Tools/Breadcrumb/Home'
import classes from './blog.module.scss'
import Wrap from '../../Dependent/Wrap/Home'
import OverLay from '../../Dependent/OverLay/OverLay'
import Pagination from '../../Dependent/Pagination/Home'


function Blog({data,lengthBlog}) {
    const router = [
        {url:'/',title: 'Home'},
        {url:'/blog',title: 'Blog tổng hợp'},
    ]

    const idioms = `Blog tổng hợp - Chia sẻ những bài viết hay liên quan về sách, lối sống, phong cách và văn hóa đọc của giới trẻ, tản mạn về tình yêu, cuộc sống, gia đình, bạn bè,...`

    if(!data){
        return(
            <OverLay/>
        )
    }
    return (
        <div className={classes.blog}>
            <Meta title = {'Blog tổng hợp - Những bài viết hay liên quan về sách'}/>
            <Breadcrumb data  = {router}/>
            <p className={classes.title}>BLOG TỔNG HỢP</p>
            <Wrap subject = {'blog'} data  ={data}/>
            <Pagination pages = {lengthBlog.length} length = {20}/>
            <div className={classes.idioms}>
                <p>{idioms}</p>
            </div>
        </div>
    )
}

export async function getServerSideProps(context){

    const data = await APIBlog(Number(context.query._page));

    const lengthBlog = await Length();
    if (!data) {
        return {
          notFound: true,
        }
      }
    return {
        props:{
            data,
            lengthBlog
        }
    }
}


export default Blog
