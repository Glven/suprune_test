import {OrganizationType, Photo} from "@/entities/organization";
import {api} from "@/shared/api/api.ts";
import {useStore} from "@/app/providers/store-providers.tsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {ORGANIZATIONS_PAGE} from "@/shared/lib/configs/paths.ts";
import {toJS} from "mobx";

export const useOrganizationApi = () => {
    const {organizationStore} = useStore();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchComp = async(id: number) => {
        setIsLoading(true);

        try {

            const {data} = await api.get<OrganizationType>(`/companies/${id}`);

            if (!data) return;

            organizationStore.setOrganization(data);

        } catch (e) {
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    }




    const updateOrganizationData = async(organization: OrganizationType) => {
        const {
            name,
            shortName,
            businessEntity,
            id,
            contract,
            type
        } = organization;

        try {
            const {data} = await api.patch(`/companies/${id}`, {
                name,
                shortName,
                businessEntity,
                contract,
                type
            })

            if (!data) return;

            organizationStore.setOrganization({...organizationStore.organization, ...data});

            alert('Данные обновлены');
        } catch (e) {
            console.error(e)
        }
    }

    const deleteOrganizationPhoto = async(organization: OrganizationType, imageName: string) => {


        const {
            photos,
            id
        } = toJS(organization);

        try {
            const {status} = await api.delete(`/companies/${id}/image/${imageName}`);

            if (status !== 200) return;

            organizationStore.setOrganization(
                {
                    ...organization,
                    photos: photos.filter(photo => photo.name !== imageName)
                }
            );

            alert(`Фотография ${imageName} успешно удалена`)

        } catch (e) {
            console.error(e);
            alert('Ошибка удаления изображения');
        }

    }

    const addOrganizationPhoto = async(id: string, file: File) => {


        try {

            const formData = new FormData();
            formData.append('file', file);

            const {data} = await api.post(`/companies/${id}/image`, formData)

            if (!data) return;


            if (organizationStore.organization) {
                organizationStore.setOrganization({
                    ...organizationStore.organization,
                    photos: [...organizationStore.organization.photos, data] as Photo[]
                })
            }

        } catch (e) {
            console.error(e);
            alert('Оишбка добавления изображения');
        }

    }

    const deleteOrganization = async(id: string) => {

        try {
            const {status} = await api.delete(`/companies/${id}`);

            if (status !== 200) return;

            alert('Организация успешно удалена');
            organizationStore.setOrganization(null);
            navigate(ORGANIZATIONS_PAGE);

        } catch (e) {
            console.error(e);
            alert('Ошибка удаления организации')
        }
    }

    return {
        updateOrganizationData,
        organization: organizationStore.organization,
        fetchComp,
        isLoading,
        deleteOrganization,
        deleteOrganizationPhoto,
        addOrganizationPhoto
    }
}