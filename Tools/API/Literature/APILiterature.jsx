import Local from '../Local/Home'
import axios from 'axios'


export  default async function APILiterature(pages){
    try{
        if(pages === undefined || pages === ' ' || isNaN(pages)){
            pages = 1;
        }
        const data =   await axios.get(`${Local()}/literature?_page=${pages}`);
        return data.data;
    }catch(e){console.error(e)}
}

export const Content = async (slug) => {
    try{
        const data  =  await axios.get(`${Local()}/literature/content/${slug}`)
        return data.data
    }
    catch(e){console.error(e)}
}


export const Length = async () =>{
    try{
        const data = await axios.get(`${Local()}/literature/length`);
        return data.data
    }
    catch(e){console.error(e)}
    
}


export const Random = async () =>{
    try{ 
        const data  = await axios.get(`${Local()}/literature/random`);
        return data.data
    }
    catch(e){console.error(e)}
}

export const topViews = async ()=>{
    try{
        const data  = await axios.get(`${Local()}/literature/top-views`);
        return data.data;
    }
    catch(e){console.error(e)}
}


export const toAdd = (data) => axios.post(`${Local()}/literature/to-add`,data)