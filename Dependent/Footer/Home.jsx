import React from 'react'
import classes from './Home.module.scss'
import GoodBooks from './GoodBook/Home'
import ReviewBooks from './ReviewBooks/Home'
import WorkAuthor from './WorkAuthor/Home'
import Library from './Library/Home'
import Blog from './Blog/Home'
import Quote from './Quote/Home'
import GroupShare from '../../Tools/Addthis/Home'



function Home() {
    return (
        <footer className={classes.footer}>
                <div className={classes.logo}>
                    <p className={classes.title}>NHÀ SÁCH ONLINE</p>
                        <div className = "container">
                            <div className={classes.group_logo}>
                                <a href="https://go.isclix.com/deep_link/4843645303116132451?url=https%3A%2F%2Fwww.fahasa.com">
                                    <img src="https://anybooks.vn/uploads/mua-sach-tren-fahasa.png" alt="fahasa" />
                                </a>
                                <a href="https://gotrackecom.info/v0/PiU50JPm4ml6Cgch1E-veQ?url=https%3A%2F%2Ftiki.vn%2Fchuong-trinh%2Fsach-hay-tiki-khuyen-doc&aff_sub3=sh24-tiki-364">
                                    <img src="https://anybooks.vn/uploads/mua-sach-tren-tiki.png" alt="tiki" />
                                </a>
                                <a href="https://gotrackecom.info/v0/PiU50JPm4ml6Cgch1E-veQ?url=https%3A%2F%2Fshopee.vn%2FNh%25C3%25A0-S%25C3%25A1ch-Online-cat.10256&aff_sub=sh24-shopee-364">
                                    <img src="https://anybooks.vn/uploads/mua-sach-tren-shopee.png" alt="shopee" />
                                </a>
                                <a href="https://go.isclix.com/deep_link/4843645303116132451?url=https://www.vinabook.com/">
                                    <img src="https://anybooks.vn/uploads/mua-sach-tren-vinabook.png" alt="vinabook" />
                                </a>
                            </div>
                        </div>
                </div>
                <div className={classes.content_footer}>
                    <div className='container'>
                        <div className={classes.wrap_footer}>
                                <GoodBooks/>
                                <ReviewBooks/>
                                <WorkAuthor/>
                                <Library/>
                                <Blog/>
                                <Quote/>

                        </div>
                        <div className={classes.footer_tag}>
                            <p className={classes.tag_title}>
                                <span style = {{fontWeight:'bold'}}>AnyBooks.vn</span> - Trang web giới thiệu và chia sẻ các bài 
                                viết review top những cuốn sách hay nên đọc, sách nổi 
                                tiếng nhất của các tác giả Việt Nam và trên thế giới. 
                                Với sứ mệnh lan toả văn hoá đọc và kết nối tri thức
                                dành cho cộng đồng yêu sách. Mọi ý kiến đóng góp, hoặc đề 
                                nghị hợp tác vui lòng liên hệ với <span style = {{fontWeight:'bold'}}>AnyBooks</span>  team qua thông tin sau:
                            </p>
                            <p className = {classes.address} >Điện thoại: <span className  = {classes.phone}>0986.456.288</span>  - Email:  <span>info@anybooks.vn</span>  | Google AB News | Địa chỉ: Toà Diamond flower, 48 Lê Văn Lương, Thanh Xuân, Hà Nội </p>
                            <div className = {classes.group_add}>
                                <GroupShare/>
                            </div>

                        </div>
                        <div className = {classes.copyright}>
                                <p>Copyright © 2011-2021 <span>AnyBooks.vn</span> - All right reserved | AnyBooks - Kết Nối Tri Thức!</p>
                        </div>
                    </div>
                </div>
            </footer>
    )
}

export default Home
