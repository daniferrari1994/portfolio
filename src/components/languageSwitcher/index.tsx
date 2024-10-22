import React from 'react';
import i18next from 'i18next';

const LanguageSwitcher: React.FC = () => {
  const changeLanguage = (lng: string) => {
    i18next.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
    </div>
  );
};

export default LanguageSwitcher;
