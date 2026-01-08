import { createClient } from '@supabase/supabase-js'

export const supabaseAdmin = () => {
    const config = useRuntimeConfig()

    const url = config.public.supabaseUrl
    const serviceKey = config.supabaseServiceRoleKey

    if (!url || !serviceKey) {
        throw new Error('Missing SUPABASE URL or SERVICE ROLE KEY')
    }

    return createClient(url, serviceKey)
}
