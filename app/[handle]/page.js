export default async function Page({ params }) {
    const handle = (await params).handle
    const item = {
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
    return <div className="flex min-h-screen bg-purple-400 justify-center items-center">
        <div className="photo flex justify-center flex-col items-center">
            <img className="h-50" src={item.body.pic} alt="item" /></div>
            <span className="font-bold">@{item.body.handle}</span>
    </div>
}