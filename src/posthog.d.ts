import { PostHog } from 'posthog-js'

declare module 'vue' {
  interface ComponentCustomProperties {
    $posthog: PostHog
  }
}
