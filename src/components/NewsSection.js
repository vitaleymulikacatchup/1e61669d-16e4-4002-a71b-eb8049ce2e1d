import React from 'react';
import { Calendar, Clock } from 'lucide-react';

function NewsSection() {
  const newsItems = [
    {
      id: 1,
      category: 'ОСТАННІ НОВИНИ',
      title: '06 ЛИСТОПАДА ПО ЗАПОРІЗЬКІЙ ОБЛАСТІ ДІЯТИМУТЬ ГТВ',
      date: '5 листопада 2025',
      content: 'Відповідно до команди НЕК «Укренерго», з метою стабілізації ситуації в ОЕС України енергосистемі, 06 листопада по Запорізькій області будуть застосовані графіки погодинних відключень (ГПВ). Одночасно вимикатимуться з 08:00 до 10:00 - 0,5 черги, з 10:00 до 16:00 - 1 черга, з 20:00 до 22:00 - 1,5 черги, з 16:00 до 20:00 - 2 черги.'
    },
    {
      id: 2,
      category: 'АКТУАЛЬНІ НОВИНИ',
      title: 'Реєстр електропостачальників',
      content: 'Реєстр електропостачальників, які приєдналися до умов публічного договору електропостачання при виданні послуг у розподілу електроенергії...'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main news */}
          <div className="lg:col-span-2">
            {newsItems.map((item) => (
              <article key={item.id} className="news-card mb-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span className="uppercase font-medium">{item.category}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h2>
                {item.date && (
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                    <Clock className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                )}
                <p className="text-gray-700 leading-relaxed">
                  {item.content}
                </p>
                {item.id === 1 && (
                  <div className="mt-4 text-sm text-gray-600">
                    <p className="mb-2">Години вимкнення електропостачання по чергам (підгрупам) у графіках часу на вимкнення:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>1.1: 19:00 - 20:30</li>
                      <li>1.2: 19:00 - 22:30</li>
                      <li>2.1: 15:30 - 19:00</li>
                      <li>2.2: 15:30 - 19:00</li>
                      <li>3.1: 15:30 - 19:00</li>
                      <li>3.2: 15:30 - 19:00</li>
                      <li>4.1 - не вимикається</li>
                      <li>4.2: 08:30 - 10:30</li>
                      <li>5.1: 19:00 - 22:30</li>
                      <li>5.2: 19:00 - 22:30</li>
                      <li>6.1: 13:30 - 15:30</li>
                      <li>6.2: 13:30 - 15:30</li>
                    </ul>
                    <p className="mt-4 text-xs text-gray-500">
                      Також з 08:00 до 22:00 діятимуть графіки обмеження потужності (ГОП) в повному обсязі (5 черг).
                    </p>
                  </div>
                )}
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="text-center">
                <img 
                  src="/images/schedule-banner.png" 
                  alt="Діяти графік погодинних відключень" 
                  className="w-full h-auto mb-4"
                />
                <h3 className="text-lg font-bold text-blue-600 mb-2">
                  Діятиме графік погодинних відключень
                </h3>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-md transition-colors">
                Переглянути всі новини
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsSection;