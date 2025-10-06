export const FooterContent = () => {
  return (
    <div className="text-white">
      <div className="flex justify-between gap-8 py-6 px-8 md:py-12 md:px-16">
        <img src="/white-logo.svg" alt="Majority" className="h-6 md:h-12 w-auto" />
        <div className="flex flex-row gap-16 text-sm">
          <div className="space-y-3">
            <div className="uppercase tracking-wide text-white/80">Socials</div>
            <ul className="space-y-2">
              <li>
                <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:underline">X</a>
              </li>
              <li>
                <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:underline">TikTok</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase tracking-wide text-white/80">Create</div>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
              </li>
              <li>
                <a href="/docs" className="hover:underline">Docs</a>
              </li>
              <li>
                <a href="/media-kit" className="hover:underline">Media Kit</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase tracking-wide text-white/80">Play</div>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:underline">Download for iOS</a>
              </li>
              <li>
                <a href="/docs" className="hover:underline">Download for Android</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
     </div>
  );
};