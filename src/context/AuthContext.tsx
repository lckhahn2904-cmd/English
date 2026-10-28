import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  type ReactNode,
} from 'react'
import type { User, Session, AuthError } from '@supabase/supabase-js'
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient'

export interface AuthContextType {
  user: User | null
  session: Session | null
  isLoading: boolean
  isAuthenticated: boolean
  isSupabaseConfigured: boolean
  signUp: (
    email: string,
    password: string,
    fullName: string
  ) => Promise<{ user: User | null; session: Session | null; error: AuthError | Error | null }>
  signIn: (
    email: string,
    password: string
  ) => Promise<{ user: User | null; session: Session | null; error: AuthError | Error | null }>
  signOut: () => Promise<{ error: AuthError | Error | null }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    // If Supabase environment variables are missing, do not attempt to restore session
    if (!isSupabaseConfigured || !supabase) {
      setIsLoading(false)
      return
    }

    let isMounted = true

    // 1. Initial session restoration
    supabase.auth
      .getSession()
      .then(({ data: { session: initialSession }, error }) => {
        if (!isMounted) return
        if (error) {
          console.error('Error fetching Supabase session:', error)
          setSession(null)
          setUser(null)
        } else {
          setSession(initialSession)
          setUser(initialSession?.user ?? null)
        }
        setIsLoading(false)
      })
      .catch((err) => {
        if (!isMounted) return
        console.error('Unexpected error recovering session:', err)
        setIsLoading(false)
      })

    // 2. Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, currentSession) => {
      if (!isMounted) return
      setSession(currentSession)
      setUser(currentSession?.user ?? null)
      setIsLoading(false)
    })

    // 3. Cleanup subscription on unmount
    return () => {
      isMounted = false
      subscription.unsubscribe()
    }
  }, [])

  const signUp = async (email: string, password: string, fullName: string) => {
    if (!isSupabaseConfigured || !supabase) {
      return {
        user: null,
        session: null,
        error: new Error(
          'Supabase chưa được cấu hình. Vui lòng thêm VITE_SUPABASE_URL và VITE_SUPABASE_ANON_KEY vào .env.local'
        ),
      }
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password,
        options: {
          data: {
            full_name: fullName.trim(),
            name: fullName.trim(),
          },
        },
      })

      if (error) {
        return { user: null, session: null, error }
      }

      return { user: data.user, session: data.session, error: null }
    } catch (err: any) {
      return { user: null, session: null, error: err }
    }
  }

  const signIn = async (email: string, password: string) => {
    if (!isSupabaseConfigured || !supabase) {
      return {
        user: null,
        session: null,
        error: new Error(
          'Supabase chưa được cấu hình. Vui lòng thêm VITE_SUPABASE_URL và VITE_SUPABASE_ANON_KEY vào .env.local'
        ),
      }
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password,
      })

      if (error) {
        return { user: null, session: null, error }
      }

      return { user: data.user, session: data.session, error: null }
    } catch (err: any) {
      return { user: null, session: null, error: err }
    }
  }

  const signOut = async () => {
    if (!isSupabaseConfigured || !supabase) {
      setUser(null)
      setSession(null)
      return { error: null }
    }

    try {
      const { error } = await supabase.auth.signOut()
      if (!error) {
        setUser(null)
        setSession(null)
      }
      return { error }
    } catch (err: any) {
      setUser(null)
      setSession(null)
      return { error: err }
    }
  }

  const value = useMemo(
    () => ({
      user,
      session,
      isLoading,
      isAuthenticated: Boolean(user),
      isSupabaseConfigured,
      signUp,
      signIn,
      signOut,
    }),
    [user, session, isLoading]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
