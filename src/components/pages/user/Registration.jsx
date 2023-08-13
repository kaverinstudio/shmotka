import React from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
    Avatar,
    Box, Button,
    Checkbox,
    Container,
    CssBaseline,
    FormControlLabel,
    Grid, Link,
    TextField,
    Typography
} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {useDispatch} from "react-redux";
import {registration} from "../../../assets/api/user";

const schema = yup.object().shape({
    name: yup.string().required('Это поле должно быть заполнено').min(2, 'Количество символов не может быть меньше 2').max(60, 'Количество символов не может быть больше 60'),
    email: yup.string().required('Это поле должно быть заполнено').email('Введите действительный Email адрес'),
    password: yup.string().required('Это поле должно быть заполнено').min(8, 'Количество символов не может быть меньше 8').max(60, 'Количество символов не может быть больше 60')
})

const Registration = ({onLogin}) => {
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isValid
        },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
        mode: "all",
        reValidateMode: 'onChange',
        criteriaMode: "firstError",
        shouldFocusError: true,
        shouldUnregister: true

    })

    const onSubmit = (event) => {
        dispatch(registration(event.name, event.email, event.password))
        reset()
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minHeight: 621,
                }}
            >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Регистрация на сайте
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    {...register('name')}
                                    error={!!errors.name}
                                    autoComplete="given-name"
                                    name="name"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Логин"
                                    autoFocus
                                    helperText={errors?.name?.message}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    {...register('email')}
                                    error={!!errors.email}
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email адрес"
                                    name="email"
                                    autoComplete="email"
                                    helperText={errors?.email?.message}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    {...register('password')}
                                    error={!!errors.password}
                                    required
                                    fullWidth
                                    name="password"
                                    label="Пароль"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    helperText={errors?.password?.message}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="Я хочу получать новости и уведомления об акциях на Email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            disabled={!isValid}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Зарегистрироваться
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link onClick={onLogin} href="#" variant="body2">
                                    Уже есть аккаунт? Войдите
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
            </Box>
        </Container>
    );
};

export default Registration;