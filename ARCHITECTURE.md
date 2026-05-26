# Architecture

## Tech Stack

- Next.js
- React
- TypeScript
- Supabase
- Tailwind CSS

I chose Next.js because it provides fast development, routing, and easy deployment with Vercel. TypeScript helped reduce mistakes while working with state and calculations.

Supabase was used as the backend database because it is lightweight, easy to integrate, and works well for storing user audit submissions.

---

# System Flow

1. User lands on the homepage
2. User selects:
   - AI tool
   - pricing plan
   - monthly spend
   - team size
3. The audit engine compares the entered spend against estimated expected pricing
4. Savings opportunities are calculated
5. Recommendations are generated
6. User can submit the report
7. Data gets stored in Supabase

---

# Why This Architecture

This project focuses on simplicity and speed.

The frontend handles:

- form state
- calculations
- UI rendering

Supabase handles:

- lead storage
- report persistence

This separation keeps the app simple and scalable for an MVP.
