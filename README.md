# AI Spend Audit

AI Spend Audit is a lightweight web app built to help startups and small teams understand whether they are overspending on AI tools like ChatGPT, Claude, Cursor, and GitHub Copilot.

Most teams pay for AI subscriptions every month without knowing if the selected plans actually match their usage or team size. This tool provides a simple audit experience where users can enter their current setup and instantly receive estimated savings along with optimization suggestions.

The project focuses on solving a real startup problem in a simple and practical way.

---

# Features

- Instant AI spend analysis
- Monthly and yearly savings estimation
- Personalized optimization recommendations
- Lead capture form with Supabase storage
- Loading animation and success feedback
- Responsive UI
- Multiple AI tool support

---

# Supported Tools

- ChatGPT
- Claude
- Cursor
- GitHub Copilot

---

# Tech Stack

- Next.js
- TypeScript
- React
- Supabase
- Tailwind CSS

---

# How It Works

Users enter:

- AI tool
- current plan
- monthly spending
- number of seats/users

The audit engine then compares the current spend against estimated expected pricing and checks whether the selected plan makes sense for the team size.

Based on this, the system generates:

- estimated monthly savings
- estimated yearly savings
- optimization recommendations

Submitted reports are stored in Supabase for lead capture and analysis.

---

# Screenshots

## Homepage

(Add screenshot here)

## Audit Result

(Add screenshot here)

## Success Submission Message

(Add screenshot here)

---

# Local Setup

## Clone Repository

```bash
git clone https://github.com/masabparwez46-del/ai-spend-audit.git

## Live Demo

https://ai-spend-audit-wdio-8604jmyw9-masab-s-projects1.vercel.app
```
