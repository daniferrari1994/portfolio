import React from 'react';
import { Text } from '@chakra-ui/react';
import { StyledInfoCard } from './styled';

interface InfoCardProps {
  title: string;
  date: string;
  location: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, date, location }) => {
  return (
    <StyledInfoCard>
      <Text className='infoCard infoCard-date' fontSize="sm" color="#5ad3bd">
        {date}
      </Text>
      <Text className='infoCard infoCard-title' fontSize="lg" fontWeight="bold" color="#ffffffea">
        {title}
      </Text>
      <Text className='infoCard infoCard-location' fontSize="md" color="#A0AEC0">
        {location}
      </Text>
    </StyledInfoCard>
  );
};

export default InfoCard;
