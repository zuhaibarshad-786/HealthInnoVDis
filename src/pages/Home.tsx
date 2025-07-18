import { Search } from "lucide-react"
import ProductCard from "../components/ProductCard";
import allProducts from "../constants/products"
import type { Product, Item } from "../constants/products";
import { useState, useEffect, useCallback } from "react";

const categories = [
    {
        name: "All",
        sublinks: []
    },
    {
        name: "Office",
        sublinks: []
    },
    {
        name: "Desk",
        sublinks: []
    },
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
    {
        name: "Research Support",
        sublinks: []
    },
    {
        name: "Event Venue",
        sublinks: []
    },
    {
        name: "Studio",
        sublinks: []
    }
];

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [selectedSublink, setSelectedSublink] = useState<string>("");

    // Filter products function
    const filterProducts = useCallback((query: string, category: string, sublink: string) => {
        let filtered = allProducts;

        // Filter by category and sublink
        if (category === "Meeting Room" && sublink && sublink !== "All") {
            filtered = allProducts.filter((product: Product) => {
                return product.slug === sublink.toLowerCase().replace(/\s+/g, '-') ||
                       product.title.toLowerCase().includes(sublink.toLowerCase());
            });
        }

        // Filter by search query
        if (query) {
            filtered = filtered.map((product: Product) => {
                const filteredItems = product.items.filter((item: Item) =>
                    item.title.toLowerCase().includes(query)
                );
                return { ...product, items: filteredItems };
            }).filter(product => product.items.length > 0);
        }

        setFilteredProducts(filtered);
    }, []);

    // Debounce the search query and trigger filtering
    useEffect(() => {
        const timer = setTimeout(() => {
            filterProducts(searchQuery, selectedCategory, selectedSublink);
        }, 300); // 300ms delay

        return () => clearTimeout(timer);
    }, [searchQuery, selectedCategory, selectedSublink, filterProducts]);

    // Handle search input
    const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value.toLowerCase());
    }, []);

    // Handle category selection
    const handleCategoryClick = useCallback((categoryName: string) => {
        setSelectedCategory(categoryName);
        setSelectedSublink(""); 
    }, []);

    // Handle sublink selection
    const handleSublinkClick = useCallback((sublink: string) => {
        setSelectedSublink(sublink);
        setSelectedCategory("Meeting Room"); 
    }, []);

    return (
        <div className="min-h-screen w-full px-10 md:px-20 ">
            {/* Search Bar */}
            <div className="relative mx-auto mt-10">
                <Search className="text-gray-400 absolute top-1/2 left-4 transform -translate-y-1/2" />
                <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search"
                    className="w-full bg-gray-200 py-4 pl-20 pr-10 rounded-full focus:outline-primary"
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>

            {/* Categories */}
           
             <ul className="flex flex-wrap md:gap-12 gap-x-6 gap-y-1 mt-10 ml-3">
                {categories.map(item => (
                    <li key={item.name} className="group font-bold hover:text-primary relative">
                        <span 
                            className="cursor-pointer block pb-2"
                            onClick={() => handleCategoryClick(item.name)}
                        >
                            {item.name}
                        </span>
                        {item.sublinks.length > 0 && (
                            <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-2 top-full left-0 z-50 min-w-[150px] border
                                           sm:left-0 max-sm:right-0 max-sm:left-auto">
                                {item.sublinks.map(sublink => (
                                    <li 
                                        className={`text-black hover:text-primary cursor-pointer px-2 py-0 rounded transition-colors duration-200 ${selectedSublink === sublink ? 'bg-gray-100' : ''}`}
                                        key={sublink}
                                        onClick={() => handleSublinkClick(sublink)}
                                    >
                                        {sublink}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>

            {/* Description */}
            <div className="mt-50 max-w-[800px]">
                 <h1 className="text-xl font-bold">HIF-Infra Sanquin Research Facilities</h1>

                <p className="text-base">
                    State-of-the-art research facilities are catalysts for innovation. The Sanquin Research Facility supports the blood research landscape with four pillars of expertise: Cell analysis, Mass Spectrometry, Cryobiology, and Bioinformatics. These well-equipped and highly interconnected units are continuously evolving to incorporate and support an ever-increasing set of advanced techniques and skills.
                </p>
                <br />
                <div className="text-base">
                    As part of the broader HID infrastructure, these facilities form a crucial link in a growing ecosystem where knowledge, equipment, and services come together to accelerate health innovation. Collaboration and shared use are key to unlocking the full potential of this collective infrastructure.
                </div>
            </div>

            {/* Cell Analysis */}
            {
                filteredProducts.map((product: Product) => (
                    <div className="mt-10" key={product.title}>
                        <h3 className="text-lg font-bold text-primary" style={{ color: product?.color }}>{product?.title}</h3>
                        <p className="max-w-[800px] text-primary" style={{ color: product?.color }}>{product?.description}</p>

                        <div className="mt-10 flex flex-wrap gap-10">
                            {
                                product?.items.map((item: Item) => (
                                    <ProductCard key={item.id} id={item.id} title={item.title} description={item.description} color={product?.color} image={item.image} category={product.slug} />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default Home;