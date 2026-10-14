"use strict";
const CONTENT = {
  "worlds": [
    {
      "id": 1,
      "name": "Silicon Swamp",
      "color": "#35C990",
      "levels": [
        {
          "id": "1-1",
          "name": "Boot Signature Marsh",
          "scenarios": [
            "W1-01",
            "W1-02",
            "W1-03"
          ],
          "boss": false
        },
        {
          "id": "1-2",
          "name": "HBM Error Mine",
          "scenarios": [
            "W1-04",
            "W1-05",
            "W1-06"
          ],
          "boss": false
        },
        {
          "id": "1-3",
          "name": "Lot Correlation Bog",
          "scenarios": [
            "W1-07",
            "W1-08",
            "W1-09"
          ],
          "boss": false
        },
        {
          "id": "1-4",
          "name": "Memory Wall Castle",
          "scenarios": [
            "W1-10",
            "W1-11",
            "W1-12"
          ],
          "boss": true
        }
      ]
    },
    {
      "id": 2,
      "name": "Rackworks Factory",
      "color": "#F5B94B",
      "levels": [
        {
          "id": "2-1",
          "name": "BOM Conveyor",
          "scenarios": [
            "W2-01",
            "W2-02",
            "W2-03"
          ],
          "boss": false
        },
        {
          "id": "2-2",
          "name": "Firmware Foundry",
          "scenarios": [
            "W2-04",
            "W2-05",
            "W2-06"
          ],
          "boss": false
        },
        {
          "id": "2-3",
          "name": "Qualification Platform",
          "scenarios": [
            "W2-07",
            "W2-08",
            "W2-09"
          ],
          "boss": false
        },
        {
          "id": "2-4",
          "name": "Integration Monster Forge",
          "scenarios": [
            "W2-10",
            "W2-11",
            "W2-12"
          ],
          "boss": true
        }
      ]
    },
    {
      "id": 3,
      "name": "Thermal Caverns",
      "color": "#F06873",
      "levels": [
        {
          "id": "3-1",
          "name": "Power Basis Pass",
          "scenarios": [
            "W3-01",
            "W3-02",
            "W3-03"
          ],
          "boss": false
        },
        {
          "id": "3-2",
          "name": "CDU River",
          "scenarios": [
            "W3-04",
            "W3-05",
            "W3-06"
          ],
          "boss": false
        },
        {
          "id": "3-3",
          "name": "Redundant Cooling Rift",
          "scenarios": [
            "W3-07",
            "W3-08",
            "W3-09"
          ],
          "boss": false
        },
        {
          "id": "3-4",
          "name": "Thermal Dragon Lair",
          "scenarios": [
            "W3-10",
            "W3-11",
            "W3-12"
          ],
          "boss": true
        }
      ]
    },
    {
      "id": 4,
      "name": "Fabric Skyway",
      "color": "#21D4E8",
      "levels": [
        {
          "id": "4-1",
          "name": "Link-Light Bridge",
          "scenarios": [
            "W4-01",
            "W4-02",
            "W4-03"
          ],
          "boss": false
        },
        {
          "id": "4-2",
          "name": "Optics Aerie",
          "scenarios": [
            "W4-04",
            "W4-05",
            "W4-06"
          ],
          "boss": false
        },
        {
          "id": "4-3",
          "name": "Topology Tempest",
          "scenarios": [
            "W4-07",
            "W4-08",
            "W4-09"
          ],
          "boss": false
        },
        {
          "id": "4-4",
          "name": "Fabric Phantom Citadel",
          "scenarios": [
            "W4-10",
            "W4-11",
            "W4-12"
          ],
          "boss": true
        }
      ]
    },
    {
      "id": 5,
      "name": "Commissioning Kingdom",
      "color": "#318BF5",
      "levels": [
        {
          "id": "5-1",
          "name": "Delivery Docks",
          "scenarios": [
            "W5-01",
            "W5-02",
            "W5-03"
          ],
          "boss": false
        },
        {
          "id": "5-2",
          "name": "Acceptance Gate",
          "scenarios": [
            "W5-04",
            "W5-05",
            "W5-06"
          ],
          "boss": false
        },
        {
          "id": "5-3",
          "name": "Operations Outpost",
          "scenarios": [
            "W5-07",
            "W5-08",
            "W5-09"
          ],
          "boss": false
        },
        {
          "id": "5-4",
          "name": "Green Dashboard Castle",
          "scenarios": [
            "W5-10",
            "W5-11",
            "W5-12"
          ],
          "boss": true
        }
      ]
    },
    {
      "id": 6,
      "name": "Service Citadel",
      "color": "#b8a1ff",
      "levels": [
        {
          "id": "6-1",
          "name": "Telemetry Towers",
          "scenarios": [
            "W6-01",
            "W6-02",
            "W6-03"
          ],
          "boss": false
        },
        {
          "id": "6-2",
          "name": "Rollback Ramparts",
          "scenarios": [
            "W6-04",
            "W6-05",
            "W6-06"
          ],
          "boss": false
        },
        {
          "id": "6-3",
          "name": "Decision Council",
          "scenarios": [
            "W6-07",
            "W6-08",
            "W6-09"
          ],
          "boss": false
        },
        {
          "id": "6-4",
          "name": "Capacity Blackout Fortress",
          "scenarios": [
            "W6-10",
            "W6-11",
            "W6-12"
          ],
          "boss": true
        }
      ]
    }
  ],
  "scenarios": [
    {
      "id": "W1-01",
      "title": "Correctable HBM Burst:",
      "brief": "Correctable memory errors cluster after a workload profile change. Separate recoverable telemetry, environmental context, and genuine device risk; select targeted reproduction rather than fleetwide replacement.",
      "world": 0,
      "level": "1-1",
      "synthetic": true,
      "test": "Compare raw correctable counts per workload-hour against temperature and the previous profile",
      "contain": "Restrict the new workload on the affected cohort while validation reproduces",
      "verify": "Representative workload stays inside the approved RAS limits across the affected cohort",
      "owner": "Reliability lead",
      "chapters": [
        3,
        7,
        8,
        10
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "Supplier loop"
      ],
      "boss": false,
      "evidence": "Correctable counts rise only on profile B; no uncorrectable events; temperature is in envelope. The same device returns to baseline on profile A."
    },
    {
      "id": "W1-02",
      "title": "Boot Signature Mismatch:",
      "brief": "One board revision fails secure/standard boot after a BIOS transition. Compare version lineage and known-good configuration; avoid blaming the GPU without evidence.",
      "world": 0,
      "level": "1-1",
      "synthetic": true,
      "test": "Diff signed BIOS images and board-revision boot logs against a known-good pair",
      "contain": "Hold the incompatible board/image pair; preserve the validated baseline",
      "verify": "Both boot modes pass on every supported board revision with signed image lineage",
      "owner": "Reliability lead",
      "chapters": [
        3,
        7,
        8,
        10
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "Supplier loop"
      ],
      "boss": false,
      "evidence": "Board rev C fails only with BIOS r8; rev B boots on r8, and rev C boots on signed r7. GPU identity alone does not predict failure."
    },
    {
      "id": "W1-03",
      "title": "Silent Scraper:",
      "brief": "Error collection says healthy while raw RAS counts rise. Find a stale monitoring pipeline; restore trustworthy observation before making allocation decisions.",
      "world": 0,
      "level": "1-1",
      "synthetic": true,
      "test": "Reconcile raw device RAS events with scraper offsets and timestamps",
      "contain": "Mark allocation health UNKNOWN and restore collection before trusting green",
      "verify": "Injected test errors appear in the dashboard within the agreed collection window",
      "owner": "Reliability lead",
      "chapters": [
        3,
        7,
        8,
        10
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "Supplier loop"
      ],
      "boss": false,
      "evidence": "Raw RAS timestamp advances while dashboard last-sample time remains unchanged. A test error is absent from the collector output."
    },
    {
      "id": "W1-04",
      "title": "Lot Boundary:",
      "brief": "Failures cluster by HBM supplier lot. Identify known affected/clean/suspect/unknown populations and quarantine only the evidentially justified blast radius.",
      "world": 0,
      "level": "1-2",
      "synthetic": true,
      "test": "Join serials to supplier lot genealogy and control for workload exposure",
      "contain": "Quarantine affected and unresolved lots; keep traced clean stock available",
      "verify": "Independent screening demonstrates clean disposition and every serial has a lot record",
      "owner": "Reliability lead",
      "chapters": [
        3,
        7,
        8,
        10
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "Supplier loop"
      ],
      "boss": false,
      "evidence": "Failures map to lot L2 after exposure normalization. L1 controls pass; six units have unresolved genealogy and cannot be called clean."
    },
    {
      "id": "W1-05",
      "title": "Intermittent Device Drop:",
      "brief": "GPU drops off PCIe during thermal cycling. Compare power, link retrain, event logs, and mechanical context before attributing to one subsystem.",
      "world": 0,
      "level": "1-2",
      "synthetic": true,
      "test": "Time-align PCIe retrains, rail telemetry and thermal-cycle logs on a controlled unit",
      "contain": "Drain the affected units; compare controlled link and power changes one at a time",
      "verify": "Qualified thermal cycles complete without device loss and with reliable event capture",
      "owner": "Reliability lead",
      "chapters": [
        3,
        7,
        8,
        10
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "Supplier loop"
      ],
      "boss": false,
      "evidence": "Device loss aligns with link retrain during temperature transition; rail readings are inconclusive. A controlled mechanical/link comparison remains necessary."
    },
    {
      "id": "W1-06",
      "title": "MBIST Pass, SLT Fail:",
      "brief": "Manufacturing test passes while system-level workload exposes failures. Explain test coverage boundaries and representative evidence.",
      "world": 0,
      "level": "1-2",
      "synthetic": true,
      "test": "Map MBIST coverage to the failing system-level workload and reproduce on a control",
      "contain": "Hold the system-level gate while preserving component test evidence",
      "verify": "Representative SLT passes across the qualified environmental and workload envelope",
      "owner": "Reliability lead",
      "chapters": [
        3,
        7,
        8,
        10
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "Supplier loop"
      ],
      "boss": false,
      "evidence": "MBIST covers memory patterns at manufacturing conditions. SLT fails a sustained workload path absent from that coverage."
    },
    {
      "id": "W1-07",
      "title": "Driver-Model Incompatibility:",
      "brief": "Regression occurs only with a new driver and kernel. Build a version matrix; choose controlled rollback or qualification hold.",
      "world": 0,
      "level": "1-3",
      "synthetic": true,
      "test": "Test old/new driver against old/new kernel with fixed firmware and workload",
      "contain": "Roll back only the incompatible pair through the approved change process",
      "verify": "Supported driver/kernel combinations pass the regression suite and staged canary",
      "owner": "Reliability lead",
      "chapters": [
        3,
        7,
        8,
        10
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "Supplier loop"
      ],
      "boss": false,
      "evidence": "Only the new-driver/new-kernel cell fails; the other three version combinations pass the same workload. Firmware is held constant."
    },
    {
      "id": "W1-08",
      "title": "Firmware RAS Blind Spot:",
      "brief": "Firmware masks an error channel while the hardware population may still be risky. Distinguish telemetry fix from hardware correction.",
      "world": 0,
      "level": "1-3",
      "synthetic": true,
      "test": "Inject a known RAS event and compare firmware output with independent instrumentation",
      "contain": "Contain suspect hardware even after restoring the telemetry channel",
      "verify": "Telemetry injection passes AND the affected hardware cohort clears qualification",
      "owner": "Reliability lead",
      "chapters": [
        3,
        7,
        8,
        10
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "Supplier loop"
      ],
      "boss": false,
      "evidence": "An injected RAS event appears on independent instrumentation but is absent from firmware output. Hardware health remains unresolved."
    },
    {
      "id": "W1-09",
      "title": "Screening Tradeoff:",
      "brief": "A new screen reduces throughput but isolates likely suspect material. Calculate decision impact with explicit uncertainty; preserve safe supply.",
      "world": 0,
      "level": "1-3",
      "synthetic": true,
      "test": "Measure screen sensitivity and escape rate against throughput on a labeled sample",
      "contain": "Use qualified clean supply; hold uncertain material rather than remove the screen",
      "verify": "Screen efficacy and throughput tradeoff are reviewed with uncertainty and disposition authority",
      "owner": "Reliability lead",
      "chapters": [
        3,
        7,
        8,
        10
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "Supplier loop"
      ],
      "boss": false,
      "evidence": "Labeled suspect samples are caught by the new screen, with lower hourly output. Escape uncertainty remains on a small sample."
    },
    {
      "id": "W1-10",
      "title": "Uncorrectable Threshold:",
      "brief": "A small number of uncorrectable events appears after aggressive stress. Define severity, affected cohorts, and the safe disposition gate.",
      "world": 0,
      "level": "1-4",
      "synthetic": true,
      "test": "Correlate uncorrectable events with stress envelope and serial-level failure severity",
      "contain": "Remove affected devices from service pending qualified severity disposition",
      "verify": "Authorized reliability owner approves disposition after representative stress and RAS review",
      "owner": "Reliability lead",
      "chapters": [
        3,
        7,
        8,
        10
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "Supplier loop"
      ],
      "boss": false,
      "evidence": "Uncorrectable events occur on two stressed serials. Severity and qualified stress envelope require reliability review, not fleetwide inference."
    },
    {
      "id": "W1-11",
      "title": "Supplier Yield Disagreement:",
      "brief": "Supplier and validation data disagree about pass/fail population. Establish comparable definitions, provenance, and an independent closure test.",
      "world": 0,
      "level": "1-4",
      "synthetic": true,
      "test": "Reconcile denominator, test revision and serial IDs between supplier and internal data",
      "contain": "Hold disputed population; jointly define an independent retest protocol",
      "verify": "Both parties accept the same serial-level retest results and preventive action evidence",
      "owner": "Reliability lead",
      "chapters": [
        3,
        7,
        8,
        10
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "Supplier loop"
      ],
      "boss": false,
      "evidence": "Supplier yield excludes retests while internal yield counts first-pass failures. Serial-level denominators differ, so percentages are not comparable."
    },
    {
      "id": "W1-12",
      "title": "BOSS Memory Wall:",
      "brief": "Integrated HBM/RAS/firmware/supplier problem. Survive three evolving phases: contain, discriminate cause, authorize release with acceptance evidence.",
      "world": 0,
      "level": "1-4",
      "synthetic": true,
      "test": "Cross-correlate lot, firmware visibility and workload RAS using independent controls",
      "contain": "Isolate suspect lots and freeze firmware drift while supplier and validation leads investigate",
      "verify": "Reliability authority accepts screened cohort, visible RAS and representative workload results",
      "owner": "Reliability lead",
      "chapters": [
        3,
        7,
        8,
        10
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "Supplier loop"
      ],
      "boss": true,
      "evidence": "Suspect lot events coincide with a firmware visibility gap; clean-lot controls remain stable. Screening and telemetry closure are separate gates."
    },
    {
      "id": "W2-01",
      "title": "BOM Split-Brain:",
      "brief": "Two supposedly identical racks carry different switch or accelerator revisions. Identify governing configuration and stop silent mixing.",
      "world": 1,
      "level": "2-1",
      "synthetic": true,
      "test": "Diff as-built BOM and serial revision against the approved rack configuration",
      "contain": "Segregate mixed revisions; hold substitution until configuration authority reviews",
      "verify": "Every released rack matches a qualified BOM and approved deviation record",
      "owner": "Rack qualification lead",
      "chapters": [
        6,
        7,
        8,
        10,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": false,
      "evidence": "As-built racks contain switch rev A and rev B under the same configuration label. Only rev A has signed integrated qualification."
    },
    {
      "id": "W2-02",
      "title": "EVT-to-DVT Leap:",
      "brief": "Prototype boots but reliability/stress coverage is insufficient. Define which DVT evidence is essential before design freeze.",
      "world": 1,
      "level": "2-1",
      "synthetic": true,
      "test": "Review DVT stress, reliability and interface coverage against design requirements",
      "contain": "Hold design freeze; offer a limited prototype scope with explicit restrictions",
      "verify": "DVT owner signs representative reliability and interface evidence before freeze",
      "owner": "Rack qualification lead",
      "chapters": [
        6,
        7,
        8,
        10,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": false,
      "evidence": "Prototype boot passes; sustained stress and interface failure recovery are absent from the DVT matrix. Boot is functional evidence only."
    },
    {
      "id": "W2-03",
      "title": "PVT Yield Drift:",
      "brief": "Manufacturing ramp shows intermittent failures that did not appear in engineering builds. Triangulate process, fixture, lot, and test changes.",
      "world": 1,
      "level": "2-1",
      "synthetic": true,
      "test": "Compare fixture revision, process shift and lot genealogy in factory versus engineering units",
      "contain": "Contain failing production lots while running control units through both lines",
      "verify": "Production process demonstrates stable yield with validated tests and serial traceability",
      "owner": "Rack qualification lead",
      "chapters": [
        6,
        7,
        8,
        10,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": false,
      "evidence": "Factory failures follow fixture revision F3 on the night shift, while lot mix also changed. A controlled fixture/process comparison is required."
    },
    {
      "id": "W2-04",
      "title": "Firmware Matrix Collision:",
      "brief": "BMC, NIC, BIOS, and accelerator firmware versions pass independently but fail together. Build and enforce a supported matrix.",
      "world": 1,
      "level": "2-2",
      "synthetic": true,
      "test": "Exercise BMC/NIC/BIOS/accelerator combinations against the supported compatibility table",
      "contain": "Roll back to the qualified matrix; freeze unreviewed component updates",
      "verify": "Integrated stress and recovery pass on a version-pinned full rack matrix",
      "owner": "Rack qualification lead",
      "chapters": [
        6,
        7,
        8,
        10,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": false,
      "evidence": "NIC r5 passes alone but recovery fails with BIOS r9/BMC r4. The signed full-rack matrix specifies NIC r4."
    },
    {
      "id": "W2-05",
      "title": "Factory Green, Site Red:",
      "brief": "Supplier acceptance tests do not match the deployment workload. Add integrated, representative site acceptance.",
      "world": 1,
      "level": "2-2",
      "synthetic": true,
      "test": "Replay site workload on factory configuration and compare acceptance coverage",
      "contain": "Hold site service declaration and add the missing integrated workload gate",
      "verify": "Site authority accepts representative end-to-end workload and operational evidence",
      "owner": "Rack qualification lead",
      "chapters": [
        6,
        7,
        8,
        10,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": false,
      "evidence": "Factory tests use brief isolated traffic; the site workload fails sustained collectives. Factory exit coverage does not prove service acceptance."
    },
    {
      "id": "W2-06",
      "title": "Late ECO:",
      "brief": "A mechanical change helps cooling but invalidates cable reach and qualification. Trace affected consumers and control engineering change order.",
      "world": 1,
      "level": "2-2",
      "synthetic": true,
      "test": "Trace ECO effects into airflow, cable bend/reach and affected qualification tests",
      "contain": "Hold changed assemblies; choose controlled requalification versus schedule slip",
      "verify": "Change authority approves revised interfaces and every impacted qualification result",
      "owner": "Rack qualification lead",
      "chapters": [
        6,
        7,
        8,
        10,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": false,
      "evidence": "The revised bracket improves airflow but changes cable bend radius and reach. The existing qualification report predates the ECO."
    },
    {
      "id": "W2-07",
      "title": "Power Shelf Mismatch:",
      "brief": "Rack-side power supply shares a nominal rating but has different derating/connector assumptions. Revalidate integration boundaries.",
      "world": 1,
      "level": "2-3",
      "synthetic": true,
      "test": "Compare power-shelf derating curves, connector ratings and ambient assumptions",
      "contain": "Hold incompatible shelves; request qualified electrical integration review",
      "verify": "Electrical owner signs full-load envelope and connector integration evidence",
      "owner": "Rack qualification lead",
      "chapters": [
        6,
        7,
        8,
        10,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": false,
      "evidence": "Shelf nominal wattage matches; hot-ambient derating and connector qualification differ. Nominal label equality does not establish compatibility."
    },
    {
      "id": "W2-08",
      "title": "Test Fixture Defect:",
      "brief": "Test stations flag an apparent hardware defect that follows the fixture. Use control units, swaps, and instrumentation credibility.",
      "world": 1,
      "level": "2-3",
      "synthetic": true,
      "test": "Run known-good units through suspect/control fixtures and swap instrumentation",
      "contain": "Quarantine the fixture; avoid scrapping units based on an untrusted station",
      "verify": "Calibrated fixture agrees with independent controls and affected units are retested",
      "owner": "Rack qualification lead",
      "chapters": [
        6,
        7,
        8,
        10,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": false,
      "evidence": "Known-good units fail on station F2 and pass on F1; the failure follows the fixture. Failed units still need independent disposition."
    },
    {
      "id": "W2-09",
      "title": "Unowned Handoff:",
      "brief": "Rack passed factory, but no team owns firmware image signoff at site. Name ownership and evidence with a decision deadline.",
      "world": 1,
      "level": "2-3",
      "synthetic": true,
      "test": "Trace factory-image handoff records to site signoff and decision rights",
      "contain": "Assign a site firmware acceptance owner and hold deployment until signoff",
      "verify": "Named authority signs verified image hash, matrix and site acceptance results",
      "owner": "Rack qualification lead",
      "chapters": [
        6,
        7,
        8,
        10,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": false,
      "evidence": "Factory image hash is recorded, but the site acceptance record has no signatory. Image existence is not approval authority."
    },
    {
      "id": "W2-10",
      "title": "Vendor Lead-Time Trap:",
      "brief": "Long lead materials conflict with unresolved design gate. Compare buy-at-risk, split release, and hold options transparently.",
      "world": 1,
      "level": "2-4",
      "synthetic": true,
      "test": "Model lead-time and exposure for buy-at-risk, split release and hold",
      "contain": "Seek authorized bounded procurement with cost cap; hold unqualified deployment",
      "verify": "Decision authority accepts exposure and qualified configuration gates release of material",
      "owner": "Rack qualification lead",
      "chapters": [
        6,
        7,
        8,
        10,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": false,
      "evidence": "Long-lead parts arrive after the desired wave if purchase waits; design remains unqualified. Buy-at-risk exposes cost, not permission to deploy."
    },
    {
      "id": "W2-11",
      "title": "Fault Repro Shrinks:",
      "brief": "A manufacturing defect reproduces only on one rack cooling profile. Distinguish physics from test noise and set the acceptance environment.",
      "world": 1,
      "level": "2-4",
      "synthetic": true,
      "test": "Reproduce the defect with controlled cooling profiles and calibrated flow",
      "contain": "Hold the failing profile; retain the qualified envelope while investigating",
      "verify": "Rack passes the specified field cooling envelope with the defect mechanism excluded",
      "owner": "Rack qualification lead",
      "chapters": [
        6,
        7,
        8,
        10,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": false,
      "evidence": "The defect appears only at the field low-flow profile and vanishes at factory flow. The field operating condition is within the proposed service scope."
    },
    {
      "id": "W2-12",
      "title": "BOSS Integration Monster:",
      "brief": "Revision, qualification, manufacturing, and field readiness conflict. Win by closing the configuration/evidence/owner/change chain.",
      "world": 1,
      "level": "2-4",
      "synthetic": true,
      "test": "Join BOM lineage, ECO impact, DVT gaps and site owner records",
      "contain": "Freeze mixed revisions and split qualified racks from unresolved assemblies",
      "verify": "Configuration and site authorities accept integrated stress, change closure and handoff",
      "owner": "Rack qualification lead",
      "chapters": [
        6,
        7,
        8,
        10,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": true,
      "evidence": "Racks span two BOMs, one late ECO and incomplete DVT records. No single current release record covers the assembled fleet."
    },
    {
      "id": "W3-01",
      "title": "Stale Power Basis:",
      "brief": "Site planning uses an earlier kW/rack assumption. Identify source version, electrical consequences, and approval authority.",
      "world": 2,
      "level": "3-1",
      "synthetic": true,
      "test": "Compare current rack demand envelope with the signed site power design revision",
      "contain": "Hold affected energization and request qualified electrical basis review",
      "verify": "Authorized site electrical owner accepts the updated load and protection study",
      "owner": "Qualified facility lead",
      "chapters": [
        9,
        5,
        7
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": false,
      "evidence": "The signed site study uses 80 kW/rack while the proposed configuration envelope is 120 kW/rack. These synthetic values are not site advice."
    },
    {
      "id": "W3-02",
      "title": "Cooling Flow Gap:",
      "brief": "CDU flow fails to meet the validated operating envelope. Compare loop conditions, telemetry, and approved settings; do not improvise unsafe controls.",
      "world": 2,
      "level": "3-1",
      "synthetic": true,
      "test": "Compare calibrated CDU flow, differential pressure and loop settings to qualification",
      "contain": "Reduce load within approved procedures; qualified cooling owner controls changes",
      "verify": "Validated flow and thermal envelope hold under representative rack load",
      "owner": "Qualified facility lead",
      "chapters": [
        9,
        5,
        7
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": false,
      "evidence": "Calibrated flow is below the qualified envelope under target load. The dashboard uses an older approved pump setting basis."
    },
    {
      "id": "W3-03",
      "title": "Leak-Sensor Disagreement:",
      "brief": "Two indicators conflict about a leak. Identify the authoritative alarm path, preserve safety, and request qualified validation.",
      "world": 2,
      "level": "3-1",
      "synthetic": true,
      "test": "Reconcile sensor alarms with the authoritative safety circuit and qualified inspection",
      "contain": "Follow site leak containment procedure; do not override an uncertain alarm",
      "verify": "Qualified safety owner verifies leak disposition and tests the authoritative alarm path",
      "owner": "Qualified facility lead",
      "chapters": [
        9,
        5,
        7
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": false,
      "evidence": "One leak indicator is active and another is clear. The authoritative safety-path validation has not been completed; absence of agreement is not clearance."
    },
    {
      "id": "W3-04",
      "title": "Redundancy Not Proven:",
      "brief": "Normal operation passes, but N+1 failover was never exercised. Determine realistic service acceptance under failure conditions.",
      "world": 2,
      "level": "3-2",
      "synthetic": true,
      "test": "Exercise approved cooling failover under representative load with qualified staff",
      "contain": "Hold redundancy claims; permit only explicitly accepted restricted service",
      "verify": "N+1 failover remains within thermal limits and is signed by facility authority",
      "owner": "Qualified facility lead",
      "chapters": [
        9,
        5,
        7
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": false,
      "evidence": "Normal-load cooling passes, but there is no witnessed loss-of-one-CDU test. N+1 is documented design intent, not demonstrated behavior."
    },
    {
      "id": "W3-05",
      "title": "Thermal Throttle Cascade:",
      "brief": "Multiple racks throttle only under a representative AI load. Isolate facility versus rack cooling versus workload hypotheses.",
      "world": 2,
      "level": "3-2",
      "synthetic": true,
      "test": "Time-align rack inlet, return, flow and workload throttle telemetry across racks",
      "contain": "Limit affected load while isolating facility and rack cooling contributions",
      "verify": "Sustained AI load passes thermal criteria across racks and facility conditions",
      "owner": "Qualified facility lead",
      "chapters": [
        9,
        5,
        7
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": false,
      "evidence": "Throttling aligns across racks during target AI load; inlet and flow trends change together. Rack and facility causes remain separable hypotheses."
    },
    {
      "id": "W3-06",
      "title": "Liquid-Loop Ownership:",
      "brief": "Facility and rack teams disagree about CDU interface responsibility. Create a clear technical boundary, tests, and escalation.",
      "world": 2,
      "level": "3-2",
      "synthetic": true,
      "test": "Map CDU boundary drawings to rack/facility responsibilities and interface tests",
      "contain": "Name one interface lead; hold operation outside the agreed boundary envelope",
      "verify": "Both qualified domain owners sign interface tests and operational responsibilities",
      "owner": "Qualified facility lead",
      "chapters": [
        9,
        5,
        7
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": false,
      "evidence": "Rack drawings end at a manifold while facility drawings end at the CDU. The interface test and accountable boundary owner are missing."
    },
    {
      "id": "W3-07",
      "title": "Water Chemistry Drift:",
      "brief": "Quality readings trend beyond the qualified loop condition. Contain using safety procedures and authorized maintenance; plan verification.",
      "world": 2,
      "level": "3-3",
      "synthetic": true,
      "test": "Validate chemistry samples with qualified laboratory controls and material limits",
      "contain": "Follow authorized maintenance and containment procedures; protect affected loop",
      "verify": "Qualified maintenance owner accepts repeated compliant samples and inspected components",
      "owner": "Qualified facility lead",
      "chapters": [
        9,
        5,
        7
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": false,
      "evidence": "Two independent samples trend outside qualified chemistry limits. A dashboard reset cannot restore the material compatibility envelope."
    },
    {
      "id": "W3-08",
      "title": "Floor/Service Clearance:",
      "brief": "A mechanically installable rack is not serviceable under the site's aisle/manifold layout. Evaluate acceptance and rework.",
      "world": 2,
      "level": "3-3",
      "synthetic": true,
      "test": "Overlay rack service envelope, aisle clearance and manifold access on as-built plan",
      "contain": "Hold acceptance of obstructed positions and plan authorized rework",
      "verify": "Safety/serviceability inspection demonstrates maintainable access and approved layout",
      "owner": "Qualified facility lead",
      "chapters": [
        9,
        5,
        7
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": false,
      "evidence": "Rack fits the footprint but a manifold blocks the service removal envelope. Installation geometry does not prove maintainability."
    },
    {
      "id": "W3-09",
      "title": "Electrical Single Point:",
      "brief": "A PDU path undermines the intended redundancy. Identify actual rather than nominal system reliability.",
      "world": 2,
      "level": "3-3",
      "synthetic": true,
      "test": "Trace actual PDU feeds and simulate approved loss of one path",
      "contain": "Hold redundant-service claim and segregate single-path exposure",
      "verify": "Qualified electrical owner verifies independent paths and safe failover under load",
      "owner": "Qualified facility lead",
      "chapters": [
        9,
        5,
        7
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": false,
      "evidence": "Two labeled redundant feeds share one upstream PDU. The actual circuit trace exposes a common failure path."
    },
    {
      "id": "W3-10",
      "title": "Commissioning Cold-Start:",
      "brief": "Restart sequencing risks violating cooling envelope. Coordinate qualified procedures, controls, and evidence.",
      "world": 2,
      "level": "3-4",
      "synthetic": true,
      "test": "Review interlocks and approved startup sequence against pump and thermal readiness",
      "contain": "Hold restart until qualified operators confirm cooling-before-load controls",
      "verify": "Witnessed cold-start stays inside electrical and thermal envelope with interlocks proven",
      "owner": "Qualified facility lead",
      "chapters": [
        9,
        5,
        7
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": false,
      "evidence": "The proposed restart energizes load before confirmed loop circulation. The approved control sequence requires cooling readiness first."
    },
    {
      "id": "W3-11",
      "title": "Sensor Calibration Drift:",
      "brief": "Temperature alarms disagree with calibrated instruments. Assess telemetry fidelity before interpreting trends.",
      "world": 2,
      "level": "3-4",
      "synthetic": true,
      "test": "Compare alarm sensors with traceable calibrated instruments at multiple points",
      "contain": "Treat trends as uncertain; use approved conservative operating limits",
      "verify": "Calibration and alarm injection agree within approved tolerance across the envelope",
      "owner": "Qualified facility lead",
      "chapters": [
        9,
        5,
        7
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": false,
      "evidence": "Reference instruments agree with each other while the fixed sensor reads high. The alarm chain still needs calibrated functional verification."
    },
    {
      "id": "W3-12",
      "title": "BOSS Thermal Dragon:",
      "brief": "Power basis, cooling redundancy, and alarms disagree. Choose a safe phased deployment with named qualified owners and explicit gates.",
      "world": 2,
      "level": "3-4",
      "synthetic": true,
      "test": "Reconcile signed power basis, cooling failover and alarm authority under staged load",
      "contain": "Contain affected zone; qualified electrical and cooling leads authorize phased tests",
      "verify": "Site authority accepts load envelope, redundancy, alarms and phased rollback gates",
      "owner": "Qualified facility lead",
      "chapters": [
        9,
        5,
        7
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": true,
      "evidence": "Current load exceeds the old power basis, cooling failover is unwitnessed and alarm sources disagree. A full-site green declaration is unsupported."
    },
    {
      "id": "W4-01",
      "title": "Link Flap Bridge:",
      "brief": "Fabric ports intermittently flap after an optics change. Inspect link training, environmental context, port counters and rollback scope.",
      "world": 3,
      "level": "4-1",
      "synthetic": true,
      "test": "Correlate flap timestamps, optic revision, training logs and temperature",
      "contain": "Drain affected links and roll back the changed optics through network authority",
      "verify": "Representative traffic completes with stable training and no flaps in the agreed soak",
      "owner": "Fabric engineering lead",
      "chapters": [
        3,
        7,
        15,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "TRIAGE"
      ],
      "boss": false,
      "evidence": "Flaps began after optic revision change and cluster at high inlet temperature. Training logs preserve timestamps; a scoped rollback can discriminate."
    },
    {
      "id": "W4-02",
      "title": "CRC Storm:",
      "brief": "Error counters rise on specific interfaces. Distinguish optics, cable, link conditions, and endpoint configuration with targeted tests.",
      "world": 3,
      "level": "4-1",
      "synthetic": true,
      "test": "Swap suspect cable/optic with a known-good pair while tracking per-port CRC deltas",
      "contain": "Isolate noisy interfaces; preserve counters before reset or replacement",
      "verify": "CRC growth remains within accepted limits during representative traffic on both endpoints",
      "owner": "Fabric engineering lead",
      "chapters": [
        3,
        7,
        15,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "TRIAGE"
      ],
      "boss": false,
      "evidence": "CRC growth follows the cable/optic pair during a controlled swap, not the host. Endpoint settings stay pinned in the comparison."
    },
    {
      "id": "W4-03",
      "title": "Topology Drift:",
      "brief": "Installed cables differ from the documented fabric design. Trace topology and acceptance tests before launching workloads.",
      "world": 3,
      "level": "4-1",
      "synthetic": true,
      "test": "Trace physical port-to-port paths against approved fabric map and discovery data",
      "contain": "Hold workloads on unverified paths and correct cabling under change control",
      "verify": "As-built topology matches authority-approved design and end-to-end traffic passes",
      "owner": "Fabric engineering lead",
      "chapters": [
        3,
        7,
        15,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "TRIAGE"
      ],
      "boss": false,
      "evidence": "Discovery reports two cross-rack links on ports different from the signed fabric map. Connectivity alone does not prove the intended topology."
    },
    {
      "id": "W4-04",
      "title": "NIC Firmware Incompatibility:",
      "brief": "Host connectivity regresses after a known firmware transition. Correlate versions, known-good baselines, and staged recovery.",
      "world": 3,
      "level": "4-2",
      "synthetic": true,
      "test": "Compare NIC versions and known-good hosts under the same switch/workload conditions",
      "contain": "Canary approved rollback on the affected firmware cohort",
      "verify": "Version-pinned hosts pass connectivity, load and recovery tests before wider rollout",
      "owner": "Fabric engineering lead",
      "chapters": [
        3,
        7,
        15,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "TRIAGE"
      ],
      "boss": false,
      "evidence": "Failures follow NIC r6 across known-good hosts; NIC r5 controls pass on the same switches. A canary rollback remains subject to change authority."
    },
    {
      "id": "W4-05",
      "title": "Congestion Mirage:",
      "brief": "Aggregate bandwidth looks healthy but an all-to-all training workload collapses. Distinguish fabric congestion, topology, placement, and workload pattern.",
      "world": 3,
      "level": "4-2",
      "synthetic": true,
      "test": "Inspect per-link queues, ECN/congestion signals and placement during all-to-all traffic",
      "contain": "Limit workload scope and test placement/topology before replacing hardware",
      "verify": "Target collective workload meets latency/throughput criteria without unsafe queue growth",
      "owner": "Fabric engineering lead",
      "chapters": [
        3,
        7,
        15,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "TRIAGE"
      ],
      "boss": false,
      "evidence": "Point-to-point benchmarks pass, but all-to-all traffic produces queue growth on shared uplinks. Aggregate bandwidth masks path contention."
    },
    {
      "id": "W4-06",
      "title": "Optics Cohort Failure:",
      "brief": "Link faults correlate with an optic batch under specific conditions. Bound blast radius and plan supplier verification.",
      "world": 3,
      "level": "4-2",
      "synthetic": true,
      "test": "Join optic serial/batch and environment to fault rates with a clean-batch control",
      "contain": "Quarantine justified batch exposure; preserve known-good paths",
      "verify": "Supplier and network owner accept environmental retest and traced cohort disposition",
      "owner": "Fabric engineering lead",
      "chapters": [
        3,
        7,
        15,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "TRIAGE"
      ],
      "boss": false,
      "evidence": "Failures correlate with optic batch O2 only at the qualified warm condition. Batch O1 controls remain stable; untraced optics are not presumed clean."
    },
    {
      "id": "W4-07",
      "title": "Rack-to-Rack Asymmetry:",
      "brief": "Intra-rack communication passes; inter-rack communication fails under load. Identify physical vs logical and test-scope gaps.",
      "world": 3,
      "level": "4-3",
      "synthetic": true,
      "test": "Compare intra/inter-rack path traces, link errors and MTU under identical load",
      "contain": "Constrain service to validated paths and name a cross-rack test owner",
      "verify": "Representative inter-rack collectives pass across each required path and load class",
      "owner": "Fabric engineering lead",
      "chapters": [
        3,
        7,
        15,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "TRIAGE"
      ],
      "boss": false,
      "evidence": "Intra-rack load passes; inter-rack traffic fails with a path-specific MTU mismatch. The prior test never traversed that boundary."
    },
    {
      "id": "W4-08",
      "title": "Packet Loss vs App Timeout:",
      "brief": "Distributed training times out; symptoms may reflect retries, queueing, storage, or network faults. Demand discriminating evidence.",
      "world": 3,
      "level": "4-3",
      "synthetic": true,
      "test": "Time-align app timeout, retransmits, queue delay and storage latency",
      "contain": "Contain affected jobs without declaring the network guilty from timeout alone",
      "verify": "Representative job passes with causal subsystem evidence and bounded retry/latency rates",
      "owner": "Fabric engineering lead",
      "chapters": [
        3,
        7,
        15,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "TRIAGE"
      ],
      "boss": false,
      "evidence": "Application timeouts coincide with storage tail latency; interface CRCs stay flat. A timeout alone is not a physical-link diagnosis."
    },
    {
      "id": "W4-09",
      "title": "Mixed Speed Fabric:",
      "brief": "One segment negotiates a slower link rate than its design basis. Separate performance degradation from service outage and define gate.",
      "world": 3,
      "level": "4-3",
      "synthetic": true,
      "test": "Read negotiated link speed at both ends against approved fabric design",
      "contain": "Declare bounded degraded capacity only if acceptance authority permits it",
      "verify": "Required segment speeds and target workload performance meet the signed service scope",
      "owner": "Fabric engineering lead",
      "chapters": [
        3,
        7,
        15,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "TRIAGE"
      ],
      "boss": false,
      "evidence": "Both endpoints report a lower negotiated speed than the approved segment design. Some traffic passes, but accepted workload performance is unmet."
    },
    {
      "id": "W4-10",
      "title": "Fabric Ready on Paper:",
      "brief": "Switch configuration looks complete but no representative end-to-end validation was executed. Reframe readiness evidence.",
      "world": 3,
      "level": "4-4",
      "synthetic": true,
      "test": "Execute representative end-to-end workload rather than inspect config completeness",
      "contain": "Hold service readiness while the integrated fabric gate runs",
      "verify": "Network acceptance owner signs sustained workload, fault recovery and topology evidence",
      "owner": "Fabric engineering lead",
      "chapters": [
        3,
        7,
        15,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "TRIAGE"
      ],
      "boss": false,
      "evidence": "Switch configuration review is complete; there are no representative workload or failover results. Paper completion is not fabric acceptance."
    },
    {
      "id": "W4-11",
      "title": "Ownership Ping-Pong:",
      "brief": "Network, platform, and site teams each say the other owns the failure. Map handoff, named lead, test, next checkpoint.",
      "world": 3,
      "level": "4-4",
      "synthetic": true,
      "test": "Build a shared interface timeline and assign one lead for the next discriminating test",
      "contain": "Set network/platform/site owners, decision deadline and update clock",
      "verify": "Named accountable authority signs cross-domain test and handoff closure",
      "owner": "Fabric engineering lead",
      "chapters": [
        3,
        7,
        15,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "TRIAGE"
      ],
      "boss": false,
      "evidence": "Each team owns local tests; no one owns the failing cross-domain test. The latest update contains no next checkpoint or decision request."
    },
    {
      "id": "W4-12",
      "title": "BOSS Fabric Phantom:",
      "brief": "Evolving link, firmware, topology and load incident. Win by evidence-driven containment, safe rollback and workload acceptance.",
      "world": 3,
      "level": "4-4",
      "synthetic": true,
      "test": "Combine optic swap, firmware canary and topology trace under representative traffic",
      "contain": "Drain affected paths; approve scoped rollback while preserving clean capacity",
      "verify": "Fabric authority accepts pinned topology, stable links and workload recovery with rollback proof",
      "owner": "Fabric engineering lead",
      "chapters": [
        3,
        7,
        15,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "TRIAGE"
      ],
      "boss": true,
      "evidence": "Optic errors, a firmware mismatch and one stale topology record affect distinct paths. Safe recovery requires controlled changes and workload proof."
    },
    {
      "id": "W5-01",
      "title": "Delivered vs Available:",
      "brief": "Hardware is installed but cannot serve workloads because acceptance evidence is missing. Show difference between inventory and capacity.",
      "world": 4,
      "level": "5-1",
      "synthetic": true,
      "test": "Compare installed inventory with missing mandatory integrated acceptance evidence",
      "contain": "Report installed units separately from accepted serviceable capacity",
      "verify": "Service authority signs every mandatory gate and a schedulable workload succeeds",
      "owner": "Site acceptance lead",
      "chapters": [
        5,
        7,
        16,
        17
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": false,
      "evidence": "Installed inventory is complete but the integrated acceptance result is absent. Scheduler probes cannot yet place the target workload successfully."
    },
    {
      "id": "W5-02",
      "title": "Gate Without an Owner:",
      "brief": "No one is named to accept a site's integrated test. Establish actual decision authority before go-live.",
      "world": 4,
      "level": "5-1",
      "synthetic": true,
      "test": "Inspect acceptance charter and identify who can approve the integrated site test",
      "contain": "Hold go-live; appoint accountable test owner and actual decision authority",
      "verify": "Authorized approver signs fresh integrated evidence with explicit service scope",
      "owner": "Site acceptance lead",
      "chapters": [
        5,
        7,
        16,
        17
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": false,
      "evidence": "The site test has an executor but the release charter names no accepting authority. Technical execution and go-live decision are different roles."
    },
    {
      "id": "W5-03",
      "title": "Workstream Greenwashing:",
      "brief": "Twenty workstreams show green/yellow but one amber mandatory dependency blocks service. Apply criticality and gate semantics.",
      "world": 4,
      "level": "5-1",
      "synthetic": true,
      "test": "Map mandatory dependencies and evidence freshness rather than average status colors",
      "contain": "Hold blocked capacity while closing the critical amber dependency",
      "verify": "All mandatory predicates pass with owner, fresh evidence and authorized service acceptance",
      "owner": "Site acceptance lead",
      "chapters": [
        5,
        7,
        16,
        17
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": false,
      "evidence": "All local reports are green except one mandatory amber dependency with stale evidence. That dependency blocks the affected service scope."
    },
    {
      "id": "W5-04",
      "title": "Cable Map Revision:",
      "brief": "Site installation uses a stale network/cable diagram. Trace interface consumers and approved change control.",
      "world": 4,
      "level": "5-2",
      "synthetic": true,
      "test": "Compare installed cable map revision with current approved design and consumers",
      "contain": "Freeze stale-map installations and coordinate controlled correction",
      "verify": "As-built cable trace matches approved revision and representative fabric test passes",
      "owner": "Site acceptance lead",
      "chapters": [
        5,
        7,
        16,
        17
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": false,
      "evidence": "Installed cables follow diagram r3; the approved design is r5. A changed consumer interface was never propagated to the installation crew."
    },
    {
      "id": "W5-05",
      "title": "Spare Strategy Gap:",
      "brief": "Capacity meets benchmark but operational spares/recovery procedures are absent. Explain operational readiness.",
      "world": 4,
      "level": "5-2",
      "synthetic": true,
      "test": "Review replacement lead times, spares coverage and witnessed recovery procedure",
      "contain": "Restrict service scope or hold operational readiness until recovery is credible",
      "verify": "Operations authority accepts spare coverage and a demonstrated repair/recovery drill",
      "owner": "Site acceptance lead",
      "chapters": [
        5,
        7,
        16,
        17
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": false,
      "evidence": "Benchmark passes, but no qualified spare covers the critical part and no repair drill exists. Operational recovery remains unproven."
    },
    {
      "id": "W5-06",
      "title": "Failed Integrated Acceptance:",
      "brief": "Component tests pass independently but cluster integration test fails. Design a cross-domain experiment.",
      "world": 4,
      "level": "5-2",
      "synthetic": true,
      "test": "Time-align failures across component boundaries during representative integration",
      "contain": "Hold cluster acceptance; assign domain leads to a controlled cross-domain test",
      "verify": "Representative integrated workload and fault recovery pass with causal failure closure",
      "owner": "Site acceptance lead",
      "chapters": [
        5,
        7,
        16,
        17
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": false,
      "evidence": "Component suites pass separately; the integrated workload fails at a shared boundary. Cross-domain timestamps are needed before assigning cause."
    },
    {
      "id": "W5-07",
      "title": "Deployment Wave Risk:",
      "brief": "A site rollout is scheduled ahead of qualified configuration propagation. Recommend safe wave sizing and hold gates.",
      "world": 4,
      "level": "5-3",
      "synthetic": true,
      "test": "Compare rollout image hashes to qualified configuration propagation by site",
      "contain": "Release only a qualified canary wave; hold the remainder behind stop criteria",
      "verify": "Canary meets signed acceptance and rollback criteria before wave expansion",
      "owner": "Site acceptance lead",
      "chapters": [
        5,
        7,
        16,
        17
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": false,
      "evidence": "The canary has the qualified image, while later waves have an older hash. Approval of one configuration does not transfer to another."
    },
    {
      "id": "W5-08",
      "title": "Supplier Handoff Ambiguity:",
      "brief": "Supplier says factory exit equals delivery completion; site expects proven service. Negotiate explicit acceptance boundary.",
      "world": 4,
      "level": "5-3",
      "synthetic": true,
      "test": "Compare contract factory-exit definition with site service acceptance obligations",
      "contain": "Negotiate explicit supplier/site interface, evidence and accountable approvers",
      "verify": "Both authorities sign the handoff boundary and site service evidence",
      "owner": "Site acceptance lead",
      "chapters": [
        5,
        7,
        16,
        17
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": false,
      "evidence": "Supplier contract says factory exit; the site gate requires demonstrated service. The interface acceptance deliverable and signatories conflict."
    },
    {
      "id": "W5-09",
      "title": "Stale Risk Dashboard:",
      "brief": "Reports were last validated before a major design change. Distinguish dashboard freshness from actual readiness.",
      "world": 4,
      "level": "5-3",
      "synthetic": true,
      "test": "Compare risk timestamps with ECO/config change lineage and new test coverage",
      "contain": "Mark stale green UNKNOWN and revalidate affected dependencies",
      "verify": "Post-change evidence is fresh, traceable and signed for each impacted mandatory gate",
      "owner": "Site acceptance lead",
      "chapters": [
        5,
        7,
        16,
        17
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": false,
      "evidence": "Dashboard validation predates the latest configuration change. The governing design and the reported readiness refer to different revisions."
    },
    {
      "id": "W5-10",
      "title": "No Runbook Night Shift:",
      "brief": "Systems are operating, but responders lack escalation/runbook paths. Fail operational readiness appropriately.",
      "world": 4,
      "level": "5-4",
      "synthetic": true,
      "test": "Exercise night-shift escalation and recovery access without relying on daytime staff",
      "contain": "Hold unrestricted operational acceptance until responders have usable paths",
      "verify": "Night-shift drill proves runbook, access, escalation and recovery commitments",
      "owner": "Site acceptance lead",
      "chapters": [
        5,
        7,
        16,
        17
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": false,
      "evidence": "Night-shift responders lack runbook access and an escalation contact. Daytime operating success is insufficient operational acceptance."
    },
    {
      "id": "W5-11",
      "title": "Acceptance Under Load:",
      "brief": "Brief synthetic test passes but sustained target workload exposes instability. Set a representative close test.",
      "world": 4,
      "level": "5-4",
      "synthetic": true,
      "test": "Run sustained representative target workload across realistic operating conditions",
      "contain": "Hold broad service declaration after a short synthetic benchmark",
      "verify": "Acceptance authority signs sustained load, observability and recovery evidence",
      "owner": "Site acceptance lead",
      "chapters": [
        5,
        7,
        16,
        17
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": false,
      "evidence": "A brief synthetic test passes; sustained target workload triggers instability. The duration and pattern omitted the failure mechanism."
    },
    {
      "id": "W5-12",
      "title": "BOSS Green Dashboard:",
      "brief": "All local teams celebrate while usable capacity is zero. Find the unowned mandatory dependency, fix governance, and demonstrate service.",
      "world": 4,
      "level": "5-4",
      "synthetic": true,
      "test": "Trace stale governing configuration and the unowned mandatory workload acceptance gate",
      "contain": "Freeze unqualified release, appoint site owner and correct controlled source of truth",
      "verify": "Service authority accepts current configuration, integrated workload and operational handoff",
      "owner": "Site acceptance lead",
      "chapters": [
        5,
        7,
        16,
        17
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "STACK"
      ],
      "boss": true,
      "evidence": "Every local team reports green, but the source configuration is stale and the mandatory integrated workload gate has no owner. Serviceable scope is zero."
    },
    {
      "id": "W6-01",
      "title": "Firmware Fleet Regression:",
      "brief": "A staged deployment causes failures in a defined cohort. Choose impact bound, rollback, and verification.",
      "world": 5,
      "level": "6-1",
      "synthetic": true,
      "test": "Compare deployment cohorts and image hashes with failure onset and baseline",
      "contain": "Stop rollout and canary authorized rollback in the affected cohort",
      "verify": "Recovered cohort passes workload and regression tests before restart approval",
      "owner": "Incident commander",
      "chapters": [
        11,
        14,
        15,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "POWER"
      ],
      "boss": false,
      "evidence": "The failing cohort shares the new firmware hash; baseline cohorts remain stable. Rollout timestamps align with onset but verification is still required."
    },
    {
      "id": "W6-02",
      "title": "Conflicting Incident Dashboards:",
      "brief": "Monitors show contradictory health during an outage. Build an evidence hierarchy and source-of-truth update.",
      "world": 5,
      "level": "6-1",
      "synthetic": true,
      "test": "Reconcile raw event times, collection delays and independent service probes",
      "contain": "Publish separate facts, hypotheses and unknowns; repair untrusted health reporting",
      "verify": "Independent workload probes and verified telemetry agree after recovery",
      "owner": "Incident commander",
      "chapters": [
        11,
        14,
        15,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "POWER"
      ],
      "boss": false,
      "evidence": "One monitor reports fresh probes while another shows a cached healthy sample. Their clocks and collection delays differ."
    },
    {
      "id": "W6-03",
      "title": "MTTR vs Root Cause:",
      "brief": "Known safe rollback restores service, deeper RCA remains unresolved. Separate recovery, investigation, and prevention.",
      "world": 5,
      "level": "6-1",
      "synthetic": true,
      "test": "Compare known-safe rollback behavior with still-unresolved causal hypotheses",
      "contain": "Restore safely through approved rollback; keep RCA and prevention actions open",
      "verify": "Service recovery is verified separately from root-cause and prevention closure",
      "owner": "Incident commander",
      "chapters": [
        11,
        14,
        15,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "POWER"
      ],
      "boss": false,
      "evidence": "Known-safe rollback restores workload probes; the causal mechanism remains unresolved. Recovery is evidenced while RCA and prevention remain open."
    },
    {
      "id": "W6-04",
      "title": "Risky Executive Deadline:",
      "brief": "Leadership wants a release despite a critical failing gate. Present options, residual risk, authority, and schedule impact.",
      "world": 5,
      "level": "6-2",
      "synthetic": true,
      "test": "Present failed gate evidence with hold, bounded canary and rollback options",
      "contain": "Keep critical unsafe scope held pending actual release authority decision",
      "verify": "Authority accepts only gate-compliant scope with residual risk and rollback evidence",
      "owner": "Incident commander",
      "chapters": [
        11,
        14,
        15,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "POWER"
      ],
      "boss": false,
      "evidence": "The critical gate has a current failing result. A deadline is a constraint; it cannot turn that result into acceptance evidence."
    },
    {
      "id": "W6-05",
      "title": "Bad Escalation Loop:",
      "brief": "Three teams repeatedly relay generic status updates. Put decisions, test owner, and next checkpoint on a clock.",
      "world": 5,
      "level": "6-2",
      "synthetic": true,
      "test": "Inspect update history for missing decisions, named test owner and next timestamp",
      "contain": "Replace status relay with fact-impact-options-owner-deadline decision record",
      "verify": "Decision owner commits to next test and evidence checkpoint on a published clock",
      "owner": "Incident commander",
      "chapters": [
        11,
        14,
        15,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "POWER"
      ],
      "boss": false,
      "evidence": "Three updates repeat red status without a test owner, decision request or next timestamp. Coordination is not advancing the engineering decision."
    },
    {
      "id": "W6-06",
      "title": "Supplier CAPA Incomplete:",
      "brief": "Vendor applies correction but offers no verification/prevention evidence. Use the six-step supplier loop.",
      "world": 5,
      "level": "6-2",
      "synthetic": true,
      "test": "Review supplier correction against independent verification and recurrence controls",
      "contain": "Contain suspect supply until correction efficacy and prevention are evidenced",
      "verify": "Supplier loop closes Detect-Classify-Contain-Correct-Verify-Prevent with agreed tests",
      "owner": "Incident commander",
      "chapters": [
        11,
        14,
        15,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "POWER"
      ],
      "boss": false,
      "evidence": "The supplier installed a correction but provides no independent retest or recurrence-control evidence. The loop ends prematurely at Correct."
    },
    {
      "id": "W6-07",
      "title": "Incident Severity Scope:",
      "brief": "A limited degraded service issue is mistaken for a fleetwide outage, or vice versa. Define actual impact and comms.",
      "world": 5,
      "level": "6-3",
      "synthetic": true,
      "test": "Map impacted workloads, duration and available redundancy against severity criteria",
      "contain": "Bound communications to actual impact and escalate uncertainty explicitly",
      "verify": "Incident authority confirms service scope with verified probes and customer impact evidence",
      "owner": "Incident commander",
      "chapters": [
        11,
        14,
        15,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "POWER"
      ],
      "boss": false,
      "evidence": "One workload class is degraded on a limited cohort; other service probes pass. A fleetwide outage label would overstate confirmed impact."
    },
    {
      "id": "W6-08",
      "title": "Noisy Alert Storm:",
      "brief": "A monitoring failure overwhelms triage with false positives. Distinguish instrumentation reliability from system health.",
      "world": 5,
      "level": "6-3",
      "synthetic": true,
      "test": "Compare alert fanout with raw signals and independent workload health probes",
      "contain": "Rate-limit known monitoring noise while preserving critical safety alarms",
      "verify": "Injected real faults still alert and healthy service no longer generates the storm",
      "owner": "Incident commander",
      "chapters": [
        11,
        14,
        15,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "POWER"
      ],
      "boss": false,
      "evidence": "Alert fanout rose after a collector rule change while independent workload probes remained stable. Safety signals still require preserved coverage."
    },
    {
      "id": "W6-09",
      "title": "Repeat Offender:",
      "brief": "Same failure returns after apparent fix. Test prevention efficacy, change management, and readiness gates.",
      "world": 5,
      "level": "6-3",
      "synthetic": true,
      "test": "Compare repeated failure signatures with prior change and prevention records",
      "contain": "Reopen corrective action and contain recurrence rather than reuse a temporary green",
      "verify": "Recurrence-focused regression proves preventive control effective after approved change",
      "owner": "Incident commander",
      "chapters": [
        11,
        14,
        15,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "POWER"
      ],
      "boss": false,
      "evidence": "The same signature returned after a workaround; the preventive action was never regression-tested. Restoration did not demonstrate recurrence control."
    },
    {
      "id": "W6-10",
      "title": "Cross-Cluster Dependency:",
      "brief": "An upstream shared dependency takes down distinct clusters. Trace common mode and mitigate safely.",
      "world": 5,
      "level": "6-4",
      "synthetic": true,
      "test": "Trace shared upstream power/network/control dependencies across affected clusters",
      "contain": "Isolate common-mode exposure; use approved independent fallback if qualified",
      "verify": "Each cluster passes workload tests and shared dependency resilience is demonstrated",
      "owner": "Incident commander",
      "chapters": [
        11,
        14,
        15,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "POWER"
      ],
      "boss": false,
      "evidence": "Two clusters failed simultaneously through a shared upstream control path. Cluster-local healthy parts do not exclude common-mode failure."
    },
    {
      "id": "W6-11",
      "title": "Decision Without Authority:",
      "brief": "Team chooses a release but decision rights belong elsewhere. Repair governance without losing momentum.",
      "world": 5,
      "level": "6-4",
      "synthetic": true,
      "test": "Check release charter, delegated authority and actual approval record",
      "contain": "Hold unauthorized release; bring evidence and bounded options to the rightful approver",
      "verify": "Authorized commitment records scope, rollback trigger, owner and acceptance evidence",
      "owner": "Incident commander",
      "chapters": [
        11,
        14,
        15,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "POWER"
      ],
      "boss": false,
      "evidence": "The release meeting records a decision from an executor without delegated authority. The charter reserves approval to the service owner."
    },
    {
      "id": "W6-12",
      "title": "FINAL BOSS Capacity Blackout:",
      "brief": "Multi-phase platform, power/cooling, fabric, and readiness dependencies interact. Contain impact, discriminate hypotheses, align teams, restore verified workload service, and extract prevention.",
      "world": 5,
      "level": "6-4",
      "synthetic": true,
      "test": "Build cross-domain timeline of platform errors, cooling limits, fabric loss and missing gates",
      "contain": "Establish TRIAGE roles; contain blast radius and sequence qualified recovery by dependency",
      "verify": "Service authority accepts all mandatory gates, representative workloads and prevention ownership",
      "owner": "Incident commander",
      "chapters": [
        11,
        14,
        15,
        16
      ],
      "frameworks": [
        "Truth Stack",
        "Capacity Chain",
        "POWER"
      ],
      "boss": true,
      "evidence": "Platform errors, cooling limits and fabric losses overlap across a shared deployment wave. Evidence freshness and decision authority also have gaps."
    }
  ],
  "frameworks": {
    "Capacity Chain": "Silicon → Platform → Server → Rack → Facility → Network → Validation → Service",
    "STACK": "See the system; Turn dependencies into truth; Align owners and decisions; Control critical path and change; Keep capacity moving.",
    "POWER": "Position the decision; Own the information terrain; Win alignment before the room; Escalate with options; Reinforce commitments and reputation.",
    "TRIAGE": "Take control; Restrict the damage; Investigate with evidence; Act on the highest-value decision; Give updates on a clock; Extract learning.",
    "Truth Stack": "Observation → Evidence → Interpretation → Decision → Commitment",
    "Supplier loop": "Detect → Classify → Contain → Correct → Verify → Prevent",
    "Four levels of done": "Physical → Functional → Integrated → Operational"
  }
};
if(typeof module!=="undefined")module.exports=CONTENT;
