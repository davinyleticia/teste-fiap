'use client';

import { motion } from 'framer-motion';
import './loading-spinner.scss';

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <motion.div
        className="spinner"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
      <p>Carregando...</p>
    </div>
  );
}