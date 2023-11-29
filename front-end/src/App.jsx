import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Kelas from "./pages/Kelas";
import KelasPremium from "./pages/KelasPremium";
import KelasGratis from "./pages/KelasGratis";
import { LoginPage, RegisterOTP, RegisterPage } from "./pages/Auth";

function App() {
  const noNavbar = ["/auth/login", "/auth/register", "/auth/register/otp"];
  return (
    <BrowserRouter>
      {noNavbar.includes(window.location.pathname) ? null : <NavbarComponent />}
      <Routes>
        <Route path="/" element={<Kelas />} />
        <Route path="/kelasPremium" element={<KelasPremium />} />
        <Route path="/kelasGratis" element={<KelasGratis />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/auth/register/otp" element={<RegisterOTP />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
