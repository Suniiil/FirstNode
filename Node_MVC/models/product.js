const products=[];
const rootDir = require('../util/path');
const fs = require('fs');
const path = require('path');
module.exports = class Product{
    constructor(title){
this.title=title;
    }

    save(){
        // products.push(this);

        const p = path.join(path.dirname(process.mainModule.filename),
        'data','product.json'
        );
        fs.readFile(p,(error,fileContent)=>{
            console.log(error);
            let products=[];
            if(!error){
                products=JSON.parse(fileContent);
            }
            products.push(this);

            fs.writeFile(p,JSON.stringify(products),(error)=>{
                console.log(error);
            })
        });
    }

    static fetchAll(){
        const p = path.join(path.dirname(process.mainModule.filename),
        'data','product.json'
        );
        fs.readFile(p,(error,fileContent)=>{
            if(error){
                return [];
            }
            return JSON.parse(fileContent);
        })
        //return products;
    }
}