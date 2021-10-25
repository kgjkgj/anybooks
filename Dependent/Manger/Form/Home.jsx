import React,{useEffect,useState,useRef} from 'react';
import Editor from '../../../Dependent/Editor/Editor'
import Images from 'next/image'



function Home({subject,HandelAddSubject}) {

    const [loader,setLoader]  = useState(false);
    const [value,setStateValue]  = useState('');
    const dataCK = useRef();
    const name = useRef();
    const images = useRef();
    const description = useRef();

    useEffect(()=>{
        setLoader(true);
    },[])

    function ChangeCK(data){
        setStateValue(data)
        dataCK.current = data;
    }

    function HandleSubmit(e){
        e.preventDefault();
        const data = {
            name:name.current.value,
            images:images.current.value,
            description:description.current.value,
            content:dataCK.current,
        }
        HandelAddSubject(data);
        Clear();
    }

    function Clear(){
        window.scrollTo(0,0);
        name.current.value =''
        images.current.value =''
        description.current.value =''
        setStateValue('');
    }

    function ChangeImages(e){
        const imgs = document.querySelectorAll('.img');
        const data = e.target.value;
        imgs.forEach((img)=>{
            img.setAttribute('src',data)
            img.setAttribute('srcset',data);
        })

    }


    return (
        <div className="forms">
            <form  onSubmit={HandleSubmit}>
                <div className="mb-3">
                    <label  className="form-label">Name {subject} <span style  = {{color:"#ff0000"}}>*</span> </label>
                    <input ref ={name} type="text" className="form-control form-control-sm" required  />
                    <span className="form-text">We'll never share your email with anyone else. <span style  = {{color:"#ff0000"}}>*</span></span>
                </div>

                <div className="mb-3">
                    <label className="form-label">Images {subject} <span style  = {{color:"#ff0000"}}>*</span> </label>
                    <input onChange={ChangeImages} ref ={images} type="text" className="form-control form-control-sm" required />

                    <Images   className="img" width = "50px" height = "50px" src  = {images.current?.value || 'https://anybooks.vn' }  alt = {name.current?.value} />

                    <p><span className="form-text">We'll never share your email with anyone else. <span style  = {{color:"#ff0000"}}>*</span></span></p>

                </div>

                <div className="mb-3">
                    <label className="form-label">Description {subject} <span style  = {{color:"#ff0000"}}>*</span> </label>
                    <textarea ref = {description} className="form-control form-control-sm"  rows="3" required></textarea>
                    <span className="form-text">We'll never share your email with anyone else. <span style  = {{color:"#ff0000"}}>*</span></span>
                </div>

                <div className="mb-3">
                    <label className="form-label">Content {subject} <span style  = {{color:"#ff0000"}}>*</span> </label>
                    <Editor value = {value} onChange = {ChangeCK} editorLoaded ={loader} name = 'description'  />
                    <span className="form-text">We'll never share your email with anyone else. <span style  = {{color:"#ff0000"}}>*</span></span>
                </div>

                <button  className="btn  btn-sm">To Add {subject}</button>

            </form>
        </div>
    )
}

export default Home
