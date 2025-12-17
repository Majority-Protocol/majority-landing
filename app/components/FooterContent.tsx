import { ANDROID_URL, DISCORD_URL, IOS_URL, X_URL } from "~/constants";

export const FooterContent = () => {
  return (
    <div className="text-white">
      <div className="flex justify-between gap-8 py-6 px-8 md:py-12 md:px-16">
        <img
          src="/white-logo.svg"
          alt="Majority"
          className="h-6 md:h-12 w-auto"
        />
        <div className="flex flex-col md:flex-row gap-16 text-sm">
          <div className="space-y-3">
            <div className="uppercase tracking-wide text-white/80">Socials</div>
            <ul className="flex items-center gap-2">
              <li>
                <a
                  href={X_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  <img src="/logos/logo-x.svg" alt="X" className="h-4 w-4" />
                </a>
              </li>
              <li>
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  <img
                    src="/logos/logo-discord.svg"
                    alt="Discord"
                    className="h-4 w-4"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase tracking-wide text-white/80">Create</div>
            <ul className="space-y-2">
              <li>
                <a href="/logos.zip" className="hover:underline">
                  Media Kit
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Majority-Protocol"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase tracking-wide text-white/80">Play</div>
            <ul className="space-y-2">
              <li>
                <a
                  href={IOS_URL}
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download for iOS
                </a>
              </li>
              <li>
                <a
                  href={ANDROID_URL}
                  className="hover:underline"
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
