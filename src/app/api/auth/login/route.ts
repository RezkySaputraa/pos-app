// Function to handle user login
import supabase from "@/lib/db";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  if (!email || !password) {
    return new Response(
      JSON.stringify({ message: "Missing required fields" }),
      { status: 400 }
    );
  }

  // Login with Supabase Auth
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 401,
    });
  }

  // Get user data from tb_users table
  const userId = data.user?.id;
  if (userId) {
    const { data: userData, error: dbError } = await supabase
      .from("tb_users")
      .select("uuid, email, createdAt")
      .eq("uuid", userId)
      .maybeSingle();
    if (dbError) {
      return new Response(
        JSON.stringify({
          message: "Login successful, but failed to fetch user data",
          error: dbError.message,
        }),
        { status: 500 }
      );
    }
    return new Response(
      JSON.stringify({
        message: "Login successful",
        user: userData,
        token: data.session?.access_token,
      }),
      { status: 200 }
    );
  }

  return new Response(JSON.stringify({ message: "Invalid credentials" }), {
    status: 401,
  });
}
