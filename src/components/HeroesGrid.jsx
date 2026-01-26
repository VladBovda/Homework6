import React, { useState, useEffect, useCallback } from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import HeroesDrawer from './HeroesDrawer.jsx';

const API = 'https://rickandmortyapi.com/api/character';

const HeroesGrid = () => {
    const [characters, setCharacters] = useState([]);
    const [paginationModel, setPaginationModel] = useState({
        page: 0,
        pageSize: 20,
    });
    const [rowCount, setRowCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const loadPage = useCallback(async (page = 1) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`${API}?page=${page}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            
            setCharacters(data.results || []);
            setRowCount(data.info?.count || 0);
        } catch (err) {
            setError('Error loading data');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const handleRowClick = (params) => {
        setSelectedCharacter(params.row);
        setDrawerOpen(true);
    };

    useEffect(() => {
        loadPage(paginationModel.page + 1);
    }, [paginationModel.page, loadPage]);

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 100,
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 200,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
    ];

    return (
        <Box sx={{ 
            p: 3, 
            pl: 10, 
            width: '100%',
            boxSizing: 'border-box',
        }}>
            <Box sx={{ 
                height: '700px',
                width: '100%',
                maxWidth: '100%',
            }}>
                <DataGrid
                    rows={characters}
                    columns={columns}
                    paginationMode="server"
                    rowCount={rowCount}
                    loading={isLoading}
                    paginationModel={paginationModel}
                    onPaginationModelChange={setPaginationModel}
                    onRowClick={handleRowClick}
                    getRowId={(row) => row.id}
                    sx={{
                        width: '100%',
                        height: '100%',
                        '& .MuiDataGrid-root': {
                            width: '100%',
                        }
                    }}
                />
            </Box>

            <HeroesDrawer 
                open={drawerOpen} 
                onClose={() => setDrawerOpen(false)} 
                character={selectedCharacter}
            />

            {error && (
                <Typography color="error" sx={{ mt: 2 }}>
                    {error}
                </Typography>
            )}
        </Box>
    );
};

export default HeroesGrid;