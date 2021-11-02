type OscarProps = {
  children: React.ReactNode; //children prop where the type is React.ReactNode
};

export const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};
