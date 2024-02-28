import './App.css';

import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';

import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import PrivateRoutes from './components/PrivateRoutes';

function App() {
  return (
      <div className="App">
        <AuthProvider>
          <Router>
            <Routes>
              <Route element={<PrivateRoutes/>}>
                <Route path="/" element={<Dashboard />} />
              </Route>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword/>}/>
            </Routes>
          </Router>
        </AuthProvider>
      </div>

  );
}

export default App;
