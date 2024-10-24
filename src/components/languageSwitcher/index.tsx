import React from 'react';
import { Switch } from "@/components/ui/switch";
import { Tooltip } from "@/components/ui/tooltip";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faE, faS } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@chakra-ui/react';
import { useLanguage } from '@/context/languageContext';

const LanguageSwitcher: React.FC = () => {
  const { isEnglish, toggleLanguage } = useLanguage();

  const handleSwitchChange = () => {
    toggleLanguage();
  };

  return (
    <Switch
      colorPalette="teal"
      size="lg"
      checked={!isEnglish}
      onChange={handleSwitchChange}
      trackLabel={{
        on: (
          <Tooltip content="Español" openDelay={0} showArrow>
            <Icon>
              <FontAwesomeIcon icon={faS} size="xs" style={{ display: 'inline', color: '#333' }} />
            </Icon>
          </Tooltip>
        ),
        off: (
          <Tooltip content="English" openDelay={0} showArrow>
            <Icon>
              <FontAwesomeIcon icon={faE} size="xs" style={{ display: 'inline' }} />
            </Icon>
          </Tooltip>
        ),
      }}
    />
  );
};

export default LanguageSwitcher;
