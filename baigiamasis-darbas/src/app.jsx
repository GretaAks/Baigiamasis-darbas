import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import HomePage from './pages/home-page';
import ServicePage from './pages/services-page';
import ContactPage from './pages/contact-page';

import { CssBaseline} from '@mui/material';
import PageLayout from "././components/layouts/page-layout";
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';

const App = () => (
  <CssBaseline>
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<HomePage />} /> 
            <Route path="/paslaugos" element={<ServicePage />} />
            <Route path="/kontaktai" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  </CssBaseline>
);

export default App;
