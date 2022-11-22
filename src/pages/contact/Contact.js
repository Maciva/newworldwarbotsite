import { Paper, Stack, Typography } from "@mui/material";
import React from "react";

function Contact() {

    const renderContent = () => {
        return (
            <>
                <Typography variant="h3" >Contact</Typography>
                <Paper style={{ padding: '2em' }} >
                    <Stack spacing={2}>
                        <Typography>Mail: <a href="mailto:dev@maciva.de">dev@maciva.de</a></Typography>
                        <Typography>Discord: <a href="https://discord.com/users/425613804852871179">here</a></Typography>
                    </Stack>
                </Paper>
            </>
        )

    }

    return renderContent();

}

export default Contact;