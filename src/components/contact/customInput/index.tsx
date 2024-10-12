import React from 'react';
import { FormControl, Input, Textarea } from '@chakra-ui/react';

interface CustomInputFieldProps {
  id: string;
  isTextArea?: boolean;
  placeholder: string;
  type?: string;
}

const CustomInputField: React.FC<CustomInputFieldProps> = ({ id, placeholder, type = 'text', isTextArea = false }) => {
  return (
    <FormControl
      fontFamily="'Roboto Mono', monospace"
      id={id}
      isRequired
      py="10px"
      >
      {isTextArea ? (
        <Textarea
          bg="#1d1d1d"
          borderRadius="6px"
          color="#ffffffea"
          h="230px"
          p="10px"
          placeholder={placeholder}
          resize="none"
          w="450px"
          _focusVisible={{
            outline: 'solid 2px #459c8c !important'
          }}
          _placeholder={{ color: '#ffffffea', fontWeight: 300 }}
        />
      ) : (
        <Input
          bg="#1d1d1d"
          borderRadius="6px"
          color="#ffffffea"
          h="40px"
          p="10px"
          placeholder={placeholder}
          type={type}
          w="200px"
          _focusVisible={{
            outline: 'solid 2px #459c8c !important'
          }}
          _placeholder={{ color: '#ffffffea', fontWeight: 300 }}
        />
      )}
    </FormControl>
  );
};

export default CustomInputField;
