'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Parallax */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-banner.jpg"
            alt="文特蘭安親班環境"
            fill
            className="object-cover transform scale-110 motion-safe:animate-ken-burns"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-full flex items-center justify-center text-center"
        >
          <div className="max-w-4xl px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              文特蘭補習班 菓林分校
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-8"
            >
              二十五年在地深耕教育，用心打造優質學習環境
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a
                href="/contact"
                className="inline-block bg-blue-400 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:bg-blue-500 hover:scale-105 hover:shadow-lg"
              >
                立即諮詢
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Features Section with Hover Effects */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            {...fadeInUp}
            className="text-3xl font-bold text-center mb-16"
          >
            我們的特色
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "📚",
                title: "專業課程",
                description: "國小安親課輔、國中英數理補習，全方位學科輔導"
              },
              {
                icon: "🎯",
                title: "小班制教學",
                description: "確保每位學生都能得到充分的關注和指導"
              },
              {
                icon: "🌟",
                title: "優質環境",
                description: "舒適的學習空間，完善的教學設備"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Preview Section with Card Effects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-16"
          >
            精選課程
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "國小安親課輔",
                image: "/images/classroom-1.jpg",
                description: "提供完整課後輔導，培養良好讀書習慣"
              },
              {
                title: "國中英數理補習",
                image: "/images/classroom-2.jpg",
                description: "針對性輔導，提升學科成績"
              },
              {
                title: "特色課程",
                image: "/images/study-group.jpg",
                description: "小一正音班、國一先修班，打好學習基礎"
              }
            ].map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg"
              >
                <div className="relative h-64">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-white/80 mb-4">{course.description}</p>
                  <a
                    href="/courses"
                    className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm hover:bg-white/30 transition-colors duration-300"
                  >
                    了解更多
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-16"
          >
            來自家長們的好評
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Google Reviews */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white text-lg font-bold mr-4">
                  G
                </div>
                <h3 className="text-xl font-semibold">Google 評論</h3>
              </div>
              <div className="space-y-6">
                {[
                  {
                    rating: 5,
                    comment: "老師很認真，環境很好，孩子們都很喜歡來上課。",
                    author: "陳小姐",
                    date: "2024年2月"
                  },
                  {
                    rating: 5,
                    comment: "老師教學認真，會依照每個孩子的程度給予適當的指導。",
                    author: "王小姐",
                    date: "2024年1月"
                  },
                  {
                    rating: 5,
                    comment: "環境舒適，老師們都很有耐心，孩子在這裡學習成長。",
                    author: "林小姐",
                    date: "2023年12月"
                  }
                ].map((review, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                    <div className="flex items-center mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                    <p className="text-gray-600 mb-2">{review.comment}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{review.author}</span>
                      <span>{review.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Parent Testimonials */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-6">家長心得分享</h3>
              <div className="space-y-6">
                {[
                  {
                    comment: "自從來到文特蘭，孩子的學習態度變得更積極了。老師們不僅注重學業，也很重視孩子的品格培養。",
                    author: "陳媽媽",
                    grade: "國小三年級"
                  },
                  {
                    comment: "這裡的教學方式很活潑，孩子們都很喜歡。特別是英文課程，讓孩子從討厭英文變成喜歡英文。",
                    author: "林爸爸",
                    grade: "國小五年級"
                  },
                  {
                    comment: "老師們都很專業，會針對孩子的弱點進行輔導。孩子在這裡的成績進步很多，最重要的是建立了良好的學習習慣。",
                    author: "黃媽媽",
                    grade: "國中二年級"
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                    <p className="text-gray-600 mb-2">{testimonial.comment}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{testimonial.author}</span>
                      <span>{testimonial.grade}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section with Gradient */}
      <section className="py-20 bg-gradient-to-r from-blue-400 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <h2 className="text-3xl font-bold text-white mb-6">開啟孩子的學習之旅</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            立即聯絡我們，為孩子提供最好的教育支持
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              預約諮詢
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
} 