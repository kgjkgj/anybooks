import React from 'react'
import classes from './Content.module.scss'
import Breadcrumb from '../../../Tools/Breadcrumb/Home'
import {Content,Length,Random,topViewsWork} from '../../../Tools/API/Work/APIWork'
import Meta from '../../../Meta/Home'
import Contents from '../../../Dependent/Content/Home'

function ContentWork({data,sameBooks,shouldBooks}) {

   

    const router = [
        {url:'/',title: 'Home'},

        {url:'/work-author',title: ' Tác giả - Tác phẩm'},

        {url:`/work-author/${data.slug}`,title: `${data.name}`},
        
    ]
    return (
        <div className = {classes.content_work}>
            <Meta title = {data.name}/>
            <Breadcrumb data = {router} />
            <p className = {classes.title}>TÁC GIẢ - TÁC PHẨM</p>
            <Contents sameBooks = {sameBooks} shouldBooks = {shouldBooks} data ={data}/>
        </div>
    )
}

export async function  getStaticProps({params}){
    const data = await Content(params.slug);
    const sameBooks = await Random();
    const shouldBooks  = await topViewsWork();
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

export default ContentWork
