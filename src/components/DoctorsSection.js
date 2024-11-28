import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PersonIcon, PlusIcon, ClockIcon  } from "@radix-ui/react-icons";

import { categories, doctors } from "@/lib/data";
import { Button } from "./ui/button";
import Link from "next/link";


export default function DoctorsSection({ isHome }) {

    const filteredDoctors = isHome ? doctors.slice(0, 6) : doctors;

    return (
        <div className="container mx-auto my-20">
            <div className="flex justify-between">
                <h1 className="text-2xl font-semibold">Doctors You Need</h1>
                {
                    isHome ?
                        <Link href={"/doctors"}>
                            <Button className="px-6">View All</Button>
                        </Link>
                        : (
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Theme" />
                                </SelectTrigger>
                                <SelectContent>
                                    {
                                        categories.map((category) => (
                                            <SelectItem key={category} value={category}>{category}</SelectItem>
                                        ))
                                    }
                                </SelectContent>
                            </Select>
                        )}
            </div>

            <div className="grid my-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    filteredDoctors.map((doctor) => (
                        <Card key={doctor.name}>
                            <CardHeader className={"flex flex-row"}>
                                <Avatar className="self-center h-8 w-8">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>DAS</AvatarFallback>
                                </Avatar>
                                <div className="pl-3">
                                    <CardTitle>{doctor.name}</CardTitle>
                                    <CardDescription>{doctor.category}</CardDescription>
                                </div>
                            </CardHeader>

                            {
                                !isHome && (
                                    <CardContent>
                                        <div className="flex justify-between my-2">
                                            <div className="flex items-center gap-2">
                                                <PersonIcon />
                                                <h1 className="font-semibold">Gender:</h1>
                                            </div>
                                            <h1>{doctor.gender}</h1>
                                        </div>
                                        <div className="flex justify-between my-2">
                                            <div className="flex items-center gap-2">
                                                <PlusIcon />
                                                <h1 className="font-semibold">Hospital:</h1>
                                            </div>
                                            <h1>{doctor.hospital}</h1>
                                        </div>
                                        <div className="flex justify-between my-2">
                                            <div className="flex items-center gap-2">
                                                <ClockIcon />
                                                <h1 className="font-semibold">Appointment Time:</h1>
                                            </div>
                                            <h1>{doctor.appointmentTime}</h1>
                                        </div>
                                    </CardContent>
                                )}
                            {
                                isHome ?
                                    <CardFooter>
                                        <Link href={`/doctors/${doctor.id}`}>
                                            <Button>See Detail</Button>
                                        </Link>
                                    </CardFooter> :
                                    <CardFooter>
                                        <Link className="w-full" href={`/doctors/${doctor.id}`}>
                                            <Button className="w-full">See Detail</Button>
                                        </Link>
                                    </CardFooter>
                            }
                        </Card>
                    ))
                }
            </div>
        </div>
    );
}
