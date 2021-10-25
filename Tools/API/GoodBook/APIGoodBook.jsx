import Local from '../Local/Home'
import axios from 'axios'



export default async function APIGoodBook(page) {

    try{
        if(page === undefined || page === '' || isNaN(page)){
            page =  1;
        }
        const data = await axios.get(`${Local()}/good-book?_page=${page}`)
        return data.data;
    }
    catch(e){
        console.error(e)
    }
    
}

export const  Content = async (slug)=>{
    try{
        const data  = await axios.get(`${Local()}/good-book/content/${slug}`)
        return data.data;
    }
    catch(e){console.error(e)}
}

export const Length  = async ()=>{
    const data  = await axios.get(`${Local()}/good-book/length`);
    return data.data
}

export const RandomGoodBooks = async ()=>{
    try{
        const data =  await axios.get(`${Local()}/good-book/random`);
        return data.data
    }
    catch(e){console.error(e)}
}


export const TopViewsGoodBooks = async  ()=>{
    try{
        const data  = await axios.get(`${Local()}/good-book/top-views`)
        return data.data;
    }
    catch(e){console.error(e)}
}


export const toAdd = (data) => axios.post(`${Local()}/good-book/to-add`,data)