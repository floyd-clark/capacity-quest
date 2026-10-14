# AI Infrastructure: The Capacity Quest

**[Play in your browser](https://floyd-clark.github.io/capacity-quest/)** · [Game guide](capacity-quest/README.md) · [Complex problem map](capacity-quest/COMPLEX_PROBLEM_MAP.md)

An original platformer and hands-on engineering study game from Signal Intelligence. Investigate the dependency that blocks useful capacity, bound the risk, obtain the right decision, and verify the outcome.

- Six worlds, 24 campaign stages, 72 base engineering scenarios and six integrated boss gates.
- Fourteen hands-on missions: inspect clickable infrastructure pictures, compare evidence, calculate a constraint, quarantine cohorts, connect decision rights, sequence recovery and compose a leadership update.
- Seven original offline infrastructure illustrations: cooling, power, manufacturing, supply, firmware, fabric and TPU/workload systems.
- Deep Library: 224 source cases across 56 archetypes and four lifecycle contexts, with domain/lifecycle filters.
- Interview Sprint, Engineering Showcase, local progress, printable decision memos and 30/90-second interview drills.

All incidents, telemetry, spend caps and schedules are fictional teaching examples. Source concepts are adapted from Floyd S. Clark II's 2026 *AI Infrastructure: Human Connective Tissue* field manual and the user-supplied Deep Library. This is an independent study simulation, not employer training or certification. Synthetic calculations are not real site operating instructions.

## Play locally or share a link
The hosted game runs at the link above after the Pages workflow succeeds. For offline use, download or clone the repository, open `capacity-quest/index.html` or use `capacity-quest/PLAY_GAME.bat` on Windows. Keep the JavaScript, CSS and `assets/` folder together. No accounts, game server, API keys or runtime installation are required.

Controls: A/D or arrows move; Space/W/Up jump; Shift runs; E opens a nearby station; Esc pauses; H hints; M toggles sound. Menus and hands-on controls support Tab/Enter, labeled inputs, and movement buttons as alternatives to dragging. Settings can switch hands-on missions back to classic answer cards. Progress stays in this browser's localStorage and is never uploaded.

## Development and verification
Node 24 is used for development checks; it is not needed to play.

```sh
npm test
npm run build
```

`npm run build` creates `_site/` from an explicit runtime allowlist. Manuscripts, local test exports, authoring helpers and machine-specific reports are excluded. The GitHub Actions workflow validates the content and builds that same static artifact before deploying the default branch to GitHub Pages.

Browser tests are optional development tools:

```sh
npm install
npx playwright install chromium
npm run test:browser
```

Set `CQ_BROWSER` to use another installed Chromium/Edge executable. Tests drive actual keyboard/mouse controls; no teleport or unlock hooks exist. Unit tests cover all scenario registries, state gates, arithmetic and both advanced hold/release branches. Browser regression covers all original campaign stages and hands-on missions plus representative library cases; it does not claim human timing or full accessibility certification.

After deployment, `npm run test:hosted` checks the public HTTPS page, all seven pictures and a complete hands-on mission. Pushing the repository's default branch runs validation and republishes the game automatically.

## Scope and provenance
The original campaign's 72 mechanisms, the library's 56 archetypes × four contexts, and the 14 additional problem sets are different counting units. A full hold is a legitimate learning outcome and never claims accepted new service capacity. Read [limitations](capacity-quest/KNOWN_LIMITATIONS.md), [library integration](capacity-quest/LIBRARY_INTEGRATION.md) and [licenses/attribution](capacity-quest/LICENSES.md).
