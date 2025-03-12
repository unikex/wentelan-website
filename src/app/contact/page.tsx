'use client';

import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-24 bg-gradient-to-r from-blue-400 to-blue-600 text-white"
      >
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            聯繫我們
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl max-w-3xl mx-auto"
          >
            歡迎隨時與我們聯繫，了解更多課程資訊
          </motion.p>
        </div>
      </motion.section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <FadeIn direction="left">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold mb-8">聯絡資訊</h2>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg"
              >
                <div className="text-2xl">📍</div>
                <div>
                  <h3 className="font-semibold mb-2">地址</h3>
                  <p className="text-gray-600">桃園市大園區菓林路137號（近菓林國小）</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg"
              >
                <div className="text-2xl">📞</div>
                <div>
                  <h3 className="font-semibold mb-2">電話</h3>
                  <p className="text-gray-600">03-3935427</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg"
              >
                <div className="text-2xl">⏰</div>
                <div>
                  <h3 className="font-semibold mb-2">營業時間</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>週一至週五：12:00 - 22:00</p>
                    <p>週六：依課程安排（期中期末有衝刺日）</p>
                    <p>週日：休息</p>
                    <p className="text-blue-600">寒暑假期間有特別課程</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeIn>

          {/* Map Section */}
          <FadeIn direction="right">
            <h2 className="text-3xl font-bold mb-8">交通資訊</h2>
            <div className="bg-white p-4 rounded-xl shadow-lg mb-6">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7183510444787!2d121.25510054999999!3d25.0768178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34429ff4b2e0f0a5%3A0x7b16c18ad5736ae1!2z5paH54mp6IiI5Lq65pWZ5a246ZmifOiKrOaenOWIhuagoO-8iOiKrOaenOWci-Wwj--8iVvlm73lsI_lronopb_or77ovLjjgJHjgJHmtbfosqjpurvnvo7oqp7or77nqIvjgJHjgJHlm73kuK3oi7HmlbjnkIblhYPnm4rnjq_jgJHjgJHljYHlsI_kuIDlhYjkv67mraPpn7PnfbQ!5e0!3m2!1szh-TW!2stw!4v1710475200000!5m2!1szh-TW!2stw"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
} 