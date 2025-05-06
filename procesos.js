      // Datos de vehículos importados
      const datos = [
        
        {"MicroRed": "Molinopampa", "Ipress": "CENTRO DE SALUD MOLINOPAMPA", "Estado": "Regular", "Marca": "TOYOTA", "Modelo": "HILUX", "Codigo Patrimonial": "678200500009", "Placa": "EUE-469", "Año de Fabricacion": "1905", "SOAT": "25/02/2026", "Revision Tecnica": "29/09/2025", "DNI Conductor": "33428213", "Nombres del Conductor": "MAGNO CULQUIMBOZ RUIZ", "Tipo de Contrato": "Contrato Plazo Indeterminado", "Licencia": "", "Nro de Licencia": "A TRES C", "Fecha Vencimiento - Licencia": "11/02/2026", "Celular": "976420040" },
        {"MicroRed": "Luya", "Ipress": "CENTRO DE SALUD LUYA", "Estado": "Bueno", "Marca": "TOYOTA", "Modelo": "HILUX", "Codigo Patrimonial": "678200500015", "Placa": "EUH-717", "Año de Fabricacion": "1905", "SOAT": "21/02/2026", "Revision Tecnica": "01/10/2027", "DNI Conductor": "41226974", "Nombres del Conductor": "ENRIQUE GELLER ZAGACETA RUIZ ", "Tipo de Contrato": "Contrato Plazo Indeterminado", "Licencia": "", "Nro de Licencia": "W41226974", "Fecha Vencimiento - Licencia": "13/10/2027", "Celular": "959828711" },
        {"MicroRed": "Maria", "Ipress": "CENTRO DE SALUD MARIA", "Estado": "Regular", "Marca": "VOLKSWAGEN", "Modelo": "TRANSPORTER", "Codigo Patrimonial": "678200500026", "Placa": "EUC-956", "Año de Fabricacion": "1905", "SOAT": "21/03/2026", "Revision Tecnica": "06/09/2025", "DNI Conductor": "47438258", "Nombres del Conductor": "RIDER ALFONZO MACHUCA GARRIDO", "Tipo de Contrato": "Contrato CAS", "Licencia": "https://drive.google.com/open?id=1XtO7nE1gi4w2ZzdaEgwLo7IL-hC9SOCI", "Nro de Licencia": "W47438258", "Fecha Vencimiento - Licencia": "01/12/2025", "Celular": "957155936" },
        {"MicroRed": "Ocalli", "Ipress": "CENTRO DE SALUD OCALLÍ", "Estado": "Regular", "Marca": "TOYOTA", "Modelo": "HILUX", "Codigo Patrimonial": "678200500001", "Placa": "EGO-124", "Año de Fabricacion": "1905", "SOAT": "25/02/2026", "Revision Tecnica": "29/02/2020", "DNI Conductor": "16712192", "Nombres del Conductor": "ALBERTO FARRO PEREZ", "Tipo de Contrato": "Nombrado", "Licencia": "https://drive.google.com/open?id=1FFioKkKba3krQM5hGySFPYb9N_abu9F5, https://drive.google.com/open?id=1Fjzo2pYWY4UNtS96SLIwLlo8NaYWHQfe", "Nro de Licencia": "C16712192", "Fecha Vencimiento - Licencia": "19/10/2025", "Celular": "952823581" },
        {"MicroRed": "Hospital María Auxiliadora", "Ipress": "HOSPITAL MARIA AUXILIADORA", "Estado": "Regular", "Marca": "NISSAN", "Modelo": "URVAN", "Codigo Patrimonial": "NO TIENE", "Placa": "EUH-421", "Año de Fabricacion": "1905", "SOAT": "03/12/2025", "Revision Tecnica": "31/12/2025", "DNI Conductor": "42520300", "Nombres del Conductor": "ROBER PERALTA SEGURA", "Tipo de Contrato": "Contrato Plazo Indeterminado", "Licencia": "https://drive.google.com/open?id=1gt4xQbSCC_g2CrZkJAQfD2LX1lL3O_in", "Nro de Licencia": "W42520300", "Fecha Vencimiento - Licencia": "11/01/2026", "Celular": "957178449" },
        {"MicroRed": "Jumbilla", "Ipress": "CENTRO DE SALUD JUMBILLA", "Estado": "Regular", "Marca": "VOLKSWAGEN", "Modelo": "TRANSPORTER", "Codigo Patrimonial": "678200500014", "Placa": "EUC-976", "Año de Fabricacion": "1905", "SOAT": "02/02/2026", "Revision Tecnica": "03/09/2023", "DNI Conductor": "33734466", "Nombres del Conductor": "MANUEL BRICEÑO OXOLON", "Tipo de Contrato": "Nombrado", "Licencia": "https://drive.google.com/open?id=117i2flBkF6N8GCUsArQc7ohtDrAodyud", "Nro de Licencia": "AIIIC33734466", "Fecha Vencimiento - Licencia": "19/08/2027", "Celular": "938265536" },
        {"MicroRed": "Pomacochas", "Ipress": "CENTRO DE SALUD POMACOCHAS", "Estado": "Bueno", "Marca": "TOYOTA", "Modelo": "HILUX", "Codigo Patrimonial": "768200500039", "Placa": "EUH-747", "Año de Fabricacion": "1905", "SOAT": "28/02/2026", "Revision Tecnica": "03/09/2025", "DNI Conductor": "33726013", "Nombres del Conductor": "MANUEL HECTOR CHICANA LOPEZ", "Tipo de Contrato": "Nombrado", "Licencia": "https://drive.google.com/open?id=1smNXJ_ZdcppSu1Ed0PF6Ay79pGnHkK8i", "Nro de Licencia": "W33726013", "Fecha Vencimiento - Licencia": "14/07/2027", "Celular": "941894318" },
        {"MicroRed": "Pomacochas", "Ipress": "PUESTO DE SALUD BUENOS AIRES", "Estado": "Bueno", "Marca": "NISSAN", "Modelo": "CARAVAN", "Codigo Patrimonial": "678200500020", "Placa": "EUB-067", "Año de Fabricacion": "1905", "SOAT": "15/01/2026", "Revision Tecnica": "10/08/2025", "DNI Conductor": "44703306", "Nombres del Conductor": "RONAL SAUCEDO GUEVARA", "Tipo de Contrato": "Contrato CAS", "Licencia": "https://drive.google.com/open?id=1ilYDRYRivjOBFW-8MTt59PlHWP6GHqhp", "Nro de Licencia": "W44703306", "Fecha Vencimiento - Licencia": "07/04/2026", "Celular": "949941533" },
        {"MicroRed": "Leymebamba", "Ipress": "CENTRO DE SALUD BALZAS", "Estado": "Regular", "Marca": "TOYOTA", "Modelo": "HILUX", "Codigo Patrimonial": "678200500004", "Placa": "PIF-668", "Año de Fabricacion": "1905", "SOAT": "27/01/2026", "Revision Tecnica": "1/1/0001", "DNI Conductor": "NO CUENTA", "Nombres del Conductor": "NO CUENTA", "Tipo de Contrato": "NO CUENTA", "Licencia": "", "Nro de Licencia": "", "Fecha Vencimiento - Licencia": "00/01/1900", "Celular": "" },
        {"MicroRed": "Totora", "Ipress": "CENTRO DE SALUD LIMABAMBA", "Estado": "Malo", "Marca": "NISSAN", "Modelo": "FRONTIER", "Codigo Patrimonial": "NO TIENE", "Placa": "T1E-880", "Año de Fabricacion": "1905", "SOAT": "17/01/2023", "Revision Tecnica": "25/11/2021", "DNI Conductor": "NO CUENTA", "Nombres del Conductor": "NO CUENTA", "Tipo de Contrato": "NO CUENTA", "Licencia": "", "Nro de Licencia": "", "Fecha Vencimiento - Licencia": "00/01/1900", "Celular": "" },
        {"MicroRed": "Totora", "Ipress": "CENTRO DE SALUD TOTORA ", "Estado": "Regular", "Marca": "TOYOTA", "Modelo": "HILUX", "Codigo Patrimonial": "678200500024", "Placa": "EUD-684", "Año de Fabricacion": "1905", "SOAT": "22/08/2025", "Revision Tecnica": "01/12/2020", "DNI Conductor": "70790222", "Nombres del Conductor": "Rodvin luis villa gongora ", "Tipo de Contrato": "Nombrado", "Licencia": "https://drive.google.com/open?id=1CyCpxPEZ5speMbm8JIPUGqB4zaA8xnYT, https://drive.google.com/open?id=1_2JscpCsr4QxRPRpFDEHtYRKZXsJdckj", "Nro de Licencia": "W70790222", "Fecha Vencimiento - Licencia": "12/08/2026", "Celular": "938144936" },
        {"MicroRed": "Pomacochas", "Ipress": "PUESTO DE SALUD YAMBRASBAMBA", "Estado": "Regular", "Marca": "PEUGEOT", "Modelo": "BOXER", "Codigo Patrimonial": "678200500019", "Placa": "EGU-916", "Año de Fabricacion": "1905", "SOAT": "27/01/2026", "Revision Tecnica": "17/04/2023", "DNI Conductor": "33725999", "Nombres del Conductor": "JAIME CHICANA VALLE", "Tipo de Contrato": "Locador Regular", "Licencia": "https://drive.google.com/open?id=1vtRFRRP6B1SiWFDspgYqZQx_PuLiG91G", "Nro de Licencia": "W33725999", "Fecha Vencimiento - Licencia": "20/01/2030", "Celular": "993185827" },
        {"MicroRed": "Yerbabuena", "Ipress": "CENTRO DE SALUD YERBABUENA", "Estado": "Regular", "Marca": "TOYOTA", "Modelo": "HIACE", "Codigo Patrimonial": "628200500012", "Placa": "EGL-296", "Año de Fabricacion": "1905", "SOAT": "11/02/2026", "Revision Tecnica": "21/10/2025", "DNI Conductor": "40051255", "Nombres del Conductor": "Vicente sanchez cajo ", "Tipo de Contrato": "Nombrado", "Licencia": "https://drive.google.com/open?id=1ZOm26gCAI3-F42lIoT_Xo3SBah-AfO7P, https://drive.google.com/open?id=1uM5TvqNbLmO0yAhh74gjiwe9eV8bAJDI", "Nro de Licencia": "C40051255", "Fecha Vencimiento - Licencia": "17/06/2026", "Celular": "951490336" },
        {"MicroRed": "Nuevo Chirimoto", "Ipress": "CENTRO DE SALUD NUEVO CHIRIMOTO", "Estado": "Regular", "Marca": "TOYOTA", "Modelo": "HIACE", "Codigo Patrimonial": "678200500013", "Placa": "EUC-682", "Año de Fabricacion": "1905", "SOAT": "31/03/2026", "Revision Tecnica": "14/09/2025", "DNI Conductor": "46078402", "Nombres del Conductor": "JOSE OLMER CUSQUIPOMA MORI", "Tipo de Contrato": "Contrato CAS", "Licencia": "https://drive.google.com/open?id=1c_frWMB0zQ5nUjDXTENMiGG_arjP7Ptk", "Nro de Licencia": "D46078402", "Fecha Vencimiento - Licencia": "21/05/2029", "Celular": "979973070" },
        {"MicroRed": "Tingo", "Ipress": "CENTRO DE SALUD TINGO", "Estado": "Regular", "Marca": "TOYOTA", "Modelo": "HIACE", "Codigo Patrimonial": "NO TIENE", "Placa": "EUD-917", "Año de Fabricacion": "1905", "SOAT": "25/02/2026", "Revision Tecnica": "11/09/2025", "DNI Conductor": "33816046", "Nombres del Conductor": "HERMERSON VILCARROMERO TOREJON", "Tipo de Contrato": "Contrato Plazo Indeterminado", "Licencia": "https://drive.google.com/open?id=19Fz0Y7RCKM0Xs32UGlaswW5NpzwNWrDi", "Nro de Licencia": "W33816046", "Fecha Vencimiento - Licencia": "14/10/2027", "Celular": "942667291" },
        {"MicroRed": "Pedro Ruiz", "Ipress": "CENTRO DE SALUD PEDRO RUIZ GALLO", "Estado": "Malo", "Marca": "TOYOTA", "Modelo": "HILUX", "Codigo Patrimonial": "678250000002", "Placa": "EUD-360", "Año de Fabricacion": "1905", "SOAT": "29/10/2025", "Revision Tecnica": "13/09/2025", "DNI Conductor": "42494083", "Nombres del Conductor": "WUILQUE RIOS CHAVEZ", "Tipo de Contrato": "Contrato Plazo Indeterminado", "Licencia": "https://drive.google.com/open?id=1LgsqeEcoMH_5HiFm_N82GxzXZ4F0icga", "Nro de Licencia": "W42494083", "Fecha Vencimiento - Licencia": "13/10/2026", "Celular": "995543605" },
        {"MicroRed": "Pedro Ruiz", "Ipress": "CENTRO DE SALUD SALAZAR", "Estado": "Regular", "Marca": "TOYOTA", "Modelo": "HILUX", "Codigo Patrimonial": "678200500007", "Placa": "EUE-457", "Año de Fabricacion": "1905", "SOAT": "15/10/2025", "Revision Tecnica": "11/07/2022", "DNI Conductor": "44462598", "Nombres del Conductor": "EDINSON CARRASCO VELA", "Tipo de Contrato": "Contrato CAS", "Licencia": "https://drive.google.com/open?id=1yvUrKLDOw8qjzbuO7fhwW_YY__kMGFAs", "Nro de Licencia": "W44462598", "Fecha Vencimiento - Licencia": "30/03/2027", "Celular": "973750723" },
        {"MicroRed": "Pedro Ruiz", "Ipress": "CENTRO DE SALUD PEDRO RUIZ GALLO", "Estado": "Bueno", "Marca": "NISSAN", "Modelo": "URVAN", "Codigo Patrimonial": "NO TIENE", "Placa": "EUH-427", "Año de Fabricacion": "1905", "SOAT": "25/02/2026", "Revision Tecnica": "14/09/2025", "DNI Conductor": "33401502", "Nombres del Conductor": "JORGE ENRRIQUE MUÑOZ VERGARAY", "Tipo de Contrato": "Nombrado", "Licencia": "https://drive.google.com/open?id=1wJgmAC9i4L_KOZvjllKVwyb3wk6JkWBj", "Nro de Licencia": "W33401502", "Fecha Vencimiento - Licencia": "15/06/2027", "Celular": "941947502" },
        {"MicroRed": "Pedro Ruiz", "Ipress": "PUESTO DE SALUD INGENIO", "Estado": "Regular", "Marca": "TOYOTA", "Modelo": "HILUX", "Codigo Patrimonial": "678200500005", "Placa": "EUD-363", "Año de Fabricacion": "1905", "SOAT": "10/02/2023", "Revision Tecnica": "10/02/2023", "DNI Conductor": "NO CUENTA", "Nombres del Conductor": "NO CUENTA", "Tipo de Contrato": "NO CUENTA", "Licencia": "", "Nro de Licencia": "", "Fecha Vencimiento - Licencia": "00/01/1900", "Celular": "" },
        {"MicroRed": "Chachapoyas", "Ipress": "CENTRO DE SALUD COLCAMAR", "Estado": "Regular", "Marca": "VOLKSWAGEN", "Modelo": "TRANSPORTER", "Codigo Patrimonial": "678200500029", "Placa": "EUD-634", "Año de Fabricacion": "1905", "SOAT": "24/10/2025", "Revision Tecnica": "17/02/2024", "DNI Conductor": "33432844", "Nombres del Conductor": "CARLO MAGNO BUELOT VISALOT", "Tipo de Contrato": "Contrato CAS", "Licencia": "https://drive.google.com/open?id=1DXSYpNQkXHo3M1wGWQC3szpwXwh7pt90", "Nro de Licencia": "W33432847", "Fecha Vencimiento - Licencia": "29/09/2026", "Celular": "960281418" },
        {"MicroRed": "Pedro Ruiz", "Ipress": "PUESTO DE SALUD CHURUJA", "Estado": "Regular", "Marca": "SUZUKI", "Modelo": "SUZUKI", "Codigo Patrimonial": "678200500030", "Placa": "EUE-852", "Año de Fabricacion": "1905", "SOAT": "07/11/2025", "Revision Tecnica": "03/02/2011", "DNI Conductor": "NO CUENTA", "Nombres del Conductor": "NO CUENTA", "Tipo de Contrato": "NO CUENTA", "Licencia": "", "Nro de Licencia": "", "Fecha Vencimiento - Licencia": "00/01/1900", "Celular": "" },
        {"MicroRed": "Leymebamba", "Ipress": "CENTRO DE SALUD LEYMEBAMBA", "Estado": "Bueno", "Marca": "TOYOTA", "Modelo": "HILUX", "Codigo Patrimonial": "678200500015", "Placa": "EUH-626", "Año de Fabricacion": "1905", "SOAT": "25/02/2026", "Revision Tecnica": "25/02/2026", "DNI Conductor": "33400714", "Nombres del Conductor": "DIMAS CHAVEZ MORI", "Tipo de Contrato": "Nombrado", "Licencia": "https://drive.google.com/open?id=1nH2pT6Qd3wZmgfNI8gFC2kgMgmogXckh", "Nro de Licencia": "W33400714", "Fecha Vencimiento - Licencia": "23/02/2027", "Celular": "992706509" },
        {"MicroRed": "Huambo", "Ipress": "CENTRO DE SALUD HUAMBO", "Estado": "Bueno", "Marca": "TOYOTA", "Modelo": "HILUX", "Codigo Patrimonial": "678200500034", "Placa": "EUH-698", "Año de Fabricacion": "1905", "SOAT": "22/02/2026", "Revision Tecnica": "01/01/2024", "DNI Conductor": "40083507", "Nombres del Conductor": "MIGUEL ANGEL LOPEZ HOYOS", "Tipo de Contrato": "Nombrado", "Licencia": "https://drive.google.com/open?id=1BovSEv07SlZ5YJ52-2Lf8uaFkFyz3RQj", "Nro de Licencia": "W40083507", "Fecha Vencimiento - Licencia": "23/03/2028", "Celular": "996908115" },
        {"MicroRed": "Collonce", "Ipress": "CENTRO DE SALUD COLLONCE", "Estado": "Bueno", "Marca": "TOYOTA", "Modelo": "HILUX", "Codigo Patrimonial": "678200500033", "Placa": "EUH-627", "Año de Fabricacion": "1905", "SOAT": "25/03/2026", "Revision Tecnica": "25/03/2025", "DNI Conductor": "73602628", "Nombres del Conductor": "ELDIN NOLASCO SAUCEDO LOPEZ", "Tipo de Contrato": "Contrato CAS", "Licencia": "https://drive.google.com/open?id=1vwlmhCmVu0vPaNS5GZkXEz3kwT08ISUH", "Nro de Licencia": "Q73602828", "Fecha Vencimiento - Licencia": "01/02/2028", "Celular": "930993681" },
        {"MicroRed": "Omia", "Ipress": "CENTRO DE SALUD OMIA", "Estado": "Bueno", "Marca": "TOYOTA", "Modelo": "HILUX", "Codigo Patrimonial": "678200500015", "Placa": "EUH-632", "Año de Fabricacion": "1905", "SOAT": "25/02/2026", "Revision Tecnica": "22/12/2024", "DNI Conductor": "33962415", "Nombres del Conductor": "Hubert López Vargas ", "Tipo de Contrato": "Contrato CAS", "Licencia": "https://drive.google.com/open?id=1DL6FSRyqLX_ywBXwR88kb5axugNFwU3x", "Nro de Licencia": "W33962415", "Fecha Vencimiento - Licencia": "24/04/2030", "Celular": "982404756" },
        {"MicroRed": "Leymebamba", "Ipress": "CENTRO DE SALUD CHUQUIBAMBA", "Estado": "Bueno", "Marca": "TOYOTA", "Modelo": "HILUX", "Codigo Patrimonial": "678200500015", "Placa": "EUH-640", "Año de Fabricacion": "1905", "SOAT": "25/02/2026", "Revision Tecnica": "1/1/0001", "DNI Conductor": "44426318", "Nombres del Conductor": "HANS MIKKEL ABANTO VALDIVIA", "Tipo de Contrato": "Nombrado", "Licencia": "https://drive.google.com/open?id=1nH2pT6Qd3wZmgfNI8gFC2kgMgmogXckh", "Nro de Licencia": "W44426318", "Fecha Vencimiento - Licencia": "30/01/2026", "Celular": "966112950" },
        {"MicroRed": "Santo Tomas", "Ipress": "CENTRO DE SALUD SANTO TOMAS", "Estado": "Bueno", "Marca": "TOYOTA", "Modelo": "HILUX", "Codigo Patrimonial": "NO TIENE", "Placa": "EUH-414", "Año de Fabricacion": "1905", "SOAT": "03/07/2025", "Revision Tecnica": "03/07/2025", "DNI Conductor": "42473516", "Nombres del Conductor": "ROGER JULCA RITUAY", "Tipo de Contrato": "Contrato CAS", "Licencia": "", "Nro de Licencia": "W42473516", "Fecha Vencimiento - Licencia": "24/11/2026", "Celular": "962881400" },
        {"MicroRed": "Santo Tomas", "Ipress": "CENTRO DE SALUD SANTO TOMAS", "Estado": "Regular", "Marca": "VOLKSWAGEN", "Modelo": "TRANSPORTER", "Codigo Patrimonial": "NO TIENE", "Placa": "EUC-982", "Año de Fabricacion": "1905", "SOAT": "24/01/2026", "Revision Tecnica": "02/10/2025", "DNI Conductor": "43242257", "Nombres del Conductor": "ELVIS PIZARRO SOLIS", "Tipo de Contrato": "Contrato CAS", "Licencia": "", "Nro de Licencia": "Q43242257", "Fecha Vencimiento - Licencia": "25/07/2025", "Celular": "950967863" },
        {"MicroRed": "Maria", "Ipress": "CENTRO DE SALUD COCABAMBA", "Estado": "Regular", "Marca": "TOYOTA", "Modelo": "HILUX", "Codigo Patrimonial": "678200500008", "Placa": "EUD-362", "Año de Fabricacion": "1905", "SOAT": "23/04/2026", "Revision Tecnica": "25/10/2025", "DNI Conductor": "NO CUENTA", "Nombres del Conductor": "NO CUENTA", "Tipo de Contrato": "NO CUENTA", "Licencia": "", "Nro de Licencia": "", "Fecha Vencimiento - Licencia": "00/01/1900", "Celular": "" },
        
    
    
    ];

      // Función para obtener MicroRedes únicas
      function obtenerMicroRedesUnicas() {
        const microredesUnicas = new Set();

        datos.forEach((vehiculo) => {
          microredesUnicas.add(vehiculo.MicroRed);
        });

        return Array.from(microredesUnicas).sort();
      }

      // Función para contar vehículos por MicroRed
      function contarVehiculosPorMicroRed(microred) {
        return datos.filter((vehiculo) => vehiculo.MicroRed === microred)
          .length;
      }

      // SVG de ambulancia
      const ambulanceSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" class="ambulance-svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
        <path d="M6 10h4m-2 -2v4" />
      </svg>
    `;

      // Función para cargar los cuadritos de MicroRedes
      function cargarMicroRedes() {
        const listaMicroRedes = document.getElementById("lista-microredes");
        const microredesUnicas = obtenerMicroRedesUnicas();
        const totalAmbulancias = document.getElementById("total-ambulancias");

        listaMicroRedes.innerHTML = "";

        if (microredesUnicas.length === 0) {
          listaMicroRedes.innerHTML =
            '<p class="error">No se encontraron MicroRedes registradas.</p>';
          return;
        }

        let total = 0; // Acumulador para contar el total de ambulancias

        microredesUnicas.forEach((microred) => {
          const totalVehiculos = contarVehiculosPorMicroRed(microred);
          total += totalVehiculos; // Sumar el total de ambulancias por cada MicroRed

          const card = document.createElement("div");
          card.className = "microred-card";
          card.innerHTML = `
      <div class="card-header">
        ${ambulanceSVG}
        <h3>${microred}</h3>
      </div>
      <p><strong>Total de ambulancias:</strong> ${totalVehiculos}</p>
      <button class="ver-detalle" onclick="verDetalle('${microred}')">Ver ambulancias</button>
    `;

          listaMicroRedes.appendChild(card);
        });

        // Actualizar el total de ambulancias en el DOM
        totalAmbulancias.textContent = total;
      }

      // Función para mostrar los detalles de una MicroRed
      function verDetalle(microred) { 
        const vistaPrincipal = document.querySelector(".vista-principal");
        const vistaDetalle = document.querySelector(".vista-detalle");
        const vistaDetallesGeneral = document.querySelector(".vista-detalles-general");
        const contenidoDetalle = document.getElementById("contenido-detalle");

        // Encontrar todos los vehículos que pertenecen a esta MicroRed
        const vehiculosDeMicroRed = datos.filter(
          (v) => v.MicroRed === microred
        );

        if (vehiculosDeMicroRed.length > 0) {
          // Mostrar información detallada de los vehículos
          let contenidoHTML = `
          <div class="title">Ambulancias de la MicroRed: ${microred}</div>
        `;

          vehiculosDeMicroRed.forEach((vehiculo, index) => {
            const estadoClass =
              vehiculo.Estado.toLowerCase() === "bueno"
                ? "estado-bueno"
                : vehiculo.Estado.toLowerCase() === "regular"
                ? "estado-regular"
                : "estado-malo";

            contenidoHTML += `
            <div class="vehiculo-container">
              <div class="vehiculo-header">
                ${ambulanceSVG}
                Ambulancia ${index + 1} - ${vehiculo.Marca} ${vehiculo.Modelo}
              </div>
              
              <div class="datos-con-imagen">
  
              <div class="datos-usuario">
                <div class="info-row">
                  <div class="info-label">IPRESS:</div>
                  <div class="info-value">${vehiculo.Ipress}</div>
                </div>
                
                <div class="info-row">
                  <div class="info-label">Estado:</div>
                  <div class="info-value"><span class="estado ${estadoClass}">${
                          vehiculo.Estado
                        }</span></div>
                </div>
                
                <div class="info-row">
                  <div class="info-label">Placa:</div>
                  <div class="info-value">${vehiculo.Placa}</div>
                </div>
                
                <div class="info-row">
                  <div class="info-label">Cód. Patrimonio:</div>
                  <div class="info-value ${vehiculo["Codigo Patrimonial"] === "NO TIENE" ? "texto-rojo" : ""}">
                    ${vehiculo["Codigo Patrimonial"]}
                  </div>
                </div>

                
                <div class="info-row">
                  <div class="info-label">Fabricación:</div>
                  <div class="info-value">${vehiculo["Año de Fabricacion"]}</div>
                </div>
                
                <div class="info-row">
                  <div class="info-label">SOAT:</div>
                  <div class="info-value">${vehiculo.SOAT}</div>
                </div>
                
                <div class="info-row">
                  <div class="info-label">Revisión Técnica:</div>
                  <div class="info-value">${vehiculo["Revision Tecnica"]}</div>
                </div>
              </div>

              <div class="imagen-vehiculo">
                <img src="ambulancia.png" alt="Imagen del vehículo">
              </div>
            </div>


              <div class="title" style="margin-top: 20px;">Datos del Conductor</div>
              
              <div class="datos-usuario">
                <div class="info-row">
                  <div class="info-label">Nombres:</div>
                  <div class="info-value">${
                    vehiculo["Nombres del Conductor"]
                  }</div>
                </div>
                
                <div class="info-row">
                  <div class="info-label">DNI:</div>
                  <div class="info-value">${vehiculo["DNI Conductor"]}</div>
                </div>
                
                <div class="info-row">
                  <div class="info-label">Contrato:</div>
                  <div class="info-value">${vehiculo["Tipo de Contrato"]}</div>
                </div>
                
                <div class="info-row">
                  <div class="info-label">N° de Licencia:</div>
                  <div class="info-value">${vehiculo["Nro de Licencia"]}</div>
                </div>
                
                <div class="info-row">
                  <div class="info-label">Fecha Venc:</div>
                  <div class="info-value">${
                    vehiculo["Fecha Vencimiento - Licencia"]
                  }</div>
                </div>
                
                <div class="info-row">
                  <div class="info-label">Celular:</div>
                  <div class="info-value">${vehiculo.Celular}</div>
                </div>
              </div>
            </div>
          `;
          });

          contenidoDetalle.innerHTML = contenidoHTML;
        } else {
          contenidoDetalle.innerHTML = `<p class="error">No se encontraron ambulancias para la MicroRed: ${microred}</p>`;
        }

        // Cambiar de vista
        vistaPrincipal.style.display = "none";
        vistaDetallesGeneral.style.display = "none";
        vistaDetalle.style.display = "block";
      }

      // Función para volver al listado
      function mostrarListado() {
        const vistaPrincipal = document.querySelector(".vista-principal");
        const vistaDetalle = document.querySelector(".vista-detalle");
        const vistaDetallesGeneral = document.querySelector(".vista-detalles-general");

        vistaDetalle.style.display = "none";
        vistaDetallesGeneral.style.display = "none";
        vistaPrincipal.style.display = "block";
      }

      // Función para mostrar la vista de detalles general
      function mostrarVistaDetalles() {
        const vistaPrincipal = document.querySelector(".vista-principal");
        const vistaDetalle = document.querySelector(".vista-detalle");
        const vistaDetallesGeneral = document.querySelector(".vista-detalles-general");

        vistaPrincipal.style.display = "none";
        vistaDetalle.style.display = "none";
        vistaDetallesGeneral.style.display = "block";
      }

      // Función para volver desde la vista de detalles general
      function volverDesdeDetallesGeneral() {
        mostrarListado();
      }

      // Función para filtrar MicroRedes
      function filtrarMicroRedes() {
        const textoBusqueda = document
          .getElementById("buscador")
          .value.toLowerCase();
        const listaMicroRedes = document.getElementById("lista-microredes");
        const microredesUnicas = obtenerMicroRedesUnicas();

        listaMicroRedes.innerHTML = "";

        const resultadosFiltrados = microredesUnicas.filter((microred) =>
          microred.toLowerCase().includes(textoBusqueda)
        );

        if (resultadosFiltrados.length === 0) {
          listaMicroRedes.innerHTML =
            '<p class="error">No se encontraron resultados para la búsqueda.</p>';
          return;
        }

        resultadosFiltrados.forEach((microred) => {
          const totalVehiculos = contarVehiculosPorMicroRed(microred);
          const card = document.createElement("div");
          card.className = "microred-card";
          card.innerHTML = `
          <div class="card-header">
            ${ambulanceSVG}
            <h3>${microred}</h3>
          </div>
          <p><strong>Total de ambulancias:</strong> ${totalVehiculos}</p>
          <button class="ver-detalle" onclick="verDetalle('${microred}')">Ver ambulancias</button>
        `;
          listaMicroRedes.appendChild(card);
        });
      }

      // Cargar las MicroRedes al iniciar la página
      window.onload = function () {
        cargarMicroRedes();
      };

      google.charts.load("current", { packages: ["corechart"] });
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        // Get the unique MicroRed names
        const microredesUnicas = obtenerMicroRedesUnicas();

        // Create data array for the chart with headers
        let chartData = [["MicroRed", "Cantidad", { role: "style" }]];

        // Define colors for each bar
        const colors = [
          "#3366CC",
          "#DC3912",
          "#FF9900",
          "#109618",
          "#990099",
          "#0099C6",
          "#DD4477",
          "#66AA00",
        ];

        // Add data for each MicroRed
        microredesUnicas.forEach((microred, index) => {
          const cantidadAmbulancia = contarVehiculosPorMicroRed(microred);
          // Use colors[index % colors.length] to cycle through colors if there are more MicroReds than colors
          chartData.push([
            microred,
            cantidadAmbulancia,
            colors[index % colors.length],
          ]);
        });

        var data = google.visualization.arrayToDataTable(chartData);

        var view = new google.visualization.DataView(data);
        view.setColumns([
          0,
          1,
          {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation",
          },
          2,
        ]);

        var options = {
          title: "--",
          width: "100%",
          height: 300,
          bar: { groupWidth: "65%" },
          legend: { position: "none" },
          chartArea: {
            width: "80%",
            height: "70%",
          },
          hAxis: {
            textStyle: {
              fontSize: 12,
            },
          },
          vAxis: {
            minValue: 0,
            textStyle: {
              fontSize: 12,
            },
          },
          backgroundColor: "transparent",
        };

        var chart = new google.visualization.ColumnChart(
          document.getElementById("columnchart_values")
        );

        // Make chart responsive
        function resizeChart() {
          chart.draw(view, options);
        }

        // Initial draw
        resizeChart();

        // Redraw chart when window is resized
        window.addEventListener("resize", resizeChart);
      }

      // *********************** GRAFICO DE PASTEL ESTADO ***********************

      // Función para obtener MicroRedes únicas
      function obtenerEstadoAmbulancias() {
        const EstadoAmbulanciasUnicas = new Set();

        datos.forEach((vehiculo) => {
          EstadoAmbulanciasUnicas.add(vehiculo.Estado);
        });

        return Array.from(EstadoAmbulanciasUnicas).sort();
      }

      // Función para contar vehículos por MicroRed
      function contarVehiculosPorEstado(estado) {
        return datos.filter((vehiculo) => vehiculo.Estado === estado).length;
      }

      google.charts.load("current", { packages: ["corechart"] });
      google.charts.setOnLoadCallback(drawChartEstado);

      function drawChartEstado() {
        const EstadoAmbulanciasUnicas = obtenerEstadoAmbulancias();
        let chartDataEstado = [["Estado", "Cantidad"]];

        // Colores para cada estado
        const colores = {
          Bueno: "#109618", // Verde
          Regular: "#FF9900", // Naranja
          Malo: "#DC3912", // Rojo
        };

        // Agregar datos con porcentajes
        EstadoAmbulanciasUnicas.forEach((estado) => {
          const cantidad = contarVehiculosPorEstado(estado);
          const porcentaje = ((cantidad / datos.length) * 100).toFixed(0) + "%";
          chartDataEstado.push([`${estado} (${porcentaje})`, cantidad]);
        });

        var dataEstado = google.visualization.arrayToDataTable(chartDataEstado);

        // Detectar tamaño de pantalla
        const isMobile = window.matchMedia("(max-width: 600px)").matches;
        const isTablet = window.matchMedia("(max-width: 1024px)").matches;

        var options = {
          title: "--",
          width: "100%",
          height: isMobile ? 280 : isTablet ? 350 : 450, // Más grande en PC (450px)
          pieHole: 0.4, // Hueco un poco más pequeño para aprovechar espacio
          legend: {
            position: isMobile ? "bottom" : "labeled",
            alignment: "center",
            textStyle: {
              fontSize: isMobile ? 11 : 14, // Texto más grande
              color: "#333",
            },
          },
          pieSliceText: "percentage",
          pieSliceTextStyle: {
            color: "white",
            fontSize: isMobile ? 11 : 14, // Texto más grande dentro del gráfico
            bold: true,
          },
          chartArea: {
            width: "85%", // Área más grande para el gráfico
            height: "85%",
            left: "7%",
            top: "7%",
            right: "7%",
            bottom: "7%",
          },
          backgroundColor: "transparent",
          tooltip: {
            text: "both", // Muestra valor y porcentaje
            showColorCode: true,
            textStyle: {
              fontSize: 14,
            },
          },
          colors: EstadoAmbulanciasUnicas.map(
            (estado) => colores[estado] || "#3366CC"
          ),
        };

        var chartEstado = new google.visualization.PieChart(
          document.getElementById("columnchart_values_Estado")
        );

        // Ajustar el contenedor
        const chartContainer = document.getElementById(
          "columnchart_values_Estado"
        );
        chartContainer.style.padding = "15px";

        // Ajustar tamaño del modal para PC
        if (!isMobile && !isTablet) {
          const modal = document.querySelector(".modal-contenido");
          if (modal) {
            modal.style.width = "650px"; // Modal más ancho
            modal.style.padding = "25px";
          }
        }

        function resizeChart() {
          const modalContent = document.querySelector(".modal-contenido");
          if (modalContent) {
            const availableHeight = modalContent.clientHeight - 100;
            options.height = Math.min(
              availableHeight,
              isMobile ? 280 : isTablet ? 350 : 450
            );
          }
          chartEstado.draw(dataEstado, options);
        }

        resizeChart();
        window.addEventListener("resize", resizeChart);
      }

      // *********************** FIN DEL GRAFICO DE PASTEL ESTADO ***********************

      // Function to open and close modal
      function abrirModal() {
        document.getElementById("miModal").style.display = "block";
        // Redraw chart when modal opens to ensure proper sizing
        google.charts.setOnLoadCallback(drawChart);
      }

      function cerrarModal() {
        document.getElementById("miModal").style.display = "none";
      }

      function abrirModalEstado() {
        document.getElementById("miModalEstado").style.display = "block";
        // Redraw chart when modal opens to ensure proper sizing
        google.charts.setOnLoadCallback(drawChartEstado);
      }

      function cerrarModalEstado() {
        document.getElementById("miModalEstado").style.display = "none";
      }

      // Close modal when clicking outside of it
      window.onclick = function (event) {
        var modal = document.getElementById("miModal");
        var modalEstado = document.getElementById("miModalEstado");
        if (event.target == modal || event.target == modalEstado) {
          modal.style.display = "none";
          modalEstado.style.display = "none";
        }
      };

      
    // Función para mostrar/ocultar el contenido de las secciones
    function toggleSection(section) {
        section.classList.toggle('active');
    }
    
    // Función para volver al listado
    function volverDesdeDetallesGeneral() {
        alert('Volviendo al listado principal...');
        // Aquí iría la lógica para volver a la vista anterior
    }


    