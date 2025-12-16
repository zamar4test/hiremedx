import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Home from './pages/Home'
import FindTalent from './pages/FindTalent'
import Jobs from './pages/Jobs'
import Professionals from './pages/Professionals'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
    return (
        <Router>
            <div className="bg-light-grey min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/find-talent" element={<FindTalent />} />
                        <Route path="/jobs" element={<Jobs />} />
                        <Route path="/professionals" element={<Professionals />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App
