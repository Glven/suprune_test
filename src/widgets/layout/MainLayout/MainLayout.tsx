import {Outlet} from "react-router-dom";
import cls from './MainLayout.module.sass';
import {Sider} from './Sider.tsx';

export const MainLayout = () => {
    return (
        <section className={cls.layout}>
            <Sider/>
            <div className={cls.layout__content}>
                <Outlet/>
            </div>
        </section>
    )
}