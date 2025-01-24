import clsx from "clsx";
import { useFormContext } from "react-hook-form";

type Props = {
  prefix?: string;
  placeholder?: string;
  name: string;
  label?: string;
};

export const FormField = ({ prefix, placeholder, name, label }: Props) => {
  const {
    formState: { errors },
    register,
  } = useFormContext();
  const error = errors[name];

  return (
    <div className="grid gap-2">
      {label && <span className="text-md">{label}</span>}
      <label
        className={clsx(
          "input input-bordered flex items-center gap-2",
          error && "input-error"
        )}
      >
        {prefix}
        <input
          type={name === "password" ? "password" : "text"}
          placeholder={placeholder}
          autoComplete="off"
          data-1p-ignore
          {...register(name)}
        />
      </label>
      {error && (
        <span className="text-sm text-error">{error.message as string}</span>
      )}
    </div>
  );
};
