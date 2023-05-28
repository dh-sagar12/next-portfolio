import { prisma } from "db"
import { NextResponse } from "next/server";



export async function POST(req: Request) {
    try {
        const { skill, percentage } = await req.json()

       await  prisma.skills.create({
            data: {
                skill, percentage
            }
        })
        return NextResponse.json({
            message: "Skills successfully!"
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