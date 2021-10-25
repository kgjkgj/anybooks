import React from 'react'
import classes from './Home.module.scss'
import {Router} from '../../../Tools/Route/Router'
import {CuttingString} from '../../../Tools/CuttingString/Home'
import Link from 'next/link'

function Home({data}) {
    return (
        <div className={classes.wrap_box}>
            <div className={classes.wrap_content}>
                {data.map((data)=>{
                    const router = Router(data)
                    return <div key  ={data._id} className = {classes.item}>

                            <Link href = {router}><img src={data.images} alt={data.name} /></Link>

                            <div className = {classes.group}>
                                <p className = {classes.name}><Link href = {router}>{data.name}</Link></p>
                                <p className = {classes.description}>{CuttingString(data.description,100)}<Link href = {router}>Xem Thêm</Link></p>
                            </div>

                    </div>
                })}
            </div>
        </div>
    )
}

export default Home
