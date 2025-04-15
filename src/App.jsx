import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layout/Layout';
import CustomisedApplicationService from './pages/services/CustomisedApplicationService';
import ApplicationModernization from './pages/services/ApplicationModernization';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='services/customise-app'  element={<CustomisedApplicationService/>} />
          <Route path='services/application-modernization'  element={<ApplicationModernization/>} />
        </Route>
      </Routes>
  );
}

export default App;
