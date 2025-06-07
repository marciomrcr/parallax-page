"use client";

import { useState } from "react";

const tabs = [
  { label: "General" },
  { label: "Pricing" },
  { label: "Features" },
  { label: "Integrations" },
];

const faqs = [
  // General
  {
    icon: (
      <svg width={28} height={28} fill="none" stroke="#fff">
        <circle cx="14" cy="14" r="12" strokeWidth="2" />
        <text x="14" y="19" textAnchor="middle" fontSize="" fill="#fff">
          ?
        </text>
      </svg>
    ),
    question: "What is NoteFlow?",
    answer:
      "NoteFlow is a modern note-taking app designed for productivity and collaboration.",
    tab: "General",
  },
  {
    icon: (
      <svg width={28} height={28} fill="none" stroke="#fff">
        <rect x="4" y="4" width="20" height="20" rx="4" strokeWidth="2" />
        <path d="M9 14h10M14 9v10" stroke="#fff" strokeWidth="2" />
      </svg>
    ),
    question: "How does NoteFlow use AI to enhance note-taking?",
    answer:
      "NoteFlow uses AI to suggest tags, summarize notes, and improve your workflow.",
    tab: "General",
  },
  {
    icon: (
      <svg width={28} height={28} fill="none" stroke="#fff">
        <circle cx="14" cy="10" r="4" strokeWidth="2" />
        <path d="M4 22c0-4 8-6 10-6s10 2 10 6" stroke="#fff" strokeWidth="2" />
      </svg>
    ),
    question: "Can NoteFlow be used for team collaboration?",
    answer: "Yes, NoteFlow supports real-time collaboration for teams.",
    tab: "General",
  },
  // Pricing
  {
    icon: (
      <svg width={28} height={28} fill="none" stroke="#fff">
        <rect x="4" y="8" width="20" height="12" rx="4" strokeWidth="2" />
        <text x="14" y="19" textAnchor="middle" fontSize="14" fill="#fff">
          $
        </text>
      </svg>
    ),
    question: "Is there a free version of NoteFlow?",
    answer:
      "Yes, NoteFlow offers a free plan with essential features for individuals.",
    tab: "Pricing",
  },
  {
    icon: (
      <svg width={28} height={28} fill="none" stroke="#fff">
        <rect x="6" y="6" width="16" height="16" rx="8" strokeWidth="2" />
        <path d="M10 18h8" stroke="#fff" strokeWidth="2" />
      </svg>
    ),
    question: "What payment methods are accepted?",
    answer:
      "We accept major credit cards, PayPal, and bank transfers for annual plans.",
    tab: "Pricing",
  },
  {
    icon: (
      <svg width={28} height={28} fill="none" stroke="#fff">
        <path d="M7 14h14M7 18h10" stroke="#fff" strokeWidth="2" />
        <circle cx="14" cy="10" r="3" stroke="#fff" strokeWidth="2" />
      </svg>
    ),
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time from your account settings.",
    tab: "Pricing",
  },
  // Features
  {
    icon: (
      <svg width={28} height={28} fill="none" stroke="#fff">
        <rect x="6" y="6" width="16" height="16" rx="4" strokeWidth="2" />
        <path d="M10 14h8M14 10v8" stroke="#fff" strokeWidth="2" />
      </svg>
    ),
    question: "Does NoteFlow support markdown?",
    answer: "Absolutely! You can write and format notes using markdown syntax.",
    tab: "Features",
  },
  {
    icon: (
      <svg width={28} height={28} fill="none" stroke="#fff">
        <circle cx="14" cy="14" r="10" strokeWidth="2" />
        <path d="M14 8v8l4 4" stroke="#fff" strokeWidth="2" />
      </svg>
    ),
    question: "Can I sync my notes across devices?",
    answer: "Yes, your notes are automatically synced across all your devices.",
    tab: "Features",
  },
  {
    icon: (
      <svg width={28} height={28} fill="none" stroke="#fff">
        <rect x="8" y="8" width="12" height="12" rx="3" strokeWidth="2" />
        <path d="M14 11v6M11 14h6" stroke="#fff" strokeWidth="2" />
      </svg>
    ),
    question: "Are there templates available?",
    answer:
      "NoteFlow offers a variety of templates to help you get started quickly.",
    tab: "Features",
  },
  // Integrations
  {
    icon: (
      <svg width={28} height={28} fill="none" stroke="#fff">
        <circle cx="9" cy="14" r="4" strokeWidth="2" />
        <circle cx="19" cy="14" r="4" strokeWidth="2" />
        <path d="M13 14h2" stroke="#fff" strokeWidth="2" />
      </svg>
    ),
    question: "Does NoteFlow integrate with Google Drive?",
    answer:
      "Yes, you can connect NoteFlow with Google Drive to import and export notes.",
    tab: "Integrations",
  },
  {
    icon: (
      <svg width={28} height={28} fill="none" stroke="#fff">
        <rect x="6" y="6" width="16" height="16" rx="4" strokeWidth="2" />
        <path d="M10 14h8" stroke="#fff" strokeWidth="2" />
      </svg>
    ),
    question: "Can I connect NoteFlow to Slack?",
    answer:
      "You can receive notifications and share notes directly to Slack channels.",
    tab: "Integrations",
  },
  {
    icon: (
      <svg width={28} height={28} fill="none" stroke="#fff">
        <circle cx="14" cy="14" r="10" strokeWidth="2" />
        <path d="M10 14h8M14 10v8" stroke="#fff" strokeWidth="2" />
      </svg>
    ),
    question: "Are there API integrations available?",
    answer:
      "Yes, NoteFlow provides an API for custom integrations with your favorite tools.",
    tab: "Integrations",
  },
];

export function HomeFAQ() {
  const [activeTab, setActiveTab] = useState("General");
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const filteredFaqs = faqs
    .map((faq, idx) => ({ ...faq, idx }))
    .filter((faq) => faq.tab === activeTab);

  const toggleIndex = (idx: number) => {
    setOpenIndexes(
      openIndexes.includes(idx)
        ? openIndexes.filter((i) => i !== idx)
        : [...openIndexes, idx]
    );
  };

  return (
    <section className="w-full max-w-2xl mx-auto py-12">
      <div className="flex gap-4 mb-8 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`px-6 py-2 rounded-full border transition-colors ${
              activeTab === tab.label
                ? "bg-cyan-900 text-white border-cyan-400"
                : "bg-transparent text-cyan-900 border-cyan-400 hover:bg-cyan-400"
            }`}
            onClick={() => {
              setActiveTab(tab.label);
              setOpenIndexes([]);
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="space-y-4">
        {filteredFaqs.map((faq) => (
          <div
            key={faq.idx}
            className="flex items-start gap-4 bg-[#062b47] rounded-xl p-2"
          >
            <div className="flex-shrink-0">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-cyan-400">
                {faq.icon}
              </span>
            </div>
            <div className="flex-1">
              <button
                className="flex justify-between items-center w-full text-left font-semibold text-white text-lg"
                onClick={() => toggleIndex(faq.idx)}
              >
                {faq.question}
                <span className="ml-2">
                  {openIndexes.includes(faq.idx) ? "▲" : "▼"}
                </span>
              </button>
              {openIndexes.includes(faq.idx) && (
                <div className="mt-2 text-cyan-100 text-base">{faq.answer}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
