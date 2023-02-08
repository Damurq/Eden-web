const filterResult = (data) => {
    try {
        let fases = data?.data?.length ? data?.data?.filter((tournament) => {
            return (tournament?.fase_de_torneo?.length)
        }) : []
        let fase = fases.filter((tournament) => (tournament.fase_de_torneo[0]?.calendario))
        fase = fase.map((game) => {
            game.fase_de_torneo = game.fase_de_torneo[0]?.calendario
            return game
        })
        let filtro = fase?.map((tournament) => {
            let object_preparation = {
                id: tournament?.id,
                tournament: tournament?.nombre,
                data: (tournament?.fase_de_torneo?.length) ? tournament?.fase_de_torneo?.filter((game) => {
                    return game?.equipo_ganador
                }) : []
            }
            object_preparation["data"] = object_preparation?.data?.map((game) => {
                let obj_final = {
                    teams: [{ nombre: game?.equipo_a?.nombre, logo: game?.equipo_a?.logo },
                         { nombre: game?.equipo_b?.nombre, logo: game?.equipo_a?.logo  }],
                    status: "Finalizado",
                    winner: game?.equipo_ganador?.nombre,
                    date: game?.equipo_ganador?.creado,
                }
                return obj_final
            })
            return object_preparation
        })
        filtro = filtro.filter((element) => element?.data?.length)
        return filtro
    } catch (error) {

        return []
    }

}


module.exports = {
    filterResult
}