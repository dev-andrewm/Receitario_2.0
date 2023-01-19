import './App.css';
import Search from './pages/Search';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Recipedetails from './pages/RecipeDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/Receitario_2.0" element={<Search />}></Route>
          <Route path="/" element={<Search />}></Route>
          <Route path="recipe/:id" element={<Recipedetails />}></Route>
          <Route path="search" element={<Search />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
