import React from 'react'
import Meta from '../../Meta/Home'
function Home() {

    const array  = [0];
    return (
        <main className="container container-fluid overlay">
        <Meta title = {'Loading...'}/>
        {array.map((data,index)=>{
                return  <div key = {index}  className="ph-item">
                <div className="ph-col-12">
                    <div className="ph-picture"></div>
                </div>
                <div className="ph-col-2">
                    <div className="ph-avatar"></div>
                </div>

                <div>
                    <div className="ph-row">
                        <div className="ph-col-4"></div>
                        <div className="ph-col-8 empty"></div>
                        <div className="ph-col-6"></div>
                        <div className="ph-col-6 empty"></div>
                        <div className="ph-col-2"></div>
                        <div className="ph-col-10 empty"></div>
                    </div>
                </div>

                <div className="ph-col-12">
                    <div className="ph-row">
                        <div className="ph-col-10 big"></div>
                        <div className="ph-col-2 empty big"></div>
                        <div className="ph-col-4"></div>
                        <div className="ph-col-8 empty"></div>
                        <div className="ph-col-6"></div>
                        <div className="ph-col-6 empty"></div>
                        <div className="ph-col-12"></div>
                    </div>
                </div>
            </div>    
        })}
       
    </main>
    )
}

export default Home
