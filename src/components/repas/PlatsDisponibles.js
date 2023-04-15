import MealItem from "./MealItem/MealItem";
const MEALS = [
  {
    id: "m1",
    name: "Cheese Burger ",
    description: "steak haché,fromage césar , laitue, tomate ,ketchup",
    prix: "9,500DT",
  },
  {
    id: "m2",
    name: "Pizza mexicaine",
    description: "sauce tomate , mozzarella,viande hachée ",
    prix: "14.500DT",
  },
  {
    id: "m3",
    name: "salade césar ",
    description: "tomate , cuccumber , feta, escalope , shea seeds",
    prix: "11.000DT",
  },
  {
    id: "m4",
    name: "Plat escalope",
    description: "riz , salade grillée , frites , escalope panné",
    prix: "18.600DT",
  },
  {
    id: "m5",
    name: " Sandwich Arizonaaa  ",
    description: " jambon de boeuf , poivrons , piment rouge",
    prix: "7.500DT",
  },
  {
    id: "m6",
    name: "chicken Tacos",
    description: "poulet ,oignion  , laitue , sauce barbecue ",
    prix: "8,900DT",
  },
];

const PlatsDisponibles = () => {
  const mealList = MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      name={meal.name}
      description={meal.description}
      prix={meal.prix}
    />
  ));
  return (
    <section className="meals">
      <ul>{mealList}</ul>
    </section>
  );
};
export default PlatsDisponibles;
