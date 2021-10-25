import React,{useEffect} from 'react'
import classes from './Home.module.scss'
import Link from 'next/link'
import Images from 'next/image'
import {useRouter} from 'next/router'
import NavMobile from '../NavMobile/Home' 
function Home() {

    const {pathname} = useRouter();

    function activeLink(link){
        return {
            parent:Object.assign(link.style,{
                backgroundColor:'#ff0000',
                borderRadius:'5px',
            }),
            children: Object.assign(link.childNodes[0].style,{
                color:'#fff'
            })
        }
    }    

    useEffect(()=>{
        const links  = document.querySelectorAll('.links');
        links.forEach((link)=>{
            Object.assign(link.style,{
                backgroundColor:'#fff',
            })
            Object.assign(link.childNodes[0].style,{
                color:'#000'
            })
        })

        pathname.indexOf('/good-book')>-1 ? activeLink(links[1]) 

        : pathname.indexOf('/review-books')>-1 ? activeLink(links[2]) 

        : pathname.indexOf('/work-author')>-1 ? activeLink(links[3]) 

        : pathname.indexOf('/library')>-1 ? activeLink(links[4]) 

        : pathname.indexOf('/blog')>-1 ? activeLink(links[5])

        : pathname.indexOf('/quote')>-1 ? activeLink(links[6]) 

        : pathname.length === 1 ? activeLink(links[0]) : ''; 
    
    },[pathname])


    return (
        <div className={classes.nav}>
            <div className="container">
                <div className={classes.wrap_nav}>
                    <div className={classes.logo}>
                        <Link href = {'/'}>
                            <a ><Images width={200} height={64} src = 'https://anybooks.vn/uploads/1792221100_anybookssachhaynendocreviewsachanybookslogo.png' alt = "Logo"/></a>
                        </Link> 
                    </div>
                    <div className={classes.menu}>
                        <ul>
                            <li className = 'links' ><Link href = {'/'}>TRANG CHỦ</Link></li>
                            <li className = 'links' ><Link href = {'/good-book'}>TOP SÁCH HAY</Link></li>
                            <li className = 'links' >
                                <Link href = {'/review-books'}>REVIEW SÁCH</Link>
                                <ul className = {classes.drop_down}>
                                    <li ><Link href = {'/review-books/literature'}>SÁCH VĂN HỌC</Link></li>
                                    <hr />
                                    <li><Link href = {'/review-books/mentality'}>TÂM LÝ - KỸ NĂNG SỐNG</Link></li>
                                    <hr />
                                    <li><Link href = {'/review-books/economic'}>SÁCH KINH TẾ</Link></li>
                                    <hr />
                                    <li><Link href = {'/review-books/children-books'}>SÁCH THIẾU NHI</Link></li>
                                </ul>
                            </li>
                            <li className = 'links' ><Link href = {'/work-author'}>TÁC PHẨM-TÁC GIẢ</Link></li>
                            <li className = 'links' ><Link href = {'/library'}>THƯ VIỆN</Link></li>
                            <li className = 'links' ><Link href = {'/blog'}>BLOG TỔNG HỢP</Link></li>
                            <li className = 'links' ><Link href = {'/quote'}>TRÍCH DẪN HAY</Link></li>
                        </ul>
                    </div>
                </div>
                <div className = {classes.nav_mobile}>
                    <NavMobile/>
                </div>
            </div>
        </div>
    )
}

export default Home
