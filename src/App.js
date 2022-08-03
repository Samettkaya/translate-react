import "./App.css";
import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";

import React from "react";
import TrackingMap from "./components/TrackingMap";
import PolygonMap from "./components/Poligon";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next",
        },
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
    <TrackingMap />

    <PolygonMap/>
  </div>
  );
}

export default App;
