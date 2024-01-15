import { NextResponse } from "next/server";
import {
	doc,
	setDoc,
	collection,
	query,
	where,
	getDocs,
	getDoc
} from "firebase/firestore";
import bcrypt from "bcrypt"
import { db } from "@/app/firebase";

export const POST = async req => {
    const {token} = await req.json()
    return NextResponse.json({messagee: "Ok"}, {status: 200, statusText: "Ok"})
}