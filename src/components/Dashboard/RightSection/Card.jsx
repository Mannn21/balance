import Image from "next/image";
import CardTexture from "@/assets/cardTexture.svg";
import { CgOptions } from "react-icons/cg";


const Card = () => {
	return (
		<div className="w-full h-48 bg-gradient-to-br from-color-accent to-color-tersier overflow-hidden rounded-xl relative">
			<div className="w-full h-full bg-gradient-to-tl from-color-pinkOpacityBold to-75% relative">
				<Image
					src={CardTexture}
					alt="texture"
					style={{ position: "absolute", top: 0, left: 0, opacity: 0.4 }}
				/>
				<div className="w-full h-full p-5 flex flex-col justify-around items-start text-color-white">
					<h2 className="font-bold text-2xl">Balance</h2>
					<h2 className="text-3xl font-semibold">$ 25000</h2>
					<div className="w-full text-color-white flex flex-row justify-between items-center">
						<h3 className="text-md">Bank Republik Indonesia</h3>
                        <CgOptions size={25}/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
