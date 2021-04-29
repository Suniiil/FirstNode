const path = require('path');
const rootDir = require('../util/path');
exports.get404Error=  (req,res,next)=>{

    res.sendFile(path.join(rootDir,'views','404.html'));
};