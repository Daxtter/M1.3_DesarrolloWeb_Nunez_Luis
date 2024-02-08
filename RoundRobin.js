let arregloDeCadena = ["console.log('Hola');","a=1+2;","b = a-12;","console.log('Buenos dias');"
,"console.log('3+12');","let numeroMayor;","console.log('Arriba');","a = Math.sqrt(1+2);", "console.log('proceso casi terminado');"];
let numeroDeProcesos = (process.argv[2]?process.argv[2]:10);
const arregloDeProcesos = [];


inicializarSimulacion();


function inicializarSimulacion()
{
    inicializarProcesos();
    simulacion();
    console.log("Terminado");

}
function simulacion()
{
    let procesosRestantes = numeroDeProcesos;
    const arregloDeProcesosTerminados = [];
    while(procesosRestantes !=0)
    {
        for(let i = 0; i <numeroDeProcesos; i++)
        {
            if(arregloDeProcesos[i].codigo!=0)
            {
                console.log("Proceso "+ arregloDeProcesos[i].numProceso);
                console.log("Linea de codigo: " + arregloDeProcesos[i].codigo[0]);
                arregloDeProcesos[i].codigo.shift();
            }
            else{
                if(!arregloDeProcesosTerminados.includes(arregloDeProcesos[i].numProceso))
                {
                    procesosRestantes = procesosRestantes -1;
                    arregloDeProcesosTerminados.push(i);
                }
                
            }
        }
        
    }
    

}


function inicializarProcesos()
{
    let lineasDeCodigo = [];
    for(let i = 0; i <numeroDeProcesos; i++)
    {
        arregloDeProcesos.push(new Object())
        arregloDeProcesos[i].numProceso = i;
        arregloDeProcesos[i].codigo = [];
        cantidadDeLineas = Math.floor(Math.random() * 5) +1;
        for(let j = 0; j <cantidadDeLineas; j++)
        {
            arregloDeProcesos[i].codigo.push(arregloDeCadena[Math.floor(Math.random() * arregloDeCadena.length)]);
        }    
    }
    

}
