import Cookie from 'js-cookie'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Meta from '../../../Meta/Home'
import GoodBooks from '../../../Dependent/Manger/AddGodBook/Home'
import ReviewBooks from  '../../../Dependent/Manger/AddReviewBooks/Home'
import Work from '../../../Dependent/Manger/Work/Home'
import Library from '../../../Dependent/Manger/AddLibrary/Home'
import Quote from '../../../Dependent/Manger/AddQuote/Home'
import Blog from '../../../Dependent/Manger/AddBlog/Home'

function Manager() {

    const {push}  = useRouter();

    useEffect(()=>{
        const IDAdmin = '616fce9f6d3767e221cf54ad'
        const thems = document.querySelectorAll('.title_thems');
        const form_thems = document.querySelectorAll('.form')
        if(IDAdmin !== Cookie.get(IDAdmin)){
            push('/login')
        }

        thems.forEach((them,index)=>{
            them.onclick = ()=>{
                thems.forEach((them,index)=>{
                    if(them.className.indexOf('active')){
                        them.classList.remove('active');
                        form_thems[index].classList.remove('active');
                    }
                })
                them.classList.add('active');
                form_thems[index].classList.add('active');
            }
        })
    },[])

    return (
        <div className="manager">
            <Meta title = "Manager" />
            <p className="title">Manager</p>
            <div className="thems">
                <p className="title_thems active" >Good Book</p>
                <p className="title_thems" >Review Book</p>
                <p className="title_thems" >Work - Author </p>
                <p className="title_thems" >Library</p>
                <p className="title_thems" >Quote</p>
                <p className="title_thems" >Blog</p>
            </div>
            <div className="form_thems">
                <div className="form active">
                    <GoodBooks/>
                </div>
                <div className="form">
                    <ReviewBooks/>
                </div>
                <div className="form">
                    <Work/>
                </div>
                <div className="form">
                    <Library/>
                </div>
                <div className="form">
                    <Quote/>
                </div>
                <div className="form">
                    <Blog/>
                </div>
              
            </div>
        </div>
    )
}

export default Manager
