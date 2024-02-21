import GridOption from "@/components/GridOption";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      {/* <div className="grid grid-cols-1 grid-flow-row-dense md:grid-flow-col-4 gap-6 m-6"> */}
      <div className="grid grid-cols-1 grid-flow-row-dense md:grid-flow-col-4 gap-6 m-6">
        <GridOption
          tittle="Sweet gifts for less"
          image="https://links.papareact.com/1dy"
          className="bg-pink-200 h-64"
        />
        <GridOption
          tittle="Shop Wardrobe"
          image="https://links.papareact.com/8ko"
          className="bg-blue-100 col-span-2 row-span-2"
        />
        <GridOption
          tittle="Shop Home"
          image="https://links.papareact.com/szu"
          className="bg-pink-200  row-span-2"
        />
        <GridOption
          tittle="Shop Electronics"
          image="https://links.papareact.com/n7r"
          className="bg-yellow-100 h-64"
        />
        <GridOption
          tittle="Shop Toys"
          image="https://links.papareact.com/pj2"
          className="bg-green-100 h-64 col-span-2"
        />
        <GridOption
          tittle="All you need for Match Day"
          image="https://links.papareact.com/m8e"
          className="bg-red-100 col-span-2 row-span-2"
        />
        <GridOption
          tittle="Shop Gadgets"
          image="https://links.papareact.com/gs1"
          className="bg-orange-100 h-64"
        />
        <GridOption
          tittle="Shop Beauty"
          image="https://links.papareact.com/4y0"
          className="bg-blue-100 h-64"
        />
        <GridOption
          tittle="Shop Sports"
          image="https://links.papareact.com/sq2"
          className="bg-blue-100 h-64"
        />
        <GridOption
          tittle="Enjoy Free Shopping"
          image="https://links.papareact.com/9fh"
          className="bg-blue-100 h-64"
        />
      </div>

    </main>
  );
}
