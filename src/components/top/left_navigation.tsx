import { linkPath, navigationLabel } from "@/constants/top";
import { navContainer, navText } from "@/styles/top";
import Link from "next/link";

export type TopLeftNavigationProps = {
  href: string;
  label: string;
  listClass: string;
  linkClass: string;
};

export default function LeftNavigation() {
  const topNavigationData: TopLeftNavigationProps[] = [
    {
      listClass: navText.list("duration-400"),
      linkClass: navText.link,
      href: linkPath.list1,
      label: navigationLabel.list1,
    },
    {
      listClass: navText.list("duration-800"),
      linkClass: navText.link,
      href: linkPath.list2,
      label: navigationLabel.list2,
    },
    {
      listClass: navText.list("duration-1200"),
      linkClass: navText.link,
      href: linkPath.list3,
      label: navigationLabel.list3,
    },
    {
      listClass: navText.list("duration-1600"),
      linkClass: navText.link,
      href: linkPath.list4,
      label: navigationLabel.list4,
    },
  ];

  return (
    <nav className={navContainer.nav}>
      <ul className={navContainer.list}>
        {topNavigationData.map((props, index) => (
          <li key={index} className={props.listClass}>
            <Link className={props.linkClass} href={props.href} children={props.label} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
