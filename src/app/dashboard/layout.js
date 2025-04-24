"use client";
import React from "react";
import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import { SidebarProvider, useSidebar } from "@/context/SidebarContext";

export default function ClientLayout({ children }) {
  return (
    <SidebarProvider>
      <LayoutContent>{children}</LayoutContent>
    </SidebarProvider>
  );
}

function LayoutContent({ children }) {
  const { isOpen, setIsOpen } = useSidebar();
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { isOpen });
    }
    return child;
  });

  const toggleSidebarOpen = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="dashboard-wrapper">
      <Header isOpen={isOpen} onToggleOpen={toggleSidebarOpen} />
      <Sidebar isOpen={isOpen} onToggleOpen={toggleSidebarOpen} />
      {childrenWithProps}
      <div className="dashboard-footer">
        <div className="copyright-area">
          <p>
            Copyright 2023 <a href="#">neckle</a> | Design By{" "}
            <a href="#">Egens Lab</a>
          </p>
        </div>
        <ul className="footer-menu-list">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Reviews</a>
          </li>
          <li>
            <a href="#">Terms &amp; Conditions</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
