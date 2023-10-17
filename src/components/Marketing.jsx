import {
  Card,
  CardContent,
  CardHeader,
  // CardFooter,
  CardTitle,
  // CardDescription,
} from "./ui/card";
import { Headphones, Podcast, Play, Users } from "lucide-react";

const Marketing = () => {
  return (
    <>
        <div
          className="grid xs:grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-x-3"
        >
          <Card className="p-4 border border-gray-500 rounded-xl">
            <CardTitle className="flex items-center justify-between">
              <p>Active Creators</p>
              <span>
                <Podcast color="#64748B" Size={12}/>
              </span>
            </CardTitle>
            <CardContent className="pt-4">200</CardContent>
          </Card>

          <Card className="p-4 border border-gray-500 rounded-xl ">
            <CardTitle className="flex items-center justify-between">
              <p>Active Listeners</p>
              <span>
              <Headphones color="#64748B" Size={12}/>
              </span>
            </CardTitle>
            <CardContent className="pt-4">438</CardContent>
          </Card>
          <Card className="p-4 border border-gray-500 rounded-xl ">
            <CardTitle className="flex items-center justify-between">
              <p>New Users</p>
              <span>
              <Users color="#64748B" Size={12}/>
              </span>
            </CardTitle>
            <CardContent className="pt-4">588</CardContent>
          </Card>
          <Card className="p-4 border border-gray-500 rounded-xl ">
            <CardTitle className="flex items-center justify-between">
              <p>Plays</p>
              <span>
              <Play color="#64748B" Size={12}/>
              </span>
            </CardTitle>
            <CardContent className="pt-4">600k</CardContent>
          </Card>
        </div>
     
    </>
  );
};

export default Marketing;
