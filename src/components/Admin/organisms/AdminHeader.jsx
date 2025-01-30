import React from "react";
import { RiNotification2Line, RiSearch2Line  } from "react-icons/ri";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


function AdminHeader() {
  return (
    <header className="flex justify-between w-full max-h-1/4 p-5">
        <RiSearch2Line />
        <section className="flex justify-between p-2">
            <RiNotification2Line />
            <Avatar>
                <AvatarImage src={"#"}/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </section>

    </header>
  )
}

export default AdminHeader