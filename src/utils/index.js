export const cancatString = (title)=>{
     let str = ''
        if(title.length > 20){
            str = title.substring(0,20) + '...'
        }else{
            str = title
        }
        return str
}