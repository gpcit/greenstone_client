import React from 'react';
import { Routes, Route } from "react-router-dom";
import './index.css';
import QrScanner from './components/ScannerComponent';
import HomePage from './page/HomePage';
import DashboardPage from './page/DashboardPage';
import AttendeePage from './page/AttendeePage';
import RegistrationPage from './page/RegistrationPage';
import Toastify from './components/ToastComponent';
import RafflePage from './page/RafflePage';
import FirstRaffle from './page/FirstRaffle';
import FirstRaffleQRScanner from './components/FirstRaffleQRScannerComponent';
import SecondRaffle from './page/SecondRaffle';
import ThirdRaffle from './page/ThirdRaffle';
import SecondRaffleQRScanner from './components/SecondRaffleQRScannerComponent';
import ThirdRaffleQRScanner from './components/ThirdRaffleQRScannerComponent';

function App() {
  return (
    <>
    <Toastify />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/attendees" element={<AttendeePage />} />
      <Route path="/qr-scan" element={<QrScanner />} />
      <Route path="/raffle/1st/qr-scan" element={<FirstRaffleQRScanner />} />
      <Route path="/raffle/2nd/qr-scan" element={<SecondRaffleQRScanner />} />
      <Route path="/raffle/3rd/qr-scan" element={<ThirdRaffleQRScanner />} />
      <Route path="/raffle" element={<RafflePage />} />
      <Route path="/raffle/1st" element={<FirstRaffle />} />
      <Route path="/raffle/2nd" element={<SecondRaffle />} />
      <Route path="/raffle/3rd" element={<ThirdRaffle/>} />
    </Routes>
    </>
  );
}

export default App;
