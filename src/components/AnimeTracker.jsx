import { FaPlus } from "react-icons/fa";
import Page from "./layout/Page";
import Animecore from "./core/Animecore";

const AnimeTracker = () => {
  return (
    <Page title={"Anime Tracker"}>
      <p>
        You can every time you watch an episode of your anime come here and
        mark.
      </p>
      <div className="flex gap-2 my-10">
        <div className="flex items-center border-2 border-transparent p-1 rounded-md cursor-pointer gap-1 smooth-transition hover:scale-95 dark:text-dark-text dark:hover:bg-dark-component dark:hover:border-dark-backgroundL">
          <FaPlus />
          <span className="font-medium pb-0.5">Add Anime</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-20 justify-center">
        <Animecore
          title={"Dosanko Gal wa Namara Menkoi"}
          img={"/images/anime/1.jpe"}
          episodes={12}
          url={
            "https://anime4up.cam/episode/dosanko-gal-wa-namara-menkoi-الحلقة-1/"
          }
          description={
            "ينتقل تلميذ الثانوية “تسوباسا” إلى مدينة “كيتامي” في “هوكايدو“، حيث يلتقي بـ «فتاة» في محطة للحافلات. منظرها يلتقط قلبه، وهي تقف بمفردها مقابل مشهد الثلج الأبيض، عارية الأرجل على الرغم من البرد القارس."
          }
          current={1}
        />
        <Animecore
          title={"Suki na Ko ga Megane wo Wasureta"}
          img={"/images/anime/2.jpe"}
          episodes={13}
          url={
            "https://anime4up.cam/episode/dosanko-gal-wa-namara-menkoi-الحلقة-1/"
          }
          description={
"“كايدي كومورا“، بصفته زميل “آي مي” في المكتب، فإنه دائمًا ما يركز انتباهه عليها. انجذب إلى سحرها اللطيف، وكل ما يتمناه هو أنها ستنظر إليه بتلك العيون الجميلة تحت نظارتها. ولكن بعد أيام قليلة من معرفته بها، لاحظ “كايدي” شيئًا مختلفًا عن “آي“، عيناها تحدقان ونظارتها غير موجودة. ومع ذلك، لا يزال يجدها رائعة! بشكل غير متوقع، تميل “آي” إلى نسيان نظارتها مع أن نظرها سيء للغاية، وهي تواجه صعوبة في قضاء يومها في المدرسة. لحسن الحظ، “كايدي” أكثر من مستعد لمساعدتها، وعندما تبدأ “آي” في الاعتماد عليه، تزداد مشاعر “كايدي” تجاهها أكثر. وبالمثل، على الرغم من قصر نظرها، أصبح “كايدي” ببطء الشخص الذي تأمل “آي” دائمًا في رؤيته."          }
          current={2}
        />
      </div>
    </Page>
  );
};

export default AnimeTracker;
