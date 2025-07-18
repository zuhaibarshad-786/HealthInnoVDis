import { useState, useEffect, useCallback } from "react";
import Categories from "../components/Categories";  // Import the new Categories component
import ProductCard from "../components/ProductCard";
import allProducts from "../constants/products";
import type { Product, Item } from "../constants/products";
import { Search } from "lucide-react";

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [selectedSublink, setSelectedSublink] = useState<string>("");

    // Filter products function
    const filterProducts = useCallback((query: string, category: string, sublink: string) => {
        let filtered = allProducts;

        if (category === "Meeting Room" && sublink && sublink !== "All") {
            filtered = allProducts.filter((product: Product) => {
                return product.slug === sublink.toLowerCase().replace(/\s+/g, '-') ||
                       product.title.toLowerCase().includes(sublink.toLowerCase());
            });
        }

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

    useEffect(() => {
        const timer = setTimeout(() => {
            filterProducts(searchQuery, selectedCategory, selectedSublink);
        }, 300);

        return () => clearTimeout(timer);
    }, [searchQuery, selectedCategory, selectedSublink, filterProducts]);

    const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value.toLowerCase());
    }, []);

    const handleCategoryClick = useCallback((categoryName: string) => {
        setSelectedCategory(categoryName);
        setSelectedSublink("");
    }, []);

    const handleSublinkClick = useCallback((sublink: string) => {
        setSelectedSublink(sublink);
        setSelectedCategory("Meeting Room");
    }, []);

    return (
        <div className="min-h-screen w-full px-10 md:px-20">
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

            {/* Include Categories Component */}
            <Categories
                selectedCategory={selectedCategory}
                selectedSublink={selectedSublink}
                onCategoryClick={handleCategoryClick}
                onSublinkClick={handleSublinkClick}
            />

            {/* Description */}
            <div className="mt-50 max-w-[800px]">
                <h1 className="text-xl font-bold">HIF-Infra Sanquin Research Facilities</h1>
                <p className="text-base">...</p>
            </div>

            {/* Cell Analysis */}
            {
                filteredProducts.map((product: Product) => (
                    <div className="mt-10" key={product.title}>
                        <h3 className="text-lg font-bold text-primary">{product?.title}</h3>
                        <p className="max-w-[800px] text-primary">{product?.description}</p>

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
