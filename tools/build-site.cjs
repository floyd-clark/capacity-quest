const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),source=path.join(root,'capacity-quest'),target=path.join(root,'_site');
const runtime=['index.html','style.css','content.js','engine.js','lab-content.js','lab-engine.js','lab-adapter.js','visual-workbench.js','game.js'];
const pictures=['cooling','power','manufacturing','supply','firmware','interconnect','tpu'].map(n=>'assets/diagrams/'+n+'.svg');
fs.mkdirSync(target,{recursive:true});
if(fs.lstatSync(target).isSymbolicLink()||fs.realpathSync(target)!==path.join(fs.realpathSync(root),'_site'))throw Error('Build target must be the real workspace _site directory');
// Remove only stale files under the checked build target; never walk outside it.
function clean(dir){if(!path.resolve(dir).startsWith(target+path.sep)&&path.resolve(dir)!==target)throw Error('Build path escaped target');for(const entry of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,entry.name);if(entry.isSymbolicLink())throw Error('Build artifacts must not contain symbolic links');if(entry.isDirectory()){clean(p);fs.rmdirSync(p);}else fs.unlinkSync(p);}}
clean(target);
for(const name of [...runtime,...pictures]){const from=path.join(source,name),to=path.join(target,name);if(fs.lstatSync(from).isSymbolicLink())throw Error('Runtime source cannot be a symlink');fs.mkdirSync(path.dirname(to),{recursive:true});fs.copyFileSync(from,to);}
fs.writeFileSync(path.join(target,'.nojekyll'),'');
console.log('Built static game: 9 runtime files + 7 original SVG pictures. No test reports, exports or private source documents.');
module.exports={root,source,target,runtime,pictures};
