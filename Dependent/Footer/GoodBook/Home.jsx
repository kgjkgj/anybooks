import React,{useState,useEffect} from 'react'
import classes from './Home.module.scss'
import {TopViewsGoodBooks} from '../../../Tools/API/GoodBook/APIGoodBook'
import OverLay from '../../../Dependent/OverLay/OverLay'
import Show from './Show'


function Home() {

    const [stateTopViews,setSTateTopView] = useState([]);

    useEffect(()=>{

        Promise.all([TopViewsGoodBooks()])
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
            <div className={classes.good_books}>
                <Show subject = {'good-book'} data = {stateTopViews}/>
            </div>
        )
    }

}

export default Home
