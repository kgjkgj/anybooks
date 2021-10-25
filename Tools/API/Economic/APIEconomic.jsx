import Local from '../Local/Home'
import axios from 'axios'



export default async function APIEconomic(pages){
    try{
        if(pages === undefined || pages === ' ' || isNaN(pages)){
            pages = 1;
        }
        const data  = await axios.get(`${Local()}/economic?_page=${pages}`)
        return data.data;
    }
    catch(e){console.error(e)}
}

export const Content = async (slug)=>{
    try{
        const data  = await axios.get(`${Local()}/economic/content/${slug}`)
        return data.data;
    }
    catch(e){console.error(e)}
}

export const Length = async ()=>{
    try{
        const data  =  await axios.get(`${Local()}/economic/length`);
        return data.data
    }
    catch(e){console.error(e)}
}

export const Random = async () =>{
    try{ 
        const data  = await axios.get(`${Local()}/economic/random`);
        return data.data
    }
    catch(e){console.error(e)}
}

export const topViews = async ()=>{
    try{
        const data  = await axios.get(`${Local()}/economic/top-views`);
        return data.data;
    }
    catch(e){console.error(e)}
}



export const toAdd = (data) => axios.post(`${Local()}/economic/to-add`,data)