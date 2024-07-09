import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './App.scss'
import Navbar from './components/Navbar';
import Home from './pages/home';
import Guides from './pages/guides';
import Booking from './pages/booking';
import Shop from './pages/shop';
import Login from './components/Login';
import SignUp from './components/SignUp';
import SignUpNext from './components/SignUpNext';
import Membership from './components/Membership';
import Coaching from './components/Coaching';
import Forum from './pages/forum';
import Footer from './components/Footer';
import FAQ from './pages/faq';
import i18n from './i18n';
function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/guides" element={<Guides />} />
                        <Route path="/booking" element={<Booking />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/signupnext" element={<SignUpNext />} />
                        <Route path="/membership" element={<Membership />} />
                        <Route path="/coaching" element={<Coaching />} />
                        <Route path="/forum" element={<Forum />} />
                        <Route path="/faq" element={<FAQ />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
