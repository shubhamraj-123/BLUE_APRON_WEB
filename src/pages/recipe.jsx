// import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './recipe.css';
import "./key";
import axios from 'axios';
// import './RecipeTitle';
// import { Key } from 'react';
import RecipeTitle from './RecipeTitle';
import Footer from '../components/footer';

function Recipe() {
  const [query, setquery] = useState("mango");
  const [recipes, setrecipes] = useState([]);
  // const [healthLabels, sethealthLabels] = useState("")
  // const [search, setSearch] = useState("")


  const YOUR_APP_ID="660bcda8";
  const YOUR_APP_KEY="ab348af27127faa38b073910b3387ca8";


  var url=`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
  
  async function getRecipes(){
    var result=await axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }
  useEffect(() => {
    getRecipes();
  });
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }

  return (
    <>
    <div className="recipe_App">
      <h1  style={{fontSize: "52px", textAlign:"center", fontFamily: "Chronicle Deck,Times,serif"}}>Explore Our Meal Delivery Menus</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input style={{width:"300px", border:"1px solid rgb(26, 26, 114)", height:"30px"}} type="text" className="app__input" placeholder="Enter Ingredients" value={query} onChange={(e) => setquery(e.target.value)} />
        <input style={{width:"120px", height:"45px"}} className="app__submit"type="submit" value="Search" />
        
        {/* <select className="app__healthlabels">
          <option onClick={() => sethealthLabels("vegeterian")}>Vegeterian</option>
        </select> */}
      </form>
      <p style={{marginTop: "25px"}}>Choose from an ever-changing mix of meat, fish, and health-conscious offerings.</p>

      <div className="app__recipes">
        {recipes.map(recipe => {
          return <RecipeTitle recipe={recipe}/>
        })}

      </div>
    </div>
    {/* <Footer /> */}
    </>
  );
}

export default Recipe;
