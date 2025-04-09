import cls from "./MainLayout.module.sass";
import {Link, useNavigate} from "react-router-dom";
import {MAIN_PAGE, ORGANIZATIONS_PAGE} from "@/shared/lib/configs/paths.ts";
import {Archive, Briefcase, Logo, Menu, Search, Settings, SignOut, Users} from "@/shared/ui/Icons";
import {Button} from "@/shared/ui/Button";
import {ReactNode, useState} from "react";
import {clsx} from "clsx";
import {observer} from "mobx-react-lite";
import {useStore} from "@/app/providers/store-providers.tsx";

export const Sider = observer(() => {

    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();
    const {userStore} = useStore();

    const handleMenuClick = () => {
        setIsOpen(prev => !prev);
    }

    const handleLogOut = () => {
        userStore.logout();
    }

    return (
        <aside className={cls.sider}>

            <div className={cls.sider__panel}>


                <div className={cls.sider__panelTop}>
                    <Link to={MAIN_PAGE}>
                        <Logo/>
                    </Link>
                    <button
                        onClick={() => navigate(ORGANIZATIONS_PAGE)}
                        className={cls.sider__btn}
                    >
                        <Briefcase/>
                    </button>
                    <button
                        className={cls.sider__btn}
                    >
                        <Search/>
                    </button>
                </div>

                <div className={cls.sider__panelBottom}>

                    <button
                        className={cls.sider__btn}
                        onClick={handleMenuClick}
                    >
                        <Menu/>
                    </button>

                    <button
                        className={cls.sider__btn}
                    >
                        <Settings/>
                    </button>
                    <button
                        className={cls.sider__btn}
                        onClick={handleLogOut}
                    >
                        <SignOut/>
                    </button>
                </div>


            </div>


            <div className={clsx(
                cls.siderMenu,
                {
                    [cls.siderMenuInactive]: !isOpen
                })
            }
            >

                <div>

                    <div>
                        <h3 className={cls.siderMenu__title}>
                            Oak Tree Cemetery
                        </h3>

                        <span className={cls.siderMenu__subtitle}>
                            Process Manager
                        </span>
                    </div>

                    <div className={cls.siderMenu__divider}></div>

                    <div className={cls.siderMenu__buttons}>

                        <Button
                            type={'filled'}
                            icon={<Briefcase/> as ReactNode}
                            onClick={() => navigate(ORGANIZATIONS_PAGE)}
                        >
                            Organizations
                        </Button>

                        <Button
                            type={'outlined'}
                            icon={<Archive/> as ReactNode}
                        >
                            Contractors
                        </Button>

                        <Button
                            type={'outlined'}
                            icon={<Users/> as ReactNode}
                        >
                            Clients
                        </Button>
                    </div>
                </div>

                <p className={cls.siderMenu__copy}>
                    All Funeral Services © 2015-2025
                </p>
            </div>


        </aside>
    )
})