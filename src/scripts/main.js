AOS.init();

const dataDoEvento = new Date("Dec 16,2023 24:00:00 ")
const timeStampDoEvento = dataDoEvento.getTime();


const contaAsHoras = setInterval (function ()  {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs =  1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const MinutoEmMs = 1000 * 60 ;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs ); 
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / MinutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % MinutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}D ${horasAteOEvento}H ${minutosAteOEvento}m ${segundosAteOEvento}`

    if(distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }

}, 1000);

