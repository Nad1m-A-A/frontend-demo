"use client";
import { useState } from "react";

const HomePage = () => {
  const [english, setEnglish] = useState(true);
  const handleLanguage = (current) => {
    setEnglish(!current);
  };
  return (
    <>
      <div className="page">
        <button
          onClick={() => handleLanguage(english)}
          className="self-start py-1 px-2"
        >
          {english ? "العربية" : "English"}
        </button>
        {english && (
          <div className="flex flex-col items-center leading-6">
            <h2 className="p-0 pb-5">Thanks to:</h2>
            <ul>
              <li>
                Boss and leader <b>Harout Abadjian: </b> for inspiration and
                attention.
              </li>
              <li>
                <b>Modar Alkhoury: </b> for motivation and demonstration of long
                term experience.
              </li>
              <li>
                <b>Sherif Alsayed: </b> for dedication to share information and
                help others.
              </li>
              <li>
                <b>Maher Bittar: </b> for insights, open-mindedness and support
                to create this application.
              </li>
              <li>
                And every individual who shares information and positive energy.
              </li>
            </ul>
          </div>
        )}
        {!english && (
          <div className="flex flex-col items-center leading-6">
            <h2 className="p-0 pb-5">:شكرًا ل</h2>
            <ul>
              <li>
                 القائد <b>هاروت أباجيان:</b> للإلهام والاهتمام
              </li>
              <li>
                <b>مضر الخوري:</b> للتحفيز وعرض الخبرة طويلة الأمد
              </li>
              <li>
                <b>شريف السيد:</b> للتفاني في مشاركة المعلومات ومساعدة الآخرين
              </li>
              <li>
                <b>ماهر بيطار:</b> للرؤى والدعم ل إنشاء هذا
                التطبيق
              </li>
              <li>ولكل فرد يشارك المعلومات والطاقة الإيجابية</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
