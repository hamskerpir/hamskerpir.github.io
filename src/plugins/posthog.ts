import posthog from 'posthog-js'
import {type App} from 'vue'

export default {
    install(app: App) {
        app.config.globalProperties.$posthog = posthog.init(
            'phc_HaMouofkaHCKaKLV979S5IAQUlx4mrUq9jJLw7df76F',
            {
                api_host: 'https://us.i.posthog.com',
                defaults: '2025-05-24',
                capture_pageview: true,
                person_profiles: "always",
            }
        )
    }
}
