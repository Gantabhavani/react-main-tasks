//09-07-2024
// import './App.css';
// import Table1 from './09-07-2024.js/task1';
// import CustomCard from './09-07-2024.js/task2';
// function App() {
//   return (
//   <div>
//     <Table1/>
//     <CustomCard/>
//   </div>
//   )
// }
// export default App;




//23-07-2024
// import DummyRecipes from "./23-07-2023/task1";
// import SquareGenerator from './23-07-2023/task2'
// function App(){
//   return(
//     <div>
//       {/* <DummyRecipes/> */}
//       <SquareGenerator/>
//     </div>
//   )
// }
// export default App;








// import {useState} from 'react';
// function App(){
//   const [count,setCount]=useState(0)
//   const incrementHandler=()=>{
//     setCount(count=>count+1)
//   }
//   const DecrementHandler=()=>{
//     if(count>=1){
//       setCount(count=>count-1)
//     }
//   }
//   const ResetHandler=()=>{
//     setCount(count=>0)
//   }
//   return(
//     <>
//     <h1>count is {count}</h1>
//     <button onClick={incrementHandler}>Increment</button>
//     <button onClick={DecrementHandler}>DEcrement</button>
//     <button onClick={ResetHandler}>Resert</button>
//     </>
//   )
// }
// export default App;






//24-07-2024
import RecipeDispalyer from "./24-07-2024/task1";
import Season from './24-07-2024/task2'
function App(){
  
  return(
    <>
    <Season/>
     <RecipeDispalyer/> 
    
    </>
  )
}
export default App;
