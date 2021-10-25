import React from 'react'
import classes from './Home.module.scss'
import Link from 'next/link'
import {Router} from '../../../../Tools/Route/Router'
import {UpdateViews} from '../../../../Tools/API/UpdateViews/APIUpdateViews'

function Home({data}) {
    
    async function UpdateView(slug){
        await UpdateViews('review-books',slug)
    }


    return (
        <div className={classes.top_views}>
            {data.map((data,index)=>{
                const router   = Router(data);
                if(index === 0) {
                    return <div key = {data._id} className = {classes.top_views_first}>
                        <Link href = {router}><img onClick = {()=> UpdateView(data.slug)}src={data.images} alt={data.name} /></Link>
                        <p onClick = {()=> UpdateView(data.slug)}  src={data.images} className={classes.name}><Link href = {router}>{data.name}</Link></p>
                    </div>
                }
                else{
                    return ''
                }
            })}
            <div className={classes.group_item}>
                <p className={classes.title}>Giá trị lớn nhất mà mỗi người nhận được trong cuộc đời là gì? Cuốn sách Bước chậm lại...</p>
                {data.map((data,index)=>{
                    const router = Router(data)
                    if(index > 0 ){
                        return <div className={classes.item} key = {data._id}>
                            <p onClick = {()=> UpdateView(data.slug)} ><Link href = {router}>{data.name}</Link></p> 
                        </div>
                    }else{
                        return '';
                    }
                })}
            </div>



        </div>
    )
}

export default Home
