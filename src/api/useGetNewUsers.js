import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getNewUsers = async() => {
    return await axios.get(`${process.env.API_ENDPOINT}/analytics/new/users`)  
}

export const useGetNewUsers = (onSuccess, onError) => {
    return useQuery({
      queryKey: ["newUsers"],
      queryFn: getNewUsers,
      refetchInterval: 300000,
    refetchIntervalInBackground: true,
    refetchOnMount: true,
      onError,
      onSuccess,
      select: (data) => {
        const count = data?.data.newUsers
        return count
      }
    })
  }