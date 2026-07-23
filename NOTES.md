# Accessibility Playground Notes

## Comparison: My Components vs shadcn/ui

### Modal

My implementation:
- Built focus trap manually.
- Restored focus to the trigger when closing.
- Added Escape key support.
- Implemented ARIA dialog roles manually.

shadcn/ui:
- Uses Radix UI primitives for accessibility.
- Handles focus trapping automatically.
- Better support for nested dialogs.
- More robust focus restoration.

Gap:
I manually managed keyboard interactions, while shadcn delegates this to well-tested primitives.

---

### Tabs

My implementation:
- Implemented roving tabindex.
- Added Arrow Left/Right navigation.
- Added Home and End key support.
- Used proper ARIA roles.

shadcn/ui:
- Cleaner component composition.
- Better separation of state and presentation.
- More reusable API.

Gap:
My implementation is functional but less flexible than shadcn's composable structure.

---

### Disclosure

My implementation:
- Toggle using Enter and Space.
- Used aria-expanded and aria-controls.
- Managed state with React.

shadcn/ui:
- More polished animations.
- Cleaner architecture.
- Better scalability for multiple disclosures.

Gap:
My implementation lacks animation and advanced customization compared to shadcn.

---

## What I Learned

- Accessibility requires more than adding ARIA attributes.
- Keyboard navigation is essential.
- Focus management is one of the hardest parts.
- Open-source component libraries are useful references but understanding the underlying accessibility patterns is important.