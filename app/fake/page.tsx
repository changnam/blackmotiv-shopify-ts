import * as D from "@/data";

export default function Page() {
  return (
    <div>
      <p>
        {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
      </p>
      <img src={D.randomAvatar()} alt="random avatar" height="50" />
      <img src={D.randomImage()} alt="random image" height="500" />
    </div>
  );
}
