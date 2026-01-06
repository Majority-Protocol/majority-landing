// import majorityLogo from "~/assets/majority.webp";
import { Link } from "react-router";
import downloadAndroid from "~/assets/download-android.png";
import downloadIos from "~/assets/download-ios.svg";
import { Avatar, AvatarGroup, AvatarImage } from "~/components/avatar";
import { Button } from "~/components/button";
import {
  ANDROID_URL,
  DISCORD_URL,
  IOS_URL,
  X_URL,
  YOUTUBE_URL,
} from "~/constants";

const _MajorityIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 412 360"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M0 42.0823V344.755C0 356.515 14.3709 362.231 22.4482 353.685L154.398 214.066C182.414 184.423 229.586 184.423 257.602 214.066L389.552 353.685C397.629 362.231 412 356.515 412 344.755V42.0823C412 2.06697 361.347 -15.2792 336.817 16.3358L237.603 144.206C221.589 164.846 190.411 164.846 174.397 144.206L75.1831 16.3358C50.6531 -15.2792 0 2.06697 0 42.0823Z"
      fill="currentColor"
    />
  </svg>
);

const Discord = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 256 199"
    width="256"
    height="199"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    className={className}
  >
    <path
      d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z"
      fill="currentColor"
    />
  </svg>
);

const _Instagram = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 264.583 264.583"
  >
    <defs>
      <radialGradient
        id="instagram_icon-f"
        cx="158.429"
        cy="578.088"
        r="52.352"
        fx="158.429"
        fy="578.088"
        gradientTransform="matrix(0 -4.03418 4.28018 0 -2332.227 942.236)"
        gradientUnits="userSpaceOnUse"
      />
      <radialGradient
        id="instagram_icon-g"
        cx="172.615"
        cy="600.692"
        r="65"
        fx="172.615"
        fy="600.692"
        gradientTransform="matrix(.67441 -1.16203 1.51283 .87801 -814.366 -47.835)"
        gradientUnits="userSpaceOnUse"
      />
      <radialGradient
        id="instagram_icon-h"
        cx="144.012"
        cy="51.337"
        r="67.081"
        fx="144.012"
        fy="51.337"
        gradientTransform="matrix(-2.3989 .67549 -.23008 -.81732 464.996 -26.404)"
        gradientUnits="userSpaceOnUse"
      />
      <radialGradient
        id="instagram_icon-e"
        cx="199.788"
        cy="628.438"
        r="52.352"
        fx="199.788"
        fy="628.438"
        gradientTransform="matrix(-3.10797 .87652 -.6315 -2.23914 1345.65 1374.198)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient id="instagram_icon-d">
        <stop offset="0" stop-color="#ff005f" />
        <stop offset="1" stop-color="#fc01d8" />
      </linearGradient>
      <linearGradient id="instagram_icon-c">
        <stop offset="0" stop-color="#780cff" />
        <stop offset="1" stop-color="#820bff" stop-opacity="0" />
      </linearGradient>
      <linearGradient id="instagram_icon-b">
        <stop offset="0" stop-color="#fc0" />
        <stop offset="1" stop-color="#fc0" stop-opacity="0" />
      </linearGradient>
      <linearGradient id="instagram_icon-a">
        <stop offset="0" stop-color="#fc0" />
        <stop offset=".124" stop-color="#fc0" />
        <stop offset=".567" stop-color="#fe4a05" />
        <stop offset=".694" stop-color="#ff0f3f" />
        <stop offset="1" stop-color="#fe0657" stop-opacity="0" />
      </linearGradient>
    </defs>
    <path
      fill="url(#instagram_icon-e)"
      d="M204.15 18.143c-55.23 0-71.383.057-74.523.317-11.334.943-18.387 2.728-26.07 6.554-5.922 2.942-10.592 6.351-15.201 11.13-8.394 8.716-13.481 19.439-15.323 32.184-.895 6.188-1.156 7.45-1.209 39.056-.02 10.536 0 24.4 0 42.999 0 55.2.062 71.341.326 74.476.916 11.032 2.645 17.973 6.308 25.565 7 14.533 20.37 25.443 36.12 29.514 5.453 1.404 11.476 2.178 19.208 2.544 3.277.142 36.669.244 70.081.244 33.413 0 66.826-.04 70.02-.203 8.954-.422 14.153-1.12 19.901-2.606 15.852-4.09 28.977-14.838 36.12-29.575 3.591-7.409 5.412-14.614 6.236-25.07.18-2.28.255-38.626.255-74.924 0-36.304-.082-72.583-.26-74.863-.835-10.625-2.656-17.77-6.364-25.32-3.042-6.182-6.42-10.799-11.324-15.519-8.752-8.361-19.455-13.45-32.21-15.29-6.18-.894-7.41-1.158-39.033-1.213z"
      transform="translate(-71.816 -18.143)"
    />
    <path
      fill="url(#instagram_icon-f)"
      d="M204.15 18.143c-55.23 0-71.383.057-74.523.317-11.334.943-18.387 2.728-26.07 6.554-5.922 2.942-10.592 6.351-15.201 11.13-8.394 8.716-13.481 19.439-15.323 32.184-.895 6.188-1.156 7.45-1.209 39.056-.02 10.536 0 24.4 0 42.999 0 55.2.062 71.341.326 74.476.916 11.032 2.645 17.973 6.308 25.565 7 14.533 20.37 25.443 36.12 29.514 5.453 1.404 11.476 2.178 19.208 2.544 3.277.142 36.669.244 70.081.244 33.413 0 66.826-.04 70.02-.203 8.954-.422 14.153-1.12 19.901-2.606 15.852-4.09 28.977-14.838 36.12-29.575 3.591-7.409 5.412-14.614 6.236-25.07.18-2.28.255-38.626.255-74.924 0-36.304-.082-72.583-.26-74.863-.835-10.625-2.656-17.77-6.364-25.32-3.042-6.182-6.42-10.799-11.324-15.519-8.752-8.361-19.455-13.45-32.21-15.29-6.18-.894-7.41-1.158-39.033-1.213z"
      transform="translate(-71.816 -18.143)"
    />
    <path
      fill="url(#instagram_icon-g)"
      d="M204.15 18.143c-55.23 0-71.383.057-74.523.317-11.334.943-18.387 2.728-26.07 6.554-5.922 2.942-10.592 6.351-15.201 11.13-8.394 8.716-13.481 19.439-15.323 32.184-.895 6.188-1.156 7.45-1.209 39.056-.02 10.536 0 24.4 0 42.999 0 55.2.062 71.341.326 74.476.916 11.032 2.645 17.973 6.308 25.565 7 14.533 20.37 25.443 36.12 29.514 5.453 1.404 11.476 2.178 19.208 2.544 3.277.142 36.669.244 70.081.244 33.413 0 66.826-.04 70.02-.203 8.954-.422 14.153-1.12 19.901-2.606 15.852-4.09 28.977-14.838 36.12-29.575 3.591-7.409 5.412-14.614 6.236-25.07.18-2.28.255-38.626.255-74.924 0-36.304-.082-72.583-.26-74.863-.835-10.625-2.656-17.77-6.364-25.32-3.042-6.182-6.42-10.799-11.324-15.519-8.752-8.361-19.455-13.45-32.21-15.29-6.18-.894-7.41-1.158-39.033-1.213z"
      transform="translate(-71.816 -18.143)"
    />
    <path
      fill="url(#instagram_icon-h)"
      d="M204.15 18.143c-55.23 0-71.383.057-74.523.317-11.334.943-18.387 2.728-26.07 6.554-5.922 2.942-10.592 6.351-15.201 11.13-8.394 8.716-13.481 19.439-15.323 32.184-.895 6.188-1.156 7.45-1.209 39.056-.02 10.536 0 24.4 0 42.999 0 55.2.062 71.341.326 74.476.916 11.032 2.645 17.973 6.308 25.565 7 14.533 20.37 25.443 36.12 29.514 5.453 1.404 11.476 2.178 19.208 2.544 3.277.142 36.669.244 70.081.244 33.413 0 66.826-.04 70.02-.203 8.954-.422 14.153-1.12 19.901-2.606 15.852-4.09 28.977-14.838 36.12-29.575 3.591-7.409 5.412-14.614 6.236-25.07.18-2.28.255-38.626.255-74.924 0-36.304-.082-72.583-.26-74.863-.835-10.625-2.656-17.77-6.364-25.32-3.042-6.182-6.42-10.799-11.324-15.519-8.752-8.361-19.455-13.45-32.21-15.29-6.18-.894-7.41-1.158-39.033-1.213z"
      transform="translate(-71.816 -18.143)"
    />
    <path
      fill="#fff"
      d="M132.345 33.973c-26.716 0-30.07.117-40.563.594-10.472.48-17.62 2.136-23.876 4.567-6.47 2.51-11.958 5.87-17.426 11.335-5.472 5.464-8.834 10.948-11.354 17.412-2.44 6.252-4.1 13.397-4.57 23.858-.47 10.486-.593 13.838-.593 40.535 0 26.697.119 30.037.594 40.522.482 10.465 2.14 17.609 4.57 23.859 2.515 6.465 5.876 11.95 11.346 17.414 5.466 5.468 10.955 8.834 17.42 11.345 6.26 2.431 13.41 4.088 23.881 4.567 10.493.477 13.844.594 40.559.594 26.719 0 30.061-.117 40.555-.594 10.472-.48 17.63-2.136 23.888-4.567 6.468-2.51 11.948-5.877 17.414-11.345 5.472-5.464 8.834-10.949 11.354-17.412 2.419-6.252 4.079-13.398 4.57-23.858.472-10.486.595-13.828.595-40.525s-.123-30.047-.594-40.533c-.492-10.465-2.152-17.608-4.57-23.858-2.521-6.466-5.883-11.95-11.355-17.414-5.472-5.468-10.944-8.827-17.42-11.335-6.271-2.431-13.424-4.088-23.897-4.567-10.493-.477-13.834-.594-40.558-.594zm-8.825 17.715c2.62-.004 5.542 0 8.825 0 26.266 0 29.38.094 39.752.565 9.591.438 14.797 2.04 18.264 3.385 4.591 1.782 7.864 3.912 11.305 7.352 3.443 3.44 5.575 6.717 7.362 11.305 1.346 3.46 2.951 8.663 3.388 18.247.47 10.363.573 13.475.573 39.71 0 26.233-.102 29.346-.573 39.709-.44 9.584-2.042 14.786-3.388 18.247-1.783 4.587-3.919 7.854-7.362 11.292-3.443 3.441-6.712 5.57-11.305 7.352-3.463 1.352-8.673 2.95-18.264 3.388-10.37.47-13.486.573-39.752.573-26.268 0-29.38-.102-39.751-.573-9.592-.443-14.797-2.044-18.267-3.39-4.59-1.781-7.87-3.911-11.313-7.352-3.443-3.44-5.574-6.709-7.362-11.298-1.346-3.461-2.95-8.663-3.387-18.247-.472-10.363-.566-13.476-.566-39.726s.094-29.347.566-39.71c.438-9.584 2.04-14.786 3.387-18.25 1.783-4.588 3.919-7.865 7.362-11.305 3.443-3.441 6.722-5.57 11.313-7.357 3.468-1.351 8.675-2.949 18.267-3.389 9.075-.41 12.592-.532 30.926-.553zm61.337 16.322c-6.518 0-11.805 5.277-11.805 11.792 0 6.512 5.287 11.796 11.805 11.796 6.517 0 11.804-5.284 11.804-11.796 0-6.513-5.287-11.796-11.805-11.796zm-52.512 13.782c-27.9 0-50.519 22.603-50.519 50.482 0 27.879 22.62 50.471 50.52 50.471s50.51-22.592 50.51-50.471c0-27.879-22.613-50.482-50.513-50.482zm0 17.715c18.11 0 32.792 14.67 32.792 32.767 0 18.096-14.683 32.767-32.792 32.767-18.11 0-32.791-14.671-32.791-32.767 0-18.098 14.68-32.767 32.791-32.767z"
    />
  </svg>
);

