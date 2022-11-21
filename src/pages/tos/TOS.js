import { Paper, Stack, Typography } from "@mui/material";
import React from "react";

function TOS() {

    const renderContent = () => {
        return (
            <>
                <Typography variant="h3" >Terms of Service</Typography>
                <Paper style={{ padding: '2em' }} >
                    <Stack spacing={2}>
                        <Typography>
                            By inviting NewWorldWarBot to your discord server you agree that you have read, understood, and accepted these terms. You are also responsible for informing the members in your discord server about these terms. If you do not agree with any of these terms, you are prohibited from using or adding any version of NewWorldWarBot to your server.
                        </Typography>
                        <Typography variant="h4" >Disclaimer</Typography>
                        <Typography>
                            You are strictly prohibited to use NewWorldWarBot against the ToS of discord or for illegal purposes. We are doing our best to prevent these activities, while trying to provide the best user experience as possible. If you find people or communities using NewWorldWarBot against the ToS of discord or even for illegal activities, please send me an email to <a href="mailto:dev@maciva.de">dev@maciva.de</a>.
                        </Typography>
                        <Typography variant="h4" >Availability</Typography>
                        <ul>
                            <li>NewWorldWarBot is provided as-is. There are no guarantees that it will be available in the future, and its purpose or availability may be changed at any time.</li>
                            <li>User related data including backups may be deleted at any time.</li>
                            <li>User related data including backups is non-transferable between discord accounts.</li>
                            <li>Access to all or specific features of NewWorldWarBot may be revoked, for all or a specific user, at any time.</li>
                        </ul>
                        <Typography>Last Updated: 22.11.2022</Typography>
                    </Stack>
                </Paper>
            </>
        )

    }

    return renderContent();

}

export default TOS;