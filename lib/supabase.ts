import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Type definitions for common database operations
export type Database = {
  public: {
    Tables: {
      // Add your table definitions here as you create them
      // Example:
      // users: {
      //   Row: {
      //     id: string
      //     email: string
      //     created_at: string
      //   }
      //   Insert: {
      //     id?: string
      //     email: string
      //     created_at?: string
      //   }
      //   Update: {
      //     id?: string
      //     email?: string
      //     created_at?: string
      //   }
      // }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}