"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

type Label_Key = "heading" | "subheading";

type Language = "en" | "hin";

const Labels_Dict: Record<Language, Record<Label_Key, string>> = {
  en: {
    heading: "How's everything been bud?",
    subheading: "Just fine, I guess.",
  },
  hin: {
    heading: "और क्या हाल भाई?",
    subheading: "सब ठीक, तू बता।",
  },
};

const LANGUAGE_KEY = "selected_lang";

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    localStorage.setItem(LANGUAGE_KEY, language);
  }, [language]);

  useEffect(() => {
    const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
    if (savedLanguage === "en" || savedLanguage === "hin") {
      setLanguage(savedLanguage);
    }
  }, []);

  const updateLanguage = (selection: Language) => () => setLanguage(selection);

  return (
    <div className="flex h-full items-center justify-center w-full flex-col gap-5">
      <div className="text-5xl font-bold">
        {Labels_Dict[language]["heading"]}
      </div>
      <div className="flex flex-row justify-center items-center gap-3 p-5">
        <div
          className={clsx(
            "shadow-md bg-gradient-to-t from-blue-700 to-white font-bold text-7xl p-5 rounded-lg hover:from-white hover:to-blue-700 text-white hover:text-blue-700 shadow-blue-800"
          )}
          onClick={updateLanguage("en")}
        >
          A
        </div>
        <div
          className={clsx(
            "shadow-md bg-gradient-to-t from-blue-700 to-white font-bold text-7xl p-5 rounded-lg hover:from-white hover:to-blue-700 text-white hover:text-blue-700 shadow-blue-800"
          )}
          onClick={updateLanguage("hin")}
        >
          अ
        </div>
      </div>
      <div className="text-4xl italic">
        {Labels_Dict[language]["subheading"]}
      </div>
    </div>
  );
}
