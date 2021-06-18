function Tarea({ tarea }) {
    //var a = tarea.tareas[0].split("()");
    console.log(tarea);
    var tareas = [];
    if (tarea.tareas) {
        tareas = tarea.tareas.toString().split(",");
        console.log(tareas);
    }

    return (
        <div className="card text-left" style={{ width: "100%",marginBottom:"10px" }} key={tarea.id}>
            <div className="row" style={{ textAlign: "center" }}>
                <div className="col-12">
                    <h4>Dia de Trabajo N° {tarea.id}</h4>
                    <div className="col-12">
                        {tareas.map((t) => (
                            <p>{t}</p>
                        ))}

                    </div>
                    <div className="task-meta">
                        <img
                            src="https://icongr.am/feather/calendar.svg?size=12&color=b5b5b5"
                            alt="calendar"
                        />

                    </div>
                </div>
                <div className="col-12 is-center">
                    <button className="button icon-only clear">
                        <img
                            src="https://icongr.am/feather/check-circle.svg?size=24&color=11d054"
                            alt="Open"
                        />
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Tarea;