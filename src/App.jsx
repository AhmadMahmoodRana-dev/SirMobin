import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layout/Layout';
import CustomisedAppDevelopment from './pages/services/CustomisedAppDevelopment';
import EnterpriseSoftwareDevelopment from './pages/services/EnterpriseSoftwareDevelopment';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='services/customise-app'  element={<CustomisedAppDevelopment/>} />
          <Route path='services/enterprise-development'  element={<EnterpriseSoftwareDevelopment/>} />
        </Route>
      </Routes>
  );
}

export default App;
