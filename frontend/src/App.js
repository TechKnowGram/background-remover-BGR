import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Toolsapi from './pages/tools-api';
import Termsofservice from './pages/termsofservice';
import Unlimitedcutouts from './pages/unlimited-cutouts';
import Signup from './pages/signup';
import Results from './pages/results';
import Sample from './pages/sample';
import Dashboard from './pages/Dashboard';
import Resendemail from './pages/resendemail';
import Personaluse from './pages/personal-use';
import Photography from './pages/photography';
import Refundspolicy from './pages/refunds-policy';
import Recipephotomaker from './pages/recipe-photo-maker';
import Replaceib from './pages/replace-image-background';
import Realestateskyremoval from './pages/real-estate-sky-removal';
import Productphotoenhancer from './pages/product-photo-enhancer';
import Privacypolicy from './pages/privacy-policy';
import Pricing from './pages/pricing';
import Photoshop from './pages/photoshop';
import Infinityproplus from './pages/infinity-pro-plus';
import UploadForm from "./pages/upload";
import Fashionphotomaker from './pages/fashion-photo-maker';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Infinityapp from "./pages/infinity-app";
import Impactofphotographyonecommercebuyingexperience from "./pages/impact-of-photography-on-ecommerce-buying-experience";
import Generaltermsconditions from './pages/general-terms-conditions';
import Improvementtermconditions from "./pages/improvement-term-conditions";
import Login from './pages/login';
import Forgotpassword from './pages/forgot-password';
import Onpremise from "./pages/onpremise";
import Newsmedia from "./pages/news-media";
import Enterprise from "./pages/enterprise";
import Ecommerce from "./pages/ecommerce";
import Developers from "./pages/developers";
import Designmaker from './pages/design-maker';
import Contactus from './pages/contact-us';
import Cardealerships from './pages/cardealerships';
import Carimageeditor from './pages/car-image-editor';
import Backgroundremoverapp from './pages/background-remover-app';
import Advertising from './pages/advertising';
import Aboutus from './pages/about-us';
import Account from './pages/account';
import AdminDashboard from './pages/AdminDashboard';
import SuperAdminLogin from './pages/SuperAdminLogin';
import Api from './pages/api';
import RegisterSuperAdmin from './components/RegisterSuperAdmin';
import SuperAdminDashboard from './components/SuperAdminDashboard';
import AdminLogin from './pages/admin-login';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import { useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';



function App() {

  // for checking if user is authenticated
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <div className="App">
        {/* Add Header */}
        <Header />


        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<UploadForm />} />
            <Route path="/tools-api" element={<Toolsapi />} />
            <Route path="/unlimited-cutouts" element={<Unlimitedcutouts />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/termsofservice" element={<Termsofservice />} />
            <Route path="/sample" element={<Sample />} />
            <Route path="/results" element={<Results />} />
            <Route path="/resendemail" element={<Resendemail />} />
            <Route path="/replace-image-background" element={<Replaceib />} />
            <Route path="/Refunds-policy" element={<Refundspolicy />} />
            <Route path="/recipe-photo-maker" element={<Recipephotomaker />} />
            <Route path="/real-estate-sky-removal" element={<Realestateskyremoval />} />
            <Route path="/product-photo-enhancer" element={<Productphotoenhancer />} />
            <Route path="/privacy-policy" element={<Privacypolicy />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/Photoshop" element={<Photoshop />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/personal-use" element={<Personaluse />} />
            <Route path="/onpremise" element={<Onpremise />} />
            <Route path="/fashion-photo-maker" element={<Fashionphotomaker />} />
            <Route path="/forgot-password" element={<Forgotpassword />} />
            <Route path="/infinity-pro-plus" element={<Infinityproplus />} />
            <Route path="/infinity-app" element={<Infinityapp />} />
            <Route path="/news-media" element={<Newsmedia />} />
            <Route path="/login" element={<Login />} />
            <Route path="/general-terms-conditions" element={<Generaltermsconditions />} />
            <Route path="/impact-of-photography-on-ecommerce-buying-experience" element={<Impactofphotographyonecommercebuyingexperience />} />
            <Route path="/improvement-term-conditions" element={<Improvementtermconditions />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/design-maker" element={<Designmaker />} />
            <Route path="/contact-us" element={<Contactus />} />
            <Route path="/car-image-editor" element={<Carimageeditor />} />
            <Route path="/cardealerships" element={<Cardealerships />} />
            <Route path="/background-remover-app" element={<Backgroundremoverapp />} />
            <Route path="/api" element={<Api />} />
            <Route path="/advertising" element={<Advertising />} />
            <Route path="/about-us" element={<Aboutus />} />
            <Route path="/Dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
            <Route path="/admin-dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
            <Route path="/super-admin-login" component={SuperAdminLogin} />
            <Route path="/register-super-admin" element={<RegisterSuperAdmin />} />
            <Route path="/super-admin-dashboard" element={<ProtectedRoute><SuperAdminDashboard /></ProtectedRoute>} />
            <Route path="/admin-login" element={<AdminLogin />} />

          </Routes>
        </main>

        {/* Add Footer */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
