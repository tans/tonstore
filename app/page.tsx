import Nav from "@/components/nav";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Nav></Nav>
      {/* <div className="m-6 max-w-screen-md mx-auto">
        Ton Store is an e-commerce platform that helps people sell digital
        products, tokens, and memberships online. We accept payments in TON and
        USDT tokens.
      </div> */}
      <div className="relative max-w-screen-lg mx-auto">
        <div className="my-20 text-center p-4 text-3xl font-semibold">
          Sell your products on TON
          <div className="text-center font-normal font-sans text-gray-600 text-lg  p-4">
            Easy-to-use eCommerce for creators. Sell merchandise or digital
            products — all from one place.
          </div>
          <Button size="lg">Start free trial</Button>
          <div className="text-sm mt-4 text-gray-500">
            No credit card required. Cancel anytime.
          </div>
        </div>
        <div className="w-full">
          <img src="https://cdn.prod.website-files.com/602629d6026724b9e0a021c8/65578024118125aad6b56384_sellfy-store.png" />
        </div>
      </div>
      <div className="py-40" style={{ background: "#f4f4f4" }}>
        <div className="max-w-screen-lg mx-auto">
          <div className="mt-8 text-2xl text-center">
            Get your store up and running in 5 minutes
          </div>
          <div className="text-base my-4 text-gray-500 text-center">
            Ideal for creators and online businesses who hate complexity but
            want results.
          </div>

          <div className="w-full">
            <img src="/demo.jpg" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
