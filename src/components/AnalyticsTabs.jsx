import {
  Card,
  CardContent,
  CardTitle,
} from "./ui/card";
import { Headphones, Podcast, Download, Users, Loader2 } from "lucide-react";

import { useGetTotalDownloads } from "@/api/useGetTotalDownloads";
import { useGetActiveCreators } from "@/api/useGetActiveListeners";
import { useGetActiveListeners } from "@/api/useGetActiveCreators";
import { useGetNewUsers } from "@/api/useGetNewUsers";

const AnalyticsTabs = () => {

  const onError = (error) => {
    console.log("An error occurred", error)
  }
  
  const onSuccess = (totalDownloads) => {
    // console.log("data fetched", totalDownloads)
  }

  const {data: totalDownloads, isLoading: isLoadingTotalDownloads} = useGetTotalDownloads(onSuccess, onError)

  const {data: activeCreatorsCount, isLoading: isLoadingActiveCreators} = useGetActiveCreators(onSuccess, onError)

  const {data: activeListenersCount, isLoading: isLoadingActiveListeners} = useGetActiveListeners(onSuccess, onError)

  const {data: newUserCount, isLoading: isLoadingNewUsersCount} = useGetNewUsers(onSuccess, onError)

  return (
    <>
        <div
          className="grid xs:grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-x-3"
        >
          <Card className="p-4 border dark:border-gray-500 rounded-xl shadow-md bg-white dark:bg-transparent text-[#0D0C22] dark:text-[#F8F7F4]">
            <CardTitle className="flex items-center justify-between text-[#0D0C22] dark:text-[#F8F7F4]">
              <p>Active Creators</p>
              <span>
                <Podcast color="#64748B" size={20}/>
              </span>
            </CardTitle>
            <CardContent className="pt-4 text-[#0D0C22] dark:text-[#F8F7F4]">{
              isLoadingActiveCreators ? 
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
              <Loader2 />
            </svg> 
              : `+${activeCreatorsCount} in the month`
            } </CardContent>
          </Card>

          <Card className="p-4 border dark:border-gray-500 rounded-xl shadow-md bg-white text-[#0D0C22] dark:text-[#F8F7F4]">
            <CardTitle className="flex items-center justify-between">
              <p>Active Listeners</p>
              <span>
              <Headphones color="#64748B" size={20}/>
              </span>
            </CardTitle>
            <CardContent className="pt-4 ">{
              isLoadingActiveListeners ? 
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
              <Loader2 />
            </svg> 
              : `+${activeListenersCount} in the month`
            }</CardContent>
          </Card>
          <Card className="p-4 border dark:border-gray-500 rounded-xl bg-white text-[#0D0C22] dark:text-[#F8F7F4]">
            <CardTitle className="flex items-center justify-between">
              <p>New Users</p>
              <span>
              <Users color="#64748B" size={20}/>
              </span>
            </CardTitle>
            <CardContent className="pt-4 text-[#0D0C22] dark:text-[#F8F7F4]">{
              isLoadingNewUsersCount ? 
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
              <Loader2 />
            </svg> 
              : `+${newUserCount} in the month`
            } </CardContent>
          </Card>
          <Card className="p-4 border dark:border-gray-500 rounded-xl bg-white text-[#0D0C22] dark:text-[#F8F7F4]">
            <CardTitle className="flex items-center justify-between">
              <p>Total Downloads</p>
              <span>
           <Download color="#64748B" size={20}/>
              </span>
            </CardTitle>
            <CardContent className="pt-4">{
              isLoadingTotalDownloads ? 
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
              <Loader2 />
            </svg> 
              : `+${totalDownloads} in the month`
            }</CardContent>
          </Card>
        </div>
     
    </>
  );
};

export default AnalyticsTabs;
