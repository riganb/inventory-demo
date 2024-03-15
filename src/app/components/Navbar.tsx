import clsx from "clsx";
import Head from "next/head";
import Link from "next/link";

const routes = ["home", "inventory", "language", "qr"];

export default function Navbar({ pathname }: { pathname: string }) {
  const selectedIndex = routes.findIndex((route_str) =>
    pathname.includes(route_str)
  );

  return (
    <div className="w-full flex items-center justify-center">
      <Head>
        <title>{routes[selectedIndex]?.toUpperCase() ?? "Demo"}</title>
      </Head>
      <div className="w-full md:w-fit md:gap-5 px-2 py-1 rounded-lg md:p-1 flex flex-row justify-around bg-blue-50 border-2 border-black md:rounded-full">
        {routes.map((route_str, idx) => (
          <Link key={route_str} href={`/${route_str}`}>
            <div
              className={clsx(
                "rounded-full py-3 px-2 min-w-20 text-center hover:bg-blue-800 hover:text-white hover:shadow-sm hover:shadow-black",
                selectedIndex === idx && "text-white bg-blue-500"
              )}
            >
              {route_str.toUpperCase()}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
