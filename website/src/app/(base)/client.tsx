"use client"

import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { NavigationMenu, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "~/components/ui/navigation-menu";
export function NavBar() {
	return <NavigationMenu>
		<NavigationMenuList>
			<NavigationMenuItem>
				<Link href="/" passHref>
					<NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
				</Link>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<Link href="/cafe" passHref>
					<NavigationMenuLink className={navigationMenuTriggerStyle()}>Cafés</NavigationMenuLink>
				</Link>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<Link href="/music" passHref>
					<NavigationMenuLink className={navigationMenuTriggerStyle()}>Music</NavigationMenuLink>
				</Link>
			</NavigationMenuItem>
		</NavigationMenuList>
	</NavigationMenu>
}
