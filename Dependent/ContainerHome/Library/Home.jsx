import React from 'react'
import classes from './Home.module.scss'
import WrapContent from '../Tools/WrapContent/Home'
import Link from 'next/link'
function Home({data}) {
    return (
        <div className={classes.library}>
                <p className={classes.title}><Link href = {'/library'}>THƯ VIỆN</Link></p>
                <WrapContent subject =  {'library'} data = {data}/>
        </div>
    )
}

export default Home
