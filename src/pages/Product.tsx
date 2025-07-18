import { useState } from "react";
import Booking from "../components/Booking";
import Button from "../components/Button";
import { findProductAndItem } from "../constants/products";
import { useParams } from "react-router-dom";

const Product = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { category, id } = useParams();

  const product = findProductAndItem(category, id);

  return (
    <>
      <div className="bg-white min-h-screen w-full font-sans text-gray-800 ">
        {/* Top Image Section */}

        <div className="w-full flex justify-center items-center py-8">
          <div className="w-full rounded-xl overflow-hidden">
            <img
              src={product.image}
              alt={product.image + " Image"}
              className="w-full max-h-[580px]"
            />
          </div>
        </div>
        <div className="container mx-auto px-4">

          {/* Product Title and Location */}
          <div className="py-6  mx-auto">
            <h1
              className="text-2xl md:text-3xl font-Rig Shaded font-bold"
              style={{ color: "#FF6000" }}
            >
              {product.title}
            </h1>
            <p className="text-black mt-1 font-Avenir Next font-bold size-13px">
              <img src="public/images/locationIcon.svg" alt="" />
              Globodie building, H208
            </p>
            <p className="mt-2 text-md text-#000000 font-Avenir Next">
              {product.description}
            </p>
          </div>

          {/* Equipment Support Process Section */}
          <div className="py-6 mx-auto">
            <h2
              className="text-base font-bold mb-6 uppercase font-Rig Shaded"
              style={{ color: "#FF6000" }}
            >
              Equipment Support Process
            </h2>

            <div className=" grid gap-6 md:grid-cols-2 lg:grid-cols-4 font-Avenir text-black">
              {
                [
                  {
                    id: 1,
                    title: "Use available equipment with expert support",
                    description: "Researchers can use a wide range of advanced equipment tailored to their project needs. We provide clear specifications, capabilities, and availability – always combined with expert support to help you get the most out of the technology.",
                    icon: "step1.png",
                  },
                  {
                    id: 2,
                    title: "Align with facility operator",
                    description: "The researcher contacts the facility operator to confirm the suitability of the selected equipment. Together, they review technical requirements and discuss any specific needs.",
                    icon: "step2.png",
                  },
                  {
                    id: 3,
                    title: "Set agreements and planning",
                    description: "Both parties agree on terms of use, scheduling, responsibilities, and pricing. These arrangements are documented in a clear agreement to ensure mutual understanding and commitment.",
                    icon: "step3.png",
                  },
                  {
                    id: 4,
                    title: "Send materials and conduct experiments",
                    description: "The researcher sends required samples or materials to the facility. The agreed experiments are carried out by the facility team or under joint supervision, depending on the setup.",
                    icon: "step4.png",
                  }
                ].map((item, i) => (
                  <div
                    className="p-4 rounded-lg"
                    style={{ color: "#FF6000" }}
                  >
                    <img src={`/images/${item.icon}`} alt="Calendar icon" className="w-20 h-20" />

                    <h3 className="font-bold text-base mt-8">STEP {i + 1}</h3>
                    <div className="text-sm text-black">
                      <p className="font-bold">{item.title}</p>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

          {/* Footer Section */}
          <div className="flex items-center justify-between max-w-xl md:px-10 sm:px-4 px-2 py-2 rounded-full bg-[#F5F5F5]">
            <p className="text-base sm:text-md font-bold text-black font-['Avenir Next']">
              Price upon request
            </p>
            <Button
              onClick={() => setOpenModal(true)}
              className="text-xs py-2 md:px-12 sm:px-6 px-0 bg-[#FF6000] hover:bg-[#FFDAD4]"
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
      <Booking openModal={openModal} setOpenModal={setOpenModal} productTitle={product.title} />
    </>
  );
};

export default Product;
