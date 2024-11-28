import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { Button } from "./ui/button";



export default function Header() {
    const session =  null;
    return (
        <div className="bg-secondary py-4">
            <div className="flex container mx-auto justify-between">
                <h1 className="text-2xl font-bold font-mono">LOGO</h1>
                {
                    session? <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>DAS</AvatarFallback>
                            </Avatar>
                        </MenubarTrigger>
                        <MenubarContent>
                            <Link href={"/profile"}>
                            <MenubarItem>Profile</MenubarItem>
                            </Link>
                            <MenubarSeparator />
                            <Link href={"/appointments"}>
                            <MenubarItem>Appointment</MenubarItem>
                            </Link>
                            <MenubarSeparator />
                            <MenubarItem>Log out</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>:
                <Link href={"/signin"}>
                    <Button className="px-6 py-2">Log In</Button>
                </Link>
                }

            </div>
        </div>
    )
}
