import Footer from "./components/Footer";
import Header from "./components/Header";

type IData ={
  title:string;
  description: string;
  image: string;
}

const data:IData[] =[
  {
    title: "Arsalan",
    description: "Hello From Arsalan Blog",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8MHwwfHx8Mg%3D%3D"
},
{
  title: "Ahmed",
  description: "Hello From Ahmed Blog",
  image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8MHwwfHx8Mg%3D%3D"
},
{
  title: "Rasheed",
  description: "Hello From Rasheed Blog",
  image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8MHwwfHx8Mg%3D%3D"
},
{
  title: "Ahad",
  description: "Hello From Ahad Blog",
  image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8MHwwfHx8Mg%3D%3D"
},
{
  title: "Zubair",
  description: "Hello From Zubair Blog",
  image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfDB8MHx8fDI%3D"
},
{
  title: "Waqas",
  description: "Hello From Waqas Blog",
  image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8MHwwfHx8Mg%3D%3D"
},
]

export default function Home(){
  return(
    <>< Header/>
    <div className="parentContainer mt-20">
      {
        data.map((idata) =>(
          <div className="childContainer text-center">
            <div className="imageContainer mb-5">
              <img src={idata.image} alt="" />
              </div>
            <h1 className=" text-4xl"> {idata.title}</h1>
            <p className="text-2xl"> {idata.description}</p>
            <button className=" bg-slate-900 text-white p-2 rounded font-bold mt-5 hover:bg-gray-300 hover:text-black hover:text-opacity-85  "> Read More</button>
            </div>
        ))
      }
      </div>
    <Footer />
    </>
  );
}