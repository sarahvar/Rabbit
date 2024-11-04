<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
=======
4) Résolution de problème

Ecrire 4 classes : 

chasseur
{
  nombre de balles [0-10]
  niveau de faim [0-10]
  nombre de kilomètres parcourus [0-10]
  position xy
  void chasser();
}

lapin
{
  rapidité [0-10]
  couleur [blanc/brun]
  nombre de kilomètres parcourus [0-10]
  position xy
  void poursuivi();
}

terrier
{
  position xy
  bool occuppé
}

foret
{
  terriers[]
  lapins[]
  kilomètres carrés totaux [1-10]
  nombre d'arbres pouvant cacher un lapin [0-1000]
}

- Créer 1 chasseur et 1 forêt avec des lapins et des terriers
- Lorsque la méthode "chasser" est appelée une routine automatique va faire vivre les personnages qui vont intéragir entre eux (si un lapin est vu, le nombre de balles doit diminuer, le nombre de kilomètres augmente aléatoirement, un lapin proche d'un terrier peut s'y réfugier s'il est vide...)

Conditions obligatoires :
- Il faut choisir les paramètres initiaux de telle sorte que le chasseur perde à tous les coups et les lapins soient toujours sauvés de justesse (ça ne doit pas être trop facile pour les lapins)
- rédiger l'intégralité du code source avec des termes anglais (noms de variables, de classe, commentaires, noms de fichiers)
>>>>>>> 4edd1a89930ebe806aad99ac3b699a38c20e7d4b
