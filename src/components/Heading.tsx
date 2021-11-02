type HeadingProps = {
  children: string; // Children props
};

export const Heading = (props: HeadingProps) => {
  return <div>{props.children}</div>;
};
