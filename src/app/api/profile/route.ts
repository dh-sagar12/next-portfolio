import { NextResponse } from "next/server";

import { prisma } from 'db';


export async function POST(req: Request) {
  try {

    const { full_name, email, phone, residence_country, address, age, linkedin, github, twitter, about_me, created_on } = await req.json();

    try {

      const pInformation = await prisma.personalInformation.findMany()
      console.log('logggingg', pInformation)

      if (pInformation.length > 0) {
        console.log('deleting/////');
        
        await prisma.personalInformation.deleteMany()
      }

      try {

        await prisma.personalInformation.create({
          data: {
            full_name, email, phone, residence_country, address, age, linkedin, github, twitter, about_me, created_on
          }
        });

        return NextResponse.json({
          message: "Profile Created successfully!"
        }, {
          status: 201
        })
  
        
      } catch (e) {

        return NextResponse.json(
          { message: e },
          { status: 200 }
        )

      }

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


