import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { IoHomeSharp } from "react-icons/io5";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-8 mt-[8vh] relative">
      <Container>
        <div className="text-center mb-6">
          <h1 className="text-3xl text-orange-500 font-bold ">{post.title}</h1>
        </div>
        <div className="absolute top-[8vh] right-[2vw] ">
            <Link to={'/'} className=" bg-black px-4 py-1 bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white border-black-500 hover:border-transparent rounded">
               Back
            </Link>
        </div>
        <div className="mb-4 text-2xl">
          <b className="text-orange-500 text-3xl">Featured</b> Image:
        </div>
        <div className="w-full flex justify-center mb-4 relative border rounded-xl px-2 py-5">
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl  sm:w-3/4 md:w-1/2 lg:w-2/5"
          />

          {isAuthor && (
            <div className="absolute right-2 top-2 ">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500" className="mr-3">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
        <div>
          <div className="mb-4 text-2xl">
            <b className="text-orange-500 text-3xl">Your</b> blog:
          </div>
          <div className="browser-css text-justify">{parse(post.content)}</div>
        </div>
      </Container>
    </div>
  ) : null;
}
