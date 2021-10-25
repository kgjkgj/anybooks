import React from 'react'
import { CuttingString } from '../../Tools/CuttingString/Home'
import classes from './Home.module.scss'
import moment from 'moment'
import Link from 'next/link'
import Scroll from '../../Tools/Scroll/Scroll'
import {Router} from '../../Tools/Route/Router'
import SideBar from '../../Dependent/SideBar/Home'
import {UpdateViews} from '../../Tools/API/UpdateViews/APIUpdateViews'



function Home({data,subject}) {


    async function UpdateView(slug){
        await UpdateViews(subject,slug)
       
    }

    return (
        <div className = {classes.wrap}>
            <Scroll/>
            <div className = {classes.wrap_left}>
                {data.map((data)=>{
                    const router = Router(data)
                    return <div key = {data._id} className = {classes.wrap_item}>
                                <Link href={router}><img onClick = {()=> UpdateView(data.slug)} src={data.images} alt={data.name} /></Link>
                                <div className = {classes.wrap_group}>
                                    <p onClick = {()=> UpdateView(data.slug)}  className = {classes.name}> <Link title = {data.name}  href={router}>{data.name}</Link> </p>
                                    <p className = {classes.time_view}>
                                        <span>Ngày đăng : {moment(data.createdAt).format('DD/MM/YYYY')}</span> - <span>Lượt xem : {data.view}</span>
                                    </p>
                                    <p className = {classes.description}>{CuttingString(data.description,200)}  <span onClick = {()=> UpdateView(data.slug)} > <Link title = {data.name} href = {router}> Xem Thêm </Link> </span>  </p>
                                </div>
                            </div>
                })}
                
            </div>
            <div className = {classes.wrap_right}>
                <SideBar/>
            </div>  
        </div>
    )
}

export default Home
