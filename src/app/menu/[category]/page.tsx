import {pizzas} from "@/data"
import Image from "next/image"
import Link from "next/link"

export default function CategoryPage() {
  return (
    <div className="text-red-500 flex flex-wrap ">
        {
          pizzas.map(item=>(
            <Link key={item.id} href={`/product/${item.id}`}
            className="w-full h-[60vh] border-r-2 border-b-2
             border-red-500 sm:w-1/2 lg:w-1/3 flex-col p-4"
            >
              {/* IMAGE CONTAINER */}
              {
                item.img && (
                  <div className="relative h-[80%]  ">
                      <Image src={item.img} alt="" fill 
                      className="object-contain" />
                  </div>
                )
              }
              {/* TEXT CONTAINER */}
            </Link>
          ))
        }
    </div>
  )
}
