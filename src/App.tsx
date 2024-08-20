import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
// import SalesPage from './pages/SalesPage';
//import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={LoginPage} />
        <Route path="/dashboard" Component={DashboardPage} />
        <Route path="/products" Component={ProductsPage} />
        {/* <Route path="/sales" component={SalesPage} />
        <Route path="/settings" component={SettingsPage} /> */}
      </Routes>
    </Router>
  );
}

export default App;
