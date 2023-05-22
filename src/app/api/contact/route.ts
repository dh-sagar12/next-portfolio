import { NextResponse } from "next/server";

import { prisma } from 'db';


export async function POST(req: Request) {
  try {

    const { full_name, email, message, subject , created_on} = await req.json();

    try {
      await prisma.contact.create({
        data: {
          full_name, email, message, subject, created_on
        }
      });

      return NextResponse.json({
        message: "Message sent successfully!"
      }, {
        status: 201
      })

    } catch (e) {
      return NextResponse.json(
        { message: e },
        { status: 400 }
      )
    }

  } catch (e) {
    return NextResponse.json(
      { message: "Server error, please try again!" },
      { status: 500 }
    )
  }
}


