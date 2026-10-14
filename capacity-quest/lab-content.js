"use strict";
const DEEP_CONTENT = {
  "version": 2,
  "library": [
    {
      "id": "SI-001-1",
      "title": "Cold plate hotspot — EVT discovery",
      "domain": "Cooling",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "One accelerator die reaches the thermal throttle limit while rack bulk return is normal. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Junction hotspot correlates with one tray serial; (2) Rack total flow is within CDU target. What is the best initial program/technical decision?",
      "signals": [
        "Junction hotspot correlates with one tray serial",
        "Rack total flow is within CDU target"
      ],
      "hypotheses": [
        "Local contact/flow can be limiting despite healthy aggregate flow",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Lower every rack's power limit without diagnosis",
        "Declare the gate green because the program is already behind schedule",
        "Contain affected tray, compare branch flow and cold-plate contact under approved procedure",
        "Increase pump RPM and declare resolved"
      ],
      "answer_index": 2,
      "correct_action": "Contain affected tray, compare branch flow and cold-plate contact under approved procedure",
      "rationale": "Local contact/flow can be limiting despite healthy aggregate flow. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Thermal lead, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Junction hotspot correlates with one tray serial",
        "Rack total flow is within CDU target",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Repeat worst-case load with per-tray temperature margin and qualified assembly revision",
      "bad_answers_explained": {
        "Lower every rack's power limit without diagnosis": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Increase pump RPM and declare resolved": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Cooling",
      "reflection": "If you could add only one new measurement to prove the mechanism (Local contact/flow can be limiting despite healthy aggregate flow), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-001-2",
      "title": "Cold plate hotspot — Late DVT change",
      "domain": "Cooling",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "One accelerator die reaches the thermal throttle limit while rack bulk return is normal. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Junction hotspot correlates with one tray serial; (2) Rack total flow is within CDU target. What is the best initial program/technical decision?",
      "signals": [
        "Junction hotspot correlates with one tray serial",
        "Rack total flow is within CDU target"
      ],
      "hypotheses": [
        "Local contact/flow can be limiting despite healthy aggregate flow",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Increase pump RPM and declare resolved",
        "Declare the gate green because the program is already behind schedule",
        "Lower every rack's power limit without diagnosis",
        "Contain affected tray, compare branch flow and cold-plate contact under approved procedure"
      ],
      "answer_index": 3,
      "correct_action": "Contain affected tray, compare branch flow and cold-plate contact under approved procedure",
      "rationale": "Local contact/flow can be limiting despite healthy aggregate flow. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Thermal lead, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Junction hotspot correlates with one tray serial",
        "Rack total flow is within CDU target",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Repeat worst-case load with per-tray temperature margin and qualified assembly revision",
      "bad_answers_explained": {
        "Lower every rack's power limit without diagnosis": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Increase pump RPM and declare resolved": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Cooling",
      "reflection": "If you could add only one new measurement to prove the mechanism (Local contact/flow can be limiting despite healthy aggregate flow), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-001-3",
      "title": "Cold plate hotspot — PVT supplier lot",
      "domain": "Cooling",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "One accelerator die reaches the thermal throttle limit while rack bulk return is normal. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Junction hotspot correlates with one tray serial; (2) Rack total flow is within CDU target. What is the best initial program/technical decision?",
      "signals": [
        "Junction hotspot correlates with one tray serial",
        "Rack total flow is within CDU target"
      ],
      "hypotheses": [
        "Local contact/flow can be limiting despite healthy aggregate flow",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Contain affected tray, compare branch flow and cold-plate contact under approved procedure",
        "Increase pump RPM and declare resolved",
        "Lower every rack's power limit without diagnosis",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 0,
      "correct_action": "Contain affected tray, compare branch flow and cold-plate contact under approved procedure",
      "rationale": "Local contact/flow can be limiting despite healthy aggregate flow. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Thermal lead, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Junction hotspot correlates with one tray serial",
        "Rack total flow is within CDU target",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Repeat worst-case load with per-tray temperature margin and qualified assembly revision",
      "bad_answers_explained": {
        "Lower every rack's power limit without diagnosis": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Increase pump RPM and declare resolved": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Cooling",
      "reflection": "If you could add only one new measurement to prove the mechanism (Local contact/flow can be limiting despite healthy aggregate flow), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-001-4",
      "title": "Cold plate hotspot — Deployment and field",
      "domain": "Cooling",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "One accelerator die reaches the thermal throttle limit while rack bulk return is normal. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Junction hotspot correlates with one tray serial; (2) Rack total flow is within CDU target. What is the best initial program/technical decision?",
      "signals": [
        "Junction hotspot correlates with one tray serial",
        "Rack total flow is within CDU target"
      ],
      "hypotheses": [
        "Local contact/flow can be limiting despite healthy aggregate flow",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Increase pump RPM and declare resolved",
        "Lower every rack's power limit without diagnosis",
        "Declare the gate green because the program is already behind schedule",
        "Contain affected tray, compare branch flow and cold-plate contact under approved procedure"
      ],
      "answer_index": 3,
      "correct_action": "Contain affected tray, compare branch flow and cold-plate contact under approved procedure",
      "rationale": "Local contact/flow can be limiting despite healthy aggregate flow. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Thermal lead, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Junction hotspot correlates with one tray serial",
        "Rack total flow is within CDU target",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Repeat worst-case load with per-tray temperature margin and qualified assembly revision",
      "bad_answers_explained": {
        "Lower every rack's power limit without diagnosis": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Increase pump RPM and declare resolved": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Cooling",
      "reflection": "If you could add only one new measurement to prove the mechanism (Local contact/flow can be limiting despite healthy aggregate flow), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-002-1",
      "title": "Filter differential pressure rise — EVT discovery",
      "domain": "Cooling",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "CDU pump uses more power while rack return temperature slowly rises. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Filter upstream-downstream delta pressure climbed after fluid service; (2) Affected racks share the service event. What is the best initial program/technical decision?",
      "signals": [
        "Filter upstream-downstream delta pressure climbed after fluid service",
        "Affected racks share the service event"
      ],
      "hypotheses": [
        "Particulate loading shifts system curve and can reduce branch flow",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Override pump fault limits",
        "Investigate filter/particulate contamination and verified fluid chemistry; control workload safely",
        "Replace accelerators without hydraulic inspection"
      ],
      "answer_index": 2,
      "correct_action": "Investigate filter/particulate contamination and verified fluid chemistry; control workload safely",
      "rationale": "Particulate loading shifts system curve and can reduce branch flow. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage CDU engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Filter upstream-downstream delta pressure climbed after fluid service",
        "Affected racks share the service event",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Verified coolant quality, restored flow/pressure and representative thermal soak",
      "bad_answers_explained": {
        "Replace accelerators without hydraulic inspection": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Override pump fault limits": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Cooling",
      "reflection": "If you could add only one new measurement to prove the mechanism (Particulate loading shifts system curve and can reduce branch flow), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-002-2",
      "title": "Filter differential pressure rise — Late DVT change",
      "domain": "Cooling",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "CDU pump uses more power while rack return temperature slowly rises. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Filter upstream-downstream delta pressure climbed after fluid service; (2) Affected racks share the service event. What is the best initial program/technical decision?",
      "signals": [
        "Filter upstream-downstream delta pressure climbed after fluid service",
        "Affected racks share the service event"
      ],
      "hypotheses": [
        "Particulate loading shifts system curve and can reduce branch flow",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Replace accelerators without hydraulic inspection",
        "Declare the gate green because the program is already behind schedule",
        "Investigate filter/particulate contamination and verified fluid chemistry; control workload safely",
        "Override pump fault limits"
      ],
      "answer_index": 2,
      "correct_action": "Investigate filter/particulate contamination and verified fluid chemistry; control workload safely",
      "rationale": "Particulate loading shifts system curve and can reduce branch flow. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage CDU engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Filter upstream-downstream delta pressure climbed after fluid service",
        "Affected racks share the service event",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Verified coolant quality, restored flow/pressure and representative thermal soak",
      "bad_answers_explained": {
        "Replace accelerators without hydraulic inspection": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Override pump fault limits": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Cooling",
      "reflection": "If you could add only one new measurement to prove the mechanism (Particulate loading shifts system curve and can reduce branch flow), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-002-3",
      "title": "Filter differential pressure rise — PVT supplier lot",
      "domain": "Cooling",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "CDU pump uses more power while rack return temperature slowly rises. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Filter upstream-downstream delta pressure climbed after fluid service; (2) Affected racks share the service event. What is the best initial program/technical decision?",
      "signals": [
        "Filter upstream-downstream delta pressure climbed after fluid service",
        "Affected racks share the service event"
      ],
      "hypotheses": [
        "Particulate loading shifts system curve and can reduce branch flow",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Replace accelerators without hydraulic inspection",
        "Override pump fault limits",
        "Declare the gate green because the program is already behind schedule",
        "Investigate filter/particulate contamination and verified fluid chemistry; control workload safely"
      ],
      "answer_index": 3,
      "correct_action": "Investigate filter/particulate contamination and verified fluid chemistry; control workload safely",
      "rationale": "Particulate loading shifts system curve and can reduce branch flow. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage CDU engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Filter upstream-downstream delta pressure climbed after fluid service",
        "Affected racks share the service event",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Verified coolant quality, restored flow/pressure and representative thermal soak",
      "bad_answers_explained": {
        "Replace accelerators without hydraulic inspection": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Override pump fault limits": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Cooling",
      "reflection": "If you could add only one new measurement to prove the mechanism (Particulate loading shifts system curve and can reduce branch flow), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-002-4",
      "title": "Filter differential pressure rise — Deployment and field",
      "domain": "Cooling",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "CDU pump uses more power while rack return temperature slowly rises. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Filter upstream-downstream delta pressure climbed after fluid service; (2) Affected racks share the service event. What is the best initial program/technical decision?",
      "signals": [
        "Filter upstream-downstream delta pressure climbed after fluid service",
        "Affected racks share the service event"
      ],
      "hypotheses": [
        "Particulate loading shifts system curve and can reduce branch flow",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Replace accelerators without hydraulic inspection",
        "Override pump fault limits",
        "Investigate filter/particulate contamination and verified fluid chemistry; control workload safely"
      ],
      "answer_index": 3,
      "correct_action": "Investigate filter/particulate contamination and verified fluid chemistry; control workload safely",
      "rationale": "Particulate loading shifts system curve and can reduce branch flow. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage CDU engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Filter upstream-downstream delta pressure climbed after fluid service",
        "Affected racks share the service event",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Verified coolant quality, restored flow/pressure and representative thermal soak",
      "bad_answers_explained": {
        "Replace accelerators without hydraulic inspection": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Override pump fault limits": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Cooling",
      "reflection": "If you could add only one new measurement to prove the mechanism (Particulate loading shifts system curve and can reduce branch flow), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-003-1",
      "title": "Pump failover oscillation — EVT discovery",
      "domain": "Cooling",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "A CDU alternates between primary and backup pumps during a load ramp. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Pump controller event log shows repeated transfers; (2) Differential-pressure excursions precede hotspot alarms. What is the best initial program/technical decision?",
      "signals": [
        "Pump controller event log shows repeated transfers",
        "Differential-pressure excursions precede hotspot alarms"
      ],
      "hypotheses": [
        "Pressure and control transitions can cause short-term local starvation",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Qualify control state machine and failover sequencing under controlled fault test",
        "Declare the gate green because the program is already behind schedule",
        "Ignore because bulk water temperature recovers",
        "Disable failover indefinitely"
      ],
      "answer_index": 0,
      "correct_action": "Qualify control state machine and failover sequencing under controlled fault test",
      "rationale": "Pressure and control transitions can cause short-term local starvation. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Controls lead, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Pump controller event log shows repeated transfers",
        "Differential-pressure excursions precede hotspot alarms",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Safe pump failure response without hotspot/pressure excursion",
      "bad_answers_explained": {
        "Disable failover indefinitely": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Ignore because bulk water temperature recovers": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Cooling",
      "reflection": "If you could add only one new measurement to prove the mechanism (Pressure and control transitions can cause short-term local starvation), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-003-2",
      "title": "Pump failover oscillation — Late DVT change",
      "domain": "Cooling",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "A CDU alternates between primary and backup pumps during a load ramp. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Pump controller event log shows repeated transfers; (2) Differential-pressure excursions precede hotspot alarms. What is the best initial program/technical decision?",
      "signals": [
        "Pump controller event log shows repeated transfers",
        "Differential-pressure excursions precede hotspot alarms"
      ],
      "hypotheses": [
        "Pressure and control transitions can cause short-term local starvation",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Disable failover indefinitely",
        "Qualify control state machine and failover sequencing under controlled fault test",
        "Declare the gate green because the program is already behind schedule",
        "Ignore because bulk water temperature recovers"
      ],
      "answer_index": 1,
      "correct_action": "Qualify control state machine and failover sequencing under controlled fault test",
      "rationale": "Pressure and control transitions can cause short-term local starvation. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Controls lead, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Pump controller event log shows repeated transfers",
        "Differential-pressure excursions precede hotspot alarms",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Safe pump failure response without hotspot/pressure excursion",
      "bad_answers_explained": {
        "Disable failover indefinitely": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Ignore because bulk water temperature recovers": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Cooling",
      "reflection": "If you could add only one new measurement to prove the mechanism (Pressure and control transitions can cause short-term local starvation), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-003-3",
      "title": "Pump failover oscillation — PVT supplier lot",
      "domain": "Cooling",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "A CDU alternates between primary and backup pumps during a load ramp. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Pump controller event log shows repeated transfers; (2) Differential-pressure excursions precede hotspot alarms. What is the best initial program/technical decision?",
      "signals": [
        "Pump controller event log shows repeated transfers",
        "Differential-pressure excursions precede hotspot alarms"
      ],
      "hypotheses": [
        "Pressure and control transitions can cause short-term local starvation",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Disable failover indefinitely",
        "Declare the gate green because the program is already behind schedule",
        "Qualify control state machine and failover sequencing under controlled fault test",
        "Ignore because bulk water temperature recovers"
      ],
      "answer_index": 2,
      "correct_action": "Qualify control state machine and failover sequencing under controlled fault test",
      "rationale": "Pressure and control transitions can cause short-term local starvation. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Controls lead, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Pump controller event log shows repeated transfers",
        "Differential-pressure excursions precede hotspot alarms",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Safe pump failure response without hotspot/pressure excursion",
      "bad_answers_explained": {
        "Disable failover indefinitely": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Ignore because bulk water temperature recovers": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Cooling",
      "reflection": "If you could add only one new measurement to prove the mechanism (Pressure and control transitions can cause short-term local starvation), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-003-4",
      "title": "Pump failover oscillation — Deployment and field",
      "domain": "Cooling",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "A CDU alternates between primary and backup pumps during a load ramp. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Pump controller event log shows repeated transfers; (2) Differential-pressure excursions precede hotspot alarms. What is the best initial program/technical decision?",
      "signals": [
        "Pump controller event log shows repeated transfers",
        "Differential-pressure excursions precede hotspot alarms"
      ],
      "hypotheses": [
        "Pressure and control transitions can cause short-term local starvation",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Ignore because bulk water temperature recovers",
        "Declare the gate green because the program is already behind schedule",
        "Qualify control state machine and failover sequencing under controlled fault test",
        "Disable failover indefinitely"
      ],
      "answer_index": 2,
      "correct_action": "Qualify control state machine and failover sequencing under controlled fault test",
      "rationale": "Pressure and control transitions can cause short-term local starvation. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Controls lead, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Pump controller event log shows repeated transfers",
        "Differential-pressure excursions precede hotspot alarms",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Safe pump failure response without hotspot/pressure excursion",
      "bad_answers_explained": {
        "Disable failover indefinitely": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Ignore because bulk water temperature recovers": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Cooling",
      "reflection": "If you could add only one new measurement to prove the mechanism (Pressure and control transitions can cause short-term local starvation), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-004-1",
      "title": "Cold loop condensation — EVT discovery",
      "domain": "Cooling",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Water appears on cold surfaces after a facility humidity increase. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Measured room dew point is above cold pipe surface temperature; (2) IT load is low so loop temperature falls. What is the best initial program/technical decision?",
      "signals": [
        "Measured room dew point is above cold pipe surface temperature",
        "IT load is low so loop temperature falls"
      ],
      "hypotheses": [
        "Below-dew-point metal produces condensation without coolant leak",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Remove humidity sensor alarms",
        "Declare the gate green because the program is already behind schedule",
        "Protect hardware and validate dew-point and insulation/loop controls with facility engineers",
        "Assume all liquid leaks are from broken hose"
      ],
      "answer_index": 2,
      "correct_action": "Protect hardware and validate dew-point and insulation/loop controls with facility engineers",
      "rationale": "Below-dew-point metal produces condensation without coolant leak. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Facilities thermal, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Measured room dew point is above cold pipe surface temperature",
        "IT load is low so loop temperature falls",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Dry verified surfaces and approved dew-point control through worst-case profile",
      "bad_answers_explained": {
        "Assume all liquid leaks are from broken hose": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Remove humidity sensor alarms": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Cooling",
      "reflection": "If you could add only one new measurement to prove the mechanism (Below-dew-point metal produces condensation without coolant leak), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-004-2",
      "title": "Cold loop condensation — Late DVT change",
      "domain": "Cooling",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Water appears on cold surfaces after a facility humidity increase. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Measured room dew point is above cold pipe surface temperature; (2) IT load is low so loop temperature falls. What is the best initial program/technical decision?",
      "signals": [
        "Measured room dew point is above cold pipe surface temperature",
        "IT load is low so loop temperature falls"
      ],
      "hypotheses": [
        "Below-dew-point metal produces condensation without coolant leak",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Remove humidity sensor alarms",
        "Declare the gate green because the program is already behind schedule",
        "Assume all liquid leaks are from broken hose",
        "Protect hardware and validate dew-point and insulation/loop controls with facility engineers"
      ],
      "answer_index": 3,
      "correct_action": "Protect hardware and validate dew-point and insulation/loop controls with facility engineers",
      "rationale": "Below-dew-point metal produces condensation without coolant leak. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Facilities thermal, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Measured room dew point is above cold pipe surface temperature",
        "IT load is low so loop temperature falls",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Dry verified surfaces and approved dew-point control through worst-case profile",
      "bad_answers_explained": {
        "Assume all liquid leaks are from broken hose": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Remove humidity sensor alarms": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Cooling",
      "reflection": "If you could add only one new measurement to prove the mechanism (Below-dew-point metal produces condensation without coolant leak), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-004-3",
      "title": "Cold loop condensation — PVT supplier lot",
      "domain": "Cooling",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Water appears on cold surfaces after a facility humidity increase. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Measured room dew point is above cold pipe surface temperature; (2) IT load is low so loop temperature falls. What is the best initial program/technical decision?",
      "signals": [
        "Measured room dew point is above cold pipe surface temperature",
        "IT load is low so loop temperature falls"
      ],
      "hypotheses": [
        "Below-dew-point metal produces condensation without coolant leak",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Protect hardware and validate dew-point and insulation/loop controls with facility engineers",
        "Remove humidity sensor alarms",
        "Declare the gate green because the program is already behind schedule",
        "Assume all liquid leaks are from broken hose"
      ],
      "answer_index": 0,
      "correct_action": "Protect hardware and validate dew-point and insulation/loop controls with facility engineers",
      "rationale": "Below-dew-point metal produces condensation without coolant leak. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Facilities thermal, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Measured room dew point is above cold pipe surface temperature",
        "IT load is low so loop temperature falls",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Dry verified surfaces and approved dew-point control through worst-case profile",
      "bad_answers_explained": {
        "Assume all liquid leaks are from broken hose": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Remove humidity sensor alarms": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Cooling",
      "reflection": "If you could add only one new measurement to prove the mechanism (Below-dew-point metal produces condensation without coolant leak), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-004-4",
      "title": "Cold loop condensation — Deployment and field",
      "domain": "Cooling",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Water appears on cold surfaces after a facility humidity increase. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Measured room dew point is above cold pipe surface temperature; (2) IT load is low so loop temperature falls. What is the best initial program/technical decision?",
      "signals": [
        "Measured room dew point is above cold pipe surface temperature",
        "IT load is low so loop temperature falls"
      ],
      "hypotheses": [
        "Below-dew-point metal produces condensation without coolant leak",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Assume all liquid leaks are from broken hose",
        "Declare the gate green because the program is already behind schedule",
        "Protect hardware and validate dew-point and insulation/loop controls with facility engineers",
        "Remove humidity sensor alarms"
      ],
      "answer_index": 2,
      "correct_action": "Protect hardware and validate dew-point and insulation/loop controls with facility engineers",
      "rationale": "Below-dew-point metal produces condensation without coolant leak. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Facilities thermal, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Measured room dew point is above cold pipe surface temperature",
        "IT load is low so loop temperature falls",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Dry verified surfaces and approved dew-point control through worst-case profile",
      "bad_answers_explained": {
        "Assume all liquid leaks are from broken hose": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Remove humidity sensor alarms": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Cooling",
      "reflection": "If you could add only one new measurement to prove the mechanism (Below-dew-point metal produces condensation without coolant leak), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-005-1",
      "title": "Manifold air lock — EVT discovery",
      "domain": "Cooling",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "One branch reports low flow after maintenance. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Branch flow reduced but CDU aggregate flow near normal; (2) Air purge event correlates with recent hose swap. What is the best initial program/technical decision?",
      "signals": [
        "Branch flow reduced but CDU aggregate flow near normal",
        "Air purge event correlates with recent hose swap"
      ],
      "hypotheses": [
        "Entrained air can reduce local heat-transfer and damage pump behavior",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Open coolant plumbing while energized",
        "Declare the gate green because the program is already behind schedule",
        "Increase facility supply temperature as sole fix",
        "Hold affected branch and perform approved venting/flow-balancing process"
      ],
      "answer_index": 3,
      "correct_action": "Hold affected branch and perform approved venting/flow-balancing process",
      "rationale": "Entrained air can reduce local heat-transfer and damage pump behavior. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Cooling integrator, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Branch flow reduced but CDU aggregate flow near normal",
        "Air purge event correlates with recent hose swap",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Branch flow and hot-spot soak restored with no leaks",
      "bad_answers_explained": {
        "Open coolant plumbing while energized": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Increase facility supply temperature as sole fix": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Cooling",
      "reflection": "If you could add only one new measurement to prove the mechanism (Entrained air can reduce local heat-transfer and damage pump behavior), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-005-2",
      "title": "Manifold air lock — Late DVT change",
      "domain": "Cooling",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "One branch reports low flow after maintenance. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Branch flow reduced but CDU aggregate flow near normal; (2) Air purge event correlates with recent hose swap. What is the best initial program/technical decision?",
      "signals": [
        "Branch flow reduced but CDU aggregate flow near normal",
        "Air purge event correlates with recent hose swap"
      ],
      "hypotheses": [
        "Entrained air can reduce local heat-transfer and damage pump behavior",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Open coolant plumbing while energized",
        "Increase facility supply temperature as sole fix",
        "Hold affected branch and perform approved venting/flow-balancing process"
      ],
      "answer_index": 3,
      "correct_action": "Hold affected branch and perform approved venting/flow-balancing process",
      "rationale": "Entrained air can reduce local heat-transfer and damage pump behavior. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Cooling integrator, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Branch flow reduced but CDU aggregate flow near normal",
        "Air purge event correlates with recent hose swap",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Branch flow and hot-spot soak restored with no leaks",
      "bad_answers_explained": {
        "Open coolant plumbing while energized": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Increase facility supply temperature as sole fix": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Cooling",
      "reflection": "If you could add only one new measurement to prove the mechanism (Entrained air can reduce local heat-transfer and damage pump behavior), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-005-3",
      "title": "Manifold air lock — PVT supplier lot",
      "domain": "Cooling",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "One branch reports low flow after maintenance. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Branch flow reduced but CDU aggregate flow near normal; (2) Air purge event correlates with recent hose swap. What is the best initial program/technical decision?",
      "signals": [
        "Branch flow reduced but CDU aggregate flow near normal",
        "Air purge event correlates with recent hose swap"
      ],
      "hypotheses": [
        "Entrained air can reduce local heat-transfer and damage pump behavior",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Hold affected branch and perform approved venting/flow-balancing process",
        "Open coolant plumbing while energized",
        "Increase facility supply temperature as sole fix",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 0,
      "correct_action": "Hold affected branch and perform approved venting/flow-balancing process",
      "rationale": "Entrained air can reduce local heat-transfer and damage pump behavior. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Cooling integrator, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Branch flow reduced but CDU aggregate flow near normal",
        "Air purge event correlates with recent hose swap",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Branch flow and hot-spot soak restored with no leaks",
      "bad_answers_explained": {
        "Open coolant plumbing while energized": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Increase facility supply temperature as sole fix": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Cooling",
      "reflection": "If you could add only one new measurement to prove the mechanism (Entrained air can reduce local heat-transfer and damage pump behavior), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-005-4",
      "title": "Manifold air lock — Deployment and field",
      "domain": "Cooling",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "One branch reports low flow after maintenance. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Branch flow reduced but CDU aggregate flow near normal; (2) Air purge event correlates with recent hose swap. What is the best initial program/technical decision?",
      "signals": [
        "Branch flow reduced but CDU aggregate flow near normal",
        "Air purge event correlates with recent hose swap"
      ],
      "hypotheses": [
        "Entrained air can reduce local heat-transfer and damage pump behavior",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Open coolant plumbing while energized",
        "Declare the gate green because the program is already behind schedule",
        "Hold affected branch and perform approved venting/flow-balancing process",
        "Increase facility supply temperature as sole fix"
      ],
      "answer_index": 2,
      "correct_action": "Hold affected branch and perform approved venting/flow-balancing process",
      "rationale": "Entrained air can reduce local heat-transfer and damage pump behavior. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Cooling integrator, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Branch flow reduced but CDU aggregate flow near normal",
        "Air purge event correlates with recent hose swap",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Branch flow and hot-spot soak restored with no leaks",
      "bad_answers_explained": {
        "Open coolant plumbing while energized": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Increase facility supply temperature as sole fix": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Cooling",
      "reflection": "If you could add only one new measurement to prove the mechanism (Entrained air can reduce local heat-transfer and damage pump behavior), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-006-1",
      "title": "Coolant chemistry drift — EVT discovery",
      "domain": "Cooling",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "CDU filter deposits and connector corrosion appear on several racks. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Fluid conductivity/chemistry differs from vendor baseline; (2) Different sites use different coolant preparation. What is the best initial program/technical decision?",
      "signals": [
        "Fluid conductivity/chemistry differs from vendor baseline",
        "Different sites use different coolant preparation"
      ],
      "hypotheses": [
        "Wrong fluid chemistry can cause corrosion/fouling and long-latency failures",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Hold exposed population and perform chemistry/material compatibility investigation",
        "Replace all power shelves first",
        "Declare the gate green because the program is already behind schedule",
        "Flush with an arbitrary additive"
      ],
      "answer_index": 0,
      "correct_action": "Hold exposed population and perform chemistry/material compatibility investigation",
      "rationale": "Wrong fluid chemistry can cause corrosion/fouling and long-latency failures. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Thermal and supplier quality, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Fluid conductivity/chemistry differs from vendor baseline",
        "Different sites use different coolant preparation",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Vendor-approved chemistry and material compatibility plus controlled maintenance procedure",
      "bad_answers_explained": {
        "Flush with an arbitrary additive": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Replace all power shelves first": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Cooling",
      "reflection": "If you could add only one new measurement to prove the mechanism (Wrong fluid chemistry can cause corrosion/fouling and long-latency failures), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-006-2",
      "title": "Coolant chemistry drift — Late DVT change",
      "domain": "Cooling",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "CDU filter deposits and connector corrosion appear on several racks. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Fluid conductivity/chemistry differs from vendor baseline; (2) Different sites use different coolant preparation. What is the best initial program/technical decision?",
      "signals": [
        "Fluid conductivity/chemistry differs from vendor baseline",
        "Different sites use different coolant preparation"
      ],
      "hypotheses": [
        "Wrong fluid chemistry can cause corrosion/fouling and long-latency failures",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Flush with an arbitrary additive",
        "Replace all power shelves first",
        "Hold exposed population and perform chemistry/material compatibility investigation",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 2,
      "correct_action": "Hold exposed population and perform chemistry/material compatibility investigation",
      "rationale": "Wrong fluid chemistry can cause corrosion/fouling and long-latency failures. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Thermal and supplier quality, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Fluid conductivity/chemistry differs from vendor baseline",
        "Different sites use different coolant preparation",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Vendor-approved chemistry and material compatibility plus controlled maintenance procedure",
      "bad_answers_explained": {
        "Flush with an arbitrary additive": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Replace all power shelves first": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Cooling",
      "reflection": "If you could add only one new measurement to prove the mechanism (Wrong fluid chemistry can cause corrosion/fouling and long-latency failures), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-006-3",
      "title": "Coolant chemistry drift — PVT supplier lot",
      "domain": "Cooling",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "CDU filter deposits and connector corrosion appear on several racks. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Fluid conductivity/chemistry differs from vendor baseline; (2) Different sites use different coolant preparation. What is the best initial program/technical decision?",
      "signals": [
        "Fluid conductivity/chemistry differs from vendor baseline",
        "Different sites use different coolant preparation"
      ],
      "hypotheses": [
        "Wrong fluid chemistry can cause corrosion/fouling and long-latency failures",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Hold exposed population and perform chemistry/material compatibility investigation",
        "Replace all power shelves first",
        "Declare the gate green because the program is already behind schedule",
        "Flush with an arbitrary additive"
      ],
      "answer_index": 0,
      "correct_action": "Hold exposed population and perform chemistry/material compatibility investigation",
      "rationale": "Wrong fluid chemistry can cause corrosion/fouling and long-latency failures. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Thermal and supplier quality, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Fluid conductivity/chemistry differs from vendor baseline",
        "Different sites use different coolant preparation",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Vendor-approved chemistry and material compatibility plus controlled maintenance procedure",
      "bad_answers_explained": {
        "Flush with an arbitrary additive": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Replace all power shelves first": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Cooling",
      "reflection": "If you could add only one new measurement to prove the mechanism (Wrong fluid chemistry can cause corrosion/fouling and long-latency failures), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-006-4",
      "title": "Coolant chemistry drift — Deployment and field",
      "domain": "Cooling",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "CDU filter deposits and connector corrosion appear on several racks. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Fluid conductivity/chemistry differs from vendor baseline; (2) Different sites use different coolant preparation. What is the best initial program/technical decision?",
      "signals": [
        "Fluid conductivity/chemistry differs from vendor baseline",
        "Different sites use different coolant preparation"
      ],
      "hypotheses": [
        "Wrong fluid chemistry can cause corrosion/fouling and long-latency failures",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Replace all power shelves first",
        "Hold exposed population and perform chemistry/material compatibility investigation",
        "Flush with an arbitrary additive"
      ],
      "answer_index": 2,
      "correct_action": "Hold exposed population and perform chemistry/material compatibility investigation",
      "rationale": "Wrong fluid chemistry can cause corrosion/fouling and long-latency failures. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Thermal and supplier quality, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Fluid conductivity/chemistry differs from vendor baseline",
        "Different sites use different coolant preparation",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Vendor-approved chemistry and material compatibility plus controlled maintenance procedure",
      "bad_answers_explained": {
        "Flush with an arbitrary additive": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Replace all power shelves first": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Cooling",
      "reflection": "If you could add only one new measurement to prove the mechanism (Wrong fluid chemistry can cause corrosion/fouling and long-latency failures), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-007-1",
      "title": "Heat exchanger approach — EVT discovery",
      "domain": "Cooling",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Secondary loop supply becomes warmer despite normal facility primary supply. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Primary-secondary approach temperature increased; (2) Fouling and valve position differ from golden unit. What is the best initial program/technical decision?",
      "signals": [
        "Primary-secondary approach temperature increased",
        "Fouling and valve position differ from golden unit"
      ],
      "hypotheses": [
        "Approach degradation indicates reduced heat-exchanger effectiveness or control fault",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Increase data center thermostat indefinitely",
        "Turn up GPU fans to solve liquid loop issue",
        "Characterize heat exchanger, valve and flow path against design envelope",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 2,
      "correct_action": "Characterize heat exchanger, valve and flow path against design envelope",
      "rationale": "Approach degradation indicates reduced heat-exchanger effectiveness or control fault. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage CDU controls, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Primary-secondary approach temperature increased",
        "Fouling and valve position differ from golden unit",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Measured approach and full heat rejection over load corners",
      "bad_answers_explained": {
        "Turn up GPU fans to solve liquid loop issue": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Increase data center thermostat indefinitely": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Cooling",
      "reflection": "If you could add only one new measurement to prove the mechanism (Approach degradation indicates reduced heat-exchanger effectiveness or control fault), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-007-2",
      "title": "Heat exchanger approach — Late DVT change",
      "domain": "Cooling",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Secondary loop supply becomes warmer despite normal facility primary supply. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Primary-secondary approach temperature increased; (2) Fouling and valve position differ from golden unit. What is the best initial program/technical decision?",
      "signals": [
        "Primary-secondary approach temperature increased",
        "Fouling and valve position differ from golden unit"
      ],
      "hypotheses": [
        "Approach degradation indicates reduced heat-exchanger effectiveness or control fault",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Characterize heat exchanger, valve and flow path against design envelope",
        "Increase data center thermostat indefinitely",
        "Declare the gate green because the program is already behind schedule",
        "Turn up GPU fans to solve liquid loop issue"
      ],
      "answer_index": 0,
      "correct_action": "Characterize heat exchanger, valve and flow path against design envelope",
      "rationale": "Approach degradation indicates reduced heat-exchanger effectiveness or control fault. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage CDU controls, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Primary-secondary approach temperature increased",
        "Fouling and valve position differ from golden unit",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Measured approach and full heat rejection over load corners",
      "bad_answers_explained": {
        "Turn up GPU fans to solve liquid loop issue": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Increase data center thermostat indefinitely": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Cooling",
      "reflection": "If you could add only one new measurement to prove the mechanism (Approach degradation indicates reduced heat-exchanger effectiveness or control fault), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-007-3",
      "title": "Heat exchanger approach — PVT supplier lot",
      "domain": "Cooling",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Secondary loop supply becomes warmer despite normal facility primary supply. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Primary-secondary approach temperature increased; (2) Fouling and valve position differ from golden unit. What is the best initial program/technical decision?",
      "signals": [
        "Primary-secondary approach temperature increased",
        "Fouling and valve position differ from golden unit"
      ],
      "hypotheses": [
        "Approach degradation indicates reduced heat-exchanger effectiveness or control fault",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Turn up GPU fans to solve liquid loop issue",
        "Characterize heat exchanger, valve and flow path against design envelope",
        "Increase data center thermostat indefinitely",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 1,
      "correct_action": "Characterize heat exchanger, valve and flow path against design envelope",
      "rationale": "Approach degradation indicates reduced heat-exchanger effectiveness or control fault. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage CDU controls, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Primary-secondary approach temperature increased",
        "Fouling and valve position differ from golden unit",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Measured approach and full heat rejection over load corners",
      "bad_answers_explained": {
        "Turn up GPU fans to solve liquid loop issue": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Increase data center thermostat indefinitely": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Cooling",
      "reflection": "If you could add only one new measurement to prove the mechanism (Approach degradation indicates reduced heat-exchanger effectiveness or control fault), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-007-4",
      "title": "Heat exchanger approach — Deployment and field",
      "domain": "Cooling",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Secondary loop supply becomes warmer despite normal facility primary supply. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Primary-secondary approach temperature increased; (2) Fouling and valve position differ from golden unit. What is the best initial program/technical decision?",
      "signals": [
        "Primary-secondary approach temperature increased",
        "Fouling and valve position differ from golden unit"
      ],
      "hypotheses": [
        "Approach degradation indicates reduced heat-exchanger effectiveness or control fault",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Characterize heat exchanger, valve and flow path against design envelope",
        "Increase data center thermostat indefinitely",
        "Turn up GPU fans to solve liquid loop issue"
      ],
      "answer_index": 1,
      "correct_action": "Characterize heat exchanger, valve and flow path against design envelope",
      "rationale": "Approach degradation indicates reduced heat-exchanger effectiveness or control fault. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage CDU controls, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Primary-secondary approach temperature increased",
        "Fouling and valve position differ from golden unit",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Measured approach and full heat rejection over load corners",
      "bad_answers_explained": {
        "Turn up GPU fans to solve liquid loop issue": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Increase data center thermostat indefinitely": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Cooling",
      "reflection": "If you could add only one new measurement to prove the mechanism (Approach degradation indicates reduced heat-exchanger effectiveness or control fault), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-008-1",
      "title": "Leak sensor false negative — EVT discovery",
      "domain": "Cooling",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "External inspection reveals water while BMC leak alarm is green. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Alarm input stuck in constant state; (2) Sensor verification was skipped after firmware flash. What is the best initial program/technical decision?",
      "signals": [
        "Alarm input stuck in constant state",
        "Sensor verification was skipped after firmware flash"
      ],
      "hypotheses": [
        "Telemetry status can be stale or failed independent of liquid fault",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Trust green status and ship",
        "Disable moisture monitors across the fleet",
        "Quarantine rack and validate sensor/wiring/firmware fail-safe logic"
      ],
      "answer_index": 3,
      "correct_action": "Quarantine rack and validate sensor/wiring/firmware fail-safe logic",
      "rationale": "Telemetry status can be stale or failed independent of liquid fault. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Safety and firmware, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Alarm input stuck in constant state",
        "Sensor verification was skipped after firmware flash",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Controlled leak-detection test across hardware and FW combinations",
      "bad_answers_explained": {
        "Trust green status and ship": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Disable moisture monitors across the fleet": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Cooling",
      "reflection": "If you could add only one new measurement to prove the mechanism (Telemetry status can be stale or failed independent of liquid fault), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-008-2",
      "title": "Leak sensor false negative — Late DVT change",
      "domain": "Cooling",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "External inspection reveals water while BMC leak alarm is green. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Alarm input stuck in constant state; (2) Sensor verification was skipped after firmware flash. What is the best initial program/technical decision?",
      "signals": [
        "Alarm input stuck in constant state",
        "Sensor verification was skipped after firmware flash"
      ],
      "hypotheses": [
        "Telemetry status can be stale or failed independent of liquid fault",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Quarantine rack and validate sensor/wiring/firmware fail-safe logic",
        "Declare the gate green because the program is already behind schedule",
        "Disable moisture monitors across the fleet",
        "Trust green status and ship"
      ],
      "answer_index": 0,
      "correct_action": "Quarantine rack and validate sensor/wiring/firmware fail-safe logic",
      "rationale": "Telemetry status can be stale or failed independent of liquid fault. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Safety and firmware, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Alarm input stuck in constant state",
        "Sensor verification was skipped after firmware flash",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Controlled leak-detection test across hardware and FW combinations",
      "bad_answers_explained": {
        "Trust green status and ship": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Disable moisture monitors across the fleet": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Cooling",
      "reflection": "If you could add only one new measurement to prove the mechanism (Telemetry status can be stale or failed independent of liquid fault), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-008-3",
      "title": "Leak sensor false negative — PVT supplier lot",
      "domain": "Cooling",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "External inspection reveals water while BMC leak alarm is green. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Alarm input stuck in constant state; (2) Sensor verification was skipped after firmware flash. What is the best initial program/technical decision?",
      "signals": [
        "Alarm input stuck in constant state",
        "Sensor verification was skipped after firmware flash"
      ],
      "hypotheses": [
        "Telemetry status can be stale or failed independent of liquid fault",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Trust green status and ship",
        "Quarantine rack and validate sensor/wiring/firmware fail-safe logic",
        "Disable moisture monitors across the fleet"
      ],
      "answer_index": 2,
      "correct_action": "Quarantine rack and validate sensor/wiring/firmware fail-safe logic",
      "rationale": "Telemetry status can be stale or failed independent of liquid fault. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Safety and firmware, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Alarm input stuck in constant state",
        "Sensor verification was skipped after firmware flash",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Controlled leak-detection test across hardware and FW combinations",
      "bad_answers_explained": {
        "Trust green status and ship": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Disable moisture monitors across the fleet": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Cooling",
      "reflection": "If you could add only one new measurement to prove the mechanism (Telemetry status can be stale or failed independent of liquid fault), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-008-4",
      "title": "Leak sensor false negative — Deployment and field",
      "domain": "Cooling",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "External inspection reveals water while BMC leak alarm is green. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Alarm input stuck in constant state; (2) Sensor verification was skipped after firmware flash. What is the best initial program/technical decision?",
      "signals": [
        "Alarm input stuck in constant state",
        "Sensor verification was skipped after firmware flash"
      ],
      "hypotheses": [
        "Telemetry status can be stale or failed independent of liquid fault",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Disable moisture monitors across the fleet",
        "Quarantine rack and validate sensor/wiring/firmware fail-safe logic",
        "Declare the gate green because the program is already behind schedule",
        "Trust green status and ship"
      ],
      "answer_index": 1,
      "correct_action": "Quarantine rack and validate sensor/wiring/firmware fail-safe logic",
      "rationale": "Telemetry status can be stale or failed independent of liquid fault. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Safety and firmware, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Alarm input stuck in constant state",
        "Sensor verification was skipped after firmware flash",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Controlled leak-detection test across hardware and FW combinations",
      "bad_answers_explained": {
        "Trust green status and ship": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Disable moisture monitors across the fleet": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Cooling",
      "reflection": "If you could add only one new measurement to prove the mechanism (Telemetry status can be stale or failed independent of liquid fault), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-009-1",
      "title": "PSU transient trip — EVT discovery",
      "domain": "Power",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Shelf trips during coordinated high-to-low-to-high compute load. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Input feed stays within normal voltage at time of trip; (2) Current waveform shows a short inrush/step exceeding protection response. What is the best initial program/technical decision?",
      "signals": [
        "Input feed stays within normal voltage at time of trip",
        "Current waveform shows a short inrush/step exceeding protection response"
      ],
      "hypotheses": [
        "Transient load response can violate PSU controls despite steady margin",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Increase breaker rating without engineering study",
        "Capture high-speed current/voltage and qualified PSU/firmware response; contain affected rev",
        "Declare the gate green because the program is already behind schedule",
        "Declare rack ready after idle power-on"
      ],
      "answer_index": 1,
      "correct_action": "Capture high-speed current/voltage and qualified PSU/firmware response; contain affected rev",
      "rationale": "Transient load response can violate PSU controls despite steady margin. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Electrical engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Input feed stays within normal voltage at time of trip",
        "Current waveform shows a short inrush/step exceeding protection response",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Approved load-step and restart tests at thermal worst case",
      "bad_answers_explained": {
        "Increase breaker rating without engineering study": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Declare rack ready after idle power-on": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Power",
      "reflection": "If you could add only one new measurement to prove the mechanism (Transient load response can violate PSU controls despite steady margin), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-009-2",
      "title": "PSU transient trip — Late DVT change",
      "domain": "Power",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Shelf trips during coordinated high-to-low-to-high compute load. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Input feed stays within normal voltage at time of trip; (2) Current waveform shows a short inrush/step exceeding protection response. What is the best initial program/technical decision?",
      "signals": [
        "Input feed stays within normal voltage at time of trip",
        "Current waveform shows a short inrush/step exceeding protection response"
      ],
      "hypotheses": [
        "Transient load response can violate PSU controls despite steady margin",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare rack ready after idle power-on",
        "Capture high-speed current/voltage and qualified PSU/firmware response; contain affected rev",
        "Declare the gate green because the program is already behind schedule",
        "Increase breaker rating without engineering study"
      ],
      "answer_index": 1,
      "correct_action": "Capture high-speed current/voltage and qualified PSU/firmware response; contain affected rev",
      "rationale": "Transient load response can violate PSU controls despite steady margin. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Electrical engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Input feed stays within normal voltage at time of trip",
        "Current waveform shows a short inrush/step exceeding protection response",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Approved load-step and restart tests at thermal worst case",
      "bad_answers_explained": {
        "Increase breaker rating without engineering study": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Declare rack ready after idle power-on": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Power",
      "reflection": "If you could add only one new measurement to prove the mechanism (Transient load response can violate PSU controls despite steady margin), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-009-3",
      "title": "PSU transient trip — PVT supplier lot",
      "domain": "Power",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Shelf trips during coordinated high-to-low-to-high compute load. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Input feed stays within normal voltage at time of trip; (2) Current waveform shows a short inrush/step exceeding protection response. What is the best initial program/technical decision?",
      "signals": [
        "Input feed stays within normal voltage at time of trip",
        "Current waveform shows a short inrush/step exceeding protection response"
      ],
      "hypotheses": [
        "Transient load response can violate PSU controls despite steady margin",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Increase breaker rating without engineering study",
        "Declare rack ready after idle power-on",
        "Capture high-speed current/voltage and qualified PSU/firmware response; contain affected rev",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 2,
      "correct_action": "Capture high-speed current/voltage and qualified PSU/firmware response; contain affected rev",
      "rationale": "Transient load response can violate PSU controls despite steady margin. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Electrical engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Input feed stays within normal voltage at time of trip",
        "Current waveform shows a short inrush/step exceeding protection response",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Approved load-step and restart tests at thermal worst case",
      "bad_answers_explained": {
        "Increase breaker rating without engineering study": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Declare rack ready after idle power-on": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Power",
      "reflection": "If you could add only one new measurement to prove the mechanism (Transient load response can violate PSU controls despite steady margin), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-009-4",
      "title": "PSU transient trip — Deployment and field",
      "domain": "Power",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Shelf trips during coordinated high-to-low-to-high compute load. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Input feed stays within normal voltage at time of trip; (2) Current waveform shows a short inrush/step exceeding protection response. What is the best initial program/technical decision?",
      "signals": [
        "Input feed stays within normal voltage at time of trip",
        "Current waveform shows a short inrush/step exceeding protection response"
      ],
      "hypotheses": [
        "Transient load response can violate PSU controls despite steady margin",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare rack ready after idle power-on",
        "Declare the gate green because the program is already behind schedule",
        "Capture high-speed current/voltage and qualified PSU/firmware response; contain affected rev",
        "Increase breaker rating without engineering study"
      ],
      "answer_index": 2,
      "correct_action": "Capture high-speed current/voltage and qualified PSU/firmware response; contain affected rev",
      "rationale": "Transient load response can violate PSU controls despite steady margin. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Electrical engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Input feed stays within normal voltage at time of trip",
        "Current waveform shows a short inrush/step exceeding protection response",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Approved load-step and restart tests at thermal worst case",
      "bad_answers_explained": {
        "Increase breaker rating without engineering study": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Declare rack ready after idle power-on": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Power",
      "reflection": "If you could add only one new measurement to prove the mechanism (Transient load response can violate PSU controls despite steady margin), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-010-1",
      "title": "Busbar joint hot spot — EVT discovery",
      "domain": "Power",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "One busbar joint runs far hotter than similar branches. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) IR hot spot tracks rising load current; (2) Joint resistance/torque history differs from control. What is the best initial program/technical decision?",
      "signals": [
        "IR hot spot tracks rising load current",
        "Joint resistance/torque history differs from control"
      ],
      "hypotheses": [
        "I-squared-R heating magnifies small resistance changes",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Add coolant to electrical joint",
        "Raise allowable busbar temperature to pass",
        "Declare the gate green because the program is already behind schedule",
        "Isolate affected power path with qualified staff and investigate joint resistance/assembly"
      ],
      "answer_index": 3,
      "correct_action": "Isolate affected power path with qualified staff and investigate joint resistance/assembly",
      "rationale": "I-squared-R heating magnifies small resistance changes. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Power engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "IR hot spot tracks rising load current",
        "Joint resistance/torque history differs from control",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Approved electrical inspection, corrected joint process and qualified thermal/ampacity test",
      "bad_answers_explained": {
        "Raise allowable busbar temperature to pass": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Add coolant to electrical joint": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Power",
      "reflection": "If you could add only one new measurement to prove the mechanism (I-squared-R heating magnifies small resistance changes), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-010-2",
      "title": "Busbar joint hot spot — Late DVT change",
      "domain": "Power",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "One busbar joint runs far hotter than similar branches. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) IR hot spot tracks rising load current; (2) Joint resistance/torque history differs from control. What is the best initial program/technical decision?",
      "signals": [
        "IR hot spot tracks rising load current",
        "Joint resistance/torque history differs from control"
      ],
      "hypotheses": [
        "I-squared-R heating magnifies small resistance changes",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Isolate affected power path with qualified staff and investigate joint resistance/assembly",
        "Declare the gate green because the program is already behind schedule",
        "Raise allowable busbar temperature to pass",
        "Add coolant to electrical joint"
      ],
      "answer_index": 0,
      "correct_action": "Isolate affected power path with qualified staff and investigate joint resistance/assembly",
      "rationale": "I-squared-R heating magnifies small resistance changes. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Power engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "IR hot spot tracks rising load current",
        "Joint resistance/torque history differs from control",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Approved electrical inspection, corrected joint process and qualified thermal/ampacity test",
      "bad_answers_explained": {
        "Raise allowable busbar temperature to pass": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Add coolant to electrical joint": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Power",
      "reflection": "If you could add only one new measurement to prove the mechanism (I-squared-R heating magnifies small resistance changes), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-010-3",
      "title": "Busbar joint hot spot — PVT supplier lot",
      "domain": "Power",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "One busbar joint runs far hotter than similar branches. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) IR hot spot tracks rising load current; (2) Joint resistance/torque history differs from control. What is the best initial program/technical decision?",
      "signals": [
        "IR hot spot tracks rising load current",
        "Joint resistance/torque history differs from control"
      ],
      "hypotheses": [
        "I-squared-R heating magnifies small resistance changes",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Add coolant to electrical joint",
        "Declare the gate green because the program is already behind schedule",
        "Isolate affected power path with qualified staff and investigate joint resistance/assembly",
        "Raise allowable busbar temperature to pass"
      ],
      "answer_index": 2,
      "correct_action": "Isolate affected power path with qualified staff and investigate joint resistance/assembly",
      "rationale": "I-squared-R heating magnifies small resistance changes. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Power engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "IR hot spot tracks rising load current",
        "Joint resistance/torque history differs from control",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Approved electrical inspection, corrected joint process and qualified thermal/ampacity test",
      "bad_answers_explained": {
        "Raise allowable busbar temperature to pass": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Add coolant to electrical joint": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Power",
      "reflection": "If you could add only one new measurement to prove the mechanism (I-squared-R heating magnifies small resistance changes), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-010-4",
      "title": "Busbar joint hot spot — Deployment and field",
      "domain": "Power",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "One busbar joint runs far hotter than similar branches. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) IR hot spot tracks rising load current; (2) Joint resistance/torque history differs from control. What is the best initial program/technical decision?",
      "signals": [
        "IR hot spot tracks rising load current",
        "Joint resistance/torque history differs from control"
      ],
      "hypotheses": [
        "I-squared-R heating magnifies small resistance changes",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Isolate affected power path with qualified staff and investigate joint resistance/assembly",
        "Add coolant to electrical joint",
        "Raise allowable busbar temperature to pass"
      ],
      "answer_index": 1,
      "correct_action": "Isolate affected power path with qualified staff and investigate joint resistance/assembly",
      "rationale": "I-squared-R heating magnifies small resistance changes. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Power engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "IR hot spot tracks rising load current",
        "Joint resistance/torque history differs from control",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Approved electrical inspection, corrected joint process and qualified thermal/ampacity test",
      "bad_answers_explained": {
        "Raise allowable busbar temperature to pass": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Add coolant to electrical joint": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Power",
      "reflection": "If you could add only one new measurement to prove the mechanism (I-squared-R heating magnifies small resistance changes), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-011-1",
      "title": "Breaker nuisance trip — EVT discovery",
      "domain": "Power",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Upstream branch opens when multiple shelves start simultaneously. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Feed voltage normal before event; (2) Trips correlate with simultaneous startup sequence. What is the best initial program/technical decision?",
      "signals": [
        "Feed voltage normal before event",
        "Trips correlate with simultaneous startup sequence"
      ],
      "hypotheses": [
        "Protection coordination and inrush may conflict with start sequence",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Reconcile protection coordination and staggered start with qualified electrical team",
        "Declare the gate green because the program is already behind schedule",
        "Defeat protection",
        "Use larger breaker without load/feeder review"
      ],
      "answer_index": 0,
      "correct_action": "Reconcile protection coordination and staggered start with qualified electrical team",
      "rationale": "Protection coordination and inrush may conflict with start sequence. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Electrical safety, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Feed voltage normal before event",
        "Trips correlate with simultaneous startup sequence",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Fault protection and worst-case startup both validated",
      "bad_answers_explained": {
        "Defeat protection": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Use larger breaker without load/feeder review": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Power",
      "reflection": "If you could add only one new measurement to prove the mechanism (Protection coordination and inrush may conflict with start sequence), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-011-2",
      "title": "Breaker nuisance trip — Late DVT change",
      "domain": "Power",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Upstream branch opens when multiple shelves start simultaneously. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Feed voltage normal before event; (2) Trips correlate with simultaneous startup sequence. What is the best initial program/technical decision?",
      "signals": [
        "Feed voltage normal before event",
        "Trips correlate with simultaneous startup sequence"
      ],
      "hypotheses": [
        "Protection coordination and inrush may conflict with start sequence",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Defeat protection",
        "Reconcile protection coordination and staggered start with qualified electrical team",
        "Use larger breaker without load/feeder review",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 1,
      "correct_action": "Reconcile protection coordination and staggered start with qualified electrical team",
      "rationale": "Protection coordination and inrush may conflict with start sequence. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Electrical safety, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Feed voltage normal before event",
        "Trips correlate with simultaneous startup sequence",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Fault protection and worst-case startup both validated",
      "bad_answers_explained": {
        "Defeat protection": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Use larger breaker without load/feeder review": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Power",
      "reflection": "If you could add only one new measurement to prove the mechanism (Protection coordination and inrush may conflict with start sequence), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-011-3",
      "title": "Breaker nuisance trip — PVT supplier lot",
      "domain": "Power",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Upstream branch opens when multiple shelves start simultaneously. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Feed voltage normal before event; (2) Trips correlate with simultaneous startup sequence. What is the best initial program/technical decision?",
      "signals": [
        "Feed voltage normal before event",
        "Trips correlate with simultaneous startup sequence"
      ],
      "hypotheses": [
        "Protection coordination and inrush may conflict with start sequence",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Reconcile protection coordination and staggered start with qualified electrical team",
        "Defeat protection",
        "Declare the gate green because the program is already behind schedule",
        "Use larger breaker without load/feeder review"
      ],
      "answer_index": 0,
      "correct_action": "Reconcile protection coordination and staggered start with qualified electrical team",
      "rationale": "Protection coordination and inrush may conflict with start sequence. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Electrical safety, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Feed voltage normal before event",
        "Trips correlate with simultaneous startup sequence",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Fault protection and worst-case startup both validated",
      "bad_answers_explained": {
        "Defeat protection": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Use larger breaker without load/feeder review": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Power",
      "reflection": "If you could add only one new measurement to prove the mechanism (Protection coordination and inrush may conflict with start sequence), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-011-4",
      "title": "Breaker nuisance trip — Deployment and field",
      "domain": "Power",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Upstream branch opens when multiple shelves start simultaneously. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Feed voltage normal before event; (2) Trips correlate with simultaneous startup sequence. What is the best initial program/technical decision?",
      "signals": [
        "Feed voltage normal before event",
        "Trips correlate with simultaneous startup sequence"
      ],
      "hypotheses": [
        "Protection coordination and inrush may conflict with start sequence",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Defeat protection",
        "Use larger breaker without load/feeder review",
        "Declare the gate green because the program is already behind schedule",
        "Reconcile protection coordination and staggered start with qualified electrical team"
      ],
      "answer_index": 3,
      "correct_action": "Reconcile protection coordination and staggered start with qualified electrical team",
      "rationale": "Protection coordination and inrush may conflict with start sequence. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Electrical safety, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Feed voltage normal before event",
        "Trips correlate with simultaneous startup sequence",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Fault protection and worst-case startup both validated",
      "bad_answers_explained": {
        "Defeat protection": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Use larger breaker without load/feeder review": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Power",
      "reflection": "If you could add only one new measurement to prove the mechanism (Protection coordination and inrush may conflict with start sequence), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-012-1",
      "title": "Power shelf rev mismatch — EVT discovery",
      "domain": "Power",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Racks shipped with revised rectifier but previous controller image. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Serial manifest shows mixed versions; (2) Load sharing alarm only on incompatible combinations. What is the best initial program/technical decision?",
      "signals": [
        "Serial manifest shows mixed versions",
        "Load sharing alarm only on incompatible combinations"
      ],
      "hypotheses": [
        "Multi-module current share requires compatible control",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Quarantine affected revision population and validate compatibility/reflash package",
        "Ignore since idle voltage meets nominal",
        "Apply one firmware to every device blindly",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 0,
      "correct_action": "Quarantine affected revision population and validate compatibility/reflash package",
      "rationale": "Multi-module current share requires compatible control. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Firmware and quality, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Serial manifest shows mixed versions",
        "Load sharing alarm only on incompatible combinations",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Known-good compatibility table, controlled flashing, load transient pass",
      "bad_answers_explained": {
        "Apply one firmware to every device blindly": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Ignore since idle voltage meets nominal": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Power",
      "reflection": "If you could add only one new measurement to prove the mechanism (Multi-module current share requires compatible control), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-012-2",
      "title": "Power shelf rev mismatch — Late DVT change",
      "domain": "Power",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Racks shipped with revised rectifier but previous controller image. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Serial manifest shows mixed versions; (2) Load sharing alarm only on incompatible combinations. What is the best initial program/technical decision?",
      "signals": [
        "Serial manifest shows mixed versions",
        "Load sharing alarm only on incompatible combinations"
      ],
      "hypotheses": [
        "Multi-module current share requires compatible control",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Quarantine affected revision population and validate compatibility/reflash package",
        "Ignore since idle voltage meets nominal",
        "Apply one firmware to every device blindly",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 0,
      "correct_action": "Quarantine affected revision population and validate compatibility/reflash package",
      "rationale": "Multi-module current share requires compatible control. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Firmware and quality, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Serial manifest shows mixed versions",
        "Load sharing alarm only on incompatible combinations",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Known-good compatibility table, controlled flashing, load transient pass",
      "bad_answers_explained": {
        "Apply one firmware to every device blindly": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Ignore since idle voltage meets nominal": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Power",
      "reflection": "If you could add only one new measurement to prove the mechanism (Multi-module current share requires compatible control), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-012-3",
      "title": "Power shelf rev mismatch — PVT supplier lot",
      "domain": "Power",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Racks shipped with revised rectifier but previous controller image. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Serial manifest shows mixed versions; (2) Load sharing alarm only on incompatible combinations. What is the best initial program/technical decision?",
      "signals": [
        "Serial manifest shows mixed versions",
        "Load sharing alarm only on incompatible combinations"
      ],
      "hypotheses": [
        "Multi-module current share requires compatible control",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Ignore since idle voltage meets nominal",
        "Quarantine affected revision population and validate compatibility/reflash package",
        "Apply one firmware to every device blindly",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 1,
      "correct_action": "Quarantine affected revision population and validate compatibility/reflash package",
      "rationale": "Multi-module current share requires compatible control. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Firmware and quality, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Serial manifest shows mixed versions",
        "Load sharing alarm only on incompatible combinations",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Known-good compatibility table, controlled flashing, load transient pass",
      "bad_answers_explained": {
        "Apply one firmware to every device blindly": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Ignore since idle voltage meets nominal": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Power",
      "reflection": "If you could add only one new measurement to prove the mechanism (Multi-module current share requires compatible control), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-012-4",
      "title": "Power shelf rev mismatch — Deployment and field",
      "domain": "Power",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Racks shipped with revised rectifier but previous controller image. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Serial manifest shows mixed versions; (2) Load sharing alarm only on incompatible combinations. What is the best initial program/technical decision?",
      "signals": [
        "Serial manifest shows mixed versions",
        "Load sharing alarm only on incompatible combinations"
      ],
      "hypotheses": [
        "Multi-module current share requires compatible control",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Ignore since idle voltage meets nominal",
        "Declare the gate green because the program is already behind schedule",
        "Apply one firmware to every device blindly",
        "Quarantine affected revision population and validate compatibility/reflash package"
      ],
      "answer_index": 3,
      "correct_action": "Quarantine affected revision population and validate compatibility/reflash package",
      "rationale": "Multi-module current share requires compatible control. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Firmware and quality, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Serial manifest shows mixed versions",
        "Load sharing alarm only on incompatible combinations",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Known-good compatibility table, controlled flashing, load transient pass",
      "bad_answers_explained": {
        "Apply one firmware to every device blindly": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Ignore since idle voltage meets nominal": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Power",
      "reflection": "If you could add only one new measurement to prove the mechanism (Multi-module current share requires compatible control), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-013-1",
      "title": "Unexpected efficiency heat — EVT discovery",
      "domain": "Power",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Power shelf enclosures exceed thermal forecast under 80 kW rack load. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Input-to-output converter efficiency below supplier claim; (2) Fan/airflow data normal. What is the best initial program/technical decision?",
      "signals": [
        "Input-to-output converter efficiency below supplier claim",
        "Fan/airflow data normal"
      ],
      "hypotheses": [
        "Converter losses become enclosure heat and reduce available thermal margin",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Increase load to burn off heat",
        "Treat kW and kWh as equivalent",
        "Measure losses at representative input and load profile; evaluate converter defect or derating"
      ],
      "answer_index": 3,
      "correct_action": "Measure losses at representative input and load profile; evaluate converter defect or derating",
      "rationale": "Converter losses become enclosure heat and reduce available thermal margin. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Power systems, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Input-to-output converter efficiency below supplier claim",
        "Fan/airflow data normal",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Measured efficiency and enclosure thermal envelope signed off",
      "bad_answers_explained": {
        "Treat kW and kWh as equivalent": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Increase load to burn off heat": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Power",
      "reflection": "If you could add only one new measurement to prove the mechanism (Converter losses become enclosure heat and reduce available thermal margin), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-013-2",
      "title": "Unexpected efficiency heat — Late DVT change",
      "domain": "Power",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Power shelf enclosures exceed thermal forecast under 80 kW rack load. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Input-to-output converter efficiency below supplier claim; (2) Fan/airflow data normal. What is the best initial program/technical decision?",
      "signals": [
        "Input-to-output converter efficiency below supplier claim",
        "Fan/airflow data normal"
      ],
      "hypotheses": [
        "Converter losses become enclosure heat and reduce available thermal margin",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Measure losses at representative input and load profile; evaluate converter defect or derating",
        "Increase load to burn off heat",
        "Declare the gate green because the program is already behind schedule",
        "Treat kW and kWh as equivalent"
      ],
      "answer_index": 0,
      "correct_action": "Measure losses at representative input and load profile; evaluate converter defect or derating",
      "rationale": "Converter losses become enclosure heat and reduce available thermal margin. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Power systems, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Input-to-output converter efficiency below supplier claim",
        "Fan/airflow data normal",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Measured efficiency and enclosure thermal envelope signed off",
      "bad_answers_explained": {
        "Treat kW and kWh as equivalent": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Increase load to burn off heat": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Power",
      "reflection": "If you could add only one new measurement to prove the mechanism (Converter losses become enclosure heat and reduce available thermal margin), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-013-3",
      "title": "Unexpected efficiency heat — PVT supplier lot",
      "domain": "Power",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Power shelf enclosures exceed thermal forecast under 80 kW rack load. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Input-to-output converter efficiency below supplier claim; (2) Fan/airflow data normal. What is the best initial program/technical decision?",
      "signals": [
        "Input-to-output converter efficiency below supplier claim",
        "Fan/airflow data normal"
      ],
      "hypotheses": [
        "Converter losses become enclosure heat and reduce available thermal margin",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Measure losses at representative input and load profile; evaluate converter defect or derating",
        "Treat kW and kWh as equivalent",
        "Increase load to burn off heat",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 0,
      "correct_action": "Measure losses at representative input and load profile; evaluate converter defect or derating",
      "rationale": "Converter losses become enclosure heat and reduce available thermal margin. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Power systems, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Input-to-output converter efficiency below supplier claim",
        "Fan/airflow data normal",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Measured efficiency and enclosure thermal envelope signed off",
      "bad_answers_explained": {
        "Treat kW and kWh as equivalent": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Increase load to burn off heat": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Power",
      "reflection": "If you could add only one new measurement to prove the mechanism (Converter losses become enclosure heat and reduce available thermal margin), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-013-4",
      "title": "Unexpected efficiency heat — Deployment and field",
      "domain": "Power",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Power shelf enclosures exceed thermal forecast under 80 kW rack load. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Input-to-output converter efficiency below supplier claim; (2) Fan/airflow data normal. What is the best initial program/technical decision?",
      "signals": [
        "Input-to-output converter efficiency below supplier claim",
        "Fan/airflow data normal"
      ],
      "hypotheses": [
        "Converter losses become enclosure heat and reduce available thermal margin",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Increase load to burn off heat",
        "Measure losses at representative input and load profile; evaluate converter defect or derating",
        "Treat kW and kWh as equivalent"
      ],
      "answer_index": 2,
      "correct_action": "Measure losses at representative input and load profile; evaluate converter defect or derating",
      "rationale": "Converter losses become enclosure heat and reduce available thermal margin. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Power systems, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Input-to-output converter efficiency below supplier claim",
        "Fan/airflow data normal",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Measured efficiency and enclosure thermal envelope signed off",
      "bad_answers_explained": {
        "Treat kW and kWh as equivalent": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Increase load to burn off heat": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Power",
      "reflection": "If you could add only one new measurement to prove the mechanism (Converter losses become enclosure heat and reduce available thermal margin), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-014-1",
      "title": "Power factor overload — EVT discovery",
      "domain": "Power",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Facility input cable overheats although real power meters look on plan. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Apparent kVA higher than expected; (2) Power factor and harmonics were omitted in feeder study. What is the best initial program/technical decision?",
      "signals": [
        "Apparent kVA higher than expected",
        "Power factor and harmonics were omitted in feeder study"
      ],
      "hypotheses": [
        "kW alone is not sufficient for distribution sizing",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Swap CPU firmware to fix feeder ampacity",
        "Pause ramp and request qualified electrical review of kVA/current/harmonics",
        "Simply reduce reported power in dashboard"
      ],
      "answer_index": 2,
      "correct_action": "Pause ramp and request qualified electrical review of kVA/current/harmonics",
      "rationale": "kW alone is not sufficient for distribution sizing. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Facilities electrical, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Apparent kVA higher than expected",
        "Power factor and harmonics were omitted in feeder study",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Approved feeder capacity and harmonic/load test",
      "bad_answers_explained": {
        "Simply reduce reported power in dashboard": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Swap CPU firmware to fix feeder ampacity": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Power",
      "reflection": "If you could add only one new measurement to prove the mechanism (kW alone is not sufficient for distribution sizing), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-014-2",
      "title": "Power factor overload — Late DVT change",
      "domain": "Power",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Facility input cable overheats although real power meters look on plan. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Apparent kVA higher than expected; (2) Power factor and harmonics were omitted in feeder study. What is the best initial program/technical decision?",
      "signals": [
        "Apparent kVA higher than expected",
        "Power factor and harmonics were omitted in feeder study"
      ],
      "hypotheses": [
        "kW alone is not sufficient for distribution sizing",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Swap CPU firmware to fix feeder ampacity",
        "Declare the gate green because the program is already behind schedule",
        "Simply reduce reported power in dashboard",
        "Pause ramp and request qualified electrical review of kVA/current/harmonics"
      ],
      "answer_index": 3,
      "correct_action": "Pause ramp and request qualified electrical review of kVA/current/harmonics",
      "rationale": "kW alone is not sufficient for distribution sizing. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Facilities electrical, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Apparent kVA higher than expected",
        "Power factor and harmonics were omitted in feeder study",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Approved feeder capacity and harmonic/load test",
      "bad_answers_explained": {
        "Simply reduce reported power in dashboard": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Swap CPU firmware to fix feeder ampacity": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Power",
      "reflection": "If you could add only one new measurement to prove the mechanism (kW alone is not sufficient for distribution sizing), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-014-3",
      "title": "Power factor overload — PVT supplier lot",
      "domain": "Power",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Facility input cable overheats although real power meters look on plan. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Apparent kVA higher than expected; (2) Power factor and harmonics were omitted in feeder study. What is the best initial program/technical decision?",
      "signals": [
        "Apparent kVA higher than expected",
        "Power factor and harmonics were omitted in feeder study"
      ],
      "hypotheses": [
        "kW alone is not sufficient for distribution sizing",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Swap CPU firmware to fix feeder ampacity",
        "Simply reduce reported power in dashboard",
        "Pause ramp and request qualified electrical review of kVA/current/harmonics"
      ],
      "answer_index": 3,
      "correct_action": "Pause ramp and request qualified electrical review of kVA/current/harmonics",
      "rationale": "kW alone is not sufficient for distribution sizing. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Facilities electrical, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Apparent kVA higher than expected",
        "Power factor and harmonics were omitted in feeder study",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Approved feeder capacity and harmonic/load test",
      "bad_answers_explained": {
        "Simply reduce reported power in dashboard": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Swap CPU firmware to fix feeder ampacity": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Power",
      "reflection": "If you could add only one new measurement to prove the mechanism (kW alone is not sufficient for distribution sizing), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-014-4",
      "title": "Power factor overload — Deployment and field",
      "domain": "Power",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Facility input cable overheats although real power meters look on plan. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Apparent kVA higher than expected; (2) Power factor and harmonics were omitted in feeder study. What is the best initial program/technical decision?",
      "signals": [
        "Apparent kVA higher than expected",
        "Power factor and harmonics were omitted in feeder study"
      ],
      "hypotheses": [
        "kW alone is not sufficient for distribution sizing",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Simply reduce reported power in dashboard",
        "Swap CPU firmware to fix feeder ampacity",
        "Pause ramp and request qualified electrical review of kVA/current/harmonics",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 2,
      "correct_action": "Pause ramp and request qualified electrical review of kVA/current/harmonics",
      "rationale": "kW alone is not sufficient for distribution sizing. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Facilities electrical, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Apparent kVA higher than expected",
        "Power factor and harmonics were omitted in feeder study",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Approved feeder capacity and harmonic/load test",
      "bad_answers_explained": {
        "Simply reduce reported power in dashboard": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Swap CPU firmware to fix feeder ampacity": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Power",
      "reflection": "If you could add only one new measurement to prove the mechanism (kW alone is not sufficient for distribution sizing), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-015-1",
      "title": "Redundant feed cross fault — EVT discovery",
      "domain": "Power",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Loss of feed A trips racks that should survive on B. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Transfer event fails in controlled test; (2) PDU outlet mapping disagrees with rack harness drawing. What is the best initial program/technical decision?",
      "signals": [
        "Transfer event fails in controlled test",
        "PDU outlet mapping disagrees with rack harness drawing"
      ],
      "hypotheses": [
        "Two input cords may share common upstream fault or bad switchover logic",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Mark dual-corded as redundant without fault test",
        "Disable redundant alarms",
        "Hold resiliency claim and reconcile physically qualified feed mapping and protective controls",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 2,
      "correct_action": "Hold resiliency claim and reconcile physically qualified feed mapping and protective controls",
      "rationale": "Two input cords may share common upstream fault or bad switchover logic. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Electrical commissioning, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Transfer event fails in controlled test",
        "PDU outlet mapping disagrees with rack harness drawing",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Fault injection demonstrates validated independent recovery",
      "bad_answers_explained": {
        "Mark dual-corded as redundant without fault test": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Disable redundant alarms": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Power",
      "reflection": "If you could add only one new measurement to prove the mechanism (Two input cords may share common upstream fault or bad switchover logic), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-015-2",
      "title": "Redundant feed cross fault — Late DVT change",
      "domain": "Power",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Loss of feed A trips racks that should survive on B. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Transfer event fails in controlled test; (2) PDU outlet mapping disagrees with rack harness drawing. What is the best initial program/technical decision?",
      "signals": [
        "Transfer event fails in controlled test",
        "PDU outlet mapping disagrees with rack harness drawing"
      ],
      "hypotheses": [
        "Two input cords may share common upstream fault or bad switchover logic",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Disable redundant alarms",
        "Hold resiliency claim and reconcile physically qualified feed mapping and protective controls",
        "Mark dual-corded as redundant without fault test",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 1,
      "correct_action": "Hold resiliency claim and reconcile physically qualified feed mapping and protective controls",
      "rationale": "Two input cords may share common upstream fault or bad switchover logic. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Electrical commissioning, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Transfer event fails in controlled test",
        "PDU outlet mapping disagrees with rack harness drawing",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Fault injection demonstrates validated independent recovery",
      "bad_answers_explained": {
        "Mark dual-corded as redundant without fault test": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Disable redundant alarms": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Power",
      "reflection": "If you could add only one new measurement to prove the mechanism (Two input cords may share common upstream fault or bad switchover logic), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-015-3",
      "title": "Redundant feed cross fault — PVT supplier lot",
      "domain": "Power",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Loss of feed A trips racks that should survive on B. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Transfer event fails in controlled test; (2) PDU outlet mapping disagrees with rack harness drawing. What is the best initial program/technical decision?",
      "signals": [
        "Transfer event fails in controlled test",
        "PDU outlet mapping disagrees with rack harness drawing"
      ],
      "hypotheses": [
        "Two input cords may share common upstream fault or bad switchover logic",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Mark dual-corded as redundant without fault test",
        "Hold resiliency claim and reconcile physically qualified feed mapping and protective controls",
        "Disable redundant alarms",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 1,
      "correct_action": "Hold resiliency claim and reconcile physically qualified feed mapping and protective controls",
      "rationale": "Two input cords may share common upstream fault or bad switchover logic. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Electrical commissioning, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Transfer event fails in controlled test",
        "PDU outlet mapping disagrees with rack harness drawing",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Fault injection demonstrates validated independent recovery",
      "bad_answers_explained": {
        "Mark dual-corded as redundant without fault test": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Disable redundant alarms": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Power",
      "reflection": "If you could add only one new measurement to prove the mechanism (Two input cords may share common upstream fault or bad switchover logic), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-015-4",
      "title": "Redundant feed cross fault — Deployment and field",
      "domain": "Power",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Loss of feed A trips racks that should survive on B. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Transfer event fails in controlled test; (2) PDU outlet mapping disagrees with rack harness drawing. What is the best initial program/technical decision?",
      "signals": [
        "Transfer event fails in controlled test",
        "PDU outlet mapping disagrees with rack harness drawing"
      ],
      "hypotheses": [
        "Two input cords may share common upstream fault or bad switchover logic",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Disable redundant alarms",
        "Mark dual-corded as redundant without fault test",
        "Declare the gate green because the program is already behind schedule",
        "Hold resiliency claim and reconcile physically qualified feed mapping and protective controls"
      ],
      "answer_index": 3,
      "correct_action": "Hold resiliency claim and reconcile physically qualified feed mapping and protective controls",
      "rationale": "Two input cords may share common upstream fault or bad switchover logic. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Electrical commissioning, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Transfer event fails in controlled test",
        "PDU outlet mapping disagrees with rack harness drawing",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Fault injection demonstrates validated independent recovery",
      "bad_answers_explained": {
        "Mark dual-corded as redundant without fault test": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Disable redundant alarms": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Power",
      "reflection": "If you could add only one new measurement to prove the mechanism (Two input cords may share common upstream fault or bad switchover logic), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-016-1",
      "title": "Protection sensor miscalibration — EVT discovery",
      "domain": "Power",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Power current alarm trips at a much lower measured current. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Independent calibrated meter disagrees with BMC telemetry; (2) Firmware register scaling changed in new build. What is the best initial program/technical decision?",
      "signals": [
        "Independent calibrated meter disagrees with BMC telemetry",
        "Firmware register scaling changed in new build"
      ],
      "hypotheses": [
        "Wrong ADC scaling can trigger false trips or mask real faults",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Keep using stale dashboard reading",
        "Declare the gate green because the program is already behind schedule",
        "Bypass overcurrent protection",
        "Contain affected firmware, verify sensor calibration/control thresholds with safety owner"
      ],
      "answer_index": 3,
      "correct_action": "Contain affected firmware, verify sensor calibration/control thresholds with safety owner",
      "rationale": "Wrong ADC scaling can trigger false trips or mask real faults. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Firmware safety, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Independent calibrated meter disagrees with BMC telemetry",
        "Firmware register scaling changed in new build",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Independent instrument correlation and protective trip test",
      "bad_answers_explained": {
        "Bypass overcurrent protection": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Keep using stale dashboard reading": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Power",
      "reflection": "If you could add only one new measurement to prove the mechanism (Wrong ADC scaling can trigger false trips or mask real faults), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-016-2",
      "title": "Protection sensor miscalibration — Late DVT change",
      "domain": "Power",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Power current alarm trips at a much lower measured current. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Independent calibrated meter disagrees with BMC telemetry; (2) Firmware register scaling changed in new build. What is the best initial program/technical decision?",
      "signals": [
        "Independent calibrated meter disagrees with BMC telemetry",
        "Firmware register scaling changed in new build"
      ],
      "hypotheses": [
        "Wrong ADC scaling can trigger false trips or mask real faults",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Contain affected firmware, verify sensor calibration/control thresholds with safety owner",
        "Keep using stale dashboard reading",
        "Declare the gate green because the program is already behind schedule",
        "Bypass overcurrent protection"
      ],
      "answer_index": 0,
      "correct_action": "Contain affected firmware, verify sensor calibration/control thresholds with safety owner",
      "rationale": "Wrong ADC scaling can trigger false trips or mask real faults. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Firmware safety, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Independent calibrated meter disagrees with BMC telemetry",
        "Firmware register scaling changed in new build",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Independent instrument correlation and protective trip test",
      "bad_answers_explained": {
        "Bypass overcurrent protection": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Keep using stale dashboard reading": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Power",
      "reflection": "If you could add only one new measurement to prove the mechanism (Wrong ADC scaling can trigger false trips or mask real faults), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-016-3",
      "title": "Protection sensor miscalibration — PVT supplier lot",
      "domain": "Power",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Power current alarm trips at a much lower measured current. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Independent calibrated meter disagrees with BMC telemetry; (2) Firmware register scaling changed in new build. What is the best initial program/technical decision?",
      "signals": [
        "Independent calibrated meter disagrees with BMC telemetry",
        "Firmware register scaling changed in new build"
      ],
      "hypotheses": [
        "Wrong ADC scaling can trigger false trips or mask real faults",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Contain affected firmware, verify sensor calibration/control thresholds with safety owner",
        "Keep using stale dashboard reading",
        "Bypass overcurrent protection"
      ],
      "answer_index": 1,
      "correct_action": "Contain affected firmware, verify sensor calibration/control thresholds with safety owner",
      "rationale": "Wrong ADC scaling can trigger false trips or mask real faults. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Firmware safety, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Independent calibrated meter disagrees with BMC telemetry",
        "Firmware register scaling changed in new build",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Independent instrument correlation and protective trip test",
      "bad_answers_explained": {
        "Bypass overcurrent protection": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Keep using stale dashboard reading": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Power",
      "reflection": "If you could add only one new measurement to prove the mechanism (Wrong ADC scaling can trigger false trips or mask real faults), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-016-4",
      "title": "Protection sensor miscalibration — Deployment and field",
      "domain": "Power",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Power current alarm trips at a much lower measured current. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Independent calibrated meter disagrees with BMC telemetry; (2) Firmware register scaling changed in new build. What is the best initial program/technical decision?",
      "signals": [
        "Independent calibrated meter disagrees with BMC telemetry",
        "Firmware register scaling changed in new build"
      ],
      "hypotheses": [
        "Wrong ADC scaling can trigger false trips or mask real faults",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Keep using stale dashboard reading",
        "Contain affected firmware, verify sensor calibration/control thresholds with safety owner",
        "Declare the gate green because the program is already behind schedule",
        "Bypass overcurrent protection"
      ],
      "answer_index": 1,
      "correct_action": "Contain affected firmware, verify sensor calibration/control thresholds with safety owner",
      "rationale": "Wrong ADC scaling can trigger false trips or mask real faults. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Firmware safety, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Independent calibrated meter disagrees with BMC telemetry",
        "Firmware register scaling changed in new build",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Independent instrument correlation and protective trip test",
      "bad_answers_explained": {
        "Bypass overcurrent protection": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Keep using stale dashboard reading": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Power",
      "reflection": "If you could add only one new measurement to prove the mechanism (Wrong ADC scaling can trigger false trips or mask real faults), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-017-1",
      "title": "Pilot yield dip — EVT discovery",
      "domain": "Manufacturing",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "First-pass yield drops from 97 percent to 82 percent after fixture swap. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Most failures cluster at one EOL test station; (2) Golden-good unit fails that station intermittently. What is the best initial program/technical decision?",
      "signals": [
        "Most failures cluster at one EOL test station",
        "Golden-good unit fails that station intermittently"
      ],
      "hypotheses": [
        "A fixture-induced false fail wastes capacity and hides escapes",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Contain affected builds and validate fixture repeatability versus genuine board faults",
        "Declare vendor designs defective without cross-test",
        "Declare the gate green because the program is already behind schedule",
        "Reclassify all fails as passes"
      ],
      "answer_index": 0,
      "correct_action": "Contain affected builds and validate fixture repeatability versus genuine board faults",
      "rationale": "A fixture-induced false fail wastes capacity and hides escapes. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage CM test lead, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Most failures cluster at one EOL test station",
        "Golden-good unit fails that station intermittently",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Known-good/faulty controls pass, validated test limits and process capability",
      "bad_answers_explained": {
        "Declare vendor designs defective without cross-test": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Reclassify all fails as passes": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Manufacturing",
      "reflection": "If you could add only one new measurement to prove the mechanism (A fixture-induced false fail wastes capacity and hides escapes), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-017-2",
      "title": "Pilot yield dip — Late DVT change",
      "domain": "Manufacturing",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "First-pass yield drops from 97 percent to 82 percent after fixture swap. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Most failures cluster at one EOL test station; (2) Golden-good unit fails that station intermittently. What is the best initial program/technical decision?",
      "signals": [
        "Most failures cluster at one EOL test station",
        "Golden-good unit fails that station intermittently"
      ],
      "hypotheses": [
        "A fixture-induced false fail wastes capacity and hides escapes",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Contain affected builds and validate fixture repeatability versus genuine board faults",
        "Declare the gate green because the program is already behind schedule",
        "Reclassify all fails as passes",
        "Declare vendor designs defective without cross-test"
      ],
      "answer_index": 0,
      "correct_action": "Contain affected builds and validate fixture repeatability versus genuine board faults",
      "rationale": "A fixture-induced false fail wastes capacity and hides escapes. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage CM test lead, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Most failures cluster at one EOL test station",
        "Golden-good unit fails that station intermittently",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Known-good/faulty controls pass, validated test limits and process capability",
      "bad_answers_explained": {
        "Declare vendor designs defective without cross-test": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Reclassify all fails as passes": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Manufacturing",
      "reflection": "If you could add only one new measurement to prove the mechanism (A fixture-induced false fail wastes capacity and hides escapes), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-017-3",
      "title": "Pilot yield dip — PVT supplier lot",
      "domain": "Manufacturing",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "First-pass yield drops from 97 percent to 82 percent after fixture swap. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Most failures cluster at one EOL test station; (2) Golden-good unit fails that station intermittently. What is the best initial program/technical decision?",
      "signals": [
        "Most failures cluster at one EOL test station",
        "Golden-good unit fails that station intermittently"
      ],
      "hypotheses": [
        "A fixture-induced false fail wastes capacity and hides escapes",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Declare vendor designs defective without cross-test",
        "Contain affected builds and validate fixture repeatability versus genuine board faults",
        "Reclassify all fails as passes"
      ],
      "answer_index": 2,
      "correct_action": "Contain affected builds and validate fixture repeatability versus genuine board faults",
      "rationale": "A fixture-induced false fail wastes capacity and hides escapes. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage CM test lead, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Most failures cluster at one EOL test station",
        "Golden-good unit fails that station intermittently",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Known-good/faulty controls pass, validated test limits and process capability",
      "bad_answers_explained": {
        "Declare vendor designs defective without cross-test": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Reclassify all fails as passes": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Manufacturing",
      "reflection": "If you could add only one new measurement to prove the mechanism (A fixture-induced false fail wastes capacity and hides escapes), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-017-4",
      "title": "Pilot yield dip — Deployment and field",
      "domain": "Manufacturing",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "First-pass yield drops from 97 percent to 82 percent after fixture swap. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Most failures cluster at one EOL test station; (2) Golden-good unit fails that station intermittently. What is the best initial program/technical decision?",
      "signals": [
        "Most failures cluster at one EOL test station",
        "Golden-good unit fails that station intermittently"
      ],
      "hypotheses": [
        "A fixture-induced false fail wastes capacity and hides escapes",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Contain affected builds and validate fixture repeatability versus genuine board faults",
        "Declare the gate green because the program is already behind schedule",
        "Declare vendor designs defective without cross-test",
        "Reclassify all fails as passes"
      ],
      "answer_index": 0,
      "correct_action": "Contain affected builds and validate fixture repeatability versus genuine board faults",
      "rationale": "A fixture-induced false fail wastes capacity and hides escapes. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage CM test lead, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Most failures cluster at one EOL test station",
        "Golden-good unit fails that station intermittently",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Known-good/faulty controls pass, validated test limits and process capability",
      "bad_answers_explained": {
        "Declare vendor designs defective without cross-test": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Reclassify all fails as passes": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Manufacturing",
      "reflection": "If you could add only one new measurement to prove the mechanism (A fixture-induced false fail wastes capacity and hides escapes), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-018-1",
      "title": "Mixed firmware genealogy — EVT discovery",
      "domain": "Manufacturing",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Thirty pilot systems report rev D but several boot rev C CPLD. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Flashing logs missing read-back hashes; (2) Problems cluster on overnight line. What is the best initial program/technical decision?",
      "signals": [
        "Flashing logs missing read-back hashes",
        "Problems cluster on overnight line"
      ],
      "hypotheses": [
        "As-built label can diverge from actual flashed state",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Assume part label proves full compatibility",
        "Quarantine serials and enforce read-back/manifest reconciliation",
        "Mass-ship then patch at site",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 1,
      "correct_action": "Quarantine serials and enforce read-back/manifest reconciliation",
      "rationale": "As-built label can diverge from actual flashed state. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Manufacturing quality, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Flashing logs missing read-back hashes",
        "Problems cluster on overnight line",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "End-to-end serial revision audit and station interlock",
      "bad_answers_explained": {
        "Assume part label proves full compatibility": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Mass-ship then patch at site": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Manufacturing",
      "reflection": "If you could add only one new measurement to prove the mechanism (As-built label can diverge from actual flashed state), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-018-2",
      "title": "Mixed firmware genealogy — Late DVT change",
      "domain": "Manufacturing",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Thirty pilot systems report rev D but several boot rev C CPLD. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Flashing logs missing read-back hashes; (2) Problems cluster on overnight line. What is the best initial program/technical decision?",
      "signals": [
        "Flashing logs missing read-back hashes",
        "Problems cluster on overnight line"
      ],
      "hypotheses": [
        "As-built label can diverge from actual flashed state",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Assume part label proves full compatibility",
        "Declare the gate green because the program is already behind schedule",
        "Mass-ship then patch at site",
        "Quarantine serials and enforce read-back/manifest reconciliation"
      ],
      "answer_index": 3,
      "correct_action": "Quarantine serials and enforce read-back/manifest reconciliation",
      "rationale": "As-built label can diverge from actual flashed state. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Manufacturing quality, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Flashing logs missing read-back hashes",
        "Problems cluster on overnight line",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "End-to-end serial revision audit and station interlock",
      "bad_answers_explained": {
        "Assume part label proves full compatibility": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Mass-ship then patch at site": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Manufacturing",
      "reflection": "If you could add only one new measurement to prove the mechanism (As-built label can diverge from actual flashed state), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-018-3",
      "title": "Mixed firmware genealogy — PVT supplier lot",
      "domain": "Manufacturing",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Thirty pilot systems report rev D but several boot rev C CPLD. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Flashing logs missing read-back hashes; (2) Problems cluster on overnight line. What is the best initial program/technical decision?",
      "signals": [
        "Flashing logs missing read-back hashes",
        "Problems cluster on overnight line"
      ],
      "hypotheses": [
        "As-built label can diverge from actual flashed state",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Assume part label proves full compatibility",
        "Declare the gate green because the program is already behind schedule",
        "Mass-ship then patch at site",
        "Quarantine serials and enforce read-back/manifest reconciliation"
      ],
      "answer_index": 3,
      "correct_action": "Quarantine serials and enforce read-back/manifest reconciliation",
      "rationale": "As-built label can diverge from actual flashed state. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Manufacturing quality, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Flashing logs missing read-back hashes",
        "Problems cluster on overnight line",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "End-to-end serial revision audit and station interlock",
      "bad_answers_explained": {
        "Assume part label proves full compatibility": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Mass-ship then patch at site": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Manufacturing",
      "reflection": "If you could add only one new measurement to prove the mechanism (As-built label can diverge from actual flashed state), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-018-4",
      "title": "Mixed firmware genealogy — Deployment and field",
      "domain": "Manufacturing",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Thirty pilot systems report rev D but several boot rev C CPLD. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Flashing logs missing read-back hashes; (2) Problems cluster on overnight line. What is the best initial program/technical decision?",
      "signals": [
        "Flashing logs missing read-back hashes",
        "Problems cluster on overnight line"
      ],
      "hypotheses": [
        "As-built label can diverge from actual flashed state",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Mass-ship then patch at site",
        "Declare the gate green because the program is already behind schedule",
        "Assume part label proves full compatibility",
        "Quarantine serials and enforce read-back/manifest reconciliation"
      ],
      "answer_index": 3,
      "correct_action": "Quarantine serials and enforce read-back/manifest reconciliation",
      "rationale": "As-built label can diverge from actual flashed state. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Manufacturing quality, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Flashing logs missing read-back hashes",
        "Problems cluster on overnight line",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "End-to-end serial revision audit and station interlock",
      "bad_answers_explained": {
        "Assume part label proves full compatibility": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Mass-ship then patch at site": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Manufacturing",
      "reflection": "If you could add only one new measurement to prove the mechanism (As-built label can diverge from actual flashed state), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-019-1",
      "title": "Torque drift — EVT discovery",
      "domain": "Manufacturing",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Connector heating failures cluster after a maintenance shift change. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Tool calibration overdue; (2) Traveler lacks recorded torque result. What is the best initial program/technical decision?",
      "signals": [
        "Tool calibration overdue",
        "Traveler lacks recorded torque result"
      ],
      "hypotheses": [
        "Process drift creates contact resistance and latent heating",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Ignore because final output test passed",
        "Apply higher torque to all units ad hoc",
        "Declare the gate green because the program is already behind schedule",
        "Hold affected assembly population; inspect/requalify torque process and joints"
      ],
      "answer_index": 3,
      "correct_action": "Hold affected assembly population; inspect/requalify torque process and joints",
      "rationale": "Process drift creates contact resistance and latent heating. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Manufacturing engineer, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Tool calibration overdue",
        "Traveler lacks recorded torque result",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Controlled tool settings, calibrated evidence, rework/retest traceability",
      "bad_answers_explained": {
        "Ignore because final output test passed": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Apply higher torque to all units ad hoc": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Manufacturing",
      "reflection": "If you could add only one new measurement to prove the mechanism (Process drift creates contact resistance and latent heating), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-019-2",
      "title": "Torque drift — Late DVT change",
      "domain": "Manufacturing",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Connector heating failures cluster after a maintenance shift change. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Tool calibration overdue; (2) Traveler lacks recorded torque result. What is the best initial program/technical decision?",
      "signals": [
        "Tool calibration overdue",
        "Traveler lacks recorded torque result"
      ],
      "hypotheses": [
        "Process drift creates contact resistance and latent heating",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Ignore because final output test passed",
        "Apply higher torque to all units ad hoc",
        "Declare the gate green because the program is already behind schedule",
        "Hold affected assembly population; inspect/requalify torque process and joints"
      ],
      "answer_index": 3,
      "correct_action": "Hold affected assembly population; inspect/requalify torque process and joints",
      "rationale": "Process drift creates contact resistance and latent heating. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Manufacturing engineer, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Tool calibration overdue",
        "Traveler lacks recorded torque result",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Controlled tool settings, calibrated evidence, rework/retest traceability",
      "bad_answers_explained": {
        "Ignore because final output test passed": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Apply higher torque to all units ad hoc": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Manufacturing",
      "reflection": "If you could add only one new measurement to prove the mechanism (Process drift creates contact resistance and latent heating), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-019-3",
      "title": "Torque drift — PVT supplier lot",
      "domain": "Manufacturing",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Connector heating failures cluster after a maintenance shift change. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Tool calibration overdue; (2) Traveler lacks recorded torque result. What is the best initial program/technical decision?",
      "signals": [
        "Tool calibration overdue",
        "Traveler lacks recorded torque result"
      ],
      "hypotheses": [
        "Process drift creates contact resistance and latent heating",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Apply higher torque to all units ad hoc",
        "Hold affected assembly population; inspect/requalify torque process and joints",
        "Ignore because final output test passed",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 1,
      "correct_action": "Hold affected assembly population; inspect/requalify torque process and joints",
      "rationale": "Process drift creates contact resistance and latent heating. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Manufacturing engineer, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Tool calibration overdue",
        "Traveler lacks recorded torque result",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Controlled tool settings, calibrated evidence, rework/retest traceability",
      "bad_answers_explained": {
        "Ignore because final output test passed": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Apply higher torque to all units ad hoc": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Manufacturing",
      "reflection": "If you could add only one new measurement to prove the mechanism (Process drift creates contact resistance and latent heating), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-019-4",
      "title": "Torque drift — Deployment and field",
      "domain": "Manufacturing",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Connector heating failures cluster after a maintenance shift change. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Tool calibration overdue; (2) Traveler lacks recorded torque result. What is the best initial program/technical decision?",
      "signals": [
        "Tool calibration overdue",
        "Traveler lacks recorded torque result"
      ],
      "hypotheses": [
        "Process drift creates contact resistance and latent heating",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Ignore because final output test passed",
        "Hold affected assembly population; inspect/requalify torque process and joints",
        "Apply higher torque to all units ad hoc",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 1,
      "correct_action": "Hold affected assembly population; inspect/requalify torque process and joints",
      "rationale": "Process drift creates contact resistance and latent heating. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Manufacturing engineer, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Tool calibration overdue",
        "Traveler lacks recorded torque result",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Controlled tool settings, calibrated evidence, rework/retest traceability",
      "bad_answers_explained": {
        "Ignore because final output test passed": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Apply higher torque to all units ad hoc": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Manufacturing",
      "reflection": "If you could add only one new measurement to prove the mechanism (Process drift creates contact resistance and latent heating), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-020-1",
      "title": "Wrong harness pinout — EVT discovery",
      "domain": "Manufacturing",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "New rack harness interfaces with old CDU alarm wiring. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Harness P/N visually identical but wire map changed; (2) BMC sees missing leak interlock. What is the best initial program/technical decision?",
      "signals": [
        "Harness P/N visually identical but wire map changed",
        "BMC sees missing leak interlock"
      ],
      "hypotheses": [
        "Minor harness revision can change functional safety interface",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Suppress alarm to deliver schedule",
        "Declare the gate green because the program is already behind schedule",
        "Cut and reterminate cables at site unsupervised",
        "Quarantine and verify ICD + pin-to-pin electrical test by revision"
      ],
      "answer_index": 3,
      "correct_action": "Quarantine and verify ICD + pin-to-pin electrical test by revision",
      "rationale": "Minor harness revision can change functional safety interface. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Systems integration, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Harness P/N visually identical but wire map changed",
        "BMC sees missing leak interlock",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Approved drawing and verified EOL test of interface",
      "bad_answers_explained": {
        "Cut and reterminate cables at site unsupervised": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Suppress alarm to deliver schedule": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Manufacturing",
      "reflection": "If you could add only one new measurement to prove the mechanism (Minor harness revision can change functional safety interface), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-020-2",
      "title": "Wrong harness pinout — Late DVT change",
      "domain": "Manufacturing",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "New rack harness interfaces with old CDU alarm wiring. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Harness P/N visually identical but wire map changed; (2) BMC sees missing leak interlock. What is the best initial program/technical decision?",
      "signals": [
        "Harness P/N visually identical but wire map changed",
        "BMC sees missing leak interlock"
      ],
      "hypotheses": [
        "Minor harness revision can change functional safety interface",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Suppress alarm to deliver schedule",
        "Cut and reterminate cables at site unsupervised",
        "Quarantine and verify ICD + pin-to-pin electrical test by revision",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 2,
      "correct_action": "Quarantine and verify ICD + pin-to-pin electrical test by revision",
      "rationale": "Minor harness revision can change functional safety interface. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Systems integration, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Harness P/N visually identical but wire map changed",
        "BMC sees missing leak interlock",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Approved drawing and verified EOL test of interface",
      "bad_answers_explained": {
        "Cut and reterminate cables at site unsupervised": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Suppress alarm to deliver schedule": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Manufacturing",
      "reflection": "If you could add only one new measurement to prove the mechanism (Minor harness revision can change functional safety interface), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-020-3",
      "title": "Wrong harness pinout — PVT supplier lot",
      "domain": "Manufacturing",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "New rack harness interfaces with old CDU alarm wiring. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Harness P/N visually identical but wire map changed; (2) BMC sees missing leak interlock. What is the best initial program/technical decision?",
      "signals": [
        "Harness P/N visually identical but wire map changed",
        "BMC sees missing leak interlock"
      ],
      "hypotheses": [
        "Minor harness revision can change functional safety interface",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Suppress alarm to deliver schedule",
        "Quarantine and verify ICD + pin-to-pin electrical test by revision",
        "Declare the gate green because the program is already behind schedule",
        "Cut and reterminate cables at site unsupervised"
      ],
      "answer_index": 1,
      "correct_action": "Quarantine and verify ICD + pin-to-pin electrical test by revision",
      "rationale": "Minor harness revision can change functional safety interface. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Systems integration, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Harness P/N visually identical but wire map changed",
        "BMC sees missing leak interlock",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Approved drawing and verified EOL test of interface",
      "bad_answers_explained": {
        "Cut and reterminate cables at site unsupervised": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Suppress alarm to deliver schedule": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Manufacturing",
      "reflection": "If you could add only one new measurement to prove the mechanism (Minor harness revision can change functional safety interface), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-020-4",
      "title": "Wrong harness pinout — Deployment and field",
      "domain": "Manufacturing",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "New rack harness interfaces with old CDU alarm wiring. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Harness P/N visually identical but wire map changed; (2) BMC sees missing leak interlock. What is the best initial program/technical decision?",
      "signals": [
        "Harness P/N visually identical but wire map changed",
        "BMC sees missing leak interlock"
      ],
      "hypotheses": [
        "Minor harness revision can change functional safety interface",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Cut and reterminate cables at site unsupervised",
        "Suppress alarm to deliver schedule",
        "Declare the gate green because the program is already behind schedule",
        "Quarantine and verify ICD + pin-to-pin electrical test by revision"
      ],
      "answer_index": 3,
      "correct_action": "Quarantine and verify ICD + pin-to-pin electrical test by revision",
      "rationale": "Minor harness revision can change functional safety interface. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Systems integration, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Harness P/N visually identical but wire map changed",
        "BMC sees missing leak interlock",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Approved drawing and verified EOL test of interface",
      "bad_answers_explained": {
        "Cut and reterminate cables at site unsupervised": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Suppress alarm to deliver schedule": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Manufacturing",
      "reflection": "If you could add only one new measurement to prove the mechanism (Minor harness revision can change functional safety interface), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-021-1",
      "title": "Burn-in false pass — EVT discovery",
      "domain": "Manufacturing",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Field DOA grows despite 99 percent factory final yield. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Burn-in workload rarely exercises interconnect at temperature; (2) Early failures appear during customer soak. What is the best initial program/technical decision?",
      "signals": [
        "Burn-in workload rarely exercises interconnect at temperature",
        "Early failures appear during customer soak"
      ],
      "hypotheses": [
        "An unrepresentative screen can miss latent infant failures",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Claim 99 percent is proof of reliability",
        "Update burn-in profile with fault-detecting thermal/network stress and traceability",
        "Replace only customer monitoring agents",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 1,
      "correct_action": "Update burn-in profile with fault-detecting thermal/network stress and traceability",
      "rationale": "An unrepresentative screen can miss latent infant failures. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Reliability engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Burn-in workload rarely exercises interconnect at temperature",
        "Early failures appear during customer soak",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Demonstrated detection coverage plus field failure trend reduction",
      "bad_answers_explained": {
        "Claim 99 percent is proof of reliability": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Replace only customer monitoring agents": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Manufacturing",
      "reflection": "If you could add only one new measurement to prove the mechanism (An unrepresentative screen can miss latent infant failures), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-021-2",
      "title": "Burn-in false pass — Late DVT change",
      "domain": "Manufacturing",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Field DOA grows despite 99 percent factory final yield. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Burn-in workload rarely exercises interconnect at temperature; (2) Early failures appear during customer soak. What is the best initial program/technical decision?",
      "signals": [
        "Burn-in workload rarely exercises interconnect at temperature",
        "Early failures appear during customer soak"
      ],
      "hypotheses": [
        "An unrepresentative screen can miss latent infant failures",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Replace only customer monitoring agents",
        "Claim 99 percent is proof of reliability",
        "Declare the gate green because the program is already behind schedule",
        "Update burn-in profile with fault-detecting thermal/network stress and traceability"
      ],
      "answer_index": 3,
      "correct_action": "Update burn-in profile with fault-detecting thermal/network stress and traceability",
      "rationale": "An unrepresentative screen can miss latent infant failures. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Reliability engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Burn-in workload rarely exercises interconnect at temperature",
        "Early failures appear during customer soak",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Demonstrated detection coverage plus field failure trend reduction",
      "bad_answers_explained": {
        "Claim 99 percent is proof of reliability": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Replace only customer monitoring agents": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Manufacturing",
      "reflection": "If you could add only one new measurement to prove the mechanism (An unrepresentative screen can miss latent infant failures), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-021-3",
      "title": "Burn-in false pass — PVT supplier lot",
      "domain": "Manufacturing",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Field DOA grows despite 99 percent factory final yield. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Burn-in workload rarely exercises interconnect at temperature; (2) Early failures appear during customer soak. What is the best initial program/technical decision?",
      "signals": [
        "Burn-in workload rarely exercises interconnect at temperature",
        "Early failures appear during customer soak"
      ],
      "hypotheses": [
        "An unrepresentative screen can miss latent infant failures",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Update burn-in profile with fault-detecting thermal/network stress and traceability",
        "Claim 99 percent is proof of reliability",
        "Declare the gate green because the program is already behind schedule",
        "Replace only customer monitoring agents"
      ],
      "answer_index": 0,
      "correct_action": "Update burn-in profile with fault-detecting thermal/network stress and traceability",
      "rationale": "An unrepresentative screen can miss latent infant failures. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Reliability engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Burn-in workload rarely exercises interconnect at temperature",
        "Early failures appear during customer soak",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Demonstrated detection coverage plus field failure trend reduction",
      "bad_answers_explained": {
        "Claim 99 percent is proof of reliability": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Replace only customer monitoring agents": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Manufacturing",
      "reflection": "If you could add only one new measurement to prove the mechanism (An unrepresentative screen can miss latent infant failures), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-021-4",
      "title": "Burn-in false pass — Deployment and field",
      "domain": "Manufacturing",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Field DOA grows despite 99 percent factory final yield. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Burn-in workload rarely exercises interconnect at temperature; (2) Early failures appear during customer soak. What is the best initial program/technical decision?",
      "signals": [
        "Burn-in workload rarely exercises interconnect at temperature",
        "Early failures appear during customer soak"
      ],
      "hypotheses": [
        "An unrepresentative screen can miss latent infant failures",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Claim 99 percent is proof of reliability",
        "Replace only customer monitoring agents",
        "Update burn-in profile with fault-detecting thermal/network stress and traceability",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 2,
      "correct_action": "Update burn-in profile with fault-detecting thermal/network stress and traceability",
      "rationale": "An unrepresentative screen can miss latent infant failures. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Reliability engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Burn-in workload rarely exercises interconnect at temperature",
        "Early failures appear during customer soak",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Demonstrated detection coverage plus field failure trend reduction",
      "bad_answers_explained": {
        "Claim 99 percent is proof of reliability": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Replace only customer monitoring agents": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Manufacturing",
      "reflection": "If you could add only one new measurement to prove the mechanism (An unrepresentative screen can miss latent infant failures), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-022-1",
      "title": "Supplier board solder void — EVT discovery",
      "domain": "Manufacturing",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Power boards from one lot fail after vibration and thermal cycling. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) X-ray/FA finds abnormal solder joints; (2) Failures cluster on supplier line 2. What is the best initial program/technical decision?",
      "signals": [
        "X-ray/FA finds abnormal solder joints",
        "Failures cluster on supplier line 2"
      ],
      "hypotheses": [
        "Manufacturing joint reliability depends on process settings and inspection coverage",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Contain impacted lots and qualify supplier process correction plus sample inspection",
        "Blame site operations without lot analysis",
        "Declare the gate green because the program is already behind schedule",
        "Use every board until it fails"
      ],
      "answer_index": 0,
      "correct_action": "Contain impacted lots and qualify supplier process correction plus sample inspection",
      "rationale": "Manufacturing joint reliability depends on process settings and inspection coverage. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Supplier quality, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "X-ray/FA finds abnormal solder joints",
        "Failures cluster on supplier line 2",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Supplier CAPA with repeated stress/inspection and incoming controls",
      "bad_answers_explained": {
        "Use every board until it fails": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Blame site operations without lot analysis": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Manufacturing",
      "reflection": "If you could add only one new measurement to prove the mechanism (Manufacturing joint reliability depends on process settings and inspection coverage), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-022-2",
      "title": "Supplier board solder void — Late DVT change",
      "domain": "Manufacturing",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Power boards from one lot fail after vibration and thermal cycling. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) X-ray/FA finds abnormal solder joints; (2) Failures cluster on supplier line 2. What is the best initial program/technical decision?",
      "signals": [
        "X-ray/FA finds abnormal solder joints",
        "Failures cluster on supplier line 2"
      ],
      "hypotheses": [
        "Manufacturing joint reliability depends on process settings and inspection coverage",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Contain impacted lots and qualify supplier process correction plus sample inspection",
        "Use every board until it fails",
        "Blame site operations without lot analysis"
      ],
      "answer_index": 1,
      "correct_action": "Contain impacted lots and qualify supplier process correction plus sample inspection",
      "rationale": "Manufacturing joint reliability depends on process settings and inspection coverage. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Supplier quality, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "X-ray/FA finds abnormal solder joints",
        "Failures cluster on supplier line 2",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Supplier CAPA with repeated stress/inspection and incoming controls",
      "bad_answers_explained": {
        "Use every board until it fails": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Blame site operations without lot analysis": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Manufacturing",
      "reflection": "If you could add only one new measurement to prove the mechanism (Manufacturing joint reliability depends on process settings and inspection coverage), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-022-3",
      "title": "Supplier board solder void — PVT supplier lot",
      "domain": "Manufacturing",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Power boards from one lot fail after vibration and thermal cycling. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) X-ray/FA finds abnormal solder joints; (2) Failures cluster on supplier line 2. What is the best initial program/technical decision?",
      "signals": [
        "X-ray/FA finds abnormal solder joints",
        "Failures cluster on supplier line 2"
      ],
      "hypotheses": [
        "Manufacturing joint reliability depends on process settings and inspection coverage",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Use every board until it fails",
        "Blame site operations without lot analysis",
        "Declare the gate green because the program is already behind schedule",
        "Contain impacted lots and qualify supplier process correction plus sample inspection"
      ],
      "answer_index": 3,
      "correct_action": "Contain impacted lots and qualify supplier process correction plus sample inspection",
      "rationale": "Manufacturing joint reliability depends on process settings and inspection coverage. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Supplier quality, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "X-ray/FA finds abnormal solder joints",
        "Failures cluster on supplier line 2",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Supplier CAPA with repeated stress/inspection and incoming controls",
      "bad_answers_explained": {
        "Use every board until it fails": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Blame site operations without lot analysis": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Manufacturing",
      "reflection": "If you could add only one new measurement to prove the mechanism (Manufacturing joint reliability depends on process settings and inspection coverage), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-022-4",
      "title": "Supplier board solder void — Deployment and field",
      "domain": "Manufacturing",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Power boards from one lot fail after vibration and thermal cycling. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) X-ray/FA finds abnormal solder joints; (2) Failures cluster on supplier line 2. What is the best initial program/technical decision?",
      "signals": [
        "X-ray/FA finds abnormal solder joints",
        "Failures cluster on supplier line 2"
      ],
      "hypotheses": [
        "Manufacturing joint reliability depends on process settings and inspection coverage",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Use every board until it fails",
        "Blame site operations without lot analysis",
        "Contain impacted lots and qualify supplier process correction plus sample inspection",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 2,
      "correct_action": "Contain impacted lots and qualify supplier process correction plus sample inspection",
      "rationale": "Manufacturing joint reliability depends on process settings and inspection coverage. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Supplier quality, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "X-ray/FA finds abnormal solder joints",
        "Failures cluster on supplier line 2",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Supplier CAPA with repeated stress/inspection and incoming controls",
      "bad_answers_explained": {
        "Use every board until it fails": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Blame site operations without lot analysis": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Manufacturing",
      "reflection": "If you could add only one new measurement to prove the mechanism (Manufacturing joint reliability depends on process settings and inspection coverage), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-023-1",
      "title": "Packaging damage — EVT discovery",
      "domain": "Manufacturing",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Rack door deformation rises after freight mode change. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Incoming photo/impact logger correlates with carrier route; (2) Factory final inspection passes before transit. What is the best initial program/technical decision?",
      "signals": [
        "Incoming photo/impact logger correlates with carrier route",
        "Factory final inspection passes before transit"
      ],
      "hypotheses": [
        "Shipping is part of product acceptance and critical tolerance chain",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Redesign accelerator silicon",
        "Declare the gate green because the program is already behind schedule",
        "Treat shipping impacts as cosmetic universally",
        "Hold transit-exposed population and qualify packaging/handling logistics"
      ],
      "answer_index": 3,
      "correct_action": "Hold transit-exposed population and qualify packaging/handling logistics",
      "rationale": "Shipping is part of product acceptance and critical tolerance chain. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Logistics engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Incoming photo/impact logger correlates with carrier route",
        "Factory final inspection passes before transit",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Shipment vibration/tilt/impact qualification and arrival inspection",
      "bad_answers_explained": {
        "Redesign accelerator silicon": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Treat shipping impacts as cosmetic universally": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Manufacturing",
      "reflection": "If you could add only one new measurement to prove the mechanism (Shipping is part of product acceptance and critical tolerance chain), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-023-2",
      "title": "Packaging damage — Late DVT change",
      "domain": "Manufacturing",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Rack door deformation rises after freight mode change. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Incoming photo/impact logger correlates with carrier route; (2) Factory final inspection passes before transit. What is the best initial program/technical decision?",
      "signals": [
        "Incoming photo/impact logger correlates with carrier route",
        "Factory final inspection passes before transit"
      ],
      "hypotheses": [
        "Shipping is part of product acceptance and critical tolerance chain",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Redesign accelerator silicon",
        "Declare the gate green because the program is already behind schedule",
        "Hold transit-exposed population and qualify packaging/handling logistics",
        "Treat shipping impacts as cosmetic universally"
      ],
      "answer_index": 2,
      "correct_action": "Hold transit-exposed population and qualify packaging/handling logistics",
      "rationale": "Shipping is part of product acceptance and critical tolerance chain. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Logistics engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Incoming photo/impact logger correlates with carrier route",
        "Factory final inspection passes before transit",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Shipment vibration/tilt/impact qualification and arrival inspection",
      "bad_answers_explained": {
        "Redesign accelerator silicon": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Treat shipping impacts as cosmetic universally": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Manufacturing",
      "reflection": "If you could add only one new measurement to prove the mechanism (Shipping is part of product acceptance and critical tolerance chain), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-023-3",
      "title": "Packaging damage — PVT supplier lot",
      "domain": "Manufacturing",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Rack door deformation rises after freight mode change. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Incoming photo/impact logger correlates with carrier route; (2) Factory final inspection passes before transit. What is the best initial program/technical decision?",
      "signals": [
        "Incoming photo/impact logger correlates with carrier route",
        "Factory final inspection passes before transit"
      ],
      "hypotheses": [
        "Shipping is part of product acceptance and critical tolerance chain",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Hold transit-exposed population and qualify packaging/handling logistics",
        "Redesign accelerator silicon",
        "Treat shipping impacts as cosmetic universally"
      ],
      "answer_index": 1,
      "correct_action": "Hold transit-exposed population and qualify packaging/handling logistics",
      "rationale": "Shipping is part of product acceptance and critical tolerance chain. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Logistics engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Incoming photo/impact logger correlates with carrier route",
        "Factory final inspection passes before transit",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Shipment vibration/tilt/impact qualification and arrival inspection",
      "bad_answers_explained": {
        "Redesign accelerator silicon": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Treat shipping impacts as cosmetic universally": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Manufacturing",
      "reflection": "If you could add only one new measurement to prove the mechanism (Shipping is part of product acceptance and critical tolerance chain), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-023-4",
      "title": "Packaging damage — Deployment and field",
      "domain": "Manufacturing",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Rack door deformation rises after freight mode change. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Incoming photo/impact logger correlates with carrier route; (2) Factory final inspection passes before transit. What is the best initial program/technical decision?",
      "signals": [
        "Incoming photo/impact logger correlates with carrier route",
        "Factory final inspection passes before transit"
      ],
      "hypotheses": [
        "Shipping is part of product acceptance and critical tolerance chain",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Treat shipping impacts as cosmetic universally",
        "Redesign accelerator silicon",
        "Declare the gate green because the program is already behind schedule",
        "Hold transit-exposed population and qualify packaging/handling logistics"
      ],
      "answer_index": 3,
      "correct_action": "Hold transit-exposed population and qualify packaging/handling logistics",
      "rationale": "Shipping is part of product acceptance and critical tolerance chain. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Logistics engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Incoming photo/impact logger correlates with carrier route",
        "Factory final inspection passes before transit",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Shipment vibration/tilt/impact qualification and arrival inspection",
      "bad_answers_explained": {
        "Redesign accelerator silicon": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Treat shipping impacts as cosmetic universally": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Manufacturing",
      "reflection": "If you could add only one new measurement to prove the mechanism (Shipping is part of product acceptance and critical tolerance chain), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-024-1",
      "title": "EOL recipe stale — EVT discovery",
      "domain": "Manufacturing",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "New production boards pass old fixture tests but fail field stress. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Test recipe version predates ECO; (2) Golden unit shows no coverage for new current-sharing behavior. What is the best initial program/technical decision?",
      "signals": [
        "Test recipe version predates ECO",
        "Golden unit shows no coverage for new current-sharing behavior"
      ],
      "hypotheses": [
        "Test procedure is part of the released configuration baseline",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Only test new hardware on idle",
        "Backdate the change and ship",
        "Declare the gate green because the program is already behind schedule",
        "Hold affected revision, update procedure and retest impacted serials"
      ],
      "answer_index": 3,
      "correct_action": "Hold affected revision, update procedure and retest impacted serials",
      "rationale": "Test procedure is part of the released configuration baseline. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Test engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Test recipe version predates ECO",
        "Golden unit shows no coverage for new current-sharing behavior",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Changed requirements traced to EOL test coverage and pass",
      "bad_answers_explained": {
        "Backdate the change and ship": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Only test new hardware on idle": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Manufacturing",
      "reflection": "If you could add only one new measurement to prove the mechanism (Test procedure is part of the released configuration baseline), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-024-2",
      "title": "EOL recipe stale — Late DVT change",
      "domain": "Manufacturing",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "New production boards pass old fixture tests but fail field stress. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Test recipe version predates ECO; (2) Golden unit shows no coverage for new current-sharing behavior. What is the best initial program/technical decision?",
      "signals": [
        "Test recipe version predates ECO",
        "Golden unit shows no coverage for new current-sharing behavior"
      ],
      "hypotheses": [
        "Test procedure is part of the released configuration baseline",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Only test new hardware on idle",
        "Hold affected revision, update procedure and retest impacted serials",
        "Declare the gate green because the program is already behind schedule",
        "Backdate the change and ship"
      ],
      "answer_index": 1,
      "correct_action": "Hold affected revision, update procedure and retest impacted serials",
      "rationale": "Test procedure is part of the released configuration baseline. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Test engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Test recipe version predates ECO",
        "Golden unit shows no coverage for new current-sharing behavior",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Changed requirements traced to EOL test coverage and pass",
      "bad_answers_explained": {
        "Backdate the change and ship": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Only test new hardware on idle": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Manufacturing",
      "reflection": "If you could add only one new measurement to prove the mechanism (Test procedure is part of the released configuration baseline), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-024-3",
      "title": "EOL recipe stale — PVT supplier lot",
      "domain": "Manufacturing",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "New production boards pass old fixture tests but fail field stress. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Test recipe version predates ECO; (2) Golden unit shows no coverage for new current-sharing behavior. What is the best initial program/technical decision?",
      "signals": [
        "Test recipe version predates ECO",
        "Golden unit shows no coverage for new current-sharing behavior"
      ],
      "hypotheses": [
        "Test procedure is part of the released configuration baseline",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Hold affected revision, update procedure and retest impacted serials",
        "Backdate the change and ship",
        "Declare the gate green because the program is already behind schedule",
        "Only test new hardware on idle"
      ],
      "answer_index": 0,
      "correct_action": "Hold affected revision, update procedure and retest impacted serials",
      "rationale": "Test procedure is part of the released configuration baseline. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Test engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Test recipe version predates ECO",
        "Golden unit shows no coverage for new current-sharing behavior",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Changed requirements traced to EOL test coverage and pass",
      "bad_answers_explained": {
        "Backdate the change and ship": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Only test new hardware on idle": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Manufacturing",
      "reflection": "If you could add only one new measurement to prove the mechanism (Test procedure is part of the released configuration baseline), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-024-4",
      "title": "EOL recipe stale — Deployment and field",
      "domain": "Manufacturing",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "New production boards pass old fixture tests but fail field stress. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Test recipe version predates ECO; (2) Golden unit shows no coverage for new current-sharing behavior. What is the best initial program/technical decision?",
      "signals": [
        "Test recipe version predates ECO",
        "Golden unit shows no coverage for new current-sharing behavior"
      ],
      "hypotheses": [
        "Test procedure is part of the released configuration baseline",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Only test new hardware on idle",
        "Declare the gate green because the program is already behind schedule",
        "Backdate the change and ship",
        "Hold affected revision, update procedure and retest impacted serials"
      ],
      "answer_index": 3,
      "correct_action": "Hold affected revision, update procedure and retest impacted serials",
      "rationale": "Test procedure is part of the released configuration baseline. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Test engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Test recipe version predates ECO",
        "Golden unit shows no coverage for new current-sharing behavior",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Changed requirements traced to EOL test coverage and pass",
      "bad_answers_explained": {
        "Backdate the change and ship": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Only test new hardware on idle": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Manufacturing",
      "reflection": "If you could add only one new measurement to prove the mechanism (Test procedure is part of the released configuration baseline), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-025-1",
      "title": "Capacitor 24-week shortage — EVT discovery",
      "domain": "Supply",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "DVT discovers power shelf capacitor will not arrive before pilot. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Supplier confirms 24 weeks from approved PO; (2) Site power-on requires qualified racks in 12 weeks. What is the best initial program/technical decision?",
      "signals": [
        "Supplier confirms 24 weeks from approved PO",
        "Site power-on requires qualified racks in 12 weeks"
      ],
      "hypotheses": [
        "Critical capacitor specs include ESR/ripple/temp/life and safety",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Install electrically unqualified generic capacitor",
        "Convene 48-hour change board; compare qualified alternate and date/scope branch",
        "Assume expedite defeats fabrication time"
      ],
      "answer_index": 2,
      "correct_action": "Convene 48-hour change board; compare qualified alternate and date/scope branch",
      "rationale": "Critical capacitor specs include ESR/ripple/temp/life and safety. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Power quality and sourcing, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Supplier confirms 24 weeks from approved PO",
        "Site power-on requires qualified racks in 12 weeks",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Qualified AVL alternate or signed schedule reset and new serial baseline",
      "bad_answers_explained": {
        "Install electrically unqualified generic capacitor": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Assume expedite defeats fabrication time": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Supply",
      "reflection": "If you could add only one new measurement to prove the mechanism (Critical capacitor specs include ESR/ripple/temp/life and safety), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-025-2",
      "title": "Capacitor 24-week shortage — Late DVT change",
      "domain": "Supply",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "DVT discovers power shelf capacitor will not arrive before pilot. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Supplier confirms 24 weeks from approved PO; (2) Site power-on requires qualified racks in 12 weeks. What is the best initial program/technical decision?",
      "signals": [
        "Supplier confirms 24 weeks from approved PO",
        "Site power-on requires qualified racks in 12 weeks"
      ],
      "hypotheses": [
        "Critical capacitor specs include ESR/ripple/temp/life and safety",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Convene 48-hour change board; compare qualified alternate and date/scope branch",
        "Assume expedite defeats fabrication time",
        "Install electrically unqualified generic capacitor",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 0,
      "correct_action": "Convene 48-hour change board; compare qualified alternate and date/scope branch",
      "rationale": "Critical capacitor specs include ESR/ripple/temp/life and safety. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Power quality and sourcing, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Supplier confirms 24 weeks from approved PO",
        "Site power-on requires qualified racks in 12 weeks",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Qualified AVL alternate or signed schedule reset and new serial baseline",
      "bad_answers_explained": {
        "Install electrically unqualified generic capacitor": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Assume expedite defeats fabrication time": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Supply",
      "reflection": "If you could add only one new measurement to prove the mechanism (Critical capacitor specs include ESR/ripple/temp/life and safety), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-025-3",
      "title": "Capacitor 24-week shortage — PVT supplier lot",
      "domain": "Supply",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "DVT discovers power shelf capacitor will not arrive before pilot. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Supplier confirms 24 weeks from approved PO; (2) Site power-on requires qualified racks in 12 weeks. What is the best initial program/technical decision?",
      "signals": [
        "Supplier confirms 24 weeks from approved PO",
        "Site power-on requires qualified racks in 12 weeks"
      ],
      "hypotheses": [
        "Critical capacitor specs include ESR/ripple/temp/life and safety",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Convene 48-hour change board; compare qualified alternate and date/scope branch",
        "Assume expedite defeats fabrication time",
        "Declare the gate green because the program is already behind schedule",
        "Install electrically unqualified generic capacitor"
      ],
      "answer_index": 0,
      "correct_action": "Convene 48-hour change board; compare qualified alternate and date/scope branch",
      "rationale": "Critical capacitor specs include ESR/ripple/temp/life and safety. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Power quality and sourcing, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Supplier confirms 24 weeks from approved PO",
        "Site power-on requires qualified racks in 12 weeks",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Qualified AVL alternate or signed schedule reset and new serial baseline",
      "bad_answers_explained": {
        "Install electrically unqualified generic capacitor": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Assume expedite defeats fabrication time": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Supply",
      "reflection": "If you could add only one new measurement to prove the mechanism (Critical capacitor specs include ESR/ripple/temp/life and safety), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-025-4",
      "title": "Capacitor 24-week shortage — Deployment and field",
      "domain": "Supply",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "DVT discovers power shelf capacitor will not arrive before pilot. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Supplier confirms 24 weeks from approved PO; (2) Site power-on requires qualified racks in 12 weeks. What is the best initial program/technical decision?",
      "signals": [
        "Supplier confirms 24 weeks from approved PO",
        "Site power-on requires qualified racks in 12 weeks"
      ],
      "hypotheses": [
        "Critical capacitor specs include ESR/ripple/temp/life and safety",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Convene 48-hour change board; compare qualified alternate and date/scope branch",
        "Assume expedite defeats fabrication time",
        "Declare the gate green because the program is already behind schedule",
        "Install electrically unqualified generic capacitor"
      ],
      "answer_index": 0,
      "correct_action": "Convene 48-hour change board; compare qualified alternate and date/scope branch",
      "rationale": "Critical capacitor specs include ESR/ripple/temp/life and safety. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Power quality and sourcing, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Supplier confirms 24 weeks from approved PO",
        "Site power-on requires qualified racks in 12 weeks",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Qualified AVL alternate or signed schedule reset and new serial baseline",
      "bad_answers_explained": {
        "Install electrically unqualified generic capacitor": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Assume expedite defeats fabrication time": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Supply",
      "reflection": "If you could add only one new measurement to prove the mechanism (Critical capacitor specs include ESR/ripple/temp/life and safety), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-026-1",
      "title": "Magnetics vendor capacity — EVT discovery",
      "domain": "Supply",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Custom transformer supplier slips three weeks after tooling signoff. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Sub-tier core material commit is late; (2) CM can assemble all other subsystems. What is the best initial program/technical decision?",
      "signals": [
        "Sub-tier core material commit is late",
        "CM can assemble all other subsystems"
      ],
      "hypotheses": [
        "Physical tooling/material bottlenecks require credible path and WIP control",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Model actual critical path and approved prebuild partial WIP; develop alternate qualified path",
        "Hide critical path slip in buffer",
        "Declare the gate green because the program is already behind schedule",
        "Ship incomplete unsafe power assemblies"
      ],
      "answer_index": 0,
      "correct_action": "Model actual critical path and approved prebuild partial WIP; develop alternate qualified path",
      "rationale": "Physical tooling/material bottlenecks require credible path and WIP control. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Sourcing, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Sub-tier core material commit is late",
        "CM can assemble all other subsystems",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Written supplier commitment and qualified tested module delivery",
      "bad_answers_explained": {
        "Hide critical path slip in buffer": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Ship incomplete unsafe power assemblies": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Supply",
      "reflection": "If you could add only one new measurement to prove the mechanism (Physical tooling/material bottlenecks require credible path and WIP control), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-026-2",
      "title": "Magnetics vendor capacity — Late DVT change",
      "domain": "Supply",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Custom transformer supplier slips three weeks after tooling signoff. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Sub-tier core material commit is late; (2) CM can assemble all other subsystems. What is the best initial program/technical decision?",
      "signals": [
        "Sub-tier core material commit is late",
        "CM can assemble all other subsystems"
      ],
      "hypotheses": [
        "Physical tooling/material bottlenecks require credible path and WIP control",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Model actual critical path and approved prebuild partial WIP; develop alternate qualified path",
        "Ship incomplete unsafe power assemblies",
        "Hide critical path slip in buffer"
      ],
      "answer_index": 1,
      "correct_action": "Model actual critical path and approved prebuild partial WIP; develop alternate qualified path",
      "rationale": "Physical tooling/material bottlenecks require credible path and WIP control. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Sourcing, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Sub-tier core material commit is late",
        "CM can assemble all other subsystems",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Written supplier commitment and qualified tested module delivery",
      "bad_answers_explained": {
        "Hide critical path slip in buffer": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Ship incomplete unsafe power assemblies": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Supply",
      "reflection": "If you could add only one new measurement to prove the mechanism (Physical tooling/material bottlenecks require credible path and WIP control), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-026-3",
      "title": "Magnetics vendor capacity — PVT supplier lot",
      "domain": "Supply",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Custom transformer supplier slips three weeks after tooling signoff. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Sub-tier core material commit is late; (2) CM can assemble all other subsystems. What is the best initial program/technical decision?",
      "signals": [
        "Sub-tier core material commit is late",
        "CM can assemble all other subsystems"
      ],
      "hypotheses": [
        "Physical tooling/material bottlenecks require credible path and WIP control",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Model actual critical path and approved prebuild partial WIP; develop alternate qualified path",
        "Declare the gate green because the program is already behind schedule",
        "Hide critical path slip in buffer",
        "Ship incomplete unsafe power assemblies"
      ],
      "answer_index": 0,
      "correct_action": "Model actual critical path and approved prebuild partial WIP; develop alternate qualified path",
      "rationale": "Physical tooling/material bottlenecks require credible path and WIP control. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Sourcing, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Sub-tier core material commit is late",
        "CM can assemble all other subsystems",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Written supplier commitment and qualified tested module delivery",
      "bad_answers_explained": {
        "Hide critical path slip in buffer": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Ship incomplete unsafe power assemblies": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Supply",
      "reflection": "If you could add only one new measurement to prove the mechanism (Physical tooling/material bottlenecks require credible path and WIP control), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-026-4",
      "title": "Magnetics vendor capacity — Deployment and field",
      "domain": "Supply",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Custom transformer supplier slips three weeks after tooling signoff. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Sub-tier core material commit is late; (2) CM can assemble all other subsystems. What is the best initial program/technical decision?",
      "signals": [
        "Sub-tier core material commit is late",
        "CM can assemble all other subsystems"
      ],
      "hypotheses": [
        "Physical tooling/material bottlenecks require credible path and WIP control",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Model actual critical path and approved prebuild partial WIP; develop alternate qualified path",
        "Ship incomplete unsafe power assemblies",
        "Declare the gate green because the program is already behind schedule",
        "Hide critical path slip in buffer"
      ],
      "answer_index": 0,
      "correct_action": "Model actual critical path and approved prebuild partial WIP; develop alternate qualified path",
      "rationale": "Physical tooling/material bottlenecks require credible path and WIP control. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Sourcing, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Sub-tier core material commit is late",
        "CM can assemble all other subsystems",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Written supplier commitment and qualified tested module delivery",
      "bad_answers_explained": {
        "Hide critical path slip in buffer": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Ship incomplete unsafe power assemblies": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Supply",
      "reflection": "If you could add only one new measurement to prove the mechanism (Physical tooling/material bottlenecks require credible path and WIP control), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-027-1",
      "title": "Cooling hose second source — EVT discovery",
      "domain": "Supply",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Alternate hose can ship faster but chemical compatibility is unknown. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Pressure burst test passes initially; (2) Vendor fluid compatibility data is missing. What is the best initial program/technical decision?",
      "signals": [
        "Pressure burst test passes initially",
        "Vendor fluid compatibility data is missing"
      ],
      "hypotheses": [
        "Hydraulic fit alone does not validate long-term compatibility",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Request qualification matrix for fluid, burst, cycling and service life before adoption",
        "Declare the gate green because the program is already behind schedule",
        "Declare fully qualified from one pressure test",
        "Ignore original lead issue"
      ],
      "answer_index": 0,
      "correct_action": "Request qualification matrix for fluid, burst, cycling and service life before adoption",
      "rationale": "Hydraulic fit alone does not validate long-term compatibility. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Thermal QA, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Pressure burst test passes initially",
        "Vendor fluid compatibility data is missing",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Approved supplier and documented test coverage at released revision",
      "bad_answers_explained": {
        "Declare fully qualified from one pressure test": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Ignore original lead issue": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Supply",
      "reflection": "If you could add only one new measurement to prove the mechanism (Hydraulic fit alone does not validate long-term compatibility), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-027-2",
      "title": "Cooling hose second source — Late DVT change",
      "domain": "Supply",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Alternate hose can ship faster but chemical compatibility is unknown. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Pressure burst test passes initially; (2) Vendor fluid compatibility data is missing. What is the best initial program/technical decision?",
      "signals": [
        "Pressure burst test passes initially",
        "Vendor fluid compatibility data is missing"
      ],
      "hypotheses": [
        "Hydraulic fit alone does not validate long-term compatibility",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Ignore original lead issue",
        "Declare the gate green because the program is already behind schedule",
        "Declare fully qualified from one pressure test",
        "Request qualification matrix for fluid, burst, cycling and service life before adoption"
      ],
      "answer_index": 3,
      "correct_action": "Request qualification matrix for fluid, burst, cycling and service life before adoption",
      "rationale": "Hydraulic fit alone does not validate long-term compatibility. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Thermal QA, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Pressure burst test passes initially",
        "Vendor fluid compatibility data is missing",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Approved supplier and documented test coverage at released revision",
      "bad_answers_explained": {
        "Declare fully qualified from one pressure test": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Ignore original lead issue": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Supply",
      "reflection": "If you could add only one new measurement to prove the mechanism (Hydraulic fit alone does not validate long-term compatibility), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-027-3",
      "title": "Cooling hose second source — PVT supplier lot",
      "domain": "Supply",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Alternate hose can ship faster but chemical compatibility is unknown. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Pressure burst test passes initially; (2) Vendor fluid compatibility data is missing. What is the best initial program/technical decision?",
      "signals": [
        "Pressure burst test passes initially",
        "Vendor fluid compatibility data is missing"
      ],
      "hypotheses": [
        "Hydraulic fit alone does not validate long-term compatibility",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare fully qualified from one pressure test",
        "Ignore original lead issue",
        "Declare the gate green because the program is already behind schedule",
        "Request qualification matrix for fluid, burst, cycling and service life before adoption"
      ],
      "answer_index": 3,
      "correct_action": "Request qualification matrix for fluid, burst, cycling and service life before adoption",
      "rationale": "Hydraulic fit alone does not validate long-term compatibility. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Thermal QA, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Pressure burst test passes initially",
        "Vendor fluid compatibility data is missing",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Approved supplier and documented test coverage at released revision",
      "bad_answers_explained": {
        "Declare fully qualified from one pressure test": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Ignore original lead issue": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Supply",
      "reflection": "If you could add only one new measurement to prove the mechanism (Hydraulic fit alone does not validate long-term compatibility), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-027-4",
      "title": "Cooling hose second source — Deployment and field",
      "domain": "Supply",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Alternate hose can ship faster but chemical compatibility is unknown. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Pressure burst test passes initially; (2) Vendor fluid compatibility data is missing. What is the best initial program/technical decision?",
      "signals": [
        "Pressure burst test passes initially",
        "Vendor fluid compatibility data is missing"
      ],
      "hypotheses": [
        "Hydraulic fit alone does not validate long-term compatibility",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare fully qualified from one pressure test",
        "Ignore original lead issue",
        "Declare the gate green because the program is already behind schedule",
        "Request qualification matrix for fluid, burst, cycling and service life before adoption"
      ],
      "answer_index": 3,
      "correct_action": "Request qualification matrix for fluid, burst, cycling and service life before adoption",
      "rationale": "Hydraulic fit alone does not validate long-term compatibility. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Thermal QA, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Pressure burst test passes initially",
        "Vendor fluid compatibility data is missing",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Approved supplier and documented test coverage at released revision",
      "bad_answers_explained": {
        "Declare fully qualified from one pressure test": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Ignore original lead issue": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Supply",
      "reflection": "If you could add only one new measurement to prove the mechanism (Hydraulic fit alone does not validate long-term compatibility), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-028-1",
      "title": "Optical transceiver shortage — EVT discovery",
      "domain": "Supply",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Approved optics backorder threatens cluster commissioning. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Alternate optic nominal bandwidth matches; (2) FEC firmware and temperature qualification are missing. What is the best initial program/technical decision?",
      "signals": [
        "Alternate optic nominal bandwidth matches",
        "FEC firmware and temperature qualification are missing"
      ],
      "hypotheses": [
        "Optical interface, protocol and thermal margin differ by vendor",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Assume identical data rate proves interchangeability",
        "Turn off error counters",
        "Qualify optic/firmware/environment and topology or rephase safe installation"
      ],
      "answer_index": 3,
      "correct_action": "Qualify optic/firmware/environment and topology or rephase safe installation",
      "rationale": "Optical interface, protocol and thermal margin differ by vendor. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Network and sourcing, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Alternate optic nominal bandwidth matches",
        "FEC firmware and temperature qualification are missing",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Approved optic AVL, active traffic soak and port error margin",
      "bad_answers_explained": {
        "Assume identical data rate proves interchangeability": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Turn off error counters": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Supply",
      "reflection": "If you could add only one new measurement to prove the mechanism (Optical interface, protocol and thermal margin differ by vendor), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-028-2",
      "title": "Optical transceiver shortage — Late DVT change",
      "domain": "Supply",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Approved optics backorder threatens cluster commissioning. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Alternate optic nominal bandwidth matches; (2) FEC firmware and temperature qualification are missing. What is the best initial program/technical decision?",
      "signals": [
        "Alternate optic nominal bandwidth matches",
        "FEC firmware and temperature qualification are missing"
      ],
      "hypotheses": [
        "Optical interface, protocol and thermal margin differ by vendor",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Turn off error counters",
        "Qualify optic/firmware/environment and topology or rephase safe installation",
        "Declare the gate green because the program is already behind schedule",
        "Assume identical data rate proves interchangeability"
      ],
      "answer_index": 1,
      "correct_action": "Qualify optic/firmware/environment and topology or rephase safe installation",
      "rationale": "Optical interface, protocol and thermal margin differ by vendor. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Network and sourcing, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Alternate optic nominal bandwidth matches",
        "FEC firmware and temperature qualification are missing",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Approved optic AVL, active traffic soak and port error margin",
      "bad_answers_explained": {
        "Assume identical data rate proves interchangeability": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Turn off error counters": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Supply",
      "reflection": "If you could add only one new measurement to prove the mechanism (Optical interface, protocol and thermal margin differ by vendor), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-028-3",
      "title": "Optical transceiver shortage — PVT supplier lot",
      "domain": "Supply",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Approved optics backorder threatens cluster commissioning. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Alternate optic nominal bandwidth matches; (2) FEC firmware and temperature qualification are missing. What is the best initial program/technical decision?",
      "signals": [
        "Alternate optic nominal bandwidth matches",
        "FEC firmware and temperature qualification are missing"
      ],
      "hypotheses": [
        "Optical interface, protocol and thermal margin differ by vendor",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Turn off error counters",
        "Qualify optic/firmware/environment and topology or rephase safe installation",
        "Assume identical data rate proves interchangeability"
      ],
      "answer_index": 2,
      "correct_action": "Qualify optic/firmware/environment and topology or rephase safe installation",
      "rationale": "Optical interface, protocol and thermal margin differ by vendor. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Network and sourcing, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Alternate optic nominal bandwidth matches",
        "FEC firmware and temperature qualification are missing",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Approved optic AVL, active traffic soak and port error margin",
      "bad_answers_explained": {
        "Assume identical data rate proves interchangeability": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Turn off error counters": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Supply",
      "reflection": "If you could add only one new measurement to prove the mechanism (Optical interface, protocol and thermal margin differ by vendor), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-028-4",
      "title": "Optical transceiver shortage — Deployment and field",
      "domain": "Supply",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Approved optics backorder threatens cluster commissioning. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Alternate optic nominal bandwidth matches; (2) FEC firmware and temperature qualification are missing. What is the best initial program/technical decision?",
      "signals": [
        "Alternate optic nominal bandwidth matches",
        "FEC firmware and temperature qualification are missing"
      ],
      "hypotheses": [
        "Optical interface, protocol and thermal margin differ by vendor",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Assume identical data rate proves interchangeability",
        "Qualify optic/firmware/environment and topology or rephase safe installation",
        "Turn off error counters",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 1,
      "correct_action": "Qualify optic/firmware/environment and topology or rephase safe installation",
      "rationale": "Optical interface, protocol and thermal margin differ by vendor. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Network and sourcing, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Alternate optic nominal bandwidth matches",
        "FEC firmware and temperature qualification are missing",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Approved optic AVL, active traffic soak and port error margin",
      "bad_answers_explained": {
        "Assume identical data rate proves interchangeability": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Turn off error counters": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Supply",
      "reflection": "If you could add only one new measurement to prove the mechanism (Optical interface, protocol and thermal margin differ by vendor), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-029-1",
      "title": "Supplier forecast not committed — EVT discovery",
      "domain": "Supply",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "CM says material is green but PO for harness is not acknowledged. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Spreadsheet shows planned delivery only; (2) Supplier has no reserved production slot. What is the best initial program/technical decision?",
      "signals": [
        "Spreadsheet shows planned delivery only",
        "Supplier has no reserved production slot"
      ],
      "hypotheses": [
        "Uncommitted forecast is not supply evidence",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Demand written ATP tied to approved revision and rebaseline risk",
        "Report green because vendor sales said okay",
        "Buy alternate unreviewed harness",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 0,
      "correct_action": "Demand written ATP tied to approved revision and rebaseline risk",
      "rationale": "Uncommitted forecast is not supply evidence. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Sourcing TPM, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Spreadsheet shows planned delivery only",
        "Supplier has no reserved production slot",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Accepted PO and material readiness at CM",
      "bad_answers_explained": {
        "Report green because vendor sales said okay": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Buy alternate unreviewed harness": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Supply",
      "reflection": "If you could add only one new measurement to prove the mechanism (Uncommitted forecast is not supply evidence), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-029-2",
      "title": "Supplier forecast not committed — Late DVT change",
      "domain": "Supply",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "CM says material is green but PO for harness is not acknowledged. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Spreadsheet shows planned delivery only; (2) Supplier has no reserved production slot. What is the best initial program/technical decision?",
      "signals": [
        "Spreadsheet shows planned delivery only",
        "Supplier has no reserved production slot"
      ],
      "hypotheses": [
        "Uncommitted forecast is not supply evidence",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Report green because vendor sales said okay",
        "Declare the gate green because the program is already behind schedule",
        "Buy alternate unreviewed harness",
        "Demand written ATP tied to approved revision and rebaseline risk"
      ],
      "answer_index": 3,
      "correct_action": "Demand written ATP tied to approved revision and rebaseline risk",
      "rationale": "Uncommitted forecast is not supply evidence. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Sourcing TPM, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Spreadsheet shows planned delivery only",
        "Supplier has no reserved production slot",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Accepted PO and material readiness at CM",
      "bad_answers_explained": {
        "Report green because vendor sales said okay": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Buy alternate unreviewed harness": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Supply",
      "reflection": "If you could add only one new measurement to prove the mechanism (Uncommitted forecast is not supply evidence), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-029-3",
      "title": "Supplier forecast not committed — PVT supplier lot",
      "domain": "Supply",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "CM says material is green but PO for harness is not acknowledged. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Spreadsheet shows planned delivery only; (2) Supplier has no reserved production slot. What is the best initial program/technical decision?",
      "signals": [
        "Spreadsheet shows planned delivery only",
        "Supplier has no reserved production slot"
      ],
      "hypotheses": [
        "Uncommitted forecast is not supply evidence",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Report green because vendor sales said okay",
        "Demand written ATP tied to approved revision and rebaseline risk",
        "Buy alternate unreviewed harness"
      ],
      "answer_index": 2,
      "correct_action": "Demand written ATP tied to approved revision and rebaseline risk",
      "rationale": "Uncommitted forecast is not supply evidence. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Sourcing TPM, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Spreadsheet shows planned delivery only",
        "Supplier has no reserved production slot",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Accepted PO and material readiness at CM",
      "bad_answers_explained": {
        "Report green because vendor sales said okay": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Buy alternate unreviewed harness": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Supply",
      "reflection": "If you could add only one new measurement to prove the mechanism (Uncommitted forecast is not supply evidence), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-029-4",
      "title": "Supplier forecast not committed — Deployment and field",
      "domain": "Supply",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "CM says material is green but PO for harness is not acknowledged. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Spreadsheet shows planned delivery only; (2) Supplier has no reserved production slot. What is the best initial program/technical decision?",
      "signals": [
        "Spreadsheet shows planned delivery only",
        "Supplier has no reserved production slot"
      ],
      "hypotheses": [
        "Uncommitted forecast is not supply evidence",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Report green because vendor sales said okay",
        "Declare the gate green because the program is already behind schedule",
        "Buy alternate unreviewed harness",
        "Demand written ATP tied to approved revision and rebaseline risk"
      ],
      "answer_index": 3,
      "correct_action": "Demand written ATP tied to approved revision and rebaseline risk",
      "rationale": "Uncommitted forecast is not supply evidence. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Sourcing TPM, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Spreadsheet shows planned delivery only",
        "Supplier has no reserved production slot",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Accepted PO and material readiness at CM",
      "bad_answers_explained": {
        "Report green because vendor sales said okay": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Buy alternate unreviewed harness": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Supply",
      "reflection": "If you could add only one new measurement to prove the mechanism (Uncommitted forecast is not supply evidence), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-030-1",
      "title": "AVL counterfeit risk — EVT discovery",
      "domain": "Supply",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Unexpected spot-market parts proposed after shortage. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Marking and lot certificates inconsistent; (2) No authorized distribution trace. What is the best initial program/technical decision?",
      "signals": [
        "Marking and lot certificates inconsistent",
        "No authorized distribution trace"
      ],
      "hypotheses": [
        "Non-traceable power components increase safety and reliability exposure",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Change tracking SKU to hide source",
        "Quarantine material and use approved authorized sourcing / authenticity protocol",
        "Install parts after visual pass only"
      ],
      "answer_index": 2,
      "correct_action": "Quarantine material and use approved authorized sourcing / authenticity protocol",
      "rationale": "Non-traceable power components increase safety and reliability exposure. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Supplier quality, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Marking and lot certificates inconsistent",
        "No authorized distribution trace",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Verified provenance and incoming qualification",
      "bad_answers_explained": {
        "Install parts after visual pass only": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Change tracking SKU to hide source": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Supply",
      "reflection": "If you could add only one new measurement to prove the mechanism (Non-traceable power components increase safety and reliability exposure), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-030-2",
      "title": "AVL counterfeit risk — Late DVT change",
      "domain": "Supply",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Unexpected spot-market parts proposed after shortage. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Marking and lot certificates inconsistent; (2) No authorized distribution trace. What is the best initial program/technical decision?",
      "signals": [
        "Marking and lot certificates inconsistent",
        "No authorized distribution trace"
      ],
      "hypotheses": [
        "Non-traceable power components increase safety and reliability exposure",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Install parts after visual pass only",
        "Declare the gate green because the program is already behind schedule",
        "Change tracking SKU to hide source",
        "Quarantine material and use approved authorized sourcing / authenticity protocol"
      ],
      "answer_index": 3,
      "correct_action": "Quarantine material and use approved authorized sourcing / authenticity protocol",
      "rationale": "Non-traceable power components increase safety and reliability exposure. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Supplier quality, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Marking and lot certificates inconsistent",
        "No authorized distribution trace",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Verified provenance and incoming qualification",
      "bad_answers_explained": {
        "Install parts after visual pass only": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Change tracking SKU to hide source": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Supply",
      "reflection": "If you could add only one new measurement to prove the mechanism (Non-traceable power components increase safety and reliability exposure), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-030-3",
      "title": "AVL counterfeit risk — PVT supplier lot",
      "domain": "Supply",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Unexpected spot-market parts proposed after shortage. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Marking and lot certificates inconsistent; (2) No authorized distribution trace. What is the best initial program/technical decision?",
      "signals": [
        "Marking and lot certificates inconsistent",
        "No authorized distribution trace"
      ],
      "hypotheses": [
        "Non-traceable power components increase safety and reliability exposure",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Install parts after visual pass only",
        "Change tracking SKU to hide source",
        "Declare the gate green because the program is already behind schedule",
        "Quarantine material and use approved authorized sourcing / authenticity protocol"
      ],
      "answer_index": 3,
      "correct_action": "Quarantine material and use approved authorized sourcing / authenticity protocol",
      "rationale": "Non-traceable power components increase safety and reliability exposure. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Supplier quality, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Marking and lot certificates inconsistent",
        "No authorized distribution trace",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Verified provenance and incoming qualification",
      "bad_answers_explained": {
        "Install parts after visual pass only": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Change tracking SKU to hide source": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Supply",
      "reflection": "If you could add only one new measurement to prove the mechanism (Non-traceable power components increase safety and reliability exposure), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-030-4",
      "title": "AVL counterfeit risk — Deployment and field",
      "domain": "Supply",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Unexpected spot-market parts proposed after shortage. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Marking and lot certificates inconsistent; (2) No authorized distribution trace. What is the best initial program/technical decision?",
      "signals": [
        "Marking and lot certificates inconsistent",
        "No authorized distribution trace"
      ],
      "hypotheses": [
        "Non-traceable power components increase safety and reliability exposure",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Quarantine material and use approved authorized sourcing / authenticity protocol",
        "Change tracking SKU to hide source",
        "Install parts after visual pass only",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 0,
      "correct_action": "Quarantine material and use approved authorized sourcing / authenticity protocol",
      "rationale": "Non-traceable power components increase safety and reliability exposure. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Supplier quality, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Marking and lot certificates inconsistent",
        "No authorized distribution trace",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Verified provenance and incoming qualification",
      "bad_answers_explained": {
        "Install parts after visual pass only": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Change tracking SKU to hide source": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Supply",
      "reflection": "If you could add only one new measurement to prove the mechanism (Non-traceable power components increase safety and reliability exposure), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-031-1",
      "title": "Test fixture long lead — EVT discovery",
      "domain": "Supply",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "PVT can build racks but factory thermal fixture will arrive late. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Fixture vendor missing custom sensor harness; (2) Line can complete only incomplete checks. What is the best initial program/technical decision?",
      "signals": [
        "Fixture vendor missing custom sensor harness",
        "Line can complete only incomplete checks"
      ],
      "hypotheses": [
        "Testing capacity is part of critical-path material",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Delete thermal acceptance test",
        "Ship untested racks",
        "Declare the gate green because the program is already behind schedule",
        "Sequence non-dependent WIP under hold and secure validated interim test method if feasible"
      ],
      "answer_index": 3,
      "correct_action": "Sequence non-dependent WIP under hold and secure validated interim test method if feasible",
      "rationale": "Testing capacity is part of critical-path material. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Manufacturing test, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Fixture vendor missing custom sensor harness",
        "Line can complete only incomplete checks",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Qualified fixture/test coverage and takt demonstration",
      "bad_answers_explained": {
        "Ship untested racks": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Delete thermal acceptance test": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Supply",
      "reflection": "If you could add only one new measurement to prove the mechanism (Testing capacity is part of critical-path material), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-031-2",
      "title": "Test fixture long lead — Late DVT change",
      "domain": "Supply",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "PVT can build racks but factory thermal fixture will arrive late. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Fixture vendor missing custom sensor harness; (2) Line can complete only incomplete checks. What is the best initial program/technical decision?",
      "signals": [
        "Fixture vendor missing custom sensor harness",
        "Line can complete only incomplete checks"
      ],
      "hypotheses": [
        "Testing capacity is part of critical-path material",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Ship untested racks",
        "Sequence non-dependent WIP under hold and secure validated interim test method if feasible",
        "Delete thermal acceptance test",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 1,
      "correct_action": "Sequence non-dependent WIP under hold and secure validated interim test method if feasible",
      "rationale": "Testing capacity is part of critical-path material. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Manufacturing test, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Fixture vendor missing custom sensor harness",
        "Line can complete only incomplete checks",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Qualified fixture/test coverage and takt demonstration",
      "bad_answers_explained": {
        "Ship untested racks": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Delete thermal acceptance test": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Supply",
      "reflection": "If you could add only one new measurement to prove the mechanism (Testing capacity is part of critical-path material), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-031-3",
      "title": "Test fixture long lead — PVT supplier lot",
      "domain": "Supply",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "PVT can build racks but factory thermal fixture will arrive late. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Fixture vendor missing custom sensor harness; (2) Line can complete only incomplete checks. What is the best initial program/technical decision?",
      "signals": [
        "Fixture vendor missing custom sensor harness",
        "Line can complete only incomplete checks"
      ],
      "hypotheses": [
        "Testing capacity is part of critical-path material",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Sequence non-dependent WIP under hold and secure validated interim test method if feasible",
        "Ship untested racks",
        "Delete thermal acceptance test",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 0,
      "correct_action": "Sequence non-dependent WIP under hold and secure validated interim test method if feasible",
      "rationale": "Testing capacity is part of critical-path material. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Manufacturing test, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Fixture vendor missing custom sensor harness",
        "Line can complete only incomplete checks",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Qualified fixture/test coverage and takt demonstration",
      "bad_answers_explained": {
        "Ship untested racks": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Delete thermal acceptance test": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Supply",
      "reflection": "If you could add only one new measurement to prove the mechanism (Testing capacity is part of critical-path material), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-031-4",
      "title": "Test fixture long lead — Deployment and field",
      "domain": "Supply",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "PVT can build racks but factory thermal fixture will arrive late. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Fixture vendor missing custom sensor harness; (2) Line can complete only incomplete checks. What is the best initial program/technical decision?",
      "signals": [
        "Fixture vendor missing custom sensor harness",
        "Line can complete only incomplete checks"
      ],
      "hypotheses": [
        "Testing capacity is part of critical-path material",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Delete thermal acceptance test",
        "Declare the gate green because the program is already behind schedule",
        "Ship untested racks",
        "Sequence non-dependent WIP under hold and secure validated interim test method if feasible"
      ],
      "answer_index": 3,
      "correct_action": "Sequence non-dependent WIP under hold and secure validated interim test method if feasible",
      "rationale": "Testing capacity is part of critical-path material. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Manufacturing test, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Fixture vendor missing custom sensor harness",
        "Line can complete only incomplete checks",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Qualified fixture/test coverage and takt demonstration",
      "bad_answers_explained": {
        "Ship untested racks": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Delete thermal acceptance test": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Supply",
      "reflection": "If you could add only one new measurement to prove the mechanism (Testing capacity is part of critical-path material), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-032-1",
      "title": "Supplier ECO disagreement — EVT discovery",
      "domain": "Supply",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "ODM claims mechanical change is minor and does not require ECO. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Tool path changes dimension near power connector; (2) PLM shows unchanged drawing revision. What is the best initial program/technical decision?",
      "signals": [
        "Tool path changes dimension near power connector",
        "PLM shows unchanged drawing revision"
      ],
      "hypotheses": [
        "Process or design change can invalidate safety spacing or fit",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Let ODM silently change tooling",
        "Ship and rely on field fixes",
        "Hold until fit/clearance/stack-up evaluation and change effectivity",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 2,
      "correct_action": "Hold until fit/clearance/stack-up evaluation and change effectivity",
      "rationale": "Process or design change can invalidate safety spacing or fit. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Mechanical engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Tool path changes dimension near power connector",
        "PLM shows unchanged drawing revision",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Controlled drawing/process release and measured verification",
      "bad_answers_explained": {
        "Let ODM silently change tooling": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Ship and rely on field fixes": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Supply",
      "reflection": "If you could add only one new measurement to prove the mechanism (Process or design change can invalidate safety spacing or fit), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-032-2",
      "title": "Supplier ECO disagreement — Late DVT change",
      "domain": "Supply",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "ODM claims mechanical change is minor and does not require ECO. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Tool path changes dimension near power connector; (2) PLM shows unchanged drawing revision. What is the best initial program/technical decision?",
      "signals": [
        "Tool path changes dimension near power connector",
        "PLM shows unchanged drawing revision"
      ],
      "hypotheses": [
        "Process or design change can invalidate safety spacing or fit",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Hold until fit/clearance/stack-up evaluation and change effectivity",
        "Declare the gate green because the program is already behind schedule",
        "Let ODM silently change tooling",
        "Ship and rely on field fixes"
      ],
      "answer_index": 0,
      "correct_action": "Hold until fit/clearance/stack-up evaluation and change effectivity",
      "rationale": "Process or design change can invalidate safety spacing or fit. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Mechanical engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Tool path changes dimension near power connector",
        "PLM shows unchanged drawing revision",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Controlled drawing/process release and measured verification",
      "bad_answers_explained": {
        "Let ODM silently change tooling": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Ship and rely on field fixes": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Supply",
      "reflection": "If you could add only one new measurement to prove the mechanism (Process or design change can invalidate safety spacing or fit), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-032-3",
      "title": "Supplier ECO disagreement — PVT supplier lot",
      "domain": "Supply",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "ODM claims mechanical change is minor and does not require ECO. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Tool path changes dimension near power connector; (2) PLM shows unchanged drawing revision. What is the best initial program/technical decision?",
      "signals": [
        "Tool path changes dimension near power connector",
        "PLM shows unchanged drawing revision"
      ],
      "hypotheses": [
        "Process or design change can invalidate safety spacing or fit",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Ship and rely on field fixes",
        "Declare the gate green because the program is already behind schedule",
        "Hold until fit/clearance/stack-up evaluation and change effectivity",
        "Let ODM silently change tooling"
      ],
      "answer_index": 2,
      "correct_action": "Hold until fit/clearance/stack-up evaluation and change effectivity",
      "rationale": "Process or design change can invalidate safety spacing or fit. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Mechanical engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Tool path changes dimension near power connector",
        "PLM shows unchanged drawing revision",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Controlled drawing/process release and measured verification",
      "bad_answers_explained": {
        "Let ODM silently change tooling": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Ship and rely on field fixes": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Supply",
      "reflection": "If you could add only one new measurement to prove the mechanism (Process or design change can invalidate safety spacing or fit), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-032-4",
      "title": "Supplier ECO disagreement — Deployment and field",
      "domain": "Supply",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "ODM claims mechanical change is minor and does not require ECO. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Tool path changes dimension near power connector; (2) PLM shows unchanged drawing revision. What is the best initial program/technical decision?",
      "signals": [
        "Tool path changes dimension near power connector",
        "PLM shows unchanged drawing revision"
      ],
      "hypotheses": [
        "Process or design change can invalidate safety spacing or fit",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Hold until fit/clearance/stack-up evaluation and change effectivity",
        "Let ODM silently change tooling",
        "Ship and rely on field fixes",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 0,
      "correct_action": "Hold until fit/clearance/stack-up evaluation and change effectivity",
      "rationale": "Process or design change can invalidate safety spacing or fit. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Mechanical engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Tool path changes dimension near power connector",
        "PLM shows unchanged drawing revision",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Controlled drawing/process release and measured verification",
      "bad_answers_explained": {
        "Let ODM silently change tooling": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Ship and rely on field fixes": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Supply",
      "reflection": "If you could add only one new measurement to prove the mechanism (Process or design change can invalidate safety spacing or fit), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-033-1",
      "title": "Stale coolant telemetry — EVT discovery",
      "domain": "Firmware",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "BMC reads 24C constantly during a changing load ramp. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Independent thermocouple shows variable temperature; (2) Telemetry timestamps stop advancing. What is the best initial program/technical decision?",
      "signals": [
        "Independent thermocouple shows variable temperature",
        "Telemetry timestamps stop advancing"
      ],
      "hypotheses": [
        "A fixed value can be bad data, not stable physical state",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Assume steady temperature means perfect coolant",
        "Suppress stale-data alerts",
        "Protect affected equipment and debug sensor path/firmware freshness",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 2,
      "correct_action": "Protect affected equipment and debug sensor path/firmware freshness",
      "rationale": "A fixed value can be bad data, not stable physical state. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage BMC firmware, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Independent thermocouple shows variable temperature",
        "Telemetry timestamps stop advancing",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Telemetry freshness alerts and cross-calibrated fault test",
      "bad_answers_explained": {
        "Assume steady temperature means perfect coolant": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Suppress stale-data alerts": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Firmware",
      "reflection": "If you could add only one new measurement to prove the mechanism (A fixed value can be bad data, not stable physical state), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-033-2",
      "title": "Stale coolant telemetry — Late DVT change",
      "domain": "Firmware",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "BMC reads 24C constantly during a changing load ramp. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Independent thermocouple shows variable temperature; (2) Telemetry timestamps stop advancing. What is the best initial program/technical decision?",
      "signals": [
        "Independent thermocouple shows variable temperature",
        "Telemetry timestamps stop advancing"
      ],
      "hypotheses": [
        "A fixed value can be bad data, not stable physical state",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Suppress stale-data alerts",
        "Assume steady temperature means perfect coolant",
        "Protect affected equipment and debug sensor path/firmware freshness"
      ],
      "answer_index": 3,
      "correct_action": "Protect affected equipment and debug sensor path/firmware freshness",
      "rationale": "A fixed value can be bad data, not stable physical state. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage BMC firmware, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Independent thermocouple shows variable temperature",
        "Telemetry timestamps stop advancing",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Telemetry freshness alerts and cross-calibrated fault test",
      "bad_answers_explained": {
        "Assume steady temperature means perfect coolant": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Suppress stale-data alerts": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Firmware",
      "reflection": "If you could add only one new measurement to prove the mechanism (A fixed value can be bad data, not stable physical state), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-033-3",
      "title": "Stale coolant telemetry — PVT supplier lot",
      "domain": "Firmware",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "BMC reads 24C constantly during a changing load ramp. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Independent thermocouple shows variable temperature; (2) Telemetry timestamps stop advancing. What is the best initial program/technical decision?",
      "signals": [
        "Independent thermocouple shows variable temperature",
        "Telemetry timestamps stop advancing"
      ],
      "hypotheses": [
        "A fixed value can be bad data, not stable physical state",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Assume steady temperature means perfect coolant",
        "Suppress stale-data alerts",
        "Declare the gate green because the program is already behind schedule",
        "Protect affected equipment and debug sensor path/firmware freshness"
      ],
      "answer_index": 3,
      "correct_action": "Protect affected equipment and debug sensor path/firmware freshness",
      "rationale": "A fixed value can be bad data, not stable physical state. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage BMC firmware, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Independent thermocouple shows variable temperature",
        "Telemetry timestamps stop advancing",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Telemetry freshness alerts and cross-calibrated fault test",
      "bad_answers_explained": {
        "Assume steady temperature means perfect coolant": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Suppress stale-data alerts": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Firmware",
      "reflection": "If you could add only one new measurement to prove the mechanism (A fixed value can be bad data, not stable physical state), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-033-4",
      "title": "Stale coolant telemetry — Deployment and field",
      "domain": "Firmware",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "BMC reads 24C constantly during a changing load ramp. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Independent thermocouple shows variable temperature; (2) Telemetry timestamps stop advancing. What is the best initial program/technical decision?",
      "signals": [
        "Independent thermocouple shows variable temperature",
        "Telemetry timestamps stop advancing"
      ],
      "hypotheses": [
        "A fixed value can be bad data, not stable physical state",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Suppress stale-data alerts",
        "Protect affected equipment and debug sensor path/firmware freshness",
        "Declare the gate green because the program is already behind schedule",
        "Assume steady temperature means perfect coolant"
      ],
      "answer_index": 1,
      "correct_action": "Protect affected equipment and debug sensor path/firmware freshness",
      "rationale": "A fixed value can be bad data, not stable physical state. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage BMC firmware, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Independent thermocouple shows variable temperature",
        "Telemetry timestamps stop advancing",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Telemetry freshness alerts and cross-calibrated fault test",
      "bad_answers_explained": {
        "Assume steady temperature means perfect coolant": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Suppress stale-data alerts": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Firmware",
      "reflection": "If you could add only one new measurement to prove the mechanism (A fixed value can be bad data, not stable physical state), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-034-1",
      "title": "FW partial upgrade — EVT discovery",
      "domain": "Firmware",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Half of 50 racks have new PSU FW and old CPLD rev. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) PDU load-sharing faults occur only on mixed pair; (2) Fleet upgrade script skips timeout retry. What is the best initial program/technical decision?",
      "signals": [
        "PDU load-sharing faults occur only on mixed pair",
        "Fleet upgrade script skips timeout retry"
      ],
      "hypotheses": [
        "Multi-component FW interdependencies can be safety relevant",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Ignore the mismatched CPLD",
        "Pause rollout, identify versions by serial, validate atomic sequencing and rollback",
        "Blast the update with no checks",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 1,
      "correct_action": "Pause rollout, identify versions by serial, validate atomic sequencing and rollback",
      "rationale": "Multi-component FW interdependencies can be safety relevant. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Firmware release, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "PDU load-sharing faults occur only on mixed pair",
        "Fleet upgrade script skips timeout retry",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Compatible FW matrix and interrupted-upgrade recovery test",
      "bad_answers_explained": {
        "Blast the update with no checks": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Ignore the mismatched CPLD": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Firmware",
      "reflection": "If you could add only one new measurement to prove the mechanism (Multi-component FW interdependencies can be safety relevant), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-034-2",
      "title": "FW partial upgrade — Late DVT change",
      "domain": "Firmware",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Half of 50 racks have new PSU FW and old CPLD rev. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) PDU load-sharing faults occur only on mixed pair; (2) Fleet upgrade script skips timeout retry. What is the best initial program/technical decision?",
      "signals": [
        "PDU load-sharing faults occur only on mixed pair",
        "Fleet upgrade script skips timeout retry"
      ],
      "hypotheses": [
        "Multi-component FW interdependencies can be safety relevant",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Pause rollout, identify versions by serial, validate atomic sequencing and rollback",
        "Ignore the mismatched CPLD",
        "Blast the update with no checks",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 0,
      "correct_action": "Pause rollout, identify versions by serial, validate atomic sequencing and rollback",
      "rationale": "Multi-component FW interdependencies can be safety relevant. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Firmware release, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "PDU load-sharing faults occur only on mixed pair",
        "Fleet upgrade script skips timeout retry",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Compatible FW matrix and interrupted-upgrade recovery test",
      "bad_answers_explained": {
        "Blast the update with no checks": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Ignore the mismatched CPLD": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Firmware",
      "reflection": "If you could add only one new measurement to prove the mechanism (Multi-component FW interdependencies can be safety relevant), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-034-3",
      "title": "FW partial upgrade — PVT supplier lot",
      "domain": "Firmware",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Half of 50 racks have new PSU FW and old CPLD rev. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) PDU load-sharing faults occur only on mixed pair; (2) Fleet upgrade script skips timeout retry. What is the best initial program/technical decision?",
      "signals": [
        "PDU load-sharing faults occur only on mixed pair",
        "Fleet upgrade script skips timeout retry"
      ],
      "hypotheses": [
        "Multi-component FW interdependencies can be safety relevant",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Blast the update with no checks",
        "Declare the gate green because the program is already behind schedule",
        "Pause rollout, identify versions by serial, validate atomic sequencing and rollback",
        "Ignore the mismatched CPLD"
      ],
      "answer_index": 2,
      "correct_action": "Pause rollout, identify versions by serial, validate atomic sequencing and rollback",
      "rationale": "Multi-component FW interdependencies can be safety relevant. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Firmware release, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "PDU load-sharing faults occur only on mixed pair",
        "Fleet upgrade script skips timeout retry",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Compatible FW matrix and interrupted-upgrade recovery test",
      "bad_answers_explained": {
        "Blast the update with no checks": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Ignore the mismatched CPLD": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Firmware",
      "reflection": "If you could add only one new measurement to prove the mechanism (Multi-component FW interdependencies can be safety relevant), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-034-4",
      "title": "FW partial upgrade — Deployment and field",
      "domain": "Firmware",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Half of 50 racks have new PSU FW and old CPLD rev. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) PDU load-sharing faults occur only on mixed pair; (2) Fleet upgrade script skips timeout retry. What is the best initial program/technical decision?",
      "signals": [
        "PDU load-sharing faults occur only on mixed pair",
        "Fleet upgrade script skips timeout retry"
      ],
      "hypotheses": [
        "Multi-component FW interdependencies can be safety relevant",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Blast the update with no checks",
        "Ignore the mismatched CPLD",
        "Pause rollout, identify versions by serial, validate atomic sequencing and rollback"
      ],
      "answer_index": 3,
      "correct_action": "Pause rollout, identify versions by serial, validate atomic sequencing and rollback",
      "rationale": "Multi-component FW interdependencies can be safety relevant. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Firmware release, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "PDU load-sharing faults occur only on mixed pair",
        "Fleet upgrade script skips timeout retry",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Compatible FW matrix and interrupted-upgrade recovery test",
      "bad_answers_explained": {
        "Blast the update with no checks": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Ignore the mismatched CPLD": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Firmware",
      "reflection": "If you could add only one new measurement to prove the mechanism (Multi-component FW interdependencies can be safety relevant), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-035-1",
      "title": "Boot-loop after brownout — EVT discovery",
      "domain": "Firmware",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Systems restart continuously following power recovery. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Power-good timing differs on affected board rev; (2) CPLD event log shows reset loop. What is the best initial program/technical decision?",
      "signals": [
        "Power-good timing differs on affected board rev",
        "CPLD event log shows reset loop"
      ],
      "hypotheses": [
        "Power sequence tolerance must survive real facility disturbances",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Reroute facility power indiscriminately",
        "Disable brownout monitors",
        "Declare the gate green because the program is already behind schedule",
        "Reproduce power sequencing in qualified lab and establish safe firmware/hardware remediation"
      ],
      "answer_index": 3,
      "correct_action": "Reproduce power sequencing in qualified lab and establish safe firmware/hardware remediation",
      "rationale": "Power sequence tolerance must survive real facility disturbances. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Platform FW, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Power-good timing differs on affected board rev",
        "CPLD event log shows reset loop",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Cold/warm/interrupt boot tests across line and site margins",
      "bad_answers_explained": {
        "Reroute facility power indiscriminately": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Disable brownout monitors": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Firmware",
      "reflection": "If you could add only one new measurement to prove the mechanism (Power sequence tolerance must survive real facility disturbances), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-035-2",
      "title": "Boot-loop after brownout — Late DVT change",
      "domain": "Firmware",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Systems restart continuously following power recovery. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Power-good timing differs on affected board rev; (2) CPLD event log shows reset loop. What is the best initial program/technical decision?",
      "signals": [
        "Power-good timing differs on affected board rev",
        "CPLD event log shows reset loop"
      ],
      "hypotheses": [
        "Power sequence tolerance must survive real facility disturbances",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Disable brownout monitors",
        "Declare the gate green because the program is already behind schedule",
        "Reproduce power sequencing in qualified lab and establish safe firmware/hardware remediation",
        "Reroute facility power indiscriminately"
      ],
      "answer_index": 2,
      "correct_action": "Reproduce power sequencing in qualified lab and establish safe firmware/hardware remediation",
      "rationale": "Power sequence tolerance must survive real facility disturbances. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Platform FW, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Power-good timing differs on affected board rev",
        "CPLD event log shows reset loop",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Cold/warm/interrupt boot tests across line and site margins",
      "bad_answers_explained": {
        "Reroute facility power indiscriminately": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Disable brownout monitors": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Firmware",
      "reflection": "If you could add only one new measurement to prove the mechanism (Power sequence tolerance must survive real facility disturbances), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-035-3",
      "title": "Boot-loop after brownout — PVT supplier lot",
      "domain": "Firmware",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Systems restart continuously following power recovery. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Power-good timing differs on affected board rev; (2) CPLD event log shows reset loop. What is the best initial program/technical decision?",
      "signals": [
        "Power-good timing differs on affected board rev",
        "CPLD event log shows reset loop"
      ],
      "hypotheses": [
        "Power sequence tolerance must survive real facility disturbances",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Reproduce power sequencing in qualified lab and establish safe firmware/hardware remediation",
        "Declare the gate green because the program is already behind schedule",
        "Disable brownout monitors",
        "Reroute facility power indiscriminately"
      ],
      "answer_index": 0,
      "correct_action": "Reproduce power sequencing in qualified lab and establish safe firmware/hardware remediation",
      "rationale": "Power sequence tolerance must survive real facility disturbances. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Platform FW, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Power-good timing differs on affected board rev",
        "CPLD event log shows reset loop",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Cold/warm/interrupt boot tests across line and site margins",
      "bad_answers_explained": {
        "Reroute facility power indiscriminately": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Disable brownout monitors": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Firmware",
      "reflection": "If you could add only one new measurement to prove the mechanism (Power sequence tolerance must survive real facility disturbances), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-035-4",
      "title": "Boot-loop after brownout — Deployment and field",
      "domain": "Firmware",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Systems restart continuously following power recovery. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Power-good timing differs on affected board rev; (2) CPLD event log shows reset loop. What is the best initial program/technical decision?",
      "signals": [
        "Power-good timing differs on affected board rev",
        "CPLD event log shows reset loop"
      ],
      "hypotheses": [
        "Power sequence tolerance must survive real facility disturbances",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Reproduce power sequencing in qualified lab and establish safe firmware/hardware remediation",
        "Reroute facility power indiscriminately",
        "Disable brownout monitors",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 0,
      "correct_action": "Reproduce power sequencing in qualified lab and establish safe firmware/hardware remediation",
      "rationale": "Power sequence tolerance must survive real facility disturbances. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Platform FW, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Power-good timing differs on affected board rev",
        "CPLD event log shows reset loop",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Cold/warm/interrupt boot tests across line and site margins",
      "bad_answers_explained": {
        "Reroute facility power indiscriminately": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Disable brownout monitors": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Firmware",
      "reflection": "If you could add only one new measurement to prove the mechanism (Power sequence tolerance must survive real facility disturbances), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-036-1",
      "title": "Alarm severity inversion — EVT discovery",
      "domain": "Firmware",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Critical overtemp event displays as informational. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Raw sensor register flags critical; (2) UI severity map from new controller rev differs. What is the best initial program/technical decision?",
      "signals": [
        "Raw sensor register flags critical",
        "UI severity map from new controller rev differs"
      ],
      "hypotheses": [
        "Presentation-layer mapping can invert operational urgency",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Tell operators to ignore alarm color",
        "Declare the gate green because the program is already behind schedule",
        "Ship with written warning only",
        "Treat as safety telemetry escape and hold revision until mapping verified"
      ],
      "answer_index": 3,
      "correct_action": "Treat as safety telemetry escape and hold revision until mapping verified",
      "rationale": "Presentation-layer mapping can invert operational urgency. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Controls QA, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Raw sensor register flags critical",
        "UI severity map from new controller rev differs",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "End-to-end sensor injection proves correct priority and response",
      "bad_answers_explained": {
        "Tell operators to ignore alarm color": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Ship with written warning only": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Firmware",
      "reflection": "If you could add only one new measurement to prove the mechanism (Presentation-layer mapping can invert operational urgency), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-036-2",
      "title": "Alarm severity inversion — Late DVT change",
      "domain": "Firmware",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Critical overtemp event displays as informational. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Raw sensor register flags critical; (2) UI severity map from new controller rev differs. What is the best initial program/technical decision?",
      "signals": [
        "Raw sensor register flags critical",
        "UI severity map from new controller rev differs"
      ],
      "hypotheses": [
        "Presentation-layer mapping can invert operational urgency",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Tell operators to ignore alarm color",
        "Declare the gate green because the program is already behind schedule",
        "Ship with written warning only",
        "Treat as safety telemetry escape and hold revision until mapping verified"
      ],
      "answer_index": 3,
      "correct_action": "Treat as safety telemetry escape and hold revision until mapping verified",
      "rationale": "Presentation-layer mapping can invert operational urgency. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Controls QA, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Raw sensor register flags critical",
        "UI severity map from new controller rev differs",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "End-to-end sensor injection proves correct priority and response",
      "bad_answers_explained": {
        "Tell operators to ignore alarm color": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Ship with written warning only": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Firmware",
      "reflection": "If you could add only one new measurement to prove the mechanism (Presentation-layer mapping can invert operational urgency), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-036-3",
      "title": "Alarm severity inversion — PVT supplier lot",
      "domain": "Firmware",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Critical overtemp event displays as informational. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Raw sensor register flags critical; (2) UI severity map from new controller rev differs. What is the best initial program/technical decision?",
      "signals": [
        "Raw sensor register flags critical",
        "UI severity map from new controller rev differs"
      ],
      "hypotheses": [
        "Presentation-layer mapping can invert operational urgency",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Ship with written warning only",
        "Tell operators to ignore alarm color",
        "Treat as safety telemetry escape and hold revision until mapping verified"
      ],
      "answer_index": 3,
      "correct_action": "Treat as safety telemetry escape and hold revision until mapping verified",
      "rationale": "Presentation-layer mapping can invert operational urgency. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Controls QA, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Raw sensor register flags critical",
        "UI severity map from new controller rev differs",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "End-to-end sensor injection proves correct priority and response",
      "bad_answers_explained": {
        "Tell operators to ignore alarm color": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Ship with written warning only": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Firmware",
      "reflection": "If you could add only one new measurement to prove the mechanism (Presentation-layer mapping can invert operational urgency), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-036-4",
      "title": "Alarm severity inversion — Deployment and field",
      "domain": "Firmware",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Critical overtemp event displays as informational. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Raw sensor register flags critical; (2) UI severity map from new controller rev differs. What is the best initial program/technical decision?",
      "signals": [
        "Raw sensor register flags critical",
        "UI severity map from new controller rev differs"
      ],
      "hypotheses": [
        "Presentation-layer mapping can invert operational urgency",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Ship with written warning only",
        "Declare the gate green because the program is already behind schedule",
        "Treat as safety telemetry escape and hold revision until mapping verified",
        "Tell operators to ignore alarm color"
      ],
      "answer_index": 2,
      "correct_action": "Treat as safety telemetry escape and hold revision until mapping verified",
      "rationale": "Presentation-layer mapping can invert operational urgency. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Controls QA, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Raw sensor register flags critical",
        "UI severity map from new controller rev differs",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "End-to-end sensor injection proves correct priority and response",
      "bad_answers_explained": {
        "Tell operators to ignore alarm color": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Ship with written warning only": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Firmware",
      "reflection": "If you could add only one new measurement to prove the mechanism (Presentation-layer mapping can invert operational urgency), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-037-1",
      "title": "BMC loses rack identity — EVT discovery",
      "domain": "Firmware",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Asset inventory merges two server serials under one rack. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) FRU EEPROM field duplicates; (2) Provisioning script retries with cached identifier. What is the best initial program/technical decision?",
      "signals": [
        "FRU EEPROM field duplicates",
        "Provisioning script retries with cached identifier"
      ],
      "hypotheses": [
        "Incorrect asset identity corrupts revision tracing and impact analysis",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Delete duplicate field records without diagnosis",
        "Assume one green rack is enough",
        "Hold affected registration, repair identity/provision workflow and audit all assets"
      ],
      "answer_index": 3,
      "correct_action": "Hold affected registration, repair identity/provision workflow and audit all assets",
      "rationale": "Incorrect asset identity corrupts revision tracing and impact analysis. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Deployment automation, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "FRU EEPROM field duplicates",
        "Provisioning script retries with cached identifier",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Unique serial integrity through production and monitoring",
      "bad_answers_explained": {
        "Assume one green rack is enough": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Delete duplicate field records without diagnosis": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Firmware",
      "reflection": "If you could add only one new measurement to prove the mechanism (Incorrect asset identity corrupts revision tracing and impact analysis), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-037-2",
      "title": "BMC loses rack identity — Late DVT change",
      "domain": "Firmware",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Asset inventory merges two server serials under one rack. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) FRU EEPROM field duplicates; (2) Provisioning script retries with cached identifier. What is the best initial program/technical decision?",
      "signals": [
        "FRU EEPROM field duplicates",
        "Provisioning script retries with cached identifier"
      ],
      "hypotheses": [
        "Incorrect asset identity corrupts revision tracing and impact analysis",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Assume one green rack is enough",
        "Hold affected registration, repair identity/provision workflow and audit all assets",
        "Delete duplicate field records without diagnosis",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 1,
      "correct_action": "Hold affected registration, repair identity/provision workflow and audit all assets",
      "rationale": "Incorrect asset identity corrupts revision tracing and impact analysis. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Deployment automation, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "FRU EEPROM field duplicates",
        "Provisioning script retries with cached identifier",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Unique serial integrity through production and monitoring",
      "bad_answers_explained": {
        "Assume one green rack is enough": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Delete duplicate field records without diagnosis": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Firmware",
      "reflection": "If you could add only one new measurement to prove the mechanism (Incorrect asset identity corrupts revision tracing and impact analysis), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-037-3",
      "title": "BMC loses rack identity — PVT supplier lot",
      "domain": "Firmware",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Asset inventory merges two server serials under one rack. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) FRU EEPROM field duplicates; (2) Provisioning script retries with cached identifier. What is the best initial program/technical decision?",
      "signals": [
        "FRU EEPROM field duplicates",
        "Provisioning script retries with cached identifier"
      ],
      "hypotheses": [
        "Incorrect asset identity corrupts revision tracing and impact analysis",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Assume one green rack is enough",
        "Delete duplicate field records without diagnosis",
        "Declare the gate green because the program is already behind schedule",
        "Hold affected registration, repair identity/provision workflow and audit all assets"
      ],
      "answer_index": 3,
      "correct_action": "Hold affected registration, repair identity/provision workflow and audit all assets",
      "rationale": "Incorrect asset identity corrupts revision tracing and impact analysis. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Deployment automation, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "FRU EEPROM field duplicates",
        "Provisioning script retries with cached identifier",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Unique serial integrity through production and monitoring",
      "bad_answers_explained": {
        "Assume one green rack is enough": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Delete duplicate field records without diagnosis": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Firmware",
      "reflection": "If you could add only one new measurement to prove the mechanism (Incorrect asset identity corrupts revision tracing and impact analysis), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-037-4",
      "title": "BMC loses rack identity — Deployment and field",
      "domain": "Firmware",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Asset inventory merges two server serials under one rack. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) FRU EEPROM field duplicates; (2) Provisioning script retries with cached identifier. What is the best initial program/technical decision?",
      "signals": [
        "FRU EEPROM field duplicates",
        "Provisioning script retries with cached identifier"
      ],
      "hypotheses": [
        "Incorrect asset identity corrupts revision tracing and impact analysis",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Delete duplicate field records without diagnosis",
        "Hold affected registration, repair identity/provision workflow and audit all assets",
        "Assume one green rack is enough"
      ],
      "answer_index": 2,
      "correct_action": "Hold affected registration, repair identity/provision workflow and audit all assets",
      "rationale": "Incorrect asset identity corrupts revision tracing and impact analysis. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Deployment automation, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "FRU EEPROM field duplicates",
        "Provisioning script retries with cached identifier",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Unique serial integrity through production and monitoring",
      "bad_answers_explained": {
        "Assume one green rack is enough": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Delete duplicate field records without diagnosis": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Firmware",
      "reflection": "If you could add only one new measurement to prove the mechanism (Incorrect asset identity corrupts revision tracing and impact analysis), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-038-1",
      "title": "CPLD interlock never trips — EVT discovery",
      "domain": "Firmware",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Fault injection shows coolant loss but power remains enabled. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Loss-of-flow input toggles physically; (2) CPLD logic changed in latest revision. What is the best initial program/technical decision?",
      "signals": [
        "Loss-of-flow input toggles physically",
        "CPLD logic changed in latest revision"
      ],
      "hypotheses": [
        "A fail-safe must work under fault, not just normal state",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Accept since normal cooling works",
        "Declare the gate green because the program is already behind schedule",
        "Stop release and qualify interlock with safety owners",
        "Disconnect loss-of-flow sensor"
      ],
      "answer_index": 2,
      "correct_action": "Stop release and qualify interlock with safety owners",
      "rationale": "A fail-safe must work under fault, not just normal state. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Safety firmware, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Loss-of-flow input toggles physically",
        "CPLD logic changed in latest revision",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Physical fault-injection pass and signed interlock logic",
      "bad_answers_explained": {
        "Accept since normal cooling works": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Disconnect loss-of-flow sensor": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Firmware",
      "reflection": "If you could add only one new measurement to prove the mechanism (A fail-safe must work under fault, not just normal state), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-038-2",
      "title": "CPLD interlock never trips — Late DVT change",
      "domain": "Firmware",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Fault injection shows coolant loss but power remains enabled. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Loss-of-flow input toggles physically; (2) CPLD logic changed in latest revision. What is the best initial program/technical decision?",
      "signals": [
        "Loss-of-flow input toggles physically",
        "CPLD logic changed in latest revision"
      ],
      "hypotheses": [
        "A fail-safe must work under fault, not just normal state",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Disconnect loss-of-flow sensor",
        "Stop release and qualify interlock with safety owners",
        "Accept since normal cooling works",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 1,
      "correct_action": "Stop release and qualify interlock with safety owners",
      "rationale": "A fail-safe must work under fault, not just normal state. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Safety firmware, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Loss-of-flow input toggles physically",
        "CPLD logic changed in latest revision",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Physical fault-injection pass and signed interlock logic",
      "bad_answers_explained": {
        "Accept since normal cooling works": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Disconnect loss-of-flow sensor": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Firmware",
      "reflection": "If you could add only one new measurement to prove the mechanism (A fail-safe must work under fault, not just normal state), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-038-3",
      "title": "CPLD interlock never trips — PVT supplier lot",
      "domain": "Firmware",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Fault injection shows coolant loss but power remains enabled. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Loss-of-flow input toggles physically; (2) CPLD logic changed in latest revision. What is the best initial program/technical decision?",
      "signals": [
        "Loss-of-flow input toggles physically",
        "CPLD logic changed in latest revision"
      ],
      "hypotheses": [
        "A fail-safe must work under fault, not just normal state",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Stop release and qualify interlock with safety owners",
        "Disconnect loss-of-flow sensor",
        "Declare the gate green because the program is already behind schedule",
        "Accept since normal cooling works"
      ],
      "answer_index": 0,
      "correct_action": "Stop release and qualify interlock with safety owners",
      "rationale": "A fail-safe must work under fault, not just normal state. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Safety firmware, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Loss-of-flow input toggles physically",
        "CPLD logic changed in latest revision",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Physical fault-injection pass and signed interlock logic",
      "bad_answers_explained": {
        "Accept since normal cooling works": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Disconnect loss-of-flow sensor": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Firmware",
      "reflection": "If you could add only one new measurement to prove the mechanism (A fail-safe must work under fault, not just normal state), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-038-4",
      "title": "CPLD interlock never trips — Deployment and field",
      "domain": "Firmware",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Fault injection shows coolant loss but power remains enabled. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Loss-of-flow input toggles physically; (2) CPLD logic changed in latest revision. What is the best initial program/technical decision?",
      "signals": [
        "Loss-of-flow input toggles physically",
        "CPLD logic changed in latest revision"
      ],
      "hypotheses": [
        "A fail-safe must work under fault, not just normal state",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Stop release and qualify interlock with safety owners",
        "Declare the gate green because the program is already behind schedule",
        "Accept since normal cooling works",
        "Disconnect loss-of-flow sensor"
      ],
      "answer_index": 0,
      "correct_action": "Stop release and qualify interlock with safety owners",
      "rationale": "A fail-safe must work under fault, not just normal state. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Safety firmware, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Loss-of-flow input toggles physically",
        "CPLD logic changed in latest revision",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Physical fault-injection pass and signed interlock logic",
      "bad_answers_explained": {
        "Accept since normal cooling works": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Disconnect loss-of-flow sensor": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Firmware",
      "reflection": "If you could add only one new measurement to prove the mechanism (A fail-safe must work under fault, not just normal state), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-039-1",
      "title": "Clock throttling misreport — EVT discovery",
      "domain": "Firmware",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Applications slow but dashboards report full accelerator clock. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Driver telemetry field was renamed; (2) Power/thermal measurements suggest device derating. What is the best initial program/technical decision?",
      "signals": [
        "Driver telemetry field was renamed",
        "Power/thermal measurements suggest device derating"
      ],
      "hypotheses": [
        "Incomplete observability hides true hardware or runtime limitation",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Cross-check hardware counters and corrected driver telemetry with workload profile",
        "Purchase more accelerators before diagnosing",
        "Declare the gate green because the program is already behind schedule",
        "Treat p50 speed as proof"
      ],
      "answer_index": 0,
      "correct_action": "Cross-check hardware counters and corrected driver telemetry with workload profile",
      "rationale": "Incomplete observability hides true hardware or runtime limitation. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Performance FW, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Driver telemetry field was renamed",
        "Power/thermal measurements suggest device derating",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Synchronized telemetry and representative performance baseline",
      "bad_answers_explained": {
        "Purchase more accelerators before diagnosing": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Treat p50 speed as proof": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Firmware",
      "reflection": "If you could add only one new measurement to prove the mechanism (Incomplete observability hides true hardware or runtime limitation), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-039-2",
      "title": "Clock throttling misreport — Late DVT change",
      "domain": "Firmware",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Applications slow but dashboards report full accelerator clock. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Driver telemetry field was renamed; (2) Power/thermal measurements suggest device derating. What is the best initial program/technical decision?",
      "signals": [
        "Driver telemetry field was renamed",
        "Power/thermal measurements suggest device derating"
      ],
      "hypotheses": [
        "Incomplete observability hides true hardware or runtime limitation",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Purchase more accelerators before diagnosing",
        "Treat p50 speed as proof",
        "Cross-check hardware counters and corrected driver telemetry with workload profile",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 2,
      "correct_action": "Cross-check hardware counters and corrected driver telemetry with workload profile",
      "rationale": "Incomplete observability hides true hardware or runtime limitation. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Performance FW, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Driver telemetry field was renamed",
        "Power/thermal measurements suggest device derating",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Synchronized telemetry and representative performance baseline",
      "bad_answers_explained": {
        "Purchase more accelerators before diagnosing": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Treat p50 speed as proof": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Firmware",
      "reflection": "If you could add only one new measurement to prove the mechanism (Incomplete observability hides true hardware or runtime limitation), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-039-3",
      "title": "Clock throttling misreport — PVT supplier lot",
      "domain": "Firmware",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Applications slow but dashboards report full accelerator clock. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Driver telemetry field was renamed; (2) Power/thermal measurements suggest device derating. What is the best initial program/technical decision?",
      "signals": [
        "Driver telemetry field was renamed",
        "Power/thermal measurements suggest device derating"
      ],
      "hypotheses": [
        "Incomplete observability hides true hardware or runtime limitation",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Treat p50 speed as proof",
        "Declare the gate green because the program is already behind schedule",
        "Purchase more accelerators before diagnosing",
        "Cross-check hardware counters and corrected driver telemetry with workload profile"
      ],
      "answer_index": 3,
      "correct_action": "Cross-check hardware counters and corrected driver telemetry with workload profile",
      "rationale": "Incomplete observability hides true hardware or runtime limitation. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Performance FW, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Driver telemetry field was renamed",
        "Power/thermal measurements suggest device derating",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Synchronized telemetry and representative performance baseline",
      "bad_answers_explained": {
        "Purchase more accelerators before diagnosing": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Treat p50 speed as proof": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Firmware",
      "reflection": "If you could add only one new measurement to prove the mechanism (Incomplete observability hides true hardware or runtime limitation), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-039-4",
      "title": "Clock throttling misreport — Deployment and field",
      "domain": "Firmware",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Applications slow but dashboards report full accelerator clock. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Driver telemetry field was renamed; (2) Power/thermal measurements suggest device derating. What is the best initial program/technical decision?",
      "signals": [
        "Driver telemetry field was renamed",
        "Power/thermal measurements suggest device derating"
      ],
      "hypotheses": [
        "Incomplete observability hides true hardware or runtime limitation",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Purchase more accelerators before diagnosing",
        "Treat p50 speed as proof",
        "Declare the gate green because the program is already behind schedule",
        "Cross-check hardware counters and corrected driver telemetry with workload profile"
      ],
      "answer_index": 3,
      "correct_action": "Cross-check hardware counters and corrected driver telemetry with workload profile",
      "rationale": "Incomplete observability hides true hardware or runtime limitation. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Performance FW, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Driver telemetry field was renamed",
        "Power/thermal measurements suggest device derating",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Synchronized telemetry and representative performance baseline",
      "bad_answers_explained": {
        "Purchase more accelerators before diagnosing": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Treat p50 speed as proof": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Firmware",
      "reflection": "If you could add only one new measurement to prove the mechanism (Incomplete observability hides true hardware or runtime limitation), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-040-1",
      "title": "Management network isolation — EVT discovery",
      "domain": "Firmware",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "BMC access drops when high-bandwidth workload begins. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) OOB switch shares wrong VLAN/uplink; (2) GPU data plane remains running. What is the best initial program/technical decision?",
      "signals": [
        "OOB switch shares wrong VLAN/uplink",
        "GPU data plane remains running"
      ],
      "hypotheses": [
        "OOB management should remain available during data-plane load",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Disable access controls",
        "Inspect management/data plane network isolation and link configuration",
        "Reboot all compute nodes first"
      ],
      "answer_index": 2,
      "correct_action": "Inspect management/data plane network isolation and link configuration",
      "rationale": "OOB management should remain available during data-plane load. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Network infrastructure, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "OOB switch shares wrong VLAN/uplink",
        "GPU data plane remains running",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Management availability under full workload and fault cases",
      "bad_answers_explained": {
        "Reboot all compute nodes first": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Disable access controls": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Firmware",
      "reflection": "If you could add only one new measurement to prove the mechanism (OOB management should remain available during data-plane load), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-040-2",
      "title": "Management network isolation — Late DVT change",
      "domain": "Firmware",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "BMC access drops when high-bandwidth workload begins. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) OOB switch shares wrong VLAN/uplink; (2) GPU data plane remains running. What is the best initial program/technical decision?",
      "signals": [
        "OOB switch shares wrong VLAN/uplink",
        "GPU data plane remains running"
      ],
      "hypotheses": [
        "OOB management should remain available during data-plane load",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Inspect management/data plane network isolation and link configuration",
        "Disable access controls",
        "Declare the gate green because the program is already behind schedule",
        "Reboot all compute nodes first"
      ],
      "answer_index": 0,
      "correct_action": "Inspect management/data plane network isolation and link configuration",
      "rationale": "OOB management should remain available during data-plane load. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Network infrastructure, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "OOB switch shares wrong VLAN/uplink",
        "GPU data plane remains running",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Management availability under full workload and fault cases",
      "bad_answers_explained": {
        "Reboot all compute nodes first": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Disable access controls": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Firmware",
      "reflection": "If you could add only one new measurement to prove the mechanism (OOB management should remain available during data-plane load), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-040-3",
      "title": "Management network isolation — PVT supplier lot",
      "domain": "Firmware",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "BMC access drops when high-bandwidth workload begins. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) OOB switch shares wrong VLAN/uplink; (2) GPU data plane remains running. What is the best initial program/technical decision?",
      "signals": [
        "OOB switch shares wrong VLAN/uplink",
        "GPU data plane remains running"
      ],
      "hypotheses": [
        "OOB management should remain available during data-plane load",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Reboot all compute nodes first",
        "Inspect management/data plane network isolation and link configuration",
        "Disable access controls",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 1,
      "correct_action": "Inspect management/data plane network isolation and link configuration",
      "rationale": "OOB management should remain available during data-plane load. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Network infrastructure, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "OOB switch shares wrong VLAN/uplink",
        "GPU data plane remains running",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Management availability under full workload and fault cases",
      "bad_answers_explained": {
        "Reboot all compute nodes first": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Disable access controls": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Firmware",
      "reflection": "If you could add only one new measurement to prove the mechanism (OOB management should remain available during data-plane load), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-040-4",
      "title": "Management network isolation — Deployment and field",
      "domain": "Firmware",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "BMC access drops when high-bandwidth workload begins. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) OOB switch shares wrong VLAN/uplink; (2) GPU data plane remains running. What is the best initial program/technical decision?",
      "signals": [
        "OOB switch shares wrong VLAN/uplink",
        "GPU data plane remains running"
      ],
      "hypotheses": [
        "OOB management should remain available during data-plane load",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Reboot all compute nodes first",
        "Disable access controls",
        "Inspect management/data plane network isolation and link configuration"
      ],
      "answer_index": 3,
      "correct_action": "Inspect management/data plane network isolation and link configuration",
      "rationale": "OOB management should remain available during data-plane load. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Network infrastructure, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "OOB switch shares wrong VLAN/uplink",
        "GPU data plane remains running",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Management availability under full workload and fault cases",
      "bad_answers_explained": {
        "Reboot all compute nodes first": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Disable access controls": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Firmware",
      "reflection": "If you could add only one new measurement to prove the mechanism (OOB management should remain available during data-plane load), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-041-1",
      "title": "Optic temperature errors — EVT discovery",
      "domain": "Interconnect",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "CRC/FEC error counters rise only at max rack load. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Link flap correlates with module temperature; (2) Same fabric path works at lower temperature. What is the best initial program/technical decision?",
      "signals": [
        "Link flap correlates with module temperature",
        "Same fabric path works at lower temperature"
      ],
      "hypotheses": [
        "Temperature-sensitive optics degrade physical-layer margin",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Investigate optic thermal margin, cabling and port/lot; isolate qualified path",
        "Reset counters and pass",
        "Declare the gate green because the program is already behind schedule",
        "Tune application batch instead of link"
      ],
      "answer_index": 0,
      "correct_action": "Investigate optic thermal margin, cabling and port/lot; isolate qualified path",
      "rationale": "Temperature-sensitive optics degrade physical-layer margin. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Network hardware, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Link flap correlates with module temperature",
        "Same fabric path works at lower temperature",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Error-free qualified traffic soak at thermal worst case",
      "bad_answers_explained": {
        "Tune application batch instead of link": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Reset counters and pass": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Interconnect",
      "reflection": "If you could add only one new measurement to prove the mechanism (Temperature-sensitive optics degrade physical-layer margin), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-041-2",
      "title": "Optic temperature errors — Late DVT change",
      "domain": "Interconnect",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "CRC/FEC error counters rise only at max rack load. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Link flap correlates with module temperature; (2) Same fabric path works at lower temperature. What is the best initial program/technical decision?",
      "signals": [
        "Link flap correlates with module temperature",
        "Same fabric path works at lower temperature"
      ],
      "hypotheses": [
        "Temperature-sensitive optics degrade physical-layer margin",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Reset counters and pass",
        "Declare the gate green because the program is already behind schedule",
        "Tune application batch instead of link",
        "Investigate optic thermal margin, cabling and port/lot; isolate qualified path"
      ],
      "answer_index": 3,
      "correct_action": "Investigate optic thermal margin, cabling and port/lot; isolate qualified path",
      "rationale": "Temperature-sensitive optics degrade physical-layer margin. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Network hardware, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Link flap correlates with module temperature",
        "Same fabric path works at lower temperature",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Error-free qualified traffic soak at thermal worst case",
      "bad_answers_explained": {
        "Tune application batch instead of link": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Reset counters and pass": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Interconnect",
      "reflection": "If you could add only one new measurement to prove the mechanism (Temperature-sensitive optics degrade physical-layer margin), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-041-3",
      "title": "Optic temperature errors — PVT supplier lot",
      "domain": "Interconnect",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "CRC/FEC error counters rise only at max rack load. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Link flap correlates with module temperature; (2) Same fabric path works at lower temperature. What is the best initial program/technical decision?",
      "signals": [
        "Link flap correlates with module temperature",
        "Same fabric path works at lower temperature"
      ],
      "hypotheses": [
        "Temperature-sensitive optics degrade physical-layer margin",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Investigate optic thermal margin, cabling and port/lot; isolate qualified path",
        "Declare the gate green because the program is already behind schedule",
        "Reset counters and pass",
        "Tune application batch instead of link"
      ],
      "answer_index": 0,
      "correct_action": "Investigate optic thermal margin, cabling and port/lot; isolate qualified path",
      "rationale": "Temperature-sensitive optics degrade physical-layer margin. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Network hardware, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Link flap correlates with module temperature",
        "Same fabric path works at lower temperature",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Error-free qualified traffic soak at thermal worst case",
      "bad_answers_explained": {
        "Tune application batch instead of link": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Reset counters and pass": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Interconnect",
      "reflection": "If you could add only one new measurement to prove the mechanism (Temperature-sensitive optics degrade physical-layer margin), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-041-4",
      "title": "Optic temperature errors — Deployment and field",
      "domain": "Interconnect",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "CRC/FEC error counters rise only at max rack load. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Link flap correlates with module temperature; (2) Same fabric path works at lower temperature. What is the best initial program/technical decision?",
      "signals": [
        "Link flap correlates with module temperature",
        "Same fabric path works at lower temperature"
      ],
      "hypotheses": [
        "Temperature-sensitive optics degrade physical-layer margin",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Tune application batch instead of link",
        "Declare the gate green because the program is already behind schedule",
        "Reset counters and pass",
        "Investigate optic thermal margin, cabling and port/lot; isolate qualified path"
      ],
      "answer_index": 3,
      "correct_action": "Investigate optic thermal margin, cabling and port/lot; isolate qualified path",
      "rationale": "Temperature-sensitive optics degrade physical-layer margin. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Network hardware, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Link flap correlates with module temperature",
        "Same fabric path works at lower temperature",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Error-free qualified traffic soak at thermal worst case",
      "bad_answers_explained": {
        "Tune application batch instead of link": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Reset counters and pass": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Interconnect",
      "reflection": "If you could add only one new measurement to prove the mechanism (Temperature-sensitive optics degrade physical-layer margin), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-042-1",
      "title": "Collective tail skew — EVT discovery",
      "domain": "Interconnect",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "One rank's all-reduce runs 4x slower than others. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Problem follows a leaf switch port; (2) Compute time per rank is stable. What is the best initial program/technical decision?",
      "signals": [
        "Problem follows a leaf switch port",
        "Compute time per rank is stable"
      ],
      "hypotheses": [
        "Slowest synchronized participant degrades entire job goodput",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Accept since link reports up",
        "Run path-aware diagnostics and isolate congestion/optic before retuning sharding",
        "Declare the gate green because the program is already behind schedule",
        "Replace all HBMs without evidence"
      ],
      "answer_index": 1,
      "correct_action": "Run path-aware diagnostics and isolate congestion/optic before retuning sharding",
      "rationale": "Slowest synchronized participant degrades entire job goodput. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Fabric engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Problem follows a leaf switch port",
        "Compute time per rank is stable",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Repeatable collective baseline and clean network counters",
      "bad_answers_explained": {
        "Replace all HBMs without evidence": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Accept since link reports up": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Interconnect",
      "reflection": "If you could add only one new measurement to prove the mechanism (Slowest synchronized participant degrades entire job goodput), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-042-2",
      "title": "Collective tail skew — Late DVT change",
      "domain": "Interconnect",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "One rank's all-reduce runs 4x slower than others. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Problem follows a leaf switch port; (2) Compute time per rank is stable. What is the best initial program/technical decision?",
      "signals": [
        "Problem follows a leaf switch port",
        "Compute time per rank is stable"
      ],
      "hypotheses": [
        "Slowest synchronized participant degrades entire job goodput",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Accept since link reports up",
        "Run path-aware diagnostics and isolate congestion/optic before retuning sharding",
        "Replace all HBMs without evidence",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 1,
      "correct_action": "Run path-aware diagnostics and isolate congestion/optic before retuning sharding",
      "rationale": "Slowest synchronized participant degrades entire job goodput. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Fabric engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Problem follows a leaf switch port",
        "Compute time per rank is stable",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Repeatable collective baseline and clean network counters",
      "bad_answers_explained": {
        "Replace all HBMs without evidence": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Accept since link reports up": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Interconnect",
      "reflection": "If you could add only one new measurement to prove the mechanism (Slowest synchronized participant degrades entire job goodput), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-042-3",
      "title": "Collective tail skew — PVT supplier lot",
      "domain": "Interconnect",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "One rank's all-reduce runs 4x slower than others. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Problem follows a leaf switch port; (2) Compute time per rank is stable. What is the best initial program/technical decision?",
      "signals": [
        "Problem follows a leaf switch port",
        "Compute time per rank is stable"
      ],
      "hypotheses": [
        "Slowest synchronized participant degrades entire job goodput",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Accept since link reports up",
        "Replace all HBMs without evidence",
        "Declare the gate green because the program is already behind schedule",
        "Run path-aware diagnostics and isolate congestion/optic before retuning sharding"
      ],
      "answer_index": 3,
      "correct_action": "Run path-aware diagnostics and isolate congestion/optic before retuning sharding",
      "rationale": "Slowest synchronized participant degrades entire job goodput. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Fabric engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Problem follows a leaf switch port",
        "Compute time per rank is stable",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Repeatable collective baseline and clean network counters",
      "bad_answers_explained": {
        "Replace all HBMs without evidence": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Accept since link reports up": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Interconnect",
      "reflection": "If you could add only one new measurement to prove the mechanism (Slowest synchronized participant degrades entire job goodput), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-042-4",
      "title": "Collective tail skew — Deployment and field",
      "domain": "Interconnect",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "One rank's all-reduce runs 4x slower than others. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Problem follows a leaf switch port; (2) Compute time per rank is stable. What is the best initial program/technical decision?",
      "signals": [
        "Problem follows a leaf switch port",
        "Compute time per rank is stable"
      ],
      "hypotheses": [
        "Slowest synchronized participant degrades entire job goodput",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Accept since link reports up",
        "Run path-aware diagnostics and isolate congestion/optic before retuning sharding",
        "Replace all HBMs without evidence"
      ],
      "answer_index": 2,
      "correct_action": "Run path-aware diagnostics and isolate congestion/optic before retuning sharding",
      "rationale": "Slowest synchronized participant degrades entire job goodput. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Fabric engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Problem follows a leaf switch port",
        "Compute time per rank is stable",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Repeatable collective baseline and clean network counters",
      "bad_answers_explained": {
        "Replace all HBMs without evidence": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Accept since link reports up": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Interconnect",
      "reflection": "If you could add only one new measurement to prove the mechanism (Slowest synchronized participant degrades entire job goodput), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-043-1",
      "title": "ICI versus DCN confusion — EVT discovery",
      "domain": "Interconnect",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Multislice training stalls only across pod boundaries. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Intra-slice ICI benchmark healthy; (2) DCN network drops increase between slices. What is the best initial program/technical decision?",
      "signals": [
        "Intra-slice ICI benchmark healthy",
        "DCN network drops increase between slices"
      ],
      "hypotheses": [
        "Different fabrics govern within- versus between-slice paths",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Increase MXU clocks",
        "Declare the gate green because the program is already behind schedule",
        "Replace intra-slice optical switch blindly",
        "Test DCN routing/transport and placement separately from ICI topology"
      ],
      "answer_index": 3,
      "correct_action": "Test DCN routing/transport and placement separately from ICI topology",
      "rationale": "Different fabrics govern within- versus between-slice paths. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Distributed systems, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Intra-slice ICI benchmark healthy",
        "DCN network drops increase between slices",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Repeat single-slice and multislice performance and fault test",
      "bad_answers_explained": {
        "Replace intra-slice optical switch blindly": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Increase MXU clocks": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Interconnect",
      "reflection": "If you could add only one new measurement to prove the mechanism (Different fabrics govern within- versus between-slice paths), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-043-2",
      "title": "ICI versus DCN confusion — Late DVT change",
      "domain": "Interconnect",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Multislice training stalls only across pod boundaries. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Intra-slice ICI benchmark healthy; (2) DCN network drops increase between slices. What is the best initial program/technical decision?",
      "signals": [
        "Intra-slice ICI benchmark healthy",
        "DCN network drops increase between slices"
      ],
      "hypotheses": [
        "Different fabrics govern within- versus between-slice paths",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Test DCN routing/transport and placement separately from ICI topology",
        "Increase MXU clocks",
        "Replace intra-slice optical switch blindly",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 0,
      "correct_action": "Test DCN routing/transport and placement separately from ICI topology",
      "rationale": "Different fabrics govern within- versus between-slice paths. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Distributed systems, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Intra-slice ICI benchmark healthy",
        "DCN network drops increase between slices",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Repeat single-slice and multislice performance and fault test",
      "bad_answers_explained": {
        "Replace intra-slice optical switch blindly": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Increase MXU clocks": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Interconnect",
      "reflection": "If you could add only one new measurement to prove the mechanism (Different fabrics govern within- versus between-slice paths), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-043-3",
      "title": "ICI versus DCN confusion — PVT supplier lot",
      "domain": "Interconnect",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Multislice training stalls only across pod boundaries. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Intra-slice ICI benchmark healthy; (2) DCN network drops increase between slices. What is the best initial program/technical decision?",
      "signals": [
        "Intra-slice ICI benchmark healthy",
        "DCN network drops increase between slices"
      ],
      "hypotheses": [
        "Different fabrics govern within- versus between-slice paths",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Test DCN routing/transport and placement separately from ICI topology",
        "Declare the gate green because the program is already behind schedule",
        "Replace intra-slice optical switch blindly",
        "Increase MXU clocks"
      ],
      "answer_index": 0,
      "correct_action": "Test DCN routing/transport and placement separately from ICI topology",
      "rationale": "Different fabrics govern within- versus between-slice paths. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Distributed systems, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Intra-slice ICI benchmark healthy",
        "DCN network drops increase between slices",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Repeat single-slice and multislice performance and fault test",
      "bad_answers_explained": {
        "Replace intra-slice optical switch blindly": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Increase MXU clocks": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Interconnect",
      "reflection": "If you could add only one new measurement to prove the mechanism (Different fabrics govern within- versus between-slice paths), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-043-4",
      "title": "ICI versus DCN confusion — Deployment and field",
      "domain": "Interconnect",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Multislice training stalls only across pod boundaries. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Intra-slice ICI benchmark healthy; (2) DCN network drops increase between slices. What is the best initial program/technical decision?",
      "signals": [
        "Intra-slice ICI benchmark healthy",
        "DCN network drops increase between slices"
      ],
      "hypotheses": [
        "Different fabrics govern within- versus between-slice paths",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Replace intra-slice optical switch blindly",
        "Increase MXU clocks",
        "Test DCN routing/transport and placement separately from ICI topology"
      ],
      "answer_index": 3,
      "correct_action": "Test DCN routing/transport and placement separately from ICI topology",
      "rationale": "Different fabrics govern within- versus between-slice paths. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Distributed systems, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Intra-slice ICI benchmark healthy",
        "DCN network drops increase between slices",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Repeat single-slice and multislice performance and fault test",
      "bad_answers_explained": {
        "Replace intra-slice optical switch blindly": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Increase MXU clocks": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Interconnect",
      "reflection": "If you could add only one new measurement to prove the mechanism (Different fabrics govern within- versus between-slice paths), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-044-1",
      "title": "Wrong port mapping — EVT discovery",
      "domain": "Interconnect",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Fabric reports healthy links but half cross-rack traffic routes over longer paths. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Actual cable label map mismatches approved topology; (2) Latency spikes after rack relocation. What is the best initial program/technical decision?",
      "signals": [
        "Actual cable label map mismatches approved topology",
        "Latency spikes after rack relocation"
      ],
      "hypotheses": [
        "Logical topology may not match intended physical placement",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Audit optical/cable ports against ICD and correct under change control",
        "Reinstall driver on all nodes",
        "Accept because all links green",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 0,
      "correct_action": "Audit optical/cable ports against ICD and correct under change control",
      "rationale": "Logical topology may not match intended physical placement. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Fabric deployment, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Actual cable label map mismatches approved topology",
        "Latency spikes after rack relocation",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Validated port map and traffic tests on intended paths",
      "bad_answers_explained": {
        "Reinstall driver on all nodes": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Accept because all links green": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Interconnect",
      "reflection": "If you could add only one new measurement to prove the mechanism (Logical topology may not match intended physical placement), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-044-2",
      "title": "Wrong port mapping — Late DVT change",
      "domain": "Interconnect",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Fabric reports healthy links but half cross-rack traffic routes over longer paths. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Actual cable label map mismatches approved topology; (2) Latency spikes after rack relocation. What is the best initial program/technical decision?",
      "signals": [
        "Actual cable label map mismatches approved topology",
        "Latency spikes after rack relocation"
      ],
      "hypotheses": [
        "Logical topology may not match intended physical placement",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Audit optical/cable ports against ICD and correct under change control",
        "Reinstall driver on all nodes",
        "Declare the gate green because the program is already behind schedule",
        "Accept because all links green"
      ],
      "answer_index": 0,
      "correct_action": "Audit optical/cable ports against ICD and correct under change control",
      "rationale": "Logical topology may not match intended physical placement. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Fabric deployment, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Actual cable label map mismatches approved topology",
        "Latency spikes after rack relocation",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Validated port map and traffic tests on intended paths",
      "bad_answers_explained": {
        "Reinstall driver on all nodes": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Accept because all links green": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Interconnect",
      "reflection": "If you could add only one new measurement to prove the mechanism (Logical topology may not match intended physical placement), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-044-3",
      "title": "Wrong port mapping — PVT supplier lot",
      "domain": "Interconnect",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Fabric reports healthy links but half cross-rack traffic routes over longer paths. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Actual cable label map mismatches approved topology; (2) Latency spikes after rack relocation. What is the best initial program/technical decision?",
      "signals": [
        "Actual cable label map mismatches approved topology",
        "Latency spikes after rack relocation"
      ],
      "hypotheses": [
        "Logical topology may not match intended physical placement",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Reinstall driver on all nodes",
        "Accept because all links green",
        "Declare the gate green because the program is already behind schedule",
        "Audit optical/cable ports against ICD and correct under change control"
      ],
      "answer_index": 3,
      "correct_action": "Audit optical/cable ports against ICD and correct under change control",
      "rationale": "Logical topology may not match intended physical placement. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Fabric deployment, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Actual cable label map mismatches approved topology",
        "Latency spikes after rack relocation",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Validated port map and traffic tests on intended paths",
      "bad_answers_explained": {
        "Reinstall driver on all nodes": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Accept because all links green": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Interconnect",
      "reflection": "If you could add only one new measurement to prove the mechanism (Logical topology may not match intended physical placement), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-044-4",
      "title": "Wrong port mapping — Deployment and field",
      "domain": "Interconnect",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Fabric reports healthy links but half cross-rack traffic routes over longer paths. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Actual cable label map mismatches approved topology; (2) Latency spikes after rack relocation. What is the best initial program/technical decision?",
      "signals": [
        "Actual cable label map mismatches approved topology",
        "Latency spikes after rack relocation"
      ],
      "hypotheses": [
        "Logical topology may not match intended physical placement",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Audit optical/cable ports against ICD and correct under change control",
        "Accept because all links green",
        "Reinstall driver on all nodes",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 0,
      "correct_action": "Audit optical/cable ports against ICD and correct under change control",
      "rationale": "Logical topology may not match intended physical placement. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Fabric deployment, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Actual cable label map mismatches approved topology",
        "Latency spikes after rack relocation",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Validated port map and traffic tests on intended paths",
      "bad_answers_explained": {
        "Reinstall driver on all nodes": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Accept because all links green": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Interconnect",
      "reflection": "If you could add only one new measurement to prove the mechanism (Logical topology may not match intended physical placement), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-045-1",
      "title": "Microburst queue loss — EVT discovery",
      "domain": "Interconnect",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Network line rate is below nominal but collective latency spikes. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Switch queue tail-drop bursts at synchronization boundaries; (2) NIC physical error counters are clean. What is the best initial program/technical decision?",
      "signals": [
        "Switch queue tail-drop bursts at synchronization boundaries",
        "NIC physical error counters are clean"
      ],
      "hypotheses": [
        "Short synchronization bursts can saturate buffers without high time-averaged rates",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare mean utilization sufficient",
        "Declare the gate green because the program is already behind schedule",
        "Replace every fiber as assumed defective",
        "Capture queue/PFC/ECN/congestion and tune design after controlled benchmarking"
      ],
      "answer_index": 3,
      "correct_action": "Capture queue/PFC/ECN/congestion and tune design after controlled benchmarking",
      "rationale": "Short synchronization bursts can saturate buffers without high time-averaged rates. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Network performance, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Switch queue tail-drop bursts at synchronization boundaries",
        "NIC physical error counters are clean",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Lossless/low-loss transport behavior within qualified workload SLO",
      "bad_answers_explained": {
        "Replace every fiber as assumed defective": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Declare mean utilization sufficient": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Interconnect",
      "reflection": "If you could add only one new measurement to prove the mechanism (Short synchronization bursts can saturate buffers without high time-averaged rates), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-045-2",
      "title": "Microburst queue loss — Late DVT change",
      "domain": "Interconnect",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Network line rate is below nominal but collective latency spikes. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Switch queue tail-drop bursts at synchronization boundaries; (2) NIC physical error counters are clean. What is the best initial program/technical decision?",
      "signals": [
        "Switch queue tail-drop bursts at synchronization boundaries",
        "NIC physical error counters are clean"
      ],
      "hypotheses": [
        "Short synchronization bursts can saturate buffers without high time-averaged rates",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Replace every fiber as assumed defective",
        "Declare mean utilization sufficient",
        "Declare the gate green because the program is already behind schedule",
        "Capture queue/PFC/ECN/congestion and tune design after controlled benchmarking"
      ],
      "answer_index": 3,
      "correct_action": "Capture queue/PFC/ECN/congestion and tune design after controlled benchmarking",
      "rationale": "Short synchronization bursts can saturate buffers without high time-averaged rates. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Network performance, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Switch queue tail-drop bursts at synchronization boundaries",
        "NIC physical error counters are clean",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Lossless/low-loss transport behavior within qualified workload SLO",
      "bad_answers_explained": {
        "Replace every fiber as assumed defective": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Declare mean utilization sufficient": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Interconnect",
      "reflection": "If you could add only one new measurement to prove the mechanism (Short synchronization bursts can saturate buffers without high time-averaged rates), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-045-3",
      "title": "Microburst queue loss — PVT supplier lot",
      "domain": "Interconnect",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Network line rate is below nominal but collective latency spikes. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Switch queue tail-drop bursts at synchronization boundaries; (2) NIC physical error counters are clean. What is the best initial program/technical decision?",
      "signals": [
        "Switch queue tail-drop bursts at synchronization boundaries",
        "NIC physical error counters are clean"
      ],
      "hypotheses": [
        "Short synchronization bursts can saturate buffers without high time-averaged rates",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Capture queue/PFC/ECN/congestion and tune design after controlled benchmarking",
        "Declare mean utilization sufficient",
        "Replace every fiber as assumed defective",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 0,
      "correct_action": "Capture queue/PFC/ECN/congestion and tune design after controlled benchmarking",
      "rationale": "Short synchronization bursts can saturate buffers without high time-averaged rates. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Network performance, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Switch queue tail-drop bursts at synchronization boundaries",
        "NIC physical error counters are clean",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Lossless/low-loss transport behavior within qualified workload SLO",
      "bad_answers_explained": {
        "Replace every fiber as assumed defective": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Declare mean utilization sufficient": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Interconnect",
      "reflection": "If you could add only one new measurement to prove the mechanism (Short synchronization bursts can saturate buffers without high time-averaged rates), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-045-4",
      "title": "Microburst queue loss — Deployment and field",
      "domain": "Interconnect",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Network line rate is below nominal but collective latency spikes. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Switch queue tail-drop bursts at synchronization boundaries; (2) NIC physical error counters are clean. What is the best initial program/technical decision?",
      "signals": [
        "Switch queue tail-drop bursts at synchronization boundaries",
        "NIC physical error counters are clean"
      ],
      "hypotheses": [
        "Short synchronization bursts can saturate buffers without high time-averaged rates",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Capture queue/PFC/ECN/congestion and tune design after controlled benchmarking",
        "Declare mean utilization sufficient",
        "Replace every fiber as assumed defective",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 0,
      "correct_action": "Capture queue/PFC/ECN/congestion and tune design after controlled benchmarking",
      "rationale": "Short synchronization bursts can saturate buffers without high time-averaged rates. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Network performance, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Switch queue tail-drop bursts at synchronization boundaries",
        "NIC physical error counters are clean",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Lossless/low-loss transport behavior within qualified workload SLO",
      "bad_answers_explained": {
        "Replace every fiber as assumed defective": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Declare mean utilization sufficient": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Interconnect",
      "reflection": "If you could add only one new measurement to prove the mechanism (Short synchronization bursts can saturate buffers without high time-averaged rates), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-046-1",
      "title": "FEC correction rising — EVT discovery",
      "domain": "Interconnect",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Port has increasing corrected FEC but no hard failure yet. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Corrected errors correlate with one optics lot; (2) Receive power drifts with temperature. What is the best initial program/technical decision?",
      "signals": [
        "Corrected errors correlate with one optics lot",
        "Receive power drifts with temperature"
      ],
      "hypotheses": [
        "Growing corrected errors may be leading degradation indicator",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Ignore because uncorrected error is zero",
        "Quarantine suspect lot and test optical margin before escalating to faults",
        "Declare the gate green because the program is already behind schedule",
        "Turn off corrected-error monitoring"
      ],
      "answer_index": 1,
      "correct_action": "Quarantine suspect lot and test optical margin before escalating to faults",
      "rationale": "Growing corrected errors may be leading degradation indicator. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Network quality, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Corrected errors correlate with one optics lot",
        "Receive power drifts with temperature",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Qualified optics and verified stable error/margin trend",
      "bad_answers_explained": {
        "Ignore because uncorrected error is zero": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Turn off corrected-error monitoring": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Interconnect",
      "reflection": "If you could add only one new measurement to prove the mechanism (Growing corrected errors may be leading degradation indicator), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-046-2",
      "title": "FEC correction rising — Late DVT change",
      "domain": "Interconnect",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Port has increasing corrected FEC but no hard failure yet. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Corrected errors correlate with one optics lot; (2) Receive power drifts with temperature. What is the best initial program/technical decision?",
      "signals": [
        "Corrected errors correlate with one optics lot",
        "Receive power drifts with temperature"
      ],
      "hypotheses": [
        "Growing corrected errors may be leading degradation indicator",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Turn off corrected-error monitoring",
        "Declare the gate green because the program is already behind schedule",
        "Ignore because uncorrected error is zero",
        "Quarantine suspect lot and test optical margin before escalating to faults"
      ],
      "answer_index": 3,
      "correct_action": "Quarantine suspect lot and test optical margin before escalating to faults",
      "rationale": "Growing corrected errors may be leading degradation indicator. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Network quality, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Corrected errors correlate with one optics lot",
        "Receive power drifts with temperature",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Qualified optics and verified stable error/margin trend",
      "bad_answers_explained": {
        "Ignore because uncorrected error is zero": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Turn off corrected-error monitoring": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Interconnect",
      "reflection": "If you could add only one new measurement to prove the mechanism (Growing corrected errors may be leading degradation indicator), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-046-3",
      "title": "FEC correction rising — PVT supplier lot",
      "domain": "Interconnect",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Port has increasing corrected FEC but no hard failure yet. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Corrected errors correlate with one optics lot; (2) Receive power drifts with temperature. What is the best initial program/technical decision?",
      "signals": [
        "Corrected errors correlate with one optics lot",
        "Receive power drifts with temperature"
      ],
      "hypotheses": [
        "Growing corrected errors may be leading degradation indicator",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Turn off corrected-error monitoring",
        "Declare the gate green because the program is already behind schedule",
        "Ignore because uncorrected error is zero",
        "Quarantine suspect lot and test optical margin before escalating to faults"
      ],
      "answer_index": 3,
      "correct_action": "Quarantine suspect lot and test optical margin before escalating to faults",
      "rationale": "Growing corrected errors may be leading degradation indicator. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Network quality, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Corrected errors correlate with one optics lot",
        "Receive power drifts with temperature",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Qualified optics and verified stable error/margin trend",
      "bad_answers_explained": {
        "Ignore because uncorrected error is zero": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Turn off corrected-error monitoring": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Interconnect",
      "reflection": "If you could add only one new measurement to prove the mechanism (Growing corrected errors may be leading degradation indicator), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-046-4",
      "title": "FEC correction rising — Deployment and field",
      "domain": "Interconnect",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Port has increasing corrected FEC but no hard failure yet. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Corrected errors correlate with one optics lot; (2) Receive power drifts with temperature. What is the best initial program/technical decision?",
      "signals": [
        "Corrected errors correlate with one optics lot",
        "Receive power drifts with temperature"
      ],
      "hypotheses": [
        "Growing corrected errors may be leading degradation indicator",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Quarantine suspect lot and test optical margin before escalating to faults",
        "Turn off corrected-error monitoring",
        "Ignore because uncorrected error is zero"
      ],
      "answer_index": 1,
      "correct_action": "Quarantine suspect lot and test optical margin before escalating to faults",
      "rationale": "Growing corrected errors may be leading degradation indicator. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Network quality, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Corrected errors correlate with one optics lot",
        "Receive power drifts with temperature",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Qualified optics and verified stable error/margin trend",
      "bad_answers_explained": {
        "Ignore because uncorrected error is zero": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Turn off corrected-error monitoring": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Interconnect",
      "reflection": "If you could add only one new measurement to prove the mechanism (Growing corrected errors may be leading degradation indicator), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-047-1",
      "title": "Firmware fabric rollback — EVT discovery",
      "domain": "Interconnect",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Switch FW update worsens job all-reduce goodput. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Performance returns on known-good staging revision; (2) No physical link errors changed. What is the best initial program/technical decision?",
      "signals": [
        "Performance returns on known-good staging revision",
        "No physical link errors changed"
      ],
      "hypotheses": [
        "Network software can change congestion/collective timing without link faults",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Replace cooling CDU first",
        "Continue fleet-wide rollout to average metrics",
        "Declare the gate green because the program is already behind schedule",
        "Pause upgrade and conduct controlled A/B firmware qualification with logs"
      ],
      "answer_index": 3,
      "correct_action": "Pause upgrade and conduct controlled A/B firmware qualification with logs",
      "rationale": "Network software can change congestion/collective timing without link faults. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Network FW, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Performance returns on known-good staging revision",
        "No physical link errors changed",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Canary pass, regression-free job performance and rollback",
      "bad_answers_explained": {
        "Continue fleet-wide rollout to average metrics": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Replace cooling CDU first": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Interconnect",
      "reflection": "If you could add only one new measurement to prove the mechanism (Network software can change congestion/collective timing without link faults), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-047-2",
      "title": "Firmware fabric rollback — Late DVT change",
      "domain": "Interconnect",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Switch FW update worsens job all-reduce goodput. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Performance returns on known-good staging revision; (2) No physical link errors changed. What is the best initial program/technical decision?",
      "signals": [
        "Performance returns on known-good staging revision",
        "No physical link errors changed"
      ],
      "hypotheses": [
        "Network software can change congestion/collective timing without link faults",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Replace cooling CDU first",
        "Continue fleet-wide rollout to average metrics",
        "Pause upgrade and conduct controlled A/B firmware qualification with logs",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 2,
      "correct_action": "Pause upgrade and conduct controlled A/B firmware qualification with logs",
      "rationale": "Network software can change congestion/collective timing without link faults. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Network FW, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Performance returns on known-good staging revision",
        "No physical link errors changed",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Canary pass, regression-free job performance and rollback",
      "bad_answers_explained": {
        "Continue fleet-wide rollout to average metrics": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Replace cooling CDU first": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Interconnect",
      "reflection": "If you could add only one new measurement to prove the mechanism (Network software can change congestion/collective timing without link faults), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-047-3",
      "title": "Firmware fabric rollback — PVT supplier lot",
      "domain": "Interconnect",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Switch FW update worsens job all-reduce goodput. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Performance returns on known-good staging revision; (2) No physical link errors changed. What is the best initial program/technical decision?",
      "signals": [
        "Performance returns on known-good staging revision",
        "No physical link errors changed"
      ],
      "hypotheses": [
        "Network software can change congestion/collective timing without link faults",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Pause upgrade and conduct controlled A/B firmware qualification with logs",
        "Declare the gate green because the program is already behind schedule",
        "Continue fleet-wide rollout to average metrics",
        "Replace cooling CDU first"
      ],
      "answer_index": 0,
      "correct_action": "Pause upgrade and conduct controlled A/B firmware qualification with logs",
      "rationale": "Network software can change congestion/collective timing without link faults. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Network FW, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Performance returns on known-good staging revision",
        "No physical link errors changed",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Canary pass, regression-free job performance and rollback",
      "bad_answers_explained": {
        "Continue fleet-wide rollout to average metrics": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Replace cooling CDU first": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Interconnect",
      "reflection": "If you could add only one new measurement to prove the mechanism (Network software can change congestion/collective timing without link faults), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-047-4",
      "title": "Firmware fabric rollback — Deployment and field",
      "domain": "Interconnect",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Switch FW update worsens job all-reduce goodput. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Performance returns on known-good staging revision; (2) No physical link errors changed. What is the best initial program/technical decision?",
      "signals": [
        "Performance returns on known-good staging revision",
        "No physical link errors changed"
      ],
      "hypotheses": [
        "Network software can change congestion/collective timing without link faults",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Pause upgrade and conduct controlled A/B firmware qualification with logs",
        "Continue fleet-wide rollout to average metrics",
        "Replace cooling CDU first"
      ],
      "answer_index": 1,
      "correct_action": "Pause upgrade and conduct controlled A/B firmware qualification with logs",
      "rationale": "Network software can change congestion/collective timing without link faults. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Network FW, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Performance returns on known-good staging revision",
        "No physical link errors changed",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Canary pass, regression-free job performance and rollback",
      "bad_answers_explained": {
        "Continue fleet-wide rollout to average metrics": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Replace cooling CDU first": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Interconnect",
      "reflection": "If you could add only one new measurement to prove the mechanism (Network software can change congestion/collective timing without link faults), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-048-1",
      "title": "Scheduler topology mismatch — EVT discovery",
      "domain": "Interconnect",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Cluster performance varies sharply based on placement. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Slow jobs span different network islands; (2) Individual server microbenchmarks match. What is the best initial program/technical decision?",
      "signals": [
        "Slow jobs span different network islands",
        "Individual server microbenchmarks match"
      ],
      "hypotheses": [
        "Placement can dominate collective path length and contention",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Buy additional power shelves as remedy",
        "Review topology-aware placement and cross-fabric capacity under real workload",
        "Assume accelerator chips defective",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 1,
      "correct_action": "Review topology-aware placement and cross-fabric capacity under real workload",
      "rationale": "Placement can dominate collective path length and contention. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Cluster orchestration, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Slow jobs span different network islands",
        "Individual server microbenchmarks match",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Placement rules verified on representative topology and workloads",
      "bad_answers_explained": {
        "Assume accelerator chips defective": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Buy additional power shelves as remedy": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "Interconnect",
      "reflection": "If you could add only one new measurement to prove the mechanism (Placement can dominate collective path length and contention), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-048-2",
      "title": "Scheduler topology mismatch — Late DVT change",
      "domain": "Interconnect",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Cluster performance varies sharply based on placement. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Slow jobs span different network islands; (2) Individual server microbenchmarks match. What is the best initial program/technical decision?",
      "signals": [
        "Slow jobs span different network islands",
        "Individual server microbenchmarks match"
      ],
      "hypotheses": [
        "Placement can dominate collective path length and contention",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Buy additional power shelves as remedy",
        "Review topology-aware placement and cross-fabric capacity under real workload",
        "Assume accelerator chips defective",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 1,
      "correct_action": "Review topology-aware placement and cross-fabric capacity under real workload",
      "rationale": "Placement can dominate collective path length and contention. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Cluster orchestration, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Slow jobs span different network islands",
        "Individual server microbenchmarks match",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Placement rules verified on representative topology and workloads",
      "bad_answers_explained": {
        "Assume accelerator chips defective": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Buy additional power shelves as remedy": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "Interconnect",
      "reflection": "If you could add only one new measurement to prove the mechanism (Placement can dominate collective path length and contention), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-048-3",
      "title": "Scheduler topology mismatch — PVT supplier lot",
      "domain": "Interconnect",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Cluster performance varies sharply based on placement. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Slow jobs span different network islands; (2) Individual server microbenchmarks match. What is the best initial program/technical decision?",
      "signals": [
        "Slow jobs span different network islands",
        "Individual server microbenchmarks match"
      ],
      "hypotheses": [
        "Placement can dominate collective path length and contention",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Review topology-aware placement and cross-fabric capacity under real workload",
        "Buy additional power shelves as remedy",
        "Assume accelerator chips defective",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 0,
      "correct_action": "Review topology-aware placement and cross-fabric capacity under real workload",
      "rationale": "Placement can dominate collective path length and contention. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Cluster orchestration, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Slow jobs span different network islands",
        "Individual server microbenchmarks match",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Placement rules verified on representative topology and workloads",
      "bad_answers_explained": {
        "Assume accelerator chips defective": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Buy additional power shelves as remedy": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "Interconnect",
      "reflection": "If you could add only one new measurement to prove the mechanism (Placement can dominate collective path length and contention), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-048-4",
      "title": "Scheduler topology mismatch — Deployment and field",
      "domain": "Interconnect",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Cluster performance varies sharply based on placement. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Slow jobs span different network islands; (2) Individual server microbenchmarks match. What is the best initial program/technical decision?",
      "signals": [
        "Slow jobs span different network islands",
        "Individual server microbenchmarks match"
      ],
      "hypotheses": [
        "Placement can dominate collective path length and contention",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Assume accelerator chips defective",
        "Buy additional power shelves as remedy",
        "Declare the gate green because the program is already behind schedule",
        "Review topology-aware placement and cross-fabric capacity under real workload"
      ],
      "answer_index": 3,
      "correct_action": "Review topology-aware placement and cross-fabric capacity under real workload",
      "rationale": "Placement can dominate collective path length and contention. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Cluster orchestration, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Slow jobs span different network islands",
        "Individual server microbenchmarks match",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Placement rules verified on representative topology and workloads",
      "bad_answers_explained": {
        "Assume accelerator chips defective": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Buy additional power shelves as remedy": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "Interconnect",
      "reflection": "If you could add only one new measurement to prove the mechanism (Placement can dominate collective path length and contention), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-049-1",
      "title": "MXU padding inefficiency — EVT discovery",
      "domain": "TPU",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "TPU kernel uses little MXU capacity despite high advertised TFLOPs. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Shapes are narrow and heavily padded; (2) XProf shows poor per-op utilization. What is the best initial program/technical decision?",
      "signals": [
        "Shapes are narrow and heavily padded",
        "XProf shows poor per-op utilization"
      ],
      "hypotheses": [
        "Padding and tiles can waste compute and memory",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Rebucket/re-tile dimensions and compare traced realistic workload",
        "Replace entire data center cooling loop",
        "Increase pod size before profiling",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 0,
      "correct_action": "Rebucket/re-tile dimensions and compare traced realistic workload",
      "rationale": "Padding and tiles can waste compute and memory. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage ML performance, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Shapes are narrow and heavily padded",
        "XProf shows poor per-op utilization",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Measured workload throughput and XProf utilization under supported shapes",
      "bad_answers_explained": {
        "Replace entire data center cooling loop": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Increase pod size before profiling": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "TPU",
      "reflection": "If you could add only one new measurement to prove the mechanism (Padding and tiles can waste compute and memory), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-049-2",
      "title": "MXU padding inefficiency — Late DVT change",
      "domain": "TPU",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "TPU kernel uses little MXU capacity despite high advertised TFLOPs. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Shapes are narrow and heavily padded; (2) XProf shows poor per-op utilization. What is the best initial program/technical decision?",
      "signals": [
        "Shapes are narrow and heavily padded",
        "XProf shows poor per-op utilization"
      ],
      "hypotheses": [
        "Padding and tiles can waste compute and memory",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Rebucket/re-tile dimensions and compare traced realistic workload",
        "Replace entire data center cooling loop",
        "Increase pod size before profiling",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 0,
      "correct_action": "Rebucket/re-tile dimensions and compare traced realistic workload",
      "rationale": "Padding and tiles can waste compute and memory. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage ML performance, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Shapes are narrow and heavily padded",
        "XProf shows poor per-op utilization",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Measured workload throughput and XProf utilization under supported shapes",
      "bad_answers_explained": {
        "Replace entire data center cooling loop": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Increase pod size before profiling": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "TPU",
      "reflection": "If you could add only one new measurement to prove the mechanism (Padding and tiles can waste compute and memory), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-049-3",
      "title": "MXU padding inefficiency — PVT supplier lot",
      "domain": "TPU",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "TPU kernel uses little MXU capacity despite high advertised TFLOPs. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Shapes are narrow and heavily padded; (2) XProf shows poor per-op utilization. What is the best initial program/technical decision?",
      "signals": [
        "Shapes are narrow and heavily padded",
        "XProf shows poor per-op utilization"
      ],
      "hypotheses": [
        "Padding and tiles can waste compute and memory",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Replace entire data center cooling loop",
        "Increase pod size before profiling",
        "Rebucket/re-tile dimensions and compare traced realistic workload"
      ],
      "answer_index": 3,
      "correct_action": "Rebucket/re-tile dimensions and compare traced realistic workload",
      "rationale": "Padding and tiles can waste compute and memory. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage ML performance, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Shapes are narrow and heavily padded",
        "XProf shows poor per-op utilization",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Measured workload throughput and XProf utilization under supported shapes",
      "bad_answers_explained": {
        "Replace entire data center cooling loop": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Increase pod size before profiling": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "TPU",
      "reflection": "If you could add only one new measurement to prove the mechanism (Padding and tiles can waste compute and memory), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-049-4",
      "title": "MXU padding inefficiency — Deployment and field",
      "domain": "TPU",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "TPU kernel uses little MXU capacity despite high advertised TFLOPs. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Shapes are narrow and heavily padded; (2) XProf shows poor per-op utilization. What is the best initial program/technical decision?",
      "signals": [
        "Shapes are narrow and heavily padded",
        "XProf shows poor per-op utilization"
      ],
      "hypotheses": [
        "Padding and tiles can waste compute and memory",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Replace entire data center cooling loop",
        "Declare the gate green because the program is already behind schedule",
        "Rebucket/re-tile dimensions and compare traced realistic workload",
        "Increase pod size before profiling"
      ],
      "answer_index": 2,
      "correct_action": "Rebucket/re-tile dimensions and compare traced realistic workload",
      "rationale": "Padding and tiles can waste compute and memory. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage ML performance, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Shapes are narrow and heavily padded",
        "XProf shows poor per-op utilization",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Measured workload throughput and XProf utilization under supported shapes",
      "bad_answers_explained": {
        "Replace entire data center cooling loop": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Increase pod size before profiling": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "TPU",
      "reflection": "If you could add only one new measurement to prove the mechanism (Padding and tiles can waste compute and memory), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-050-1",
      "title": "HBM capacity OOM — EVT discovery",
      "domain": "TPU",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Large-context inference fails immediately on a 32GiB device. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Memory high water exceeds chip capacity; (2) Link and chip temperatures are nominal. What is the best initial program/technical decision?",
      "signals": [
        "Memory high water exceeds chip capacity",
        "Link and chip temperatures are nominal"
      ],
      "hypotheses": [
        "Capacity and bandwidth are not interchangeable",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Reboot until memory fits",
        "Declare the gate green because the program is already behind schedule",
        "Apply verified sharding/quantization/batch design or use larger memory SKU",
        "Increase HBM bandwidth configuration setting"
      ],
      "answer_index": 2,
      "correct_action": "Apply verified sharding/quantization/batch design or use larger memory SKU",
      "rationale": "Capacity and bandwidth are not interchangeable. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Model systems, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Memory high water exceeds chip capacity",
        "Link and chip temperatures are nominal",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Worst-case memory headroom and correct outputs",
      "bad_answers_explained": {
        "Increase HBM bandwidth configuration setting": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Reboot until memory fits": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "TPU",
      "reflection": "If you could add only one new measurement to prove the mechanism (Capacity and bandwidth are not interchangeable), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-050-2",
      "title": "HBM capacity OOM — Late DVT change",
      "domain": "TPU",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Large-context inference fails immediately on a 32GiB device. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Memory high water exceeds chip capacity; (2) Link and chip temperatures are nominal. What is the best initial program/technical decision?",
      "signals": [
        "Memory high water exceeds chip capacity",
        "Link and chip temperatures are nominal"
      ],
      "hypotheses": [
        "Capacity and bandwidth are not interchangeable",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Apply verified sharding/quantization/batch design or use larger memory SKU",
        "Declare the gate green because the program is already behind schedule",
        "Reboot until memory fits",
        "Increase HBM bandwidth configuration setting"
      ],
      "answer_index": 0,
      "correct_action": "Apply verified sharding/quantization/batch design or use larger memory SKU",
      "rationale": "Capacity and bandwidth are not interchangeable. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Model systems, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Memory high water exceeds chip capacity",
        "Link and chip temperatures are nominal",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Worst-case memory headroom and correct outputs",
      "bad_answers_explained": {
        "Increase HBM bandwidth configuration setting": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Reboot until memory fits": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "TPU",
      "reflection": "If you could add only one new measurement to prove the mechanism (Capacity and bandwidth are not interchangeable), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-050-3",
      "title": "HBM capacity OOM — PVT supplier lot",
      "domain": "TPU",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Large-context inference fails immediately on a 32GiB device. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Memory high water exceeds chip capacity; (2) Link and chip temperatures are nominal. What is the best initial program/technical decision?",
      "signals": [
        "Memory high water exceeds chip capacity",
        "Link and chip temperatures are nominal"
      ],
      "hypotheses": [
        "Capacity and bandwidth are not interchangeable",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Reboot until memory fits",
        "Apply verified sharding/quantization/batch design or use larger memory SKU",
        "Increase HBM bandwidth configuration setting"
      ],
      "answer_index": 2,
      "correct_action": "Apply verified sharding/quantization/batch design or use larger memory SKU",
      "rationale": "Capacity and bandwidth are not interchangeable. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Model systems, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Memory high water exceeds chip capacity",
        "Link and chip temperatures are nominal",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Worst-case memory headroom and correct outputs",
      "bad_answers_explained": {
        "Increase HBM bandwidth configuration setting": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Reboot until memory fits": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "TPU",
      "reflection": "If you could add only one new measurement to prove the mechanism (Capacity and bandwidth are not interchangeable), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-050-4",
      "title": "HBM capacity OOM — Deployment and field",
      "domain": "TPU",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Large-context inference fails immediately on a 32GiB device. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Memory high water exceeds chip capacity; (2) Link and chip temperatures are nominal. What is the best initial program/technical decision?",
      "signals": [
        "Memory high water exceeds chip capacity",
        "Link and chip temperatures are nominal"
      ],
      "hypotheses": [
        "Capacity and bandwidth are not interchangeable",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Reboot until memory fits",
        "Apply verified sharding/quantization/batch design or use larger memory SKU",
        "Increase HBM bandwidth configuration setting"
      ],
      "answer_index": 2,
      "correct_action": "Apply verified sharding/quantization/batch design or use larger memory SKU",
      "rationale": "Capacity and bandwidth are not interchangeable. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Model systems, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Memory high water exceeds chip capacity",
        "Link and chip temperatures are nominal",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Worst-case memory headroom and correct outputs",
      "bad_answers_explained": {
        "Increase HBM bandwidth configuration setting": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Reboot until memory fits": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "TPU",
      "reflection": "If you could add only one new measurement to prove the mechanism (Capacity and bandwidth are not interchangeable), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-051-1",
      "title": "HBM bandwidth wall — EVT discovery",
      "domain": "TPU",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "TPU device runs slowly with low FLOP utilization but high memory transfer time. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Roofline indicates low arithmetic intensity; (2) HBM reads dominate step trace. What is the best initial program/technical decision?",
      "signals": [
        "Roofline indicates low arithmetic intensity",
        "HBM reads dominate step trace"
      ],
      "hypotheses": [
        "Streaming bytes limits attainable FLOPs",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Add network bandwidth without diagnosis",
        "Treat headline TFLOP rate as throughput",
        "Declare the gate green because the program is already behind schedule",
        "Increase data reuse or alter algorithm and benchmark"
      ],
      "answer_index": 3,
      "correct_action": "Increase data reuse or alter algorithm and benchmark",
      "rationale": "Streaming bytes limits attainable FLOPs. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage ML performance, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Roofline indicates low arithmetic intensity",
        "HBM reads dominate step trace",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Measured representative throughput and bandwidth profile",
      "bad_answers_explained": {
        "Add network bandwidth without diagnosis": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Treat headline TFLOP rate as throughput": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "TPU",
      "reflection": "If you could add only one new measurement to prove the mechanism (Streaming bytes limits attainable FLOPs), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-051-2",
      "title": "HBM bandwidth wall — Late DVT change",
      "domain": "TPU",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "TPU device runs slowly with low FLOP utilization but high memory transfer time. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Roofline indicates low arithmetic intensity; (2) HBM reads dominate step trace. What is the best initial program/technical decision?",
      "signals": [
        "Roofline indicates low arithmetic intensity",
        "HBM reads dominate step trace"
      ],
      "hypotheses": [
        "Streaming bytes limits attainable FLOPs",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Add network bandwidth without diagnosis",
        "Declare the gate green because the program is already behind schedule",
        "Increase data reuse or alter algorithm and benchmark",
        "Treat headline TFLOP rate as throughput"
      ],
      "answer_index": 2,
      "correct_action": "Increase data reuse or alter algorithm and benchmark",
      "rationale": "Streaming bytes limits attainable FLOPs. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage ML performance, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Roofline indicates low arithmetic intensity",
        "HBM reads dominate step trace",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Measured representative throughput and bandwidth profile",
      "bad_answers_explained": {
        "Add network bandwidth without diagnosis": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Treat headline TFLOP rate as throughput": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "TPU",
      "reflection": "If you could add only one new measurement to prove the mechanism (Streaming bytes limits attainable FLOPs), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-051-3",
      "title": "HBM bandwidth wall — PVT supplier lot",
      "domain": "TPU",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "TPU device runs slowly with low FLOP utilization but high memory transfer time. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Roofline indicates low arithmetic intensity; (2) HBM reads dominate step trace. What is the best initial program/technical decision?",
      "signals": [
        "Roofline indicates low arithmetic intensity",
        "HBM reads dominate step trace"
      ],
      "hypotheses": [
        "Streaming bytes limits attainable FLOPs",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Increase data reuse or alter algorithm and benchmark",
        "Declare the gate green because the program is already behind schedule",
        "Add network bandwidth without diagnosis",
        "Treat headline TFLOP rate as throughput"
      ],
      "answer_index": 0,
      "correct_action": "Increase data reuse or alter algorithm and benchmark",
      "rationale": "Streaming bytes limits attainable FLOPs. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage ML performance, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Roofline indicates low arithmetic intensity",
        "HBM reads dominate step trace",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Measured representative throughput and bandwidth profile",
      "bad_answers_explained": {
        "Add network bandwidth without diagnosis": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Treat headline TFLOP rate as throughput": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "TPU",
      "reflection": "If you could add only one new measurement to prove the mechanism (Streaming bytes limits attainable FLOPs), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-051-4",
      "title": "HBM bandwidth wall — Deployment and field",
      "domain": "TPU",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "TPU device runs slowly with low FLOP utilization but high memory transfer time. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Roofline indicates low arithmetic intensity; (2) HBM reads dominate step trace. What is the best initial program/technical decision?",
      "signals": [
        "Roofline indicates low arithmetic intensity",
        "HBM reads dominate step trace"
      ],
      "hypotheses": [
        "Streaming bytes limits attainable FLOPs",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Add network bandwidth without diagnosis",
        "Treat headline TFLOP rate as throughput",
        "Increase data reuse or alter algorithm and benchmark"
      ],
      "answer_index": 3,
      "correct_action": "Increase data reuse or alter algorithm and benchmark",
      "rationale": "Streaming bytes limits attainable FLOPs. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage ML performance, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Roofline indicates low arithmetic intensity",
        "HBM reads dominate step trace",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Measured representative throughput and bandwidth profile",
      "bad_answers_explained": {
        "Add network bandwidth without diagnosis": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Treat headline TFLOP rate as throughput": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "TPU",
      "reflection": "If you could add only one new measurement to prove the mechanism (Streaming bytes limits attainable FLOPs), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-052-1",
      "title": "ICI collective stall — EVT discovery",
      "domain": "TPU",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Multi-host TPU step slows while individual compute ops remain normal. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) All-reduce wait dominates XProf; (2) ICI physical link alarms rise on an affected route. What is the best initial program/technical decision?",
      "signals": [
        "All-reduce wait dominates XProf",
        "ICI physical link alarms rise on an affected route"
      ],
      "hypotheses": [
        "A synchronized collective can stall on one path",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Diagnose specific ICI topology and link/error path; test recoverability",
        "Declare the gate green because the program is already behind schedule",
        "Disable profiler and infer compute shortage",
        "Replace host DRAM only"
      ],
      "answer_index": 0,
      "correct_action": "Diagnose specific ICI topology and link/error path; test recoverability",
      "rationale": "A synchronized collective can stall on one path. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage TPU platform, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "All-reduce wait dominates XProf",
        "ICI physical link alarms rise on an affected route",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Verified collective plus rank recovery under actual topology",
      "bad_answers_explained": {
        "Replace host DRAM only": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Disable profiler and infer compute shortage": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "TPU",
      "reflection": "If you could add only one new measurement to prove the mechanism (A synchronized collective can stall on one path), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-052-2",
      "title": "ICI collective stall — Late DVT change",
      "domain": "TPU",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Multi-host TPU step slows while individual compute ops remain normal. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) All-reduce wait dominates XProf; (2) ICI physical link alarms rise on an affected route. What is the best initial program/technical decision?",
      "signals": [
        "All-reduce wait dominates XProf",
        "ICI physical link alarms rise on an affected route"
      ],
      "hypotheses": [
        "A synchronized collective can stall on one path",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Diagnose specific ICI topology and link/error path; test recoverability",
        "Disable profiler and infer compute shortage",
        "Replace host DRAM only",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 0,
      "correct_action": "Diagnose specific ICI topology and link/error path; test recoverability",
      "rationale": "A synchronized collective can stall on one path. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage TPU platform, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "All-reduce wait dominates XProf",
        "ICI physical link alarms rise on an affected route",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Verified collective plus rank recovery under actual topology",
      "bad_answers_explained": {
        "Replace host DRAM only": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Disable profiler and infer compute shortage": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "TPU",
      "reflection": "If you could add only one new measurement to prove the mechanism (A synchronized collective can stall on one path), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-052-3",
      "title": "ICI collective stall — PVT supplier lot",
      "domain": "TPU",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Multi-host TPU step slows while individual compute ops remain normal. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) All-reduce wait dominates XProf; (2) ICI physical link alarms rise on an affected route. What is the best initial program/technical decision?",
      "signals": [
        "All-reduce wait dominates XProf",
        "ICI physical link alarms rise on an affected route"
      ],
      "hypotheses": [
        "A synchronized collective can stall on one path",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Replace host DRAM only",
        "Diagnose specific ICI topology and link/error path; test recoverability",
        "Disable profiler and infer compute shortage"
      ],
      "answer_index": 2,
      "correct_action": "Diagnose specific ICI topology and link/error path; test recoverability",
      "rationale": "A synchronized collective can stall on one path. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage TPU platform, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "All-reduce wait dominates XProf",
        "ICI physical link alarms rise on an affected route",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Verified collective plus rank recovery under actual topology",
      "bad_answers_explained": {
        "Replace host DRAM only": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Disable profiler and infer compute shortage": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "TPU",
      "reflection": "If you could add only one new measurement to prove the mechanism (A synchronized collective can stall on one path), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-052-4",
      "title": "ICI collective stall — Deployment and field",
      "domain": "TPU",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Multi-host TPU step slows while individual compute ops remain normal. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) All-reduce wait dominates XProf; (2) ICI physical link alarms rise on an affected route. What is the best initial program/technical decision?",
      "signals": [
        "All-reduce wait dominates XProf",
        "ICI physical link alarms rise on an affected route"
      ],
      "hypotheses": [
        "A synchronized collective can stall on one path",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Diagnose specific ICI topology and link/error path; test recoverability",
        "Declare the gate green because the program is already behind schedule",
        "Replace host DRAM only",
        "Disable profiler and infer compute shortage"
      ],
      "answer_index": 0,
      "correct_action": "Diagnose specific ICI topology and link/error path; test recoverability",
      "rationale": "A synchronized collective can stall on one path. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage TPU platform, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "All-reduce wait dominates XProf",
        "ICI physical link alarms rise on an affected route",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Verified collective plus rank recovery under actual topology",
      "bad_answers_explained": {
        "Replace host DRAM only": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Disable profiler and infer compute shortage": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "TPU",
      "reflection": "If you could add only one new measurement to prove the mechanism (A synchronized collective can stall on one path), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-053-1",
      "title": "DCN input starvation — EVT discovery",
      "domain": "TPU",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "All TPU cores show idle gaps but network between storage and hosts is busy. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Input queue empty before compute gaps; (2) MXU microbenchmark achieves expected occupancy. What is the best initial program/technical decision?",
      "signals": [
        "Input queue empty before compute gaps",
        "MXU microbenchmark achieves expected occupancy"
      ],
      "hypotheses": [
        "Accelerator may await host/data feed not silicon math",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Overclock MXU to hide input starvation",
        "Change TPU generation before profiling",
        "Optimize input pipeline/cache/read parallelism after evidence"
      ],
      "answer_index": 3,
      "correct_action": "Optimize input pipeline/cache/read parallelism after evidence",
      "rationale": "Accelerator may await host/data feed not silicon math. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage ML platform, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Input queue empty before compute gaps",
        "MXU microbenchmark achieves expected occupancy",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "No input gaps in workload acceptance trace",
      "bad_answers_explained": {
        "Change TPU generation before profiling": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Overclock MXU to hide input starvation": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "TPU",
      "reflection": "If you could add only one new measurement to prove the mechanism (Accelerator may await host/data feed not silicon math), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-053-2",
      "title": "DCN input starvation — Late DVT change",
      "domain": "TPU",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "All TPU cores show idle gaps but network between storage and hosts is busy. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Input queue empty before compute gaps; (2) MXU microbenchmark achieves expected occupancy. What is the best initial program/technical decision?",
      "signals": [
        "Input queue empty before compute gaps",
        "MXU microbenchmark achieves expected occupancy"
      ],
      "hypotheses": [
        "Accelerator may await host/data feed not silicon math",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Optimize input pipeline/cache/read parallelism after evidence",
        "Overclock MXU to hide input starvation",
        "Change TPU generation before profiling",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 0,
      "correct_action": "Optimize input pipeline/cache/read parallelism after evidence",
      "rationale": "Accelerator may await host/data feed not silicon math. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage ML platform, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Input queue empty before compute gaps",
        "MXU microbenchmark achieves expected occupancy",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "No input gaps in workload acceptance trace",
      "bad_answers_explained": {
        "Change TPU generation before profiling": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Overclock MXU to hide input starvation": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "TPU",
      "reflection": "If you could add only one new measurement to prove the mechanism (Accelerator may await host/data feed not silicon math), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-053-3",
      "title": "DCN input starvation — PVT supplier lot",
      "domain": "TPU",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "All TPU cores show idle gaps but network between storage and hosts is busy. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Input queue empty before compute gaps; (2) MXU microbenchmark achieves expected occupancy. What is the best initial program/technical decision?",
      "signals": [
        "Input queue empty before compute gaps",
        "MXU microbenchmark achieves expected occupancy"
      ],
      "hypotheses": [
        "Accelerator may await host/data feed not silicon math",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Overclock MXU to hide input starvation",
        "Change TPU generation before profiling",
        "Optimize input pipeline/cache/read parallelism after evidence"
      ],
      "answer_index": 3,
      "correct_action": "Optimize input pipeline/cache/read parallelism after evidence",
      "rationale": "Accelerator may await host/data feed not silicon math. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage ML platform, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Input queue empty before compute gaps",
        "MXU microbenchmark achieves expected occupancy",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "No input gaps in workload acceptance trace",
      "bad_answers_explained": {
        "Change TPU generation before profiling": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Overclock MXU to hide input starvation": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "TPU",
      "reflection": "If you could add only one new measurement to prove the mechanism (Accelerator may await host/data feed not silicon math), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-053-4",
      "title": "DCN input starvation — Deployment and field",
      "domain": "TPU",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "All TPU cores show idle gaps but network between storage and hosts is busy. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Input queue empty before compute gaps; (2) MXU microbenchmark achieves expected occupancy. What is the best initial program/technical decision?",
      "signals": [
        "Input queue empty before compute gaps",
        "MXU microbenchmark achieves expected occupancy"
      ],
      "hypotheses": [
        "Accelerator may await host/data feed not silicon math",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Change TPU generation before profiling",
        "Declare the gate green because the program is already behind schedule",
        "Optimize input pipeline/cache/read parallelism after evidence",
        "Overclock MXU to hide input starvation"
      ],
      "answer_index": 2,
      "correct_action": "Optimize input pipeline/cache/read parallelism after evidence",
      "rationale": "Accelerator may await host/data feed not silicon math. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage ML platform, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Input queue empty before compute gaps",
        "MXU microbenchmark achieves expected occupancy",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "No input gaps in workload acceptance trace",
      "bad_answers_explained": {
        "Change TPU generation before profiling": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Overclock MXU to hide input starvation": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "TPU",
      "reflection": "If you could add only one new measurement to prove the mechanism (Accelerator may await host/data feed not silicon math), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-054-1",
      "title": "XLA compile regression — EVT discovery",
      "domain": "TPU",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Variable batch inference p99 jumps after runtime release. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Trace shows repeated expensive recompiles; (2) Fixed-shape workload latency unaffected. What is the best initial program/technical decision?",
      "signals": [
        "Trace shows repeated expensive recompiles",
        "Fixed-shape workload latency unaffected"
      ],
      "hypotheses": [
        "Runtime shape specialization can overwhelm compute wins",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Interpret p99 spike as HBM hardware failure",
        "Replace cold plates",
        "Compare compile cache/shape bucketing and roll back safely if validated",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 2,
      "correct_action": "Compare compile cache/shape bucketing and roll back safely if validated",
      "rationale": "Runtime shape specialization can overwhelm compute wins. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Runtime engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Trace shows repeated expensive recompiles",
        "Fixed-shape workload latency unaffected",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "P99 and warm/cold profiles on pinned compiler rev",
      "bad_answers_explained": {
        "Replace cold plates": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Interpret p99 spike as HBM hardware failure": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "TPU",
      "reflection": "If you could add only one new measurement to prove the mechanism (Runtime shape specialization can overwhelm compute wins), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-054-2",
      "title": "XLA compile regression — Late DVT change",
      "domain": "TPU",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Variable batch inference p99 jumps after runtime release. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Trace shows repeated expensive recompiles; (2) Fixed-shape workload latency unaffected. What is the best initial program/technical decision?",
      "signals": [
        "Trace shows repeated expensive recompiles",
        "Fixed-shape workload latency unaffected"
      ],
      "hypotheses": [
        "Runtime shape specialization can overwhelm compute wins",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Interpret p99 spike as HBM hardware failure",
        "Replace cold plates",
        "Compare compile cache/shape bucketing and roll back safely if validated",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 2,
      "correct_action": "Compare compile cache/shape bucketing and roll back safely if validated",
      "rationale": "Runtime shape specialization can overwhelm compute wins. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Runtime engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Trace shows repeated expensive recompiles",
        "Fixed-shape workload latency unaffected",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "P99 and warm/cold profiles on pinned compiler rev",
      "bad_answers_explained": {
        "Replace cold plates": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Interpret p99 spike as HBM hardware failure": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "TPU",
      "reflection": "If you could add only one new measurement to prove the mechanism (Runtime shape specialization can overwhelm compute wins), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-054-3",
      "title": "XLA compile regression — PVT supplier lot",
      "domain": "TPU",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Variable batch inference p99 jumps after runtime release. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Trace shows repeated expensive recompiles; (2) Fixed-shape workload latency unaffected. What is the best initial program/technical decision?",
      "signals": [
        "Trace shows repeated expensive recompiles",
        "Fixed-shape workload latency unaffected"
      ],
      "hypotheses": [
        "Runtime shape specialization can overwhelm compute wins",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Interpret p99 spike as HBM hardware failure",
        "Compare compile cache/shape bucketing and roll back safely if validated",
        "Declare the gate green because the program is already behind schedule",
        "Replace cold plates"
      ],
      "answer_index": 1,
      "correct_action": "Compare compile cache/shape bucketing and roll back safely if validated",
      "rationale": "Runtime shape specialization can overwhelm compute wins. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Runtime engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Trace shows repeated expensive recompiles",
        "Fixed-shape workload latency unaffected",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "P99 and warm/cold profiles on pinned compiler rev",
      "bad_answers_explained": {
        "Replace cold plates": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Interpret p99 spike as HBM hardware failure": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "TPU",
      "reflection": "If you could add only one new measurement to prove the mechanism (Runtime shape specialization can overwhelm compute wins), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-054-4",
      "title": "XLA compile regression — Deployment and field",
      "domain": "TPU",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Variable batch inference p99 jumps after runtime release. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Trace shows repeated expensive recompiles; (2) Fixed-shape workload latency unaffected. What is the best initial program/technical decision?",
      "signals": [
        "Trace shows repeated expensive recompiles",
        "Fixed-shape workload latency unaffected"
      ],
      "hypotheses": [
        "Runtime shape specialization can overwhelm compute wins",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Interpret p99 spike as HBM hardware failure",
        "Compare compile cache/shape bucketing and roll back safely if validated",
        "Replace cold plates"
      ],
      "answer_index": 2,
      "correct_action": "Compare compile cache/shape bucketing and roll back safely if validated",
      "rationale": "Runtime shape specialization can overwhelm compute wins. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage Runtime engineering, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Trace shows repeated expensive recompiles",
        "Fixed-shape workload latency unaffected",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "P99 and warm/cold profiles on pinned compiler rev",
      "bad_answers_explained": {
        "Replace cold plates": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Interpret p99 spike as HBM hardware failure": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "TPU",
      "reflection": "If you could add only one new measurement to prove the mechanism (Runtime shape specialization can overwhelm compute wins), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-055-1",
      "title": "v6e topology misdesign — EVT discovery",
      "domain": "TPU",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Architecture review assumes Trillium uses a 3D v4-like cube. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Proposal specifies a 4x4x4 v6e topology; (2) Official v6e docs describe 2D torus. What is the best initial program/technical decision?",
      "signals": [
        "Proposal specifies a 4x4x4 v6e topology",
        "Official v6e docs describe 2D torus"
      ],
      "hypotheses": [
        "Generation-specific ICI topology constrains actual placement",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Buy optical switch parts without architecture review",
        "Correct generation/topology requirements before placing procurement or workload plan",
        "Approve because 4x4x4 sounds scalable"
      ],
      "answer_index": 2,
      "correct_action": "Correct generation/topology requirements before placing procurement or workload plan",
      "rationale": "Generation-specific ICI topology constrains actual placement. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage TPU architect, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Proposal specifies a 4x4x4 v6e topology",
        "Official v6e docs describe 2D torus",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Documented supported 2D configuration and measured benchmarks",
      "bad_answers_explained": {
        "Approve because 4x4x4 sounds scalable": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Buy optical switch parts without architecture review": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "TPU",
      "reflection": "If you could add only one new measurement to prove the mechanism (Generation-specific ICI topology constrains actual placement), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-055-2",
      "title": "v6e topology misdesign — Late DVT change",
      "domain": "TPU",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Architecture review assumes Trillium uses a 3D v4-like cube. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Proposal specifies a 4x4x4 v6e topology; (2) Official v6e docs describe 2D torus. What is the best initial program/technical decision?",
      "signals": [
        "Proposal specifies a 4x4x4 v6e topology",
        "Official v6e docs describe 2D torus"
      ],
      "hypotheses": [
        "Generation-specific ICI topology constrains actual placement",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Correct generation/topology requirements before placing procurement or workload plan",
        "Declare the gate green because the program is already behind schedule",
        "Buy optical switch parts without architecture review",
        "Approve because 4x4x4 sounds scalable"
      ],
      "answer_index": 0,
      "correct_action": "Correct generation/topology requirements before placing procurement or workload plan",
      "rationale": "Generation-specific ICI topology constrains actual placement. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage TPU architect, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Proposal specifies a 4x4x4 v6e topology",
        "Official v6e docs describe 2D torus",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Documented supported 2D configuration and measured benchmarks",
      "bad_answers_explained": {
        "Approve because 4x4x4 sounds scalable": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Buy optical switch parts without architecture review": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "TPU",
      "reflection": "If you could add only one new measurement to prove the mechanism (Generation-specific ICI topology constrains actual placement), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-055-3",
      "title": "v6e topology misdesign — PVT supplier lot",
      "domain": "TPU",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Architecture review assumes Trillium uses a 3D v4-like cube. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Proposal specifies a 4x4x4 v6e topology; (2) Official v6e docs describe 2D torus. What is the best initial program/technical decision?",
      "signals": [
        "Proposal specifies a 4x4x4 v6e topology",
        "Official v6e docs describe 2D torus"
      ],
      "hypotheses": [
        "Generation-specific ICI topology constrains actual placement",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Correct generation/topology requirements before placing procurement or workload plan",
        "Buy optical switch parts without architecture review",
        "Approve because 4x4x4 sounds scalable"
      ],
      "answer_index": 1,
      "correct_action": "Correct generation/topology requirements before placing procurement or workload plan",
      "rationale": "Generation-specific ICI topology constrains actual placement. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage TPU architect, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Proposal specifies a 4x4x4 v6e topology",
        "Official v6e docs describe 2D torus",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Documented supported 2D configuration and measured benchmarks",
      "bad_answers_explained": {
        "Approve because 4x4x4 sounds scalable": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Buy optical switch parts without architecture review": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "TPU",
      "reflection": "If you could add only one new measurement to prove the mechanism (Generation-specific ICI topology constrains actual placement), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-055-4",
      "title": "v6e topology misdesign — Deployment and field",
      "domain": "TPU",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Architecture review assumes Trillium uses a 3D v4-like cube. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Proposal specifies a 4x4x4 v6e topology; (2) Official v6e docs describe 2D torus. What is the best initial program/technical decision?",
      "signals": [
        "Proposal specifies a 4x4x4 v6e topology",
        "Official v6e docs describe 2D torus"
      ],
      "hypotheses": [
        "Generation-specific ICI topology constrains actual placement",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Buy optical switch parts without architecture review",
        "Correct generation/topology requirements before placing procurement or workload plan",
        "Approve because 4x4x4 sounds scalable",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 1,
      "correct_action": "Correct generation/topology requirements before placing procurement or workload plan",
      "rationale": "Generation-specific ICI topology constrains actual placement. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage TPU architect, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Proposal specifies a 4x4x4 v6e topology",
        "Official v6e docs describe 2D torus",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Documented supported 2D configuration and measured benchmarks",
      "bad_answers_explained": {
        "Approve because 4x4x4 sounds scalable": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Buy optical switch parts without architecture review": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "TPU",
      "reflection": "If you could add only one new measurement to prove the mechanism (Generation-specific ICI topology constrains actual placement), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-056-1",
      "title": "Multi-host job unreliable — EVT discovery",
      "domain": "TPU",
      "phase": "EVT discovery",
      "difficulty": 2,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Large TPU job achieves nominal FLOPs when healthy but frequent checkpoints/restarts. A prototype first exhibits the signature while the design is still open; no production shipments have occurred. Engineering can run targeted experiments before design freeze. The two best available facts are: (1) Wall-clock completed steps much lower than healthy rate; (2) Error recovery duration significant. What is the best initial program/technical decision?",
      "signals": [
        "Wall-clock completed steps much lower than healthy rate",
        "Error recovery duration significant"
      ],
      "hypotheses": [
        "Reliability/repair cost can dominate application delivery",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Model useful goodput and improve fault/restart/checkpoint design",
        "Report only peak kernel TFLOPs",
        "Shorten checkpoint interval blindly to zero",
        "Declare the gate green because the program is already behind schedule"
      ],
      "answer_index": 0,
      "correct_action": "Model useful goodput and improve fault/restart/checkpoint design",
      "rationale": "Reliability/repair cost can dominate application delivery. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage ML reliability, quality, CM/supplier as applicable and deployment for decision rights",
        "Prioritize isolation and retain learning from experiments. EVT speed does not grant a safety exception.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Wall-clock completed steps much lower than healthy rate",
        "Error recovery duration significant",
        "Use 2 representative devices plus a known-good control as the initial experiment, expanding sample size with qualified engineering risk assessment."
      ],
      "gate_to_reopen": "Goodput and recovery measured across controlled faults",
      "bad_answers_explained": {
        "Report only peak kernel TFLOPs": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Shorten checkpoint interval blindly to zero": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 100,
      "synthetic": true,
      "reference_group": "TPU",
      "reflection": "If you could add only one new measurement to prove the mechanism (Reliability/repair cost can dominate application delivery), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-056-2",
      "title": "Multi-host job unreliable — Late DVT change",
      "domain": "TPU",
      "phase": "Late DVT change",
      "difficulty": 4,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Large TPU job achieves nominal FLOPs when healthy but frequent checkpoints/restarts. This appears at DVT with only 11 weeks to a site milestone and at least one adjacent custom part requires a written 20-week replenishment commitment. The two best available facts are: (1) Wall-clock completed steps much lower than healthy rate; (2) Error recovery duration significant. What is the best initial program/technical decision?",
      "signals": [
        "Wall-clock completed steps much lower than healthy rate",
        "Error recovery duration significant"
      ],
      "hypotheses": [
        "Reliability/repair cost can dominate application delivery",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Declare the gate green because the program is already behind schedule",
        "Shorten checkpoint interval blindly to zero",
        "Report only peak kernel TFLOPs",
        "Model useful goodput and improve fault/restart/checkpoint design"
      ],
      "answer_index": 3,
      "correct_action": "Model useful goodput and improve fault/restart/checkpoint design",
      "rationale": "Reliability/repair cost can dominate application delivery. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage ML reliability, quality, CM/supplier as applicable and deployment for decision rights",
        "Add a 48-hour change board, date-driven dependency map and approved-configuration material strategy; no assumed vendor miracle.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Wall-clock completed steps much lower than healthy rate",
        "Error recovery duration significant",
        "Show original versus changed revision test coverage and re-run all affected mandatory qualification."
      ],
      "gate_to_reopen": "Goodput and recovery measured across controlled faults",
      "bad_answers_explained": {
        "Report only peak kernel TFLOPs": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Shorten checkpoint interval blindly to zero": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 120,
      "synthetic": true,
      "reference_group": "TPU",
      "reflection": "If you could add only one new measurement to prove the mechanism (Reliability/repair cost can dominate application delivery), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-056-3",
      "title": "Multi-host job unreliable — PVT supplier lot",
      "domain": "TPU",
      "phase": "PVT supplier lot",
      "difficulty": 3,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Large TPU job achieves nominal FLOPs when healthy but frequent checkpoints/restarts. A CM pilot run of 120 units shows the signature on 19 units spanning a specific supplier lot; line takt must rise next month. The two best available facts are: (1) Wall-clock completed steps much lower than healthy rate; (2) Error recovery duration significant. What is the best initial program/technical decision?",
      "signals": [
        "Wall-clock completed steps much lower than healthy rate",
        "Error recovery duration significant"
      ],
      "hypotheses": [
        "Reliability/repair cost can dominate application delivery",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Shorten checkpoint interval blindly to zero",
        "Model useful goodput and improve fault/restart/checkpoint design",
        "Declare the gate green because the program is already behind schedule",
        "Report only peak kernel TFLOPs"
      ],
      "answer_index": 1,
      "correct_action": "Model useful goodput and improve fault/restart/checkpoint design",
      "rationale": "Reliability/repair cost can dominate application delivery. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage ML reliability, quality, CM/supplier as applicable and deployment for decision rights",
        "Quarantine and bound the serial/lot population; reconcile EOL test and vendor genealogy; validate process capability before scale.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Wall-clock completed steps much lower than healthy rate",
        "Error recovery duration significant",
        "Compare 19 affected units with lot-matched and known-good units; explicitly handle false fails."
      ],
      "gate_to_reopen": "Goodput and recovery measured across controlled faults",
      "bad_answers_explained": {
        "Report only peak kernel TFLOPs": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Shorten checkpoint interval blindly to zero": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 140,
      "synthetic": true,
      "reference_group": "TPU",
      "reflection": "If you could add only one new measurement to prove the mechanism (Reliability/repair cost can dominate application delivery), what would it be? What finding would falsify your initial hypothesis?"
    },
    {
      "id": "SI-056-4",
      "title": "Multi-host job unreliable — Deployment and field",
      "domain": "TPU",
      "phase": "Deployment and field",
      "difficulty": 5,
      "role_mapping": [
        "System engineering judgement",
        "Evidence-based gates",
        "Cross-functional critical path"
      ],
      "prompt": "Large TPU job achieves nominal FLOPs when healthy but frequent checkpoints/restarts. Three of 45 commissioned racks in two sites show the problem under representative customer workloads; installed-base exposure is uncertain. The two best available facts are: (1) Wall-clock completed steps much lower than healthy rate; (2) Error recovery duration significant. What is the best initial program/technical decision?",
      "signals": [
        "Wall-clock completed steps much lower than healthy rate",
        "Error recovery duration significant"
      ],
      "hypotheses": [
        "Reliability/repair cost can dominate application delivery",
        "Conflicting interface configuration or measurement can imitate a physical defect",
        "An upstream process/test/firmware revision may have created the exposure"
      ],
      "options": [
        "Shorten checkpoint interval blindly to zero",
        "Declare the gate green because the program is already behind schedule",
        "Model useful goodput and improve fault/restart/checkpoint design",
        "Report only peak kernel TFLOPs"
      ],
      "answer_index": 2,
      "correct_action": "Model useful goodput and improve fault/restart/checkpoint design",
      "rationale": "Reliability/repair cost can dominate application delivery. The best answer first bounds exposure and gathers discriminatory evidence rather than substituting schedule optimism or guessing. Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
      "first_15_minutes": [
        "Assign incident/problem owner and protect people/affected product",
        "Verify timestamps, affected serials, revisions and evidence quality",
        "Secure known-good comparison and choose one falsifiable test"
      ],
      "next_48_hours": [
        "Engage ML reliability, quality, CM/supplier as applicable and deployment for decision rights",
        "Protect customer and field safety, identify affected installed serials and rollout revision, preserve logs, and communicate a bounded recovery plan.",
        "Write decision alternatives with time, risk, cost and critical-path implications"
      ],
      "required_evidence": [
        "Wall-clock completed steps much lower than healthy rate",
        "Error recovery duration significant",
        "Prove the validated fix at worst-case field conditions and install recurrence alarms and RMA feedback."
      ],
      "gate_to_reopen": "Goodput and recovery measured across controlled faults",
      "bad_answers_explained": {
        "Report only peak kernel TFLOPs": "Acts on an assumed cause rather than a discriminating test or can violate a qualified process.",
        "Shorten checkpoint interval blindly to zero": "Suppresses or diverts attention from the failing safety, physical or revision control signal.",
        "Declare the gate green because the program is already behind schedule": "Schedule pressure does not create objective engineering acceptance evidence."
      },
      "interview_rubric": {
        "diagnosis": 3,
        "safety_containment": 3,
        "decision_rights": 2,
        "critical_path": 2,
        "objective_exit": 3,
        "recurrence_prevention": 2
      },
      "score_points": 160,
      "synthetic": true,
      "reference_group": "TPU",
      "reflection": "If you could add only one new measurement to prove the mechanism (Reliability/repair cost can dominate application delivery), what would it be? What finding would falsify your initial hypothesis?"
    }
  ],
  "cases": [
    {
      "id": "CX-01",
      "domain": "Cooling",
      "sourceIds": [
        "SI-001-4",
        "SI-007-2"
      ],
      "title": "Bulk flow is green. Four trays are not.",
      "brief": "Deployment: twelve racks are installed; four share a suspect tray revision. Each target rack dissipates 72 kW into the modeled liquid boundary. A 110 L/min reading and 6°C rise look stable. Eight other racks have current independent acceptance records. Smaller jobs can use those eight racks.",
      "evidence": [
        "The suspect trays throttle despite a normal bulk-return dashboard. Per-branch measurements have not been reconciled.",
        "Flow-meter calibration is current, but the measurement boundary could omit a bypass. Water properties here are an idealized training assumption."
      ],
      "test": "Reconcile boundary flow and ΔT against measured workload heat, then compare branch flow/contact on suspect and known-good trays.",
      "distractors": [
        "Repeat only the bulk-return trend for an hour; it already averages all branches.",
        "Swap the CDU first because it is the only shared component.",
        "Apply a uniform power cap and treat lack of throttling as qualified acceptance."
      ],
      "question": "At 110 L/min and ΔT=6°C, what is the idealized bulk heat removal?",
      "formula": "Q(kW)=0.0697 × flow(L/min) × ΔT(°C)",
      "value": 46.0,
      "unit": "kW",
      "wrong": [
        72,
        110,
        6
      ],
      "explanation": "0.0697 × 110 × 6 = 46.002 kW, about 26 kW below the stated 72 kW load. This inconsistency demands boundary/load checks; it does not by itself diagnose a pump or certify a cold plate.",
      "total": 12,
      "scope": 8,
      "cost": 40000,
      "delay": 2,
      "plan": "Keep four suspect racks held; offer eight independently qualified racks for authorized smaller jobs while thermal leads resolve branch/contact evidence.",
      "unsafe": "Release all twelve at a reduced power cap on the strength of aggregate flow alone.",
      "owner": "Thermal lead and site acceptance authority; customer/service owner approves the eight-rack workload scope; finance approves the $40,000 cap.",
      "gate": "Representative full-load per-tray margins, reconciled heat balance, qualified assembly revision, calibrated telemetry and witnessed operational handoff.",
      "consequence": "Installed capacity overstates useful service by four racks. Lowering power can mask the mechanism and change the contracted workload; only the explicitly qualified eight-rack scope is available.",
      "budgetMinutes": 45,
      "synthetic": true,
      "version": 1
    },
    {
      "id": "CX-02",
      "domain": "Cooling",
      "sourceIds": [
        "SI-003-4",
        "SI-005-3"
      ],
      "title": "Normal cooling passes. The failure case does not.",
      "brief": "Twelve 80 kW racks pass normal load. Under the approved loss-of-one-unit test the surviving cooling envelope is 640 kW. A training job needs ten racks at full load; separate smaller jobs can use up to eight. No controller tuning outside qualified procedures is permitted.",
      "evidence": [
        "Failover oscillation aligns with valve/control transitions; normal aggregate cooling remains green.",
        "A qualified eight-rack segment passes a witnessed failover soak. Ten-rack and twelve-rack service have no passing failover evidence."
      ],
      "test": "Time-align valve/pressure/flow transients during the approved failover and compare the qualified eight-rack segment with the failing scope.",
      "distractors": [
        "Compare only normal-mode inlet temperature against yesterday.",
        "Raise the failover alarm threshold and repeat the same total load.",
        "Treat installed redundant units as proof of delivered N+1 capacity."
      ],
      "question": "How many 80 kW racks fit the stated 640 kW surviving envelope?",
      "formula": "Maximum modeled racks=floor(surviving kW / kW per rack)",
      "value": 8,
      "unit": "racks",
      "wrong": [
        10,
        12,
        16
      ],
      "explanation": "640/80=8. The ten-rack job has zero accepted complete-job capacity under this failure condition, even though eight racks can support explicitly approved smaller jobs.",
      "total": 12,
      "scope": 8,
      "cost": 60000,
      "delay": 3,
      "plan": "Limit accepted scope to eight racks for smaller jobs; keep the ten-rack job and larger scope held pending qualified failover correction.",
      "unsafe": "Spread the ten-rack job over all twelve racks and average the power limit without a qualified workload or failover test.",
      "owner": "Qualified cooling/control leads sign the failure envelope; service/customer authority approves smaller-job scope and finance the $60,000 correction cap.",
      "gate": "Witnessed loss-of-one-unit testing at the accepted scope, stable transient controls, per-rack temperature limits and a documented rollback/stop procedure.",
      "consequence": "Eight accepted racks do not fulfill a ten-rack all-or-nothing job. Report usable workload scope separately from physically powered racks.",
      "budgetMinutes": 45,
      "synthetic": true,
      "version": 1
    },
    {
      "id": "CX-03",
      "domain": "Power",
      "sourceIds": [
        "SI-010-4",
        "SI-012-2"
      ],
      "title": "A nominal rating hides a hot joint.",
      "brief": "Sixteen racks are installed. Six use a changed busbar joint; ten traced racks retain qualified joints. In the teaching model a 60 kW DC load at 48 V passes through 0.0002 Ω joint resistance. Actual electrical disposition belongs to qualified authorities.",
      "evidence": [
        "Thermal imaging localizes the hotspot to changed joints; current sensors agree within their qualified tolerances.",
        "The material label matches, but torque/process revision and contact resistance differ. Ten clean serials have current qualification."
      ],
      "test": "Have qualified electrical staff correlate calibrated current, joint resistance, thermal imaging and torque/revision genealogy against clean controls.",
      "distractors": [
        "Replace all power shelves because the whole rack shares their nominal rating.",
        "Use only the average rack inlet temperature to judge joint acceptability.",
        "Retorque energized joints using an undocumented fast recovery method."
      ],
      "question": "What modeled resistive heat is generated at the joint?",
      "formula": "I=P/V; joint heat=I²R",
      "value": 312.5,
      "unit": "W",
      "wrong": [
        12,
        250,
        1250
      ],
      "explanation": "I=60,000/48=1,250 A; I²R=1,250²×0.0002=312.5 W at this joint. This is a synthetic loss calculation, not permission to operate or alter electrical protection.",
      "total": 16,
      "scope": 10,
      "cost": 90000,
      "delay": 4,
      "plan": "Hold the six changed-joint racks; accept only the ten independently qualified racks and fund authorized inspection/rework.",
      "unsafe": "Release all sixteen because each shelf nominal rating exceeds 60 kW; monitor average temperature afterward.",
      "owner": "Qualified electrical/design authority signs joint disposition; quality controls serial genealogy; site/service authority approves ten-rack scope and finance the $90,000 cap.",
      "gate": "Qualified joint design/process, calibrated measurements, approved inspection/rework records, representative load and protection/operational acceptance.",
      "consequence": "A small resistance can concentrate substantial heat. A nominal power rating and healthy room temperature do not close a localized integration risk.",
      "budgetMinutes": 45,
      "synthetic": true,
      "version": 1
    },
    {
      "id": "CX-04",
      "domain": "Power",
      "sourceIds": [
        "SI-013-2",
        "SI-014-4"
      ],
      "title": "Converter efficiency becomes a facility dependency.",
      "brief": "Ten power shelves each deliver 100 kW DC at a modeled efficiency of 96%. Six locations have a qualified 4.5 kW conversion-loss allowance; four new locations were planned for only 3 kW. Rack DC load and conversion loss use different boundaries.",
      "evidence": [
        "DC-output meters read 100 kW per shelf; the site spreadsheet mistakenly treats 96% as the heat-loss fraction.",
        "The six accepted locations have current AC-input and heat-removal tests; four new locations use stale facility assumptions."
      ],
      "test": "Reconcile AC input, DC output and facility heat-removal boundaries against the signed per-location design basis.",
      "distractors": [
        "Subtract 96 kW from 100 kW and assume 4 kW is an exact accepted loss.",
        "Use rack DC-output telemetry as the complete facility electrical demand.",
        "Average the spare thermal allowance across locations without checking their qualified paths."
      ],
      "question": "What is the modeled conversion loss per 100 kW output shelf?",
      "formula": "Loss=Pout × (1/efficiency − 1)",
      "value": 4.17,
      "unit": "kW",
      "wrong": [
        3,
        4,
        96
      ],
      "explanation": "100×(1/0.96−1)=4.1667 kW. AC input is approximately 104.17 kW. The four 3 kW allowances have a modeled gap; this does not establish any real site limit.",
      "total": 10,
      "scope": 6,
      "cost": 75000,
      "delay": 5,
      "plan": "Keep four new locations held; preserve the six separately qualified locations and rebaseline power/thermal integration before expanding.",
      "unsafe": "Release all ten because aggregate room cooling has spare nameplate capacity, with no path-specific acceptance.",
      "owner": "Electrical and facility thermal authorities sign the revised boundaries; configuration owner updates the basis; service authority and finance approve six-location scope and $75,000 cap.",
      "gate": "Current AC/DC metering, location-specific heat-removal evidence, approved power basis and representative integrated acceptance at each released location.",
      "consequence": "Efficiency assumptions propagate into electrical input and cooling loads. An apparently small spreadsheet error can block four complete service locations.",
      "budgetMinutes": 45,
      "synthetic": true,
      "version": 1
    },
    {
      "id": "CX-05",
      "domain": "Manufacturing",
      "sourceIds": [
        "SI-017-3",
        "SI-024-3"
      ],
      "title": "Rework yield is not first-pass capacity.",
      "brief": "Three sequential independent process stages have first-pass yields of 95%, 90% and 98%. Two hundred units are planned; demand is 180 first-pass units. Separately, 120 traced units already have passing controlled EOL records; the remaining 80 include stale-recipe exposure.",
      "evidence": [
        "Factory dashboard reports 98% final yield after rework and masks process loss.",
        "Recipe revision drift and a fixture change overlap; known-good controls must separate instrument validity from assembly defects."
      ],
      "test": "Reconcile first-pass denominators by stage/serial, then run known-good controls on current and stale EOL recipes before assigning process cause.",
      "distractors": [
        "Use only the 98% final-after-rework number to commit 196 first-pass units.",
        "Average 95%, 90% and 98% to estimate rolled throughput yield.",
        "Scrap every failed serial without validating the changed fixture or recipe."
      ],
      "question": "What is modeled rolled first-pass yield across the three independent stages?",
      "formula": "RTY=0.95 × 0.90 × 0.98",
      "value": 83.79,
      "unit": "percent",
      "wrong": [
        94.33,
        98,
        90
      ],
      "explanation": "RTY=0.8379, or 83.79%; 200 starts imply about 167.6 first-pass units, not a guaranteed release count. Roughly 215 starts are needed for an expected 180 under these assumptions; every release still needs serial-level evidence.",
      "total": 200,
      "scope": 120,
      "cost": 50000,
      "delay": 3,
      "plan": "Release only the 120 individually accepted serials; contain stale-recipe exposure and rebaseline expected starts, rework and capacity commitments.",
      "unsafe": "Commit 196 units from the 98% reworked yield and inspect remaining serials after shipment.",
      "owner": "Manufacturing engineering and quality own recipe/fixture qualification; CM commits capacity; program/customer authority approves 120-unit scope and finance the $50,000 cap.",
      "gate": "Validated fixture/recipe controls, serial-level retest, stable pilot process evidence and separate first-pass/rework metrics before rate or shipment expansion.",
      "consequence": "Yield definitions change promised supply. Expected units are planning estimates; they are not accepted serials or proof of stable rate production.",
      "budgetMinutes": 45,
      "synthetic": true,
      "version": 1
    },
    {
      "id": "CX-06",
      "domain": "Manufacturing",
      "sourceIds": [
        "SI-018-3",
        "SI-019-3"
      ],
      "title": "Unknown genealogy is not a clean cohort.",
      "brief": "Of 240 assemblies, 80 are traced to a failing firmware/process combination, 60 lack governing genealogy, and 100 have current clean records and integrated acceptance. Recovered labels are not yet reconciled with image hashes.",
      "evidence": [
        "The traceable failing cohort has a common image/process revision.",
        "Missing genealogy may overlap physical lots, but unique serial accounting confirms the 80 known-affected and 60 unknown populations are disjoint."
      ],
      "test": "Join serials, image hashes and process/torque revisions to the approved baseline; preserve separate known-affected, unknown and clean populations.",
      "distractors": [
        "Classify all 60 missing records as clean because their dashboard is green.",
        "Quarantine only the 80 known failures and infer the remainder are qualified.",
        "Replace every assembly before checking whether records or configuration caused the split."
      ],
      "question": "How many assemblies must remain held until disposition or genealogy closes?",
      "formula": "Held=known-affected + unresolved unknown (disjoint populations)",
      "value": 140,
      "unit": "assemblies",
      "wrong": [
        80,
        100,
        160
      ],
      "explanation": "80+60=140 held; only 100 have evidence for the clean accepted scope. Unknown is not an extra confirmed defect count, but it cannot be silently promoted to clean.",
      "total": 240,
      "scope": 100,
      "cost": 35000,
      "delay": 2,
      "plan": "Protect the 100 accepted assemblies; hold 140 affected/unknown serials until hash/process reconciliation and qualified disposition are complete.",
      "unsafe": "Release all 160 units that are not in the confirmed failing cohort and repair the 60 records later.",
      "owner": "Configuration owner and quality sign genealogy/disposition; CM owns process correction; shipment/service authority approves the 100-unit scope and $35,000 spend cap.",
      "gate": "Every released serial maps to a qualified image/process baseline, controlled disposition and representative integration evidence; unknowns remain held.",
      "consequence": "The denominator matters: 58.3% of planned units remain unavailable, but only one third are confirmed in the failing cohort. Report uncertainty without hiding it.",
      "budgetMinutes": 45,
      "synthetic": true,
      "version": 1
    },
    {
      "id": "CX-07",
      "domain": "Supply",
      "sourceIds": [
        "SI-025-2",
        "SI-031-2"
      ],
      "title": "A 29-week path has a 22-week window.",
      "brief": "Current week 8; site target week 30. Sequential remaining durations after PO release are supplier 20 weeks, transport 2, CM integration/test 4, commissioning 3. No overlap or buffer is validated. Forty of eighty racks can use already-qualified inventory at the original date; customer has useful forty-rack jobs.",
      "evidence": [
        "Supplier lead time is a written commitment anchored to the changed BOM and PO acknowledgment.",
        "An expedite email offers 10% but no manufacturing milestone evidence. The alternate part has unresolved mandatory DVT coverage."
      ],
      "test": "Build the dated dependency path from written supplier/BOM commitments through transport, CM test and site acceptance; validate any claimed overlap.",
      "distractors": [
        "Subtract the 20-week part from the site date and ignore downstream integration.",
        "Treat the 10% expedite email as a guaranteed recovery of the entire gap.",
        "Count an unqualified alternate as available supply because its catalog lead time is shorter."
      ],
      "question": "If PO is released in week 8, how late is the nominal finish against week 30?",
      "formula": "Finish=current week + 20 + 2 + 4 + 3; slip=finish − target",
      "value": 7,
      "unit": "weeks",
      "wrong": [
        0,
        2,
        20
      ],
      "explanation": "8+29=37: seven weeks late. The latest nominal PO week was 1 before buffer. Expediting only the 20-week segment by 10% saves two weeks, not seven, and still needs a verified commitment.",
      "total": 80,
      "scope": 40,
      "cost": 150000,
      "delay": 7,
      "plan": "Offer forty qualified racks at week 30 for authorized partial workloads; explicitly slip the other forty and fund a capped, evidence-backed recovery plan.",
      "unsafe": "Promise all eighty at week 30 using the unqualified alternate and the uncommitted expedite estimate.",
      "owner": "Engineering/quality own alternate qualification; sourcing owns written supplier commitments; CM/site own downstream dates; customer/program and finance approve partial scope and $150,000 cap.",
      "gate": "Configuration-linked supplier commit, completed qualification, controlled factory instructions, receiving/integration and site acceptance for each released wave.",
      "consequence": "The critical-path gap is seven weeks, not a generic red status. Partial capacity creates value only because the customer explicitly has useful smaller jobs.",
      "budgetMinutes": 45,
      "synthetic": true,
      "version": 1
    },
    {
      "id": "CX-08",
      "domain": "Supply",
      "sourceIds": [
        "SI-029-2",
        "SI-032-2"
      ],
      "title": "Positive expected value does not waive a gate.",
      "brief": "An authorized expedite option costs $400,000 with a modeled 65% chance of avoiding $1.2 million delay loss; all other effects are assumed neutral. Forty racks are already qualified; another forty remain conditional on the supplier and mandatory tests. Spending approval is not service acceptance.",
      "evidence": [
        "The supplier supplies dated production milestones supporting the probability assumption; the probability remains a model, not a guarantee.",
        "The alternative cheap substitute has incomplete electrical qualification and is inadmissible regardless of its commercial upside."
      ],
      "test": "Review supplier milestone evidence, cost/cancellation exposure, qualification feasibility and deadline; separate scenario expected value from release prerequisites.",
      "distractors": [
        "Approve any alternative with the largest spreadsheet expected value, even if a mandatory safety gate is open.",
        "Assume 65% probability means 65% of every shipment is accepted now.",
        "Count the potential $1.2M avoidance as certain cash already recovered."
      ],
      "question": "What is the simplified net expected advantage of the qualified expedite option?",
      "formula": "Net EV=0.65 × $1,200,000 − $400,000",
      "value": 380000,
      "unit": "USD",
      "wrong": [
        780000,
        800000,
        1200000
      ],
      "explanation": "$780,000 expected avoided loss less $400,000 premium = $380,000. This model omits other impacts and does not grant a safety exception, supplier guarantee or acceptance of the conditional forty racks.",
      "total": 80,
      "scope": 40,
      "cost": 400000,
      "delay": 0,
      "plan": "Seek capped authorization for the qualified expedite path while keeping only the existing forty-rack scope accepted; hold the conditional forty behind supplier and test evidence.",
      "unsafe": "Accept the cheaper unqualified substitute because its expected commercial advantage exceeds $380,000.",
      "owner": "Finance/program authority approves risk and $400,000 cap; sourcing owns milestones; qualified engineering/quality and site authority retain independent release rights.",
      "gate": "Written spend approval and stop criteria, verified supplier milestones, current qualification and integrated/site acceptance; conditional racks do not enter accepted capacity until those gates close.",
      "consequence": "Commercial value and technical admissibility are separate. The accepted scope remains forty; the other forty are a forecast, even after the spend decision.",
      "budgetMinutes": 45,
      "synthetic": true,
      "version": 1
    },
    {
      "id": "CX-09",
      "domain": "Firmware",
      "sourceIds": [
        "SI-034-4",
        "SI-047-4"
      ],
      "title": "A partial upgrade crosses the control boundary.",
      "brief": "Of 160 hosts, 100 remain on the qualified baseline and 60 received a partial BMC/NIC bundle. Sixteen of the changed hosts failed; all sixty have unqualified configuration exposure. A canary rollback needs the approved recovery and interlock checks.",
      "evidence": [
        "Failures begin after partial bundle propagation; the dashboard counts only the sixteen observed failures as exposure.",
        "A known-good host on the baseline passes the same workload, but root cause among version interaction, update ordering and telemetry remains open."
      ],
      "test": "Compare full bundle hashes and update order across failing/nonfailing hosts; run an authorized rollback canary with recovery and interlock evidence.",
      "distractors": [
        "Roll back only the sixteen visibly failing hosts and release the other changed hosts without qualification.",
        "Update the remaining hundred hosts to make every version label match.",
        "Use successful ping responses to certify BMC/NIC recovery and service readiness."
      ],
      "question": "What population has unqualified changed-configuration exposure?",
      "formula": "Exposure includes every host with the partial bundle, not only failures",
      "value": 60,
      "unit": "hosts",
      "wrong": [
        16,
        100,
        160
      ],
      "explanation": "All sixty changed hosts are exposed; sixteen are observed failures. The distinction prevents both under-containment and unsupported fleetwide blame.",
      "total": 160,
      "scope": 100,
      "cost": 25000,
      "delay": 1,
      "plan": "Hold sixty changed hosts; retain the hundred baseline hosts for qualified service and canary an authorized rollback before reopening the affected cohort.",
      "unsafe": "Release the forty-four changed hosts without observed failures because they have not yet failed.",
      "owner": "Platform/firmware lead and change authority own rollback; operations owns recovery; service authority approves the baseline scope and finance the $25,000 cap.",
      "gate": "Pinned full-bundle hashes, recovery/interlock checks, representative workload and canary stop criteria; root cause and prevention remain open after restoration.",
      "consequence": "A clean symptom is not a qualified configuration. Recovery can restore service while the causal investigation and prevention work remain unfinished.",
      "budgetMinutes": 45,
      "synthetic": true,
      "version": 1
    },
    {
      "id": "CX-10",
      "domain": "Firmware",
      "sourceIds": [
        "SI-033-4",
        "SI-036-4"
      ],
      "title": "The dashboard has a twelve-minute blind spot.",
      "brief": "Forty racks report green; collector samples are twelve minutes old against a five-minute freshness requirement defined for this synthetic exercise. Independent current workload probes validate twenty-four racks. Sixteen have unresolved alarm-path and telemetry evidence.",
      "evidence": [
        "Cached temperatures are flat even as independent probes change; severity mapping changed with the collector release.",
        "The timestamp is collection time, not event time, and one alarm channel fails an injected-event test."
      ],
      "test": "Reconcile event/collection clocks, inject a known event and compare authoritative alarms with independent service probes before trusting cached health.",
      "distractors": [
        "Restart the dashboard until all indicators turn green, then close the incident.",
        "Use current collector process uptime as proof that every device sample is fresh.",
        "Reduce alarm severity to match the apparently healthy workload average."
      ],
      "question": "By what factor does sample age exceed the stated freshness requirement?",
      "formula": "Age ratio=12 minutes / 5 minutes",
      "value": 2.4,
      "unit": "times",
      "wrong": [
        0.42,
        5,
        12
      ],
      "explanation": "12/5=2.4× the stated age limit. That proves a freshness violation in the teaching scenario, not a physical device failure; sixteen racks still lack sufficient current acceptance evidence.",
      "total": 40,
      "scope": 24,
      "cost": 20000,
      "delay": 1,
      "plan": "Keep sixteen unverified racks held; use the twenty-four independently validated racks while restoring authoritative alarms and evidence freshness.",
      "unsafe": "Release all forty because independent probes pass somewhere in the fleet and the collector is running.",
      "owner": "Observability/firmware lead owns the pipeline and severity map; qualified alarm authority owns safety signals; operations/service authority accepts twenty-four-rack scope and $20,000 cap.",
      "gate": "Event-to-display injection within the approved freshness window, correct severity routing, reconciled timestamps and current representative service probes.",
      "consequence": "A monitoring fix restores observation, not automatically hardware health. Capacity claims need fresh evidence for the actual released population.",
      "budgetMinutes": 45,
      "synthetic": true,
      "version": 1
    },
    {
      "id": "CX-11",
      "domain": "Interconnect",
      "sourceIds": [
        "SI-041-4",
        "SI-046-4"
      ],
      "title": "Line rate is not delivered collective bandwidth.",
      "brief": "Twenty-four racks share a fabric. Eight use an optic batch with rising FEC corrections and workload tail latency; sixteen form a separately qualified slice. A 400 Gb/s link is modeled at 80% useful payload efficiency before wider collective effects.",
      "evidence": [
        "Corrected FEC counts rise on the changed optic cohort, but no evidence says every corrected event means an outage.",
        "Temperature and receiver margin correlate with the cohort. Representative all-to-all traffic, not only point-to-point line rate, must close the gate."
      ],
      "test": "Compare error rate and optical margin versus temperature on suspect/control optics, then run the actual collective workload on pinned paths.",
      "distractors": [
        "Replace every optic after seeing a single corrected FEC count.",
        "Use line-rate counters as proof that the target collective meets its service objective.",
        "Tune queue thresholds everywhere before preserving cohort and path evidence."
      ],
      "question": "What useful payload rate does the teaching model predict per link?",
      "formula": "400 Gb/s ÷ 8 × 0.80",
      "value": 40,
      "unit": "GB/s",
      "wrong": [
        50,
        320,
        400
      ],
      "explanation": "400/8=50 GB/s line rate; 80% gives 40 GB/s useful payload in this simple model. Collective tail latency and topology can reduce workload goodput further.",
      "total": 24,
      "scope": 16,
      "cost": 85000,
      "delay": 2,
      "plan": "Isolate eight suspect-cohort racks; accept the sixteen-rack qualified slice for the approved workload and investigate optical margin without equating corrections with outage.",
      "unsafe": "Accept all twenty-four because error correction recovered the packets and the port reports 400 Gb/s.",
      "owner": "Fabric/optics lead owns physical and collective tests; supplier/quality owns batch disposition; service authority approves sixteen-rack topology and $85,000 cap.",
      "gate": "Traced optic cohort, stable margin/error-rate behavior in the qualified envelope, pinned topology and representative collective throughput/tail-latency acceptance.",
      "consequence": "A healthy speed label and corrected errors can coexist with poor workload service. Protect the qualified topology rather than counting all powered ports.",
      "budgetMinutes": 45,
      "synthetic": true,
      "version": 1
    },
    {
      "id": "CX-12",
      "domain": "Interconnect",
      "sourceIds": [
        "SI-042-4",
        "SI-048-4",
        "SI-056-4"
      ],
      "title": "Fast steps. Slow completed work.",
      "brief": "Thirty-two racks run at 100 steps/s while healthy. In a sixty-minute window, five minutes are spent restarting and two additional minutes of completed steps are discarded/replayed. Sixteen racks have a separate accepted recovery/topology profile; the other sixteen do not.",
      "evidence": [
        "Mean healthy step rate is unchanged, while per-rank tails and coordinated recovery dominate lost progress.",
        "The five-minute restart and two-minute discarded-work intervals are disjoint in this teaching model; do not double count if real traces overlap."
      ],
      "test": "Trace useful completed steps per wall-clock time with per-rank collective tails, checkpoint integrity and coordinated restart on matched topology.",
      "distractors": [
        "Increase accelerator clocks because healthy step rate is the only reliable metric.",
        "Measure only successful rank runtimes and exclude failed jobs from the denominator.",
        "Add participants without checking topology, checkpoint recovery or tail behavior."
      ],
      "question": "What is useful wall-clock goodput in the modeled hour?",
      "formula": "Goodput=100 × (60−5−2)/60",
      "value": 88.33,
      "unit": "steps/s",
      "wrong": [
        100,
        91.67,
        96.67
      ],
      "explanation": "100×53/60=88.33 useful steps/s. Recovery and lost progress matter even when chip speed and healthy means look unchanged.",
      "total": 32,
      "scope": 16,
      "cost": 45000,
      "delay": 2,
      "plan": "Use the sixteen-rack accepted recovery slice; hold the other sixteen while profiling tail behavior and validating coordinated checkpoint/restart.",
      "unsafe": "Accept all thirty-two at 100 steps/s based only on healthy intervals and ignore replayed work in the service metric.",
      "owner": "Distributed-runtime/fabric leads own traces and recovery; scheduler/operations own topology and checkpoints; service authority approves sixteen-rack scope and $45,000 cap.",
      "gate": "Representative per-rank tail/collective traces, checkpoint integrity, coordinated fault/restart drill and useful wall-clock goodput within the signed scope.",
      "consequence": "Business output is completed useful work, not the best healthy interval. A recovery improvement can be worth more than a small compute-clock gain.",
      "budgetMinutes": 45,
      "synthetic": true,
      "version": 1
    },
    {
      "id": "CX-13",
      "domain": "TPU",
      "sourceIds": [
        "SI-049-2",
        "SI-051-4"
      ],
      "title": "More peak FLOPs will not move this roofline.",
      "brief": "A fictional accelerator configuration has 200 TFLOP/s peak, attainable memory bandwidth 1.2 TB/s, and workload arithmetic intensity 40 FLOPs/byte. Of 64 installed workers, 32 have an accepted representative workload profile; the other 32 use an unqualified shape/sharding change. These are not any TPU generation’s specifications.",
      "evidence": [
        "Kernel traces show memory-bound execution; shape padding and small shards also waste work.",
        "Vendor peak and an unrelated benchmark are being used to justify target application throughput. Current shape/software/topology differ."
      ],
      "test": "Profile arithmetic intensity, attainable bandwidth and shape/sharding on the target workload with pinned compiler/runtime and topology.",
      "distractors": [
        "Approve a higher-clock configuration because peak FLOPs is the binding limit.",
        "Reuse another generation’s interconnect and performance table without matching the workload.",
        "Compare only the largest GEMM microbenchmark while excluding input and collective time."
      ],
      "question": "What simplified roofline upper bound applies before other overhead?",
      "formula": "min(200 TFLOP/s, 40 FLOPs/byte × 1.2 TB/s)",
      "value": 48,
      "unit": "TFLOP/s",
      "wrong": [
        200,
        240,
        1.2
      ],
      "explanation": "40×1.2=48 TFLOP/s, below 200. This is an upper bound, not measured sustained performance or a specific TPU specification; input, shape and collective overhead may lower useful throughput.",
      "total": 64,
      "scope": 32,
      "cost": 30000,
      "delay": 2,
      "plan": "Keep the thirty-two accepted workers available; qualify the new workload shape/sharding with measured correctness, memory and collective behavior before expanding.",
      "unsafe": "Accept all sixty-four at 200 TFLOP/s per worker by multiplying the vendor peak by installed worker count.",
      "owner": "Compiler/performance and distributed-runtime leads own profiling; platform validation owns configuration; workload/service authority approves thirty-two-worker scope and $30,000 cap.",
      "gate": "Pinned software/shape/topology, workload correctness, representative sustained performance, memory/collective evidence and operational recovery on released workers.",
      "consequence": "The bottleneck moves the decision from more theoretical compute to workload shape, data movement and integration. Installed workers are not equivalent to accepted application capacity.",
      "budgetMinutes": 45,
      "synthetic": true,
      "version": 1
    },
    {
      "id": "CX-14",
      "domain": "TPU",
      "sourceIds": [
        "SI-050-2",
        "SI-052-4"
      ],
      "title": "A sharding fix moves the risk into the fabric.",
      "brief": "A new worker workload needs 18 GiB parameters/optimizer state, 6 GiB activations and 3 GiB workspace. Its usable HBM budget is 22 GiB after reserved memory. Thirty-two existing workers retain an accepted lower-footprint profile; thirty-two new-profile workers fail. Values are fictional, not generation specs.",
      "evidence": [
        "Peak allocation reaches 27 GiB; the scheduler’s nominal memory label includes reserved space.",
        "An additional sharding stage may reduce local state but increases collective exposure; no representative collective/restart result exists yet."
      ],
      "test": "Measure peak live allocations including optimizer, activations, workspace and reservations; test a bounded sharding change with collective and recovery traces.",
      "distractors": [
        "Use nominal HBM capacity and ignore reservations because they are not model tensors.",
        "Reduce batch until one job fits, then infer all target shapes are qualified.",
        "Double workers and assume memory pressure vanishes without measuring collective or workspace behavior."
      ],
      "question": "How much does the modeled 27 GiB requirement exceed usable HBM?",
      "formula": "18+6+3−22",
      "value": 5,
      "unit": "GiB",
      "wrong": [
        3,
        22,
        27
      ],
      "explanation": "27−22=5 GiB over usable HBM. Sharding or checkpointing may help but can increase communication/recomputation; neither is accepted solely because one allocation fits.",
      "total": 64,
      "scope": 32,
      "cost": 55000,
      "delay": 3,
      "plan": "Retain thirty-two workers on the accepted lower-footprint profile; hold new-profile workers while qualifying memory, collective and restart behavior together.",
      "unsafe": "Release all sixty-four after a single small-batch job fits, without matching the target profile or new communication pattern.",
      "owner": "Model/runtime and compiler leads own memory/sharding; fabric lead owns collectives; validation/service authority approves thirty-two-worker scope and $55,000 cap.",
      "gate": "Peak live-memory margin on target shapes, numerical correctness, representative collective performance and coordinated recovery under the new sharding baseline.",
      "consequence": "Solving memory capacity may create a network or goodput bottleneck. The close test must follow the dependency that the proposed fix changes.",
      "budgetMinutes": 45,
      "synthetic": true,
      "version": 1
    }
  ],
  "provenance": {
    "file": "Signal_Intelligence_TPU_Fluidstack_NPI_Deep_Library_v3.zip",
    "sha256": "c19d0a97b7dd31a47cb33bc6d967f6786af1734835ac2fd158ee6d0b6da1055b",
    "libraryCases": 224,
    "archetypes": 56,
    "contexts": 4,
    "advancedCases": 14,
    "note": "Library cases retained as supplied synthetic study material; advanced data and outcomes are authored teaching adaptations. Embedded build instructions were not executed."
  }
};
if(typeof module!=="undefined")module.exports=DEEP_CONTENT;
