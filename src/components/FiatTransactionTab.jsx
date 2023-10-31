import { useState, useEffect  } from "react";
import axios from "axios";

import { Loader2 } from "lucide-react"


export const FiatTransactionTab = () => {
  const [fiatTransaction, setFiatTransaction] = useState([]);
  const [IsLoading, setIsLoading] = useState(false)
  
  const getFiatTransaction = async () => {
    // console.log(latestFiat)
    setIsLoading(true)
		try {
      const {data} = await axios.get(`${process.env.API_ENDPOINT}/transaction/fiat/list/latest`) 
			// console.log(data);
			setFiatTransaction(data);
      setIsLoading(false)
		} catch (error) {
			console.log(error);
			return;
		}
	};

  useEffect(() => {
    getFiatTransaction()
  }, [])

   
  return (
    <div className="space-y-8 xs:mt-3 lg:mt-0 p-4 border dark:border-gray-500 rounded-xl text-[#0D0C22] dark:text-[#F8F7F4] bg-white dark:bg-transparent shadow-lg">
      <h1 >Latest Transaction</h1>
      {
        IsLoading ? <Loader2 /> :
        fiatTransaction?.map((transaction, index) => {
          return (
            <div key={index} className="flex items-center">
              <img className="space-y-0 rounded-[50%]" src={transaction.from.avatar} alt="avatar" width={50} height={50}/>
              <div className="ml-4 space-y-1">
                <p className="text-muted-foreground text-sm font-medium leading-none">
                  {transaction.from.tag}
                </p>
                <div>
              </div>
                <div className="ml-auto font-medium">{`${transaction.currency} ${transaction.amount}`}</div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}
