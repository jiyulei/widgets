import React, { useEffect, useState } from "react";
import axios from "axios";
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debounceText, setDebounceText] = useState(text);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setDebounceText(text);
    }, 1000);

    return () => {
      clearTimeout(timeId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debounceText,
            target: language.value,
            format: "text",
            source: "en",
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };

    doTranslation();
  }, [language, debounceText]);

  return (
    <div>
      <h3 className="ui header"> Output </h3>
      <h2 className="ui header">{translated}</h2>
    </div>
  );
};

export default Convert;
