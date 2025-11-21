export const StepPill = ({ step }: { step: number }) => {
  return (
    <span className="bg-sky-950 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
      Step {step}
    </span>
  );
};
