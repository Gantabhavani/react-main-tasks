// import React, { useState } from 'react';
// import userdata from './data';

// const DummyRecipes = () => {
//     const [recipes, setRecipes] = useState([userdata[0]]);
//     const [count, setCount] = useState(1);
//     const addRecipes = () => {
//         if (count < userdata.length) {
//             setRecipes([...recipes, userdata[count]]);
//             setCount(count + 1);
//         }
//     };

//     const deleteRecipe = (index) => {
//         const updatedRecipes = recipes.filter((_, ind) => ind !== index);
//         setRecipes(updatedRecipes);
//     };

//     return (
//         <>
//             <div>
//                 {recipes.map((each, index) => (
//                     <React.Fragment key={index}>
//                         <h5>{each.name}</h5>
//                         <img src={each.image} alt={each.name} height={100} width={100} />
//                         <h5>{each.cuisine}</h5>
//                         <button onClick={() => deleteRecipe(index)}>Delete Recipe</button>
//                     </React.Fragment>
//                 ))}
//             </div>
//             <button onClick={addRecipes}>Add Recipe</button>
//         </>
//     );
// };

// export default DummyRecipes;

import React, { useState } from 'react';
import userdata from './data';
import './task1.css'; 

const DummyRecipes = () => {
    const [recipes, setRecipes] = useState([userdata[0]]);
    const [count, setCount] = useState(1);

    const addRecipes = () => {
        
            setRecipes([...recipes, userdata[count]]);
            setCount(count + 1);
    };

    const deleteRecipe = (index) => {
        const updatedRecipes = recipes.filter((_, ind) => ind !== index);
        setRecipes(updatedRecipes);
    };

    return (
        <>
            <div className="recipes-container">
                {recipes.map((each, index) => (
                    <div className="recipe-item" key={index}>
                        <img src={each.image} alt={each.name} height={100} width={100} />
                        <div>
                            <h5>{each.name}</h5>
                            <h5>{each.cuisine}</h5>
                            <button onClick={() => deleteRecipe(index)}>Delete Recipe</button>
                        </div>
                    </div>
                ))}
            </div>
            <button className="add-button" onClick={addRecipes}>Add Recipe</button>
        </>
    );
};

export default DummyRecipes;


