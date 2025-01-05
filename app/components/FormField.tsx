import clsx from "clsx";
import { useFormContext } from "react-hook-form";

type Props = {
  prefix?: string;
  placeholder?: string;
  name: string;
};

export const FormField = ({ prefix, placeholder, name }: Props) => {
  const {
    formState: { errors },
    register,
  } = useFormContext();
  const error = errors[name];

  return (
    <div className="grid gap-2">
      <label
        className={clsx(
          "input input-bordered flex items-center gap-2",
          error && "input-error"
        )}
      >
        {prefix}
        <input type="text" placeholder={placeholder} {...register(name)} />
      </label>
      {error && (
        <span className="text-sm text-error">{error.message as string}</span>
      )}
    </div>
  );
};
