import React,{useState} from 'react';
const SquareGenerator=()=>{
    const [count,setCount]=useState([1])
    const addSquare=()=>{
        const newCount=[...count,1]
        setCount(newCount)
    }
    return(
        <div id="square" style={{display:'flex',alignContent:'row',flexWrap: 'wrap'}}>
            {
                count.map((each,index)=>{
                    return(
                        <div style={{border:'2px solid black',width:'100px',height:'100px',backgroundColor:(index+1)%2==0 ? "red":"yellow"}}>{index+1}</div>
                    )
                })
            }
            <button onClick={addSquare}>add square</button>
        </div>
    )
}
export default SquareGenerator;