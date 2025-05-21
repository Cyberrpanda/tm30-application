import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './components/signin';
import Signup from './components/signup';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
