import React from "react";
import logo from "../../assets/logo.svg";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Button } from "../../components/ui/button";

const Header = () => {
    const { login, register } = useKindeAuth();
    return (
        <div>
            <header class="bg-white">
                <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2">
                        <a class="block text-teal-600" href="#">
                            <span class="sr-only">Home</span>
                            <img src={logo} alt="" />
                        </a>
                        <h1 className="font-bold">OneSeen</h1>
                    </div>

                    <div class="flex flex-1 items-center justify-end md:justify-between">
                        <nav aria-label="Global" class="hidden md:block">
                        </nav>

                        <div class="flex items-center gap-4">
                            <div class="sm:flex sm:gap-4">
                                <Button
                                    class="block hover:cursor-pointer rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary"
                                    onClick={login}
                                >
                                    Login
                                </Button>

                                <Button
                                    class="hidden hover:cursor-pointer rounded-full bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-primary sm:block"
                                    onClick={register}
                                >
                                    Register
                                </Button>
                            </div>

                            <button class="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                                <span class="sr-only">Toggle menu</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="size-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;