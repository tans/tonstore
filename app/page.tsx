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
            Easy-to-use eCommerce for creators. Sell NFT or digital products —
            in telegram.
          </div>
          <Button size="lg">Start free trial</Button>
          <div className="text-sm mt-4 text-gray-500">
            No credit card required.
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

      <div className="py-40 ">
        <div className="flex max-w-screen-lg mx-auto items-start">
          <div className="flex-1">
            <img
              className="h-24"
              src="https://cdn.prod.website-files.com/602629d6026724b9e0a021c8/655784262f9e19a2da3b94c0_built-in.svg"
            />
            <div className="font-bold text-lg my-2">
              Built-in print on demand
            </div>
            <div className="text-sm">
              Launch your print on demand merch store within minutes. Design,
              create and sell from one storefront.
            </div>
          </div>
          <div className="flex-1">
            <img
              className="h-24"
              src="https://cdn.prod.website-files.com/602629d6026724b9e0a021c8/655784262f9e19a2da3b94c1_digital.svg"
            />
            <div className="font-bold text-lg my-2">Digital products</div>
            <div className="text-sm">
              Sell your digital goods without the technical headaches. File
              hosting, delivery — everything's included.
            </div>
          </div>
          <div className="flex-1">
            <img
              className="h-24"
              src="https://cdn.prod.website-files.com/602629d6026724b9e0a021c8/655784262f9e19a2da3b94bf_website-embed.svg"
            />
            <div className="font-bold text-lg my-2">Website embed</div>
            <div className="text-sm">
              Easily add a “buy now” button, shopping cart and more to your
              website with just a simple copy— paste.
            </div>
          </div>
          <div className="flex-1">
            <img
              className="h-24"
              src="https://cdn.prod.website-files.com/602629d6026724b9e0a021c8/655784262f9e19a2da3b94c2_support.svg"
            />
            <div className="font-bold text-lg my-2">24/7 support</div>
            <div className="text-sm">
              A helping hand whenever you need it. An excellent support team
              available 24/7.
            </div>
          </div>
        </div>
      </div>
      <div className="py-40 text-center bg-blue-600 text-white">
        <div>Open your online store today!</div>
        <div className="my-8">
          <Button variant="outline" size="lg" className="text-blue-800">
            Open TON Store Now!
          </Button>
        </div>
        <div>Create, market and sell your products — all from one place.</div>
      </div>
    </div>
  );
}
