/** prop type */
type WelcomeProps = {
  name: string;
  messageCount?: number; //optional props
  isLoggedIn: boolean;
};

export const Welcome = ({
  name,
  isLoggedIn,
  messageCount = 0,
}: WelcomeProps) => {
  //const { messageCount = 0 } = props;
  return (
    <div>
      <h2>
        {isLoggedIn
          ? `Welcome ${name}! You have ${messageCount} unread messages`
          : "Welcome Guest!"}
      </h2>
    </div>
  );
};
