# DocGen AI - AI-Powered C++ Documentation Automation Tool

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.9-38bdf8)](https://tailwindcss.com/)

> **Automate C++ Documentation with AI** - Generate accurate, contextual documentation for your C++ codebase using LLMs and static analysis. Integrate seamlessly with GitLab CI/CD and VS Code.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Build](#build)
- [Workflow](#workflow)
- [Integration](#integration)
- [Components](#components)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

DocGen AI is a modern web application that showcases an AI-powered documentation automation platform for C++ codebases. The platform leverages advanced technologies like Clang AST parsing, LLM-powered generation, and RAG (Retrieval-Augmented Generation) to automatically generate high-quality, contextual documentation.

The application is built with Next.js 15 and React 19, featuring a beautiful, responsive UI with dark mode support, smooth animations, and a comprehensive component library.

## ✨ Features

### Core Capabilities

1. **Clang AST Parsing**
   - Extract classes, methods, structs, and dependencies from C++ code
   - Uses LibTooling for accurate static analysis
   - Outputs structured JSON for downstream processing

2. **LLM-Powered Generation**
   - Generate Doxygen-style documentation with contextual examples
   - Leverages advanced language models (OpenAI / Llama 3)
   - Uses RAG pipeline for accurate, context-aware documentation

3. **CI/CD Integration**
   - Automatically generate docs on every merge request
   - Native GitLab CI/CD pipeline integration
   - Seamless workflow with existing DevOps practices

4. **VS Code Extension**
   - Inline documentation suggestions directly in your IDE
   - Keyboard shortcuts and right-click commands
   - Real-time preview and editing capabilities

5. **Incremental Updates**
   - Only regenerate documentation for changed code sections
   - Keeps your CI/CD pipeline fast and efficient
   - Smart caching and differential analysis

6. **Quality Enforcement**
   - Fail builds when documentation coverage drops below threshold
   - Ensures consistent documentation quality across the codebase
   - Configurable quality gates and metrics

## 🛠 Tech Stack

### Frontend Framework
- **Next.js 15.2.4** - React framework with App Router
- **React 19** - UI library with latest features
- **TypeScript 5** - Type-safe development

### Styling & UI
- **Tailwind CSS 4.1.9** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled component primitives
- **Lucide React** - Beautiful icon library
- **class-variance-authority** - Managing component variants
- **tailwind-merge** - Intelligent Tailwind class merging

### Forms & Validation
- **React Hook Form 7.60.0** - Performant form management
- **Zod 3.25.67** - TypeScript-first schema validation
- **@hookform/resolvers** - Validation resolver for React Hook Form

### Additional Libraries
- **Geist Font** - Modern, clean typography
- **Vercel Analytics** - Web analytics and performance monitoring
- **next-themes** - Dark mode and theme management
- **Sonner** - Toast notifications
- **cmdk** - Command menu interface
- **date-fns** - Modern date utility library
- **recharts** - Composable charting library
- **Embla Carousel** - Lightweight carousel library
- **vaul** - Drawer component

## 📁 Project Structure

```
AI-Powered-C---Documentation-Automation-Tool/
├── app/                        # Next.js App Router
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout component
│   └── page.tsx               # Home page component
│
├── components/                 # React components
│   ├── cta.tsx                # Call-to-action section
│   ├── features.tsx           # Features showcase section
│   ├── header.tsx             # Navigation header
│   ├── hero.tsx               # Hero/landing section
│   ├── integration.tsx        # Integration showcase section
│   ├── workflow.tsx           # Workflow explanation section
│   ├── theme-provider.tsx     # Theme management provider
│   │
│   └── ui/                    # Reusable UI components
│       ├── accordion.tsx      # Collapsible content panels
│       ├── alert-dialog.tsx   # Modal alert dialogs
│       ├── alert.tsx          # Alert messages
│       ├── aspect-ratio.tsx   # Aspect ratio containers
│       ├── avatar.tsx         # User avatar component
│       ├── badge.tsx          # Status badges
│       ├── breadcrumb.tsx     # Breadcrumb navigation
│       ├── button-group.tsx   # Grouped buttons
│       ├── button.tsx         # Button component
│       ├── calendar.tsx       # Date picker calendar
│       ├── card.tsx           # Card container
│       ├── carousel.tsx       # Image carousel
│       ├── chart.tsx          # Chart components
│       ├── checkbox.tsx       # Checkbox input
│       ├── collapsible.tsx    # Collapsible content
│       ├── command.tsx        # Command palette
│       ├── context-menu.tsx   # Right-click context menu
│       ├── dialog.tsx         # Modal dialogs
│       ├── drawer.tsx         # Slide-out drawer
│       ├── dropdown-menu.tsx  # Dropdown menus
│       ├── empty.tsx          # Empty state component
│       ├── field.tsx          # Form field wrapper
│       ├── form.tsx           # Form components
│       ├── hover-card.tsx     # Hover popover cards
│       ├── input-group.tsx    # Grouped input fields
│       ├── input-otp.tsx      # OTP input fields
│       ├── input.tsx          # Text input component
│       ├── item.tsx           # List item component
│       ├── kbd.tsx            # Keyboard key display
│       ├── label.tsx          # Form label
│       ├── menubar.tsx        # Menu bar component
│       ├── navigation-menu.tsx # Navigation menu
│       ├── pagination.tsx     # Pagination controls
│       ├── popover.tsx        # Popover component
│       ├── progress.tsx       # Progress bar
│       ├── radio-group.tsx    # Radio button group
│       ├── resizable.tsx      # Resizable panels
│       ├── scroll-area.tsx    # Custom scrollable area
│       ├── select.tsx         # Select dropdown
│       ├── separator.tsx      # Visual separator
│       ├── sheet.tsx          # Side sheet/panel
│       ├── sidebar.tsx        # Sidebar navigation
│       ├── skeleton.tsx       # Loading skeleton
│       ├── slider.tsx         # Range slider
│       ├── sonner.tsx         # Toast notifications
│       ├── spinner.tsx        # Loading spinner
│       ├── switch.tsx         # Toggle switch
│       ├── table.tsx          # Data table
│       ├── tabs.tsx           # Tabbed interface
│       ├── textarea.tsx       # Multi-line text input
│       ├── toast.tsx          # Toast notification
│       ├── toaster.tsx        # Toast container
│       ├── toggle-group.tsx   # Toggle button group
│       ├── toggle.tsx         # Toggle button
│       ├── tooltip.tsx        # Tooltip component
│       └── use-mobile.tsx     # Mobile detection hook
│
├── hooks/                      # Custom React hooks
├── lib/                        # Utility functions
│   └── utils.ts               # Helper utilities (cn function)
│
├── public/                     # Static assets
├── styles/                     # Additional styles
│
├── components.json             # Component configuration
├── next.config.mjs            # Next.js configuration
├── package.json               # Project dependencies
├── pnpm-lock.yaml             # PNPM lock file
├── postcss.config.mjs         # PostCSS configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project documentation
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher recommended)
- **pnpm** (preferred) or **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/johaankjis/AI-Powered-C---Documentation-Automation-Tool.git
cd AI-Powered-C---Documentation-Automation-Tool
```

2. **Install dependencies**

Using pnpm (recommended):
```bash
pnpm install
```

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

### Development

Start the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page auto-updates as you edit files in the `app/` and `components/` directories.

### Build

Build the application for production:

```bash
pnpm build
# or
npm run build
# or
yarn build
```

Start the production server:

```bash
pnpm start
# or
npm start
# or
yarn start
```

### Linting

Run ESLint to check code quality:

```bash
pnpm lint
# or
npm run lint
# or
yarn lint
```

## 🔄 Workflow

The documentation generation process follows these steps:

1. **Developer commits code**
   - Push C++ changes to GitLab
   - Create a merge request as usual

2. **CI triggers doc generation**
   - GitLab CI automatically runs the documentation job on every MR
   - No manual intervention required

3. **Clang extracts symbols**
   - Parse C++ AST to extract classes, methods, and dependencies
   - Output structured JSON for processing

4. **LLM generates docs**
   - RAG pipeline retrieves relevant context
   - Generates accurate Doxygen-style documentation

5. **Review in VS Code**
   - See inline suggestions in your IDE
   - Approve or modify before committing

## 🔗 Integration

DocGen AI works seamlessly with your existing tech stack:

### Development Tools
- **GitLab CI/CD** - Native pipeline integration
- **VS Code** - IDE extension with inline suggestions
- **Clang LibTooling** - C++ AST parsing and analysis

### AI & ML Stack
- **OpenAI / Llama 3** - LLM-powered documentation generation
- **FAISS** - Vector search for RAG pipeline

### Documentation
- **Doxygen** - Standard documentation format

## 🧩 Components

### Page Components

- **Header** - Fixed navigation bar with responsive menu
- **Hero** - Landing section with main value proposition
- **Features** - Grid showcase of key features
- **Workflow** - Step-by-step process explanation
- **Integration** - Tech stack integrations showcase
- **CTA** - Call-to-action section

### UI Components

The project includes a comprehensive library of 60+ reusable UI components built on top of Radix UI primitives, styled with Tailwind CSS. These components provide:

- Full keyboard navigation support
- ARIA attributes for accessibility
- Dark mode support
- Responsive design
- Smooth animations and transitions
- Customizable via className and variants

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code:
- Follows the existing code style
- Passes all linting checks
- Includes appropriate TypeScript types
- Is properly documented

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ by the DocGen AI Team**

For questions, issues, or feature requests, please [open an issue](https://github.com/johaankjis/AI-Powered-C---Documentation-Automation-Tool/issues).
