
import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation";



export default async function Page({ params }) {
    const handle = (await params).handle

    const client = await clientPromise;
    const db = client.db("links")
    const collection = db.collection("linktree")

    //if the handle is already claimed you cannot create the bittree
    const item = await collection.findOne({ handle: handle })
    if(!item) {
        return notFound()
    }


    console.log(item)
    const item2 = {
        "_id": {
            "$oid": "68cd201e8a8d9dc5c77b066a"
        },
        "body": {
            "links": [
                {
                    "link": "https://www.instagram.com/?hl=en",
                    "linktext": "instagram"
                },
                {
                    "link": "https://www.facebook.com/?hl=en",
                    "linktext": "facebook"
                },
                {
                    "link": "https://www.youtube.com/?hl=en",
                    "linktext": "Youtube"
                }
            ],
            "handle": "codewithharry",
            "pic": "https://upload.wikimedia.org/wikipedia/commons/2/27/Lionel_Messi_NE_Revolution_Inter_Miami_7.9.25-178.jpg"
        }
    }
    return <div className="flex min-h-screen bg-purple-400 justify-center items-start">
        {item && <div className="photo flex justify-center flex-col items-center">
            <img className="h-50" src={item.body.pic} alt="item" />
            <div className="font-bold">@{item.body.handle}</div>
            <div className="links">
                {item.body.links.map((item, index) => {
                    return <div className="flex min-w-3 shadow-lg my-3 py-4 px-2 rounded-md gap-5 bg-amber-300" key={index}>
                        <div>
                            <Link href={item.link}> {item.linktext} </Link>
                        </div>
                    </div>

                })}
            </div>
        </div>}
    </div>
}