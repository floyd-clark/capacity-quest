"use strict";
// Evidence, authority and service recovery remain separate, serializable state.
const QUEST_ENGINE=Object.freeze({
 start(s){return {scenarioId:s.id,step:0,knownFacts:[s.brief],candidateHypotheses:['Configuration or process mismatch','Physical component or interface fault','Observation or acceptance coverage gap'],confidence:'UNKNOWN',affectedPopulation:'Unbounded until investigation',containmentStatus:'NOT CONTAINED',technicalOwner:null,decisionAuthority:null,verificationEvidence:[],serviceState:'BLOCKED',rootCauseProven:false,commitment:null,incidentClock:0,history:[]};},
 advance(current,s,stage){
  if(current.scenarioId!==s.id||stage!==current.step||stage<0||stage>3)return {ok:false,reason:'Out-of-order transition or wrong scenario: keep acceptance held.'};
  const next=JSON.parse(JSON.stringify(current));
  if(stage===0){next.knownFacts.push(s.evidence);next.verificationEvidence.push({id:s.id+':investigation',test:s.test,result:s.evidence});next.confidence='EVIDENCE-BOUNDED INTERPRETATION';next.affectedPopulation='Affected and unknown scope defined by the scenario test; clean controls remain separate';next.serviceState='TESTING';}
  if(stage===1){if(!next.verificationEvidence.length)return {ok:false,reason:'Containment requires the investigation record.'};next.containmentStatus=s.contain;next.serviceState='CONTAINED';}
  if(stage===2){if(next.containmentStatus==='NOT CONTAINED')return {ok:false,reason:'Bound risk before committing release scope.'};next.technicalOwner=s.owner;next.decisionAuthority='Designated '+s.owner.toLowerCase()+' / service acceptance authority';next.commitment={owner:s.owner,condition:s.verify,deadline:'Next agreed evidence checkpoint before release',fallback:s.contain,freshness:'Current configuration and operating envelope'};}
  if(stage===3){if(!next.verificationEvidence.length||!next.technicalOwner||!next.decisionAuthority||!next.commitment||next.containmentStatus==='NOT CONTAINED')return {ok:false,reason:'Missing mandatory evidence, containment, owner, authority or commitment.'};next.verificationEvidence.push({id:s.id+':closure',test:s.verify,result:'Synthetic closure test passed within the documented scope'});next.serviceState='VERIFIED';}
  next.history.push({stage,action:[s.test,s.contain,'Accountable commitment',s.verify][stage]});next.step++;return {ok:true,state:next};
 },
 accept(states,authorized){return authorized&&states.length>0&&states.every(s=>s.step===4&&s.serviceState==='VERIFIED'&&s.verificationEvidence.length>=2&&s.technicalOwner&&s.decisionAuthority&&s.commitment&&s.containmentStatus!=='NOT CONTAINED')?'ACCEPTED':'BLOCKED';},
 rubric(errors){return Math.max(20,100-errors*5);}
});
if(typeof module!=="undefined")module.exports=QUEST_ENGINE;
