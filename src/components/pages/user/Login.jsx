import React from 'react';
import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    CssBaseline,
    FormControlLabel, Grid, Link,
    TextField,
    Typography
} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useDispatch} from "react-redux";
import {login} from "../../../assets/api/user";

const schema = yup.object().shape({
    user: yup.string().required('Это поле должно быть заполнено').min(2, 'Количество символов не может быть меньше 2').max(60, 'Количество символов не может быть больше 60'),
    password: yup.string().required('Это поле должно быть заполнено').min(8, 'Количество символов не может быть меньше 8').max(60, 'Количество символов не может быть больше 60'),
})

const Login = ({onRegister}) => {
    const dispatch = useDispatch()

    const {
        handleSubmit,
        register,
        formState: {
            errors,
            isValid,
        },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
        mode: "all",
        reValidateMode: 'onChange',
        criteriaMode: "firstError",
        shouldFocusError: true,
        shouldUnregister: true,
    })

    const onSubmit = (event) => {
        dispatch(login(event.user, event.password))
        reset()
    };

    return (
        <Container component="main" maxWidth="xs">

            <CssBaseline/>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minHeight: 621,
                }}
                component='div'>
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Войти в личный кабинет
                </Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{mt: 1}}>
                    <TextField
                        {...register('user')}
                        error={!!errors.user}
                        margin="normal"
                        required
                        fullWidth
                        id="user"
                        label="Логин или email адрес"
                        name="user"
                        autoComplete="user"
                        autoFocus
                        helperText={errors?.user?.message}
                    />
                    <TextField
                        {...register('password')}
                        error={!!errors.password}
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Пароль"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        helperText={errors?.password?.message}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary"/>}
                        label="Запомнить меня"
                    />
                    <Button
                        type="submit"
                        disabled={!isValid}
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Войти
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Забыли пароль?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link onClick={onRegister} href="#" variant="body2">
                                {"Нет аккаунта? Зарегистрируйтесь"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;