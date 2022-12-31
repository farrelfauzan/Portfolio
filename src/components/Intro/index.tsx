import { BannerWelcome } from '../molecul/BannerWelcome';
import { Introduction } from '../molecul/Introduction';

export const IntroSection = () => {
  return (
    <div className="h-[870px] sm:h-[870px] xl:h-[870px] 2xl:h-[870px]">
      <BannerWelcome />
      <Introduction />
    </div>
  );
};
