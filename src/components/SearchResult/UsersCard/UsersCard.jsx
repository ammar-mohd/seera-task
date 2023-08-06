import { Avatar, Button, Card, CardContent, Typography } from "@mui/material";

const UsersCard = ({ user }) => {
  return (
    <Card className="shadow-md rounded-xl w-[300px] flex justify-center bg-slate-50">
      <CardContent className="flex justify-center flex-col">
        <div className="flex gap-3 mb-1 items-center justify-center">
          <Avatar
            src={user.avatar_url}
            alt={user.login}
            sx={{ width: 60, height: 60 }}
          />
        </div>
        <Typography
          data-testid="user-name"
          className="truncate text-center mb-7"
          variant="h5"
        >
          {user.login}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          className="text-center"
          component="p"
        >
          Visit Github profile:
        </Typography>
        <Button
          data-testid="profile-button"
          className="mt-3 bg-[#052d40] hover:bg-[#052340] w-[200px] m-auto"
          variant="contained"
          color="info"
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          profile link
        </Button>
      </CardContent>
    </Card>
  );
};

export default UsersCard;
