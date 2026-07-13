// react-notify-toast has no published types, so this is a minimal
// declaration covering the API this app actually uses.
declare module 'react-notify-toast' {
  import { ComponentType } from 'react'

  export const notify: {
    show: (message: string, type?: string, duration?: number, color?: string) => void
    hide: () => void
    createShowQueue: () => (message: string, type?: string, duration?: number, color?: string) => void
  }

  const Notifications: ComponentType<{ options?: object }>
  export default Notifications
}
