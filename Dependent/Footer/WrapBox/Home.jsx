import React from 'react'
import classes from './Home.module.scss'
import {Router} from '../../../Tools/Route/Router'
import Link from 'next/link'
import {UpdateViews} from '../../../Tools/API/UpdateViews/APIUpdateViews'



function Home({data,subject}) {


    async function UpdateView(slug){
        await UpdateViews(subject,slug)
    }


    return (
        <div className={classes.wrap_box}>
            {data.map((data,index)=>{
                const router = Router(data)
                if(index <= 5){
                    return <p onClick={()=> UpdateView(data.slug)}className={classes.name} key = {data._id}><Link href = {router}>{data.name}</Link></p>
                }
                else{
                    return ''
                }
            })}
        </div>
    )
}

export default Home
