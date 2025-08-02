import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InvoicesPage from './pages/InvoicesPage';
import CustomerDetails from './pages/CustomerDetails';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InvoicesPage />} />
        <Route path="/customer/:id" element={<CustomerDetails />} />
      </Routes>
    </Router>
  );
}