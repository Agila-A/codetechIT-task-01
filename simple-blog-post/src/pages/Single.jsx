import React, { useEffect, useState } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import DOMPurify from "dompurify";

const Single = () => {
  const [post, setPost] = useState({});
  const { currentUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const postId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
        // Handle error fetching data (e.g., show error message)
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
      // Handle delete error (e.g., show error message)
    }
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          {post.userImg && <img src="https://www.socialchamp.io/wp-content/uploads/2021/08/katherine-brown.png" alt="" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <img src={Edit} alt="Edit" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="Delete" />
            </div>
          
        </div>
        <h1>Origin and History of Cherry</h1>
        <p
          
        >Cherries occupy a unique position among temperate fruits. The cultivated cherries are divided into two main groups: Sweet cherries (Prunus avium L.) and Sour cherries (Prunus cerasus L.). The cultivation of sweet cherry has been taken up on a commercial scale in Kashmir Valley.

        Cherries are considered natives of Southeast Europe and Asia Minor and as far east as northern India and China. The sweet cherry probably originated between the Black Sea and the Caspian Sea, but birds seem to have carried it into Europe in ancient times.

        Diverse forms of sour cherry exist in Eastern Europe and the western region of the erstwhile Soviet Union. Based on the earliest records, cherry was first domesticated in Greece around 300 B.C. It then spread to Italy and established as a fruit crop by 37 BC.

        By Christ’s time, it had spread to England, Germany, Belgium, and Portugal. Seeds of cherry were brought to North America by early settlers, which eventually spread all over the northern and southernmost parts of South America.</p>
        <p>
          The world production of cultivated cherry fruit is about 2.2 million tonnes. Europe produces 40 percent of the world production. Turkey, USA, Iran, Italy, Spain, Austria, Uzbekistan, Romania, Russia, Ukraine, etc., are the leading cherry-producing countries.

          Cherry cultivation in India is confined to Kashmir, Himachal Pradesh, and hilly areas of Uttarakhand. Jammu and Kashmir is the main cherry-growing state. The total area in this state is 3,500 hectares with an annual production of 10,880 metric tonnes.

          This state produces 70 percent of the total cherry production in India. In Himachal Pradesh, the area under cherry growing is 500 hectares, producing 900 metric tonnes annually. The higher reaches of Shimla, Kullu, Mandi, Chamba, Kinnaur, and Lahaul-Spiti have emerged as ideal for the cultivation of cherry.
        </p>
      </div>
      <Menu cat={post.cat} />
    </div>
  );
};

export default Single;
