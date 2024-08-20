import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
import FramePageLayout from './layouts/FramePageLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={LoginPage} />

        <Route element={<FramePageLayout/>}>
          <Route path="/dashboard" Component={DashboardPage} />
          <Route path="/produtos" Component={ProductsPage} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
