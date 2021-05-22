exports.show = () => {

    console.clear();
    const clr = require('colors')
    const banner = require('./banner');
    banner.show('vice', 'My Device Info')

    const si = require('systeminformation');

    si.cpu()
        .then(data => {
            console.log('CPU Information:\n'.brightRed);
            console.log(' manufucturer: '.blue + data.manufacturer.brightGreen);
            console.log(' brand: '.blue + clr.brightGreen(data.brand));
            console.log(' speed: '.blue + clr.brightGreen(data.speed));
            console.log(' cores: '.blue + clr.brightGreen(data.cores));
            console.log(' physical cores: '.blue + clr.brightGreen(data.physicalCores));

            console.log('\nAnd Many more Informations are cooming soon...'.green.italic);

            setTimeout(() => {
            }, 500); require('./back').back()

        })
        .catch(error => console.error(error));



}