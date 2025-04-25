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
import ApexBuildSupport from './pages/services/ApexBuildSupport';
import AdvancedInfraSetup from './pages/services/AdvancedInfraSetup';
import DigitalMarketting from './pages/services/DigitalMarketting';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';

// service_cswm5n7
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
          <Route path='services/apex-build-support'  element={<ApexBuildSupport/>} />
          <Route path='services/advanced-infra-setup'  element={<AdvancedInfraSetup/>} />
          <Route path='services/digital-marketting'  element={<DigitalMarketting/>} />
          <Route path='project/:slug'  element={<ProjectDetail/>} />
         
        </Route>
        <Route path='/about' element={<About/>} />
      </Routes>
    </>
      
  );
}

export default App;
