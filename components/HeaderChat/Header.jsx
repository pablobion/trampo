"use client";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiHome, FiMessageSquare, FiMenu } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";

const Header = () => {
    const [activeLink, setActiveLink] = useState("dashboard");

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div >
            <Box w={"full"} color={"white"} bg={"black"} py={2} position="relative">
                <Flex  justifyContent={"space-between"} px={{  base: 5 }}>
                    <Flex align={"center"}  gap={{ md: "3rem", base: "1rem" }}>
                        <Link href={'/'}>
                        <Box display={{ md: "block", base: "none" }}>
                            <img src="/Logowhite.png" alt="" style={{ width: '150px', objectFit: 'contain' }} />

                        </Box>
                        </Link>
                        <Link
                            href={"/dashboard"}
                            style={{
                                display: "flex",
                                gap: "4px",
                                alignItems: "center",
                                borderRadius: "2px",

                            }}
                            onClick={() => handleLinkClick("dashboard")}
                        >
                            <LuLayoutDashboard size={15} />
                            <Flex fontWeight="normal" fontSize="md" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'" align={"center"} ml={"0.5"} >Dashboard</Flex>
                        </Link>
                        <Link
                            href={"/chat"}
                            style={{
                                display: "flex",
                                gap: "10px",
                                alignItems: "center",
                                borderRadius: "2px",

                            }}
                            onClick={() => handleLinkClick("chat")}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
                                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                            </svg>
                            <Flex fontWeight="normal" fontSize="md" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'" align={"center"} ml={"0.5"}>Chat</Flex>
                        </Link>
                    </Flex>
                    <button mt={3} className="cursor">
                        <FiMenu size={35}  />
                    </button>
                    <div className="responsive-line1 "
                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: 220,
                            width: "5.3%",
                            height: "2px",
                            background:
                                activeLink === "dashboard" ? "#01FBFB" : "transparent",
                        }}
                    />
                    <div className="responsive-line2 "
                        style={{
                            position: "absolute",
                            left: 360,
                            bottom: 0,
                            width: "3.8%",
                            height: "2px",
                            background: activeLink === "chat" ? "#01FBFB" : "transparent",
                        }}
                    />
                    <div className="border-line1 "
                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: 35,
                            width: "100px",
                            height: "2px",
                            background:
                                activeLink === "dashboard" ? "#01FBFB" : "transparent",
                        }}
                    />
                    <div className="border-line2 "
                        style={{
                            position: "absolute",
                            left: 150,
                            bottom: 0,
                            width: "70px",
                            height: "2px",
                            background: activeLink === "chat" ? "#01FBFB" : "transparent",
                        }}
                    />
                </Flex>
            </Box>
        </div>
    );
};

export default Header;
