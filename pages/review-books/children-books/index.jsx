import React from 'react'
import classes from './ChildrenBooks.module.scss'
import Meta from '../../../Meta/Home'
import APIChildrenBooks,{Length} from '../../../Tools/API/ChildrenBooks/APIChildrenBooks'
import Breadcrumb from '../../../Tools/Breadcrumb/Home'
import Wrap from '../../../Dependent/Wrap/Home'
import Pagination from '../../../Dependent/Pagination/Home'


function ChildrenBooks({data,lengthChildBooks}) {
    const router = [
        {url:'/',title: 'Home'},
        {url:'/review-books',title: 'Review sách'},
        {url:'/review-books/children-books',title: 'Sách thiếu nhi'},
    ]
    
    const idioms = `Sách thiếu nhi, các tiểu thuyết, truyện dành cho thiếu nhi, 
    kiến thức bách khoa, kỹ năng sống cho trẻ, tô màu, luyện chữ, từ điển thiếu nhi,
    thẻ học thông minh và các tạp chí dành cho thiếu nhi,..`



    return (
        <div className={classes.children_books}>
            <Meta title = {'Sách thiếu nhi - Sách truyện cho thiếu nhi | AnyBooks.vn'}/>
            <Breadcrumb data = {router}/>
            <p className={classes.title}>SÁCH THIẾU NHI</p>
            <Wrap subject = {'children_books'} data ={data}/>
            <Pagination pages = {lengthChildBooks.length} length  ={20}/>
            <div className={classes.idioms}>
                <p>{idioms}</p>
            </div>
        </div>
    )
}

export async function getServerSideProps(context){

    const pages = Number(context.query._page)

    const data =  await APIChildrenBooks(pages);
    const lengthChildBooks  = await Length();
    return{
        props:{
            data,
            lengthChildBooks,
        }
    }
}

export default ChildrenBooks
