"use client";

import AnalyticsTabs from "./AnalyticsTabs";
import {FiatTransactionTab} from "./FiatTransactionTab";
import ListeningMinsChart from "./ListeningMinsChart";

export function Overview() {
  
  return (
    <>
      <AnalyticsTabs />
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 md:gap-3 lg:gap-6">
        <ListeningMinsChart />
        <FiatTransactionTab /> 
      </div>
    </>
  );
}
