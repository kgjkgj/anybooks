import Local from '../Local/Home'
import axios from 'axios'




export default async function APIWork(pages){
    try{
        if(pages === undefined || pages === ' ' || isNaN(pages)){
            pages = 1;
        }
        const data =  await axios.get(`${Local()}/work?_page=${pages}`)
        return data.data
    }
    catch(e){console.error(e)}
}

export const Content = async (slug)=>{
    try{
        const data = await axios.get(`${Local()}/work/content/${slug}`)
        return data.data;
    }
    catch(e){
        console.error(e)
    }
}

export const topViewsWork = async () =>{
    try{
        const data = await axios.get(`${Local()}/work/top-views`);
        return data.data;
    }
    catch(e){console.error(e)}
}

export const Random = async  ()=>{
    try{
        const data = await axios.get(`${Local()}/work/random`);
        return data.data;
    }
    catch(e){console.error(e)}
}

export const Length = async ()=>{
    try{
        const data  = await axios.get(`${Local()}/work/length`);
        return data.data
    }
    catch(e){console.error(e)}
}


export const toAdd = (data) => axios.post(`${Local()}/work/to-add`,data)