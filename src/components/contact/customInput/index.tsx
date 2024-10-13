import React, { useState } from 'react';
import { Box, FormControl, FormErrorMessage, FormHelperText, Input, Textarea } from '@chakra-ui/react';

interface CustomInputFieldProps {
  errorMessage?: string;
  id: string;
  isTextArea?: boolean;
  placeholder: string;
  type?: string;
  validate?: (value: string) => string | null;
}

const CustomInputField: React.FC<CustomInputFieldProps> = ({ 
  id,
  placeholder,
  type = 'text',
  isTextArea = false,
  validate,
}) => {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleBlur = () => {
    let formattedValue = value.trim();

    if (id === 'phone' || id === 'email') {
      formattedValue = formattedValue.replace(/\s+/g, '');
    } else {
      formattedValue = formattedValue.replace(/\s{2,}/g, ' ');
    }
    
    setValue(formattedValue);

    if (validate) {
      const error = validate(formattedValue);
      setErrorMessage(error);
    }
  };

  return (
    <FormControl
      isInvalid={!!errorMessage}
      fontFamily="'Roboto Mono', monospace"
      id={id}
      isRequired
      py="5px"
      >
      {isTextArea ? (
        <Textarea
          bg="#1d1d1d"
          borderRadius="6px"
          color="#ffffffea"
          h="230px"
          onBlur={handleBlur}
          onChange={handleChange}
          p="10px"
          placeholder={placeholder}
          resize="none"
          w="480px"
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
          onBlur={handleBlur}
          onChange={handleChange}
          p="10px"
          placeholder={placeholder}
          type={type}
          value={value}
          w="220px"
          _focusVisible={{
            outline: 'solid 2px #459c8c !important'
          }}
          _placeholder={{ color: '#ffffffea', fontWeight: 300 }}
        />
      )}
      <Box style={{ height: '20px', overflow: 'hidden' }}>
        <FormErrorMessage color="#E53E3E" fontSize="14px" mt="2px" display={errorMessage ? 'block' : 'none'}>
          {errorMessage}
        </FormErrorMessage>
      </Box>
    </FormControl>
  );
};

export default CustomInputField;
