import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

type CategoriesProps = {
  selectedCategory: string;
  selectedSublink: string;
  onCategoryClick: (category: string) => void;
  onSublinkClick: (sublink: string) => void;
};

const categories = [
    { name: "All", sublinks: [] },
    { name: "Office", sublinks: [] },
    { name: "Desk", sublinks: [] },
    {
        name: "Meeting Room",
        sublinks: [
            "All",
            "Cell analysis",
            "Imaging instruments",
            "Cryobiology",
            "Mass spectrometry"
        ]
    },
    { name: "Research Support", sublinks: [] },
    { name: "Event Venue", sublinks: [] },
    { name: "Studio", sublinks: [] }
];

const Categories: React.FC<CategoriesProps> = ({
  selectedCategory,
  selectedSublink,
  onCategoryClick,
  onSublinkClick
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = (categoryName: string) =>
    setActiveDropdown(activeDropdown === categoryName ? null : categoryName);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="relative">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        <span className="font-medium">Categories</span>
      </button>

      {/* Desktop Categories */}
      <ul className="hidden md:flex gap-12 mt-10 ml-3">
        {categories.map((item) => (
          <li key={item.name} className="font-bold hover:text-primary relative whitespace-nowrap">
            <div className="group relative flex items-center gap-1 cursor-pointer">
              <span
                onClick={() => onCategoryClick(item.name)}
                className={selectedCategory === item.name ? "text-primary" : ""}
              >
                {item.name}
              </span>
              {item.sublinks.length > 0 && (
                <ul className="absolute invisible scale-95 opacity-0 top-full left-0 group-hover:visible group-hover:scale-100 group-hover:opacity-100 bg-white rounded-lg py-2 min-w-48 transition-all duration-300 ease-in-out">
                  {item.sublinks.map((sublink) => (
                    <li
                      key={sublink}
                      className={`text-black hover:text-primary transition-colors ${
                        selectedSublink === sublink ? "bg-gray-100" : ""
                      }`}
                      onClick={() => onSublinkClick(sublink)}
                    >
                      {sublink}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* Mobile Categories Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 w-80 max-w-[90vw] ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-bold">Categories</h2>
          <button onClick={closeMobileMenu}>
            <X size={24} className="text-gray-500" />
          </button>
        </div>

        <ul className="flex flex-col">
          {categories.map((item) => (
            <li key={item.name} className="border-b border-gray-100">
              <div
                className="flex items-center justify-between p-4 font-medium hover:bg-gray-50 cursor-pointer"
                onClick={() => item.sublinks.length > 0 ? toggleDropdown(item.name) : closeMobileMenu()}
              >
                <span>{item.name}</span>
                {item.sublinks.length > 0 && (
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`}
                  />
                )}
              </div>
              {item.sublinks.length > 0 && (
                <ul
                  className={`bg-gray-50 overflow-hidden transition-all duration-300 ${activeDropdown === item.name ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  {item.sublinks.map((sublink) => (
                    <li
                      key={sublink}
                      className="px-8 py-3 text-gray-700 hover:text-primary hover:bg-gray-100 cursor-pointer transition-colors"
                      onClick={closeMobileMenu}
                    >
                      {sublink}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
