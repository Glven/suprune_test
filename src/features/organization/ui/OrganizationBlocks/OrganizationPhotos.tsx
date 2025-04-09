import {OrganizationBlockInfo, OrganizationType} from "@/entities/organization";
import {OrganizationBlockAddImg} from "@/features/organization/ui/OrganizationBlockButtons";
import {memo, ReactNode} from "react";
import cls from './OrganizationBlocks.module.sass';
import {Button} from "@/shared/ui/Button";
import {Trash} from "@/shared/ui/Icons";

type Props = {
    organization: OrganizationType
}

const OrganizationPhotosComp = ({organization} : Props) => {
    const {photos} = organization;

    const handleAddPhotoClick = () => {
    }

    return (
        <OrganizationBlockInfo
            title={'Photos'}
            button={
                <OrganizationBlockAddImg
                    handleClick={handleAddPhotoClick}
                /> as ReactNode
            }
        >
            <div className={cls.photos}>
                {photos.map(p =>
                    <div key={p.thumbpath} className={cls.photosItem}>
                        <img src={p.filepath} alt={p.name}/>
                        <div className={cls.photosItem__btn}>
                            <Button type={'filled-icon'} icon={<Trash/> as ReactNode}/>
                        </div>
                    </div>
                )}
            </div>
        </OrganizationBlockInfo>
    )
}

export const OrganizationPhotos = memo(OrganizationPhotosComp)