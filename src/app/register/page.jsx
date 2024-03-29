"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
	const [error, setError] = useState("");
	const [isTokenExist, setTokenExist] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const nameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const confPasswordRef = useRef();

	useEffect(() => {
		const balanceToken = window.localStorage.getItem("balanceToken");

		setTokenExist(!!balanceToken);

		if (balanceToken) {
			router.push("/dashboard");
		}
	}, [router]);

	const handleRegister = async e => {
		e.preventDefault();
		setIsLoading(true);
		const data = {
			name: nameRef.current.value,
			email: emailRef.current.value,
			password: passwordRef.current.value,
			confPassword: confPasswordRef.current.value,
		};
		if (!data.name || !data.email || !data.password || !data.confPassword)
			return;
		if (data.password !== data.confPassword) return;
		const response = await fetch("/api/users", {
			method: "POST",
			body: JSON.stringify(data),
		});
		const { message } = await response.json();
		if (response.status >= 400) {
			setError(response.statusText);
			return setIsLoading(false);
		}
		if (message === "Ok" && response.status === 201) {
			return router.push("/");
		}
	};

	return (
		<main className="w-screen h-screen bg-gray-800">
			{isTokenExist ? (
				<h1>Loading...</h1>
			) : (
				<div className="w-full h-full flex items-center justify-center">
					<div className="w-[350px] h-auto p-3 flex flex-col justify-start items-center gap-5 bg-white shadow-md shadow-indigo-500 rounded-lg">
						<div className="w-full h-10 flex flex-col gap-2 justify-center items-center">
							<h1 className="font-bold text-3xl text-black tracking-wide">
								Sign Up
							</h1>
							{error !== "" ? <span>{error}</span> : null}
						</div>
						<div className="w-full h-auto flex flex-col gap-4">
							<div className="w-full h-auto flex flex-col gap-1">
								<label
									htmlFor="name"
									className="text-md font-semibold text-black">
									Name
								</label>
								<div className="w-full py-2 border border-gray-500 text-gray-800 px-1 hover:border-blue-500 focus:border-blue-700">
									<input
										type="text"
										placeholder="Masukkan Nama"
										id="name"
										ref={nameRef}
										className="outline-none border-none w-full h-full"
									/>
								</div>
							</div>
							<div className="w-full h-auto flex flex-col gap-1">
								<label
									htmlFor="email"
									className="text-md font-semibold text-black">
									Email
								</label>
								<div className="w-full py-2 border border-gray-500 text-gray-800 px-1 hover:border-blue-500 focus:border-blue-700">
									<input
										type="email"
										placeholder="Masukkan Email"
										id="email"
										ref={emailRef}
										className="outline-none border-none w-full h-full"
									/>
								</div>
							</div>
							<div className="w-full h-auto flex flex-col gap-1">
								<label
									htmlFor="pw"
									className="text-md font-semibold text-black">
									Password
								</label>
								<div className="w-full py-2 border border-gray-500 text-gray-800 px-1 hover:border-blue-500 focus:border-blue-700">
									<input
										type="password"
										placeholder="**********"
										id="pw"
										ref={passwordRef}
										className="outline-none border-none w-full h-full"
									/>
								</div>
							</div>
							<div className="w-full h-auto flex flex-col gap-1">
								<label
									htmlFor="confPw"
									className="text-md font-semibold text-black">
									Confirm Password
								</label>
								<div className="w-full py-2 border border-gray-500 text-gray-800 px-1 hover:border-blue-500 focus:border-blue-700">
									<input
										type="password"
										placeholder="**********"
										id="confPw"
										ref={confPasswordRef}
										className="outline-none border-none w-full h-full"
									/>
								</div>
							</div>
						</div>
						<div className="w-full h-auto flex flex-col gap-5 justify-center items-center">
							<button
								disabled={isLoading}
								type="button"
								onClick={handleRegister}
								className="w-full flex items-center justify-center py-2 text-black text-xl font-bold bg-red-600 hover:bg-red-700">
								{isLoading ? "Loading..." : "Sign Up"}
							</button>
							<div className="w-full h-auto flex flex-col gap-2 justify-start items-center">
								<span className="text-md font-medium text-gray-700">
									Sudah punya akun ?{" "}
								</span>
								<Link
									href="/"
									className="w-full flex items-center justify-center py-2 text-black text-xl font-bold bg-indigo-600 hover:bg-indigo-700">
									Sign In
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}
		</main>
	);
}
