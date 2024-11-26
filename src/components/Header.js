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



export default function Header() {
    return (
        <div className="bg-secondary py-4">
            <div className="flex container mx-auto justify-between">
                <h1 className="text-2xl font-bold font-mono">LOGO</h1>
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>DAS</AvatarFallback>
                            </Avatar>
                        </MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem>New Window</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Share</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Print</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>

            </div>
        </div>
    )
}
