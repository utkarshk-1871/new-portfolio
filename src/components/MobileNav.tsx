"use client";

import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Menu, X } from "lucide-react";

import { navItems } from "@/data/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";

interface MobileNavProps {
  activeId: string;
}

export function MobileNav({ activeId }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setOpen(false);
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 150);
  };

  return (
    <>
      <div className="relative z-[60] flex items-center gap-2 md:hidden">
        <ThemeToggle />
        <IconButton
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={open}
          aria-controls="mobile-nav-drawer"
          sx={{
            width: 40,
            height: 40,
            border: "1px solid var(--color-border)",
            backgroundColor: "var(--color-input-bg)",
            color: "var(--color-text-primary)",
            "&:hover": {
              backgroundColor: "var(--color-surface-light)",
            },
          }}
        >
          <Menu size={20} />
        </IconButton>
      </div>

      <Drawer
        id="mobile-nav-drawer"
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{ zIndex: (theme) => theme.zIndex.modal + 2 }}
      >
        <div className="flex items-center justify-between border-b border-[var(--color-border)] p-4">
          <span className="font-display text-lg font-bold">Menu</span>
          <IconButton
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
            sx={{
              border: "1px solid var(--color-border)",
              color: "var(--color-text-primary)",
            }}
          >
            <X size={18} />
          </IconButton>
        </div>
        <List sx={{ width: 280, py: 0 }}>
          {navItems.map((item) => (
            <ListItemButton
              key={item.id}
              selected={activeId === item.id}
              onClick={() => handleNavClick(item.id)}
              sx={{ py: 1.5 }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
