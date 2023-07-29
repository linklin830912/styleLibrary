import DrawerButton from "../../components/formattings/buttons/DrawerButton";
import ButtonsRoute from "../../components/routes/ButtonsRoute";
import ErrorRoute from "../../components/routes/ErrorRoute";
import QuantityPickerRoute from "../../components/routes/QuantityPickerRoute";
import { Button } from "../../stories/Button";

type route = { name: string; value: string; component: () => JSX.Element };
export default route;

export const generalRoutes: route[] = [
  { value: "/buttons", name: "Buttons", component: ButtonsRoute },
  { value: "/icons", name: "Icons", component: ErrorRoute },
  { value: "/typography", name: "Typography", component: ErrorRoute },
];

export const dataEntryRoutes: route[] = [
  {
    value: "/quantity-picker",
    name: "Quantity Picker",
    component: QuantityPickerRoute,
  },
];
