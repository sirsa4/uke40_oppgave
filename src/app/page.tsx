"use client"
import Image from "next/image"

import Cards from "@/components/Cards"
import Nav from "@/components/Nav"
import Handlekurv from "@/components/Handlekurv"
import HandleKurvContext from "@/context/HandleKurvContext"

export default function Home() {
  return (
    <>
      <div className="container grid gap-10 p-4">
        <HandleKurvContext>
        <Nav />
        <div className="grid grid-cols-3">
          <main className="grid gap-4 md:grid-cols-2 col-span-2">
            <Cards />
            <Cards /> 
            <Cards />
            <Cards />
          </main>
          <Handlekurv />
        </div>
        </HandleKurvContext>
      </div>
    </>
  )
}
