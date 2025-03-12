'use client';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 聯絡資訊 */}
          <div>
            <h3 className="text-xl font-bold mb-4">聯絡我們</h3>
            <div className="space-y-2">
              <p>地址：桃園市大園區菓林路137號</p>
              <p>電話：03-3935427</p>
              <p>Line ID：[Line ID]</p>
            </div>
          </div>

          {/* 營業時間 */}
          <div>
            <h3 className="text-xl font-bold mb-4">營業時間</h3>
            <div className="space-y-2">
              <p>週一至週五：12:00 - 22:00</p>
              <p>週六：依課程安排</p>
              <p>週日：休息</p>
              <p className="text-sm mt-2">寒暑假期間另有特別課程安排</p>
            </div>
          </div>

          {/* 快速連結 */}
          <div>
            <h3 className="text-xl font-bold mb-4">課程資訊</h3>
            <ul className="space-y-2">
              <li>
                <a href="/courses" className="hover:text-blue-400 transition-colors">
                  國小安親課輔
                </a>
              </li>
              <li>
                <a href="/courses" className="hover:text-blue-400 transition-colors">
                  國中英數理補習
                </a>
              </li>
              <li>
                <a href="/courses" className="hover:text-blue-400 transition-colors">
                  小一正音班
                </a>
              </li>
              <li>
                <a href="/courses" className="hover:text-blue-400 transition-colors">
                  國一先修班
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 版權資訊 */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} 文特蘭補習班 菓林分校. 版權所有.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 