import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useDashboard } from '../context/DashboardContextProvider';

interface DataItem {
  [key: string]: unknown;
}

const useGetData = (path: string, filterKey?: string) => {


  const { selectedUserId } = useDashboard()

  const [data, setData] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/${path}`);

        let data = response.data

        if (selectedUserId && filterKey) {
          data = data.filter((item: DataItem) => Number(item[filterKey]) === Number(selectedUserId))
        }

        setData(data);
      } catch (error) {
        // setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => {
    };
  }, [path, selectedUserId]);


  return { data, loading };
};

export default useGetData;