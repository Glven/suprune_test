import {api} from "@/shared/api/api.ts";
import {useEffect, useState} from "react";
import {OrganizationCard, OrganizationType} from "@/entities/organization";
import cls from './OrganizationsPage.module.sass';
import {useFetchOrganization} from "@/features/organization";

const OrganizationsPage = () => {

    const [organizations, setOrganizations] = useState<OrganizationType[]>([]);

    const {organization, fetchComp} = useFetchOrganization();

    useEffect(() => {

        if (!organization) return;

        setOrganizations([organization]);

    }, [organization]);

    useEffect(() => {
        fetchComp(12)
    }, []);

    return (
        <section className={cls.organizations}>
            <div className="container">
                {organizations.length === 0 ?
                    <h1>Организаций нет</h1> :
                    <div className={cls.organizations__list}>
                        {organizations.map(org =>
                            <OrganizationCard key={org.id} organization={org}/>
                        )}
                    </div>
                }
            </div>
        </section>
    )
}

export default OrganizationsPage