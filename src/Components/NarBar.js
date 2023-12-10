import React from "react";

export default function NarBar() {
  return (
    <nav className="flex bg-black text-white">
      <h3>
        get<span>linked</span>
      </h3>
      <ul>
        <li>Timeline</li>
        <li>Overview</li>
        <li>FAQs</li>
        <li>Contact</li>
      </ul>
      <button>Register</button>
    </nav>
  );
}
