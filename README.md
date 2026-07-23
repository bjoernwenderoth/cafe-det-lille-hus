# Café Det Lille Hus

Website für das Café Det Lille Hus, gebaut mit [Astro](https://astro.build) und [Tailwind CSS v4](https://tailwindcss.com).

## Tech-Stack

- **Astro** (TypeScript, strict)
- **Tailwind CSS v4** via `@tailwindcss/vite`
- **astro-icon** für Icons (Iconify-Set: `mdi`)
- **pnpm** als Paketmanager

## Projektstruktur

```
/
├── public/
│   ├── favicon.png
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── 404.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## Befehle

Alle Befehle werden im Projektstammverzeichnis ausgeführt:

| Befehl             | Aktion                                              |
| :----------------- | :--------------------------------------------------- |
| `pnpm install`      | Installiert die Abhängigkeiten                       |
| `pnpm dev`          | Startet den lokalen Entwicklungsserver               |
| `pnpm build`        | Prüft Typen und baut die Seite nach `./dist/`        |
| `pnpm preview`      | Zeigt den Build lokal in einer Vorschau an           |
| `pnpm astro ...`    | Führt Astro-CLI-Befehle aus, z.B. `astro add`        |

## Deployment

Das Projekt wird automatisch per GitHub Actions (`.github/workflows/deploy.yml`) auf GitHub Pages deployt, sobald auf `main` gepusht wird. Details zur Aktivierung siehe unten.
