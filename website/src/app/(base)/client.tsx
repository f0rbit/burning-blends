"use client"

import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { NavigationMenu, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "~/components/ui/navigation-menu";
import { PostGroup, post_groups } from "~/lib/types";

const TITLES: Record<PostGroup, string> = {
	"cafe": "Cafés",
	"music": "Music",
	"art": "Art",
	"books": "Books"
}

export function NavBar() {
	return <NavigationMenu>
		<NavigationMenuList>
			<NavigationMenuItem>
				<Link href="/" legacyBehavior passHref>
					<NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
				</Link>
			</NavigationMenuItem>
			{post_groups.map((group: PostGroup) => 
			<NavigationMenuItem>
				<Link href={`/${group}`} legacyBehavior passHref>
					<NavigationMenuLink className={navigationMenuTriggerStyle()}>{TITLES[group]}</NavigationMenuLink>
				</Link>
			</NavigationMenuItem>
			)}
		</NavigationMenuList>
	</NavigationMenu>
}
