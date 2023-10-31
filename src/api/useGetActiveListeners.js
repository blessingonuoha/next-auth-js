import axios from "axios"
import { useQuery } from "@tanstack/react-query"

const getActiveCreators = async() => {
  return await axios.get(`${process.env.API_ENDPOINT}/analytics/active/creators`) 
}


export const useGetActiveCreators = (onSuccess, onError) => {
  return useQuery({
    queryKey: ["activeCreators"],
    queryFn: getActiveCreators,
    refetchInterval: 300000,
    refetchIntervalInBackground: true,
    refetchOnMount: true,
    onError,
    onSuccess,
    select: (data) => {
      const count = data?.data.activeCreators
      return count
    }
  })
}