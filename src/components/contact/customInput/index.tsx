import React from 'react';
import { Box, Input, Text } from '@chakra-ui/react';
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps {
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  errorMessage: string;
  maxLength?: number;
  styles?: React.CSSProperties;
}

const FormInput: React.FC<FormInputProps> = ({ placeholder, register, error, errorMessage, maxLength, styles }) => (
  <Box
    fontFamily="'Roboto Mono', monospace"
  >
    <Input
      bg="#1d1d1d"
      borderRadius="6px"
      color="#459c8c"
      maxLength={maxLength}
      placeholder={placeholder}
      style={styles}
      w="480px"
      _focusVisible={{
        outline: 'solid 1px #459c8c !important',
        borderColor: "#459c8c"
      }}
      _placeholder={{ color: '#ffffffea', fontWeight: 300 }}
      {...register}
    />
    {error && 
      <Text 
        color="#E53E3E" 
        display={errorMessage ? 'block' : 'none'}
        fontSize="14px" 
        m="2px 8px"
        data-testid="error-message"
        >
        {errorMessage}
      </Text>
    }
  </Box>
);

export default FormInput;
