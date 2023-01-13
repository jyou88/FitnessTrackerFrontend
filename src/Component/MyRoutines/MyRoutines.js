import React, { useState } from 'react';
import './MyRoutines.css';
//import useApi from '../../hooks/useApi';

const MyRoutines = () => {
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
                            class="MyRoutineName"
                            value={routine}
                            type="text"
                            placeholder="add routine"
                            onChange={(event) => setRoutine(event.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label>Goal: </label>
                        <input
                            class="MyRoutineGoal"
                            value={goal}
                            type="text"
                            placeholder="add goal"
                            onChange={(event) => setGoal(event.target.value)}></input>
                    </div>
                    <div>
                        <button>Create</button>
                    </div>
                </form>
            </header>
        </body>
    </>;
};

export default MyRoutines;