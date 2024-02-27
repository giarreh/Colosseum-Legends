import './App.css';
import Header from './components/Header';
import Signup from './components/Signup';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <Signup />
      </div>
    </AuthProvider>
  );
}

export default App;
