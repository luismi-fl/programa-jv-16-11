//1
function ejercicioAstronomiaIF() {
  let m = parseFloat(prompt("Ingrese magnitud aparente:"));
  let r = m <= 0 ? "Extremadamente brillante" :
          m <= 2 ? "Muy brillante" :
          m <= 4 ? "Brillante" :
          m <= 6 ? "Débil" : "No visible";
  
  document.getElementById("resultadoAstronomia").innerText = r;
}

function ejercicioAstronomiaFOR() {
  let n = parseInt(prompt("¿Cuántas distancias registrar?"));
  let d = [];
  
  for (let i = 0; i < n; i++) {
    d.push(parseFloat(prompt("Distancia " + (i+1) + " (millones km):")));
  }
  
  let p = (d.reduce((a,b) => a+b) / n).toFixed(2);
  document.getElementById("resultadoAstronomia").innerText = 
    "Distancias: " + d.join(", ") + "\nPromedio: " + p;
}

function ejercicioAstronomiaWHILE() {
  let c = 0;
  let x;
  
  while ((x = parseFloat(prompt("Diámetro cráter (0 termina):"))) !== 0) {
    if (x > 50) c++;
  }
  
  document.getElementById("resultadoAstronomia").innerText = 
    "Cráteres > 50 km: " + c;
}

function ejercicioAstronomiaSWITCH() {
  let cd = parseInt(prompt("Código (1=Estrella, 2=Planeta, 3=Cometa, 4=Asteroide, 5=Galaxia):"));
  let t;
  
  switch (cd) {
    case 1: t = "Estrella"; break;
    case 2: t = "Planeta"; break;
    case 3: t = "Cometa"; break;
    case 4: t = "Asteroide"; break;
    case 5: t = "Galaxia"; break;
    default: t = "Inválido";
  }
  
  document.getElementById("resultadoAstronomia").innerText = t;
}

function ejercicioAstronomiaDOWHILE() {
  let v = [];
  let e;
  
  do {
    e = prompt("Nivel luz lux ('no' termina):");
    if (e !== "no" && !isNaN(parseFloat(e))) {
      v.push(parseFloat(e));
    }
  } while (e !== "no");
  
  let m = v.some(n => n < 5) ? "Noche profunda detectada" : "Todos > 5 lux";
  document.getElementById("resultadoAstronomia").innerText = 
    "Niveles: " + v.join(", ") + "\n" + m;
}

// 2
function ejercicioMedioAmbienteIF() {
  let aq = parseInt(prompt("Ingrese valor AQI:"));
  let cl = aq <= 50 ? "Bueno" :
           aq <= 100 ? "Moderado" :
           aq <= 150 ? "Dañino para grupos sensibles" :
           aq <= 200 ? "Dañino" :
           aq <= 300 ? "Muy dañino" : "Peligroso";
  
  document.getElementById("resultadoMedioAmbiente").innerText = cl;
}

function ejercicioMedioAmbienteFOR() {
  let n = parseInt(prompt("¿Cuántas mediciones?"));
  let nv = [];
  
  for (let i = 0; i < n; i++) {
    nv.push(parseFloat(prompt("Medición " + (i+1) + " (dB):")));
  }
  
  let p = (nv.reduce((a,b) => a+b) / n).toFixed(2);
  document.getElementById("resultadoMedioAmbiente").innerText = 
    "Niveles: " + nv.join(", ") + "\nPromedio: " + p + " dB";
}

function ejercicioMedioAmbienteWHILE() {
  let c = 0;
  let tmp;
  
  while ((tmp = parseFloat(prompt("Temperatura (0 termina):"))) !== 0) {
    if (tmp > 45) c++;
  }
  
  document.getElementById("resultadoMedioAmbiente").innerText = 
    "Focos de calor > 45°C: " + c;
}

function ejercicioMedioAmbienteSWITCH() {
  let cd = parseInt(prompt("Código residuo (1=Orgánico, 2=Plástico, 3=Papel/Cartón, 4=Vidrio):"));
  let tp;
  
  switch (cd) {
    case 1: tp = "Orgánico"; break;
    case 2: tp = "Plástico"; break;
    case 3: tp = "Papel/Cartón"; break;
    case 4: tp = "Vidrio"; break;
    default: tp = "Inválido";
  }
  
  document.getElementById("resultadoMedioAmbiente").innerText = tp;
}

function ejercicioMedioAmbienteDOWHILE() {
  let v = [];
  let e;
  
  do {
    e = prompt("Nivel río (metros o 'no'):");
    if (e !== "no" && !isNaN(parseFloat(e))) {
      v.push(parseFloat(e));
    }
  } while (e !== "no");
  
  let mx = Math.max(...v);
  let a = mx > 3 ? "⚠️ Alerta: Nivel > 3 m" : "Normal";
  document.getElementById("resultadoMedioAmbiente").innerText = 
    "Niveles: " + v.join(", ") + "\n" + a;
}
// 3
function ejercicioSaludIF() {
  let s = parseInt(prompt("Ingrese presión sistólica:"));
  let d = parseInt(prompt("Ingrese presión diastólica:"));
  
  let cl = s < 120 && d < 80 ? "Normal" :
           s < 130 && d < 80 ? "Elevada" :
           s < 140 || d < 90 ? "HTA grado 1" : "HTA grado 2";
  
  document.getElementById("resultadoSalud").innerText = cl;
}

function ejercicioSaludFOR() {
  let n = parseInt(prompt("¿Cuántos pacientes?"));
  let t = [];
  
  for (let i = 0; i < n; i++) {
    t.push(parseFloat(prompt("Temperatura paciente " + (i+1) + " (°C):")));
  }
  
  let p = (t.reduce((a,b) => a+b) / n).toFixed(2);
  document.getElementById("resultadoSalud").innerText = 
    "Temperaturas: " + t.join(", ") + "\nPromedio: " + p + " °C";
}

function ejercicioSaludWHILE() {
  let c = 0;
  let tmp;
  
  while ((tmp = parseFloat(prompt("Temperatura (0 termina):"))) !== 0) {
    if (tmp >= 38) c++;
  }
  
  document.getElementById("resultadoSalud").innerText = 
    "Pacientes con fiebre (≥38°C): " + c;
}

function ejercicioSaludSWITCH() {
  let cd = parseInt(prompt("Código TRIAGE (1=Rojo, 2=Amarillo, 3=Verde, 4=Azul):"));
  let ct;
  
  switch (cd) {
    case 1: ct = "Rojo"; break;
    case 2: ct = "Amarillo"; break;
    case 3: ct = "Verde"; break;
    case 4: ct = "Azul"; break;
    default: ct = "Inválido";
  }
  
  document.getElementById("resultadoSalud").innerText = ct;
}

function ejercicioSaludDOWHILE() {
  let sp = [];
  let e;
  
  do {
    e = prompt("Saturación SpO2 (% o 'no'):");
    if (e !== "no" && !isNaN(parseFloat(e))) {
      sp.push(parseFloat(e));
    }
  } while (e !== "no");
  
  let p = (sp.reduce((a,b) => a+b) / sp.length).toFixed(2);
  document.getElementById("resultadoSalud").innerText = 
    "Saturaciones: " + sp.join(", ") + "\nPromedio: " + p + "%";
}
