import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

export default function errorHandler(error: Error | AxiosError | unknown) {
  if (error instanceof AxiosError) {
    toast.error(error.response?.data.message);
    throw new Error(error.response?.data.message);
  }

  if (error instanceof Error) {
    toast.error(error.message);
    throw new Error(error.message);
  }
}
