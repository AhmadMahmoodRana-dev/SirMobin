import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layout/Layout';
import ContactUs from './pages/ContactUs';
import CustomsiedAppDevelopment from './pages/services/CustomsiedAppDevelopment';
import ScrollToHash from './components/Home/ScrollToHash';
import MobileAppDevelopment from './pages/services/MobileAppDevelopment';
import WebDevelopment from './pages/services/WebDevelopment';
import UxUi from './pages/services/UxUi';
import OracleSolutionHub from './pages/services/OracleSolutionHub';


function App() {
  return (
    <>
<ScrollToHash/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='contactUs'  element={<ContactUs/>} />
          <Route path='services/customise-app'  element={<CustomsiedAppDevelopment/>} />
          <Route path='services/mobile-app'  element={<MobileAppDevelopment/>} />
          <Route path='services/web-development'  element={<WebDevelopment/>} />
          <Route path='services/ux-ui'  element={<UxUi/>} />
          <Route path='services/oracle-solution-hub'  element={<OracleSolutionHub/>} />
         
        </Route>
      </Routes>
    </>
      
  );
}

export default App;
