import cls from './ErrorFallback.module.sass';
import {useNavigate} from "react-router-dom";
import {MAIN_PAGE} from "@/shared/lib/configs/paths.ts";

export const ErrorFallback = () => {
    const navigate = useNavigate();

    const handleClick = () => navigate(MAIN_PAGE)

    return (
        <section className={cls.error}>
            <div className={cls.error__wrapper}>
                <h1>Oops... Произошла ошибка</h1>
                <h3>Перезагрузите приложение</h3>
                <button onClick={handleClick}>Перезагрузить</button>
            </div>
        </section>
    )
}