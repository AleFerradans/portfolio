import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Link,
} from "@heroui/react";

export default function App() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="bordered"
          className="lg:hidden cursor-pointer p-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6h16" />
            <path d="M7 12h13" />
            <path d="M10 18h10" />
          </svg>
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        className=" text-secondary w-[95vw] md:w-64 bg-primary rounded-2xl py-[5%] transition-all duration-300 "
        aria-label="Static Actions"
        variant="faded"
      >
        <DropdownItem
          className="flex justify-center items-center md:py-[10%] py-[3%] text-bg md:text-xl text-2xl font-roboto font-thin uppercase rounded-2xl transition-all duration-300 ease-in-out"
          key="home"
          as={Link}
          href="/#home"
        >
          Home
        </DropdownItem>

        <DropdownItem
          className="flex justify-center items-center md:py-[10%] py-[3%] text-bg md:text-xl text-2xl font-roboto font-thin uppercase rounded-2xl transition-all duration-300 ease-in-out"
          key="project"
          as={Link}
          href="/#project"
        >
          Project
        </DropdownItem>
        <DropdownItem
          className="flex justify-center items-center md:py-[10%] py-[3%] text-bg md:text-xl text-2xl font-roboto font-thin uppercase rounded-2xl transition-all duration-300 ease-in-out"
          key="about"
          as={Link}
          href="/#about"
        >
          About Me
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
