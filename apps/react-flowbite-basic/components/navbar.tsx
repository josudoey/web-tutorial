import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  DarkThemeToggle
} from 'flowbite-react'
import Link from 'next/link'

export default function () {
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href='https://flowbite-react.com'>
        <img
          src='https://flowbite-react.com/favicon.svg'
          className='mr-3 h-6 sm:h-9'
          alt='Flowbite React Logo'
        />
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          Flowbite React
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href='#' active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href='#'>
          About
        </NavbarLink>
        <NavbarLink href='#'>Services</NavbarLink>
        <NavbarLink href='#'>Pricing</NavbarLink>
        <NavbarLink href='#'>Contact</NavbarLink>
        <DarkThemeToggle />
      </NavbarCollapse>
    </Navbar>
  )
}
