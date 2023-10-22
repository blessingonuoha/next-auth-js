import {
  Card,
  CardContent,
  CardTitle,
} from "./ui/card";
import { Headphones, Podcast, Play, Users } from "lucide-react";

import { useGetTotalDownloads } from "@/api/useGetTotalDownloads";
import { useGetActiveCreators } from "@/api/useGetActiveListeners";
import { useGetActiveListeners } from "@/api/useGetActiveCreators";
import { useGetNewUsers } from "@/api/useGetNewUsers";

import { useState } from "react";
const AnalyticsTabs = () => {

  const [isLoading, setIsLoading] = useState(false)


  const onError = (error) => {
    console.log("An error occurred", error)
  }
  
  const onSuccess = (totalDownloads) => {
    // console.log("data fetched", totalDownloads)
  }

  const {data: totalDownloads} = useGetTotalDownloads(onSuccess, onError)

  const {data: activeCreatorsCount} = useGetActiveCreators(onSuccess, onError)

  const {data: activeListenersCount} = useGetActiveListeners(onSuccess, onError)

  const {data: newUserCount} = useGetNewUsers(onSuccess, onError)
  // console.log(isLoading, isFetching)

  return (
    <>
        <div
          className="grid xs:grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-x-3"
        >
          <Card className="p-4 border border-gray-500 rounded-xl">
            <CardTitle className="flex items-center justify-between">
              <p>Active Creators</p>
              <span>
                <Podcast color="#64748B" size={20}/>
              </span>
            </CardTitle>
            <CardContent className="pt-4">+{activeCreatorsCount}</CardContent>
          </Card>

          <Card className="p-4 border border-gray-500 rounded-xl ">
            <CardTitle className="flex items-center justify-between">
              <p>Active Listeners</p>
              <span>
              <Headphones color="#64748B" size={20}/>
              </span>
            </CardTitle>
            <CardContent className="pt-4">+{activeListenersCount}</CardContent>
          </Card>
          <Card className="p-4 border border-gray-500 rounded-xl ">
            <CardTitle className="flex items-center justify-between">
              <p>New Users</p>
              <span>
              <Users color="#64748B" size={20}/>
              </span>
            </CardTitle>
            <CardContent className="pt-4">+{newUserCount} in the month</CardContent>
          </Card>
          <Card className="p-4 border border-gray-500 rounded-xl ">
            <CardTitle className="flex items-center justify-between">
              <p>Total Downloads</p>
              <span>
              <Play color="#64748B" size={20}/>
              </span>
            </CardTitle>
            <CardContent className="pt-4">+{totalDownloads} in the month </CardContent>
          </Card>
        </div>
     
    </>
  );
};

export default AnalyticsTabs;
