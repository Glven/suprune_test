import cls from './OrganizationCard.module.sass';
import {OrganizationType} from "@/entities/organization";
import {useNavigate} from "react-router-dom";
import {ORGANIZATIONS_PAGE} from "@/shared/lib/configs/paths.ts";

type Props = {
    organization: OrganizationType
}

export const OrganizationCard = ({organization}: Props) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`${ORGANIZATIONS_PAGE}/${organization.id}`)
    }

    return (
        <div
            className={cls.card}
            onClick={handleClick}
        >
            <h2 className={cls.card__title}>{organization.name} ({organization.shortName})</h2>
            <p className={cls.card__date}>{new Date(organization.createdAt).toLocaleDateString()}</p>
        </div>
    )
}