"use client";

import { useState } from "react";
import { supabase } from "./lib/supabase";

export default function Home() {
  const [tool, setTool] = useState("ChatGPT");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [plan, setPlan] = useState("Pro");
  const [spend, setSpend] = useState("");
  const [seats, setSeats] = useState("");

  const [monthlySavings, setMonthlySavings] = useState(0);
  const [yearlySavings, setYearlySavings] = useState(0);
  const [recommendation, setRecommendation] = useState("");
  const [showResult, setShowResult] = useState(false);
const pricing = {
  ChatGPT: {
    Free: 0,
    Pro: 20,
    Team: 30,
    Enterprise: 60,
  },

  Claude: {
    Free: 0,
    Pro: 20,
    Team: 35,
    Enterprise: 65,
  },

  Cursor: {
    Free: 0,
    Pro: 20,
    Team: 40,
    Enterprise: 70,
  },

  "GitHub Copilot": {
    Free: 0,
    Pro: 10,
    Team: 19,
    Enterprise: 39,
  },
};
  const handleAudit = async () => {
    const monthlySpend = Number(spend);
    const currentPlanPrice =
  pricing[tool as keyof typeof pricing][
    plan as keyof (typeof pricing)["ChatGPT"]
  ];
    const users = Number(seats);

    let savings = 0;
let recommendationText = "";

const expectedCost = currentPlanPrice * users;

if (monthlySpend > expectedCost) {
  savings = monthlySpend - expectedCost;

  recommendationText =
    `Your current spending appears higher than expected for the ${plan} plan.`;

} else {

  savings = Math.floor(monthlySpend * 0.1);

  recommendationText =
    "Your current AI spending already appears relatively optimized.";
}

if (plan === "Team" && users <= 2) {

  recommendationText +=
    " Small teams usually do not need Team plans.";

  savings += 20;
}

if (plan === "Enterprise" && users <= 5) {

  recommendationText +=
    " Enterprise plans may be unnecessary for smaller companies.";

  savings += 50;
}

const yearly = savings * 12;
const finalMonthlySavings = savings;
const finalYearlySavings = yearly;
const finalRecommendation = recommendationText;

    setMonthlySavings(finalMonthlySavings);
    setYearlySavings(finalYearlySavings);
    setRecommendation(finalRecommendation);
    setShowResult(true);
  };

const submitReport = async () => {
  const { data, error } = await supabase
    .from("audi")
    .insert([
      {
        tool,
        plan,
        spend: Number(spend),
        seats: Number(seats),
        monthly_savings: monthlySavings,
        yearly_savings: yearlySavings,
        recommendation,
        email,
        company,
        role,
      },
    ]);

  console.log(data);
  console.log(error);
};

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white px-6 py-20">

      <section className="mx-auto max-w-4xl">

        <div className="text-center">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Stop Overpaying For AI Tools
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Find hidden savings on ChatGPT, Claude,
            Cursor, Copilot and other AI subscriptions.
          </p>

        </div>

        <div className="mt-16 bg-[#111111] border border-gray-800 rounded-2xl p-8 shadow-xl">

          <h2 className="text-2xl font-semibold">
            AI Spend Audit
          </h2>

          <div className="mt-8 space-y-6">

            <div>

              <label className="block mb-2 text-sm text-gray-400">
                AI Tool
              </label>

              <select
                value={tool}
                onChange={(e) => setTool(e.target.value)}
                className="w-full rounded-xl bg-black border border-gray-700 px-4 py-3 outline-none"
              >
                <option>ChatGPT</option>
                <option>Claude</option>
                <option>Cursor</option>
                <option>GitHub Copilot</option>
              </select>

            </div>
<div>

  <label className="block mb-2 text-sm text-gray-400">
    Current Plan
  </label>

  <select
    value={plan}
    onChange={(e) => setPlan(e.target.value)}
    className="w-full rounded-xl bg-black border border-gray-700 px-4 py-3 outline-none"
  >
    <option>Free</option>
    <option>Pro</option>
    <option>Team</option>
    <option>Enterprise</option>
  </select>

</div>
            <div>

              <label className="block mb-2 text-sm text-gray-400">
                Monthly Spend ($)
              </label>

              <input
                type="number"
                value={spend}
                onChange={(e) => setSpend(e.target.value)}
                placeholder="100"
                className="w-full rounded-xl bg-black border border-gray-700 px-4 py-3 outline-none"
              />

            </div>

            <div>

              <label className="block mb-2 text-sm text-gray-400">
                Team Size
              </label>

              <input
                type="number"
                value={seats}
                onChange={(e) => setSeats(e.target.value)}
                placeholder="5"
                className="w-full rounded-xl bg-black border border-gray-700 px-4 py-3 outline-none"
              />

            </div>

            <button
                 onClick={handleAudit}
                 className="w-full rounded-xl bg-green-500 py-4 font-semibold text-black hover:bg-green-400 transition"
>
                Analyze spend
            </button>

          </div>

        </div>

        {showResult && (

          <div className="mt-10 rounded-2xl border border-green-800 bg-[#07150d] p-8">

            <h3 className="text-3xl font-bold text-green-400">
              Audit Report
            </h3>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              <div className="rounded-xl bg-black p-6 border border-gray-800">

                <p className="text-gray-400 text-sm">
                  Monthly Savings
                </p>

                <h4 className="mt-3 text-4xl font-bold">
                  ${monthlySavings}
                </h4>

              </div>

              <div className="rounded-xl bg-black p-6 border border-gray-800">

                <p className="text-gray-400 text-sm">
                  Annual Savings
                </p>

                <h4 className="mt-3 text-4xl font-bold">
                  ${yearlySavings}
                </h4>

              </div>

            </div>

            <div className="mt-8 rounded-xl border border-gray-800 bg-black p-6">

              <h4 className="text-xl font-semibold">
                Recommendation
              </h4>

              <p className="mt-4 text-gray-300 leading-7">
                {recommendation}
              </p>
<div className="mt-10 rounded-xl border border-gray-800 bg-black p-6">

  <h4 className="text-2xl font-semibold">
    Get Full Audit Report
  </h4>

  <p className="mt-2 text-gray-400">
    Enter your details to receive a detailed AI savings report.
  </p>

  <div className="mt-6 space-y-4">

    <input
      type="email"
      placeholder="Email Address"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full rounded-xl border border-gray-700 bg-[#111111] px-4 py-3 outline-none"
    />

    <input
      type="text"
      placeholder="Company Name"
      value={company}
      onChange={(e) => setCompany(e.target.value)}
      className="w-full rounded-xl border border-gray-700 bg-[#111111] px-4 py-3 outline-none"
    />

    <input
      type="text"
      placeholder="Your Role"
      value={role}
      onChange={(e) => setRole(e.target.value)}
      className="w-full rounded-xl border border-gray-700 bg-[#111111] px-4 py-3 outline-none"
    />

    <button
        onClick={submitReport}
        className="w-full rounded-xl bg-green-500 py-4 font-semibold text-black hover:bg-green-400 transition"
>
       Send Full Report
    </button>
  </div>

</div>
            </div>

          </div>

        )}

      </section>

    </main>
  );
}