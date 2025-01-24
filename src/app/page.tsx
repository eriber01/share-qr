'use client'
import { useEffect, useRef } from "react";
import { Home } from "@/components/Home";
import { About } from "@/components/Home/About";
import { Footer } from "@/components/Home/Footer";
import { Header } from "@/components/Home/Header";

import { useClerk } from "@clerk/nextjs";
import { privateRoutes } from "@/utils/apiUrlBase";
import { User } from "@prisma/client";
import { useUserStore } from "@/hooks/stores/useUserStore";

export default function HomePage() {
  const { addListener } = useClerk();
  const previousSessionId = useRef<string | null | undefined>(null);
  const { setUser } = useUserStore()

  useEffect(() => {
    const listener = addListener(async event => {
      if (event.session?.id !== previousSessionId.current) {
        previousSessionId.current = event.session?.id;
        if (event.session) {
          const { data } = await privateRoutes.put<{ user: User | null }>('users/save-user')
          data.user && setUser(data.user)
        }
      }
    })
    return () => listener()
  }, [addListener, setUser])

  return (
    <div className="flex flex-col min-h-dvh">
      {/* header section */}
      <Header />
      {/* home section */}
      <Home />
      {/* about app session */}
      <About />
      {/* sugerence session */}
      <Footer />
    </div>
  );
}
