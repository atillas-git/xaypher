export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  try {
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } },
) {
  try {
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
