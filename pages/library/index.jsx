import React from 'react'
import Pagination from '../../Dependent/Pagination/Home'
import Wrap from '../../Dependent/Wrap/Home'
import Meta from '../../Meta/Home'
import APILibrary, { Length } from '../../Tools/API/Library/APILibrary'
import Breadcrumb from '../../Tools/Breadcrumb/Home'
import classes from './library.module.scss'


function Library({data,lengthLibrary}) {

    const router = [
        {url:'/',title: 'Home'},
        {url:'/library',title: 'Thư Viện'},
    ]

    const idioms = `Thư viện sách và cuộc sống - Kho tàng tri thức AnyBooks.vn, Những mẩu truyện ngắn, những cuốn truyện hay, thư viện ebook miễn phí, những dòng tản văn hay ý nghĩa, danh ngôn bất hủ, văn học dân gian,...`

    return (
        <div className={classes.library}>
            <Meta title  = {'Thư viện sách và cuộc sống - Kho tàng tri thức AnyBooks.vn'}/>
            <Breadcrumb data = {router}/>
            <p className={classes.title}>THƯ VIỆN</p>
            <Wrap subject = {'library'} data = {data}/>
            <Pagination pages = {lengthLibrary.length} length = {20}/>
            <div className={classes.idioms}>
                <p>{idioms}</p>
            </div>
        </div>
    )
}
export async function getServerSideProps(context){

    const page = Number(context.query._page);

    const data = await APILibrary(page);
    const lengthLibrary = await Length();
    if (!data) {
        return {
          notFound: true,
        }
      }
    return{
        props:{
            data,
            lengthLibrary,
        }
    }
} 

export default Library
