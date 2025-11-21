export const Card = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="bg-amber-400/20 rounded-xl w-full min-w-[300px] max-w-[411px] max-h-[424px] min-h-[360px] overflow-hidden flex flex-col">
      <div className="p-4 flex flex-col flex-1">
        <div className="h-[200px] mb-4 overflow-hidden rounded-lg">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-xl text-gray-600 font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};
