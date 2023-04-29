import { v4 } from "uuid";

export async function GET(request: Request) {
  return new Response(`${process.env.TEST} ${v4()}`);
}
