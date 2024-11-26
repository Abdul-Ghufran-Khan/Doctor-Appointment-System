import Image from "next/image";
import { Button } from "./ui/button";


export default function HeroSection() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex py-10 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="font-semibold sm:text-2xl text-xl mb-4 text-gray-900">
                       Doctor Appointment System
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
                        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
                        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
                        chambray.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button>
                            Find Doctor You Need
                        </Button>
                        <Button variant='outline'>
                            Apply As A Doctor
                        </Button>
                       
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-end">
                    <Image
                        className="object-cover object-center rounded"
                        alt="hero"
                        height={400}
                        width={400}
                        src="https://images.unsplash.com/photo-1605684954998-685c79d6a018?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9jdG9yfGVufDB8fDB8fHww"
                    />
                </div>
            </div>
        </section>

    );
}