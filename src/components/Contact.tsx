import React from 'react';

const Contact: React.FC = () => {
  return (
    <div id="contact" className="pt-24 p-10">
      <hr className="border-t border-gray-300 mb-8" />
      <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
      <p className="mb-8">Get in touch with Ensoltech for your manufacturing solutions.</p>
      
      {/* Contact Form */}
      <div className="max-w-2xl mx-auto px-5">
        <form className="flex flex-col gap-4">
            {/* 성함 (Name) */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                성함
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="이름을 입력해주세요"
              />
            </div>

            {/* 소속 (Organization) */}
            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                소속
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="회사명을 입력해주세요"
              />
            </div>

            {/* 이메일 (Email) */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                이메일
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="email@example.com"
              />
            </div>

            {/* 메세지 (Message) */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                메세지
              </label>
              <textarea
                id="message"
                name="message"
                rows={8}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="문의사항을 입력해주세요"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              문의하기
            </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

