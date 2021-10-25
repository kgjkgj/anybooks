import React from 'react'
import classes from './Content.module.scss'
import {ShowIntroductions} from '../../Tools/API/Introductions/APIIntroductions'
import Breadcrumb from '../../Tools/Breadcrumb/Home'
import Meta from '../../Meta/Home'
import SideBar from '../../Dependent/SideBar/Home'
import Comment from '../../Tools/Comment/Home'
import LikeShare from '../../Tools/LikeShare/Home'
import Scroll from '../../Tools/Scroll/Scroll'
function Introductions({data}) {
    const router = [
        {url:'/',title: 'Home'},
        {url:'/introductions',title: 'Giới thiệu'},
    ]
    const descriptions = 'Giới thiệu về AnyBooks - Kênh Thông Tin Về Sách, Sách Hay Nên Đọc, Review Sách - Kết Nối Tri Thức, Lan Toả Văn Hoá Đọc Trong Cộng Đồng Yêu Sách Việt Nam'
    return (
        <div className={classes.introductions}>
            <Meta description={descriptions} title = {'Giới thiệu AnyBooks.vn - Kết Nối Tri Thứ'}/>
            <Breadcrumb data = {router}/>
            <Scroll/>
            <p className={classes.name}>{data.name}</p>
            <div className = {classes.wrap_content}>
                <div className={classes.left}>
                    <div className={classes.content} dangerouslySetInnerHTML={{__html: data.content}}></div>
                    <div className={classes.comment}>
                        <LikeShare/>
                        <Comment/>
                    </div>
                </div>
                <div className={classes.right}>
                    <SideBar/>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps(){
    const data  = await ShowIntroductions();
    return{
        props:{
            data,
        }
    }
}

export default Introductions
