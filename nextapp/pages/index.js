import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import Chats from "./Chats"
import NavTop from "../Components/NavTop"

export default function Home() {
  const router = useRouter()

  const handleSidebarLinkClick = (route) => {
    router.push(route)
  }

  return (
    <>
      <Head>
        <title>FundaSoch</title>
        <meta name="description" content="AI First Principles Coach" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavTop />
      <Chats />
    </>
  )
}
