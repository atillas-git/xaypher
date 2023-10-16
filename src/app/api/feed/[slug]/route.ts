export async function GET(
  request: Request,
  params: { params: { slug: string } },
) {
  const url = new URL(request.url);
  console.log(url);
  return new Response("success", { status: 200 });
}
