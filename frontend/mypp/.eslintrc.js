module.exports = {
  extends: ['react-app', 'react-app/jest'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
        createDefaultProgram: true,
      },
      rules: {
        // Add any TypeScript-specific rules here if needed
      },
    },
  ],
};