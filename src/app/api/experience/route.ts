import { prisma } from "db"
import { NextResponse } from "next/server";



export async function POST(req: Request) {
    try {
        const { year, company, title, description } = await req.json()

        await prisma.experience.create({
            data: {
                year, company, title, description
            }
        })
        return NextResponse.json({
            message: "Experiece Added successfully!"
        }, {
            status: 201
        })

    } catch (error) {
        return NextResponse.json(   
            { message: error },
            { status: 400 }
        )

    }

}