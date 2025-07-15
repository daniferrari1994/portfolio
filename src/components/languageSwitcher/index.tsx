import React, { useEffect, useState } from 'react';
import { Switch } from "@/components/ui/switch";
import { Tooltip } from "@/components/ui/tooltip";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faE, faS } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isLanguageEnglish, setIsLanguageEnglish] = useState(i18n.language === 'en');

  useEffect(() => {
    setIsLanguageEnglish(i18n.language === 'en');
  }, [i18n.language]);

  const handleSwitchChange = () => {
    const newLanguage = isLanguageEnglish ? "es" : "en";
    i18n.changeLanguage(newLanguage);
    setIsLanguageEnglish(prev => !prev);
  };

  return (
    <Switch
      colorPalette="teal"
      size="lg"
      checked={!isLanguageEnglish}
      onChange={handleSwitchChange}
      trackLabel={{
        on: (
          <Tooltip content="Español" openDelay={0} showArrow>
            <Icon>
              <FontAwesomeIcon icon={faS} size='xs' style={{ color: '#333' }} />
            </Icon>
          </Tooltip>
        ),
        off: (
          <Tooltip content="English" openDelay={0} showArrow>
            <Icon>
              <FontAwesomeIcon icon={faE} size='xs' />
            </Icon>
          </Tooltip>
        ),
      }}
    />
  );
};

export default LanguageSwitcher;
