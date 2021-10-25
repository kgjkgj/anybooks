import React,{useRef,useEffect,useState} from 'react'
import classes from './Scroll.module.scss'


function Home() {

    const scroll = useRef();
    
    const [stateScroll,setStateScroll] = useState(false);

    function handleScroll(){
        setStateScroll(window.scrollY >=200);
    }
    useEffect(()=>{
        if(scroll.current){
            scroll.current.onclick = ()=>{
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
            }
        }
        window.addEventListener("scroll",handleScroll)

        return ()=>{
            window.removeEventListener("scroll",handleScroll)
        }
    },[stateScroll])
    return (
            <div className={classes.scroll}>
                   {stateScroll ?   <p ref = {scroll}><i className="fas fa-chevron-up"></i></p> : ''}
            </div>
    )
}

export default Home
