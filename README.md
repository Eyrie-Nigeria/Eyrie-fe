This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Prerequisites

- Node.js 18.x or higher.
- npm, yarn, pnpm, or bun package manager.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Eyrie-Nigeria/Eyrie-fe.git
cd eyrie-fe
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up Git hooks (Required for all team members):

```bash
# Configure Git to use custom hooks
git config core.hooksPath .githooks

# For Linux/Mac users, make the hook executable:
chmod +x .githooks/pre-push
```

This sets up a pre-push hook that prevents direct pushes to protected branches (`main`, `staging`, `development`). Team members must create feature branches and submit Pull Requests instead.

**Note for Windows users:** The hook works in Git Bash. If you're using Command Prompt or PowerShell, use Git Bash for git operations.

### Branching Strategy

**Important:** Always create your feature branches from the `development` branch.

```bash
# Switch to development branch
git checkout development

# Pull latest changes
git pull origin development

# Create your feature branch (use a descriptive name)
git checkout -b feature/your-feature-name

# Example:
# git checkout -b feature/add-login-page
# git checkout -b fix/navbar-responsive-issue
```

After making your changes, push your feature branch and create a Pull Request to `development`.

**Protected Branches:**
- `main` - Production branch
- `staging` - Staging/QA branch  
- `development` - Main development branch

Direct pushes to these branches are blocked. Always work on feature branches!

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

### Available Scripts

- `npm run dev` - Start the development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Check for linting errors
- `npm run lint:fix` - Auto-fix linting errors
- `npm run format` - Format all files with Prettier

### Code Quality

This project uses:

- **ESLint** for code linting
- **Prettier** for code formatting
- **Husky** for Git hooks
- **lint-staged** for pre-commit linting and formatting

Code is automatically formatted and linted before each commit.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
