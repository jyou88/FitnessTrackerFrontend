import React, { useState } from 'react';
import './Routines.css'

const Routines = () => {
    const [routine, setRoutine] = useState("");
    const [goal, setGoal] = useState("");
    return <>
        <body>
            <header>
                <form>
                    <div class="title">
                        <h1>Routines</h1>
                    </div>
                    <div>
                        <label>Routine Name: </label>
                        <input
                            class="RoutineName"
                            value={routine}
                            type="text"
                            placeholder="add routine"
                            onChange={(event) => setRoutine(event.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label>Goal: </label>
                        <input
                            class="RoutineGoal"
                            value={goal}
                            type="text"
                            placeholder="add goal"
                            onChange={(event) => setGoal(event.target.value)}></input>
                    </div>
                    <button>Create</button>
                </form>
            </header>
        </body>
    </>;
};
export default Routines