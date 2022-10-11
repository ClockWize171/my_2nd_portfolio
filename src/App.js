import './App.css';
import { useState, useEffect } from 'react';
import { Box, useMediaQuery } from '@chakra-ui/react';
import { Home, AboutMe, Projects, NotFound } from './containers'
import { Navbar, ThreeJsRoom, Footer, Preloader } from './components';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  // Screen Size
  const [isNotSmallerScreen] = useMediaQuery([
    "(min-width: 1000px)",
    "(min-width:588px)"
  ]);

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, Math.floor(Math.random() * 5000) + 1000);
  }, [])


  return (
    <Box
      h={isNotSmallerScreen ? "100%" : '100%'}
    >
      {loading ?
        <Preloader />
        :
        <>
          <BrowserRouter>
            <ThreeJsRoom />
            <Navbar />
            <Routes>
              <Route path='*' element={<NotFound />} />
              <Route path='/' exact element={<Home />}></Route>
              <Route path='/aboutme' element={<AboutMe />}></Route>
              <Route path='/projects' element={<Projects />}></Route>
            </Routes>
          </BrowserRouter>
          <Footer />
        </>
      }

    </Box>

  );
}


export default App;
