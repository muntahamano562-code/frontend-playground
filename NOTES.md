# Accessibility Playground Notes

## Modal

My implementation:
- Built the focus trap manually.
- Stored and restored the previously focused element.
- Implemented Escape handling myself.

shadcn:
- Uses Radix UI primitives.
- Automatically manages focus.
- Handles nested dialogs and edge cases more robustly.

Gap:
My version works for this project but doesn't cover as many accessibility edge cases.

---

## Tabs

My implementation:
- Used useState, useRef and useId.
- Implemented roving tabindex manually.
- Added Arrow, Home, End, Enter and Space keyboard support.

shadcn:
- Separates state and presentation into reusable primitives.
- Uses a more composable API.

Gap:
My implementation is less reusable and customizable.

---

## Disclosure

My implementation:
- Managed expanded state manually.
- Used aria-expanded and aria-controls.
- Added Enter and Space keyboard support.

shadcn:
- Uses Radix Accordion.
- Includes smoother animations.
- Better support for multiple accordion items.

Gap:
My version lacks built-in animations and advanced configuration.

---

## What I learned

- Accessibility requires proper keyboard interaction, not just ARIA attributes.
- Focus management is one of the most challenging parts of accessible UI.
- Component libraries handle many edge cases that are easy to miss when implementing components manually.