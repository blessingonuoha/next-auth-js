import axios from "axios"
import { useQuery } from "@tanstack/react-query"

const getFiatTransaction = async() => {
  return await axios.get(`${process.env.API_ENDPOINT}/transaction/fiat/list/latest`) 
}


export async function useFiatTransaction (onSuccess, onError) {
  return useQuery({
    queryKey: ["fiatTransaction"],
    queryFn: getFiatTransaction,
    refetchOnMount: true,
    onError,
    onSuccess,
    select: (data) => {
      const transaction = data?.data.map((transactionData) => {
        return transactionData
      })
      // console.log(transaction)

      return transaction
    }
  })
}


