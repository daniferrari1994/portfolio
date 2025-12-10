import { useState } from 'react';

interface EmailData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
  language?: string;
}

interface EmailResponse {
  success: boolean;
  message?: string;
  error?: string;
}

interface UseCustomEmailReturn {
  sendEmail: (data: EmailData) => Promise<EmailResponse>;
  isLoading: boolean;
  error: string | null;
}

const useCustomEmail = (): UseCustomEmailReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = async (data: EmailData): Promise<EmailResponse> => {
    setIsLoading(true);
    setError(null);

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      
      const payload = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        message: data.message,
        language: data.language || 'es'
      };
      
      console.log('Enviando datos:', payload);
      console.log('API URL:', apiUrl);
      
      const response = await fetch(`${apiUrl}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      
      console.log('Respuesta del servidor:', result);

      if (!response.ok) {
        console.error('Error detallado:', result);
        throw new Error(result.error || `Error HTTP: ${response.status}`);
      }

      return {
        success: true,
        message: result.message
      };

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido al enviar el email';
      setError(errorMessage);
      
      return {
        success: false,
        error: errorMessage
      };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    sendEmail,
    isLoading,
    error
  };
};

export default useCustomEmail;
