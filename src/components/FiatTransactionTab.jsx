import { useState, useEffect  } from "react";
import axios from "axios";


export const FiatTransactionTab = () => {
  const [fiatTransaction, setFiatTransaction] = useState([]);

 useEffect(() => {
  const getFiatTransaction = async() => {
    const {data} = await axios.get(`${process.env.API_ENDPOINT}/transaction/fiat/list/latest`) 
    return setFiatTransaction(data) 
  }
  getFiatTransaction()
 },[])

  
 
  return (
    <div className=" space-y-8 xs:mt-3 lg:mt-0 p-4 border border-gray-500 rounded-xl">
      <h1 className="text-white">Latest Transaction</h1>
      {
        fiatTransaction?.map((transaction, index) => {
          return (
            <div key={index} className="flex items-center">
            
              <img className="space-y-0 rounded-[50%]" src={transaction.from.avatar} alt="avatar" width={50} height={50}/>
              <div className="ml-4 space-y-1">
                <p className="text-muted-foreground text-sm font-medium leading-none">
                  {transaction.from.tag}
                </p>
                
                <div className="text-white ml-auto font-medium">{`${transaction.currency} ${transaction.amount}`}</div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}
