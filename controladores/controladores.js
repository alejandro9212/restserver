const { response } = require ('express');
const { request } = require ('express');



const usuarioDelete = (req=request, res)=>{
   
   
    res.json({

        ok : false,
        msg: 'Welcome al delete'
    }
        
    );
}

const usuarioGet=(req, res) => {
   const {idUsuario, name,profesion} = req.query;
   const {mensaje}= req.body;
   
    res.json({
       ok : true,
       msg : 'Welcome',
       mensaje,
       idUsuario,
       name,
       profesion

    }
    );
}

const usuarioPost=(req, res)=>{
    const {idP}= req.params;
    const {nombre} = req.body;
    /*const body = req.body;*/

    res.json({
        
        ok : false,
        msg: 'Welcome al post',
        nombre,
        idP
    }
        
    );
}

const usuarioPut=(req, res)=>{
    
    const {id} = req.params;
    const {profesion}=req.body;


    res.json({
        ok : false,
        msg: 'Welcome al put',
        profesion,
        id
    }
        
    );
}

module.exports= {
   usuarioDelete ,
   usuarioGet,
   usuarioPost,
   usuarioPut
}