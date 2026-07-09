import { useState } from "react";
import "./App.css";

//==============================
// COMPONENTES
//==============================

import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import InfoCard from "./components/InfoCard";

import VehicleDatabase from "./components/VehicleDatabase";
import LoadSelector from "./components/LoadSelector";
import VehicleCanvas from "./components/VehicleCanvas";

import PhysicsPanel from "./components/PhysicsPanel";
import RegenerationPanel from "./components/RegenerationPanel";
import AutonomyPanel from "./components/AutonomyPanel";
import MotorSaturationPanel from "./components/MotorSaturationPanel";
import VehicleStatus from "./components/VehicleStatus";
import WeightTransferPanel from "./components/WeightTransferPanel";

import EnergyChart from "./components/EnergyChart";
import SpeedChart from "./components/SpeedChart";

//==============================
// FÍSICA
//==============================

import { simularSistema } from "./physics/SimulatorCore";
import { calcularDistancia } from "./physics/Braking";
import { calcularTiempo } from "./physics/Braking";

import { calcularAutonomia } from "./physics/Autonomy";
import { calcularSaturacionMotor } from "./physics/MotorSaturation";
import { calcularTransferenciaPeso } from "./physics/DynamicWeightTransfer";
import { simularFrenado } from "./physics/RealtimeSimulation";

//==============================
// VEHÍCULOS
//==============================

import { vehiculos } from "./data/vehicleSpecs";
import type { VehicleSpecs } from "./data/vehicleSpecs";

//==============================
// APP
//==============================

