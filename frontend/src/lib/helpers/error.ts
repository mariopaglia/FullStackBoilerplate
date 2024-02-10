import { AxiosError } from 'axios';
import { toast } from 'sonner';

export const displayError = (error: Error | AxiosError | unknown, fallbackMessage?: string) => {
  if (error instanceof AxiosError) {
    if (error.response?.data.message) {
      toast.error(error.response?.data.message);
    } else {
      toast.error(fallbackMessage ? fallbackMessage : error.message);
    }
  }
};
