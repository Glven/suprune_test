import cls from './OrganizationPage.module.sass';
import {useParams} from "react-router";
import {ReactNode, useEffect, useState} from "react";
import {
    OrganizationContact,
    OrganizationDetails,
    OrganizationPhotos, OrganizationTitleButtons,
    useFetchOrganization
} from "@/features/organization";
import {useFetchContact} from "@/features/contact";
import {Loading} from "@/shared/ui/Loading";
import {OrganizationTitle} from "@/entities/organization";
import {BackButton} from "@/features/BackButton";

const OrganizationPage = () => {

    const {id} = useParams();
    const {organization, fetchComp, isLoading: orgLoading} = useFetchOrganization();
    const {contact, fetchContact, isLoading: conLoading} = useFetchContact();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(conLoading && orgLoading);
    }, [conLoading, organization]);

    useEffect(() => {

        if (!id) return;

        fetchComp(+id);

    }, [id]);

    useEffect(() => {

        if (!organization) return;

        fetchContact(organization.contactId);

    }, [organization]);

    if (isLoading) return <Loading />;

    if (!organization) return <h1>Организация не найдена</h1>

    return (
        <section className={cls.org}>

            <div className="container">

                <OrganizationTitle
                    backBtn={<BackButton/> as ReactNode}
                    title={organization.name}
                    buttons={
                        <OrganizationTitleButtons
                            organization={organization}
                        /> as ReactNode
                    }
                />

                <div className={cls.org__blocks}>
                    <OrganizationDetails organization={organization}/>
                    <OrganizationContact contact={contact}/>
                    <OrganizationPhotos organization={organization}/>
                </div>

            </div>

        </section>
    )
}

export default OrganizationPage;