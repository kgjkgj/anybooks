import React,{useState,useEffect} from 'react'
import classes from './Home.module.scss'
import {TopViewsReviewBooks} from '../../../Tools/API/ReviewBooks/APIReviewBooks'
import OverLay from '../../../Dependent/OverLay/OverLay'
import Show from './Show'


function Home() {

    const [stateTopViews,setSTateTopView] = useState([]);

    useEffect(()=>{

        Promise.all([TopViewsReviewBooks()])
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
            <div className={classes.review_books}>
                <Show subject = {'review-books'}  data = {stateTopViews}/>
            </div>
        )
    }

}

export default Home
