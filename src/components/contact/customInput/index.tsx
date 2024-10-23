import React, { useState } from 'react';
import { Fieldset, Input, Textarea } from '@chakra-ui/react';
import { Field } from "@/components/ui/field"
import { useTranslation } from 'react-i18next';

interface CustomInputFieldProps {
  errorMessage?: string;
  id: string;
  isTextArea?: boolean;
  placeholder: string;
  type?: string;
  validate?: (value: string, t: (key: string) => string) => string | null;
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
  const { t } = useTranslation();

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
      const error = validate(formattedValue, t)
      setErrorMessage(error);
    }
  };

  return (
    <Fieldset.Root
      fontFamily="'Roboto Mono', monospace"
      id={id}
      size="lg"
      >
      {isTextArea ? (
        <Field 
          invalid={!!errorMessage}
          errorText={errorMessage}
          >
          <Textarea
            bg="#1d1d1d"
            borderRadius="6px"
            color="#ffffffea"
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder={placeholder}
            required
            resize="none"
            size="xl"
            _focusVisible={{
              outline: 'solid 1px #459c8c !important',
              borderColor: "#459c8c"
            }}
            _placeholder={{ 
              color: '#ffffffea', 
              fontWeight: 300, 
              fontSize: 'sm' 
            }}
          />
          <Fieldset.ErrorText color="#E53E3E" fontSize="14px" mt="2px" display={errorMessage ? 'block' : 'none'}>
            {errorMessage}
          </Fieldset.ErrorText>
        </Field>
      ) : (
        <Field 
          invalid={!!errorMessage}
          errorText={errorMessage}
          >
          <Input
            bg="#1d1d1d"
            borderRadius="6px"
            color="#459c8c"
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder={placeholder}
            required
            type={type}
            value={value}
            _focusVisible={{
              outline: 'solid 1px #459c8c !important',
              borderColor: "#459c8c"
            }}
            _placeholder={{ color: '#ffffffea', fontWeight: 300 }}
          />
          <Fieldset.ErrorText 
            color="#E53E3E" 
            display={errorMessage ? 'block' : 'none'}
            fontSize="14px" 
            mt="2px"
            >
            {errorMessage}
          </Fieldset.ErrorText>
        </Field>
      )}
    </Fieldset.Root>
  );
};

export default CustomInputField;
