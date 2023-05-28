import { prisma } from "db"
import { NextResponse } from "next/server";



export async function POST(req: Request) {
    try {
        const { year, subject, title, description } = await req.json()

        try {

            await prisma.education.create({
                data: {
                    year, subject, title, description
                }
            })

            return NextResponse.json({
                message: "Education Added successfully!"
            }, {
                status: 201
            })
        } catch (error) {
            return NextResponse.json(
                { message: error },
                { status: 400 }
            )
        }



    } catch (error) {
        return NextResponse.json(
            { message: error },
            { status: 400 }
        )

    }

}