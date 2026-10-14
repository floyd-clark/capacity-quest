# AI Infrastructure: The Capacity Quest

An original, offline browser platformer and engineering study simulation. All incidents and telemetry are synthetic. Frameworks are adapted from Floyd S. Clark II's 2026 *AI Infrastructure: Human Connective Tissue* manuscript; training incidents are not quotations or claims of real employer events.

## Launch on Windows
Extract the entire release ZIP. Open `capacity-quest/PLAY_GAME.bat` or double-click `index.html`. No server, Node, Python, account, installation or internet is needed to play. Keep all eight runtime files together: `index.html`, `style.css`, `content.js`, `engine.js`, `lab-content.js`, `lab-engine.js`, `lab-adapter.js` and `game.js`. Use a current Edge, Chrome or Firefox desktop browser.

## Controls
A/D or arrows move. Shift runs. Space/W/Up jumps (release early for a shorter jump). E opens a nearby station. 1–4 chooses an action. Tab/Enter operates all menus. Esc pauses or returns from a panel. R returns to the checkpoint. H provides a hint. M toggles sound, initially muted. The nearby-station button is an alternative to E. Game panels suspend physics and active traversal timing. Elapsed study time includes reading.

Close each level's three mandatory diagnostic gates, then reach the service door. The checkpoint activates after station two. Each station requires a discriminating test, bounded containment, ownership/authority and verification. Wrong choices hold the gate and lower the path rubric; retries are unlimited. Boss levels add an integrated acceptance decision after three physically traversed encounters.

## Study modes
Campaign: six worlds, 24 stages, 72 mechanisms and 288 primary decisions plus six final boss decisions. World Select makes every stage immediately available. Sprint selects eight balanced mechanisms. Showcase covers stale readiness, unowned acceptance and the Green Dashboard failure. Modes end with debriefs and local exports. Durations are study targets, not measured guarantees; stop to explain your reasoning aloud.

Progress shows per-domain encounter counts and mean action-path rubric. 30/90-second drills have a timer, text drafting and a self-assessment checklist; no microphone or automated semantic grading is used. Settings provide relaxed gap rescue, unlimited retries, reduced motion, high contrast, large diagnostic text and mute.

## Saves and export
Progress is stored only in this browser's localStorage under `capacityQuest`. File-mode storage policies vary by browser and location: moving the folder or changing browsers may create a separate save. If storage is blocked, a visible SESSION ONLY status appears and the game stays playable. Progress → Export JSON saves a local study record. Printable report exports an HTML document: open it and use Print to paper/PDF. Reports escape user text. Reset requires an explicit delete-save choice. There is no save import in this version.

## Troubleshooting
If scripts do not load, extract the ZIP rather than opening files inside the archive; keep all eight runtime files together. If the browser blocks file scripts, use a browser/profile that permits local HTML. Focus the game after returning from another app; blur automatically pauses. Scroll a long diagnostic panel if large text makes it taller. Game audio uses original short synthesized tones after interaction and can remain muted. Do not enable unsafe electrical/cooling actions in real systems based on training text: all facility actions here require qualified procedures and authority.

## Content and extension
`content.js` holds the serializable world/scenario registry. Add a scenario with a unique ID, observation, evidence result, discriminating test, containment, owner, verification, chapters and frameworks. Map exactly three scenario IDs into a campaign level. Maintain original mechanisms rather than counting reworded copies. The generic four-phase engine is in `game.js`; changes to branches must preserve evidence-before-acceptance. Run `node tests/content.cjs` with an existing Node installation for authoring validation. Browser tests require Playwright and a locally installed browser for development only; their package path is specific to the authoring environment and should be adjusted by maintainers. Runtime has zero dependencies.

See TEST_RESULTS.md, REQUIREMENTS_TRACEABILITY.md and KNOWN_LIMITATIONS.md for the actual verification boundary.

## New: more consequential problem sets
Refresh the local page after updating. Menu **09 — Complexity Lab** opens 14 six-decision problems with arithmetic, diagnostic-time tradeoffs, bounded scope versus full hold, authority, verification and quantified executive updates. Menu **10 — Deep Library** opens all 224 supplied lifecycle cases, filterable by domain and lifecycle (56 archetypes in four contexts).

Use CX-07 for a dated 29-week supply/integration path with only 22 weeks available; CX-08 for expected-value versus technical admissibility; CX-01/CX-02 for thermal boundaries and workload-sized acceptance; CX-13/CX-14 for roofline and memory/sharding dependencies. Explain why your decision changes useful scope, cost and the next decision date. Export the decision memo from the completion panel. Full hold is a valid learning outcome and reports zero newly accepted scope.

New modes use the same local save without deleting campaign history. Library and lab completion counts are separate from the 24 campaign stages and 72 base mechanisms. Lab mid-stage state is session-only, like base campaign mid-stage state. See LIBRARY_INTEGRATION.md and COMPLEX_PROBLEM_MAP.md for provenance, source IDs and simulation limits.

## New: clickable pictures and hands-on activities
The featured Hands-on missions picture and menu 09 now open illustrated mission cards. All fourteen labs use six activities by default: diagram probes, numeric calculation, cohort quarantine, decision-rights wiring, recovery sequencing and an executive brief composer. Select or drag roles, and drag recovery cards or use their earlier/later buttons. Campaign/library encounters also have clickable evidence pictures. See INTERACTION_GUIDE.md.

Settings can switch back to classic cards and return to the current field session. Progress remains local. Keep all runtime files **and the assets folder** together when copying the game. The repository build publishes only a runtime allowlist and the seven original SVGs.
