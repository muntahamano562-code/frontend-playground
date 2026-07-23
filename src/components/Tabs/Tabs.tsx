import { useState, useRef, useId, type KeyboardEvent } from 'react';
import './Tabs.css';

interface TabItem {
  id: string;
  label: string;
  content: string;
}

const tabs: TabItem[] = [
  {
    id: 'overview',
    label: 'Overview',
    content:
      'This is the overview content. Here you will find a summary of the key features and highlights of our product.',
  },
  {
    id: 'features',
    label: 'Features',
    content:
      'Explore the full list of features including real-time collaboration, cloud sync, offline mode, and customizable workflows.',
  },
  {
    id: 'contact',
    label: 'Contact',
    content:
      'Get in touch with our support team via email at support@example.com or call us at (555) 123-4567.',
  },
];

export default function Tabs() {
  const baseId = useId();
  const tabListRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  // Tracks which tab has tabIndex="0" (roving tabindex for keyboard navigation)
  const [focusedTabIndex, setFocusedTabIndex] = useState(0);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const tabCount = tabs.length;
    let targetIndex: number | null = null;

    switch (event.key) {
      case 'ArrowLeft': {
        targetIndex = (focusedTabIndex - 1 + tabCount) % tabCount;
        break;
      }
      case 'ArrowRight': {
        targetIndex = (focusedTabIndex + 1) % tabCount;
        break;
      }
      case 'Home':
        targetIndex = 0;
        break;
      case 'End':
        targetIndex = tabCount - 1;
        break;
      case 'Enter':
      case ' ':
        // Activate the focused tab without preventing default space scroll
        event.preventDefault();
        setActiveTabIndex(focusedTabIndex);
        return;
    }

    if (targetIndex !== null) {
      event.preventDefault();
      tabRefs.current[targetIndex]?.focus();
      setFocusedTabIndex(targetIndex);
    }
  }

  return (
    <div className="tabs">
      {/* tablist: container for the tab buttons */}
      <div
        ref={tabListRef}
        className="tab-list"
        role="tablist"
        aria-label="Demo tabs"
        onKeyDown={handleKeyDown}
      >
        {tabs.map((tab, index) => {
          const tabId = `${baseId}-tab-${tab.id}`;
          const panelId = `${baseId}-panel-${tab.id}`;
          const isActive = index === activeTabIndex;

          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              id={tabId}
              className={`tab-button${isActive ? ' tab-button--active' : ''}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={index === focusedTabIndex ? 0 : -1}
              onClick={() => {
                setActiveTabIndex(index);
                setFocusedTabIndex(index);
              }}
              onFocus={() => setFocusedTabIndex(index)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {tabs.map((tab, index) => {
        const tabId = `${baseId}-tab-${tab.id}`;
        const panelId = `${baseId}-panel-${tab.id}`;
        const isActive = index === activeTabIndex;

        return (
          <div
            key={tab.id}
            id={panelId}
            className={`tab-panel${isActive ? ' tab-panel--active' : ''}`}
            role="tabpanel"
            aria-labelledby={tabId}
            hidden={!isActive}
          >
            {tab.content}
          </div>
        );
      })}
    </div>
  );
}
