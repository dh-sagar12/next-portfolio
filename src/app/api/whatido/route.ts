import { prisma } from "db"
import { NextResponse } from "next/server";



export async function POST(req: Request) {
    try {
        const { title, description } = await req.json()
        
        await prisma.whatIDo.create({
            data: {
                title, description
            }
        })
        return NextResponse.json({
            message: "What I Do Created successfully!"
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