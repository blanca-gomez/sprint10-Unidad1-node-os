const os = require('os');

function getInterfaces () {
    const interfaces = os.networkInterfaces();
    for (const interfaceName in interfaces) {
        console.log('Interfaz: ' + interfaceName);
        const interfaceProperties = interfaces[interfaceName];
        interfaceProperties.forEach((data) => {
            console.log('Familia: ' + data.family + ' Dirección: ' + data.address + ' Interno: ' + data.internal);
        })
        console.log('\n');
    }
}
    
module.exports = getInterfaces