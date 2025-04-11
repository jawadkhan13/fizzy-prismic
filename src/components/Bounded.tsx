import clsx from "clsx";

type BoundedProps<C extends React.ElementType = "section"> = {
  as?: C;
  className?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<C>;


export const Bounded = <C extends React.ElementType = "section">({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: BoundedProps<C>) => {
  return (
    <Comp className={clsx("px-4 first:pt-10 md:px-6", className)} {...restProps}>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        {children}
      </div>
    </Comp>
  );
};

