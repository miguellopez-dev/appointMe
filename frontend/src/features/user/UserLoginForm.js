import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { selectCurrentUser, setCurrentUser } from './userSlice';
import defaultAvatar from '../../app/assets/imgs/default_avatar.png'
import {
    Avatar,
    Box,
    Dialog,
    DialogContent,
    DialogActions,
    DialogTitle,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Tooltip,
    Typography,
    TextField
} from '@mui/material';


const UserLoginForm = () => {
    const [open, setOpen] = useState(false);
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            username: '',
            password: ''
        }
    });
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleOpenLoginMenu = (event) => {
        setAnchorElLogin(event.currentTarget);
    };
    const handleCloseLoginMenu = () => {
        setAnchorElLogin(null);
    };

    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch()
    const handleLogin = (values) => {
        const currentUser = {
            avatar: defaultAvatar,
            username: values.username,
            password: values.password
        };
        dispatch(setCurrentUser(currentUser));
        handleClose();
        handleCloseLoginMenu();
    };
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [anchorElLogin, setAnchorElLogin] = useState(null);

    const handleLogout = () => {
        dispatch(setCurrentUser(null));
        handleClose();
        handleCloseUserMenu();
    }
    const settings = ['Profile', 'Logout'];
    return (
        <>
            {currentUser ? (
                <Box>
                    <Tooltip title='Open settings'>
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt='Profile Icon' src={defaultAvatar} />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id='menu-appbar'
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                {setting === 'Logout' ? (
                                    <Typography onClick={handleLogout} textAlign='center'>{setting}</Typography>
                                ) : (
                                    <Typography textAlign='center'>{setting}</Typography>
                                )}
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            ) : (
                <Box>
                    <Tooltip title='Login'>
                        <IconButton onClick={handleOpenLoginMenu} sx={{ p: 0 }}>
                            <Avatar alt='Profile Icon' />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id='menu-login'
                        anchorEl={anchorElLogin}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        open={Boolean(anchorElLogin)}
                        onClose={handleCloseLoginMenu}
                    >
                        <MenuItem onClick={handleCloseLoginMenu}>
                            <Typography textAlign='center' onClick={handleOpen}>Log In</Typography>
                        </MenuItem>
                    </Menu>
                </Box >
            )}
            <Dialog open={open} onClose={handleClose} ariea-aria-labelledby='Log in'>
                <DialogTitle>Login In</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <Controller
                            name='username'
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <TextField {...field} label='Username' fullWidth margin='normal' />}
                        />
                        <Controller
                            name='password'
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <TextField {...field} label='Password' fullWidth margin='normal' />}
                        />
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type='submit'>Log In</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default UserLoginForm;