import { useState } from "react";
import Modal from "./Modal";
import { Asterisk, Send } from "lucide-react";
import Button from "./Button";
interface FormData {
  productTitle: string;
  firstName: string;
  lastName: string;
  company: string;
  jobTitle: string;
  selectedTimeframe: string;
  note?: string;
}

const Booking = ({ openModal, setOpenModal, productTitle }) => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormData>({
    productTitle: productTitle,
    firstName: "",
    lastName: "",
    company: "",
    jobTitle: "",
    selectedTimeframe: "<14 working days",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
      {isSubmitted ? (
        <RequestSummary formData={formData} />
      ) : (
        <BookEquipment
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
          setIsSubmitted={setIsSubmitted}
        />
      )}
    </Modal>
  );
};

export default Booking;
const BookEquipment = ({
  formData,
  setFormData,
  handleChange,
  setIsSubmitted,
}) => {
  const handleSubmit = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.company ||
      !formData.jobTitle
    ) {
      alert("Fill all the required values first");
      return;
    }
    setIsSubmitted(true);
  };
  return (
    <>
      <div className="mb-6">
        <p className="text-sm uppercase font-semibold tracking-wide text-[#FFDAD4]">
          Book Equipment
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-primary rig-shaded">
          SONY ID7000 SPECTRAL
        </h1>
        <p className="text-gray-600 text-sm mt-1">
          <span className="flex items-center gap-2">
            <img
              src="/images/locationIcon.svg"
              alt="Location"
              className="w-4 h-4"
            />
            <strong className="text-black font-bold">
              Globodie building, H208
            </strong>
          </span>
          <br />A spectral flow cytometer equipped with 5 lasers allows for
          detection of &gt;40 colors.
        </p>
      </div>

      <form className="space-y-4">
        {[
          { label: "First Name", name: "firstName", required: true },
          { label: "Last Name", name: "lastName", required: true },
          { label: "Company", name: "company", required: true },
          { label: "Job Title", name: "jobTitle", required: true },
        ].map(({ label, name, required }) => (
          <fieldset
            key={name}
            className="border-1 rounded-xl pl-4 font-medium"
            style={{ borderColor: "#FF6000" }}
          >
            <legend className="text-black">
              {label}{" "}
              {required && (
                <Asterisk className="inline-block w-4 h-4 text-primary" />
              )}
            </legend>
            <input
              type="text"
              name={name}
              value={formData[name as keyof typeof formData]}
              onChange={handleChange}
              className="text-md h-full w-full py-4 px-1 focus:outline-none"
              required={required}
            />
          </fieldset>
        ))}

        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Preferred time frame
          </label>
          <div className="flex flex-wrap gap-2">
            {["<5 working days", "<14 working days", "<30 working days"].map(
              (t, i) => {
                const isSelected = formData.selectedTimeframe === t;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, selectedTimeframe: t }))
                    }
                    className={`cursor-pointer text-sm px-3 py-1 rounded-full transition border ${isSelected
                      ? "bg-[#FF6000] text-white border-[#FF6000] hover:bg-[#e65500]"
                      : "bg-white text-black border-orange-500 hover:bg-orange-100"
                      }`}
                  >
                    {t}
                  </button>
                );
              }
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <span className="flex items-center gap-2">
              <img src="/images/note.png" alt="Note Icon" className="w-4 h-4" />
              Any note?
            </span>
          </label>
          <textarea
            name="note"
            value={formData.note}
            onChange={handleChange}
            rows={4}
            className="w-full border rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
            style={{ borderColor: "#FF6000" }}
          ></textarea>
        </div>

        <div className="flex justify-end">
          <Button type="submit" onClick={handleSubmit} className="text-xs">
            Send request
            <Send size={16} />
          </Button>
        </div>
      </form>
    </>
  );
};
const RequestSummary = ({ formData }) => {
  return ( 
    <div className="bg-white rounded-xl w-full max-w-4xl px-4 sm:px-6 py-6 sm:py-8 mx-auto overflow-x-auto">
      {/* Header */}
      <h1
        className="font-extrabold mb-2 uppercase text-3xl text-primary rigshaded" >
        Thank you for your request!
      </h1>

      <p className="text-sm sm:text-base text-black mb-8 font-bold">
        We will get in touch with you soon!
      </p>

      {/* Subheader */}
      <p
        className="text-sm font-bold font-rigshaded uppercase mb-3"
        style={{ color: "#FF6000", fontSize: "20px" }}
      >
        Request Summary
      </p>

      {/* Summary Table */}
      <div className="bg-gray-200 w-full rounded-md overflow-x-auto mb-6">
        <table className="w-full text-sm text-black mt-4 mb-2">
          <tbody>
            {[
              ["Equipment name:", formData.productTitle],
              ["First Name:", formData.firstName],
              ["Last Name:", formData.lastName],
              ["Company:", formData.company],
              ["Phone Number:", formData.phoneNumber || "Not provided"],
              ["Email:", formData.email || "Not provided"],
              ["Preferred time frame:", formData.selectedTimeframe],
              ["Note:", formData.note || "No notes provided"],
            ].map(([label, value], idx) => (
              <tr
                key={idx}
                className={idx !== 7 ? "border-b border-gray-300" : ""}
              >
                <td className="py-[7px] px-3 align-top break-words whitespace-pre-wrap">
                  <span className="font-bold">{label}</span> {value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
