"use strict";
const LAB_DOMAINS=['Cooling','Power','Manufacturing','Supply','Firmware','Interconnect','TPU'];
const LAB_WORLD={Cooling:2,Power:2,Manufacturing:1,Supply:1,Firmware:0,Interconnect:3,TPU:5};
const LIBRARY_CASES=DEEP_CONTENT.library.map(s=>{
 const context=s.phase.startsWith('EVT')?0:s.phase.startsWith('Late')?1:s.phase.startsWith('PVT')?2:3;
 const contain=[
  'Keep affected prototypes in a controlled experiment, preserve known-good comparisons and retain learning before design freeze; no production release is implied.',
  'Hold affected changed-revision scope; map mandatory delta-DVT coverage and written supply commitments through a 48-hour change board before committing the delivery date.',
  'Contain affected WIP/serials and validate recipe, fixture and process genealogy; do not use final-after-rework yield as proof of qualified rate production.',
  'Protect the exposed installed population, preserve qualified clean service and use authorized scoped rollback or hold while representative recovery is verified.'
 ][context];
 const consequence=[
  'SO WHAT: there is no production shipment exposure yet. The value is falsifiable design learning and preserved qualification evidence before freeze, not a fictional service-capacity win.',
  'SO WHAT: a late design change can invalidate qualification and material commitments. The stated 11-week milestone versus 20-week custom-part commitment requires a dated scope/cost/date decision, not a promise to expedite away physics.',
  'SO WHAT: a passing prototype does not prove repeatable factory rate. Separate first-pass yield, rework, fixture credibility, genealogy and accepted serials before committing shipment capacity.',
  'SO WHAT: protect useful workload service and bounded blast radius. Recovery is different from root cause, and installed inventory is different from accepted capacity.'
 ][context];
 const owner=s.next_48_hours[0].replace(/^Engage /,'').split(', quality')[0];
 return {id:s.id,title:s.title,world:LAB_WORLD[s.domain],level:s.id,synthetic:true,library:true,source:s,brief:s.prompt,test:s.correct_action,evidence:s.signals.join('; ')+'. Interpretation: '+s.rationale,contain,verify:s.gate_to_reopen+'; '+s.required_evidence.join('; '),owner,chapters:[5,7,10,16],frameworks:['Truth Stack','STACK','Capacity Chain'],soWhat:consequence};
});
