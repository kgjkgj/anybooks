import React from 'react'
import classes from './Home.module.scss'
import WrapContent from '../Tools/WrapContent/Home'
import Link from 'next/link'
function Home({data}) {
    return (
        <div className={classes.good_book}>
            <p className={classes.title}><Link href = {'/good-book'}>TOP SÁCH HAY</Link></p>
            <WrapContent subject =  {'good-book'} data  = {data}/>
        </div>
    )
}

export default Home