function App() {

  //------------------------------------------
  // Vehículo seleccionado
  //------------------------------------------

  const [vehiculo, setVehiculo] =
    useState<VehicleSpecs>(vehiculos[0]);

  //------------------------------------------
  // Parámetros de simulación
  //------------------------------------------

  const [velocidad, setVelocidad] =
    useState(80);

  const [desaceleracion, setDesaceleracion] =
    useState(5);

  const [pesoCarga, setPesoCarga] =
    useState(0);

  const [posicionCarga, setPosicionCarga] =
    useState("Maletero");

  //------------------------------------------
  // Motor principal de simulación
  //------------------------------------------

  const resultado = simularSistema(

    vehiculo.masa,

    velocidad,

    desaceleracion,

    pesoCarga,

    posicionCarga,

    vehiculo

  );

  //------------------------------------------
  // Cinemática
  //------------------------------------------

  const distancia = calcularDistancia(

    velocidad,

    desaceleracion

  );

  const tiempo = calcularTiempo(

    velocidad,

    desaceleracion

  );

  //------------------------------------------
  // Autonomía
  //------------------------------------------

  const autonomia = calcularAutonomia(

    vehiculo,

    pesoCarga,

    velocidad

  );

  //------------------------------------------
  // Saturación del motor
  //------------------------------------------

  const saturacion = calcularSaturacionMotor(

    vehiculo,

    resultado.masaTotal,

    velocidad,

    desaceleracion

  );

  //------------------------------------------
  // Transferencia dinámica de peso
  //------------------------------------------

  const transferencia = calcularTransferenciaPeso(

    vehiculo,

    resultado.masaTotal,

    desaceleracion

  );

  //------------------------------------------
  // Simulación temporal
  //------------------------------------------

  const datosFrenado = simularFrenado(

    velocidad,

    desaceleracion,

    resultado.energia

  );
  return (

    <div className="app">

      <Header
        titulo="EcoFreno Simulator"
        subtitulo="Simulador Cinemático-Dinámico de Frenado Regenerativo"
      />

      <Dashboard>

        {/* =========================
            Vehículo
        ========================== */}

        <InfoCard titulo="Vehículo Eléctrico">

          <VehicleDatabase
            vehiculo={vehiculo}
            setVehiculo={setVehiculo}
          />

        </InfoCard>

        {/* =========================
            Carga
        ========================== */}

        <InfoCard titulo="Carga del Vehículo">

          <LoadSelector

            peso={pesoCarga}
            setPeso={setPesoCarga}

            posicion={posicionCarga}
            setPosicion={setPosicionCarga}

          />

        </InfoCard>

        {/* =========================
            Vista Superior
        ========================== */}

        <InfoCard titulo="Vista Superior">

          <VehicleCanvas

            posicionCarga={posicionCarga}

            motor={vehiculo.traccion}

            peso={pesoCarga}

          />

        </InfoCard>

        {/* =========================
            Parámetros
        ========================== */}

        <InfoCard titulo="Parámetros de Simulación">

          <div className="panel">

            <div>

              <label>Velocidad (km/h)</label>

              <input

                type="number"

                value={velocidad}

                onChange={(e)=>setVelocidad(Number(e.target.value))}

              />

            </div>

            <div>

              <label>Desaceleración (m/s²)</label>

              <input

                type="number"

                value={desaceleracion}

                onChange={(e)=>setDesaceleracion(Number(e.target.value))}

              />

            </div>

          </div>

        </InfoCard>

        {/* =========================
            Estado General
        ========================== */}

        <InfoCard titulo="Estado General">

          <VehicleStatus

            velocidad={velocidad}

            masa={resultado.masaTotal}

            bateria={vehiculo.bateria}

            autonomia={autonomia.autonomia}

            torque={resultado.torque}

            rpm={resultado.rpm}

            saturado={saturacion.saturado}

          />

        </InfoCard>
        {/* =========================
            Resultados Físicos
        ========================== */}

        <InfoCard titulo="Resultados Físicos">

          <PhysicsPanel
            energia={resultado.energia}
            distancia={distancia}
            tiempo={tiempo}
          />

        </InfoCard>

        {/* =========================
            Frenado Regenerativo
        ========================== */}

        <InfoCard titulo="Frenado Regenerativo">

          <RegenerationPanel

            energia={resultado.energiaRecuperada}

            eficiencia={0.70}

            porcentaje={saturacion.porcentajeUso}

            saturado={saturacion.saturado}

          />

        </InfoCard>

        {/* =========================
            Autonomía
        ========================== */}

        <InfoCard titulo="Autonomía Estimada">

          <AutonomyPanel

            autonomia={autonomia.autonomia}

            consumo={autonomia.consumo}

          />

        </InfoCard>

        {/* =========================
            Saturación del Motor
        ========================== */}

        <InfoCard titulo="Saturación del Motor">

          <MotorSaturationPanel

            fuerzaNecesaria={saturacion.fuerzaNecesaria}

            fuerzaRegenerativa={saturacion.fuerzaRegenerativa}

            porcentaje={saturacion.porcentajeUso}

            saturado={saturacion.saturado}

          />

        </InfoCard>

        {/* =========================
            Transferencia de Peso
        ========================== */}

        <InfoCard titulo="Transferencia Dinámica de Peso">

          <WeightTransferPanel

    delantero={transferencia.delantero}

    trasero={transferencia.trasero}

/>

        </InfoCard>

        {/* =========================
            Motor
        ========================== */}

        <InfoCard titulo="Motor Eléctrico">

          <p>

            <strong>Torque:</strong>{" "}

            {resultado.torque.toFixed(1)} Nm

          </p>

          <p>

            <strong>RPM:</strong>{" "}

            {resultado.rpm.toFixed(0)}

          </p>

        </InfoCard>

        {/* =========================
            Gráfico Energía
        ========================== */}

        <InfoCard titulo="Gráfico de Energía">

          <EnergyChart
    energia={resultado.energia}
    energiaRecuperada={resultado.energiaRecuperada}
/>

        </InfoCard>

        {/* =========================
            Gráfico Velocidad
        ========================== */}

        <InfoCard titulo="Velocidad durante el Frenado">

          <SpeedChart

            datos={datosFrenado}

          />

        </InfoCard>

      </Dashboard>

    </div>

  );

}

export default App;