import NavLink from "./navlink";

export default function Header() {
  const nav_links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Foods",
      link: "/addFood",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const social = [
    {
      name: "Facebook",
      link: "/",
      icon: "",
    },
    {
      name: "Instagram",
      link: "/",
    },
  ];

  return (
    <div className="max-w-7xl mx-10 border border-black">
      <div className="mx-auto flex flex-row justify-between items-center">
        <div className="flex gap-2 items-center">
          <h1>LOGO</h1>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-4xl">
            FELICEM
          </h1>
        </div>

        <div className="flex flex-row gap-2">
          {nav_links.map(({ name, link }) => (
            <NavLink
              key={name}
              href={link}
              className="text-black"
              activeClassName="text-yellow-500"
            >
              {name}
            </NavLink>
          ))}
        </div>

        <div className="mr-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM23,17.015a1,1,0,0,0,0,2A1,1,0,0,0,23,17.015Zm-6-4a1,1,0,0,0,0,2A1,1,0,0,0,17,13.015Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}