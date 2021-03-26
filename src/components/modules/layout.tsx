import { useEffect } from "react";
import { SEO, Navigation } from "components/elements";
import { Navbar, Sidebar } from "components/modules";
import { useState } from "react";

interface ILayout {
  children: JSX.Element | JSX.Element[];
  seo: {
    title: string;
    description: string;
    url: string;
  };
}

export const Layout: React.FC<ILayout> = ({ children, seo }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      if (open) {
        setOpen(() => false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <SEO {...seo} />
      <Navbar open={open} onToggle={() => setOpen(!open)} />
      <main className="pb-6">{children}</main>
      <Sidebar open={open}>
        <div className="flex items-center justify-center h-full bg-black">
          <Navigation direction="col" />
        </div>
      </Sidebar>
    </div>
  );
};
