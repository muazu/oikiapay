'use client';

import Image from "next/image";
import { useLanguage } from "./context/LanguageContext";
import { useState } from "react";

export default function Home() {
  const { language, setLanguage, t } = useLanguage();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'el' : 'en');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f3ff]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo.svg"
              alt="OikosPay Logo"
              width={150}
              height={40}
              priority
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={toggleLanguage}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              {language === 'en' ? 'ΕΛ' : 'EN'}
            </button>
            <a 
              href="#" 
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              {t('login')}
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showMobileMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {showMobileMenu && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <button 
                onClick={toggleLanguage}
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                {language === 'en' ? 'ΕΛ' : 'EN'}
              </button>
              <a 
                href="#" 
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                {t('login')}
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-indigo-600 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                {t('headline')}
              </h1>
              <p className="text-lg text-indigo-100 mb-8 max-w-3xl mx-auto">
                {t('subheadline')}
              </p>
              <button className="bg-white hover:bg-gray-100 text-indigo-600 font-medium py-3 px-8 rounded-full shadow-lg transition-colors text-lg mx-auto">
                {t('cta.getStarted')}
              </button>
            </div>
            <div className="flex justify-center">
              <div className="relative max-w-5xl w-full">
                <div className="bg-white p-6 rounded-lg shadow-2xl mx-auto overflow-hidden">
                  <Image
                    src="/hero-mockup.png"
                    alt="OikosPay Dashboard"
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-md"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Start Your Business Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('features.title')}
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                {t('features.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 max-w-6xl mx-auto">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start mb-4">
                  <Image
                    src="/icon-automate.svg"
                    alt="Automate Calculations"
                    width={48}
                    height={48}
                    className="mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {t('feature1.title')}
                    </h3>
                    <p className="text-gray-700">
                      {t('feature1.text')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start mb-4">
                  <Image
                    src="/icon-payment.svg"
                    alt="Streamline Payments"
                    width={48}
                    height={48}
                    className="mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {t('feature2.title')}
                    </h3>
                    <p className="text-gray-700">
                      {t('feature2.text')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start mb-4">
                  <Image
                    src="/icon-transparency.svg"
                    alt="Enhance Transparency"
                    width={48}
                    height={48}
                    className="mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {t('feature3.title')}
                    </h3>
                    <p className="text-gray-700">
                      {t('feature3.text')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start mb-4">
                  <Image
                    src="/icon-communication.svg"
                    alt="Centralize Communication"
                    width={48}
                    height={48}
                    className="mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {t('feature4.title')}
                    </h3>
                    <p className="text-gray-700">
                      {t('feature4.text')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-14 flex justify-center">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-full transition-colors text-lg">
                {t('cta.getStarted')}
              </button>
            </div>
          </div>
        </section>

        {/* Migrate Seamlessly Section */}
        <section className="bg-[#f5f3ff] py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {t('howItWorks.title')}
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  {t('howItWorks.subtitle')}
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-indigo-100 rounded-full p-2 mr-4">
                      <span className="flex items-center justify-center w-6 h-6 bg-indigo-600 text-white rounded-full font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">
                        {t('step1.title')}
                      </h3>
                      <p className="text-gray-700">
                        {t('step1.text')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-indigo-100 rounded-full p-2 mr-4">
                      <span className="flex items-center justify-center w-6 h-6 bg-indigo-600 text-white rounded-full font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">
                        {t('step2.title')}
                      </h3>
                      <p className="text-gray-700">
                        {t('step2.text')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-indigo-100 rounded-full p-2 mr-4">
                      <span className="flex items-center justify-center w-6 h-6 bg-indigo-600 text-white rounded-full font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">
                        {t('step3.title')}
                      </h3>
                      <p className="text-gray-700">
                        {t('step3.text')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-indigo-100 rounded-full p-2 mr-4">
                      <span className="flex items-center justify-center w-6 h-6 bg-indigo-600 text-white rounded-full font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">
                        {t('step4.title')}
                      </h3>
                      <p className="text-gray-700">
                        {t('step4.text')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="bg-indigo-600 p-4 flex justify-center">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                      </svg>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {t('admin.title')}
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <svg className="w-6 h-6 text-indigo-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{t('admin.feature1')}</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-6 h-6 text-indigo-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{t('admin.feature2')}</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-6 h-6 text-indigo-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{t('admin.feature3')}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="bg-indigo-600 p-4 flex justify-center">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {t('tenant.title')}
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <svg className="w-6 h-6 text-indigo-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{t('tenant.feature1')}</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-6 h-6 text-indigo-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{t('tenant.feature2')}</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-6 h-6 text-indigo-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{t('tenant.feature3')}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Features Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
              <div className="md:col-span-2">
                <div className="bg-indigo-600 p-8 rounded-xl text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">{t('roles.title')}</h3>
                  <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-indigo-100">
                    {t('features.subtitle')}
                  </p>
                </div>
              </div>
              <div className="md:col-span-3">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {t('finalCta.title')}
                </h2>
                <p className="text-lg text-gray-700 mb-10">
                  {t('finalCta.subtitle')}
                </p>
                
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
                  <div className="flex flex-col space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your email" />
                    </div>
                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
                      {t('finalCta.button')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-indigo-600 py-12 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <Image
                src="/logo.svg"
                alt="OikosPay Logo"
                width={120}
                height={32}
                className="invert"
              />
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center">
              <a href="#" className="text-white hover:text-indigo-200 transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-white hover:text-indigo-200 transition-colors">
                {t('footer.terms')}
              </a>
              <a href="#" className="text-white hover:text-indigo-200 transition-colors">
                {t('footer.contact')}
              </a>
              <button 
                onClick={toggleLanguage}
                className="text-white hover:text-indigo-200 transition-colors"
              >
                {language === 'en' ? 'ΕΛ' : 'EN'}
              </button>
            </div>
          </div>
          <div className="border-t border-indigo-500 pt-8 text-center text-indigo-200">
            {t('footer.copyright')}
          </div>
        </div>
      </footer>
    </div>
  );
}
