import { Button } from "./ui/button";

export default function () {
  return (
    <>
      <div className="border-b shadow-sm ">
        <div className="mx-auto flex items-center py-2 max-w-screen-lg">
          <div className="flex-1">
            <img src="/logo.png" className="w-8 h-8" />
          </div>

          <div className="flex items-center mx-4  flex-1 font-bold">
            <div className="mx-2">Use Cases</div>
            <div className="mx-2">Features</div>
          </div>
          <Button>Ton Store</Button>
        </div>
      </div>
    </>
  );
}
