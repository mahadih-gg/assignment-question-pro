import Card from "../components/common/Card";
import useGetData from "../hooks/useGetData";

const PostPage = () => {

  const { data: posts } = useGetData("posts", "userId")

  return (
    <div className="grid gap-5">
      {
        posts?.map((post: { title: string, body: string }, i: number) => {
          return (
            <Card key={i} title={post?.title} body={post?.body} />
          )
        })
      }
    </div>
  );
};

export default PostPage;