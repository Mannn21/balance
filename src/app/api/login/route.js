import { NextResponse } from "next/server";
import {
	doc,
	setDoc,
	collection,
	query,
	where,
	getDocs,
	getDoc,
} from "firebase/firestore";
import bcrypt from "bcrypt";
import { db } from "@/app/firebase";
import { v4 as uuidv4 } from "uuid";

export const POST = async req => {
	const { email, password } = await req.json();

	if (!email || !password)
		return NextResponse.json(
			{ message: "Bad Request" },
			{ status: 400, statusText: "Mohon isi data lengkap!" }
		);
	try {
		const findQuery = query(
			collection(db, "users"),
			where("email", "==", email)
		);
		const findUser = await getDocs(findQuery);
		let userData;
		let userId;
		findUser.forEach(doc => {
			userData = doc.data();
			userId = doc.id;
		});
		if (!userData) {
			return NextResponse.json(
				{ message: "OK" },
				{ status: 200, statusText: "User tidak ditemukan" }
			);
		}
		const comparePassword = await bcrypt.compare(password, userData.password);
		if (!comparePassword) {
			return NextResponse.json(
				{ message: "Unauthorized" },
				{ status: 401, statusText: "Password tidak benar" }
			);
		}
		if (comparePassword) {
			const token = uuidv4();
			const docRef = doc(db, "auth", userId);
			const searchUserAuth = await getDoc(docRef);
			if (searchUserAuth.exists()) {
				return NextResponse.json(
					{ message: "Ok", payload: {token: searchUserAuth.data().token, userId} },
					{ status: 200, statusText: "Ok" }
				);
			}
			await setDoc(doc(db, "auth", userId), {
				email: userData.email,
				name: userData.name,
				token,
			});
			return NextResponse.json(
				{ message: "Ok" },
				{ status: 201, statusText: "Login berhasil" }
			);
		}
	} catch (error) {
		return NextResponse.json(
			{ message: "Internal Server Error" },
			{ status: 500, statusText: error }
		);
	}
};
