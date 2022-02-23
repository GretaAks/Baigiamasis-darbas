import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { CssBaseline, ThemeProvider} from '@mui/material';
import theme from './components/styles/theme';
import HomePage from './pages/home-page';
import ServicesPage from './pages/services-page/services-page';
import ContactPage from './pages/contact-page';
import PageLayout from "./components/layouts/page-layout";
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';


const App = () => (
  <ThemeProvider theme={theme}>
  <CssBaseline>
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<HomePage />} /> 
            <Route path="/paslaugos" element={<ServicesPage />} />
            <Route path="/kontaktai" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  </CssBaseline>
  </ThemeProvider>
);

export default App;
