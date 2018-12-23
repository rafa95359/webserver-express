const express = require('express')
/*perimite con app ya usar la funcion express*/
const app = express();
const hbs = require('hbs');


require('./hbs/helpers')




/*optener el puerto que me da heroku*/
const port = process.env.PORT || 8080;










//hacemos publico el directorio
app.use(express.static(__dirname+'/public'));


//Express HBS engine

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');




app.get('/', (req, res)=> {
    res.render('home',{
        nombre:'rafz CorTABARbas',
              
    });
    
});

app.get('/about', (req, res)=> {
    res.render('about',{      
        
        
    });
    
});



//*solicitud get al tener /*/
//app.get('/', (req, res)=> {
//    let salida={
//        nombre:'rafael',
//        edad:20,
//        url:req.url
//    };
//    //res.send('Hola Mundo')
//    res.send(salida);
//})
//

//app.get('/data', (req, res)=> {
//    res.send('Hola Data')
//})


 
app.listen(port,()=>console.log(`Escuchando peticiones en el puerto ${port}`));