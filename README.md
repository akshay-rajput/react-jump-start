# React Jump Start

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

This project uses [pnpm](https://pnpm.io/) for package management.

## Recommended Setup

```bash
# Install pnpm globally if you haven't
npm install -g pnpm

# Then install project dependencies
pnpm install
```

While pnpm is recommended, you can use:

- `npm install` (may have slight dependency resolution differences)
- `yarn install` (compatibility not guaranteed)

---

Why pnpm?

- Faster than npm and yarn
- More efficient disk space usage
- Stricter dependency management

## Other Notes

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
