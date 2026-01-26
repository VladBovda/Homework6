import React, {useState, useEffect} from 'react';
import { Snackbar, Alert } from '@mui/material';

const PageError = () => {
    const [state, setState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const { vertical, horizontal, open } = state;

    useEffect(() => {
        setState({ ...state, open: true });
    }, []);

    const handleClose = () => {
        setState({ ...state, open: false });
    }
    
    return (
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            message="Error, invalid page!"
            key={"errorMessage"}
            >
            <Alert severity="error">Error, invalid page!</Alert>
        </Snackbar>
    )
}

export default PageError;