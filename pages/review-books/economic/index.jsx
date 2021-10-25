import React from 'react'
import classes from './Economic.module.scss'
import Breadcrumb from '../../../Tools/Breadcrumb/Home'
import Meta from '../../../Meta/Home'
import Wrap from '../../../Dependent/Wrap/Home'
import APIEconomic,{Length} from '../../../Tools/API/Economic/APIEconomic'
import Pagination from '../../../Dependent/Pagination/Home'

function Economic({data,lengthEconomics}) {
    const router = [
        {url:'/',title: 'Home'},
        {url:'/review-books',title: 'Review sách'},
        {url:'/review-books/economic',title: 'Sách kinh tế'},
    ]

    const idioms = `Review sách hay về kinh tế, kinh doanh, khởi nghiệp, 
    marketing, bán hàng, quản trị, lãnh đạo, doanh nhân, làm giàu, tài chính, 
    ngân hàng, phân tích kinh tế, chứng khoán, bất động sản, đầu tư, nhân sự, việc làm, kế toán, thuế, kiểm toán,...`


    return (
        <div className={classes.economic}>
            <Meta title = {'Review sách kinh tế, kinh doanh, marketing, bán hàng'}/>
            <Breadcrumb data  ={router}/>
            <p className={classes.title}>SÁCH KINH TẾ</p>
            <Wrap subject = {'economic'} data = {data}/>
            <Pagination pages = {lengthEconomics.length} length = {20}/>
            <div className={classes.idioms}>
                <p>{idioms}</p>
            </div>
        </div>
    )
}


export async function getServerSideProps(context){
    const pages = Number(context.query._page)
    const data =  await APIEconomic(pages);
    const lengthEconomics = await Length();
    return {
        props:{
            data,
            lengthEconomics
        }
    }
}

export default Economic
