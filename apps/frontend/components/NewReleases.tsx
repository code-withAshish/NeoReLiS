import { getDictionary } from "../get-dictionary";

export function NewReleases({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["newReleases"];
}) {
  return (
    <div className="w-full flex justify-center mt-24  mb-4">
      <div className=" rounded-xl w-200 bg-[#ffffff] shadow-(--div-shadow) px-4 pt-2 pb-4">
        <div className=" pt-3">
          <div className="bg-[#304D69] rounded-xl relative">
            <div className="flex justify-between items-center ml-3  absolute text-center h-full  space-x-2">
              <div className="bg-[#F57273] rounded-full w-4 h-4"></div>
              <div className="bg-[#EAC52B] rounded-full w-4 h-4"></div>
              <div className="bg-[#4BD882] rounded-full w-4 h-4"></div>
            </div>
            <h2 className="text-center text-2xl p-4 drop-shadow-(--black-shadow) text-white">
              {dictionary.title}
            </h2>
          </div>
        </div>
        <div className="rounded-b-2xl rounded-t-xl px-4 py-1.5 mt-2 shadow-(--div-shadow-y) ">
          <h3 className=" roboto text-[#304D69] font-bold font-4xl">
            {dictionary.announcementTitle}
          </h3>
          <p className="pt-4 font-md text-[#6B829A] roboto tracking-wide">
            {dictionary.announcementBody}
          </p>

          <div className="mb-3">
            <div className="mt-6 bg-[#c3d5e8] px-6 rounded-xl">
              <div className="text-[#304D69] pt-2 font-semibold text-xl">
                {dictionary.features.planReviewTitle}
              </div>

              <div className="pt-4 pb-3 leading-4 roboto tracking-wide text-[#6B829A]">
                {dictionary.features.planReviewBody}
              </div>
            </div>
            <div className="mt-6 bg-[#c3d5e8] px-6 rounded-xl">
              <div className="text-[#304D69] pt-2 font-semibold text-xl">
                {dictionary.features.importArticlesTitle}
              </div>

              <div className="pt-4 pb-3 roboto leading-4 tracking-wide text-[#6B829A]">
                {dictionary.features.importArticlesBody}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
