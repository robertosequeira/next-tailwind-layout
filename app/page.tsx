"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import clsx from 'clsx';
import { useState } from "react";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

function SidebarBody({className, ...props}: React.ComponentPropsWithRef<"div">) {
  return (
    <div
      {...props}
      className={clsx(
        "flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6",
        className
      )}
    >
      <div className="flex h-16 shrink-0 items-center">
        <img
          alt="Your Company"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          className="h-8 w-auto"
        />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    // className={classNames(
                    //   item.current
                    //     ? "bg-gray-50 text-indigo-600"
                    //     : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                    //   "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                    // )}
                    className={clsx(
                      "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold",
                      item.current
                        ? "bg-gray-50 text-indigo-600"
                        : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    )}
                  >
                    <item.icon
                      aria-hidden="true"
                      // className={classNames(
                      //   item.current
                      //     ? "text-indigo-600"
                      //     : "text-gray-400 group-hover:text-indigo-600",
                      //   "h-6 w-6 shrink-0"
                      // )}
                      className={clsx(
                        "h-6 w-6 shrink-0",
                        item.current
                          ? "text-indigo-600"
                          : "text-gray-400 group-hover:text-indigo-600"
                      )}
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className="-mx-6 mt-auto">
            <a
              href="#"
              className="flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-50"
            >
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="h-8 w-8 rounded-full bg-gray-50"
              />
              <span className="sr-only">Your profile</span>
              <span aria-hidden="true">Tom Cook</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

/**
 * Example taken from
 * Light Sidebar
 * https://tailwindui.com/components/application-ui/application-shells/sidebar#component-a69d85b6237ea2ad506c00ef1cd39a38
 */
export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div>
        <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-50 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="-m-2.5 p-2.5"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </button>
                </div>
              </TransitionChild>

              {/* Sidebar component, swap this element with another sidebar if you like */}
              <SidebarBody className="pb-2" />
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <SidebarBody className="border-r border-gray-200" />
        </div>

        <div className="sticky top-0 z-40 flex justify-between gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <a href="#">
            <span className="sr-only">Home</span>
            <img
              alt="Your Company"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>

          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8 h-100">
            <h1 className="text-2xl font-semibold text-gray-900 mb-4">
              Dashboard
            </h1>

            {/* Placeholder for the main content */}
            <div className="rounded-lg shadow">
              <div className="relative h-[800px] overflow-hidden rounded border border-dashed border-gray-400 opacity-75">
                <svg className="absolute inset-0 h-full w-full stroke-gray-900/10" fill="none">
                  <defs>
                    <pattern id="pattern-bb904d76-8ce0-4b79-8986-92c472e1c066" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
                    </pattern>
                  </defs>
                  <rect stroke="none" fill="url(#pattern-bb904d76-8ce0-4b79-8986-92c472e1c066)" width="100%" height="100%"></rect>
                </svg>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
