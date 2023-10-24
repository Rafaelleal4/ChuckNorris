"use client"
import Link from "next/link";
import Randomizer from "./components/randomizer/Randomizer";


export default function Home() {
  return (
 <div>
  <Link href={"tsw_personagens"}>Resfcio</Link>
  <Randomizer/>
 </div>
  )
}
