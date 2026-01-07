export const StepPill = ({ step }: { step: number }) => {
  return (
    <span className="bg-[#118fe5] text-white px-5 py-2.5 rounded-full text-sm font-bold mb-4 inline-block shadow-md shadow-[#118fe5]/25">
      Step {step}
    </span>
  );
};
