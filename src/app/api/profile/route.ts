import { NextResponse } from "next/server";

import { prisma } from 'db';


export async function POST(req: Request) {
  try {

    const { full_name, email, phone, residence_country, address, age, linkedin, github, twitter, about_me } = await req.json();

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
            full_name, email, phone, residence_country, address, age, linkedin, github, twitter, about_me
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
          { status: 400 }
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



export async function GET(req: Request) {
  try {
    const pInformation = await prisma.personalInformation.findMany()
    const education =  await prisma.education.findMany()
    const skill  = await prisma.skills.findMany()
    const experience = await prisma.experience.findMany()
    const whatido=  await prisma.whatIDo.findMany()

    const response_data  =  {
      pInformation: pInformation, 
      education: education, 
      skill: skill, 
      experience: experience, 
      whatido: whatido
    }

    return NextResponse.json({
      data: response_data, 
      data_count: pInformation.length
    }, {
      status: 200
    })

  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: 500 }
    )
  }

}