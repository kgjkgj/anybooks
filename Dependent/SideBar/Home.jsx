import React,{useEffect,useState} from 'react'
import classes from './Home.module.scss'
import {topViewsTopics,topCreatedAtTopics} from '../../Tools/API/Topics/APITopics'
import OverLay from '../OverLay/OverLay'
import ShowItem from './ShowItem'


function Home() {

    const [stateViews,steStateViews] = useState([]);
    const [stateNew,steStateNew] = useState([]);

    useEffect(()=>{
        Promise.all([topViewsTopics(),topCreatedAtTopics()])
            .then(([dataTopViews,dataTopNew])=>{
                steStateViews(dataTopViews)
                steStateNew(dataTopNew)
            })
            .catch((err)=>{console.error(err);})
    },[])

    if(stateViews.length === 0 || stateNew.length === 0){
        return (
            <OverLay/>
        )
    }
    else{
        return (
            <div className={classes.side_bar}>
                    <ShowItem dataTopNew={stateNew} dataTopViews = {stateViews}/>
            </div>
        )
    }

}

export default Home
