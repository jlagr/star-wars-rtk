import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './assets/images/sw_logo.png';
import FilmsList from './components/FilmsList';
import FilmDetails from './components/FilmDetails';
import PageNotFound from './components/PageNorFound';

function App() {
  return (
    <>
      <header className="bg-black h-full">
      <div className="container py-4">
        <div className="grid grid-cols-2 gap-4 place-items-start">
          <div>
            <img src={logo} alt="Logo" className="w-300 h-150" />
          </div>
          <div className="text-center py-4 uppercase">
            <h1 className="text-3xl font-bold text-white">star wars films</h1>
            <h3 className="text-sm text-white/25">A small project to practice the use of React, Axios, Redux Toolkit and Tailwind</h3>
          </div>
        </div>
      </div>
      </header>
      <div className='min-h-screen flex item-center justify-center bg-hero-pattern bg-cover text-white bg-black'>
        <BrowserRouter>
          <Routes>
              <Route path='/' elemen={<FilmsList />}/>
              <Route path='/film-details/:episode_id' element={<FilmDetails />   }/> 
              <Route path="*" element={<PageNotFound />} />
              <Route index element={<FilmsList />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
