import React from 'react'
import classes from './Show.module.scss'
import WrapBox from '../WrapBox/Home'

function Show({data,subject}) {
    return (
        <div className={classes.content}>
            <p className={classes.title}>Top sách hay</p>
            <WrapBox subject = {subject} data  = {data}/>
        </div>
    )
}

export default Show
