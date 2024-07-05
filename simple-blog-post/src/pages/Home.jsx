import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: " Origin and History of Cherry",
      desc:
        "Cherries occupy unique position among temperate fruits. The cultivated cherries are divided into two main groups i.e. Sweet cherries (Primus avium L.) and Sour cherries (Prunus cerasus L.). The cultivation of sweet cherry has been taken up on a commercial scale in Kashmir Valley.",
      img:
        "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "Importance and Uses of Avocado",
      desc:
        "Avocado has twice as much energy value as in bananas. It is a rich source of fat, potassium, phosphorus, magnesium, calcium, chloride and ascorbic acid. It contains 245 calories, 26.4% fat, 368 mg potassium, 10 mg calcium, 38 mg phosphorus, 35 mg magnesium, 11 mg chlorine and 16 mg ascorbic acid per 100 g of edible portion. The protein content forms 1-4 per cent. Avocado also has fair amount of vitamin A and B.",
      img:
        "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    
    {
      id: 4,
      title: "Nutritional values of lemon",
      desc:
        "Lemons are a powerhouse of essential nutrients. They are rich in vitamin C, a potent antioxidant that boosts the immune system, enhances iron absorption, and promotes skin health. Additionally, they contain a good amount of potassium, which aids in nerve-muscle communication and regulates blood pressure. The soluble fiber in lemons, pectin, aids digestion and helps control hunger",
      img:
        "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

