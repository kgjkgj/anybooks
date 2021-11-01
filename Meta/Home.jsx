import Head from 'next/head'
import React,{useState,useEffect} from 'react'
import Script from 'next/script'


function Home({title,description}) {
    
    const [sateLocal , setStateLocal] = useState([]);

    
    
    useEffect(()=>{
        const Local  =  window.location.origin;
        setStateLocal(Local)
    },[])

    return (
            <Head>
                <title>{title}</title>
                <meta name="description" content={description || 'Những cuốn sách hay nhất nên đọc mỗi ngày, giới thiệu những cuốn sách hay Anybooks khuyên đọc và được độc giả yêu thích nhất. Top sách hay nên đọc mỗi ngày!'} />
                <meta name="Keywords" content={title}/>
                <meta name="author" content="Anybooks | Sách Hay Nên Đọc | Review Sách Hay"/>
                <meta name="copyright" content="Anybooks | Sách Hay Nên Đọc | Review Sách Hay, info@anybooks.vn"/>
                <meta name="robots" content="index, archive, follow, noodp"/>
                <meta name="googlebot" content="index,archive,follow,noodp"/>
                <meta name="msnbot" content="all,index,follow"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta property="og:title" content={title}/>
                <meta property="og:description" content={description}/>
                <meta property="og:type" content="Library"/>
                <meta property="og:site_name" content={title}/>
                <meta property="og:url" content={sateLocal}></meta>
                <link rel="icon" href="/favicons.ico" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"rel="stylesheet"/>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3885595013934426" crossorigin="anonymous"></script>
                <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-615554784e743694"></script>
                <script type="text/javascript" src = '/Tawk/Tawk.js'> </script>
            </Head>
       
    )
}
Home.defaultProps = {
    title:'AnyBooks | Sách Hay Nên Đọc | Review Sách Hay Online',
    
    description: 'AnyBooks - Kết nối tri thức: Sách hay nên đọc, review sách, giới thiệu tác giả tác phẩm, đọc sách, tải sách hay online miễn phí, trích dẫn sách hay ý nghĩa'
}

export default Home
