'use client';

import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import Image from 'next/image';

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: '國小安親課輔',
      description: '提供完整的課後輔導服務，包括作業指導、課業複習和進度跟進。我們的專業教師團隊會根據每個學生的學習情況，制定個性化的輔導計劃。',
      details: [
        '專業教師一對一作業指導',
        '課業解惑與複習',
        '定期評量複習',
        '良好讀書習慣培養',
        '課後進度跟進回報'
      ],
      image: '/images/classroom-1.jpg'
    },
    {
      id: 2,
      title: '國中英數理補習',
      description: '針對性強化英語、數學和自然科學等核心科目。採用循序漸進的教學方法，幫助學生打好基礎，提升學習成績。',
      details: [
        '英文文法與閱讀訓練',
        '數學觀念建立與演練',
        '自然科實驗與理論整合',
        '課程進度緊扣學校進度',
        '定期模擬考試測驗'
      ],
      image: '/images/classroom-2.jpg'
    },
    {
      id: 3,
      title: '小一正音班',
      description: '專注於幫助小一新生建立正確的發音基礎，培養良好的語言表達能力。通過趣味教學方式，讓孩子在輕鬆的氛圍中學習。',
      details: [
        '注音符號正確發音',
        '基礎識字教學',
        '朗讀與發音練習',
        '聽說讀寫全方位訓練',
        '小班制教學'
      ],
      image: '/images/study-group.jpg'
    },
    {
      id: 4,
      title: '國一先修班',
      description: '為即將升上國中的學生做好準備，提前適應國中課程內容和學習方式，建立學習自信。',
      details: [
        '國中英文文法先修',
        '數學基礎概念建立',
        '自然科基礎預習',
        '國中生活適應指導',
        '學習方法指導'
      ],
      image: '/images/teaching-method.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 頁面標題 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative py-24 bg-blue-400 text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">課程介紹</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            為每位學生提供最適合的學習方案，幫助他們在學習路上穩步前進
          </p>
        </div>
      </motion.div>

      {/* 課程列表 */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <motion.img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
                  <p className="text-gray-600 mb-6">{course.description}</p>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg mb-2">課程特色：</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {course.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* CTA 區塊 */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-400 to-blue-600 py-16 mt-16"
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">開始您孩子的學習之旅</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            立即與我們聯繫，了解更多課程詳情和報名資訊
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
          >
            預約諮詢
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
} 