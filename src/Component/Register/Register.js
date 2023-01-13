import * as React from "react";
import Avatar from "@Mui/material/Avatar";
import Button from "@Mui/material/Button";
import CssBaseline from "@Mui/material/CssBaseline";
import TextField from "@Mui/material/TextField";
import Box from "@Mui/material/Box";
import LockOutlinedIcon from "@Mui/icons-material/LockOutlined";
import Typography from "@Mui/material/Typography";
import Container from "@Mui/material/Container";
import { createTheme, ThemeProvider } from "@Mui/material/styles";
import { registerUser } from "../../api/auth";
const theme = createTheme();
export default function MUILogin() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            username: data.get("username"),
            password: data.get("password"),
        });
        registerUser(data.get("username"), data.get("password"));
    };
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Create Account
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Register
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}






// import React, { useState, useEffect } from "react";
// import { fetchMe } from "../../api/auth";
// import { registerUser } from "../../api/auth";

// const Register = ({ token, setToken, user, setUser }) => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     return (
//         <div>
//             <h1>Register</h1>
//             <form
//                 onSubmit={async (event) => {
//                     try {
//                         event.preventDefault();

//                         const token = await registerUser(username, password);
//                         setToken(token);
//                         localStorage.setItem("token", token);
//                     } catch (error) {
//                         console.error(error);
//                     }
//                 }}
//             >
//                 <label htmlFor="username">Username :</label>
//                 <input
//                     value={username}
//                     type="text"
//                     required
//                     minLength={5}
//                     placeholder="username"
//                     onChange={(event) => setUsername(event.target.value)}
//                 ></input>
//                 <label htmlFor="password">Password :</label>
//                 <input
//                     value={password}
//                     type="password"
//                     required
//                     minLength={7}
//                     placeholder="password"
//                     onChange={(event) => setPassword(event.target.value)}
//                 ></input>
//                 <button type="submit">Register</button>
//             </form>
//         </div>
//     );
// };
// export default Register;