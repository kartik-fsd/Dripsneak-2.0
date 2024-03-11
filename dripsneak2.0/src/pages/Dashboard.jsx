import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Cart from "./dashboard-Pages/Cart";
import SideCategory from "../Components/Sidebar";

const user = {
  name: "Tom Cook",
  email: "tom@Dashboard.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "/", current: true },
  //   { name: "Team", href: "#", current: false },
  //   { name: "Projects", href: "#", current: false },
  //   { name: "Calendar", href: "#", current: false },
  //   { name: "Reports", href: "#", current: false },
];
const userNavigation = [
  { name: "Cart", href: "#" },
  { name: "Liked Items", href: "#" },
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  const [openCart, setOpen] = useState(false);
  return (
    <>
      {/*
        This Dashboard requires updating your template:

        ```
        <html class="h-full bg-rhino-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-rhino-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={classNames(
                              item.current
                                ? "bg-rhino-900 text-scorpion-200"
                                : "text-rhino-300 hover:bg-rhino-700 hover:text-scorpion-50",
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
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center space-x-5 md:ml-6">
                      <button
                        type="button"
                        onClick={() => setOpen((prev) => !prev)}
                        className="relative rounded-full bg-rhino-800 p-1 text-rhino-400 hover:text-scorpion-50 focus:outline-none focus:ring-2 focus:ring-scorpion-50 focus:ring-offset-2 focus:ring-offset-rhino-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View shopping cart</span>
                        <ShoppingCartIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </button>

                      <button
                        type="button"
                        className="relative rounded-full bg-rhino-800 p-1 text-rhino-400 hover:text-scorpion-50 focus:outline-none focus:ring-2 focus:ring-scorpion-50 focus:ring-offset-2 focus:ring-offset-rhino-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View Liked items</span>
                        <HeartIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      <button
                        type="button"
                        className="relative rounded-full bg-rhino-800 p-1 text-rhino-400 hover:text-scorpion-50 focus:outline-none focus:ring-2 focus:ring-scorpion-50 focus:ring-offset-2 focus:ring-offset-rhino-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-rhino-800 text-sm focus:outline-none focus:ring-2 focus:ring-scorpion-50 focus:ring-offset-2 focus:ring-offset-rhino-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-scorpion-50 text-scorpion-50 py-1 shadow-lg ring-1 ring-scorpion-950 ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-rhino-100" : "",
                                      "block px-4 py-2 text-sm text-rhino-700"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-rhino-800 p-2 text-rhino-400 hover:bg-rhino-700 hover:text-scorpion-50 focus:outline-none focus:ring-2 focus:ring-scorpion-50 focus:ring-offset-2 focus:ring-offset-rhino-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-rhino-900 text-text-scorpion-50"
                          : "text-rhino-300 hover:bg-rhino-700 hover:text-scorpion-50",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-rhino-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-scorpion-50">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-rhino-400">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-rhino-800 p-1 text-rhino-400 hover:text-scorpion-50 focus:outline-none focus:ring-2 focus:ring-scorpion-50 focus:ring-offset-2 focus:ring-offset-rhino-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-rhino-400 hover:bg-rhino-700 hover:text-scorpion-50"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Cart open={openCart} setOpen={setOpen} />
        {/* 
        <header className="bg-scorpion-50 shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-rhino-900">
              Dashboard
            </h1>
          </div>
        </header> */}
        <main>
          {/* Your content */}
          <SideCategory />
        </main>
      </div>
    </>
  );
}