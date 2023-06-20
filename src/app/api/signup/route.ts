import * as bcrypt from "bcrypt";
import { prisma } from 'db';
import { NextResponse } from "next/server";


interface RequestBody {
  full_name: string;
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  try {
    const user = await prisma.user.create({
      data: {
        full_name: body.full_name,
        email: body.email,
        password: await bcrypt.hash(body.password, 10),
      },
    });
  
    const { password, ...result } = user;
    // return new Response(JSON.stringify(result));
    return NextResponse.json(
      { message: 'User Created Successfully!!' },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: 500 }
    )
  }
 
}