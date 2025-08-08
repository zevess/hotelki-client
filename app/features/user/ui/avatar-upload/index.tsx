import React from 'react'
import { CustomButton } from '~/components/custom-button';
import { Avatar, AvatarImage } from '~/components/ui/avatar';
import { Input } from '~/components/ui/input';


interface Props {
    className?: string;
    avatar?: string | null
    setImage: React.Dispatch<React.SetStateAction<File | null>>,
    setDefaultImage: React.Dispatch<React.SetStateAction<boolean>>,
    isDefaultImage: boolean
}

export const AvatarUploader: React.FC<Props> = ({ avatar, setImage, setDefaultImage, isDefaultImage }) => {

    const [file, setFile] = React.useState<string | null>(avatar ? avatar : null);
    const fileInputRef = React.useRef<HTMLInputElement>(null)

    const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setImage(event.target.files[0]);
            const fileUrl = URL.createObjectURL(event.target.files[0]);
            setFile(fileUrl);
        }
    };

    const triggerFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }

    return (
        <div className='flex flex-wrap items-center gap-5 mt-3 '>
            {file && <Avatar className='w-[56px] h-[56px]'>
                <AvatarImage src={isDefaultImage ? "https://i.ibb.co/chBSqBxn/default-avatar.jpg" : file} />
            </Avatar>}
            <Input type='file' accept='image/*' className='hidden' ref={fileInputRef} onChange={handleImageSelect} />
            <div className='flex flex-wrap gap-5'>
                <CustomButton variant='purple' onClick={triggerFileInput}>Сменить фото</CustomButton>
                <CustomButton variant='redOutline' onClick={() => setDefaultImage(true)}>Удалить фото</CustomButton>
            </div>

        </div>
    );
};
