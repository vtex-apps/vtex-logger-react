/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from 'react-apollo'

import logger from './graphql/logger.gql'

interface VtexLoggerProps {
  message: string
  detail: any
}

export const useLoggerVtex = () => {
  const [loggerMutation] = useMutation(logger)

  const useLog = async ({ message, detail }: VtexLoggerProps) => {
    console.info(message, detail)
    await loggerMutation({
      variables: { message, detail: JSON.stringify(detail) },
    })
  }

  return { useLog }
}
