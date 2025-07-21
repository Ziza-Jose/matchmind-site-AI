import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">MatchMind AI - Versão Estável</h1>
      <p className="mb-4">Bem-vindo ao sistema de previsões de tênis.</p>
      <Link to="/dashboard" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition">
        Ir para o Dashboard
      </Link>
    </div>
  );
}