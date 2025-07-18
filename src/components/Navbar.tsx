"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import Button from "./Button"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

    const menuItems = [
        { name: "HOME", href: "/", hasDropdown: false },
        {
            name: "ABOUT",
            href: "/about",
            hasDropdown: true,
            dropdownItems: [
                { name: "Our Story", href: "/about/story" },
                { name: "Team", href: "/about/team" },
                { name: "Mission & Vision", href: "/about/mission" },
                { name: "Partners", href: "/about/partners" },
            ],
        },
        {
            name: "JOIN US",
            href: "/join",
            hasDropdown: true,
            dropdownItems: [
                { name: "Membership", href: "/join/membership" },
                { name: "Partnerships", href: "/join/partnerships" },
                { name: "Volunteer", href: "/join/volunteer" },
                { name: "Careers", href: "/join/careers" },
            ],
        },
        { name: "EVENTS", href: "/events", hasDropdown: false },
        {
            name: "COMMUNITY",
            href: "/community",
            hasDropdown: true,
            dropdownItems: [
                { name: "Network", href: "/community/network" },
                { name: "Forums", href: "/community/forums" },
                { name: "Resources", href: "/community/resources" },
                { name: "News", href: "/community/news" },
            ],
        },
        { name: "CONTACT US", href: "/contact", hasDropdown: false },
    ]

    const toggleDropdown = (itemName: string) => {
        setActiveDropdown(activeDropdown === itemName ? null : itemName)
    }

    const closeDropdown = () => {
        setActiveDropdown(null)
    }

    return (
        <nav className="bg-white shadow-sm border-b border-gray-100">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <div className="flex items-center space-x-3">
                            {/* Logo Pattern */}
                            <div className="relative w-20 h-20">
                                <img src="/logo.png" alt="Logo" className="w-full h-full" />
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {menuItems.map((item) => (
                                <div key={item.name} className="relative">
                                    {item.hasDropdown ? (
                                        <div className="relative">
                                            <button
                                                onClick={() => toggleDropdown(item.name)}
                                                className={`flex items-center space-x-1 px-3 py-2 text-sm font-bold transition-colors duration-200 text-gray-900 hover:text-teal-500`}
                                            >
                                                <span>{item.name}</span>
                                                <ChevronDown
                                                    size={16}
                                                    className={`transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180" : ""
                                                        }`}
                                                />
                                            </button>

                                            {/* Dropdown Menu */}
                                            {activeDropdown === item.name && (
                                                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                                                    {item.dropdownItems?.map((dropdownItem) => (
                                                        <Link
                                                            key={dropdownItem.name}
                                                            to={dropdownItem.href}
                                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-500 transition-colors duration-200"
                                                            onClick={closeDropdown}
                                                        >
                                                            {dropdownItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <Link
                                            to={item.href}
                                            className="px-3 py-2 text-sm font-bold transition-colors duration-200 text-gray-900 hover:text-teal-500"
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <Button className="text-sm md:block hidden">
                        Book Now
                    </Button>
                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
                            {menuItems.map((item) => (
                                <div key={item.name}>
                                    {item.hasDropdown ? (
                                        <div>
                                            <button
                                                onClick={() => toggleDropdown(item.name)}
                                                className="flex items-center justify-between w-full px-3 py-2 text-base font-medium transition-colors duration-200 text-gray-900 hover:text-teal-500"
                                            >
                                                <span>{item.name}</span>
                                                <ChevronDown
                                                    size={16}
                                                    className={`transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180" : ""
                                                        }`}
                                                />
                                            </button>

                                            {/* Mobile Dropdown */}
                                            {activeDropdown === item.name && (
                                                <div className="pl-6 space-y-1">
                                                    {item.dropdownItems?.map((dropdownItem) => (
                                                        <a
                                                            key={dropdownItem.name}
                                                            href={dropdownItem.href}
                                                            className="block px-3 py-2 text-sm text-gray-600 hover:text-teal-500 transition-colors duration-200"
                                                            onClick={() => {
                                                                closeDropdown()
                                                                setIsMobileMenuOpen(false)
                                                            }}
                                                        >
                                                            {dropdownItem.name}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <a
                                            href={item.href}
                                            className="block px-3 py-2 text-base font-medium transition-colors duration-200 text-gray-900 hover:text-teal-500"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Overlay for closing dropdown when clicking outside */}
            {/* {activeDropdown && <div className="fixed inset-0 z-40" onClick={closeDropdown} />} */}
        </nav >
    )
}

export default Navbar
