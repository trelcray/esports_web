interface GameBannerProps {
    BannerUrl: string;
    title: string;
    adsCount: number;
}

export function GameBanner({BannerUrl, title, adsCount}: GameBannerProps) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={BannerUrl} alt="" />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 top-0">
        <strong className="font-bold text-white block">
          {title}
        </strong>
        <span className="text-zinc-300 text-sm block">{adsCount} anúncio(s)</span>
      </div>
    </a>
  );
}
