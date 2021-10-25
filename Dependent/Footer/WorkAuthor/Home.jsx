import React,{useState,useEffect} from 'react'
import classes from './Home.module.scss'
import {topViewsWork} from '../../../Tools/API/Work/APIWork'
import OverLay from '../../../Dependent/OverLay/OverLay'
import Show from './Show'


function Home() {

    const [stateTopViews,setSTateTopView] = useState([]);

    useEffect(()=>{

        Promise.all([topViewsWork()])
            .then(([data])=>{
                setSTateTopView(data)
            })
            .catch(err=>console.error(e))

    },[])
    if(stateTopViews.length === 0){
        return (
            <OverLay/>
        )
    }else{
        return (
            <div className={classes.work_author}>
                <Show subject = {'work'} data = {stateTopViews}/>
            </div>
        )
    }

}

export default Home
