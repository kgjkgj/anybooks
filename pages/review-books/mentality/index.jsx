import React from 'react'
import classes from './Mentality.module.scss'
import Meta from '../../../Meta/Home'
import APIMentality,{Length} from '../../../Tools/API/Mentality/APIMentality'
import Breadcrumb from '../../../Tools/Breadcrumb/Home'
import Wrap from '../../../Dependent/Wrap/Home'
import Pagination from '../../../Dependent/Pagination/Home'
function Mentality({data,lengthMentality}) {

    const router = [
        {url:'/',title: 'Home'},
        {url:'/review-books',title: ' Review sách'},
        {url:'/review-books/mentality',title: 'Tâm lý - Kỹ năng sống'},
    ]

    const idioms = `Sách tâm lý, sách kỹ năng sống, rèn luyện nhân cách, 
    sách phát triển bản thân, kỹ năng giao tiếp, sách cho tuổi mới lớn,...review những 
    cuốn sách kỹ năng sống hay dành cho bạn trẻ`

    return (
        <div className={classes.mentality}>
            <Meta title = {'Sách tâm lý,  kỹ năng sống phát triển bản thân | Anybooks.vn'}/>
            <Breadcrumb data = {router}/>
            <p className = {classes.title}>TÂM LÝ - KỸ NĂNG SỐNG</p>
            <Wrap subject = {'mentality'} data  ={data}/>
            <Pagination pages = {lengthMentality.length}  length = {20} />
            <div className={classes.idioms}>
                <p>{idioms}</p>
            </div>
        </div>
    )
}

export async function getServerSideProps(context){
    const pages = Number(context.query._page)
    const data  = await APIMentality(pages);
    const lengthMentality   = await Length();
    return {
        props:{
            data,
            lengthMentality
        }
    }
}

export default Mentality
