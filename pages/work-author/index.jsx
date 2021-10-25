import React from 'react'
import Wrap from '../../Dependent/Wrap/Home'
import Meta from '../../Meta/Home'
import APIWorkAuthor, { Length } from '../../Tools/API/Work/APIWork'
import Breadcrumb from '../../Tools/Breadcrumb/Home'
import classes from './work_author.module.scss'
import  Pagination from '../../Dependent/Pagination/Home'
import dynamic from 'next/dynamic'
const Text  = dynamic(()=>import('../../Dependent/Text/Home'))

function Work({data,lengthWork}) {
    const router = [
        {url:'/',title: 'Home'},
        {url:'/work_author',title: 'Tác giả - Tác phẩm'},
    ]

    const idioms = `Góc giới thiệu những tác giả, tác phẩm nổi bật, sách theo tác giả 
        nhiều chủ đề khác nhau văn học, tiểu thuyết, kinh tế, kinh doanh - khởi nghiệp, quản trị -
        lãnh đạo, marketing - bán hàng, sách tâm lý, kỹ năng sống, nuôi dạy con, sách thiếu nhi, 
        truyện ngắn, tản văn hay,...Trong nền văn hoá Việt Nam và nền tri thức nhân loại trên toàn thế giới tự cổ chí kim.`


   
    
    return (
        <div className={classes.work_author}>
            <Meta title = {'Giới thiệu Tác giả - Tác phẩm | AnyBooks.vn'}/>
            <Breadcrumb data = {router}/>
            <p className={classes.title}>TÁC GIẢ - TÁC PHẨM</p>
            <Wrap subject = {'work'} data = {data}/>
            <Pagination pages = {lengthWork.length} length = {20}  />
            <div className={classes.idioms}>
                <p>{idioms}</p>
            </div>
        </div>
    )
}

export async function getServerSideProps(context){

    const pages = Number(context.query._page)

    const data = await APIWorkAuthor(pages);
    const lengthWork   = await Length();
    if (!data) {
        return {
          notFound: true,
          lengthWork,
        }
      }
    return{
        props:{
            data,
            lengthWork
        }
    }
}

export default Work
