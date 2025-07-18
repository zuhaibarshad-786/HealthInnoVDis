import { Calendar, ExternalLink, Search } from "lucide-react"
import Button from "./Button"
import AttendingCard from "./AttendingCard"

const Confirmation = () => {
    return (
        <>
            <div className="p-6 space-y-4 w-full">
                <div className="flex justify-between w-full sm:flex-row flex-col gap-y-8">
                    <div>
                        <h1 className="text-primary font-bold text-lg">THANKS FOR REGISTERING</h1>
                        <p className="text-gray-600 text-sm">Your Order: 55052062</p>

                        <div className="space-y-2 mt-4">
                            <h2 className="text-primary font-bold text-xl">HID NETWORK LUNCH</h2>
                            <div className="text-sm text-gray-700 space-y-1">
                                <p>
                                    <span className="font-semibold">Order:</span> 12:00
                                </p>
                                <p>
                                    <span className="font-semibold">Date:</span> Thursday, 4 September 2025
                                </p>
                                <p>
                                    <span className="font-semibold">Location:</span> Health & Innovation District Amsterdam, Plesmanlaan 125, Amsterdam
                                </p>

                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-end gap-3 w-full">
                        <Button className="w-full max-w-80 flex flex-row justify-center">
                            <Calendar size={16} />
                            Add To Calendar
                        </Button>
                        <Button className="w-full max-w-80 flex flex-row justify-center">
                            <ExternalLink size={16} />
                            Go to event website
                        </Button>
                    </div>
                </div>
                <div className="pb-4">
                    <h3 className="text-primary font-bold text-lg mb-3">REGISTRANT DETAILS</h3>

                    <div className="overflow-x-auto scrollbar-none">
                        <table className="w-full min-w-[600px] mt-4">
                            <thead className="border-b border-gray-300">
                                <tr>
                                    <th className="py-2 font-semibold text-left">Full Name</th>
                                    <th className="py-2 font-semibold text-left">Email Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2">Kiki Scholts</td>
                                    <td className="py-2">
                                        <p className="text-primary font-semibold">kiki.scholts@live.nl</p>
                                    </td>
                                    <td className="py-2">
                                        <button className="cursor-pointer border p-2 border-gray-300 rounded">
                                            <Search size={15} />
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>



                <div className="pb-6">
                    <div className="flex items-center gap-2 mb-3">
                        <h3 className="text-primary font-bold text-lg">SHARE YOU ARE ATTENDING</h3>
                        <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                            !
                        </span>
                    </div>

                    <div className="flex items-center gap-4 mb-4 flex-wrap">
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-bold">Color:</span>
                            <div className="flex gap-1">
                                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                                <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
                                <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
                                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-bold">Role:</span>
                            <select className="border border-gray-300 rounded px-2 py-1 text-xs focus:outline-primary">
                                <option>I'm attending</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">Orientation:</span>
                            <div className="flex gap-1 items-center">
                                <div className="w-6 h-6 border-3 rounded"></div>
                                <div className="w-8 h-5 border-2 rounded"></div>
                                <div className="w-5 h-8 border-2 rounded"></div>
                            </div>
                        </div>
                    </div>

                    <AttendingCard />
                </div>
            </div>
        </>
    )
}

export default Confirmation
