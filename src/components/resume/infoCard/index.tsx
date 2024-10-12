import React from 'react';
import { Text } from '@chakra-ui/react';
import { StyledInfoCard } from './styled';

interface IInfoCard {
  title: string;
  date: string;
  location: string;
}

const InfoCard: React.FC<IInfoCard> = ({ title, date, location }) => {
  return (
    <StyledInfoCard>
      <Text className="infoCard infoCard-date" color="#5ad3bd" fontSize="sm">
        {date}
      </Text>
      <Text className="infoCard infoCard-title" color="#ffffffea" fontSize="lg" fontWeight="bold">
        {title}
      </Text>
      <Text className="infoCard infoCard-location" color="#A0AEC0" fontSize="md">
        {location}
      </Text>
    </StyledInfoCard>
  );
};

export default InfoCard;
