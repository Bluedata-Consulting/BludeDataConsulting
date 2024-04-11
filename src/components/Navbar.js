import React, { useState, useRef } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../src/assets/logo40.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExpertiseOpen, setIsExpertiseOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isInsightOpen, setIsInsightOpen] = useState(false);

  const toggleMenu = () => {
    closeDropdowns();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownHover = (dropdownType) => {
    closeDropdowns(); // Close other dropdowns
    switch (dropdownType) {
      case "expertise":
        setIsExpertiseOpen(true);
        break;
      case "industries":
        setIsIndustriesOpen(true);
        break;
      case "insight":
        setIsInsightOpen(true);
        break;
      default:
        break;
    }
  };

  const handleDropdownLeave = (dropdownContainerRef, setDropdownOpen) => {
    const dropdownContainer = dropdownContainerRef.current;

    if (dropdownContainer) {
      // Delay closing the dropdown to check if the pointer is still inside
      setTimeout(() => {
        const isPointerInside =
          dropdownContainer.matches(":hover") ||
          Array.from(dropdownContainer.querySelectorAll(":hover")).some(
            (el) => el === dropdownContainer
          );

        if (!isPointerInside) {
          setDropdownOpen(false);
        }
      }, 100); // Adjust the delay as needed
    } else {
      setDropdownOpen(false);
    }
  };

  const toggleExpertiseDropdown = () => {
    setIsExpertiseOpen(!isExpertiseOpen);
    closeOtherDropdowns("expertise");
  };

  const toggleIndustriesDropdown = () => {
    setIsIndustriesOpen(!isIndustriesOpen);
    closeOtherDropdowns("industries");
  };

  const toggleInsightDropdown = () => {
    setIsInsightOpen(!isInsightOpen);
    closeOtherDropdowns("insight");
  };

  const closeDropdowns = () => {
    setIsMenuOpen(false);
    setIsExpertiseOpen(false);
    setIsIndustriesOpen(false);
    setIsInsightOpen(false);
  };

  const closeOtherDropdowns = (currentDropdown) => {
    if (currentDropdown !== "expertise") setIsExpertiseOpen(false);
    if (currentDropdown !== "industries") setIsIndustriesOpen(false);
    if (currentDropdown !== "insight") setIsInsightOpen(false);
  };

  // UseRef for the dropdown containers
  const expertiseDropdownContainerRef = useRef();
  const industriesDropdownContainerRef = useRef();
  const insightDropdownContainerRef = useRef();
  return (
    <div className="relative top-0 z-50">
      <header className="absolute w-full bg-blue-shade-5 pl-4 pr-24">
        <div className="mx-auto flex max-w-7xl items-center lg:justify-between">
          {/* Logo and brand name */}
          <Link
            to="/"
            className="inline-flex items-center space-x-2"
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            <span className="scale-100">
              <img src={logo} alt="" className="scale-50" />
            </span>
            <span className="hidden md:inline-block font-bold text-blue-shade-2 hover:text-blue-shade-3">
              BLUE DATA CONSULTING
            </span>
          </Link>

          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8">
              <li>
                <Link
                  to="/"
                  className="text-md font-semibold text-md text-blue-shade-2 hover:text-blue-shade-3"
                  onClick={() => {
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  Home
                </Link>
              </li>

              <li
                onMouseEnter={() => handleDropdownHover("expertise")}
                onMouseLeave={() =>
                  handleDropdownLeave(
                    expertiseDropdownContainerRef,
                    setIsExpertiseOpen
                  )
                }
                ref={expertiseDropdownContainerRef}
                className="relative"
              >
                <div className="text-md cursor-pointer font-semibold text-md text-blue-shade-2 hover:text-blue-shade-3 flex items-center">
                  Services
                  {isExpertiseOpen ? (
                    <ChevronUp className="ml-2" />
                  ) : (
                    <ChevronDown className="ml-2" />
                  )}
                </div>
                {isExpertiseOpen && (
                  <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-blue-shade-5">
                    <Link
                      to="/techconsulting"
                      className="block px-4 py-2 font-semibold text-md text-blue-shade-2 hover:text-blue-shade-3"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                        handleDropdownLeave(
                          expertiseDropdownContainerRef,
                          setIsExpertiseOpen
                        );
                      }}
                    >
                      Technology Consulting
                    </Link>
                    <Link
                      to="/analytics"
                      className="block px-4 py-2 font-semibold text-md text-blue-shade-2 hover:text-blue-shade-3"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                        handleDropdownLeave(
                          expertiseDropdownContainerRef,
                          setIsExpertiseOpen
                        );
                      }}
                    >
                      Analytics & AI Solution
                    </Link>
                    <Link
                      to="/scaling"
                      className="block px-4 py-2 font-semibold text-md text-blue-shade-2 hover:text-blue-shade-3"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                        handleDropdownLeave(
                          expertiseDropdownContainerRef,
                          setIsExpertiseOpen
                        );
                      }}
                    >
                      Scaling Teams
                    </Link>
                  </div>
                )}
              </li>

              <li
                onMouseEnter={() => handleDropdownHover("insight")}
                onMouseLeave={() =>
                  handleDropdownLeave(
                    insightDropdownContainerRef,
                    setIsInsightOpen
                  )
                }
                ref={insightDropdownContainerRef}
                className="relative"
              >
                <div className="text-md cursor-pointer font-semibold text-md text-blue-shade-2 hover:text-blue-shade-3 flex items-center">
                  Insights
                  {isInsightOpen ? (
                    <ChevronUp className="ml-2" />
                  ) : (
                    <ChevronDown className="ml-2" />
                  )}
                </div>
                {isInsightOpen && (
                  <div className="absolute z-10 mt-2 w-40 rounded-md shadow-lg bg-blue-shade-5">
                    <Link
                      to="/about"
                      className="block px-4 py-2 font-semibold text-md text-blue-shade-2 hover:text-blue-shade-3"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                        handleDropdownLeave(
                          insightDropdownContainerRef,
                          setIsInsightOpen
                        );
                      }}
                    >
                      About
                    </Link>

                    <Link
                      to="/career"
                      className="block px-4 py-2 font-semibold text-md text-blue-shade-2 hover:text-blue-shade-3"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                        handleDropdownLeave(
                          insightDropdownContainerRef,
                          setIsInsightOpen
                        );
                      }}
                    >
                      Career
                    </Link>

                    <Link
                      to="/team"
                      className="block px-4 py-2 font-semibold text-md text-blue-shade-2 hover:text-blue-shade-3"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                        handleDropdownLeave(
                          insightDropdownContainerRef,
                          setIsInsightOpen
                        );
                      }}
                    >
                      Team
                    </Link>
                    <Link
                      to="/contact"
                      className="block px-4 py-2 font-semibold text-md text-blue-shade-2 hover:text-blue-shade-3"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                        handleDropdownLeave(
                          insightDropdownContainerRef,
                          setIsInsightOpen
                        );
                      }}
                    >
                      Contact
                    </Link>
                  </div>
                )}
              </li>
            </ul>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="lg:hidden ml-auto">
            <Menu
              onClick={toggleMenu}
              className="h-6 w-6 cursor-pointer text-blue-shade-2 hover:text-blue-shade-3"
            />
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden bg-blue-shade-2 shadow-lg ring-1 ring-blue-shade-3 ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between pb-2">
                  <span className="font-bold text-xl text-white hover:text-blue-shade-5">
                    BDC
                  </span>
                  <div className="-mr-2">
                    <button
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-blue-shade-5 hover:text-gray-500"
                    >
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <nav className="grid gap-y-4">
                  <Link
                    to="/"
                    className="text-lg font-medium text-white hover:text-blue-shade-5"
                    onClick={() => {
                      window.scroll({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                      closeDropdowns();
                    }}
                  >
                    Home
                  </Link>
                  {/* Expertise Dropdown in Mobile */}
                  <div>
                    <div
                      onClick={() => {
                        toggleExpertiseDropdown();
                      }}
                      className="flex justify-between items-center w-full text-lg font-medium text-white hover:text-blue-shade-5"
                    >
                      Services
                      {isExpertiseOpen ? <ChevronUp /> : <ChevronDown />}
                    </div>
                    {isExpertiseOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        <Link
                          to="/techconsulting"
                          className="block text-lg text-white hover:text-blue-shade-5"
                          onClick={() => {
                            window.scroll({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            });
                            closeDropdowns();
                          }}
                        >
                          Technology Consulting
                        </Link>
                        <Link
                          to="/analytics"
                          className="block text-lg text-white hover:text-blue-shade-5"
                          onClick={() => {
                            window.scroll({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            });
                            closeDropdowns();
                          }}
                        >
                          Analytics & AI Solution
                        </Link>
                        <Link
                          to="/scaling"
                          className="block text-lg text-white hover:text-blue-shade-5 "
                          onClick={() => {
                            window.scroll({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            });
                            closeDropdowns();
                          }}
                        >
                          Scaling Teams
                        </Link>
                        {/* Add more dropdown items as needed */}
                      </div>
                    )}
                  </div>
                  {/* Insight Dropdown in Mobile */}
                  <div>
                    <div
                      onClick={() => {
                        toggleInsightDropdown();
                      }}
                      className="flex justify-between items-center w-full text-lg font-medium text-white hover:text-blue-shade-5"
                    >
                      Insights
                      {isInsightOpen ? <ChevronUp /> : <ChevronDown />}
                    </div>
                    {isInsightOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        <Link
                          to="/about"
                          className="block text-lg text-white hover:text-blue-shade-5"
                          onClick={() => {
                            window.scroll({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            });
                            closeDropdowns();
                          }}
                        >
                          About
                        </Link>
                        <Link
                          to="/contact"
                          className="block text-lg text-white hover:text-blue-shade-5"
                          onClick={() => {
                            window.scroll({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            });
                            closeDropdowns();
                          }}
                        >
                          Contact
                        </Link>
                        <Link
                          to="/team"
                          className="block text-lg text-white hover:text-blue-shade-5"
                          onClick={() => {
                            window.scroll({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            });
                            closeDropdowns();
                          }}
                        >
                          Team
                        </Link>
                        {/* Add more dropdown items as needed */}
                      </div>
                    )}
                  </div>
                  {/* ... (existing code) */}
                </nav>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
