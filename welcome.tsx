import { CreateQuestionTypeSelector } from "../components/CreateQuestionTypeSelector";
import {
  Comp,
  PlayQuestionTypeSelector,
} from "../components/PlayQuestionTypeSelector";

export function Welcome() {
  return (
    <div className="font-sans">
      {/* 1. Top Hero Section */}
      <section
        id="hero"
        className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 text-white"
      >
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
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
                {/* Mobile mockup placeholder */}
                <div className="w-80 h-96 bg-white/10 rounded-3xl mx-auto backdrop-blur-sm border border-white/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Header 1 - How it works */}
      <section id="how-it-works-header" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-xl text-gray-600">
            From viewer to player in seconds.
          </p>
        </div>
      </section>

      {/* 3. Step 1 + Button */}
      <section id="step-1" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
              Step 1
            </span>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Create
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create a Game on Majority for your livestream. Build games around
              different interactive question formats.
            </p>
          </div>

          {/* Game types */}
          <CreateQuestionTypeSelector />

          {/* Steps */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-[#011A44] text-white rounded-full flex items-center justify-center font-semibold">
                1
              </div>
              <span className="text-lg">Configure Questions</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-[#011A44] text-white rounded-full flex items-center justify-center font-semibold">
                2
              </div>
              <span className="text-lg">Set the Stakes</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-[#011A44] text-white rounded-full flex items-center justify-center font-semibold">
                3
              </div>
              <span className="text-lg">Engage & Reward</span>
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

      {/* 4. Step 2 */}
      <section id="step-2" className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
              Step 2
            </span>
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">Fans Join</h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Fans can join your game by paying an entry fee — all fees go
              straight into a communal prize pool (or play for free when the
              creator enables a no-fee round).
            </p>
          </div>

          {/* Mobile mockup placeholder */}
          <div className="max-w-sm mx-auto">
            <div className="w-80 h-96 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20"></div>
          </div>
        </div>
      </section>

      {/* 5. Step 3 */}
      <section id="step-3" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
              Step 3
            </span>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Play
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fans answer questions prompted by creators. Earn points for
              getting the right answer, matching the crowd, or picking the
              unexpected winner.
            </p>
          </div>
          <PlayQuestionTypeSelector />
          {/* Mobile mockup placeholder */}
          <div className="max-w-sm mx-auto">
            <div className="w-80 h-96 bg-gray-100 rounded-3xl"></div>
          </div>
        </div>
      </section>

      {/* 6. Step 4 */}
      <section
        id="step-4"
        className="py-20 bg-gradient-to-br from-orange-400 to-yellow-500 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
              Step 4
            </span>
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Win Cash Prizes
            </h3>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              After each round, prizes are divided proportionally based on fan
              scores—play smarter to win cash prizes!
            </p>
          </div>

          {/* Mobile mockup placeholder */}
          <div className="max-w-sm mx-auto">
            <div className="w-80 h-96 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20"></div>
          </div>
        </div>
      </section>

      {/* 7. Download the app */}
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
