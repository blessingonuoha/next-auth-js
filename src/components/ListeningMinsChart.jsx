
// import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
// import { TotalListeningMinutes } from "@/api/TotalListeningMinutes";

// const data = [
//     {
//       name: "Aug",
//       total: Math.floor(Math.random() * 5000) + 1000,
//     },
//     {
//       name: "Sep",
//       total: Math.floor(Math.random() * 5000) + 1000,
//     },
//     {
//       name: "Oct",
//       total: Math.floor(Math.random() * 5000) + 1000,
//     }
    
//   ];
// const NewUsersChart = () => {
//     const onError = (error) => {
//         console.log("An error occurred", error)
//     }
      
//       const onSuccess = (totalDownloads) => {
//         // console.log("data fetched", totalDownloads)
//       }

      
//       const { data: totalListeningMinutes } = TotalListeningMinutes(onError, onSuccess);
//       // console.log(totalListeningMinutes)
//   return (
//   <>
//     <section
//     // style={{ padding: "20px" }} incoperating padding
//     className={`flex flex-col xs:justify-center md:p-3 w-full border border-gray-500 rounded-md `}
//   >
//     <h3 className="text-gray-200 p-3 mt-3">Listening Minutes Per Month</h3>
//     {/* <ResponsiveContainer width="100%" height={250} >
//       <BarChart data={totalListeningMinutes} >
//         <XAxis
//           // array of names for XAxis
//           dataKey="name"
//           // stroke="#888888"
//         //   style={{ padding: "20px" }}
//           fontSize={12}
//           tickLine={false}
//           axisLine={false}
//         //   options={{ 
//         //     scales: {
//         //         yAxes: [{
//         //             ticks: {
//         //                 padding: -10
//         //             }
//         //         }], 
//         //     }
//         // }}
//         //   padding={{ left: 0, right: 5 }}
//         />
//         <YAxis
//           type="number"
//           // orientation="right"
//           dx={-20}
//           // domain={[0, 20000]} set range
//           stroke="#888888"
//         //   style={{ padding: "20px" }}
//           fontSize={12}
//           tickLine={false}
//           axisLine={false}
//           // array of values for YAxis
//           // tickFormatter={(value) => `${value}`}
//         //   options={{ 
//         //     scales: {
//         //         yAxes: [{
//         //             ticks: {
//         //                 padding: 10
//         //             }
//         //         }], 
//         //     }
//         // }}
//         />

//         <Bar dataKey="total" fill="#FFFF00" radius={[8, 8, 0, 0]} />
//       </BarChart>
//     </ResponsiveContainer> */}

//   </section>
//   </>
//   )
// }

// export default NewUsersChart

import React from 'react';
import useIsDesktop from '@/hooks/useIsDesktop';
import { useTotalListeningMinutes } from '@/api/useTotalListeningMinutes';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer,
} from 'recharts';
import { useState, useEffect } from 'react';
import { truncateString } from '../../utils/truncateString';

// const data = [
//   {
//     name: 'Page A',
//     uv: 590,
//     pv: 800,
//     amt: 1400,
//   },
//   {
//     name: 'Page B',
//     uv: 868,
//     pv: 967,
//     amt: 1506,
//   },
//   {
//     name: 'Page C',
//     uv: 1397,
//     pv: 1098,
//     amt: 989,
//   },
//   {
//     name: 'Page D',
//     uv: 1480,
//     pv: 1200,
//     amt: 1228,
//   },
//   {
//     name: 'Page E',
//     uv: 1520,
//     pv: 1108,
//     amt: 1100,
//   },
//   {
//     name: 'Page F',
//     uv: 1400,
//     pv: 680,
//     amt: 1700,
//   },
// ];

const ListeningMinsChart = () => {
  
  const [listeningTimeCount, setListeningTimeCount] = useState([])
  
  const {data} = useTotalListeningMinutes();

  const select = async(data) => {
      setListeningTimeCount(data)
      return await data
    }
    

    const updatedData = (listeningTimeCount) => {
      return {
        ...listeningTimeCount,
        name: "Listening Minutes",
      }
    }

    useEffect(() => {
      select(data)
    })
    

    const desktop = useIsDesktop(1023);
    return(
      <>
        <div className='flex flex-col xs:justify-center md:p-6 w-full xs:h-[400px] xs:h-min[400px] lg:h-[500px] rounded-md border border-gray-500'>
      
       {/* <button onClick={() => {
        
         console.log(updatedData(listeningTimeCount))
        listeningTimeCount?.map( (data) => {
          console.log(data.totalListeningMinutes)
        })
        }} className='text-white'>click</button> */}

        <p className='text-white p-3 my-2'>Listening Minutes</p> 

        
        <ResponsiveContainer width="100%" height="100%" >
          <ComposedChart
            width={500}
            height={400}
            data={listeningTimeCount}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <XAxis dataKey="month" >
            {/* <Label angle={20} position='center' style={{ textAnchor: 'middle' }}/> */}
            </XAxis >
            <YAxis  dx={-20}></YAxis>
            <Tooltip cursor={{ strokeDasharray: '3 3' }}/>
            <Legend />
            <Area type="monotone" dataKey="totalListeningMinutes" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="totalListeningMinutes" barSize={`${desktop ? 30 : 10}`} fill="#7D782F" radius={[8, 8, 0, 0]}/>
            {/* <Line type="monotone" dataKey="totalListeningMinutes" stroke="#ff7300" /> */}
          </ComposedChart>
        </ResponsiveContainer>
      </div>

       
      
      </>
      );
  
  
}
export default ListeningMinsChart;