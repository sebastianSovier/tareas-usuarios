function Tarea({ tarea }) {
    //var a = tarea.tareas[0].split("()");
    console.log(tarea);
    return (
        <div className="card text-left" key={tarea.id}>
            <div className="row">
                <div className="col-12">
                    <h4>Dia de Trabajo N° {tarea.id}</h4>
                    <div className="task-meta">
                        <img
                            src="https://icongr.am/feather/calendar.svg?size=12&color=b5b5b5"
                            alt="calendar"
                        />

                    </div>
                </div>

                <div className="col-2 is-center">
                    <button className="button icon-only clear">
                        <img
                            src="https://icongr.am/feather/check-circle.svg?size=24&color=11d054"
                            alt="Open"
                        />
                    </button>
                </div>
                <div className="col-10">
                    <p>{tarea.tareas}</p>
                </div>
            </div>
        </div>
    );
}

export default Tarea;