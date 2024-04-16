const os = require('os');
function getName () {
    const sistemaOperativo = os.platform();
    return sistemaOperativo
}

function getType () {
    const operatingSystemType = os.type();
    return operatingSystemType
}

function getVersion () {
    const operatingSystemVersion = os.release();
    return operatingSystemVersion
}

function getArch () {
    const operatingSystemArch = os.arch();
    return operatingSystemArch
}

function getCPUs () {
    const operatingSysteCPU = os.cpus();
    return operatingSysteCPU.length 
}

function conversionBytesMB (bytes) {
    return (bytes / (1024*1024)).toFixed(2);
}

function getFreeMemory () {
    const operatingSystemFreeMem = conversionBytesMB(os.freemem());
    return operatingSystemFreeMem
}

function getTotalMemory () {
    const operatingSystemTotalMem = conversionBytesMB(os.totalmem());
    return operatingSystemTotalMem
}

function getModuleInfo (){
    console.log('Nombre: ' + getName())
    console.log('Tipo: ' + getType ())
    console.log('Versión: ' + getVersion())
    console.log('Arquitectura: ' + getArch ())
    console.log('CPUs: ' + getCPUs())
    console.log('Memoria toral: ' + getTotalMemory() + ' MB')
    console.log('Memoria libre: ' + getFreeMemory() + ' MB')
}

module.exports = {getName, getType, getVersion, getArch, getCPUs, getFreeMemory, getTotalMemory, getModuleInfo}

