const ProfilePageRecipeCard = (props) => {
    return (
      <>
            <div className="grid grid-cols-2 w-full">
            <img
                src={props.recipeCard}
                alt=""
                className="w-40 h-40 rounded-full"
            />

            <div className="mt-16">
                <h3 className="text-sm">{props.recipeName}</h3>
                <div className="flex">
                <h3 className="text-xs ">{props.likes}</h3>
                <h3 className="text-xs">{props.comments}</h3>
                </div>
            </div>
            </div>
      </>
    );
}

export default ProfilePageRecipeCard
