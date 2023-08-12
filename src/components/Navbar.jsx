import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useSignOut } from "../hooks/useSignOut";
import { useModal } from "../context/ModalContext";
import Modal from "./Modal";
import Logo from "./Logo";

import ProfileDropdown from "./ProfileDropdown";

const navigation = [
  { name: "Product", href: "/product", current: true },
  {
    name: "Blogs",
    href: "/blogs",
    current: false,
  },
  { name: "Contact Us", href: "/contact ", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const { logout } = useSignOut();
  const { setIsModalOpen } = useModal();

  return (
    <>
      <Disclosure as="nav" className="border border-b border-primary-black-500">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon
                        className="block h-6 w-6 text-primary-black-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <Bars3Icon
                        className="block h-6 w-6 text-primary-black-500"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <Link to="/">
                      <Logo />
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-primary-black-500 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Disclosure.Button as={Link} to="/cart">
                    {/*<Link to="/cart">*/}
                    <span className="sr-only">Shopping Cart</span>
                    <ShoppingCartIcon
                      className="h-6 w-6 text-primary-black-500"
                      aria-hidden="true"
                    />
                    {/*</Link>*/}
                  </Disclosure.Button>

                  {/* Profile dropdown */}
                  <ProfileDropdown
                    logout={({ active }) => (
                      <button
                        onClick={logout}
                        href="#"
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 ui-active:bg-gray-100"
                      >
                        Sign Out
                      </button>
                    )}
                    deleteAccount={({ active }) => (
                      <button
                        onClick={() => setIsModalOpen(true)}
                        href="#"
                        className="block w-full bg-red-600 px-4 py-2 text-left text-sm text-white ui-active:bg-red-500"
                      >
                        Delete Account
                      </button>
                    )}
                  />
                  {/* End of Profile Dropdown */}
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Modal
        title="Deactivate account"
        description="Are you sure you want to deactivate your account? All of your data will be permanently removed from our servers forever. This action cannot be undone."
      />
    </>
  );
}

export default Navbar;
