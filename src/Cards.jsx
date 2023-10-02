import Card from "./componenets/Card";
import {
  faClockRotateLeft,
  faDumbbell,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
const text1 =
  "Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.";
const text2 =
  "With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life.";
const text3 =
  "Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.";

function Cards() {
  return (
    <div className="flex -mt-[7rem] gap-8 justify-between px-24">
      <Card text={text1} icon={faClockRotateLeft} img={"bg-back-r"}>
        progression
      </Card>
      <Card text={text2} icon={faDumbbell} img={"bg-legs-p"}>
        workout
      </Card>
      <Card text={text3} icon={faListCheck} img={"bg-back-w"}>
        nutritions
      </Card>
    </div>
  );
}

export default Cards;
