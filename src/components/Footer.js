import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-brand-blue text-lg font-semibold mb-4">Контакти</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p>Телефон: прийом показів (для побутових споживачів): (061)228-51-09, (061)702-05-50,</p>
                  <p>(098)168-01-01; (050)19-91-69; (093)170-28-35</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p>Адреса: вул. Славгарів, 14, м. Запоріжжя,</p>
                  <p>69035; e-mail: kanc@zoe.com.ua</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <ExternalLink className="h-4 w-4" />
                <a href="#" className="text-brand-blue hover:text-blue-300 transition-colors">
                  Особистий кабінет замовника послуг комерційного обліку
                </a>
              </div>
            </div>
          </div>

          {/* Middle Section */}
          <div className="text-center">
            <p className="text-sm mb-4">
              Споживачі можуть подати скаргу до АТ "Запоріжжяобленерго" щодо якості послуг через мобільний додаток "Енергетика Онлайн"
            </p>
            <div className="flex justify-center space-x-4 mb-6">
              <img src="/images/google-play.png" alt="Google Play" className="h-10" />
              <img src="/images/app-store.png" alt="App Store" className="h-10" />
            </div>
            <div className="flex justify-center space-x-3 mb-6">
              <img src="/images/partner-1.png" alt="Partner" className="h-8" />
              <img src="/images/partner-2.png" alt="Partner" className="h-8" />
              <img src="/images/partner-3.png" alt="Partner" className="h-8" />
              <img src="/images/partner-4.png" alt="Partner" className="h-8" />
              <img src="/images/partner-5.png" alt="Partner" className="h-8" />
            </div>
            <div className="mb-6">
              <img src="/images/qr-code.png" alt="QR Code" className="h-20 mx-auto" />
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-brand-blue text-lg font-semibold mb-4">Антикорупційна діяльність</h3>
            <div className="space-y-3 text-sm">
              <p>Шановні споживачі!</p>
              <p>В АТ "Запоріжжяобленерго" працює Лінія довіри з питань запобігання та протидії корупції</p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span className="text-brand-blue font-semibold">ТЕЛЕФОН: (050) 822-64-26</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:stopcorrupt@zoe.com.ua" className="text-brand-blue hover:text-blue-300 transition-colors">
                    E-mail: stopcorrupt@zoe.com.ua
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <div className="mb-4">
            <a 
              href="#" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
            >
              слідкуйте за нами на facebook
            </a>
          </div>
          <div className="flex justify-center items-center space-x-2 text-sm">
            <span>Передати покази:</span>
            <div className="bg-blue-500 rounded-full p-2">
              <ExternalLink className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;