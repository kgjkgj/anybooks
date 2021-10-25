import React,{useState,useEffect} from 'react'
import classes from './Home.module.scss'
import {TopViewBlog} from '../../../Tools/API/Blog/APIBlog'
import OverLay from '../../OverLay/OverLay'
import Show from './Show'


function Home() {

    const [stateTopViews,setStateTopView] = useState([]);

    useEffect(()=>{

        Promise.all([TopViewBlog()])
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
            <div className={classes.blog}>
                <Show subject = {'blog'} data = {stateTopViews}/>
            </div>
        )
    }

}

export default Home
