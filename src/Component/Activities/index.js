import React, { useState } from 'react';
import './style.css'

const Activities = () => {
    const [activity, setActivity] = useState("");
    const [description, setDescription] = useState("");
    return <>
        <body>
            <header>
                <form>
                    <div class="title">
                        <h1>Activities</h1>
                    </div>
                    <div>
                        <label>Activity Name: </label>
                        <input
                            value={activity}
                            type="text"
                            placeholder="name"
                            onChange={(event) => setActivity(event.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label>Description: </label>
                        <input
                            class="ActivityDescription"
                            value={description}
                            type="text"
                            placeholder="description"
                            onChange={(event) => setDescription(event.target.value)}></input>
                    </div>
                    <button>Create</button>
                </form>
            </header>
        </body>
    </>;
};

export default Activities