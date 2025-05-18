import React from "react";
import { Link } from 'react-router-dom';
import renviroLogo from "/src/assets/Logo.png";
import landingPage from "/src/assets/Bg-Landing.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import "/src/App.css";

function EcoActPage() {
  const [dark, setDark] = React.useState(false);
  const data = {
    "Nama Kegiatan": "Hijaukan Kembali Rimbang Baling",
    "Tempat Kegiatan": "Riau",
    "Jumlah Relawan": "25 Orang",
    "Waktu": "Juli 2025",
    "Jenis Kegiatan": "Didanai Penuh",
    "Lama Kegiatan": "30 Hari"
  };
  const maxLabelWidth = Math.max(...Object.keys(data).map(label => label.length));


  return (
    <div data-theme={dark ? "dark" : "light"} className="min-h-screen">
      {/* Navbar fixed di atas */}
      <div className="navbar sticky top-0 left-0 right-0 z-50 bg-base-100 shadow-sm">
        <div className="navbar-start">
          <Link
            to="/">
            <img src={renviroLogo} className="w-[auto] h-[117px]" alt="logo" />
          </Link>
        </div>
        <div className="navbar-end  ">
          <ul className="menu menu-horizontal px-1 gap-8">

            <li>
              <Link
                to="/ecoact"
                className="btn rounded-[20px] text-[20px] px-[55px] font-bold py-6 bg-brand-100 text-brand-700 border-none hover:bg-brand-200"             >
                EcoAct
              </Link>
            </li>
            <li>
              <Link
                to="/donate"
                className="btn rounded-[20px] text-[20px] px-[55px] font-bold py-6 bg-brand-700 text-brand-100 border-none "             >
                Donate
              </Link>
            </li>
            <li>
              <Link
                to="/history"
                className="btn rounded-[20px] text-[20px] px-[55px] font-bold py-6 bg-brand-100 text-brand-700 border-none hover:bg-brand-200"             >
                History
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Konten halaman, beri padding atas supaya tidak ketimpa navbar */}
      <main className="pt-[40px] flex flex-col items-center h-400 px-4">
        {/* Contoh konten */}
        <h1 className="text-[48px] top-0 font-bold mb-4">Dana Hijau - Crowfunding Proyek Lingkungan</h1>


      </main>
      <footer className="bg-base-200 text-base-content">
        <div className="flex flex-col items-center justify-center py-10 space-y-4">
          {/* Logo */}
          <img src={renviroLogo} alt="Re-Enviro Logo" className="w-30 h-auto" />
          {/* Social Icons */}
          <div className="flex space-x-6">
            <FontAwesomeIcon icon={faInstagram} size="2xl" />
            <FontAwesomeIcon icon={faTiktok} size="2xl" />
            <FontAwesomeIcon icon={faYoutube} size="2xl" />
            <FontAwesomeIcon icon={faXTwitter} size="2xl" />
          </div>
        </div>

        {/* Garis horizontal */}
        <div className="border-t border-base-content/20 w-full mt-4"></div>

        {/* Copyright */}
        <div className="text-center text-sm py-4">
          <p>© 2025 Publikasi Informasi Teknologi. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

export default EcoActPage;
