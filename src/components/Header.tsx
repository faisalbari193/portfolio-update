import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const downloadCv = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1vGet95J-fgudAXex2JZL-lMN2Sk349OJ";
    link.download = "Md_Arshadul_Bari_CV.pdf"; // File name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-custom-primary flex items-center">
          <img
            src="https://img.icons8.com/?size=100&id=SjQijVCnYHRh&format=png&color=000000"
            alt="Logo"
            className="h-10 w-10"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {["about", "skills", "education", "projects", "contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-custom-primary transition-colors duration-200 capitalize font-medium"
              >
                {item}
              </button>
            )
          )}
          <button
            onClick={downloadCv}
            className="btn btn-primary btn-sm text-white flex items-center gap-2"
          >
            <Download size={16} />
            Download CV
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 absolute right-4 top-16 w-48">
            {["about", "skills", "education", "projects", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 text-gray-700 hover:text-custom-primary transition-colors duration-200 capitalize"
                >
                  {item}
                </button>
              )
            )}
            <button
              onClick={() => {
                downloadCv();
                setIsMenuOpen(false);
              }}
              className="btn btn-primary btn-sm text-white mt-2 flex items-center gap-2 w-full"
            >
              <Download size={16} />
              Download CV
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
