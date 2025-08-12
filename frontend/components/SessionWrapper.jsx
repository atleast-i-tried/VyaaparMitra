"use client";

import { SessionProvider } from "next-auth/react";

export default function SessionWrapper({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}


// 1️⃣ First — where does your code run?
// When you make a website, your code can run in two places:

// Server → the computer in some data center that sends your page to people.

// Client → the visitor’s browser (Chrome, Firefox, etc.) after they open your page.

// 2️⃣ React in normal websites
// If you’ve heard of React before, normally everything runs in the browser (client).
// That means the page loads, then JavaScript runs to show buttons, handle clicks, etc.

// 3️⃣ Next.js special feature
// Next.js is special because it can run some code on the server first, then send ready-made HTML to the browser.
// This can make the site load faster and safer.

// So, in Next.js:

// Server Component → runs on the server before sending page to browser.

// Client Component → runs inside the browser (and can handle clicks, animations, forms, etc.).

// 4️⃣ Why "use client" matters here
// In your project, layout.js is a Server Component by default (only runs on server).
// But the SessionProvider (the thing that handles logged-in users) needs to run in the browser to check cookies and keep the user logged in.

// So, we make a tiny file:

// js
// Copy code
// "use client"; // tells Next.js this must run in the browser
// This is called a Client Component, and we put SessionProvider inside it.
// That way, the login system works correctly.

// 💡 Think of it like:

// Server Component = The kitchen makes the basic dish.

// Client Component = You add ketchup or salt after the food is on your table.
// Some things (like ketchup) you can only do at the table — not in the kitchen.


// Two ways to make a Next.js project
// Think of them as two different “folder systems” for your app:

// 1. Pages Router (old way)
// All your pages live inside /pages folder.

// Next.js automatically creates routes from file names.

// Special file _app.js exists — used to wrap your whole app (good place for SessionProvider).

// Everything in _app.js is client-side by default.

// Example:

// bash
// Copy code
// /pages
//   index.js      →  /
//   about.js      →  /about
//   _app.js       →  wraps everything
// 2. App Router (new way, Next.js 13+)
// All your pages live inside /app folder.

// Special files:

// layout.js → wraps pages (like _app.js but server-side by default)

// page.js → the actual page.

// You choose whether each file runs:

// Server Component (default, faster, no browser JS unless needed)

// Client Component ("use client" at top — runs in browser)

// Example:

// bash
// Copy code
// /app
//   layout.js     → default layout (server-side)
//   page.js       → homepage
//   dashboard/
//     page.js     → /dashboard
// Why this matters for you
// In Pages Router: _app.js was already client-side, so you could put SessionProvider there directly.

// In App Router: layout.js is server-side by default, so you can’t put browser-only stuff (like SessionProvider) inside it unless you make it a client component.

// That’s why your tutor made a SessionWrapper with "use client".

// 💡 One-line difference:

// Old system → everything starts client-side unless you choose otherwise.

// New system → everything starts server-side unless you choose otherwise.




// App Routes = the new folder-based system for making pages in Next.js.
// Instead of the old /pages folder, you use an /app folder.
// Inside it, the folder structure becomes the URL structure.

// Example
// bash
// Copy code
// /app
//   page.js               →  /
//   about/
//     page.js             →  /about
//   blog/
//     page.js             →  /blog
//     post/
//       page.js           →  /blog/post
// The folder names = the URL path.

// The page.js file inside a folder = the actual webpage.

// You can also have:

// layout.js → Wraps multiple pages with common UI (like navbar).

// loading.js → Shows loading state.

// error.js → Shows error state.

// Why it’s called “App Router”
// Because Next.js uses this /app folder to “route” visitors to different pages and lets you mix server components (fast, no JS sent to browser) with client components (interactive, browser JS).

// It’s the modern replacement for the /pages router.