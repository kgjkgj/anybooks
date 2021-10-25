import React,{useState} from 'react'
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Navigation,Thumbs,Autoplay
  } from 'swiper';
SwiperCore.use([Navigation,Thumbs,Autoplay]);
import {Router} from '../../../../Tools/Route/Router'
import Link from 'next/link'
import {CuttingString} from '../../../../Tools/CuttingString/Home'
import Images from 'next/image'
import {UpdateViews} from '../../../../Tools/API/UpdateViews/APIUpdateViews'

function Home({random}) {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    async function UpdateView(slug){
        await UpdateViews('review-books',slug)
    } 

    return (
        <div className='slide'>
            <Swiper 
                autoplay={{
                    "delay": 4000,
                    "disableOnInteraction": false
                }} 
                thumbs={{ swiper: thumbsSwiper }}
                spaceBetween={10}
                loop={true}
                className="mySwiper2">
                
                {random.map((data)=>{

                    const router = Router(data)
                    return <SwiperSlide key  ={data._id}>
                                <div className="group">
                                    <Link href = {router}><img onClick = {()=> UpdateView(data.slug)} src={data.images} alt = {data.name} /></Link>
                                    <p onClick = {()=> UpdateView(data.slug)} className="name"> <Link href = {router}>{data.name}</Link></p>
                                </div>
                                <p className = "description">{CuttingString(data.description,200)}</p>
                        </SwiperSlide>
                })}
                
            </Swiper>

            <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} className="mySwiper">

                {random.map((data)=>{
                    return  <SwiperSlide  key  ={data._id}>
                                <img style  ={{width: '100%', height: '70px'}} alt = {data.name} src={data.images} />
                            </SwiperSlide>
                })}
               
            </Swiper>

           
        </div>
    )
}




export default Home
