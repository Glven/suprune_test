import {OrganizationBlockInfo, OrganizationType, Photo} from "@/entities/organization";
import {OrganizationBlockAddImg} from "@/features/organization/ui/OrganizationBlockButtons";
import {memo, ReactNode} from "react";
import cls from './OrganizationBlocks.module.sass';
import {Button} from "@/shared/ui/Button";
import {Trash} from "@/shared/ui/Icons";
import {observer} from "mobx-react-lite";
import {useOrganizationApi} from "@/features/organization";
import {toJS} from "mobx";

type Props = {
    organization: OrganizationType
}

const OrganizationPhotosComp = observer(({organization} : Props) => {
    const {photos} = organization;

    const {deleteOrganizationPhoto} = useOrganizationApi();

    const handlePhotoDelete = (image: Photo) => {
        deleteOrganizationPhoto(organization, toJS(image).name);
    }



    return (
        <OrganizationBlockInfo
            title={'Photos'}
            button={
                <OrganizationBlockAddImg organizationId={organization.id}/> as ReactNode
            }
        >
            <div className={cls.photos}>
                {photos.map(p =>
                    <div key={p.thumbpath} className={cls.photosItem}>
                        <img src={p.filepath} alt={p.name}/>
                        <div className={cls.photosItem__btn}>
                            <Button
                                type={'filled-icon'}
                                icon={<Trash/> as ReactNode}
                                onClick={() => handlePhotoDelete(p)}
                            />
                        </div>
                    </div>
                )}
            </div>
        </OrganizationBlockInfo>
    )
})

export const OrganizationPhotos = memo(OrganizationPhotosComp)