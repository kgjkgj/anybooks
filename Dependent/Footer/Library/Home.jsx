import React,{useState,useEffect} from 'react'
import classes from './Home.module.scss'
import {TopViewsLibrary} from '../../../Tools/API/Library/APILibrary'
import OverLay from '../../../Dependent/OverLay/OverLay'
import Show from './Show'


function Home() {

    const [stateTopViews,setStateTopView] = useState([]);

    useEffect(()=>{

        Promise.all([TopViewsLibrary()])
            .then(([data])=>{
                setStateTopView(data)
            })
            .catch(err=>console.error(e))

    },[])
    if(stateTopViews.length === 0){
        return (
            <OverLay/>
        )
    }else{
        return (
            <div className={classes.library}>
                <Show subject = {'library'} data = {stateTopViews}/>
            </div>
        )
    }

}

export default Home
