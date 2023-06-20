// import { signJwtAccessToken } from ";
import { signJwtAccessToken } from "@/jwt";
import * as bcrypt from "bcrypt";
import { prisma } from "db";
import { NextResponse } from "next/server";



interface RequestBody {
  email: string;
  password: string;
}
export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });

  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...userWithoutPass } = user;
    const accessToken = signJwtAccessToken(userWithoutPass);
    const result = {
      ...userWithoutPass,
      accessToken,
    };

    // return new Response(JSON.stringify(result

    return NextResponse.json(
      { message: 'Login Successfully!!', data: result },
      { status: 200 },

    )


  } else {

    return NextResponse.json(
      { message: 'Email or Password Did Not Matched!!!' },
      { status: 500 }
    )
    
  }
}