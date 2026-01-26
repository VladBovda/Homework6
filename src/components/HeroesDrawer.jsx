import React from "react";
import { Drawer, Box, Typography, Avatar, Divider, Chip } from "@mui/material";

const HeroesDrawer = ({ open, onClose, character }) => {
    if (!character) return null;

    const description = `${character.species}${character.type ? ` - ${character.type}` : ''} from ${character.origin?.name || 'Unknown'}. Currently ${character.status?.toLowerCase() || 'unknown'} and last seen at ${character.location?.name || 'Unknown'}.`;

    return (
        <Drawer 
            anchor="right" 
            open={open} 
            onClose={onClose}
        >
            <Box sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                    <Avatar
                        src={character.image}
                        alt={character.name}
                        sx={{ width: 200, height: 200, mb: 2 }}
                    />
                    <Typography variant="h4" component="h2" gutterBottom align="center">
                        {character.name}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                        <Chip 
                            label={character.status} 
                            color={character.status === 'Alive' ? 'success' : character.status === 'Dead' ? 'error' : 'default'}
                            size="small"
                        />
                        <Chip 
                            label={character.species} 
                            variant="outlined"
                            size="small"
                        />
                        {character.gender && (
                            <Chip 
                                label={character.gender} 
                                variant="outlined"
                                size="small"
                            />
                        )}
                    </Box>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h6" gutterBottom>
                    Description
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                    {description}
                </Typography>

                {character.origin && (
                    <>
                        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                            Origin
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {character.origin.name}
                        </Typography>
                    </>
                )}

                {character.location && (
                    <>
                        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                            Location
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {character.location.name}
                        </Typography>
                    </>
                )}
            </Box>
        </Drawer>
    );
};

export default HeroesDrawer;
