import axios from "axios"
import { useQuery } from "@tanstack/react-query"

const getActiveCreators = async() => {
  return await axios.get(`${process.env.API_ENDPOINT}/analytics/active/creators`) 
}


export const useGetActiveCreators = (onSuccess, onError) => {
  return useQuery({
    queryKey: ["activeCreators"],
    queryFn: getActiveCreators,
    // refetchOnMount: true,
    onError,
    onSuccess,
    select: (data) => {
      const count = data?.data.activeCreators
      return count
    }
  })
}