var fs = require('fs');
var glob = require('glob');
var path = require('path');
var rootDir = path.join(__dirname, '../src/components');

glob(rootDir + '/**/index.tsx', function(err, components) {

    var modules = components.map(c => {
        const name = path.basename(path.dirname(c))
        const componentPath = path.dirname(c).replace(path.dirname(__dirname)+'/src','')
        return `export { default as ${name} } from '.${componentPath}';`;
    }).join('\n') + `\nexport { default as css } from './css'\n`;

    console.log(modules);
    fs.writeFileSync(path.join(__dirname, '../src/index.ts'), modules, 'utf-8');
    console.log('Exports written to ' + path.join(__dirname, '../src/index.ts'));
});
