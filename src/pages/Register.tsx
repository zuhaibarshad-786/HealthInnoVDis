import { useState } from "react";
import RegistrationForm from "../components/RegistrationForm";
import Confirmation from "../components/Confirmation";

const Register = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    return (
        <div className="min-h-screen bg-orange-300 flex items-center justify-center">
            <div className="bg-white flex gap-4 w-11/12 max-w-[1000px] items-start rounded-xl overflow-hidden shadow-lg flex-col-reverse md:flex-row">
                {isSubmitted ? <Confirmation /> : <RegistrationForm onContinue={() => setIsSubmitted(true)} />}
            </div>
        </div>
    );
};

export default Register;