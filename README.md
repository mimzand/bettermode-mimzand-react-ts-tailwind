# bettermode-mimzand-react-ts-tailwind

This project was developed as part of a hiring challenge for BetterMode. It includes the implementation of the post list, post detail page, and post like functionality.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Technologies](#technologies)
- [Features](#features)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install and run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone git@github.com:mimzand/bettermode-mimzand-react-ts-tailwind.git
   ```
2. Navigate to the project directory:
   ```bash
   cd bettermode-mimzand-react-ts-tailwind
   ```
3. Install dependencies:

   ```bash
   yarn install
   ```

4. Start the development server:
   ```bash
   yarn dev
   ```

## Environment Variables

The project uses environment variables configured in a `.env` file. Below are the keys required:

- `VITE_GRAPHQL_ENDPOINT`: The URL for the GraphQL endpoint (default: `https://api.example.com/`).
- `VITE_NETWORK_DOMAIN`: The network domain address (default: `https://betterhunt-sj1n88tv.bettermode.io/`).
- `VITE_AUTH_TOKEN`: Optional. Set this value if you want to log in as an authenticated user.

Make sure to create a `.env` file in the root of your project and set the appropriate values.

```bash
VITE_GRAPHQL_ENDPOINT=https://api.example.com/
VITE_NETWORK_DOMAIN=https://betterhunt-sj1n88tv.bettermode.io/
VITE_AUTH_TOKEN=your-auth-token-here
```

## Technologies

This project is built with the following technologies:

- **[React](https://reactjs.org/)** - A JavaScript library for building user interfaces.
- **[TypeScript](https://www.typescriptlang.org/)** - A strongly typed programming language that builds on JavaScript.
- **[Vite](https://vitejs.dev/)** - A fast build tool and development server for modern web projects.
- **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework for rapid UI development.

## Features

- Fast development with Vite's hot module replacement.
- TypeScript for static type checking.
- Tailwind CSS for flexible, responsive styling.
- Functional-based architecture using React.

## Project Structure

Here's a brief overview of the project's structure:

```
bettermode-mimzand-react-ts-tailwind/
├── public/             # Static assets
├── src/
│   ├── api/            # GraphQl queries, mutations and all related things
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── App.tsx         # Root component
│   ├── main.tsx        # Main entry point
│   └── index.css       # Tailwind CSS imports and global styles
├── .eslintrc           # ESLint configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── package.json        # Project dependencies and scripts
```

## Usage

Run the development server with:

```bash
yarn dev
```

Build for production:

```bash
yarn build
```

Preview the production build:

```bash
yarn preview
```

## Available Scripts

`yarn dev`: Starts the development server.

`yarn build`: Builds the app for production.

`yarn preview`: Previews the production build.

`yarn lint`: Runs ESLint to lint your code.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new feature branch.
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

```

Feel free to customize the template with project-specific information!
```
