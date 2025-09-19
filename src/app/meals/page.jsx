import MealSearch from "./components/MealSearch";

const page = async ({ searchParams }) => {
  const quary = await searchParams;

  const fetchingMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${quary.search}`
      );
      const data = await res.json();
      // setMeals(data?.meals || []);
      return data?.meals;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const meals = await fetchingMeals();
  return (
    <div className=" mt-12">
      <div className="w-2/5 mx-auto">
        <MealSearch />
      </div>
      <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto  mt-12">
        {meals?.map((singleMeal, index) => {
          return (
            <div key={index} className="shadow p-4 bg-gray-100 rounded-md">
              <img
                src={singleMeal?.strMealThumb}
                className="w-full h-[250px]"
                alt=""
              />
              <h4 className="text-2xl font-semibold my-2">
                {singleMeal?.strMeal}
              </h4>
              <h3 className="font-semibold text-xl my-2 text-gray-600">
                {singleMeal?.strArea}
              </h3>
              <p>{singleMeal?.strInstructions.slice(0, 300)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
