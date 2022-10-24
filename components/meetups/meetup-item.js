import Image from "next/image";
import { useRouter } from "next/router";


export default function MeetUpItem ({ imgUrl , title , content , id }) {
    const router = useRouter();
   
    function showMoreDetails (id) {
        router.push(`/${id}`)
    }
   
    return (
        <div className="shadow-lg rounded-md cursor-pointer bg-slate-800">
            <Image 
                className="rounded-t-md w-full relative"
                src={`${imgUrl}`}
                width={400}
                height={400}
                alt="Bridge in the picture"
            />
            <div className="p-4 flex flex-col gap-3">
                <div className="text-lg text-gray-200 font-bold">
                    { title }
                </div>
                <p className="text-sm text-gray-400">
                    { content }
                </p>
                <button onClick={() => showMoreDetails(id)} className="bg-blue-700 text-white rounded-md py-2 px-3 font-bold hover:bg-blue-600">
                    More
                </button>
            </div>
      </div>
    )
}