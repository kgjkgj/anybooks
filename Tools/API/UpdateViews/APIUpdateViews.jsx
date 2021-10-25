import Local from '../Local/Home'

import axios from 'axios'


export const UpdateViews = async (subject,slug)=>{
    try{
         await axios.patch(`${Local()}/${subject}/update-views/${slug}`)
    }   
    catch(e){console.error(e)}
}

