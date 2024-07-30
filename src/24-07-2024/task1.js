// import {useState,useEffect} from 'react';
// import axios from 'axios';
// const RecipeDispalyer=()=>{
//     const [recipe,setRecipe]=useState([])
//     const [loader,setLoader]=useState(true)
//     const [error,setError]=useState(false)
//     useEffect(()=>{
//         fetchRecipes()
//     },[])
//     const fetchRecipes=async ()=>{
//         try{
//             let res=await axios.get("https://dummyjson.com/recipes")
//             if(res.status===200){
                
//                 setRecipe(res.data.recipes)
//                 setLoader(false)
//             }else{
//                 throw new Error("data is not fetched")
//             }
//         }catch(error){
//             setError(error.message)
//         }
//     }
//     return(
//         <div classNmae="recipeContainer">
//         <h1>Recipe Displayer</h1>
//         {
//             loader ? (<h4>Data is Loading pls </h4>):
                
//                     error ? (<h4>{error}</h4>):(
//                         recipe.map((eachitem,index)=>{
//                         console.log(eachitem.id);
//                             return(
//                                 <div key={index}>
//                                 <p>{eachitem.name}</p>
//                                 </div>
//                             )
//                         })
//                     )
                
            
//         }
//         </div>
//     )
// }
// export default RecipeDispalyer;
import { useState, useEffect } from 'react';
import axios from 'axios';
import './task1.css'; 

const RecipeDisplay = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        try {
            const res = await axios.get('https://dummyjson.com/recipes');
            if (res.status === 200) {
                setRecipes(res.data.recipes);
                setLoading(false);
            } else {
                throw new Error('Data not fetched');
            }
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    return (
        <div className="recipeContainer">
            <h1>Recipe Displayer</h1>
            {loading ? (
                <h4>Data is loading, please wait...</h4>
            ) : error ? (
                <h4>{error}</h4>
            ) : (
                <div className="recipeList">
                    {recipes.map((recipe) => (
                        <div key={recipe.id} className="recipeCard">
                            <img src={recipe.image} alt={recipe.name} className="recipeImage" />
                            <h2 className="recipeTitle">{recipe.name}</h2>
                            <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} minutes</p>
                            <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes</p>
                            <p><strong>Servings:</strong> {recipe.servings}</p>
                            <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
                            <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
                            <p><strong>Calories per Serving:</strong> {recipe.caloriesPerServing}</p>
                            <p><strong>Rating:</strong> {recipe.rating} ({recipe.reviewCount} reviews)</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RecipeDisplay;
