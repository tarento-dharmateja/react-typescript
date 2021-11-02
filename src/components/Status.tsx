type StatusProps = {
  status: "loading" | "success" | "error"; //unioun of string literals
};

export const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") message = "Loading...";
  if (props.status === "success") message = "Data fetched Successfully";
  if (props.status === "error") message = "Error fetching Data";

  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};
