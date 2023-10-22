import axios from "axios"
import { useQuery } from "@tanstack/react-query"

const getTotalDownloads = async() => {
  return await axios.get(`${process.env.API_ENDPOINT}/analytics/total/downloads`) 
}


export const useGetTotalDownloads = (onSuccess, onError) => {
  return useQuery({
    queryKey: ["totalDownloads"],
    queryFn: getTotalDownloads,
    // refetchOnMount: true,
    onError,
    onSuccess,
    select: (data) => {
      const total = data?.data.totalDownloads
      return total
    }

  })
}

