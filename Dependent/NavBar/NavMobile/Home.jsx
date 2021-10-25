import React, { useState } from 'react';
import {Offcanvas,Accordion} from 'react-bootstrap'
import Images from 'next/image'
import Link from 'next/link'
import Search from './Search/Hone'

function Home() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="nav_mobile">
            <div className="nav_group">

                <i onClick={handleShow} className="fas fa-align-justify"></i>

                <Link href = {'/'}>
                    <a ><Images width={200} height={64} src = 'https://anybooks.vn/uploads/1792221100_anybookssachhaynendocreviewsachanybookslogo.png' alt = "Logo"/></a>
                </Link> 

                <Search/>

            </div>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                   <Images width={200} height={64} src = 'https://anybooks.vn/uploads/1792221100_anybookssachhaynendocreviewsachanybookslogo.png' alt = "Logo"/>
                </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul>
                        <li onClick = {handleClose} ><Link href  = {'/'}> Trang trủ </Link></li>
                        <li onClick = {handleClose} ><Link href  = {'/good-book'}> Top sách hay </Link></li>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                            <Accordion.Header> Review </Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li onClick = {handleClose} >
                                            <i className="fas fa-plus"></i>  <Link href  = {'/review-books'}> Review sách </Link>
                                        </li>
                                        <li onClick = {handleClose} >
                                            <i className="fas fa-plus"></i>  <Link href  = {'/review-books/literature'}> Sách văn học </Link>
                                        </li>
                                        <li onClick = {handleClose} >
                                            <i className="fas fa-plus"></i>  <Link href  = {'/review-books/mentality'}> Tâm lý - Kỹ năng sống </Link>
                                        </li>
                                        <li onClick = {handleClose} >
                                            <i className="fas fa-plus"></i>  <Link href  = {'/review-books/economic'}> Sách kinh tế </Link>
                                        </li>
                                        <li onClick = {handleClose} >
                                            <i className="fas fa-plus"></i> <Link href  = {'/review-books/children-books'}> Sách thiếu nhi </Link>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <li onClick = {handleClose} ><Link href  = {'/work-author'}> Tác phẩm - tác giả </Link></li>
                        <li onClick = {handleClose} ><Link href  = {'/library'}> Thư viện </Link></li>
                        <li onClick = {handleClose} ><Link href  = {'/blog'}> Blog tổng hợp </Link></li>
                        <li onClick = {handleClose} ><Link href  = {'/quote'}> Trích dẫn hay </Link></li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Home
