"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { delivery_fresh, Fruit, logo } from "@/assets/images";
import Image from "next/image";

const components = [
  {
    title: "Steamed Basmati Rice",
    href: "/",
    description:
      "Classic, aromatic basmati rice steamed to perfection. A versatile side dish that pairs well with any curry or stir-fry.",
  },
  {
    title: "Vegetable Fried Rice",
    href: "/",
    description:
      "Stir-fried rice with a colorful mix of fresh vegetables, seasoned with soy sauce and a hint of garlic for a flavorful experience.",
  },
  {
    title: "Chicken Biryani",
    href: "/",
    description:
      "Fragrant basmati rice layered with tender marinated chicken, caramelized onions,",
  },
  {
    title: "Egg Fried Rice",
    href: "/",
    description: "Fluffy rice stir-fried with scrambled eggs, spring onions, and a light soy-based seasoning.",
  },
  {
    title: "Lemon Rice",
    href: "/",
    description:
      "A South Indian specialty with rice infused with tangy lemon juice, curry leaves, and a subtle hint of turmeric. Light and refreshing.",
  },
  {
    title: "Shrimp Fried Rice",
    href: "/",
    description:
      "Juicy shrimp tossed with rice, vegetables, and a savory blend of seasonings for a seafood lover’s delight.",
  },
];

 function Menu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="px-1">
          <NavigationMenuTrigger className="px-2">Fruits & Veggies</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                  
                    <div className="mb-2 mt-4 text-lg font-medium">
                     <Image src={delivery_fresh} alt="menu Image" width={150} height={150} className="w-full"/>
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Fresh and protine base products
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/" title="Deals Of the Day">
              Fresh and protein-rich products
              </ListItem>
              <ListItem href="/" title="Milk ">
                We Provide a fresh milk and its product at your Door.
              </ListItem>
              <ListItem href="/" title="Vegitable">
              A hearty and flavorful dish.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="px-2">Rice and Rice Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="px-2">
          <Link href="/docs" legacyBehavior passHref className="!px-2">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Masalas & Spices
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref className="px-2">
            <NavigationMenuLink className={navigationMenuTriggerStyle()} >
            Edible Oil
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref className="px-2">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Salt, Sugar & Jaggery
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref className="px-2">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Water Packs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref className="px-2">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Coffee & Tea
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
     
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";


export default Menu