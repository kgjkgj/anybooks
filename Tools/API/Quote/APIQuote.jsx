import Local from  '../Local/Home'
import axios from 'axios'



export default async function APIQuote(pages){
    if(pages === undefined || pages === " " || isNaN(pages)){
        pages = 1;
    }
    const data = await axios.get(`${Local()}/quote?_page=${pages}`)
    return data.data
}

export const keyQuote  = async () =>{
    try{
        const data  = await axios.get(`${Local()}/quote/key-quote`)
        return data.data
    }
    catch(e){console.error(e)}
}
export const Content  = async (slug) =>{
    try{
        const data =  await axios.get(`${Local()}/quote/content/${slug}`)
        return data.data
    }
    catch(e){console.error(e)}
}

export const Length = async ()=>{
    try{
        const data = await axios.get(`${Local()}/quote/length`);
        return data.data
    }
    catch(e){console.error(e)}
}

export const TopViewQuote = async ()=>{
    try{
        const data =  await axios.get(`${Local()}/quote/top-views`);
        return data.data
    }
    catch(e){console.error(e)}
}

export const Random = async () =>{
    try{
        const data =  await axios.get(`${Local()}/quote/random`);
        return data.data;
    }
    catch(e){console.error(e)}
}



export const toAdd  = (data)  => axios.post(`${Local()}/quote/to-add`,data)