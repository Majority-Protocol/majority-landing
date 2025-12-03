export function meta() {
  return [
    { title: "Install Majority on Android | Majority" },
    {
      name: "description",
      content:
        "Learn how to install the Majority app APK on your Android device. Step-by-step instructions for enabling unknown sources and installing the app.",
    },
  ];
}

export default function AndroidPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-900">
        Install Majority on Android
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Follow these steps to install the Majority app on your Android device
      </p>

      <div className="space-y-12">
        {/* Step 1: Enable Unknown Apps */}
        <section className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-sky-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
              1
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Enable Installation from Unknown Sources
            </h2>
          </div>
          <p className="text-gray-700 mb-6">
            Before you can install the Majority app, you need to allow your
            browser to install apps from unknown sources. This is a one-time
            setting that you can change later if needed.
          </p>

          <ol className="space-y-4 mb-6">
            <li className="flex gap-3">
              <span className="font-semibold text-sky-600">1.</span>
              <span>
                Open the <strong>Settings</strong> app on your Android device
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-sky-600">2.</span>
              <span>
                Tap <strong>Apps</strong> or{" "}
                <strong>Apps & Notifications</strong>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-sky-600">3.</span>
              <span>
                Tap the <strong>three dots</strong> in the upper-right corner
                (if available)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-sky-600">4.</span>
              <span>
                Tap <strong>Special access</strong> or{" "}
                <strong>Special app access</strong>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-sky-600">5.</span>
              <span>
                Tap <strong>Install unknown apps</strong>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-sky-600">6.</span>
              <span>
                Select your browser (e.g., <strong>Chrome</strong>)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-sky-600">7.</span>
              <span>
                Toggle <strong>Allow from this source</strong> to ON
              </span>
            </li>
          </ol>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <img
                src="/android-settings-special-access.jpg"
                alt="Apps, More menu, and Special Access in Android settings"
                className="w-full rounded-lg mb-2"
              />
              <p className="text-sm text-gray-600 text-center">
                Navigate to Special access in Settings
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <img
                src="/android-settings-allow-unknown.jpg"
                alt="Install unknown apps, Chrome, and Allow from this source toggle in Android settings"
                className="w-full rounded-lg mb-2"
              />
              <p className="text-sm text-gray-600 text-center">
                Enable "Allow from this source" for your browser
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>Note:</strong> The exact steps may vary slightly depending
              on your Android version and device manufacturer. If you don't see
              the three dots menu, you can skip that step.
            </p>
          </div>
        </section>

        {/* Step 2: Download APK */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
              2
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Download the Majority APK
            </h2>
          </div>
          <p className="text-gray-700 mb-6">
            Download the Majority app APK file directly from our website using
            your Android device's browser.
          </p>

          <ol className="space-y-4 mb-6">
            <li className="flex gap-3">
              <span className="font-semibold text-blue-600">1.</span>
              <span>
                Open your browser (Chrome, Firefox, or any browser you enabled
                in Step 1)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-blue-600">2.</span>
              <span>Navigate to the Android download page on our website</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-blue-600">3.</span>
              <a
                className="text-blue-600 hover:underline"
                href="https://expo.dev/artifacts/eas/kVJyB8j2n2imHeNoxm82y1.apk"
              >
                Tap this link to download the APK file
              </a>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-blue-600">4.</span>
              <span>
                If you see a warning about the file being potentially harmful,
                tap <strong>Download anyway</strong> or <strong>OK</strong>
              </span>
            </li>
          </ol>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Security Tip:</strong> Only download APK files from
              trusted sources. The Majority app is safe to download directly
              from our official website.
            </p>
          </div>
        </section>

        {/* Step 3: Install APK */}
        <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
              3
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Install the App
            </h2>
          </div>
          <p className="text-gray-700 mb-6">
            Once the APK file is downloaded, you can install it directly from
            your device.
          </p>

          <ol className="space-y-4 mb-6">
            <li className="flex gap-3">
              <span className="font-semibold text-indigo-600">1.</span>
              <span>
                Open your browser's download menu. In Chrome, tap the{" "}
                <strong>three-dot</strong> menu button, then choose{" "}
                <strong>Downloads</strong>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-indigo-600">2.</span>
              <span>Find the Majority APK file in your downloads list</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-indigo-600">3.</span>
              <span>Tap the APK file name</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-indigo-600">4.</span>
              <span>
                Tap <strong>Install</strong> when prompted
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-indigo-600">5.</span>
              <span>
                Wait for the installation to complete. The app will appear in
                your app drawer when finished
              </span>
            </li>
          </ol>

          <div className="mt-6 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
            <p className="text-sm text-indigo-800">
              <strong>Tip:</strong> After installation, you can delete the APK
              file to free up storage space. This won't affect the installed
              app.
            </p>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Troubleshooting
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Installation blocked
              </h3>
              <p className="text-gray-700">
                Make sure you've completed Step 1 and enabled "Allow from this
                source" for your browser. You may need to go back to Settings
                and verify the toggle is ON.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Parse error</h3>
              <p className="text-gray-700">
                If you see a parse error, the APK file may be corrupted. Try
                downloading it again from our website.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Can't find the download
              </h3>
              <p className="text-gray-700">
                You can also use a file manager app to locate the APK file. It's
                usually in the <strong>Downloads</strong> folder. Tap the APK
                file in your file manager to install it.
              </p>
            </div>
          </div>
        </section>

        {/* What is APK */}
        <section className="bg-white border border-gray-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What is an APK?
          </h2>
          <p className="text-gray-700 mb-4">
            An APK (Android Package Kit) is the file format used to install
            applications on Android devices. When you install an app from the
            Google Play Store, it uses an APK file behind the scenes. By
            downloading and installing the APK directly, you're doing the same
            process manually.
          </p>
          <p className="text-gray-700">
            This method is commonly used for apps that aren't yet available on
            the Play Store, are in beta testing, or are distributed directly by
            developers.
          </p>
        </section>
      </div>
    </div>
  );
}
