import React from 'react';
import { Link, List, Text } from '@chakra-ui/react';
import { StyledInfoCard } from './styled';
import { LuExternalLink } from 'react-icons/lu';

interface IInfoCard {
  date: string;
  description: string[];
  location: string;
  title: string;
  url: string;
}

const InfoCard: React.FC<IInfoCard> = ({  date, description, location, title, url}) => {
  return (
    <StyledInfoCard>
      <Text className="infoCard infoCard-date" color="#5ad3bd" fontSize="sm">
        {date}
      </Text>
      <Text className="infoCard infoCard-title" color="#ffffffea" fontSize="lg" fontWeight="bold">
        {title}
      </Text>
      <Text className="infoCard infoCard-location" color="#A0AEC0" fontSize="lg">
        {location}
      </Text>
      <Link color="#5ad3bd" fontSize="sm" href={url} my="5px">{url}<LuExternalLink /></Link>
      <List.Root>
        {description.map((item, index) => (
          <List.Item key={index} color="#E2E8F0" fontSize="md">
            {item}
          </List.Item>
        ))}
      </List.Root>
    </StyledInfoCard>
  );
};

export default InfoCard;
