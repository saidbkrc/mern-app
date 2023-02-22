import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateScreen from './screens/CreateScreen.js';
import HomeScreen from './screens/HomeScreen.js';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { Container } from 'react-bootstrap';

const App = () => {
    return (
        <Router>
            <Header />
            <Container>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/create" element={<CreateScreen />} />
                </Routes>
            </Container>
            <Footer />
        </Router>
    );
};

export default App;
