/**
 * Components
 */
import { useState } from "react";
import { IconButton } from "./Button";
/**
 * Icons
 */
import { Menu } from "lucide-react";

const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  window.addEventListener('scroll', () => (setIsScrolling(scrollY > 50)))
  return (
    <header className={`header ${isScrolling ? 'active' : ''}`}>
      <div className="container flex items-center justify-between gap-4 h-full">
        <h1 className="text-3xl font-playfair font-medium text-white whitespace-nowrap">
          Bar Roma
        </h1>
        <div className="flex items-center gap-4">
          <div className="bg-white px-2 py-1 rounded-md flex items-center gap-2 shadow">
            <span className="block size-2 rounded-full bg-red-600"></span>
            <span className="text-xs font-medium text-red-600 whitespace-nowrap">
              {" "}
              ILLY PARTNER
            </span>
          </div>
          <IconButton variant="outline" aria-label="munù">
            <Menu className="text-white" aria-hidden="true" />
          </IconButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
