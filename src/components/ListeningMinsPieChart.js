import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer} from 'recharts';
import useIsMobile from '@/hooks/useIsMobile';
import { Loader2 } from 'lucide-react';

const COLORS = ['#0088FE', '#00C49F', '#FFC34F'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};


const ListeningMinsPieChart = ({ listeningTimeCount, isLoading}) => {
    const mobile = useIsMobile(430)

    const CustomTooltip = () => {
        if (listeningTimeCount) {
          return (
            <div className="custom-tooltip">
                {
                    listeningTimeCount?.map((data, index) => {
                        return (
                            <div key={index}>
                            <p className="label">{`${data.year}`}</p>
                            </div>
                        )
                    })
                }
            </div>
          );
        }
      return null;
    };
  
    return (
        <div className='pt-7 xs:h-[400px] xs:h-min[400px] lg:h-[500px] rounded-lg shadow-lg bg-white'>
            <h3 className='px-4 xs:pb-3'>Percentage Per listening time</h3>
            {
              isLoading &&
              <svg className="animate-spin xs:w-[50px] sm:w-[70px] md:w-[100px] h-[100%] mx-auto py-auto" viewBox="0 0 24 24">
              <Loader2 />
            </svg>
            }
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={300} height={300}>
          <Pie
            data={listeningTimeCount}
            cx="50%"
            cy="40%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={mobile ? 100 : 150}
            fill="#8884d8"
            dataKey="totalListeningMinutes"
          >
            {listeningTimeCount?.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
        </div>
      
    );
}

export default ListeningMinsPieChart

