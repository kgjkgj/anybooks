import Local from '../Local/Home'
import axios from 'axios'



export default async function APIMentality(pages){
    try {
        if(pages === undefined || pages === ' ' || isNaN(pages)){
            pages = 1;
        }
        const data = await axios.get(`${Local()}/mentality?_page=${pages}`)
        return data.data
    }
    catch (e){console.error(e)}
}

export const Length = async () =>{
    try{
        const data = await axios.get(`${Local()}/mentality/length`);
        return data.data
    }
    catch(e){console.error(e)}
    
}
export const Content = async (slug)=>{
    try{
        const data = await axios.get(`${Local()}/mentality/content/${slug}`)
        return data.data
    }
    catch(e){console.error(e)}
}
export const Random = async () =>{
    try{ 
        const data  = await axios.get(`${Local()}/mentality/random`);
        return data.data
    }
    catch(e){console.error(e)}
}

export const topViews = async ()=>{
    try{
        const data  = await axios.get(`${Local()}/mentality/top-views`);
        return data.data;
    }
    catch(e){console.error(e)}
}







export const toAdd = (data) => axios.post(`${Local()}/mentality/to-add`,data)