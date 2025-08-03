# Tailwind CSS Standards

This document outlines the core Tailwind CSS coding standards our team follows to keep code consistent, readable, and maintainable.

---

## 1. Mobile-First Responsive Design

- Always follow **mobile-first** approach using Tailwind’s **breakpoints**.
- Use `sm:`, `md:`, `lg:`, `xl:` to enhance styles on larger screens.
- **Do NOT use** `max-*` breakpoints like `max-md:` or `max-lg:`.

Correct

```html
<div class="p-4 sm:p-6 md:p-8"></div>
```

Incorrect:

```html
<div class="p-4 max-md:p-8 max-sm:p-6"></div>
```

---

## 2. Avoid Arbitrary Utility Classes

Use Tailwind’s predefined spacing, sizing, and colors.

Correct:

```html
<div class="pt-4"></div>
```

Incorrect:

```html
<div class="pt-[22px]"></div>
```
