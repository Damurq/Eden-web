import React from 'react'
import TournamentInfo from './TournamentInfo/TournamentInfo'
import moment from 'moment';
import PopUpCard from './PopUpCard/PopUpCard'
import PopUpCardActive from './PopUpCardActive/PopUpCardActive'
import './TournamentDetail.css'

const TournamentDetail = ({ tounamentData }) => {

  const date = tounamentData?.fecha_inicio
    ? moment(tounamentData.fecha_inicio, "DD-MM-YYYY")
    : null;
  const hour = tounamentData?.fecha_inicio
    ? moment(tounamentData.fecha_inicio, 'HH:mm:ss')
    : null;

  return (
    <div className='container-tournament-details'>
      {(tounamentData && tounamentData?.nombre) && <TournamentInfo
        name={tounamentData?.nombre}
        description={tounamentData?.descripcion}
        date={date.format('DD-MM-YYYY')}
        hour={hour.format('HH:mm:ss')}
        img={tounamentData?.imagen_principal}
      />}
      <div className="container-cards">
        {(tounamentData?.instalacion?.area?.nombre && tounamentData?.instalacion?.nombre) && <PopUpCard icon="location">
          <div className="details">
            <h2 >
              Lugar
            </h2>
            <div className="">
              <p>
                Área: {tounamentData.instalacion.area.nombre}
              </p>
              <p>
                Instalación: {tounamentData.instalacion.nombre}
              </p>
            </div>
          </div>
        </PopUpCard>}
        {tounamentData?.fase_de_torneo?.length ? tounamentData?.fase_de_torneo?.map((fase) =>
        (<div className="PopUpCardActive-container">
          {(fase?.fase?.nombre) && <PopUpCardActive icon="phase">
            <div className="details">
              <h2 >
                Fase {fase?.fase?.nombre}
              </h2>
              <div className="">
                <p>
                  Descripción: {fase?.fase?.descripcion}
                </p>
              </div>
            </div>
          </PopUpCardActive>}
          {(fase?.modalidad?.nombre) && <PopUpCardActive icon="mode">
            <div className="details">
              <h2 >
                Modalidad {fase?.modalidad?.nombre}
              </h2>
              <div className="">
                <p>
                  Descripción: {fase?.modalidad?.descripcion}
                </p>
                <p>
                  Vueltas: {fase?.modalidad?.vueltas}
                </p>
              </div>
            </div>
          </PopUpCardActive>}
        </div>)
        ): null}

      </div>
    </div>
  )
}

export default TournamentDetail