import React from 'react'
import classes from './Home.module.scss'
import WrapContent from '../Tools/WrapContent/Home'
import Link from 'next/link'

function Home({data}) {
    return (
        <div className={classes.work}>
            <p className={classes.title}> <Link href = {'/work-author'}>TÁC GIẢ - TÁC PHẨM</Link></p>
            <WrapContent subject =  {'work'} data = {data}/>
        </div>
    )
}

export default Home
