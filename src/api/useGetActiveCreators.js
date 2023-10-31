import axios from "axios"
import { useQuery } from "@tanstack/react-query"

const getActiveListeners = async() => {
  return await axios.get(`${process.env.API_ENDPOINT}/analytics/active/listeners`) 
}


export const useGetActiveListeners = (onSuccess, onError) => {
  return useQuery({
    queryKey: ["activeListeners"],
    queryFn: getActiveListeners,
    refetchInterval: 300000,
    refetchIntervalInBackground: true,
    refetchOnMount: true,
    onError,
    onSuccess,
    select: (data) => {
      const count = data?.data.activeListeners
      return count
    }
  })
}