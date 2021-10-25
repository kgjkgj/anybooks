import React from 'react'
import classes from './Home.module.scss'
import Scroll from '../../Tools/Scroll/Scroll'
import WrapSame from './WrapSame/Home'
import WrapShould from './WrapShould/Home'
import SideBar from '../../Dependent/SideBar/Home'
import Link from 'next/link'
import Comment from '../../Tools/Comment/Home'
import LikeShare from '../../Tools/LikeShare/Home'
import SaveFaceBook from '../../Tools/SaveFaceBook/Home'
function Home({data,sameBooks,shouldBooks}) {

    return (
        <div className = {classes.content}>
            <div className = {classes.left}>
                <Scroll/>
                <p className = {classes.name}>{data.name}</p>
                <div className = {classes.contents} dangerouslySetInnerHTML={{__html: data.content}}></div>
                <div className={classes.notify}>
                    <p>(*) Bản quyền bài viết thuộc về <span style = {{fontWeight:'bold'}}>AnyBooks.vn.</span> Khi chia sẻ, cần phải dẫn link, trích dẫn nguồn đầy đủ gồm tên 
                        người viết và AnyBooks - Kết nối tri thức. Mọi hành vi sao chép hoặc trích nguồn, chia sẻ bài viết không đầy đủ đều 
                        không được chấp nhận và phải gỡ bỏ.
                    </p>
                    <p>
                        Về trang chủ:  <Link href = {'/'}>AnyBooks.vn</Link>
                    </p>
                </div>
                <div className={classes.comment}>
                    <p> 
                        <LikeShare/>
                        <SaveFaceBook/>
                    </p>

                    <Comment/>
                    
                </div>
                <div className={classes.same_books}>
                    <p className={classes.title}>Sách cùng danh mục</p>
                    <WrapSame data = {sameBooks}/>
                </div>
                <div className = {classes.should_books}>
                    <p className={classes.title}>Sách hay nên đọc</p>
                    <WrapShould data = {shouldBooks}/>
                </div>
            </div>
            <div className = {classes.right}>
                <SideBar/>
            </div>
        </div>
    )
}

export default Home
