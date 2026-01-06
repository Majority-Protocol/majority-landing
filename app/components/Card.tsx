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
    <div className="bg-white border border-gray-100 rounded-2xl w-full min-w-[300px] max-w-[411px] max-h-[424px] min-h-[360px] overflow-hidden flex flex-col shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/30">
      <div className="p-5 flex flex-col flex-1">
        <div className="h-[200px] mb-4 overflow-hidden rounded-xl">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-xl text-[#001842] font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};
