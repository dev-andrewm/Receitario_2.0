import { BsSearch } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

const SearchPage = () => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const searchURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const query = searchParams.get('q');

  const getSearchedRecipes = async (url) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();

      setRecipes(data.meals);
    } catch (e) {
      setError(e.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (query !== null) {
      const searchWithQueryURL = `${searchURL}${query}`;
      getSearchedRecipes(searchWithQueryURL);
    }
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchTerm) return;

    navigate(`/search?q=${searchTerm}`);
    setSearchTerm('');
  };

  return (
    <>
      <Link to="/">
        <h1>Search for your favorite recipe</h1>
      </Link>
      <div className="search-box">
        <form onSubmit={handleSubmit}>
          <input
            className="meal-input-field"
            type="text"
            placeholder="Dish name"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <button type="submit">
            <BsSearch />
          </button>
        </form>
      </div>
      {loading && <div className="loader"></div>}
      {error && <div>{error}</div>}
      {recipes !== null ? (
        <div className="recipes-box">
          {recipes.map((recipe) => (
            <Link
              className="link"
              key={recipe.idMeal}
              to={`/recipe/${recipe.idMeal}`}
            >
              <div className="recipe__box">
                <p>{recipe.strMeal}</p>
                <img
                  className="recipe__image"
                  src={recipe.strMealThumb}
                  alt="Meal"
                />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="no-results">No results found!</div>
      )}
    </>
  );
};

export default SearchPage;
