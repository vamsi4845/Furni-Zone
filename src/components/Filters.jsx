import { Form, useLoaderData, Link, useSubmit } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";
const Filters = () => {
  const { meta, params } = useLoaderData();
  const { search, company, category, shipping, order, price } = params;
  const submit = useSubmit();

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(e.currentTarget);
  };

  return (
    <Form 
    onSubmit={handleSubmit}
     className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      <FormSelect
        label="select category"
        name="category"
        list={meta.categories}
        defaultValue={category}
        size="select-sm"
      />
      <FormSelect
        label="select company"
        name="company"
        list={meta.companies}
        defaultValue={company}
        size="select-sm"
      />
      <FormSelect
        label="sort by"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        defaultValue={order}
        size="select-sm"
      />
      <FormRange
        name="price"
        label="select price"
        size="range-sm"
        price={price}
        defaultValue={price}
      />
      <FormCheckbox
        label="free shipping"
        name="shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />
      <button type="submit" className="btn btn-primary btn-sm ">
        SEARCH
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        RESET
      </Link>
    </Form>
  );
};
export default Filters;