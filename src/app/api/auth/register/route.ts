import supabase from "@/lib/db";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password, username } = body;

  if (!email || !password || !username) {
    return new Response(
      JSON.stringify({ message: "Missing required fields" }),
      { status: 400 }
    );
  }

  // Register user with Supabase Auth
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { username },
    },
  });

  if (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 400,
    });
  }

  // Insert user data to tb_users table
  const userId = data.user?.id;
  if (userId) {
    const { error: dbError } = await supabase.from("tb_users").insert([
      {
        uuid: userId,
        email,
        createdAt: new Date().toISOString(),
      },
    ]);
    if (dbError) {
      return new Response(
        JSON.stringify({
          message: "User registered but failed to save to tb_users",
          error: dbError.message,
        }),
        { status: 500 }
      );
    }

    const { error: profileError } = await supabase.from("tb_profiles").insert([
      {
        id_profile: userId,
        username,
        createdAt: new Date().toISOString(),
      },
    ]);

    if (profileError) {
      return new Response(
        JSON.stringify({
          message: "User registered but failed to save to tb_profiles",
          error: profileError.message,
        }),
        { status: 500 }
      );
    }
  }

  return new Response(
    JSON.stringify({
      message: "User registered successfully",
      user: data.user,
    }),
    { status: 201 }
  );
}
