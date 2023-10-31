import React from 'react';
import useIsDesktop from '@/hooks/useIsDesktop';
import { useGetTotalListeningMinutes } from '@/api/useGetTotalListeningMinutes';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer,
} from 'recharts';
import { useState, useEffect } from 'react';
import ListeningMinsPieChart from './ListeningMinsPieChart';
import { Loader2 } from 'lucide-react';

const ListeningMinsChart = () => {
  
  const [listeningTimeCount, setListeningTimeCount] = useState([])
  
  const {data, isLoading} = useGetTotalListeningMinutes();

  const select = async(data) => {
      setListeningTimeCount(data)
      // console.log(listeningTimeCount)
      return await data
    }

    useEffect(() => {
      select(data)
    })
    

    const desktop = useIsDesktop(1023);
    return(
      <>
        <div className='flex flex-col xs:justify-center xs:py-7 xs:px-3 md:p-6 xs:mb-4 lg:mb-0 w-full xs:h-[400px] xs:h-min[400px] lg:h-[500px] rounded-md border dark:border-gray-500 text-[#0D0C22] dark:text-[#F8F7F4] bg-white dark:bg-transparent'>
        <p className='p-3 my-0'>Listening Time</p> 
        {
          isLoading &&
            <svg className={`animate-spin xs:w-[50px] sm:w-[70px] md:w-[100px] h-[100%] mx-auto py-auto`} viewBox="0 0 24 24">
            <Loader2 />
          </svg>
        }
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
            <Label angle={20} position='center' style={{ textAnchor: 'middle' }}/>
            </XAxis >
            <YAxis  dx={-20} dataKey="totalListeningMinutes" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            {
              desktop && <Legend />
            }
            <Line type="monotone" dataKey="year" stroke=""/>
            <Bar dataKey="totalListeningMinutes" barSize={`${desktop ? 30 : 10}`} fill="#8884d8" radius={[8, 8, 0, 0]}/>
          </ComposedChart>
        </ResponsiveContainer>
      </div> 
      {
          isLoading &&
            <svg className={`animate-spin xs:w-[50px] sm:w-[70px] md:w-[100px] h-[100%] mx-auto py-auto`} viewBox="0 0 24 24">
            <Loader2 />
          </svg>
        }   
          <ListeningMinsPieChart listeningTimeCount={listeningTimeCount}/>
      </>
      );
  
  
}
export default ListeningMinsChart;