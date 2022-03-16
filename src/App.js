import './App.css';
import { Box, useMediaQuery } from '@chakra-ui/react';
import { Home, AboutMe, Projects, NotFound } from './containers'
import { Navbar, ThreeJsRoom, Footer } from './components';
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

  return (

    <Box
      h={isNotSmallerScreen ? "100%" : '100%'}
    >
      <Navbar />
      <ThreeJsRoom />
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/aboutme' element={<AboutMe />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </Box>

  );
}


export default App;
