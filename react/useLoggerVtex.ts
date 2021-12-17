/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from 'react-apollo'

import logger from './graphql/logger.gql'

interface VtexLoggerProps {
  app: string
  message: string
  detail: any
}

const useLoggerVtex = () => {
  const [loggerMutation] = useMutation(logger)

  const useLog = async ({ app, message, detail }: VtexLoggerProps) => {
    const loggerResponse = await loggerMutation({
      variables: { app, message, detail: JSON.stringify(detail) },
    })

    return loggerResponse
  }

  return { useLog }
}

export default useLoggerVtex
