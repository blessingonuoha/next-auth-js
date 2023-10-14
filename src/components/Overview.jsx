"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import Marketing from "./Marketing";
import { CalendarDateRangePicker } from "./DateRangePicker";
import { RecentSales } from "./RecentSales";
import useIsMobile from "../hooks/useIsMobile";
import CalculatorComponent from "./CalculatorComponent";

const data = [
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];

export function Overview() {
  // const mobile = useIsMobile(420);

  return (
    <>
      <CalendarDateRangePicker />
      <Marketing />
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 md:gap-3 lg:gap-6">
        <section
          className={`flex flex-col xs:justify-center md:p-3 sm:w-full border border-gray-500 w-[100%] rounded-md `}
        >
          <span className="text-gray-200 p-2">Overview</span>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <XAxis
                // array of names for XAxis
                dataKey="name"
                // stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                type="number"
                // orientation="right"
                dx={-15}
                // domain={[0, 20000]} set range
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                // array of values for YAxis
                // tickFormatter={(value) => `${value}`}
                padding={{ top: 0, bottom: 10 }}
              />

              <Bar dataKey="total" fill="#d63b" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </section>
        <RecentSales />
      </div>
      {/* <CalculatorComponent /> */}
    </>
  );
}
