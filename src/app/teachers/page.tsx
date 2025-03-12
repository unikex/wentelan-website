'use client';

import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';

export default function TeachersPage() {
  const teachers = [
    {
      id: 1,
      name: '游主任',
      title: '教務主任',
      subjects: ['國中數學'],
      experience: '25年教學經驗',
      description: 'EMBA碩士畢業，專精於國中數學教學。以深入淺出的教學方式聞名，善於引導學生掌握數學要領。',
      expertise: ['數學解題', '邏輯思維培養', '升學輔導']
    },
    {
      id: 2,
      name: '曾老師',
      title: '國小部負責人',
      subjects: ['國小全科'],
      experience: '20年教學經驗',
      description: '資深國小教育工作者，對國小教育充滿熱忱。專注於小一正音教學，協助學生打好學習基礎。',
      expertise: ['小一正音班', '課業輔導', '品格教育']
    },
    {
      id: 3,
      name: 'Angela',
      title: '英語教師',
      subjects: ['國中小英文'],
      experience: '15年教學經驗',
      description: '專業英語教師，採用生動活潑的教學方式，重視學生的口語表達能力，培養學生對英文的興趣。',
      expertise: ['英語會話', '文法教學', '聽力訓練']
    },
    {
      id: 4,
      name: '田老師',
      title: '理化老師',
      subjects: ['國中理化'],
      experience: '15年教學經驗',
      description: '專業理化教師，擅長將抽象的理化概念轉化為生活實例，讓學生更容易理解和記憶。',
      expertise: ['理化實驗', '觀念講解', '考題分析']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">專業師資團隊</h1>
            <p className="text-xl max-w-3xl mx-auto">
              擁有豐富教學經驗的優秀教師群，為學生打造最優質的學習體驗
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Teachers Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teachers.map((teacher, index) => (
              <FadeIn key={teacher.id} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{teacher.name}</h3>
                        <p className="text-blue-600 font-semibold mt-1">{teacher.title}</p>
                      </div>
                      <div className="px-4 py-2 bg-blue-50 text-blue-800 rounded-full text-sm">
                        {teacher.experience}
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">教授科目</h4>
                      <div className="flex flex-wrap gap-2">
                        {teacher.subjects.map((subject) => (
                          <span
                            key={subject}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="mt-6 text-gray-600 leading-relaxed">
                      {teacher.description}
                    </p>

                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">專長領域</h4>
                      <div className="flex flex-wrap gap-2">
                        {teacher.expertise.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-8">想了解更多師資資訊？</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-400 text-white px-8 py-4 rounded-full text-lg hover:bg-blue-500 transition-colors"
            >
              預約免費諮詢
            </motion.button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
} 