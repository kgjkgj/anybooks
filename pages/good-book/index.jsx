import React,{useEffect} from 'react'
import Meta from '../../Meta/Home'
import Breadcrumb from '../../Tools/Breadcrumb/Home'
import classes from './good_books.module.scss'
import APIGoodBook,{Length} from '../../Tools/API/GoodBook/APIGoodBook'
import Wrap from '../../Dependent/Wrap/Home'
import Pagination from '../../Dependent/Pagination/Home'
import {useRouter} from 'next/router'


function GoodBook({data,dataLength}) {

    const router = [
        {url:'/',title:'Home'},
        {url:'/good-book',title:'Top Sách Hay'},
    ]

    const idioms = `Tổng hợp toplist những cuốn sách
        hay nhất nên đọc mỗi ngày, giới thiệu, đề cử những 
        cuốn sách hay Anybooks.vn khuyên đọc và được độc giả yêu
        thích nhất với nhiều chủ đề khác nhau: Sách văn học, tiểu 
        thuyết, kinh tế, kinh doanh - khởi nghiệp, quản trị - lãnh đạo,
        marketing - bán hàng, sách tâm lý, kỹ năng sống, nuôi dạy con,
        sách thiếu nhi, truyện ngắn, tản văn hay,...Top sách hay nên đọc mỗi ngày!`

    return (
        <div className={classes.good_book}>
            <Meta title = "Top Sách Hay - Sách Hay Nên Đọc - Anybooks Khuyên Đọc"  />
            <Breadcrumb data = {router}/>
            <p className = {classes.title}>Top Sách Hay</p>
            <Wrap    subject = {'good-book'} data  = {data} />
            <Pagination pages = {dataLength.length} length = {20}/>
            <div className = {classes.idioms}>
                <p >{idioms}</p>
            </div>
        </div>
    )
}


export async function getServerSideProps (context){

    const data  = await APIGoodBook(Number(context.query._page));
    
    const dataLength  = await Length();
    if (!data) {
        return {
          notFound: true,
        }
    }
    return {
        props:{
            data,
            dataLength
        }
    }
}





export default GoodBook
