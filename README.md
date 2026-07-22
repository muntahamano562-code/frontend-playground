# Frontend Accessibility Playground

A React + TypeScript accessibility playground for experimenting with custom accessible component implementations.

## Project Structure

```
frontend-playground/
├── components/
│   ├── ModalDialog/
│   │   ├── index.tsx           # Modal Dialog component
│   │   └── ModalDialog.css     # Component styles
│   ├── Tabs/
│   │   ├── index.tsx           # Tabs component
│   │   └── Tabs.css            # Component styles
│   └── Disclosure/
│       ├── index.tsx           # Disclosure component
│       └── Disclosure.css      # Component styles
├── src/
│   ├── App.tsx                # Main application demonstrating component usage
│   ├── index.css              # Global base styles
│   └── assets/              # Application assets
├── .gitignore                # Git ignore file
├── eslint.config.js         # ESLint configuration
├── package.json            # Project configuration
├── README.md              # This README
├── NOTES.md               # Component implementation notes (to be added)
└── vite.config.ts         # Vite configuration
└── tsconfig.json          # TypeScript configuration
```

## Components

### Modal Dialog
An accessible modal dialog component with proper focus trapping and keyboard navigation support.

### Tabs
A fully accessible tab navigation component with ARIA attributes and keyboard navigation.

### Disclosure
An accessible disclosure component with smooth state management.

## Features

- ✅ Fully TypeScript with strict type checking
- ✅ No component library dependencies
- ✅ Separate CSS files for each component
- ✅ Accessibility focused (ARIA attributes, keyboard navigation)
- ✅ Clean, beginner-friendly structure

## Getting Started

1. Navigate to the project directory
2. Install dependencies: `npm install`
3. Start development: `npm run dev`

## Notes

For detailed component implementation comparisons and notes about shadcn/ui alternatives, refer to `NOTES.md`.