
const EmailStyleSummary = () => {
  return (
    <div className="bg-white text-sm text-black max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10 font-sans">
      {/* Simulated Email Header - WIDER ONLY */}
      <div className="w-[110%] -ml-[5%] px-4 py-3 rounded-t-md flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-gray-800 gap-4 mb-6">
        {/* Left: Profile + Sender Info */}
        <div className="flex gap-4 items-start">
          <img
            src="public/images/profile.png"
            alt="Profile"
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
          />
          <div>
            <p className="font-bold text-lg sm:text-xl md:text-2xl">
              Health & Innovation District (HID)
            </p>
            <p className="font-bold text-lg sm:text-xl md:text-2xl">
              Confirmation of your booking request for &lt;machine name&gt;
            </p>
            <p className="mt-1 text-gray-500 text-sm sm:text-base md:text-xl">
              <strong className="text-black">To:</strong> Kiki Scholts,
            </p>
            <p className="text-sm sm:text-base md:text-xl">
              <strong>Reply-To:</strong>{" "}
              <span className="text-gray-500">Health & Innovation District (HID)</span>
            </p>
          </div>
        </div>

        {/* Right Side: Inbox and Time */}
        <div className="text-xs sm:text-sm text-right text-gray-500 whitespace-nowrap">
          <p>📥 Inbox – kiki-scholts@live.nl</p>
          <p>14:28</p>
        </div>
      </div>

      {/* View in browser */}
      <div className="text-center mb-4">
        <a href="#" className="block text-gray-500 text-sm underline">
          View email in browser
        </a>
      </div>

      {/* Logo */}
      <div className="text-center mb-6">
        <img
          src="public/images/LogoHidLinks.png"
          alt="Logo"
          className="mx-auto w-24 sm:w-28"
        />
      </div>

      {/* Product Image */}
      <div className="rounded-xl overflow-hidden mb-8 shadow-sm">
        <img
          src="public/images/sony.png"
          alt="Sony Equipment"
          className="w-full object-cover"
        />
      </div>

      {/* Intro text */}
      <p className="mb-2 font-medium font-Avenir text-sm sm:text-base">
        Dear {`{First & Last Name}`},
      </p>
      <p className="mb-4 font-medium font-Avenir text-sm sm:text-base">
        Thanks for getting in touch with us! We've received your request and the
        details you provided through our Lab’s TabForm.
        <br />
        Great to see your interest in using one of our available research
        facilities.
      </p>

      <p className="mb-2 font-medium font-Avenir text-sm sm:text-base">
        Here's a quick summary of your request:
      </p>

      {/* Summary Title */}
      <h2 className="text-orange-600 text-xl sm:text-2xl font-bold uppercase mb-2 font-rigshaded">
        Request Summary
      </h2>

      {/* Summary Table */}
      <div className="bg-[#f3f3f3] w-full rounded overflow-hidden mb-6 text-Avenir Next">
        <table className="w-full text-xs sm:text-sm">
          <tbody>
            {[
              ["Equipment name:", "Name booked equipment"],
              ["First Name:", "First name"],
              ["Last Name:", "Last name"],
              ["Company:", "Company name"],
              ["Phone Number:", "Phone number if filled in"],
              ["Email:", "Email address"],
              ["Preferred time frame:", "< working days"],
              ["Note:", "Here the note when filled in"],
            ].map(([label, value], index) => (
              <tr
                key={index}
                className={index !== 7 ? "border-b border-gray-300" : ""}
              >
                <td className="py-[6px] px-3 font-bold align-top">{label}</td>
                <td className="py-[6px] px-3">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Next Steps Section */}
      <h3 className="font-semibold mb-2 text-base sm:text-lg">Next steps:</h3>
      <ol className="list-decimal list-inside mb-6 space-y-1 font-medium font-Avenir text-sm sm:text-base">
        <li>Our facility operator will contact you shortly to:</li>
        <li>
          Confirm whether the booked equipment suits your project,
          <br />
          i.e. sample type, method needs, and timeline.
        </li>
        <li>Go over requirements, usage, planning, and pricing.</li>
        <li>
          You’ll then receive a summary of those arrangements before we get
          started.
        </li>
      </ol>

      <p className="font-medium font-Avenir text-sm sm:text-base">
        If you have urgent questions in the meantime, feel free to reply to this
        email.
      </p>

      {/* Footer */}
      <p className="mt-6 font-medium font-Avenir text-sm sm:text-base">
        Talk soon, <br />
        The HIDI Facilities Team <br />
        Health & Innovation — Research
      </p>
    </div>
  );
};

export default EmailStyleSummary;
