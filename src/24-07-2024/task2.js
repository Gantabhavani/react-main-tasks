//Based on the season show the season names and corresponsing image of season
import {useState,useEffect} from 'react';
const Season=()=>{
    const arr=["https://tse1.mm.bing.net/th?id=OIP.4T-8vQVMsXZiX1I1c50EtAHaE4&pid=Api&P=0&h=180","https://tse3.mm.bing.net/th?id=OIP.LeYW4ZjruUnJObQnk-wwGgHaEo&pid=Api&P=0&h=180","https://tse1.mm.bing.net/th?id=OIP.m-FZ_fH-FpZ_s2KZS_pO5wHaFI&pid=Api&P=0&h=180","https://tse2.mm.bing.net/th?id=OIP.fK6x4cbuqiXiOOtscVPsjAHaEo&pid=Api&P=0&h=180"]
    const [season,setSeason]=useState("")
    const [image,setImage]=useState("")
    useEffect(()=>{
      WeatherChecker()
    },[])
    const WeatherChecker=()=>{
        const date=new Date()
        const month=date.getMonth()
        if(month===11 || month<=1){
            setSeason("Winter season")
            setImage(arr[0])
        }else  if(month>=2 && month<=4){
            setSeason("Spring season")
            setImage(arr[1])
        }else if(month>=5 && month<=7){
            setSeason("Summer season")
            setImage(arr[2])
        }else{
            setSeason("autumn season")
            setImage(arr[3])
        }
    }
    return(
        <>
        <h1>{season}</h1>
        <img src={image}  width={300} height={300}/>

        </>
    )
}
export default Season;