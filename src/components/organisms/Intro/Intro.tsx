import { MarqueeText } from "@/components/atomic"
import { ImageWithScrollText } from "@/components/molecules/";


interface IntroProps {
    data: {
        scrollText: {
            text: string;
            text2: string;
        }
        img: string;
        MarqueeText: {
            text: string;
            text2: string;
        }
    };
}
  
export default function Intro({ data }: IntroProps) {


  return (
    <section>
      <MarqueeText text={data?.MarqueeText} />
      <ImageWithScrollText
        src={data?.img}
        scrollText={data?.scrollText}
        alt="Imagem de exemplo"
      />

    </section>
  );
}
