export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    const menuItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Certifications", href: "#certifications" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <div
            className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] backdrop-blur-lg z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out 
                ${
                    menuOpen
                        ? "h-screen opacity-100 pointer-events-auto"
                        : "h-0 opacity-0 pointer-events-none"
                }
            `}
        >
            {/* Close button */}
            <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
                aria-label="Close Menu"
            >
                &times;
            </button>

            {/* Menu items with elevated glass effect */}
            {menuItems.map((item, idx) => (
                <a
                    key={idx}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-2xl font-semibold text-white my-4 px-6 py-3 rounded-xl 
                        bg-white/5 backdrop-blur-md border border-white/10 shadow-lg
                        hover:bg-white/10 hover:scale-105 transition-all duration-300
                        ${
                            menuOpen
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-5"
                        }
                    `}
                >
                    {item.name}
                </a>
            ))}
        </div>
    );
};
