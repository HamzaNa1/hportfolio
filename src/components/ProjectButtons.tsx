"use client";

import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

export default function ProjectButtons({
	github,
	demo,
}: {
	github: string;
	demo: string;
}) {
	return (
		<div className="flex justify-center items-center gap-1">
			<div className="bg-slate-900/70 m-2 p-3 rounded-full max-w-md hover:bg-slate-900/50 hover:drop-shadow-lg">
				<Link href={github} rel="noopener noreferrer" target="_blank">
					<div className="flex justify-center items-center gap-1">
						<span>GitHub</span>
						<AiFillGithub />
					</div>
				</Link>
			</div>
			<div className="bg-slate-900/70 m-2 p-3 rounded-full max-w-md hover:bg-slate-900/50 hover:drop-shadow-lg">
				<Link href={demo} rel="noopener noreferrer" target="_blank">
					<div className="flex justify-center items-center gap-1">
						<span>Demo</span>
						<BiLinkExternal />
					</div>
				</Link>
			</div>
		</div>
	);
}
