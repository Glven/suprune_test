import {Input} from "@/shared/ui/Input";
import {Button} from "@/shared/ui/Button";
import {useState} from "react";
import {api} from "@/shared/api/api.ts";
import {observer} from "mobx-react-lite";
import {useStore} from "@/app/providers/store-providers.tsx";

const LoginFormComp = () => {
    const [login, setLogin] = useState<string|null>(null);
    const {userStore} = useStore()

    const handleLoginInputChange = (value: string) => {
        setLogin(value);
    }


    const auth = async(user: string) => {
        try {
            const response = await api.get('/auth', {
                params: {
                    user
                }
            });

            const {status, headers: {authorization}} = response;

            if (status !== 200 || !authorization) return;

            userStore.setIsAuth(true);
            userStore.setToken(authorization.split(' ')[1]);
        } catch (e) {
            console.error(e);
            alert('Ошибка авторизации')
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!login) return;

        auth(login);
    }

    return (
        <form
            onSubmit={handleSubmit}
            style={{width: 300}}
        >
            <h1
                style={{
                    fontSize: 24,
                    fontWeight: 600,
                    marginBottom: 20,
                    textAlign: "center",
                    color: "var(--secondary)"
                }}
            >
                Авторизация
            </h1>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 20
                }}
            >
                <Input
                    required
                    handleChange={handleLoginInputChange}
                    placeholder={'Логин'}
                />
                <Button
                    type={'filled'}
                    htmlType={'submit'}
                >
                    Войти
                </Button>
            </div>
        </form>
    )
}

export const LoginForm = observer(LoginFormComp)