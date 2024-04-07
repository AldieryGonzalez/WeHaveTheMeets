import React, { useEffect, useState } from "react";

import { useSupabaseClient } from "@supabase/auth-helpers-react";
import type { AuthError, Session, SupabaseClient } from "@supabase/supabase-js";

type AuthProviderProps = {
    children: React.ReactNode;
};

type AuthValues = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    supabase: SupabaseClient<any, "public", any>;
    session: Session | null;
    getSession: () => Promise<Session | null>;
    error: AuthError | null;
    isLoading: boolean;
};

export const AuthContext = React.createContext({} as AuthValues);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [session, setSession] = useState<Session | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<AuthError | null>(null);
    const supabase = useSupabaseClient();
    // const { session, error, isLoading } = useSessionContext();

    useEffect(() => {
        supabase.auth
            .getSession()
            .then(({ data: { session } }) => {
                setSession(session);
                setIsLoading(false);
            })
            .catch((err: AuthError) => {
                setError(err);
            });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
        return subscription.unsubscribe;
    }, [supabase.auth]);

    async function getSession() {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
            setError(error);
        } else if (data.session) {
            return data.session;
        }
        return null;
    }

    const value = {
        supabase,
        session,
        getSession,
        error,
        isLoading,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
