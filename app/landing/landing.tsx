import { Card } from "~/components/Card";
import { CreateQuestionTypeSelector } from "~/components/CreateQuestionTypeSelector";
import { StepPill } from "~/components/StepPill";
import { ANDROID_URL, IOS_URL } from "~/constants";

export function LandingPage() {
  return (
    <div
      id="landing"
      className="flex flex-col gap-12 font-sans md:p-6 max-w-7xl mx-auto bg-white"
    >
      <section
        id="hero"
        className="bg-linear-to-br from-primary-fade to-primary text-white md:rounded-3xl md:px-20 shadow-xl"
      >
        <div className="mx-auto px-4 pt-16">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex flex-col gap-20">
              <img
                src="/white-logo.svg"
                alt="Majority Logo"
                width={219}
                height={45}
                className="drop-shadow-lg"
              />
              <div className="flex flex-col items-center md:items-start text-center md:text-left gap-8 md:flex-row">
                <div className="lg:mb-0">
                  <h1 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
                    Engage and reward your audience
                  </h1>
                  <p className="text-xl mb-8 text-white/80">
                    Crowdsource and distribute prizes in shows without
                    intermediaries
                  </p>
                  <div className="flex justify-center md:justify-start gap-4">
                    <a
                      href={IOS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl"
                    >
                      <img src="/app-store.svg" alt="Download on App Store" />
                    </a>
                    <a
                      href={ANDROID_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl"
                    >
                      <img src="/google-play.svg" alt="Get it on Google Play" />
                    </a>
                  </div>
                </div>
                <img
                  src="/mobile-games.png"
                  className="w-80 md:pr-4 drop-shadow-2xl"
                  alt="Mobile Games"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works-header" className="py-8">
        <div className="mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-[#001842] mb-4 tracking-tight">
            How it works
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            From viewer to player in seconds.
          </p>
        </div>
      </section>

      <section
        id="step-1"
        className="opacity-0 bg-gradient-to-b from-gray-50 to-white py-8 md:py-12 mx-6 md:px-10 rounded-3xl border border-gray-100 shadow-sm"
      >
        <div className="mx-auto px-4 space-y-12">
          <div className="text-center">
            <StepPill step={1} />
            <h3 className="text-3xl lg:text-4xl font-bold text-[#001842] mb-4">
              Create a competition
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose configurable question types to spark fun, competitive
              interaction.
            </p>
          </div>
          <CreateQuestionTypeSelector selectorType="creator" />
          <div className="text-center">
            <a
              href="https://discord.gg/PuCH8sDj8j"
              target="_blank"
              rel="noreferrer"
              type="button"
              className="inline-block bg-linear-to-r from-primary-fade to-primary text-white px-12 py-4 rounded-full text-lg font-bold hover:scale-105 hover:-translate-y-0.5 hover:shadow-xl shadow-lg shadow-primary/30 transition-all duration-300"
            >
              Join the waiting list
            </a>
          </div>
        </div>
      </section>

      <section
        id="step-2"
        className="py-8 md:py-12 bg-gradient-to-b from-secondary/5 to-secondary/10 text-[#001842] mx-6 h-[880px] relative rounded-3xl md:px-10 overflow-clip border border-secondary/20"
      >
        <div className="flex flex-col mx-auto px-4">
          <div className="text-center mb-12">
            <StepPill step={2} />
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Set the rules
            </h3>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              Define entry requirements and prize details for fans.
            </p>
          </div>
          <img
            src="/fireworks.png"
            alt="SP Question"
            className="absolute bottom-0 max-w-4xl left-[50%] translate-x-[-50%]"
          />
          <img
            src="/mobile-area.png"
            alt="SP Question"
            className="absolute bottom-0 max-h-128 left-[50%] translate-x-[-50%] drop-shadow-2xl"
          />
        </div>
      </section>

      <section
        id="step-3"
        className="opacity-0 bg-gradient-to-b from-gray-50 to-white pt-8 md:pt-12 mx-6 rounded-3xl md:px-10 border border-gray-100 shadow-sm"
      >
        <div className="mx-auto px-4">
          <div className="text-center mb-12">
            <StepPill step={3} />
            <h3 className="text-3xl lg:text-4xl font-bold text-[#001842] mb-4">
              Fans compete
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fans answer timed, structured questions to compete for points.
            </p>
          </div>
          <CreateQuestionTypeSelector selectorType="player" />
        </div>
      </section>

      <section
        id="step-4"
        className="opacity-0 py-8 md:py-12 bg-gradient-to-b from-secondary/5 to-secondary/10 text-[#001842] mx-6 h-[800px] rounded-3xl md:px-10 border border-secondary/20"
      >
        <div className="mx-auto px-4 flex flex-col items-center">
          <div className="text-center mb-12">
            <StepPill step={4} />
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Reward &amp; Earn
            </h3>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              Prizes are split according to the creator's settings—fans win, and
              creators earn for hosting.
            </p>
          </div>
          <img
            src="/mobile-area-3.png"
            className="w-80 drop-shadow-2xl"
            alt="You won!"
          />
        </div>
      </section>

      <section id="download" className="opacity-0 text-[#001842] py-8">
        <div className="mx-auto px-4 text-center">
          <h2 className="text-xl lg:text-2xl mb-8 font-bold tracking-widest">
            DOWNLOAD THE APP
          </h2>
          <div className="flex justify-center gap-4">
            <a
              href={IOS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl"
            >
              <img src="/app-store.svg" alt="Download on App Store" />
            </a>
            <a
              href={ANDROID_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl"
            >
              <img src="/google-play.svg" alt="Get it on Google Play" />
            </a>
          </div>
        </div>
      </section>

      <section
        id="level-up"
        className="opacity-0 py-8 md:py-12 mx-6 rounded-3xl md:px-10 bg-gradient-to-b from-gray-50 to-white border border-gray-100"
      >
        <div className="mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-black text-[#001842] mb-4 tracking-tight">
              Level-Up Your Live Show
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Fast-paced challenges keep viewers engaged.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <Card
              title="Reward fans"
              description="Audience-funded prizes turn excitement into loyalty—more participants, bigger rewards."
              image="/cards/reward-fans.png"
            />
            <Card
              title="Crowdsource opinions"
              description="Surface what your audience really thinks."
              image="/cards/crowdsource-opinions.png"
            />
            <Card
              title="Earn beyond views and trading fees"
              description="Competition entry fees give creators fan-paid revenue."
              image="/cards/earn-beyond.png"
            />
            <Card
              title="Get Discovered"
              description="Interactive streams stand out in feeds."
              image="/cards/higher-discoverability.png"
            />
            <Card
              title="Strengthen your community"
              description="Shared games and prizes build belonging."
              image="/cards/stronger-community.png"
            />
            <Card
              title="Incentivize Growth"
              description="Fans earn a percentage of each ticket bought by people they refer, giving creators a built-in audience-growth incentive."
              image="/cards/referral-earnings.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
