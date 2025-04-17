import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layout/Layout';
import CustomisedAppDevelopment from './pages/services/CustomisedAppDevelopment';
import EnterpriseSoftwareDevelopment from './pages/services/EnterpriseSoftwareDevelopment';
import ContactUs from './pages/ContactUs';
import AdvancedInfraSetup from './pages/services/AdvancedInfraSetup';
import ApexBuildSupport from './pages/services/ApexBuildSupport';
import ApplicationModernization from './pages/services/ApplicationModernization';
import ConversionRateOptimization from './pages/services/ConversionRateOptimization';
import DigitalMarketing from './pages/services/DigitalMarketing';
import EmailMarketing from './pages/services/EmailMarketing';
import IndustrySpecificSolutions from './pages/services/IndustrySpecificSolutions';
import IntegrationServices from './pages/services/IntegrationServices';
import MobileApplicationDevelopment from './pages/services/MobileApplicationDevelopment';
import OnlineReputationManagement from './pages/services/OnlineReputationManagement';
import OracleOTBIReporting from './pages/services/OracleOTBIReporting';
import OracleSolutionHub from './pages/services/OracleSolutionHub';
import PostDevelopmentSupport from './pages/services/PostDevelopmentSupport';
import UxUiDesign from './pages/services/UxUiDesign';
import WebDevelopment from './pages/services/WebDevelopment';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='contactUs'  element={<ContactUs/>} />
          <Route path='services/enterprise-development'  element={<EnterpriseSoftwareDevelopment/>} />
          <Route path='services/infra-setup'  element={<AdvancedInfraSetup/>} />
          <Route path='services/apex-build-support'  element={<ApexBuildSupport/>} />
          <Route path='services/application-modernization'  element={<ApplicationModernization/>} />
          <Route path='services/conversion-rate-optimization'  element={<ConversionRateOptimization/>} />
          <Route path='services/customise-app'  element={<CustomisedAppDevelopment/>} />
          <Route path='services/digital-marketting'  element={<DigitalMarketing/>} />
          <Route path='services/email-marketting'  element={<EmailMarketing/>} />
          <Route path='services/industry-solution'  element={<IndustrySpecificSolutions/>} />
          <Route path='services/integration-service'  element={<IntegrationServices/>} />
          <Route path='services/mobile-app'  element={<MobileApplicationDevelopment/>} />
          <Route path='services/reputation-management'  element={<OnlineReputationManagement/>} />
          <Route path='services/oracle-reporting'  element={<OracleOTBIReporting/>} />
          <Route path='services/oracle-solution'  element={<OracleSolutionHub/>} />
          <Route path='services/post-development'  element={<PostDevelopmentSupport/>} />
          <Route path='services/ux-ui'  element={<UxUiDesign/>} />
          <Route path='services/web-dev'  element={<WebDevelopment/>} />
        </Route>
      </Routes>
  );
}

export default App;
