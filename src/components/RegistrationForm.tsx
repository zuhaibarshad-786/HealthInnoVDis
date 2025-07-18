import { ArrowLeft, ArrowRight, Asterisk } from "lucide-react";
import Button from "./Button";

const RegistrationForm = ({ onContinue }: { onContinue: () => void }) => {
    return (
        <>
            <div className="sm:w-3/4 w-full  p-6 space-y-4">
                <div>
                    <h1 className="text-orange-600 font-bold text-2xl">HID NETWORK LUNCH</h1>
                    <p className="text-orange-600/70 text-md">
                        <span className="font-bold">4 Sep 2025</span> - 12:00 till 13:30
                    </p>
                </div>

                {[
                    { label: "First Name", required: true },
                    { label: "Last Name", required: true },
                    { label: "Company", required: true },
                    { label: "Job Title", required: true },
                    { label: "Dietary requirements and/or allergies", required: false },
                ].map(({ label, required }) => (
                    <fieldset key={label} className="border-2 border-orange-600 rounded-xl pl-4 font-medium">
                        <legend>
                            {label} {required && <Asterisk className="text-orange-600 inline-block w-3 h-3" />}
                        </legend>
                        <input
                            type="text"
                            className="text-md h-full w-full py-4 px-1 focus:outline-none"
                            required={required}
                        />
                    </fieldset>
                ))}

                <fieldset className="border-2 border-orange-600 rounded-xl pl-4 font-medium">
                    <legend>
                        Register another person? <Asterisk className="text-orange-600 inline-block w-3 h-3" />
                    </legend>
                    <select className="w-full py-4 px-1 text-md focus:outline-none">
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                </fieldset>

                <div className="flex gap-4 items-center justify-end pt-4">
                    <Button>
                        <span className="bg-white rounded-full w-4 h-4 flex items-center justify-center">
                            <ArrowLeft size={14} className="text-primary" />
                        </span>
                        Back
                    </Button>
                    <Button onClick={onContinue}>
                        Continue
                        <span className="bg-white rounded-full w-4 h-4 flex items-center justify-center">
                            <ArrowRight size={14} className="text-primary" />
                        </span>
                    </Button>
                </div>
            </div>

            <div className="sm:w-1/4 w-full bg-gray-100 h-full p-3 flex flex-col gap-y-3 ">
                <img src="/bg.jpg" alt="Sample Food" className="w-full h-32 object-cover rounded-lg" />
                <h2 className="text-orange-600 font-bold text-xl">REGISTRATION SUMMARY</h2>
                <div className="flex justify-between border-t border-gray-300 pt-1">
                    <span className="font-semibold text-sm">Registrant Type</span>
                    <span className="text-sm">Attendee</span>
                </div>
                <div className="flex justify-between border-t border-gray-300 pt-1">
                    <span className="font-semibold text-sm">Email Address</span>
                    <span className="text-sm font-bold text-orange-600">kiki-scholts@live.nl</span>
                </div>
            </div>
        </>
    )
}

export default RegistrationForm
