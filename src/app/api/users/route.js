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
			{ message: "Bad Request" },
			{ status: 400, statusText: "Mohon isi data dengan lengkap" }
		);
	if (password !== confPassword) {
		return NextResponse.json(
			{ message: "Bad Request" },
			{ status: 400, statusText: "Konfirmasi password tidak sesuai" }
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
            return NextResponse.json({message: "Conflict"}, {status: 409, statusText: "Email sudah terdaftar"})
        }
		const id = uuidv4();
		const salt = await bcrypt.genSalt(10);
		const encryptedPassword = await bcrypt.hash(confPassword, salt);
        await setDoc(doc(db, "users", id), {
            name, email, password: encryptedPassword
        })
        return NextResponse.json({message: "Ok"}, {status: 201, statusText: "User berhasil dibuat!"})
	} catch (error) {
        return NextResponse.json({message: error})
    }
};
