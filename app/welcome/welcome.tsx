import { StepPill } from "~/components/StepPill";
import { CreateQuestionTypeSelector } from "../components/CreateQuestionTypeSelector";
import {
  PlayQuestionTypeSelector,
} from "../components/PlayQuestionTypeSelector";

export function Welcome() {
  return (
    <div className="flex flex-col gap-12 font-sans p-6">
      <section
        id="hero"
        className="h-[650px] bg-linear-223 from-sky-600 to-blue-700 text-white rounded-3xl"
      >
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex flex-col gap-20">
              <img src="/white-logo.svg" alt="M ajority Logo" width={219} height={45} />
              <div className="flex flex-row">
                <div className="lg:mb-0">
                  <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                    Create interactive, rewarding shows
                  </h1>
                  <p className="text-xl mb-8 text-blue-100">
                    Where creators and fans unite for live, immersive entertainment.
                  </p>
                  <div className="flex gap-4">
                    <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                      Download on App Store
                    </button>
                    <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                      Get it on Google Play
                    </button>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative">
                      <div className="w-80 h-96 mx-auto">
                      <img src="/mobile-games.png" alt="Mobile Games" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works-header" className="py-6">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-xl text-gray-600">
            From viewer to player in seconds.
          </p>
        </div>
      </section>

      <section id="step-1" className="bg-linear-270 from-sky-100/20 to-sky-400/20 py-20 mx-6 rounded-3xl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <StepPill step={1} />
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Create
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create a Game on Majority for your livestream. Build games around
              different interactive question formats.
            </p>
          </div>
          <CreateQuestionTypeSelector />
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-sky-950 text-white rounded-full flex items-center justify-center font-semibold">
                1
              </div>
              <span className="text-lg text-sky-950">Configure Questions</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-sky-950 text-white rounded-full flex items-center justify-center font-semibold">
                2
              </div>
              <span className="text-lg text-sky-950">Set the Stakes</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-sky-950 text-white rounded-full flex items-center justify-center font-semibold">
                3
              </div>
              <span className="text-lg text-sky-950">Engage & Reward</span>
            </div>
          </div>

          <div className="text-center">
            <button
              type="button"
              className="bg-[linear-gradient(278deg,#1381D1_4.81%,#095AC2_96.79%)] text-white px-12 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
              style={{
                background:
                  "linear-gradient(278deg, #1381D1 4.81%, #095AC2 96.79%), #011A44",
              }}
            >
              Create your own quiz
            </button>
          </div>
        </div>
      </section>

      <section id="step-2" className="py-20 bg-linear-270 from-yellow-50/20 to-amber-400/20 text-sky-950 mx-6 h-[1000px] relative rounded-3xl overflow-clip">
        <div className="container flex flex-col mx-auto px-4">
          <div className="text-center mb-12">
            <StepPill step={2} />
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">Fans Join</h3>
            <p className="text-xl max-w-3xl mx-auto">
              Fans can join your game by paying an entry fee — all fees go
              straight into a communal prize pool (or play for free when the
              creator enables a no-fee round).
            </p>
          </div>
          <img src="/fireworks.png" alt="SP Question" className="absolute bottom-0 max-w-4xl left-[50%] translate-x-[-50%]" />
          <img src="/mobile-area.png" alt="SP Question" className="absolute bottom-0 max-h-128 left-[50%] translate-x-[-50%]" />
        </div>
      </section>

      <section id="step-3" className="py-20 bg-linear-270 from-sky-100/20 to-sky-400/20 mx-6 h-[800px] relative rounded-3xl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <StepPill step={3} />
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Play
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fans answer questions prompted by creators. Earn points for
              getting the right answer, matching the crowd, or picking the
              unexpected winner.
            </p>
          </div>
          <div className="flex flex-row absolute bottom-0 left-[50%] translate-x-[-50%] justify-center items-center gap-8">
            <PlayQuestionTypeSelector />
            <img src="/mobile-area-2.png" alt="Mobile Games" className="max-h-128" />
          </div>
        </div>
      </section>

      <section
        id="step-4"
        className="py-20 bg-linear-270 from-yellow-50/20 to-amber-400/20 text-gray-900 mx-6 h-[800px] relative rounded-3xl"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <StepPill step={4} />
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Win Cash Prizes
            </h3>
            <p className="text-xl max-w-3xl mx-auto">
              After each round, prizes are divided proportionally based on fan
              scores—play smarter to win cash prizes!
            </p>
          </div>

          <img src="/mobile-area-3.png" alt="Mobile Games" className="max-h-128 absolute bottom-0 left-[50%] translate-x-[-50%]" />
        </div>
      </section>

      <section id="download" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            DOWNLOAD THE APP
          </h2>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Download on App Store
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              Get it on Google Play
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
