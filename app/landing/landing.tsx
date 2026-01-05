import { Card } from "~/components/Card";
import { CreateQuestionTypeSelector } from "~/components/CreateQuestionTypeSelector";
import { StepPill } from "~/components/StepPill";
import { ANDROID_URL, IOS_URL } from "~/constants";

export function LandingPage() {
  return (
    <div
      id="landing"
      className="flex flex-col gap-12 font-sans md:p-6 max-w-7xl mx-auto"
    >
      <section
        id="hero"
        className="bg-linear-223 from-sky-600 to-blue-700 text-white md:rounded-3xl md:px-20"
      >
        <div className="mx-auto px-4 pt-16">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex flex-col gap-20">
              <img
                src="/white-logo.svg"
                alt="Majority Logo"
                width={219}
                height={45}
              />
              <div className="flex flex-col items-center md:items-start text-center md:text-left gap-8 md:flex-row">
                <div className="lg:mb-0">
                  <h1 className="text-4xl lg:text-6xl font-semibold mb-6">
                    Engage and reward your audience
                  </h1>
                  <p className="text-xl mb-8 text-blue-100">
                    Crowdsource and distribute prizes in shows without
                    intermediaries
                  </p>
                  <div className="flex justify-center md:justify-start gap-4">
                    <a href={IOS_URL} target="_blank" rel="noopener noreferrer">
                      <img src="/app-store.svg" alt="Download on App Store" />
                    </a>
                    <a
                      href={ANDROID_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/google-play.svg" alt="Get it on Google Play" />
                    </a>
                  </div>
                </div>
                <img
                  src="/mobile-games.png"
                  className="w-80 md:pr-4"
                  alt="Mobile Games"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works-header" className="py-6">
        <div className="mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-xl text-gray-600">
            From viewer to player in seconds.
          </p>
        </div>
      </section>

      <section
        id="step-1"
        className="opacity-0 bg-linear-360 from-sky-100/20 to-sky-400/20 py-6 md:py-9 mx-6 md:px-10 rounded-3xl"
      >
        <div className="mx-auto px-4 space-y-12">
          <div className="text-center">
            <StepPill step={1} />
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
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
              className="inline-block bg-[linear-gradient(278deg,#1381D1_4.81%,#095AC2_96.79%)] text-white px-12 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
              style={{
                background:
                  "linear-gradient(278deg, #1381D1 4.81%, #095AC2 96.79%), #011A44",
              }}
            >
              Join the waiting list
            </a>
          </div>
        </div>
      </section>

      <section
        id="step-2"
        className="py-6 md:py-9 bg-linear-360 from-yellow-50/20 to-amber-400/20 text-sky-950 mx-6 h-[880px] relative rounded-3xl md:px-10 overflow-clip"
      >
        <div className="flex flex-col mx-auto px-4">
          <div className="text-center mb-12">
            <StepPill step={2} />
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Set the rules
            </h3>
            <p className="text-xl max-w-3xl mx-auto">
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
            className="absolute bottom-0 max-h-128 left-[50%] translate-x-[-50%]"
          />
        </div>
      </section>

      <section
        id="step-3"
        className="opacity-0 bg-linear-360 from-sky-100/20 to-sky-400/20 pt-6 md:pt-9 mx-6 rounded-3xl md:px-10"
      >
        <div className="mx-auto px-4">
          <div className="text-center mb-12">
            <StepPill step={3} />
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
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
        className="opacity-0 py-6 md:py-9 bg-linear-360 from-yellow-50/20 to-amber-400/20 text-gray-900 mx-6 h-[800px] rounded-3xl md:px-10"
      >
        <div className="mx-auto px-4 flex flex-col items-center">
          <div className="text-center mb-12">
            <StepPill step={4} />
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Reward &amp; Earn
            </h3>
            <p className="text-xl max-w-3xl mx-auto">
              Prizes are split according to the creator's settings—fans win, and
              creators earn for hosting.
            </p>
          </div>
          <img src="/mobile-area-3.png" className="w-80" alt="You won!" />
        </div>
      </section>

      <section id="download" className="opacity-0 text-gray-900">
        <div className="mx-auto px-4 text-center">
          <h2 className="text-xl lg:text-2xl mb-8">DOWNLOAD THE APP</h2>
          <div className="flex justify-center gap-4">
            <a href={IOS_URL} target="_blank" rel="noopener noreferrer">
              <img src="/app-store.svg" alt="Download on App Store" />
            </a>
            <a href={ANDROID_URL} target="_blank" rel="noopener noreferrer">
              <img src="/google-play.svg" alt="Get it on Google Play" />
            </a>
          </div>
        </div>
      </section>

      <section
        id="level-up"
        className="opacity-0 py-6 md:py-9 mx-6 rounded-3xl md:px-10"
      >
        <div className="mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Level-Up Your Live Show
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
