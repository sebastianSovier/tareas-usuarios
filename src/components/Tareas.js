import Tarea from "./Tarea";

function Tareas({ tareas }) {
    return (
        <div className="row">
            <div className="col-12 text-center">
                <div className="col-12 text-center">Horas Trabajadas: {tareas[0].total_horas}</div>

                <div className="col-12 text-center">Dias Trabajo: {tareas[0].dias_trabajo} Dias</div>
                <div className="col-12 text-center">total Horas Por Jornada: {tareas[0].horas_jornadas} Horas</div>
            </div>
            {tareas[0].jornadas.map((tarea) => (
                <Tarea tarea={tarea} key={tarea.id} />
            ))}
            <div className="col-12"></div>
        </div>
    );
}

export default Tareas;