import Link from 'next/link'
import React from 'react'
import { Router } from '../../Tools/Route/Router'
import classes from './ShowItem.module.scss'

function ShowItem({dataTopViews,dataTopNew}) {

    return (
        <div className={classes.sidebar_item}>
            <p className={classes.title}>XEM NHIỀU NHẤT</p>
            <div className={classes.top_view}>
                {dataTopViews.map((data)=>{
                    const router = Router(data)
                    return <div key = {data._id} className={classes.item_view}>
                            <Link href  = {router}><img src = {data.images} alt={data.name} /></Link>
                            <p className={classes.name}> <Link href  = {router}>{data.name}</Link></p>
                    </div>
                })}
            </div>
            <p className={classes.title}>BÀI VIẾT MỚI</p>
            <div className={classes.top_new}>
                {dataTopNew.map((data)=>{
                    const router = Router(data)
                    return <div key = {data._id} className={classes.item_new}>
                            <Link href  = {router}><img src = {data.images} alt={data.name} /></Link>
                            <p className={classes.name}> <Link href  = {router}>{data.name}</Link></p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default ShowItem
