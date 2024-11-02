import React, { useState } from 'react';
import { Switch } from "@/components/ui/switch";
import { Tooltip } from "@/components/ui/tooltip";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faE, faS } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@chakra-ui/react';
import i18next from 'i18next';

const LanguageSwitcher: React.FC = () => {
  const [isLanguageEnglish, setIsLanguageEnglish] = useState(true);

  const changeLanguage = (lng: string) => {
    i18next.changeLanguage(lng);
  };

  const handleSwitchChange = () => {
    const newLanguage = isLanguageEnglish ? "es" : "en";
    changeLanguage(newLanguage);
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
