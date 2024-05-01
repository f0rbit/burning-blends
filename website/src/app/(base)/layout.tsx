import { Github, Instagram, TwitterIcon, User } from "lucide-react";
import { NavBar } from "./client";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/ui/tooltip";
import Link from "next/link";
import { Button } from "~/components/ui/button";


const footer_links = [
	{ href: "https://forbit.dev", icon: <User />, title: "Built by forbit" },
	{ href: "https://github.com/f0rbit/burning-blends", icon: <Github />, title: "Source Code" },
	{ href: "https://www.instagram.com/burning.blends/", icon: <Instagram />, title: "Instagram" },
	{ href: "https://twitter.com/burningblends", icon: <TwitterIcon />, title: "Twitter" },
]

export default function BaseLayout({ children }: { children: React.ReactNode }) {
	return <>
		<header className="flex justify-center py-2">
			<NavBar />
		</header>
		<main className="flex justify-center">
			{children}
		</main>
		<footer className="flex justify-center">
			<nav className="flex gap-5 py-2">
				{footer_links.map(({ href, icon, title }) => (
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link href={href}>
									<Button variant='link' className="p-0 w-5">
										{icon}
									</Button>
								</Link>
							</TooltipTrigger>
							<TooltipContent>{title}</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				))}
			</nav>
		</footer>
	</>
}
