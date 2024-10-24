import React from 'react';
import { List, Text } from '@chakra-ui/react';
import { StyledInfoCard } from './styled';

interface IInfoCard {
  date: string;
  description: string[];
  location: string;
  title: string;
}

const InfoCard: React.FC<IInfoCard> = ({ title, date, location, description }) => {
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
      <List.Root>
        {description.map((item, index) => (
          <List.Item key={index} color="#E2E8F0">
            {item}
          </List.Item>
        ))}
      </List.Root>
    </StyledInfoCard>
  );
};

export default InfoCard;
