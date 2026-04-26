import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import AllProjectsPage from './pages/AllProjectsPage.jsx';
import ProjectDetailPage from './pages/ProjectDetailPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '') || undefined;

function App() {
    return (
        <BrowserRouter basename={routerBasename}>
            <Header />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<AllProjectsPage />} />
                <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
