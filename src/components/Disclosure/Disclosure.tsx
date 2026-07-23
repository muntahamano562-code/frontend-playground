import { useState, useId } from 'react';
import './Disclosure.css';

export default function Disclosure() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonId = useId();
  const panelId = useId();

  function handleToggle() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="disclosure">
      <button
        id={buttonId}
        className={`disclosure-button${isOpen ? ' disclosure-button--open' : ''}`}
        // aria-expanded tells screen readers whether the panel is visible
        aria-expanded={isOpen}
        // aria-controls links the button to the panel it controls
        aria-controls={panelId}
        onClick={handleToggle}
      >
        <span>What is Web Accessibility?</span>
        <svg
          className="disclosure-chevron"
          aria-hidden="true"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6l4 4 4-4" />
        </svg>
      </button>
      <div
        id={panelId}
        className="disclosure-panel"
        // role="region" and aria-labelledby identify this panel for assistive tech
        role="region"
        aria-labelledby={buttonId}
        // hidden removes the panel from the accessibility tree when collapsed
        hidden={!isOpen}
      >
        <p className="disclosure-panel-text">
          Web accessibility ensures websites and applications are usable by
          everyone, including people who rely on keyboards or assistive
          technologies.
        </p>
      </div>
    </div>
  );
}
