import { axiosInstance } from '@/app/_api/axiosInstance';
import { END_POINTS } from '@/app/_constants/api';

interface HealthData {
  status: string;
}

const getHealth = async () => {
  const { data } = await axiosInstance.get<HealthData>(END_POINTS.HEALTH, {
    useAuth: false,
  });

  return data;
};

export default getHealth;
