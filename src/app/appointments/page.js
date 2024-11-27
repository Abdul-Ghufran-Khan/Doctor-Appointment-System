import { columns } from "@/components/AppointmentTable/columns";
import { AppointmentTable } from "@/components/AppointmentTable/data-table";
import { appointments } from "@/lib/data";


export default function Appointments(params) {
    return (
        <div className="container mx-auto">
            <h1 className="text-4xl">Appointments</h1>
            <AppointmentTable columns={columns} data={appointments}/>
        </div>
    )
}