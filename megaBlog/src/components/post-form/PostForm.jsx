import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;

      if (file) {
        appwriteService.deleteFile(post.featuredImage);
      }

      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await appwriteService.uploadFile(data.image[0]);

      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData.$id,
        });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-col space-y-4">
      <div className="w-full px-2">
        <div>
          <Input
            label="Title"
            placeholder="Title"
            className="mb-4"
            {...register("title", { required: true })}
          />
        </div>
        <div>
          <Input
            label="Thumbnail"
            type="file"
            className="mb-4"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
          />
          {post && (
            <div className="mb-4 flex justify-center sm:w-full md:w-1/2 lg:w-1/3">
              <img
                src={appwriteService.getFilePreview(post.featuredImage)}
                alt={post.title}
                className="rounded-lg w-full"
              />
            </div>
          )}
        </div>
        <RTE
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-full px-2 flex justify-center items-center">
        <div className="w-full p-4 flex flex-wrap items-center gap-5">
          <Select
            options={["active", "inactive"]}
            label="Status"
            className="mb-4 w-full md:w-auto"
            {...register("status", { required: true })}
          />
          <Button
            type="submit"
            bgColor={post ? "bg-green-500" : undefined}
            className="w-full md:w-auto"
          >
            {post ? "Update" : "Submit"}
          </Button>
        </div>
      </div>
    </form>
  );
}
