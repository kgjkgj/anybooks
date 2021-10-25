import Local from '../Local/Home'
import axios from 'axios'


export default async function APIReviewBook(pages){
    try{
        if(pages === undefined || pages === '' || isNaN(pages)){
            pages = 1;
         }
        const data = await axios.get(`${Local()}/review-books?_page=${pages}`);
        return data.data;
    }
    catch(e){console.error(e)}
}

export  const Content = async (slug) =>{
    try{
        const data  = await axios.get(`${Local()}/review-books/content/${slug}`);
        return data.data;
    }
    catch(e){console.error(e)}
} 

export const Length = async () =>{
    try{
        const data  =  await axios.get(`${Local()}/review-books/length`);
        return data.data;
    }
    catch(e){console.error(e)}
}


export const RandomReviewBooks = async  () =>{
    try{
        const data  = await axios.get(`${Local()}/review-books/random`)
        return data.data;
    }
    catch(e){console.error(e)}
}


export const TopViewsReviewBooks = async ()=>{
    try{
        const data = await axios.get(`${Local()}/review-books/top-views`);
        return data.data;
    }
    catch(e){console.error(e)}
}

 
export const keyReviewsBooks  = async () =>{
    try{
        const data   =  await axios.get(`${Local()}/review-books/key-review-books`)
        return data.data
    }
    catch(e){console.error(e)}
}



export const toAdd = (data) => axios.post(`${Local()}/review-books/to-add`,data)