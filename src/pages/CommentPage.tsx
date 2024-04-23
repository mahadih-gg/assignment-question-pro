import Card from "../components/common/Card";
import useGetData from "../hooks/useGetData";

const CommentPage = () => {

  const { data: posts } = useGetData("comments", "postId")

  return (
    <div className="grid gap-5">
      {
        posts?.map((post: { name: string, body: string }, i: number) => {
          return (
            <Card key={i} title={post?.name} body={post?.body} />
          )
        })
      }
    </div>
  );
};

export default CommentPage;