import React from 'react'
import APIQuote,{Length} from '../../Tools/API/Quote/APIQuote'
import classes from './quote.module.scss'
import Meta from '../../Meta/Home'
import Breadcrumb from '../../Tools/Breadcrumb/Home'
import Wrap from '../../Dependent/Wrap/Home'
import Pagination from '../../Dependent/Pagination/Home'
function Quote({data,LengthQuote}) {
    const router = [
        {url:'/',title: 'Home'},
        {url:'/quote',title: 'Trích dẫn hay'},
    ]

    const idioms = `AnyBooks.vn - 1001++ Quotes hay, trích dẫn và những câu nói hay, stt hay về tình yêu và cuộc sống, những câu châm ngôn cuộc sống, danh ngôn cuộc sống, triết lý cuộc sống, những câu nói bất hủ, trích dẫn sách hay và ý nghĩa, lan toả và truyền cảm hứng thành công, và hạnh phúc tới hàng triệu độc giả trên toàn lãnh thổ Việt Nam.
    Chuyên trang chia sẻ những câu trích dẫn hay, những câu nói hay, danh ngôn cuộc sống,...
    
    Mỗi ngày trôi qua là bớt đi một ngày bạn được sống bên những người thân yêu của mình, vậy bạn đã sống cuộc đời của chính mình chưa, hãy luôn mỉm cười mỗi ngày cả những lúc bạn buồn, đừng sống cho người khác nhìn và đừng nhìn người khác mà sống. Hãy sống như hôm nay là ngày cuối cùng của bạn! Hãy hành động, sống ý nghĩa hơn để cho mọi người thấy: “Thế giới cần bạn sống thêm một ngày nữa”. Và chuyên trang này là những lời trích dẫn, những câu nói hay, danh ngôn cuộc sống này chia sẻ với mọi người những điều tuyệt vời nhất của cuộc sống. Nơi lưu giữ những trích dẫn, câu danh ngôn, bài học hay, những câu răn dạy của tiền nhân đi trước cho thế hệ mai sau.
    
    AnyBooks.vn mong rằng sẽ giúp ... `


    return (
        <div className={classes.quote}>
            <Meta title = {'Trích dẫn, quotes những câu nói hay về tình yêu và cuộc sống'}/>
            <Breadcrumb data = {router}/>
            <p className={classes.title}>TRÍCH DẪN HAY</p>
            <Wrap subject = {'quote'} data = {data}/>
            <Pagination pages = {LengthQuote.length} length = {20}/>
            <div className={classes.idioms}>
                <p>{idioms}</p>
            </div>
        </div>
    )
}


export async function getServerSideProps(context){
    const data  = await APIQuote(Number(context.query._page));
    const LengthQuote  = await Length();
    if (!data) {
        return {
          notFound: true,
        }
      }
    return {
        props:{
            data,
            LengthQuote,
        }
    }
}

export default Quote
