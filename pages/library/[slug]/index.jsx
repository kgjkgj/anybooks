import React from 'react'
import Meta from '../../../Meta/Home'
import {keyLibrary,Content,Random,TopViewsLibrary} from '../../../Tools/API/Library/APILibrary'
import classes from './Content.module.scss'
import Breadcrumb from '../../../Tools/Breadcrumb/Home'
import ContentLibrary from '../../../Dependent/ContentLibrary/Home'


function Library({data,sameBooks,shouldBooks}) {

    const router = [
        {url:'/',title: 'Home'},
        {url:'/library',title: 'Thư Viện'},
        {url:`/library/${data.slug}`,title: data.name},
    ]

    return (
        <div className={classes.content_library} >
                <Meta title = {data.name}/>
                <Breadcrumb data = {router}/>
                <p className={classes.title}>THƯ VIỆN</p>
                <ContentLibrary sameBooks = {sameBooks} shouldBooks = {shouldBooks} data  ={data}/>
        </div>
    )
}

export async function getStaticProps({params}){

    const data = await Content(params.slug);
    const sameBooks = await Random();
    const shouldBooks = await TopViewsLibrary();
    return{
        props:{
            data,
            sameBooks,
            shouldBooks
        }
    }
}
export async function getStaticPaths(){
    const data = await keyLibrary();
    const paths = data.map((data)=>({params:{slug:data.slug}}));
    return{
        paths,
        fallback:false,
    }
}

export default Library
