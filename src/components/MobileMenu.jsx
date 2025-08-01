import React, { useState, useEffect } from "react";
import { X, Plus, Minus, ChevronRight } from "lucide-react";
import { FeaturedMenu, OtherMenus } from "@/api/mobileMenuAPI";
import { Link, useLocation } from "react-router";
import clsx from 'clsx';

const MobileMenu = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  // Find first 'category' type index
  const firstCategoryIndex = OtherMenus.findIndex(item => item.type === "category");
  const [expanded, setExpanded] = useState(firstCategoryIndex);

  const [showSubSheet, setShowSubSheet] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [sheetVisible, setSheetVisible] = useState(false); // for animation

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  // Reset when route changes
  useEffect(() => {
    setExpanded(firstCategoryIndex);
    setShowSubSheet(false);
    setSheetVisible(false);
  }, [location.pathname]);

  const filterCategory = async (filterCategoryValue) => {
    setSelectedFilter(filterCategoryValue);
    setShowSubSheet(true);
    setTimeout(() => setSheetVisible(true), 50); // start slide-in animation

    // Simulate data load
    const mockData = [
      { name: "Product A" },
      { name: "Product B" },
      { name: "Product C" },
    ];
    setFilteredData(mockData);
    console.log(selectedFilter);
  };

  const closeSubSheet = () => {
    setSheetVisible(false);
    setTimeout(() => setShowSubSheet(false), 300); // match animation duration
  };

  const renderCategory = (item, index) => {
    const hasSubCat = item.subCat?.length > 0;
    const isRedirectOnly = item.redirect === "yes";
    const isExpanded = expanded === index;

    return (
      <div key={`cat-${index}`} className="menu-container">
        <button
          onClick={() =>
            hasSubCat ? setExpanded(isExpanded ? null : index) : filterCategory(item.filter_category)
          }
          className="flex justify-between items-center w-full text-left py-4 px-4"
        >
          <span className="text-sm">{item.category}</span>
          {hasSubCat ? (
            isExpanded ? <Minus size={18} /> : <Plus size={18} />
          ) : (
            <ChevronRight size={18} />
          )}
        </button>

       {hasSubCat && <div
          className={`transition-all duration-300 overflow-hidden ${
            isExpanded ? "max-h-[750px]" : "max-h-0"
          }`}
        >
          <div className={clsx({
            'grid grid-cols-2 gap-4 bg-muted px-4 py-2': isRedirectOnly,
            'py-2 space-y-2 px-4 bg-muted': !isRedirectOnly,
          })}>
            {hasSubCat &&
              item.subCat.map((sub, i) =>
                isRedirectOnly ? (
                  <Link
                    key={`subcat-${i}`}
                    to={sub.url || "#"}
                    onClick={toggleSidebar}
                    className="flex justify-between items-center text-sm text-gray-700 hover:text-blue-600"
                  >
                    <div className="flex justify-start items-center my-2">
                      <div className="w-15 h-15 rounded-lg overflow-hidden">
                        <img src={sub.image} alt={ sub.title} className="w-[100%] h-[100%] object-contain aspect-square" />
                      </div>
                      <span className="text-xs ml-4">{sub.title}</span>
                    </div>
                  </Link>
                ) : (
                  <div
                    key={`subcat-${i}`}
                    onClick={() => filterCategory(sub.filter_category)}
                    className="flex justify-between items-center text-sm text-gray-700 hover:text-black cursor-pointer"
                  >
                    <div className="flex justify-start items-center my-2">
                      <div className="w-15 h-15 rounded-lg overflow-hidden">
                        <img src={sub.image} alt={ sub.title} className="w-[100%] h-[100%] object-contain aspect-square" />
                      </div>
                      <span className="text-xs ml-4">{sub.title}</span>
                    </div>
                    <ChevronRight size={18} />
                  </div>
                )
              )}
          </div>
        </div> }
      </div>
    );
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* === Mobile Menu Drawer === */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b-2">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={toggleSidebar}>
            <X />
          </button>
        </div>

        <div className="overflow-y-auto h-full pb-20">
          {/* === Featured Section === */}
          <div className="mt-4">
            <h2 className="font-body text-sm px-4 mb-4 uppercase text-primary font-semibold">Featured</h2>
            <div className="w-full x-scroll-container hide-scrollbar">
              <div className="x-scroll-wrapper">
                {FeaturedMenu.items.map((feature, i) => (
                  <Link
                    key={`featured-${i}`}
                    to={feature.url}
                    className="block w-[112px] text-center shrink-0"
                  >
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-[112px] object-cover rounded-lg"
                    />
                    <span className="text-xs text-gray-700 my-2 inline-block">
                      {feature.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* === Category Section === */}
          <h2 className="font-body text-sm px-4 my-4 uppercase text-primary font-semibold">Shop For</h2>
          {OtherMenus.map((item, index) => {
            if (item.type === "category") return renderCategory(item, index);
            if (item.type === "banner") {
              return (
                <div key={`banner-${index}`} className="py-4 px-4">
                  <Link to={item.offer_url} onClick={toggleSidebar}>
                    <img
                      src={item.image}
                      alt="Banner"
                      className="w-full rounded shadow"
                    />
                  </Link>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>

      {/* === Sub Category Sheet === */}
      {showSubSheet && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={closeSubSheet}
          />
          <div
            className={`fixed top-0 left-0 w-full h-full bg-white z-50 p-4 transform transition-transform duration-300 ease-in-out ${
              sheetVisible ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h2 className="text-lg font-bold capitalize">
                {selectedFilter?.replace(/_/g, " ")}
              </h2>
              <button onClick={closeSubSheet}>
                <X />
              </button>
            </div>

            {filteredData.length > 0 ? (
              <ul className="space-y-4">
                {filteredData.map((item, i) => (
                  <li key={i} className="text-sm border-b pb-2">
                    {item.name}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">
                Loading or no data found.
              </p>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default MobileMenu;
