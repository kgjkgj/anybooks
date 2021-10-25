import React from 'react'
import Link from 'next/link'
import {Router} from '../../../../Tools/Route/Router'
import {CuttingString} from '../../../../Tools/CuttingString/Home'
import classes from './Home.module.scss'
import {UpdateViews} from '../../../../Tools/API/UpdateViews/APIUpdateViews'

function Home({data,subject}) {


    async function UpdateView(slug){
        await UpdateViews(subject,slug)
    }

    return (
        <div className={classes.wrap_content}>
            {data.map((data,index)=>{
                const router = Router(data);
                return  <div key  = {data._id} className={classes.wrap_box}>
                    <Link href = {router}><img onClick={()=> UpdateView(data.slug)} src={data.images} alt={data.name} /></Link>
                    <p onClick={()=> UpdateView(data.slug)}  className={classes.name}><Link href = {router}>{data.name}</Link></p>
                    <p className={classes.description}>{CuttingString(data.description,150)}  <span onClick={()=> UpdateView(data.slug)}><Link href = {router}>Xem Thêm</Link></span>  </p>
                </div>
            })}
        </div>
    )
}

export default Home
