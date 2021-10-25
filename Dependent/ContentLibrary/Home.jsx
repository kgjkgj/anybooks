import React from 'react'
import classes from './Home.module.scss'
import Scroll from '../../Tools/Scroll/Scroll'
import WrapSame from '../Content/WrapSame/Home'
import WrapShould from '../Content/WrapShould/Home'
import SideBar from '../../Dependent/SideBar/Home'

function Home({data,sameBooks,shouldBooks}) {

    const arrayNameLibrary = ['Ca dao - Viên ngọc trong ngần kết tinh từ tâm hồn người Việt',
    'Truyện cổ tích Việt Nam và thế giới chọn lọc hay nhất' ,
    'Phân tích bài ca dao: “Hôm qua tát nước đầu đình' , 
    'Ý nghĩa rút ra từ truyện Thánh Gióng' , 'Giải thích câu tục ngữ “Đi một ngày đàng, học một sàng khôn']

    return (
        <div className = {classes.content_library}>
             <div className = {classes.left}>
                <Scroll/>
                <p className = {classes.name}>{data.name}</p>
                {arrayNameLibrary.includes(data.name)  ? <div className = {classes.content_t} dangerouslySetInnerHTML={{__html: data.content}}></div> 
                : <div className = {classes.contents} dangerouslySetInnerHTML={{__html: data.content}}></div> }
                
                <div className={classes.notify}>
                <p>(*) Bản quyền bài viết thuộc về AnyBooks.vn. Khi chia sẻ, cần phải dẫn link, trích dẫn nguồn đầy đủ gồm tên 
                    người viết và AnyBooks - Kết nối tri thức. Mọi hành vi sao chép hoặc trích nguồn, chia sẻ bài viết không đầy đủ đều 
                    không được chấp nhận và phải gỡ bỏ.
                </p>
                <div className={classes.same_books}>
                    <p className={classes.title}>Sách cùng danh mục</p>
                    <WrapSame data = {sameBooks}/>
                </div>
                <div className = {classes.should_books}>
                    <p className={classes.title}>Sách hay nên đọc</p>
                    <WrapShould data = {shouldBooks}/>
                </div>
            </div>
            </div>
            <div className = {classes.right}>
                <SideBar/>
            </div>
        </div>
    )
}

export default Home
