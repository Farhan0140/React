import { useForm } from "react-hook-form";

const HookForm = () => {

  const {
    register, 
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className="p-10 w-1/2 m-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label 
            htmlFor="name"
          >
            Name
          </label>
          <input
            {...register("personName", { required: true, minLength: 5 })}
            id="name"
            type="text"
            placeholder="Enter Your Name"
            className="p-3 border rounded-xl w-full my-2 focus:outline-none focus:ring-1 focus:border-none focus:ring-blue-600"
          />
          {errors.personName?.type === "required" && <span className=" text-red-500">● This Field is Required</span>}
          {/*               ^  optional chaining operator (?.)          */}
          {errors.personName?.type === "minLength" && <span className=" text-red-500">● Name must be 5 characters long</span>}


          {/* {console.log(errors.personName.type)} */}
        </div>

        <div>
          <label 
            htmlFor="age"
          >
            Age
          </label>
          <input
            {...register("personAge", { required:true, min: 18 })}
            id="age" 
            type="number" 
            placeholder="Enter Your age" 
            className="p-3 border rounded-xl w-full my-2 focus:outline-none focus:ring-1 focus:border-none focus:ring-blue-600"
          />
          {errors.personAge?.type === "required" && <span className=" text-red-500">● This Field is Required</span>}
          {errors.personAge?.type === "min" && <span className=" text-red-500">● You must be at least 18 years old</span>}
        </div>

        <button
          type="submit"
          className="btn-shadow p-3 rounded-2xl bg-blue-500 text-white font-bold w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default HookForm;