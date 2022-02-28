import { Route, Routes, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Connect from './pages/connect';
import Home from './pages/home';
import Journal from './pages/journal';
import LogIn from './pages/logIn';
import News from './pages/news';
import { useEffect } from 'react';
import Header from './Components/header';

export const linksData = [
  { path: "/Home", element: <Home /> },
  { path: "/News", element: <News /> },
  { path: "/Journal", element: <Journal /> },
  { path: "/Connect", element: <Connect /> },
  { path: "/Login", element: <LogIn /> },
]

function App() {

  const navigate = useNavigate();

  useEffect(function () {
    navigate("/home")
  }, []);

  return (
    <AppContainer>
      <Header />
      <Routes>
        {linksData.map(({ path, element }) => <Route key={element} element={element} path={path} />)}
      </Routes>

    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  
`
