"use client";

import { FormEvent, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { profile } from "@/data/profile";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${name.trim() || "Visitor"}`,
    );
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-panel flex flex-col gap-4 rounded-2xl p-6 backdrop-blur-xl"
    >
      <TextField
        label="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
        fullWidth
        slotProps={{ inputLabel: { shrink: true } }}
      />
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
        fullWidth
        slotProps={{ inputLabel: { shrink: true } }}
      />
      <TextField
        label="Message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        required
        fullWidth
        multiline
        minRows={4}
        slotProps={{ inputLabel: { shrink: true } }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          mt: 1,
          minHeight: 48,
          borderRadius: 9999,
          textTransform: "none",
          fontWeight: 600,
          backgroundImage:
            "linear-gradient(135deg, var(--color-gradient-start), var(--color-gradient-end))",
        }}
      >
        Send Message
      </Button>
    </form>
  );
}
