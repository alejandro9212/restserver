const http = require('http');
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();





class server001 {
    constructor (){
        this.http = http;
        this.app = express();
        this.userPatha = '/api/users';
        this.path = path;
        this.port = process.env.PORT;
       

        this.midelwears();
        this.router();
    }

    midelwears(){
        this.app.use(cors());
        this.app.set('views',this.path.join(__dirname,'../src/views'));
        this.app.set('view engine', 'ejs');
        // this.app.use( express.static(this.path.join(__dirname, 'public')));
        this.app.use( express.static(('public')));

        this.app.use(express.json())

    }

    router(){
       /**midelwear especial para rutas */
       this.app.use( this.userPatha, require('../router/user') );
    }

   
    liste(){
          
          this.app.listen(this.port, () => {
            console.log('Running at http://localhost:',this.port);
          });
    }

}

module.exports= server001;