import { UploadCloudIcon } from 'lucide-react'

const AttendingCard = () => {
    return (
        <div className="relative w-60 sm:w-80">
            <div className="w-full max-w-sm mx-auto bg-white rounded-2xl overflow-hidden shadow-lg">
                <div
                    className="h-64 relative z-50"
                    style={{
                        backgroundImage: "url('/bg.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-primary opacity-70"></div>

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-36 h-36 bg-white rounded-full flex flex-col items-center justify-center shadow-lg">
                            <UploadCloudIcon size={20} className="font-bold mb-1" />
                            <p className="text-xs font-bold">Upload Image</p>
                            <hr className="border w-[80%] mx-auto" />
                            <p className="text-xs font-bold ">Without Image</p>
                        </div>
                    </div>

                    <div className="absolute bottom-6 left-0 right-0 text-center">
                        <h3 className="text-white text-xl font-bold tracking-wide">KIKI SCHOLTS</h3>
                    </div>
                </div>

                <div className="bg-primary/40 p-6">
                    <p className="font-bold text-lg mb-1">I'm attending</p>
                    <p className="font-black text-2xl mb-2">HID NETWORK LUNCH</p>
                    <p className="text-lg font-bold">Thursday, September 04, 2025</p>
                </div>
            </div>
        </div>
    )
}

export default AttendingCard
