import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';

// Un hook personalizado que usa el dispatch tipado
export const useAppDispatch = () => useDispatch<AppDispatch>();