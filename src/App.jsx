import Card from "./component/Card";

import "./App.css";

function App() {
  const data = [
    {
      id: 1,
      description:
        "Software Engineer with a passion for building scalable web applications.",
      position: "Software Engineer",
      company: "TechCorp",
      name: "Alice Johnson",
      image: "https://example.com/alice.jpg",
    },
    {
      id: 2,
      description:
        "Marketing Specialist with expertise in digital marketing strategies.",
      position: "Marketing Specialist",
      company: "Marketing Pro",
      name: "Bob Smith",
      image: "https://example.com/bob.jpg",
    },
    {
      id: 3,
      description:
        "Experienced Project Manager skilled in leading cross-functional teams.",
      position: "Project Manager",
      company: "Project Solutions Inc.",
      name: "Carol Davis",
      image: "https://example.com/carol.jpg",
    },
    {
      id: 4,
      description:
        "Creative Graphic Designer known for delivering stunning visuals.",
      position: "Graphic Designer",
      company: "DesignMasters",
      name: "David Brown",
      image: "https://example.com/david.jpg",
    },
  ];

  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <h1>I am a {data[1].company}</h1>

      <div className="flex gap-5 m-20">
        {data.map((item) => (
          <Card key={item.id} name={item.name} description={item.description}  company={item.company}  position={item.position}/>
        ))}
      </div>
    </div>
  );
}

export default App;
