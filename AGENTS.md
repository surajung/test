<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# Agent Working Rules

## Language Policy
- Default UI content language must be Korean.
- If not explicitly requested otherwise, labels, headings, button text, and helper text should be written in Korean.

## Sandbox Page Policy
- Any new test-purpose page must be created under `./src/app/sandbox/*`.
- Entry links for sandbox test pages must be added to `./src/app/sandbox/page.tsx`.
- Keep sandbox pages isolated from production-like pages.

## Current Sandbox Route
- `/sandbox/mobile-keypad`: mobile keyboard position test page.
- `/sandbox/mobile-keypad-sheet`: mobile bottom sheet keypad test page.

<!-- END:nextjs-agent-rules -->
