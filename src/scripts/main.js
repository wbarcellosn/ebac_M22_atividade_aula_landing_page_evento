AOS.init();

const dataDoEvento = new Date('Nov 12, 2023 19:00:00');
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(() => {
    const diaAtual = new Date();
    const timeStampDiaAtual = diaAtual.getTime();

    const tempoAteOEvento = timeStampDoEvento - timeStampDiaAtual

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(tempoAteOEvento / diasEmMs); //cálculo para encontrar os dias até o evento

    const horasAteOEvento = Math.floor((tempoAteOEvento % diasEmMs) / horaEmMs); //cálculo para encontrar as horas até o evento

    const minutosAteOEvento = Math.floor((tempoAteOEvento % horaEmMs) / minutoEmMs); //cálculo para encontrar os minutos até o evento

    const segundosAteOEvento = Math.floor((tempoAteOEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
    
    if (diasAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
    
}, 1000)
