// import { useForm, type SubmitHandler } from "react-hook-form"
// import { useMutation } from '@tanstack/react-query'
// import type { IAuthForm } from "~/lib/types/auth"
// import { authService } from "./auth-service"

// export const useAuthForm = (isRegister: boolean) => {
//     const form = useForm<IAuthForm>({
//         mode: "onChange"
//     })

//     const { mutate, isPending } = useMutation({
//         mutationKey: ['auth user'],
//         mutationFn: (data: IAuthForm) =>
//             authService.main(isRegister ? "register" : 'login', data),
//         onSuccess() {
//             form.reset()
//         },
//         onError(error) {
//             if (error.message) {
//                 console.log(error.message)
//             } else {
//                 console.log("Ошибка при авторизации")
//             }
//         }
//     })

//     const onSubmit: SubmitHandler<IAuthForm> = data => {
//         mutate(data)
//     }

//     return {onSubmit, form, isPending}

// }