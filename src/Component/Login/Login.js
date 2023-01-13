import * as React from "react";
import Avatar from "@Mui/material/Avatar";
import Button from "@Mui/material/Button";
import CssBaseline from "@Mui/material/CssBaseline";
import TextField from "@Mui/material/TextField";
import Link from "@Mui/material/Link";
import Box from "@Mui/material/Box";
import LockOutlinedIcon from "@Mui/icons-material/LockOutlined";
import Typography from "@Mui/material/Typography";
import Container from "@Mui/material Container";
import { createTheme, ThemeProvider } from "@Mui/material/styles";
import { login } from "../../api/auth";

const theme = createTheme();
export default function MUILogin() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            username: data.get("username"),
            password: data.get("password"),
        });
        login(data.get("username"), data.get("password"));
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
                        Log in!
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
                            Log In
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}