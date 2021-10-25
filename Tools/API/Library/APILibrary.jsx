import Local from '../Local/Home'
import axios from 'axios'




export default async function APILibrary (page){

    if(page === undefined || page === "" || isNaN(page))
    {
        page = 1;
    }
    const data = await axios.get(`${Local()}/library?_page=${page}`);
    return data.data;
}

export const keyLibrary = async ()=>{
    try{
        const data  = await axios.get(`${Local()}/library/key-library`)
        return data.data;
    }
    catch(e){console.error(e)}
}

export const Content = async (slug) =>{
    try{
        const data  = await axios.get(`${Local()}/library/content/${slug}`)
        return data.data;
    }
    catch(e){console.error(e)}
}

export const Length = async ()=>{
    try{
        const data  = await axios.get(`${Local()}/library/length`)
        return data.data
    }
    catch(e){console.error(e)}
}


export const Random  = async () =>{
    try{
        const data =  await axios.get(`${Local()}/library/random`);
        return data.data
    }   
    catch(e){console.error(e)}
}


export const TopViewsLibrary = async () =>{
    try{
        const data = await axios.get(`${Local()}/library/top-views`);
        return data.data;
    }
    catch(e){console.error(e)}
}

export const toAdd = (data) => axios.post(`${Local()}/library/to-add`,data)