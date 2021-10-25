import React,{useEffect,useState} from 'react'
import {Pagination} from 'react-bootstrap'
import {useRouter} from 'next/router'
import Link from 'next/link'



function Paginations({pages,length}) {

    const page  = Math.ceil(pages / length);

    const [stateShow ,setStateShow]  = useState(false)

    const {query}   = useRouter();


    let active   = query._page  ? Number(query._page) : 1;

    if(Number(query._page) > page){
        active = 1;
    }

    useEffect(()=>{
        setStateShow(true);
    },[])

    

    return (
        <div className="pagination_s">
            {stateShow && <Pagination size  = 'sm'>

                {active > 1 ? <Pagination.First >

                    <Link href = '?_page=1'>&lt;&lt;</Link>

                </Pagination.First> : '' }

                {active > 1 ?  <Pagination.Prev >
                    <Link href = {`?_page=${active-1}`}><a >&lt;</a></Link>
                </Pagination.Prev> : ''}


                <Pagination.Item active  = {active === 1}>
                    <Link href = '?_page=1'><a >1</a></Link>
                </Pagination.Item>

                {active >=4 ? <Pagination.Ellipsis /> : ''}

                {active - 1 > 1  ? 
                    <Pagination.Item >
                        <Link href = {`?_page=${active-1}`}><a >{active-1}</a></Link>
                    </Pagination.Item> 
                : ''} 


                {active > 1 && active < page ? 
                <Pagination.Item active>
                    
                    <Link href = {`?_page=${active}`}><a >{active}</a></Link>

                </Pagination.Item> : ''}

                {active + 1 < page  ? 
                    <Pagination.Item >

                        <Link href = {`?_page=${active+1}`}><a >{active+1}</a></Link>

                    </Pagination.Item> 
                : ''} 

                {page - 3 >= active ?  <Pagination.Ellipsis /> : ''}

                {page > 1 ?  <Pagination.Item active  = {active === page}>
                    <Link href = {`?_page=${page}`}>
                        <a >{page}</a>
                        </Link>
                </Pagination.Item> :'' }

                {active < page ?  <Pagination.Next > 

                    <Link href = {`?_page=${active+1}`}>&gt;</Link>

                </Pagination.Next>  : ''}

                {active < page ?  <Pagination.Last >
                    <Link href = {`?_page=${page}`}>

                        &gt;&gt;

                    </Link>
                </Pagination.Last>:''}

                </Pagination>}
        </div>
    )
}

export default Paginations
