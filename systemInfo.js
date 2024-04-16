const {getName,getType,getVersion, getArch, getCPUs,getFreeMemory, getTotalMemory, getModuleInfo} = require('./osModule');
const getInterfaces = require ('./networkModule');

getModuleInfo()
console.log('\n');
getInterfaces();
