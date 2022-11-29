import { Box, Button, List, ListItem, Paper, Typography } from "@mui/material";
import React from "react";

function Home() {

    const renderContent = () => {
        return (
            <>
                <Typography variant="h3" >Installation</Typography>
                <Paper style={{ padding: '2em' }} >
                    <List>
                        <ListItem>
                            <Typography>1. Invite NewWorldWarBot to your Discordserver by pressing here:</Typography>
                        </ListItem>
                        <ListItem>
                            <Button
                                href="https://discord.com/oauth2/authorize?client_id=962099365672001586&permissions=3155968&scope=applications.commands%20bot"
                                variant="contained"
                                size="large"
                                style={{
                                    width: '15em',
                                    marginTop: '1em'
                                }}
                            >
                                Discord
                            </Button>
                        </ListItem>
                        <ListItem>
                            <Typography component="div" >
                                Type
                                <Box style={{ fontFamily: 'Monospace' }} display='inline' > /help </Box>
                                in a textchannel for further instructions
                            </Typography>
                        </ListItem>
                    </List>

                </Paper>
            </>
        )

    }

    return renderContent();

}

export default Home;