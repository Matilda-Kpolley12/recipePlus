const CommentCard = (props) => {
    return (
      <div className="mt-5 ml-10">
        <div className="flex">
          <img
            src="https://placeimg.com/240/240/people"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <h2 className="text-sm font-bold ml-4 mt-3">{props.commenter}</h2>
        </div>
        <div className="text-sm font-bold">
          <p className="text-xs mt-2 ml-12">{props.comment}</p>
        </div>
      </div>
    );
}

export default CommentCard