const X = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1200"
    height="1227"
    fill="none"
    viewBox="0 0 1200 1227"
    className={className}
  >
    <path
      fill="currentColor"
      d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
    />
  </svg>
);

const Youtube = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 256 180"
    className={className}
  >
    <path
      fill="currentColor"
      d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"
    />
    <path fill="white" d="m102.421 128.06 66.328-38.418-66.328-38.418z" />
  </svg>
);

export default function Homepage() {
  return (
    <div className="relative bg-white flex flex-col">
      <div className="fixed top-0 z-50 w-full bg-transparent">
        <div className="px-4 md:px-8 max-w-7xl mx-auto">
          <header className="flex h-(--header-height) items-center gap-2">
            <div className="flex items-center gap-4 text-primary">
              <Link
                to={DISCORD_URL}
                className="hover:scale-110 hover:text-secondary active:scale-95 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Discord className="sm:size-8 size-5" />
              </Link>
              <Link
                to={X_URL}
                className="hover:scale-110 hover:text-secondary active:scale-95 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <X className="sm:size-6 size-5" />
              </Link>
              <Link
                to={YOUTUBE_URL}
                className="hover:scale-110 hover:text-secondary active:scale-95 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="sm:size-8 size-5" />
              </Link>
            </div>
            <Button
              variant="secondary"
              className="ml-auto scale-75 md:scale-100 origin-right hover:scale-75 md:hover:scale-100 active:scale-75 md:active:scale-100 hover:brightness-110 active:brightness-95"
              nativeButton={false}
              render={<Link to="/host">Create Show</Link>}
            />
          </header>
        </div>
      </div>
      <Background />
      <div className="flex flex-col items-center z-10 relative pt-24 md:pt-28 pb-4 px-4 space-y-4 md:space-y-6">
        <img
          src="/logos/majority-logo-large.svg"
          alt="Majority"
          className="w-48 md:w-64 h-auto rounded-2xl"
        />
        <div className="h-1 md:h-2"></div>
        <div className="flex flex-col items-center text-center space-y-2 overflow-visible">
          <h1 className="font-black text-3xl md:text-6xl lg:text-7xl text-[#001842] tracking-tight">
            Think like the crowd.
          </h1>
          <h1 className="font-black text-3xl md:text-6xl lg:text-7xl text-gradient-gold tracking-tight leading-tight pb-1">
            Win big.
          </h1>
        </div>
        <p className="text-gray-600 max-w-2xl text-center text-pretty text-sm md:text-xl font-medium">
          Mobile game shows — Win cash by thinking like the crowd.{" "}
        </p>
        <div className="flex flex-col items-center gap-4 pt-2">
          <div className="flex items-center gap-4">
            <Link
              to={IOS_URL}
              className="hover:scale-105 hover:-translate-y-1 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={downloadIos}
                alt="Download iOS app"
                className="w-36 md:w-44"
              />
            </Link>
            <Link
              to={ANDROID_URL}
              className="hover:scale-105 hover:-translate-y-1 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={downloadAndroid}
                alt="Download Android app"
                className="w-40 md:w-48"
              />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 pt-2">
          <AvatarGroup>
            {["alex", "maria", "james", "sofia"].map((name) => (
              <Avatar key={name} className="ring-2 ring-secondary/50!">
                <AvatarImage
                  avatar={`https://i.pravatar.cc/150?u=${name}`}
                  address={name}
                />
              </Avatar>
            ))}
          </AvatarGroup>
          <div className="flex flex-col text-sm text-gray-600">
            <p>Loved by</p>
            <p className="font-bold text-[#001842]">thousands</p>
          </div>
        </div>
      </div>
      <footer className="z-50 bg-transparent py-6 pb-20 md:py-4">
        <div className="flex justify-center items-center text-sm text-gray-500 gap-6 md:gap-8">
          <Link
            to="/terms"
            className="hover:text-[#001842] hover:underline transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            to="/privacy"
            className="hover:text-[#001842] hover:underline transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}

const Background = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Soft blue gradient in center */}
    <div className="absolute h-[600px] w-[800px] blur-3xl top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/5 rounded-full" />
    {/* Gold accent - right side */}
    <div className="hidden lg:block absolute size-[500px] right-[-200px] top-1/4 bg-secondary/10 rounded-full blur-3xl" />
    {/* Blue accent - left side */}
    <div className="hidden lg:block absolute size-[400px] left-[-150px] bottom-1/4 bg-primary/10 rounded-full blur-3xl" />
    {/* Small gold accent - top */}
    <div className="absolute size-[300px] right-1/4 top-[-100px] bg-secondary/15 rounded-full blur-3xl" />
  </div>
);

export const handle = "none";
