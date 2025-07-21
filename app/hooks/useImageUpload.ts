import { useMutation } from "@tanstack/react-query"
import { useMemo } from "react"
import { toast } from "sonner"
import { uploadImage } from "~/lib/uploadImage"

export const useImageUpload = () => {
    const { data: uploadedImage, mutateAsync: imageUpload, isPending: isImageUploading, error: imageUploadError, isSuccess: isImageUploaded } = useMutation({
        mutationKey: ['upload image'],
        mutationFn: (data: File) =>
            uploadImage(data),
        onSuccess(data) {
            // console.log(data)
        },
        onError(error) {
            toast.error("Ошибка при загрузке изображения. Попробуйте позже :( ")
            console.log(error.message)
        }
    })

    return useMemo(
        () => ({
            uploadedImage, imageUpload, isImageUploading, imageUploadError, isImageUploaded
        }),
        [uploadedImage, imageUpload, isImageUploading, imageUploadError, isImageUploaded]
    )
}