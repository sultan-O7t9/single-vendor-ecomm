"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { categories } from "@/data/home-data";

const phoneNumber = "+358504386286";

const TopBar = () => (
  <section className="bg-mmb-primary text-white">
    <div className="wrapper px-base py-2 text-sm flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
      <a
        href={`tel:${phoneNumber}`}
        className="flex items-center gap-2 hover:opacity-80 transition"
      >
        <PhoneIcon className="h-4 w-4" />
        <span>{phoneNumber}</span>
      </a>
      <p className="sm:flex gap-6 hidden">
        <span>Get 50% Off on Selected Items</span>
        <span>|</span>
        <span>Shop Now</span>
      </p>
      <div className="flex items-center gap-6">
        <button className="uppercase tracking-wide text-xs hover:opacity-80 transition">
          Eng
        </button>
        <button className="text-sm hover:opacity-80 transition">
          Location
        </button>
      </div>
    </div>
  </section>
);

const DesktopCategoryDropdown = () => (
  <div className="relative group">
    <button className="flex items-center gap-2 font-medium hover:text-mmb-primary transition-colors">
      Category
      <ChevronDownIcon className="h-4 w-4" />
    </button>
    <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-40">
      <ul className="py-2 max-h-80 overflow-y-auto">
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              href={`/products?category=${category.id}`}
              className="block px-4 py-2 hover:bg-gray-100 transition-colors"
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const NavigationLinks = () => (
  <div className="hidden items-center lg:flex gap-4 xl:gap-8">
    <DesktopCategoryDropdown />
    <Link className="font-medium hover:text-mmb-primary transition" href="#">
      What&apos;s New
    </Link>
    <Link className="font-medium hover:text-mmb-primary transition" href="#">
      Delivery
    </Link>
    <div className="relative">
      <input
        type="text"
        placeholder="Search products..."
        className="w-64 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-mmb-primary"
      />
      <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
        <SearchIcon className="h-5 w-5" />
      </button>
    </div>
  </div>
);

const MobileMenu = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const menuClass = open ? "translate-x-0" : "translate-x-full";

  return (
    <div
      className={`fixed inset-0 z-40 lg:hidden ${
        open ? "" : "pointer-events-none"
      }`}
    >
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      <aside
        className={`absolute top-0 right-0 w-[300px] h-full bg-white shadow-xl transform transition-transform duration-300 ${menuClass}`}
      >
        <div className="p-4 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={onClose}
            >
              <Brandmark />
            </Link>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-mmb-primary"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <SearchIcon className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-4 overflow-y-auto">
            <Link
              href="/cart"
              onClick={onClose}
              className="font-medium flex items-center gap-2"
            >
              <CartIcon className="h-5 w-5" /> Cart
            </Link>
            <Link href="#" onClick={onClose} className="font-medium">
              What&apos;s New
            </Link>
            <Link href="#" onClick={onClose} className="font-medium">
              Delivery
            </Link>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-sm font-semibold text-gray-500 mb-3">
                Categories
              </p>
              <div className="flex flex-col gap-2 text-sm">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/products?category=${category.id}`}
                    onClick={onClose}
                    className="px-2 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export const Header = () => {
  const [open, setOpen] = useState(false);
  const categoriesPreview = useMemo(() => categories.slice(0, 6), []);

  return (
    <header className="shadow-sm">
      <TopBar />
      <section className="bg-white">
        <div className="wrapper px-base py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Brandmark />
          </Link>
          <NavigationLinks />
          <div className="flex items-center gap-4 xl:gap-8">
            <Link
              href="/cart"
              className="font-medium flex items-center gap-2 hover:text-mmb-primary transition"
            >
              <CartIcon className="h-5 w-5" /> Cart
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden h-10 w-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition"
              aria-label="Open menu"
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
      <section className="lg:hidden bg-white border-t border-gray-100">
        <div className="wrapper px-base py-3 flex gap-3 overflow-x-auto no-scrollbar">
          {categoriesPreview.map((category) => (
            <span
              key={category.id}
              className="px-4 py-2 rounded-full border border-gray-200 text-sm whitespace-nowrap"
            >
              {category.name}
            </span>
          ))}
        </div>
      </section>
    </header>
  );
};

const Brandmark = () => (
  <div className="flex items-center gap-2">
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hidden sm:block"
    >
      <circle cx="22" cy="22" r="22" fill="#003D29" />
      <path
        d="M22 33c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4Zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z"
        fill="white"
      />
      <path d="M14.5 19h15l1.5-3H13z" fill="#FF7006" />
      <path
        d="M23 19V9c0-2.21 1.79-4 4-4v10c0 2.21-1.79 4-4 4Z"
        fill="#08AC0A"
      />
      <path
        d="M17 14h2c3.31 0 6 2.69 6 6v2h-2c-3.31 0-6-2.69-6-6v-2Z"
        fill="#08AC0A"
      />
    </svg>
    <span className="text-xl font-bold text-mmb-primary">Shopcart</span>
  </div>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 12.36 12.36 0 003.87.62 1 1 0 011 1V21a1 1 0 01-1 1A16 16 0 014 6a1 1 0 011-1h3.44a1 1 0 011 1 12.36 12.36 0 00.62 3.87 1 1 0 01-.24 1.01l-2.2 2.2z" />
  </svg>
);

const SearchIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M12.9 14.32a8 8 0 111.414-1.414l4.386 4.387-1.414 1.414-4.386-4.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
      clipRule="evenodd"
    />
  </svg>
);

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const CartIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 001.99-1.7L23 6H6" />
  </svg>
);

const MenuIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
