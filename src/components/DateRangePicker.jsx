"use client";

import { useState } from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, format } from "date-fns";
import useIsMobile from "@/hooks/useIsMobile";
import { Button } from "./ui/button";
// import { Download } from "lucide-react";
import { Calendar } from "./ui/calender";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export function CalendarDateRangePicker() {
  const mobile = useIsMobile();

  // sets the initial state of the celender
  const [date, setDate] = useState({
    from: new Date(2023, 0, 20),
    to: addDays(new Date(2023, 0, 20), 20),
  });

  return (
    <div className="grid ">
      <Popover>
        <div className="flex flex-row justify-between my-3 md:flex-row items-end">
          {/* <h1 className="xs:text-[16px] md:text-[18px] font-extrabold text-gray-200">
            Dashboard
          </h1> */}
          <div className="flex justify-center px-2 py-2">
            <PopoverTrigger id="date" variant={"outline"} className={
                  ("py-2 px-3 flex justify-center items-center rounded-md bg-white text-slate-800 text-left font-normal"
                  )
                }
              >
                <CalendarIcon className="mr-2 h-4 w-4 " />
                {/* displays the dates picked on the calender on the button */}
                {date?.from ? (
                  date.to ? (
                    <p className="xs:text-[12px] sm:text-[16px] md:text-[18px] ">
                      {format(date.from, "LLL dd")} -{" "}
                      {format(date.to, "LLL dd")}
                    </p>
                  ) : (
                    format(date.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a date</span>
                )}
            </PopoverTrigger>
            {/* <Button
              className="xs:px-3 xs:mx-2 md:mx-3 md:mt-0 text-center font-normal md:w-[100px] md:border-0"
              variant={"destructive"}
              size="none"
            >
              Download
            </Button> */}
          </div>
        </div>

        <PopoverContent className="h-20% w-auto p-0" align="end">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={`${mobile ? 1 : 2}`}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
