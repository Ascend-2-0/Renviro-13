import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-5xl font-bold mb-4 text-red-600">404</h1>
      <p className="text-lg mb-6">Halaman yang kamu cari tidak ditemukan.</p>
      <Link to="/" className="btn btn-primary">Kembali ke Beranda</Link>
    </div>
  );
}

export default NotFound;
