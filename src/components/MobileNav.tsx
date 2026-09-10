"use client";

import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Menu, X } from "lucide-react";

import { navItems } from "@/data/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="flex items-center gap-3 lg:hidden">
      <ThemeToggle />
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
        aria-label="Open navigation menu"
      >
        <Menu size={20} />
      </button>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: 280,
              backgroundColor: "var(--color-surface)",
              color: "var(--color-text-primary)",
            },
          },
        }}
      >
        <div className="flex items-center justify-between border-b border-[var(--color-border)] p-4">
          <span className="font-display text-lg font-bold">Menu</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)]"
            aria-label="Close navigation menu"
          >
            <X size={18} />
          </button>
        </div>
        <List>
          {navItems.map((item) => (
            <ListItemButton
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              sx={{ py: 1.5 }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
