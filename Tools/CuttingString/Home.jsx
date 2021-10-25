

export const CuttingString = (str,number) =>{
    if(str.length < number) return str;
    return str.substring(0,number) + '...';
}