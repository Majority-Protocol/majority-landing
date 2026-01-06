import { ANDROID_URL, DISCORD_URL, IOS_URL, X_URL } from "~/constants";

export const FooterContent = () => {
  return (
    <div className="bg-[#001842] text-white">
      <div className="flex flex-col md:flex-row justify-between gap-8 py-8 px-8 md:py-14 md:px-16 max-w-7xl mx-auto">
        <img
          src="/white-logo.svg"
          alt="Majority"
          className="h-8 md:h-12 w-auto"
        />
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 text-sm">
          <div className="space-y-4">
            <div className="uppercase tracking-widest text-white/60 font-semibold text-xs">
              Socials
            </div>
            <ul className="flex items-center gap-4">
              <li>
                <a
                  href={X_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <img src="/logos/logo-x.svg" alt="X" className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <img
                    src="/logos/logo-discord.svg"
                    alt="Discord"
                    className="h-5 w-5"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="uppercase tracking-widest text-white/60 font-semibold text-xs">
              Create
            </div>
            <ul className="space-y-3">
              <li>
                <a
                  href="/logos.zip"
                  className="hover:text-secondary transition-colors"
                >
                  Media Kit
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Majority-Protocol"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="uppercase tracking-widest text-white/60 font-semibold text-xs">
              Play
            </div>
            <ul className="space-y-3">
              <li>
                <a
                  href={IOS_URL}
                  className="hover:text-secondary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download for iOS
                </a>
              </li>
              <li>
                <a
                  href={ANDROID_URL}
                  className="hover:text-secondary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download for Android
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
