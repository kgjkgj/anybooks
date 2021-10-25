import React from 'react'
import classes from './Home.module.scss'
import {CuttingString} from '../../../Tools/CuttingString/Home'
import Link from 'next/link'
import {Router} from '../../../Tools/Route/Router'


function Home({data}) {
    return (
        <div className={classes.should_books}>
            <div className={classes.wrap_box}>
                {data.map((data)=>{
                    const router = Router(data)
                    return <div key = {data._id} className={classes.wrap_item}>
                                <Link href = {router}><img src={data.images} alt={data.name} /></Link>
                                <p className={classes.name}><Link href = {router}>{data.name}</Link></p>
                                <p className={classes.description}>{CuttingString(data.description,100)}<Link href = {router}>Xem Thêm</Link></p>
                            </div>
                })}
            </div>
        </div>
    )
}

export default Home
