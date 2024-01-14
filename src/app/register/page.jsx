import Link from "next/link";

export default function Register() {
	return (
		<main className="w-screen h-screen bg-gray-800">
			<div className="w-full h-full flex items-center justify-center">
				<div className="w-[350px] h-auto p-3 flex flex-col justify-start items-center gap-5 bg-white shadow-md shadow-indigo-500 rounded-lg">
					<div className="w-full h-8 flex justify-center items-center">
						<h1 className="font-bold text-3xl text-black tracking-wide">
							Sign Up
						</h1>
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
									className="outline-none border-none w-full h-full"
								/>
							</div>
						</div>
						<div className="w-full h-auto flex flex-col gap-1">
							<label htmlFor="pw" className="text-md font-semibold text-black">
								Password
							</label>
							<div className="w-full py-2 border border-gray-500 text-gray-800 px-1 hover:border-blue-500 focus:border-blue-700">
								<input
									type="password"
									placeholder="**********"
									id="pw"
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
									className="outline-none border-none w-full h-full"
								/>
							</div>
						</div>
					</div>
					<div className="w-full h-auto flex flex-col gap-5 justify-center items-center">
						<button
							type="button"
							className="w-full flex items-center justify-center py-2 text-black text-xl font-bold bg-red-600 hover:bg-red-700">
							Sign Up
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
		</main>
	);
}
