import React from 'react'
import classes from './Home.module.scss'
import WrapContent from '../Tools/WrapContent/Home'
import Link from 'next/link'
function Home({data}) {
    return (
        <div className={classes.blog}>
            <p className={classes.title}><Link href = {'/quote'}>TRÍCH DẪN HAY</Link></p>
            <WrapContent subject =  {'quote'} data  ={data}/>
        </div>
    )
}

export default Home
