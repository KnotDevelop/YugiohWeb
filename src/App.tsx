import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardSearchPage from './pages/CardSearchPage';
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import ArchetypePage from "./pages/ArchetypePage";
import RandomDetailPage from "./pages/RandomDetailPage";
import CardSetPage from "./pages/CardSetPage";
import '@/App.scss'

function App() {
  return (
    <div className='w-full min-h-[100vh] relative bg-[url(/images/wallpaper.jpg)] bg-no-repeat bg-fixed'>
      <div className="absolute inset-0 bg-stone-950 opacity-90"></div>
      <div className="relative">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cardSearch" element={<CardSearchPage />} />
            <Route path="/archetype" element={<ArchetypePage />} />
            <Route path="/detail/:cardName" element={<DetailPage />} />
            <Route path="/randomCard" element={<RandomDetailPage />} />
            <Route path="/cardSet" element={<CardSetPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
