import React,{useState,useEffect} from 'react'
import classes from './Home.module.scss'
import {TopViewQuote} from '../../../Tools/API/Quote/APIQuote'
import OverLay from '../../../Dependent/OverLay/OverLay'
import Show from './Show'


function Home() {

    const [stateTopViews,setStateTopView] = useState([]);

    useEffect(()=>{

        Promise.all([TopViewQuote()])
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
            <div className={classes.quote}>
                <Show subject = {'quote'} data = {stateTopViews}/>
            </div>
        )
    }

}

export default Home
