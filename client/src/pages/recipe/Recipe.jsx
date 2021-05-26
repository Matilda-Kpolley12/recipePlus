import { useState } from "react";
import { AiFillFolderOpen } from "react-icons/ai";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import { useUserStore } from "../../state/store";

const Recipe = () => {
  const token = useUserStore((state) => state.token);
  const user = useUserStore((state) => state.user);
  const [recipe, setRecipe] = useState({
    title: "",
    file: "",
    ingredient: "",
  });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const changeHandler = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", recipe.title);
    formData.append("file", recipe.file);
    formData.append("ingredient", recipe.ingredient);
    formData.append("postBy", user._id);


    const options = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .post("/recipe", formData, options)
      .then((result) => console.log("Successful: ", result))
      .catch((err) => console.log("Error: ", err));
  };

  return (
    <div className="w-full">
      <div className="container m-auto shadow-xl">
        <form onSubmit={handleSubmit}>
          <div className=" ml-32">
            <label for="title" className="text-sm font-bold mb-10">
              Recipe Name:
            </label>
            <br />

            <input
              type="text"
              id="title"
              name="title"
              className="focus:outline-none mt-5 w-3/5 bg-gray-100 text-sm font-bold"
              value={recipe.title}
              onChange={handleChange}
            />
          </div>

          <h3 className="text-sm font-bold ml-32 mb-5">Upload file</h3>

          <div className="border-dotted border-2 border-black w-3/5 h-40 ml-32 mb-10 content-center">
            <AiFillFolderOpen className="ml-60 text-recipeRed-800 text-opacity-69 text-3xl mt-10 mb-5" />
            <input
              type="file"
              name="file"
              accept="image/*"
              onChange={changeHandler}
              placeholder="Drag & Drop your file here Or Browse "
              className="ml-32 focus:outline-none"
            />
          </div>

          <h1 className="text-sm font-bold mt-10 ml-32 mb-5">
            List of Ingredients and Steps
          </h1>

          <div className="border-solid border border-black w-3/5 h-40 ml-32 mb-10 text-sm">
            <CKEditor
              editor={ClassicEditor}
              data={recipe.ingredient}
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                setRecipe({ ...recipe, ingredient: data });
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
                console.log(recipe);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />
          </div>
          <button
            type="submit"
            className="bg-recipeRed-800 bg-opacity-69 text-white text-sm font-bold ml-96 p-2 focus:outline-none mb-20 mt-24"
          >
            Post Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Recipe;
