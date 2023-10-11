import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import {HiPencilAlt} from "react-icons/hi";

const getTopics = async () => {

  console.log("fdggdsfsd");

  try {
    const res = await fetch('http://localhost:3000/api/topics', {
      cache: "no-store",
    });

    console.log(res);

    if (!res.ok) {
      throw new Error('Faild to fetch topics');
    }

    

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function TopicsList() {

  await getTopics();

  return (
    <>
      <div className=" p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
            <div>
                <h2 className=" font-bold text-2xl">jhh</h2>
                <div>ghv</div>
            </div>
            <div className="flex gap-2">
              <RemoveBtn />
              <Link href={`/edit-topic/12`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
        </div>
    </>
  )
}
