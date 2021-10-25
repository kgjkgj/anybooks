import React from 'react'
import classes from './Literature.module.scss'
import Breadcrumb from '../../../Tools/Breadcrumb/Home'
import Wrap from '../../../Dependent/Wrap/Home'
import Meta from '../../../Meta/Home'
import APILiterature,{Length} from '../../../Tools/API/Literature/APILiterature'
import Pagination from '../../../Dependent/Pagination/Home'
function Literature({data,lengthLiterature}) {
    const router  =[
        {url:'/',title: 'Home'},
        {url:'/review-books',title: ' Review sách'},
        {url:'/review-books/literature',title: 'Sách văn học'},
    ]

    const idioms = `Review các tác phẩm sách văn học: Tiểu thuyết, truyện ngắn - 
    tản văn, truyện trinh thám - kiếm hiệp, truyện ngôn tình, tác phẩm kinh điển,
     huyền bí, giả tưởng, kinh dị, thơ ca, ca dao, hò vè, tục ngữ, thành ngữ, truyện cười, 
     các tác phẩm văn học dân gian Việt Nam và thế giới.`

    return (
        <div className={classes.literature}>
            <Meta title = {'Sách văn học: Tiểu thuyết, truyện ngắn - tản văn | AnyBooks.vn'}/>
            <Breadcrumb data = {router}/>
            <p className = {classes.title}>SÁCH VĂN HỌC</p>
            <Wrap subject = {'literature'} data = {data}/>
            <Pagination pages = {lengthLiterature.length}  length = {20} />
            <div className = {classes.idioms}>
                <p>{idioms}</p>
            </div>
        </div>
    )
}
export async function getServerSideProps(context){
    const pages = Number(context.query._page)
    const data  = await APILiterature(pages);
    const lengthLiterature = await Length();
    return{
        props:{
            data,
            lengthLiterature
        }
    }
}



export default Literature
