"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
	const [isLoading, setIsLoading] = useState(false);
	const [isTokenExist, setTokenExist] = useState(true);
	const [error, setError] = useState("");
	const router = useRouter();

	const emailRef = useRef();
	const passwordRef = useRef();
	useEffect(() => {
		const balanceToken = window.localStorage.getItem("balanceToken");

		// Mengupdate state sesuai dengan hasil pengecekan
		setTokenExist(!!balanceToken);

		// Jika token ada, redirect
		if (balanceToken) {
			router.push("/dashboard");
		}
	}, [router]);

	const handleLogin = async e => {
		e.preventDefault();
		setIsLoading(true);
		const body = {
			email: emailRef.current.value,
			password: passwordRef.current.value,
		};

		const response = await fetch("/api/login", {
			method: "POST",
			body: JSON.stringify(body),
		});
		const { message, token } = await response.json();
		if (message === "Ok" && response.status < 300) {
			window.localStorage.setItem("balanceToken", token);
			return router.push("/dashboard");
		}
		return setError(response.statusText);
	};

	return (
		<main className="w-screen h-screen bg-gray-800">
			{isTokenExist ? (
				<h1>Loading...</h1>
			) : (
				<div className="w-full h-full flex items-center justify-center">
					<div className="w-[350px] h-auto p-3 flex flex-col justify-start items-center gap-5 bg-white shadow-md shadow-indigo-500 rounded-lg">
						<div className="w-full h-8 flex justify-center items-center">
							<h1 className="font-bold text-3xl text-black tracking-wide">
								Sign In
							</h1>
							{error !== "" ? <span>{error}</span> : null}
						</div>
						<div className="w-full h-auto flex flex-col gap-4">
							<div className="w-full h-auto flex flex-col gap-1">
								<label
									htmlFor="email"
									className="text-md font-semibold text-black">
									Email
								</label>
								<div className="w-full py-2 border border-gray-500 text-gray-800 px-1 hover:border-blue-500 focus:border-blue-700">
									<input
										type="email"
										placeholder="Masukkan email"
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
						</div>
						<div className="w-full h-auto flex flex-col gap-5 justify-center items-center">
							<button
								disabled={isLoading}
								type="button"
								onClick={handleLogin}
								className="w-full flex items-center justify-center py-2 text-black text-xl font-bold bg-indigo-600 hover:bg-indigo-700">
								{isLoading ? "Loading..." : "Sign In"}
							</button>
							<div className="w-full h-auto flex flex-col gap-2 justify-start items-center">
								<span className="text-md font-medium text-gray-700">
									Belum punya akun ?{" "}
								</span>
								<Link
									href="/register"
									className="w-full flex items-center justify-center py-2 text-black text-xl font-bold bg-red-600 hover:bg-red-700">
									Sign Up
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}
		</main>
	);
}
