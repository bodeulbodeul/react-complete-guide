import DUMMY from "./dummy-meals.json";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

export default function AvailableMeals(props) {
  const mealsList = DUMMY.map((item) => {
    return <MealItem key={item.id} name={item.name} description={item.description} price={item.price} />;
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}
