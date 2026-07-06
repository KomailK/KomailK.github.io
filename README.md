# Portfolio Cybersécurité — Komail Kassimaly

Portfolio professionnel bilingue (FR/EN) présentant mon parcours en cybersécurité : expériences (analyste SOC N1/N2 chez ITrust, DMG Media), projets techniques, progression sur TryHackMe / HTB Academy / Root Me, et certifications.

## Stack

- React 18 + Vite
- Tailwind CSS
- i18next / react-i18next (FR/EN)
- Framer Motion (animations au scroll)
- React Icons
- GitHub Pages (`gh-pages`)

## Installation

```bash
npm install
```

## Développement local

```bash
npm run dev
```

Ouvre le site sur `http://localhost:5173`.

## Personnalisation

Tout le contenu éditable se trouve dans :

- `src/data/experiences.js` — expériences professionnelles
- `src/data/projects.js` — projets (mettre à jour `github` avec une URL de repo pour afficher le bouton GitHub)
- `src/data/certifications.js` — certifications
- `src/data/platforms.js` — TryHackMe / HTB Academy / Root Me
- `src/locales/fr.json` et `src/locales/en.json` — tous les textes de l'interface

## Build

```bash
npm run build
```

Génère le site statique dans `dist/`.

## Déploiement sur GitHub Pages

Ce projet est configuré pour être publié comme repo utilisateur `KomailK.github.io` (`base: '/'` dans `vite.config.js`).

1. Créer le repo GitHub `KomailK.github.io` et pousser ce projet sur la branche `main`.
2. Déployer manuellement :

   ```bash
   npm run deploy
   ```

   Cette commande build le projet et publie le contenu de `dist/` sur la branche `gh-pages`.

3. Ou laisser le workflow GitHub Actions (`.github/workflows/deploy.yml`) déployer automatiquement à chaque push sur `main`.
4. Dans les paramètres du repo GitHub → **Pages**, sélectionner la branche `gh-pages` comme source (si déploiement manuel via `gh-pages`), ou laisser GitHub Actions gérer le déploiement.

Le site sera disponible sur `https://komailk.github.io`.
