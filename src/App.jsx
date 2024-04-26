import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Navbar, Footer } from './components';
import { Home, Contact } from './pages';

const App = () => {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
