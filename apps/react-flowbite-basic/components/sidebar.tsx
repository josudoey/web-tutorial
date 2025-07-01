'use client'

import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems
} from 'flowbite-react'
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards
} from 'react-icons/hi'

export default function () {
  return (
    <Sidebar aria-label='Default sidebar example'>
      <SidebarItems className='min-h-screen'>
        <SidebarItemGroup>
          <SidebarItem href='#' icon={HiChartPie}>
            Dashboard
          </SidebarItem>
          <SidebarItem
            href='#'
            icon={HiViewBoards}
            label='Pro'
            labelColor='dark'
          >
            Kanban
          </SidebarItem>
          <SidebarItem href='#' icon={HiInbox} label='3'>
            Inbox
          </SidebarItem>
          <SidebarItem href='#' icon={HiUser}>
            Users
          </SidebarItem>
          <SidebarItem href='#' icon={HiShoppingBag}>
            Products
          </SidebarItem>
          <SidebarItem href='#' icon={HiArrowSmRight}>
            Sign In
          </SidebarItem>
          <SidebarItem href='#' icon={HiTable}>
            Sign Up
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  )
}
