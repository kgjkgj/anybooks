import Meta from '../Meta/Home'
import classes from './Home.module.scss'
import SideReviewBooks from '../Dependent/ContainerHome/ReviewBooks/Random/Home'
import TopReviewsBooks from '../Dependent/ContainerHome/ReviewBooks/TopViews/Home'
import GoodBooks from '../Dependent/ContainerHome/GoodBooks/Home'
import ReviewBooks from '../Dependent/ContainerHome/ReviewBooks/Main/Home'
import Work from '../Dependent/ContainerHome/Work/Home'
import Library from '../Dependent/ContainerHome/Library/Home'
import Blog from '../Dependent/ContainerHome/Blog/Home'
import Quote from '../Dependent/ContainerHome/Quote/Home'
import Link from 'next/link'
import Scroll from '../Tools/Scroll/Scroll'
import SideBar from '../Dependent/SideBar/Home'


import {RandomReviewBooks,TopViewsReviewBooks} from '../Tools/API/ReviewBooks/APIReviewBooks'
import {TopViewsGoodBooks} from '../Tools/API/GoodBook/APIGoodBook'
import {topViewsWork} from '../Tools/API/Work/APIWork'
import {TopViewsLibrary} from '../Tools/API/Library/APILibrary'
import {TopViewQuote} from '../Tools/API/Quote/APIQuote'
import {TopViewBlog} from '../Tools/API/Blog/APIBlog'



export default function Home({dataRandomReviewsBooks,dataTopViewsReviewsBooks
  ,dataTopViewGoodBooks,dataTopViewsWorks,dataTopViewsLibrary,dataTopViewsBlog,dataTopViewsQuote}) {
  return (
    <div className={classes.container}>

      <Meta description  = {'Những cuốn sách hay nhất nên đọc mỗi ngày, giới thiệu những cuốn sách hay Anybooks khuyên đọc và được độc giả yêu thích nhất. Top sách hay nên đọc mỗi ngày!'} 
            title = {'AnyBooks | Sách Hay Nên Đọc | Review Sách Hay Online '} />
      <Scroll/>
      <div className={classes.wrap_box}>
            <div className = {classes.left}>  
                <div className ={classes.group_review}>
                  <TopReviewsBooks data = {dataTopViewsReviewsBooks}/>
                  <SideReviewBooks random  ={dataRandomReviewsBooks}/>
                </div>
                <hr />
                  <GoodBooks data = {dataTopViewGoodBooks}/>
                <hr />
                  <ReviewBooks data  = {dataTopViewsReviewsBooks}/>
                <hr />
                  <Work data  = { dataTopViewsWorks }/>
                <hr />
                  <Library data  ={dataTopViewsLibrary}/>
                <hr />
                  <Blog data  ={dataTopViewsBlog}/>
                <hr />
                  <Quote data  ={dataTopViewsQuote}/>

                <hr />
            </div>
            <div className = {classes.right}>  
              <SideBar/>
            </div>
      </div>


      <div className={classes.notification}>
                  <p className={classes.title}><Link href = {'/'}>Anybooks.vn - Sách Hay Nên Đọc - Review Sách</Link></p>
                  <p className={classes.description}>
                      Chào mừng quý độc giả đến với <span>AnyBooks.vn</span>  - Sách Hay Nên Đọc - Review Sách - Kết Nối và Lan Toả Tri Thức!
                      AnyBooks.vn - Nơi dừng chân của những tín đồ yêu sách, với hàng ngàn bài viết review, giới thiệu sách, và các chủ đề liên quan 
                      đến sách, văn hoá đọc. Mỗi một cuốn sách là một thế giới, thế giới mở ra từ những trang sách mang lại những thông tin bổ ích,
                      những khám phá mới mẻ cho người đọc. Chúng tôi rất hạnh phúc khi có các bạn đồng hành trên hành trình khám phá những điều mới 
                      lạ, rất hy vọng sẽ nhận được sự quan tâm và ủng hộ từ bạn đọc. Con đường mà chúng ta đi cùng nhau chắc chắn sẽ rất thú vị 
                      và đầy cảm hứng. Và hãy để lại những đóng góp ý kiến để AnyBooks có thể phát triển hơn nữa. Rất cảm ơn các bạn đã quan tâm 
                      và ủng hộ chúng tôi!
                  </p>
                  <p className = {classes.introductions}>
                      <Link href = {'/introductions'}>Tìm hiểu thêm về Anybooks.vn</Link>
                  </p>
      </div>

    </div>
  )
}


export async function getStaticProps(){
  const dataTopViewsReviewsBooks = await TopViewsReviewBooks();

  const dataRandomReviewsBooks  =  await RandomReviewBooks();

  const dataTopViewGoodBooks = await TopViewsGoodBooks();

  const dataTopViewsWorks  = await topViewsWork();

  const dataTopViewsLibrary  = await TopViewsLibrary();

  const dataTopViewsBlog  = await TopViewBlog();

  const dataTopViewsQuote  = await TopViewQuote();

  return{
    props:{
      
      dataRandomReviewsBooks,

      dataTopViewsReviewsBooks,

      dataTopViewGoodBooks,

      dataTopViewsWorks,

      dataTopViewsLibrary,

      dataTopViewsBlog,

      dataTopViewsQuote

    }
  }
}



