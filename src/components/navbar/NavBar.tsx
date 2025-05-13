"use client";

import Link from "next/link";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  const navigation = [
    { name: "Dashboard", href: "#", current: true },
    { name: "Team", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Calendar", href: "#", current: false },
  ];

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }
  async function onSignOut() {
    try {
      const response = await axios.get("/api/users/logout");
      console.log("Logout successful", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  }
  return (
    <Disclosure as='nav' className='bg-white text-black'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <DisclosureButton className='group relative inline-flex items-center justify-center rounded-md p-2 hover:bg-[#1F1F1F] hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset'>
              <span className='absolute -inset-0.5' />
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon
                aria-hidden='true'
                className='block size-6 group-data-open:hidden'
              />
              <XMarkIcon
                aria-hidden='true'
                className='hidden size-6 group-data-open:block'
              />
            </DisclosureButton>
          </div>
          <div
            className='flex flex-1 justify-center items-center sm:items-stretch sm:justify-start'
            style={{
              alignItems: "center",
            }}>
            <div className='flex shrink-0 justify-center items-center'>
              <Image
                src={"/logo-black.png"}
                height={50}
                width={50}
                alt='Logo'
              />
            </div>
            <div className='hidden sm:ml-6 sm:block'>
              <div className='flex space-x-4'>
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href} passHref>
                    <span
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "bg-[#1F1F1F] text-white"
                          : "text-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
                      )}>
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            {/* Sign out to be */}
            <button className='bg-[#1F1F1F] text-white hover:bg-[#1F1F1F] hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer' onClick={onSignOut}> Sign Out</button>
            
          </div>
        </div>
      </div>

      <DisclosurePanel className='sm:hidden'>
        <div className='space-y-1 px-2 pt-2 pb-3'>
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} passHref>
              <DisclosureButton
                as='span'
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-[#1F1F1F] text-white"
                    : "text-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium cursor-pointer"
                )}>
                {item.name}
              </DisclosureButton>
            </Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
