import { AuthApis } from '@/stores/apis'
import {useMutation} from "@tanstack/vue-query";

const useEmailRegister = () => {
  return useMutation({
    mutationFn: AuthApis.emailRegister
  })
}

export { useEmailRegister }
