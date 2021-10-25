import React from 'react'
import classes from './Home.module.scss'
import Link from 'next/link'

function Home({data}) {
    return (
        <div className={classes.breadcrumb}>
       
            {data.map((datas,index)=>{
                if(index === 0){
                    return   <Link key = {index} href={`${datas.url}`}>
                                <a className={classes.link}> <i className="fas fa-home"></i> {datas.title}</a>
                            </Link>
                }
                else if(index === data.length - 1){
                        return  <Link  key = {index}   href={`${datas.url}`}>
                                    <a  className= {classes.active_link} > {'>'}  {datas.title}</a>
                                </Link>
                    }
                else{

                    return  <Link key = {index}  href={`${datas.url}`}>
                                <a className={classes.link}> {'>'} {datas.title}</a>
                            </Link>
                }
                
            })}
        </div>
    )
}

export default Home
