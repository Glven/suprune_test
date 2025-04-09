import cls from './Login.module.sass'
import {LoginForm} from "@/features/auth";

const Login = () => {
    return (
        <section className={cls.login}>
            <LoginForm/>
        </section>
    )
}

export default Login