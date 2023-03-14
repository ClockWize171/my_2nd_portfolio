import './App.css';
import { useState, useEffect } from 'react';
import { Box, useMediaQuery } from '@chakra-ui/react';
import { Home, AboutMe, Projects, NotFound, ContactMe } from './containers'
import { Navbar, ThreeJsRoom, Footer, Preloader, SnowEffect } from './components';
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

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, Math.floor(Math.random() * 5000) + 1000);
    return () => {
      clearTimeout(timer)
    }
  }, [])


  return (
    <Box
      h={isNotSmallerScreen ? "100%" : '100%'}
    >
      <SnowEffect />
      {loading ?
        <Preloader />
        :
        <>
          <BrowserRouter>
            <ThreeJsRoom />
            <Navbar />
            <Routes>
              <Route path='*' element={<NotFound title='404 Not Found | thet-min-htin' />} />
              <Route path='/' exact element={<Home title='Home | thet-min-htin' />} />
              <Route path='/aboutme' element={<AboutMe title='About Me | thet-min-htin' />} />
              <Route path='/projects' element={<Projects title='Projects | thet-min-htin' />} />
              <Route path='/contact_me' element={<ContactMe title='Contact Me | thet-min-htin' />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </>
      }

    </Box>

  );
}


export default App;
