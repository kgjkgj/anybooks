import React,{useState,useEffect,useRef} from 'react'

import {Offcanvas} from 'react-bootstrap'

import Images from 'next/image'

import {Search} from '../../../../Tools/API/Topics/APITopics'

import {Router} from '../../../../Tools/Route/Router'

import Link from 'next/link'

import {CuttingString} from '../../../../Tools/CuttingString/Home'


function Hone() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [stateSearch,setStateSearch] = useState([]);
    const search  = useRef();


    useEffect(()=>{
        setStateSearch([]);
    },[show])

    


    async function HandleSearch(e){
        const data =  await Search(e.target.value)
        setStateSearch(data);
        if(e.target.value.length === 0){
            setStateSearch([]);
        }
    }

    return (
        <div className="search">
            <i onClick={handleShow} className="fas fa-search"></i>
             <Offcanvas show={show} onHide={handleClose} placement = 'end'>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title><Images width={200} height={64} src = 'https://anybooks.vn/uploads/1792221100_anybookssachhaynendocreviewsachanybookslogo.png' alt = "Logo"/></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <p className="title">Tìm Kiếm</p>
                    <input ref = {search} onChange = {HandleSearch} type="text" className="form-control" placeholder="Nhập tên truyện cần tìm..." />

                    <div className="wrap_search">
                        {stateSearch.length > 0 ? stateSearch.map((data)=>{
                            const router = Router(data);
                            return <div key = {data._id} className="result_search">
                                        <Link href = {router}><img src={data.images} alt={data.name} /></Link> 
                                        <div className="wrap_group">
                                            <p onClick={handleClose} className="name"><Link href = {router}>{data.name}</Link></p>
                                            <p className="description">{CuttingString(data.description,150)}</p>
                                        </div>
                                    </div>
                        }) : stateSearch.length ===  0 && search.current?.value.length > 0 ? <p className="not_found">Không có truyện cần tìm</p> : '' }
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Hone
