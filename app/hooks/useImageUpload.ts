import { useMutation } from "@tanstack/react-query"
import { useMemo } from "react"
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
            console.log(error)
        }
    })

    return useMemo(
        () => ({
            uploadedImage, imageUpload, isImageUploading, imageUploadError, isImageUploaded
        }),
        [uploadedImage, imageUpload, isImageUploading, imageUploadError, isImageUploaded]
    )
}