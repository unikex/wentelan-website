'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import FadeIn from '@/components/animations/FadeIn';

export default function AboutClient() {
  const stats = [
    { number: '25+', label: '年教學經驗' },
    { number: '3000+', label: '學生人數' },
    { number: '95%', label: '家長滿意度' },
    { number: '90%', label: '學生成績進步' },
  ];

  const values = [
    {
      title: '專業教學',
      description: '擁有豐富教學經驗的師資團隊，採用科學化的教學方法',
      icon: '👨‍🏫'
    },
    {
      title: '因材施教',
      description: '根據每位學生的特點和需求，制定個性化的學習計劃',
      icon: '🎯'
    },
    {
      title: '全人發展',
      description: '注重學生的學習能力培養，同時關注品格教育',
      icon: '🌱'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-24 bg-gradient-to-r from-blue-400 to-blue-600 text-white"
      >
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">關於文特蘭</h1>
            <p className="text-xl max-w-3xl mx-auto">
              二十五年深耕教育，用心培育每一位學子
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", duration: 0.5, delay: index * 0.1 }}
                    className="text-4xl md:text-5xl font-bold text-blue-600 mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">我們的理念</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-xl shadow-lg text-center"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <FadeIn direction="left">
              <div className="relative h-96 rounded-xl overflow-hidden">
                <motion.img
                  src="/images/facility-1.jpg"
                  alt="教學環境"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">優質的學習環境</h2>
                <p className="text-gray-600">
                  我們提供舒適寬敞的教室空間，配備現代化的教學設備，
                  為學生創造最佳的學習氛圍。完善的硬體設施搭配專業的
                  教學團隊，讓每位學生都能在此享受學習的樂趣。
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-400 text-white px-8 py-3 rounded-full hover:bg-blue-500 transition-colors"
                >
                  預約參觀
                </motion.button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
} 