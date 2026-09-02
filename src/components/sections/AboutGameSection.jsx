import SciFiCard from "./card/SciFi";
import Csgo from "./../../video/csgo.mp4";
import Pod from "./../../img/pod.png";

export const AboutGameSection = () => {
  return (
    <>
    <h1 className="text-7xl font-bold text-white text-center mb-8">ABOUT GAME</h1>
    <SciFiCard>
        <p>
            DUSTLAND is a third-person looter-shooter. In the post-apocalyptic world, everyone has the only goal: to return alive after exploring the wasteland with as many valuable things as possible.
40 years ago a scientific catastrophe inflicted untold damage to the world. Now the planet is suffering from the unbearable boiling heat and all living creatures have either mutated or lost their sanity.
        </p>
    </SciFiCard>
    <SciFiCard>
      <video src={Csgo} controls muted loop className="w-full rounded-lg" />
    </SciFiCard>
    <SciFiCard>
        <p>A few lucky survivors found shelter in the unfinished seed vault called “Yanmei”. They hope to give new birth to the world by clearing it of monsters and anomalies. One of the most dangerous world regions is called DUSTLAND. Around two miles of hostile burnt ground. Ferocious sandstorms, recurrent anomalies and myriads of monsters… If mankind is destined to survive, people can’t but take up the challenge to clear this region.</p>
    </SciFiCard>
    <div className="flex justify-center items-center w-full">
        <img src={Pod} alt="pod" className="w-[40%] rounded-lg" />
    </div>
    </>
  );
};
