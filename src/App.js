import './App.css';
import Search from './pages/Search';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Recipedetails from './pages/RecipeDetails';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/Receitario_2.0"
            element={
              <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
            }
          ></Route>
          <Route
            path="/"
            element={
              <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
            }
          ></Route>
          <Route
            path="recipe/:id"
            element={<Recipedetails searchTerm={searchTerm} />}
          ></Route>
          <Route
            path="search"
            element={
              <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
