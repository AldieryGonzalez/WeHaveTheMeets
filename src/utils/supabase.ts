import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL as string,
    import.meta.env.VITE_SUPABASE_KEY as string,
);

export async function googleSignIn() {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            scopes: "https://www.googleapis.com/auth/calendar.readonly",
            redirectTo: window.location.href,
        },
    });
    if (error) {
        alert("Error logging in to Google");
        console.log(error);
    }
}

export async function appleSignIn() {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: "apple",
    });
    if (error) {
        alert("Error logging in to GitHub");
        console.log(error);
    }
}
export async function azureSignIn() {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: "azure",
    });
    if (error) {
        alert("Error logging in to GitHub");
        console.log(error);
    }
}

export async function signOut() {
    await supabase.auth.signOut();
}
