import Swal from 'sweetalert2'
import "animate.css"
export const NotificationsMain = ()=>{
    return Swal.fire({
      title: `<p style = "font-size:20px;text-align:center !important;font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">🤪 Xin Chào 🤪</p> `,
      html:`<div>
      <p  style = "color:red ;text-align:center !important;font-size:15px; font-weight:bold;font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;" >Chúc bạn có những phút giây đọc truyện thật vui vẻ</p>
      <p  style = "color:red;text-align:center !important;font-size:15px;font-weight:bold;font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; " >Nếu có gì thắc mắc vui vòng nhắn tin vào góc trái màn hình hoặc ở phần bình luận</p>
      <p  style = "color:red;text-align:center !important;font-size:15px; font-weight:bold;font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;" >Mong Được Sự Góp Ý Từ Các Bạn</p>
      <p  style = "color:blue;text-align:center !important;font-size:15px; font-weight:bold;font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;" >Cám ơn các bạn rất nhiều</p>
      
      </div>`,
      showCloseButton:true,
      showCancelButton:true,
      allowOutsideClick:false,
      allowEnterKey:false,
      allowEscapeKey:false,
      showClass: {
        popup: 'animate__animated animate__zoomInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOutDown'
      }
    })
  }
