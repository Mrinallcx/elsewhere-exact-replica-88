"use client";

import { useState, ReactNode } from 'react';

interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabSwitcherProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
  tabClassName?: string;
  contentClassName?: string;
}

export function TabSwitcher({
  tabs,
  defaultTab,
  className = "",
  tabClassName = "",
  contentClassName = ""
}: TabSwitcherProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  return (
    <div className={className}>
      <div className={`resources-tabs mb-12 ${tabClassName}`}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={contentClassName}>
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}

