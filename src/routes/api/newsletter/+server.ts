import type { RequestHandler } from "@sveltejs/kit";

// api/newsletter GET

export const GET: RequestHandler = async (event) => {

  const options: ResponseInit = {
    headers: {
      "Content-Type": "application/json",
    },
    status: 418
  };

  return new Response("Hello world", options);
}

// api/newsletter POST

export const POST: RequestHandler = async (event) => {
  const data = await event.request.formData();
  const email = data.get("email");

  return new Response(
    JSON.stringify({
      success: true,
      email,
    }), {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
}