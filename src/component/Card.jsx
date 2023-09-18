const Card = ({ name, description, company, position }) => {
  return (
    <div className="bg-pink-700 p-5 w-fit items-center flex justify-center flex-col text-center gap-6">
      <p>{name}</p> 
      <p>{description}</p>
      <p>{company}</p>
      <p>{position}</p>
    </div>
  );
};

export default Card;
