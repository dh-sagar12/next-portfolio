import { NextResponse } from "next/server";

import { prisma } from 'db';


export async function POST(req: Request) {
  try {

      const {full_name, email, message, subject} = await req.json();

      await prisma.contact.create({
              data: {
                full_name, email, message, subject
              },
            });

      return NextResponse.json({
          message:"Message sent successfully!"
      }, {
          status: 200
      })

  }catch (e) {
      return NextResponse.json(
          { message: "Server error, please try again!" },
          { status: 500 }
      )
  }
}


