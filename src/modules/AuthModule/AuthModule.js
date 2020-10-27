import React from "react";
import {useDispatch} from "react-redux";
import Auth from "components/Auth";
import {useFormik} from "formik";
import authSchema from "components/Auth/yup";
import {authUser} from "redux-toolkit/auth/actions/authUser";

const AuthModule = () => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
        },
        validationSchema: authSchema,
        onSubmit: values => dispatch(authUser(values))
    })
    return (
        <Auth formik={formik}/>
    )
}

export default AuthModule