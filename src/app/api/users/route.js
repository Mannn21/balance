import {
	doc,
	setDoc,
	collection,
	query,
	where,
	getDocs,
} from "firebase/firestore";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { db } from "@/app/firebase";

export const POST = async req => {
	const { name, email, password, confPassword } = await req.json();
	if (!name || !email || !password || !confPassword)
		return NextResponse.json(
			{ message: "Mohon isi data dengan lengkap" },
			{ status: 400, statusText: "Bad Request" }
		);
	if (password !== confPassword) {
		return NextResponse.json(
			{ message: "Konfirmasi password tidak sesuai" },
			{ status: 400, statusText: "Bad Request" }
		);
	}
	try {
		const emailQuery = query(
			collection(db, "users"),
			where("email", "==", email)
		);
		const searchUserByEmail = await getDocs(emailQuery);
		let isUserExist;
        searchUserByEmail.forEach(doc => isUserExist = doc.exists())
        if(isUserExist) {
            return NextResponse.json({message: "Email sudah terdaftar"}, {status: 409, statusText: "Conflict"})
        }
		const id = uuidv4();
		const salt = await bcrypt.genSalt(10);
		const encryptedPassword = await bcrypt.hash(confPassword, salt);
        await setDoc(doc(db, "users", id), {
            name, email, password: encryptedPassword
        })
        return NextResponse.json({message: "User berhasil dibuat!"}, {status: 201, statusText: "Ok"})
	} catch (error) {
        return NextResponse.json({message: error}, {status: 500, statusText: "Internal server error"})
    }
};
