import React from 'react'
import Meta from '../../Meta/Home'
import classes from './review_books.module.scss'
import Breadcrumb from '../../Tools/Breadcrumb/Home'
import APIReviewBooks,{Length} from '../../Tools/API/ReviewBooks/APIReviewBooks'
import Wrap from '../../Dependent/Wrap/Home'
import Pagination from '../../Dependent/Pagination/Home'



function ReviewBooks({data,lengthReviewBooks}) {

    const router = [
        {url:'/',title: 'Home'},
        {url:'/review-books',title: 'Review sách'},
    ]

    const idioms = `Review sách - Chuyên trang review sách những cuốn sách hay ý nghĩa, 
    bán chạy và mới nhất 2021, bài viết đánh giá từ cộng đồng yêu sách Anybooks. Tổng hợp
    những bài viết cảm nhận, đánh giá sách hay nên đọc mỗi ngày, những cuốn sách chứa đựng 
    tri thức tinh hoa của nhân loại, những cuốn sách hay từ nhiều lĩnh vực như văn học, tiểu 
    thuyết, tản văn, kinh doanh, marketing, bán hàng, kỹ năng sống,...`


    return (
        <div className={classes.review_books}>
            <Meta title = "Review sách - Review những cuốn sách hay từ Anybooks.vn" />
            <Breadcrumb data = {router}/>
            <p className = {classes.title}>REVIEW SÁCH</p>
            <Wrap subject = {'review-books'} data = {data}/>
            <Pagination pages = {lengthReviewBooks.length} length = {20}/>
            <div className={classes.idioms}>
                <p>{idioms}</p>
            </div>
        </div>
    )
}

export async function getServerSideProps(context){

    const pages = Number(context.query._page);

    const data = await APIReviewBooks(pages);
    const lengthReviewBooks = await Length();
    if (!data) {
        return {
          notFound: true,
        }
      }
    return {
        props:{
            data,
            lengthReviewBooks
        }
    }
}

export default ReviewBooks
