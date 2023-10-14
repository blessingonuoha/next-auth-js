import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentSales() {
  return (
    <div className=" space-y-8 xs:mt-3 lg:mt-0 p-4 border border-gray-500 rounded-xl">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-muted-foreground text-sm font-medium leading-none">
            Olivia Martin
          </p>
          <p className="text-sm text-muted-foreground">
            olivia.martin@email.com
          </p>
          <div className="text-white ml-auto font-medium">+$1,999.00</div>
        </div>
      </div>

      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-muted-foreground text-sm font-medium leading-none">
            Jackson Lee
          </p>
          <p className="text-sm text-muted-foreground">jackson.lee@email.com</p>
          <div className="text-white ml-auto font-medium">+$39.00</div>
        </div>
      </div>

      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>WK</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-muted-foreground text-sm font-medium leading-none">
            William Kim
          </p>
          <p className="text-sm text-muted-foreground">will@email.com</p>
          <div className="text-white ml-auto font-medium">+$99.00</div>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-muted-foreground text-sm font-medium leading-none">
            Sofia Davis
          </p>
          <p className="text-sm text-muted-foreground">sofia.davis@email.com</p>
          <div className=" text-white ml-auto font-medium">+$39.00</div>
        </div>
      </div>
    </div>
  );
}
