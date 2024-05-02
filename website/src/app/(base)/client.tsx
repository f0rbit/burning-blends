"use client"

import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { NavigationMenu, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "~/components/ui/navigation-menu";
export function NavBar() {
	return <NavigationMenu>
		<NavigationMenuList>
			<NavigationMenuItem>
				<Link href="/" legacyBehavior passHref>
					<NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
				</Link>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<Link href="/cafe" legacyBehavior passHref>
					<NavigationMenuLink className={navigationMenuTriggerStyle()}>Cafés</NavigationMenuLink>
				</Link>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<Link href="/music" legacyBehavior passHref>
					<NavigationMenuLink className={navigationMenuTriggerStyle()}>Music</NavigationMenuLink>
				</Link>
			</NavigationMenuItem>
		</NavigationMenuList>
	</NavigationMenu>
}
