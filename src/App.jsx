import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layout/Layout';
import ContactUs from './pages/ContactUs';
import CustomsiedAppDevelopment from './pages/services/CustomsiedAppDevelopment';
import ScrollToHash from './components/Home/ScrollToHash';


function App() {
  return (
    <>
<ScrollToHash/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='contactUs'  element={<ContactUs/>} />
          <Route path='services/customise-app'  element={<CustomsiedAppDevelopment/>} />
         
        </Route>
      </Routes>
    </>
      
  );
}

export default App;
