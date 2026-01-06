export const StepPill = ({ step }: { step: number }) => {
  return (
    <span className="bg-linear-to-r from-primary-fade to-primary text-white px-5 py-2.5 rounded-full text-sm font-bold mb-4 inline-block shadow-md shadow-primary/25">
      Step {step}
    </span>
  );
};
