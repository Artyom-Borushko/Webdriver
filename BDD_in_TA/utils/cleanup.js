const fsExtra = require('fs-extra');

fsExtra.emptyDirSync('./reports');
fsExtra.removeSync('./combined.log');