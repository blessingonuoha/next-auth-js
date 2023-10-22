import axios from "axios"
import { useQuery } from "@tanstack/react-query"

const getTotalListeningMinutes = async() => {
  return await axios.get(`${process.env.API_ENDPOINT}/analytics/total/listen/minutes`) 
}


export const useTotalListeningMinutes = (onSuccess, onError) => {
  return useQuery({
    queryKey: ["totalListeningMinutes"],
    queryFn: getTotalListeningMinutes,
    refetchOnMount: true,
    onError,
    onSuccess,
    select: (data) => {
      const total = data?.data.map((listeningData) => {
        return listeningData
      })
      return total
    }
  })
}


