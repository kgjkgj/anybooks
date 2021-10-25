import Local from '../Local/Home'
import axios from 'axios'


export default async function APIChildrenBooks(pages){

    try{
        if(pages === undefined || pages === ' ' || isNaN(pages)){
            pages = 1;
        }
        const data  = await axios.get(`${Local()}/children_books?_page=${pages}`)
        return data.data;
    }
    catch(e){console.error(e)}
}

export const Content = async (slug)=>{
    try{
        const data  = await axios.get(`${Local()}/children_books/content/${slug}`)
        return data.data;
    }
    catch(e){console.error(e)}
}

export const Length = async ()=>{
    try{
        const data  =  await axios.get(`${Local()}/children_books/length`);
        return data.data
    }
    catch(e){console.error(e)}
}

export const Random = async () =>{
    try{ 
        const data  = await axios.get(`${Local()}/children_books/random`);
        return data.data
    }
    catch(e){console.error(e)}
}

export const topViews = async ()=>{
    try{
        const data  = await axios.get(`${Local()}/children_books/top-views`);
        return data.data;
    }
    catch(e){console.error(e)}
}


export const toAdd = (data) => axios.post(`${Local()}/children_books/to-add`,data)