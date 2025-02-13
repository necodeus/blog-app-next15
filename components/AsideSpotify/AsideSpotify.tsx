import moment from 'moment/min/moment-with-locales';
moment.locale("pl");

type Props = {
  spotifyActivity: any;
};

export const AsideSpotify = ({ spotifyActivity }: Props) => {
  return (
    <div className="flex flex-col gap-[30px]">
      {spotifyActivity.player.map((song: any, song_index: number) => {
        if (song.type === "history") {
          return (
            <div className="opacity-[0.5] flex items-center" key={song_index}>
              <div
                className="w-[60px] h-[60px] min-w-[60px] min-h-[60px] bg-[black] bg-center bg-cover mr-[10px]"
                style={{
                  backgroundImage: `url(${song?.images?.[0]?.url})`,
                }}
              ></div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center">
                  <div className="leading-[1.2] font-bold text-[10px] uppercase tracking-[2px]">
                    {moment(song.played_at).fromNow()}
                  </div>
                </div>
                <div>
                  <div className="leading-[1.6] font-semibold text-[16px]">
                    {song.name}
                  </div>
                  <div className="leading-[1.2] font-medium text-[14px]">
                    {song.artists}
                  </div>
                </div>
              </div>
            </div>
          );
        }

        if (song.type === "current") {
          return (
            <div className="flex items-center" key={song_index}>
              <div
                className="w-[60px] h-[60px] min-w-[60px] min-h-[60px] bg-[black] bg-center bg-cover mr-[10px]"
                style={{
                  backgroundImage: `url(${song?.images?.slice(-1).pop()?.url})`,
                }}
              ></div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center">
                  <div className="leading-[1.2] font-bold text-[10px] uppercase tracking-[2px]">
                    Teraz
                  </div>
                  <div className="rounded-full bg-[#42a200] w-[4px] h-[4px] ml-[5px]"></div>
                </div>
                <div>
                  <div className="font-semibold text-[16px] leading-[1.6]">
                    {song.name}
                  </div>
                  <div className="font-medium text-[14px] leading-[1.2]">
                    {song.artists}
                  </div>
                </div>
              </div>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};
